import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import { useState } from "react";
import Form from "./components/Form/Form";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Dashboard theme={theme} setTheme={setTheme} />}
            />
            <Route
              path="/orders"
              element={<Orders theme={theme} setTheme={setTheme} />}
            />
          </Routes>
        </Router>
        <Form />
      </div>
    </div>
  );
}

export default App;
