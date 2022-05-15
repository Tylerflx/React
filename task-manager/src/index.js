import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  color: {
    brand: {
      500: "#99C0EC",
    },
  },
};

const theme = extendTheme({
  config,
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
