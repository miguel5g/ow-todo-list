import classNames from "classnames";
import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { FiCheck, FiTrash2 } from "react-icons/fi";

import styles from "../../styles/components/todo-item.module.css";

export function ToDoItem({ data, onRemove, onComplete }) {
  return (
    <li
      className={classNames([
        styles.todoItem,
        data.is_completed ? styles.todoItemCompleted : null,
      ])}
    >
      <div className="flex flex-col flex-1 overflow-hidden">
        <h3 className={styles.todoItemTitle}>{data.title}</h3>
        {/* <p className={styles.todoItemDescription}>{data.description}</p> */}
        <span className="text-gray-700 text-sm font-light mt-2">
          Criado em
          {format(data.created_at, " dd/LL/uuuu & HH:mm", {
            locale: ptBR,
          }).replace("&", "as")}
        </span>
      </div>
      <div className="flex items-center justify-center gap-1">
        {data.is_completed && (
          <button
            className={styles.todoItemRemoveButton}
            onClick={() => onRemove(data.id)}
          >
            <FiTrash2 />
          </button>
        )}
        {!data.is_completed && (
          <button
            className={styles.todoItemCheckButton}
            onClick={() => onComplete(data.id)}
          >
            <FiCheck />
          </button>
        )}
      </div>
    </li>
  );
}
