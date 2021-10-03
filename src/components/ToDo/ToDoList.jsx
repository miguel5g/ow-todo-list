export function ToDoList({ children }) {
  return (
    <div className="flex flex-col mt-8 gap-4">
      {/*<h2 className="text-black text-xl font-medium mx-auto">Suas tarefas</h2>*/}

      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}
