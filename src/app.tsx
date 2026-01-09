import type { FC } from 'react'
import { TaskAppender } from './task-appender'
import { TaskProviderFC } from './taskContext' 
import { TaskList } from './TaskList';

export const App: FC = () => {
  return (
    <TaskProviderFC>  {/* ← NEU! Provider umschließt alles */}
      <div
        className={`
          w-full min-h-screen
          flex flex-col items-center
          py-20
          bg-slate-900
        `}>
        <img
          src="/logo.png"
          className="w-16 h-16"
          alt="logo"
        />
        <h1
          className={`
            text-white text-4xl mt-6 mb-10 font-black
          `}>
          {' '}
          To-do App{' '}
        </h1>
        <TaskAppender />
        <TaskList />
      </div>
      
    </TaskProviderFC>  
  )
}
