import React, { useState } from "react";
import Modal from "./Modal";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Button, FormControl, Input, Textarea } from "@chakra-ui/react";
import "../addTask.css";

function AddTask({ onClose, open }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // async function that adds a new doc to tasks collection using addDoc
  // adding the following fields: title, desc, complete status, time task created
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), {
        title: title,
        description: description,
        completed: false,
        task_created: Timestamp.now(),
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLabel="Add New Task" onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className="addTask" name="addTask">
        <Input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
          placeholder="Enter title"
          variant="flushed"
          color="white"
        />
        <Textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          color="white"
          value={description}
        ></Textarea>
        <Button colorScheme="twitter" variant="outline" type="submit">
          Add
        </Button>
      </form>
    </Modal>
  );
}

export default AddTask;
