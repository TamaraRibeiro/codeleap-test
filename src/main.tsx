import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app";
import CreateAccount from "./components/create-account";
import Home from "./components/home";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
