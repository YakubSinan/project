import React, { createContext, useState, useEffect, type FC, type ReactNode } from 'react';

// 1. Wie sieht ein einzelner Task aus?
export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

// 2. Was kann unser Context alles?
interface TaskContextType {
    tasks: Task[];
    addTask: (title: string) => void;
    deleteTask: (id: string) => void;
}

// 3. Den Context erstellen
export const TaskContext = createContext<TaskContextType | undefined>(undefined);

// 4. Der Provider (Die Logik-Maschine)
export const TaskProviderFC: FC<{ children: ReactNode }> = ({ children }) => {
    
    // START: Local Storage Logik
    // Wir schauen beim Start in den Speicher. Wenn da nichts ist, nehmen wir eine leere Liste [].
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem("meine-tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // Immer wenn sich "tasks" ändert, speichern wir die neue Liste im Browser.
    useEffect(() => {
        localStorage.setItem("meine-tasks", JSON.stringify(tasks));
    }, [tasks]);
    // ENDE: Local Storage Logik

    const addTask = (title: string) => {
        const newTask: Task = {
            id: Date.now().toString(), // Einzigartige ID als String
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