// @ts-nocheck
export const getGithubRepos = async (username, token) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  const data = await response.json();
  return data;
};

export const getSpesificLanguageRepos = async (username, token, repo) => {
  const response = await fetch(`https://api.github.com/repos/${username}/${repo}/languages`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  const data = await response.json();
  return data;
}