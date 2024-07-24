import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./componants/ProtectedRoute";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
