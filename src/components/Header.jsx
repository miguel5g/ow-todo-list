export function Header({ complete, total }) {
  return (
    <header className="flex flex-col items-center text-center py-4 sm:py-8 px-8 md:px-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-b-3xl shadow-lg">
      <h1 className="text-white text-4xl font-black">One Week ToDo</h1>
      <p className="text-gray-100 text-base md:text-lg font-normal">
        Aplicativo para criação de tarefas
      </p>

      <span className="text-gray-100 text-base md:text-lg font-normal mt-2 md:mt-4">
        Tarefas feitas{" "}
        <strong className="text-white font-medium">{`${complete}/${total}`}</strong>
      </span>
    </header>
  );
}
