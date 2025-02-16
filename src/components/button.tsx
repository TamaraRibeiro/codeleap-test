interface ButtonProps {
  text: string
  action?: () => void
}
export default function Button({text, action}: ButtonProps) {
  return (
    <button onClick={action} className="bg-amethyst-300 border border-amethyst-600 text-amethyst-950 rounded-lg px-6 py-1.5 text-center text-sm w-full mx-auto uppercase font-semibold hover:bg-amethyst-500 hover:border-amethyst-700 transition ease-in-out duration-300 cursor-pointer">
      {text}
    </button>
  );
}
