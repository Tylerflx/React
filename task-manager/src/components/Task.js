import "../task.css";
import { Text } from "@chakra-ui/react";

function Task({ id, title, description, task_created }) {
  return (
    <div className="task__body">
      <Text fontSize="xl" color="blue.500" fontWeight="medium">
        {title}
      </Text>
      <Text fontSize="md">{description}</Text>
    </div>
  );
}

export default Task;
