import TaskManager from "./components/TaskManager";
import {
  IconButton,
  VStack,
  useColorMode,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  //change theme color
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4} align="stretch">
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="md"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        p="5"
        fontWeight="extrabold"
        size="xl"
        // bgGradient="linear(to-l, #99C0EC, #6D14B6)"
        color="blue.400"
        //bgClip="text"
        alignSelf="center"
      >
        Task Manager
      </Heading>
      <TaskManager />
    </VStack>
  );
}

export default App;
