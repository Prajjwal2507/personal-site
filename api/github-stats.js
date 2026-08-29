const GITHUB_API = "https://api.github.com";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const username =
    (req.query && req.query.username) ||
    process.env.GITHUB_USERNAME ||
    "Prajjwal2507";

  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "prajjwal-portfolio/1.0",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const userRes = await fetch(`${GITHUB_API}/users/${username}`, { headers });
    if (!userRes.ok) throw new Error(`GitHub responded with ${userRes.status}`);
    const user = await userRes.json();

    // Best-effort star aggregation across public repos (first 100 is plenty here).
    let totalStars = 0;
    try {
      const reposRes = await fetch(
        `${GITHUB_API}/users/${username}/repos?per_page=100&type=owner&sort=updated`,
        { headers }
      );
      if (reposRes.ok) {
        const repos = await reposRes.json();
        totalStars = repos.reduce(
          (sum, repo) => sum + (repo.stargazers_count || 0),
          0
        );
      }
    } catch {
      /* ignore star fetch errors — non-critical */
    }

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    return res.status(200).json({
      username: user.login,
      name: user.name,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      profileUrl: user.html_url,
    });
  } catch (err) {
    return res.status(502).json({
      error: err.message || "Failed to fetch GitHub data.",
    });
  }
}
