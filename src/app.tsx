import { Moon, Sun } from "@phosphor-icons/react";
import ModalForgotPassword from "./components/modal-forgot-password";
import { useState } from "react";
import Login from "./components/login";

export default function App() {
  const [openModal, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(!openModal);
  }

  return (
    <div className="bg-amethyst-50 rounded-lg w-full h-screen flex justify-center items-center relative">
      {/* switch button */}
      <div className="absolute right-4 top-4">
        <div className="relative border border-amethyst-900 w-16 bg-amethyst-100 h-6 rounded-full flex items-center justify-end">
          {/* SWITCH SUN */}
          <div className="absolute -right-1.5 rounded-full p-2 bg-white size-8 shadow-md">
            <Sun className="text-amethyst-950" />
          </div>
          {/* SWITCH MOON */}
          {/* <div className="absolute -left-1.5 rounded-full p-2 bg-white size-8 shadow-md">
              <Moon className="text-amethyst-950" />
            </div> */}
        </div>
      </div>

      <div className="space-y-8 flex flex-col items-center">
        <img src="public/codeleap-logo.svg" alt="logo" width={100} />

        <Login handleOpenModal={handleOpenModal} />
      </div>

      {openModal && <ModalForgotPassword openModal={handleOpenModal} />}
    </div>
  );
}
