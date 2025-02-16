import Button from "./button";

export default function ModalForgotPassword({openModal}: {openModal: () => void}) {
  return (
    <div className="absolute flex justify-center items-center w-full h-full bg-[#F2F2FB]/90 rounded-lg">
      <div className="space-y-6 px-14 py-10 flex flex-col border border-amethyst-950 bg-amethyst-50 rounded-lg max-w-84 z-10">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-950 font-semibold leading-5">
            Email:
          </label>
          <input
            type="text"
            name="email"
            className="bg-amethyst-100 rounded-sm shadow-md"
          />
        </div>
        <Button text="Reset password" action={openModal} />
      </div>
    </div>
  );
}
