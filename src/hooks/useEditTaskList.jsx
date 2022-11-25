import { useCallback } from "react";
import { useTaskListToggleContext } from "../components/TaskListProvider";

function useEditTaskList() {
  const setTaskList = useTaskListToggleContext();

  const toggleTask = useCallback((index, name) => {
    setTaskList((previousTasks) => [
      ...previousTasks.slice(0, index),
      {
        name: name,
        completed: previousTasks[index].completed
      },
      ...previousTasks.slice(index + 1)
    ]);
  }, []);

  return toggleTask;

}

export default useEditTaskList