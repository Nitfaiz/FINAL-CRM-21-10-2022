import "./App.css";
import { useEffect, useState } from "react";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import CustomerData from "./components/CustomerData";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./components/css/formStyle.css";
import Newcontact from "./components/Newcontact";
// import Forms from "./components/Form";
function App() {
  const [isUserLogin, setUserLogin] = useState(localStorage.getItem("isLogin") == "true" ? true : false);
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin") == "true" ? true : false;
    setUserLogin(isLogin)
  }, localStorage.getItem("isLogin"))
  return (
    <div style={{display: isUserLogin ? "flex" : "grid"}}>
      <Router>
        { isUserLogin && <SideBar />}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/newcontact" element={<Newcontact />} />


          {/* <Route path="/form" element={<Forms />} /> */}

          <Route path="/sales/newcontact" element={<Newcontact />} />


          <Route path="*" element={isUserLogin ? "not found" : <Login />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
