import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Header from "./components/Header/Header";
import Login from "./components/Form/Login";
import SignUp from "./components/Form/SignUp";
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Header />} >
            <Route index element={<Main />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<SignUp />} />
         </Routes>
      </>
   );
};

export default App;
