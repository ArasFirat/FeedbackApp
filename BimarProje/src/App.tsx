import { useState } from "react";
import "./App.css";
import HoverRating from "./components/mui components/rating";
import { Box } from "@mui/material";
import HomePage from "./pages/homePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage></HomePage>
    </>
  );
}

export default App;
