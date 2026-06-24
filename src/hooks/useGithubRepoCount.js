import { useEffect, useState } from "react";

function useGitHubRepoCount(username) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setCount(data.public_repos));
  }, [username]);

  return count;
}
export default useGitHubRepoCount