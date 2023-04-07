import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Forgot from "./pages/Forgot";
import Offers from "./pages/Offers";
import Header from "./components/Header";
function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/sign-In" element={<SignIn />}></Route>
        <Route path="/sign-Up" element={<SignUp />}></Route>
        <Route path="/Forgot" element={<Forgot />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
      </Routes>
    </Router>
    </>
  );
} 

export default App;
