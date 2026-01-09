import { type FC, useContext, useState } from 'react' 
import { TaskContext } from './taskContext';


export const TaskAppender: FC = () => {
  const context = useContext(TaskContext);
  const { addTask: addTaskToContext } = context || {};
  
  const [target, setTarget] = useState('');

const addTask = () => {
  if (target.trim() && addTaskToContext) {
    addTaskToContext(target);
    setTarget('');
    
  }


}



  return (
    <div
      className={`
    relative flex flex-row gap-4
  `}>
      <input
        value={target}
        onChange={e => setTarget(e.target.value)}
        className="
    bg-slate-300 text-black
    rounded-3xl items-center w-lg
    grow min-h-12 pl-6 pr-28 py-2 font-medium"
        onKeyDown={e => {
          if (e.code === 'Enter') {
            addTask()
          }
        }}
      />

      <button
        type="button"
        className={`
      absolute right-0 translate-x-2 top-1/2 -translate-y-1/2
      border-4 border-blue-800 bg-blue-400 cursor-pointer
      px-6 py-2 mr-2 rounded-r-3xl`}
        onClick={addTask}>
        Add
      </button>
       </div>
  )
}
