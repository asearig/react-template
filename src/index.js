import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import './index.css';
import App from './App';
import theme from "./themes/main"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider } from "@material-ui/core/styles"

const Application = (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
)

ReactDOM.render(Application, document.getElementById("root"))