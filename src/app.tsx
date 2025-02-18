import ModalForgotPassword from "./components/modal-forgot-password";
import { useState } from "react";
import Login from "./components/login";
import SwitchMode from "./components/switch-mode";

export default function App() {
  const [openModal, setModalOpen] = useState(false);
  
  
  function handleOpenModal() {
    setModalOpen(!openModal);
  }

  return (
    <div className="bg-amethyst-50 rounded-lg w-full h-screen flex justify-center items-center relative">
      <SwitchMode />

      <div className="space-y-8 flex flex-col items-center">
        <img src="/codeleap-logo.svg" alt="logo" width={100} />

        <Login handleOpenModal={handleOpenModal} />
      </div>

      {openModal && <ModalForgotPassword openModal={handleOpenModal} />}
    </div>
  );
}
