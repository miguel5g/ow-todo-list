import Head from "next/head";
import { useState } from "react";

import { Header } from "../components/Header";
import { Container, Main } from "../components/Home";
import { CreateToDo, ToDoItem, ToDoList } from "../components/ToDo";
import { Footer } from "../components/Footer";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function handlerCreateTask(data) {
    setTasks([...tasks, data]);
  }

  function handlerRemoveTask(id) {
    if (!id) throw new Error("Invalid task id");

    if (!tasks.find((task) => task.id === id))
      throw new Error("ID not founded");

    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handlerCompleteTask(id) {
    if (!id) throw new Error("Invalid task id");

    if (!tasks.find((task) => task.id === id))
      throw new Error("ID not founded");

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, is_completed: true } : task
      )
    );
  }

  return (
    <Container>
      <Head>
        <title>One Week ToDo</title>
      </Head>

      <Header
        complete={tasks.filter((task) => task.is_completed).length}
        total={tasks.length}
      />

      <Main>
        <CreateToDo onCreate={handlerCreateTask} />

        {tasks && tasks.length > 0 ? (
          <ToDoList>
            {tasks
              .sort((a, b) => b.is_completed - a.is_completed)
              .map((task) => (
                <ToDoItem
                  key={task.id}
                  data={task}
                  onComplete={handlerCompleteTask}
                  onRemove={handlerRemoveTask}
                />
              ))}
          </ToDoList>
        ) : (
          <div className="flex flex-col items-center justify-center text-center flex-1 p-4">
            <h2 className="text-2xl text-black font-semibold mb-2">
              Nenhuma tarefa criada...
            </h2>
            <p className="text-gray-500 text-base font-light">
              Crie uma tarefa para começar, por exemplo: Arrumar a casa
            </p>
          </div>
        )}
      </Main>

      <Footer />
    </Container>
  );
}
