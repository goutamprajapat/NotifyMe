import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Header from "./components/Header/Header";
import Login from "./components/Form/Login";
import SignUp from "./components/Form/SignUp";
const App = () => {
   return (
      <>
      <Header/>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<SignUp />} />
         </Routes>
      </>
   );
};

export default App;
