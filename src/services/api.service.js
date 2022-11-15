/**
 * HINTS:
 * 1. For the repo issues, be sure to return just the response, and not the actual data.
 * 2. For the repo issues, you'll need to pass in the repo
 * 3. The URL for getting repos by topics looks like this:
 *  'https://api.github.com/search/repositories?q=javascript+is:featured&sort=help-wanted-issues'
 * 4. The URL for getting issues looks like this:
 * 'https://api.github.com/repos/facebook/react/issues?direction=asc'
 * Note that 'facebook/react' is the repo name (you can just use one parameter for this)
 * 5. The URL for getting a user's repos looks like this:
 * 'https://api.github.com/users/USERNAME/repos'
 */

const BASE_URL = "http://api.github.com";

export default {
  getIssuesResponse(nameOfRepo) {
    // Nothing to await, just return the promise.
    // WHoever calls this will await it.
    return fetch(`${BASE_URL}/repos/${nameOfRepo}/issues?direction=asc`);
  },

  async getReposByTopic(topic) {
    const response = await fetch(
      `${BASE_URL}/search/repositories?q=${topic}+is:featured&sort=help-wanted-issues`
    );

    // This Promise will need to be awaited by the caller
    return response.json();
  },
  // TODO: Add methods for getting repos by topic, issues, and user repos
};


async getReposByUsername(username) {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`);

  // This Promise will need to be awaited by the caller.
  return response.json();
}