import "../task-manager.css";
import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Button } from "@chakra-ui/react";

function TaskManager() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskRef = query(
      collection(db, "tasks"),
      orderBy("task_created", "desc")
    );
    onSnapshot(taskRef, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="taskManager">
      <div className="taskManager__container">
        <Button
          colorScheme="facebook"
          variant="ghost"
          size="lg"
          alignSelf="center"
          onClick={() => setOpenAddModal(true)}
        >
          Add task +
        </Button>
        <div className="taskManager__tasks">
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              task_completed={task.data.task_created}
              title={task.data.title}
              description={task.data.description}
            />
          ))}
        </div>
      </div>
      {openAddModal && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}
export default TaskManager;
