export function Button({ children, onClick }) {
  return (
    <button
      className="flex gap-1 items-center justify-center p-2 rounded-lg border-b-4 border-blue-600 transition active:border-b-2 active:mt-2p text-base text-white bg-blue-500 hover:opacity-80"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
