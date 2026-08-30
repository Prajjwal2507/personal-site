const LEETCODE_URL = "https://leetcode.com/graphql/";

const QUERY = `
  query getUserData($username: String!) {
    matchedUser(username: $username) {
      username
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        ranking
      }
      userCalendar {
        streak
        totalActiveDays
        submissionCalendar
      }
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const username =
    (req.query && req.query.username) ||
    process.env.LEETCODE_USERNAME ||
    "prajjwal_rajput";

  try {
    const response = await fetch(LEETCODE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "prajjwal-portfolio/1.0",
      },
      body: JSON.stringify({ query: QUERY, variables: { username } }),
    });

    if (!response.ok) {
      throw new Error(`LeetCode responded with ${response.status}`);
    }

    const json = await response.json();
    const user = json?.data?.matchedUser;
    if (!user) {
      return res.status(404).json({ error: "LeetCode user not found." });
    }

    const stats = { easy: 0, medium: 0, hard: 0, total: 0 };
    for (const entry of user.submitStats?.acSubmissionNum ?? []) {
      const key = entry.difficulty.toLowerCase();
      if (key === "all") stats.total = entry.count;
      else if (key === "easy") stats.easy = entry.count;
      else if (key === "medium") stats.medium = entry.count;
      else if (key === "hard") stats.hard = entry.count;
    }

    let calendar = {};
    try {
      calendar = JSON.parse(user.userCalendar?.submissionCalendar || "{}");
    } catch {
      calendar = {};
    }

    // Cache at the edge for 10 min; serve stale briefly while revalidating.
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=600, stale-while-revalidate=120"
    );

    return res.status(200).json({
      username: user.username,
      ranking: user.profile?.ranking ?? null,
      streak: user.userCalendar?.streak ?? 0,
      totalActiveDays: user.userCalendar?.totalActiveDays ?? 0,
      stats,
      calendar,
    });
  } catch (err) {
    return res.status(502).json({
      error: err.message || "Failed to fetch LeetCode data.",
    });
  }
}
