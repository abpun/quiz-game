import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./config/themes";
import CssBaseline from "@mui/material/CssBaseline";
import Store from "./redux/store";
import App from "./App";
import "./index.css";

const Root = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  return (
    <React.StrictMode>
      <Provider store={Store}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <App currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        </ThemeProvider>
        <ToastContainer />
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Root />);
