import axios from "axios";

export async function scrapeGithub(username: string) {
    const userRepos = await axios.get(`https://api.github.com/users/${username}/repos`, {
        proxy: {
            host
        },
    })
}