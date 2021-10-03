import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export function CreateToDo({ onCreate }) {
  const [title, setTitle] = useState("");

  function handlerCreateTask() {
    if (!title) return;

    const newTask = {
      id: uuid(),
      title,
      is_completed: false,
      created_at: new Date(),
    };

    onCreate(newTask);
    setTitle("");
  }

  return (
    <header className="flex flex-col w-full md:w-max max-w-screen-sm mx-auto text-center">
      <h2 className="flex flex-1 bg-gray-100 items-center justify-center p-2 rounded-lg border border-gray-200 text-black text-xl font-medium">
        Adicionar novas tarefas
      </h2>

      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <TextInput
          placeholder="Fazer um bolo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={handlerCreateTask}>Adicionar</Button>
      </div>
    </header>
  );
}
