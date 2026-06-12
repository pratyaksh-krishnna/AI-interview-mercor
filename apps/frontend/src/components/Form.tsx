
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
 import axios from "axios";
import { toast } from "sonner";
import { BACKEND_URL } from "../lib/config";

export function Form() {
    const [linkedin,setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    
    function onSubmit() {
        if(!linkedin || !github) {
            toast ("please provide both linkedin and github urls")
            return;
        }
    }

    axios.post(`${BACKEND_URL}/api/v1/pre-interview`, { linkedin, github })

    
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <Input placeholder="Linkedin Url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)}/>
      <Input placeholder="Github Url" value={github} onChange={(e) => setGithub(e.target.value)}/>
    <Button onClick={onSubmit}>Start Interview</Button>
    </div>
  );
}