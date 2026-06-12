import express from "express";
import { PreInterviewBody } from "./types";
import axios from "axios";
import { scrapeGithub } from "./scrapers/github";

const app = express();

app.use(express.json());

app.post("/api/v1/pre-interview", async (req, res) => {
    const { success, data } = PreInterviewBody.safeParse(req.body);
    if (!success) {
        res.status(411).json({ error: "Invalid request body" });
        return;
    }
    // Todo : apply the logic of slm to extract correct username from slm later
    const githubUrl = data.github.endsWith("/") ? data.github.slice(0, -1) : data.github;
    const linkedinUrl = data.linkedin.endsWith("/") ? data.linkedin.slice(0, -1) : data.linkedin;
    
    const githubUsername = githubUrl.split("/").pop() || "";
    const linkedinUsername = linkedinUrl.split("/").pop() || "";

    const githubData=await scrapeGithub(githubUsername);
});

    // scrapping the linkedin profile to get the user's experience



app.listen(3000, () => console.log("Server is running on port 3000"));