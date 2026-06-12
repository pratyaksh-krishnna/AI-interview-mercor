import "../styles/globals.css";
import { useState } from "react";
import { Interview } from "./components/Interview";
import { Result } from "./components/Result";
import { Form } from "./components/Form";
import { Toaster } from "sonner";

export function App() {
  const [page,setPage] = useState<"form" | "interview" | "results">("form");
  return (
    <div>
      {page == "form" && <Form />}
      {page == "interview" && <Interview   />}
      {page == "results" && <Result />}
      <Toaster />
    </div>
  );
}

export default App;