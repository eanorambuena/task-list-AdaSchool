import React, { useContext, useState } from 'react'

const taskListContext = React.createContext();
const taskListToggleContext = React.createContext();

export function useTaskListContext() {
    return useContext(taskListContext);
}

export function useTaskListToggleContext() {
    return useContext(taskListToggleContext);
}

function TaskListProvider({children}) {
    const [taskList, setTaskList] = useState([]);

  return (
    <taskListContext.Provider value = {taskList}>
        <taskListToggleContext.Provider value = {setTaskList}>
            {children}
        </taskListToggleContext.Provider>
    </taskListContext.Provider>
  )
}

export default TaskListProvider