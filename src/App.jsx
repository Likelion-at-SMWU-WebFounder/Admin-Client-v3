import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";

import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import QuestionPage from "./pages/recruit/QuestionPage";
import QuestionEditPage from "./pages/recruit/QuestionEditPage";
import ApplyStatusPage from "./pages/recruit/ApplyStatusPage";
import DocsDetailPage from "./pages/recruit/DocsDetailPage";
import InitApplyPage from "./pages/recruit/InitApplyPage";
import DocsPassPage from "./pages/recruit/DocsPassPage";
import FinalPassPage from "./pages/recruit/FinalPassPage";
import InterviewTimePage from "./pages/recruit/InterviewTimePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename="/">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/apply"
            element={
              <PrivateRoute>
                <ApplyStatusPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/pass"
            element={
              <PrivateRoute>
                <DocsPassPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/document"
            element={
              <PrivateRoute>
                <QuestionPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/editdocument"
            element={
              <PrivateRoute>
                <QuestionEditPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/apply/:joinerId"
            element={
              <PrivateRoute>
                <DocsDetailPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/interview"
            element={
              <PrivateRoute>
                <InterviewTimePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/pass-final"
            element={
              <PrivateRoute>
                <FinalPassPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/init-applicant"
            element={
              <PrivateRoute>
                <InitApplyPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
