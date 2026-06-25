import { useEffect, useState } from "react";

function useGithubLanguageCount(username) {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        async function fetchLanguages() {
            try {
                
                const reposResponse = await fetch(
                    `https://api.github.com/users/${username}/repos?per_page=100`,
                    { headers: { Authorization: `Bearer ${import.meta.env.VITE_GitHubToken}` } }
                );

                const repos = await reposResponse.json();

                const languageSet = new Set();

                
                await Promise.all(
                    repos.map(async (repo) => {
                        const langResponse = await fetch(repo.languages_url, { headers: { Authorization: `Bearer ${import.meta.env.VITE_GitHubToken}` } });
                        const langs = await langResponse.json();

                        Object.keys(langs).forEach((lang) => {
                            languageSet.add(lang);
                        });
                    })
                );

                setLanguages([...languageSet]);
            } catch (error) {
                console.error("Erro:", error);
            }
        }

        fetchLanguages();
    }, [username]);

    return languages.length
}

export default useGithubLanguageCount;