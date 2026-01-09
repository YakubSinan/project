import React, { createContext, useState, useEffect, type FC, type ReactNode } from 'react';


export interface Task {
    id: string;
    title: string;
    completed: boolean;
}


interface TaskContextType {
    tasks: Task[];
    addTask: (title: string) => void;
    deleteTask: (id: string) => void;
}


export const TaskContext = createContext<TaskContextType | undefined>(undefined);


export const TaskProviderFC: FC<{ children: ReactNode }> = ({ children }) => {
    
 
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem("meine-tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

.
    useEffect(() => {
        localStorage.setItem("meine-tasks", JSON.stringify(tasks));
    }, [tasks]);


    const addTask = (title: string) => {
        const newTask: Task = {
            id: Date.now().toString(), 
            title,
            completed: false,
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
