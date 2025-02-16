export default function Button({text}: {text: string}) {
  return (
    <button className="bg-amethyst-300 border border-amethyst-600 text-amethyst-950 rounded-lg px-6 py-1.5 text-center text-base w-40 mx-auto uppercase hover:bg-amethyst-500 hover:border-amethyst-700 transition ease-in-out duration-300">
      {text}
    </button>
  );
}
