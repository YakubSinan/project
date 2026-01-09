import { useContext } from 'react';
import { TaskContext } from './taskContext';

export const TaskList = () => {
  const context = useContext(TaskContext);

  // Falls der Context leer ist (sollte nicht passieren), brechen wir ab
  if (!context) return null;

  const { tasks, deleteTask } = context;

  return (
    <ul className="w-full max-w-lg mt-8 space-y-2">
      {tasks.map((task) => (
        <li 
          key={task.id} 
          className="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl shadow-md border border-slate-700"
        >
          <span>{task.title}</span>
          <button 
            onClick={() => deleteTask(task.id)}
            className="text-red-400 hover:text-red-300 font-bold px-2"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
};