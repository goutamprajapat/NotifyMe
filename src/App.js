import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Form/Login";
import SignUp from "./components/Form/SignUp";
const App = () => {
   return (
      <>
      <Header/>
         <Login />
         <SignUp />
      </>
   );
};

export default App;
