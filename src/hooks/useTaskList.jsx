import { useCallback } from "react";
import { useTaskListContext, useTaskListToggleContext } from "../components/TaskListProvider";

function useTaskList() {
  const taskList = useTaskListContext();
  const setTaskList = useTaskListToggleContext();

  const createTask = useCallback((name) => {
    const task = {
      name,
      completed: false
    };
    setTaskList((previousTasks) => [...previousTasks, task]);
  }, []);

  const toggleTask = useCallback((index) => {
    setTaskList((previousTasks) => [
      ...previousTasks.slice(0, index),
      {
        ...previousTasks[index],
        completed: !previousTasks[index].completed
      },
      ...previousTasks.slice(index + 1)
    ]);
  }, []);

  return [taskList, createTask, toggleTask];
}

export default useTaskList;