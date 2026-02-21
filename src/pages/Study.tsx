import { useNavigate } from "react-router-dom";
import AINotebookPage from "@/components/AINotebookPage";

const DEFAULT_MODULES = [
  { number: 1, title: "GenAI & the Future of Work", topics: ["Generative AI landscape", "Impact on industries", "Future workforce skills"] },
  { number: 2, title: "Creative Problem Solving + Vibe Coding", topics: ["Design thinking with AI", "Vibe coding methodology", "Rapid prototyping"] },
  { number: 3, title: "Agentic AI Systems", topics: ["Agent architectures", "Tool use & function calling", "Multi-agent systems"] },
  { number: 4, title: "Implementation + Human-AI Decision-Making", topics: ["AI deployment strategies", "Human-in-the-loop", "Ethical considerations"] },
  { number: 5, title: "GenAI & Agentic Fair", topics: ["Capstone projects", "Fair presentations", "Industry applications"] },
];

const Study = () => {
  const navigate = useNavigate();

  return (
    <AINotebookPage
      context="Machine Learning & AI for Business Applications"
      courseName="Machine Learning & AI for Business Applications"
      modules={DEFAULT_MODULES}
      initialModuleIndex={null}
      onClose={() => navigate("/")}
    />
  );
};

export default Study;
