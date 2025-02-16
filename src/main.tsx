import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app";
import CreateAccount from "./components/create-account";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  </BrowserRouter>
);
