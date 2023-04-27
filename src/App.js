import "./App.css";
import Banner from "./Components/Banner/Banner";
import Blogs from "./Components/Blogs/Blogs";
import Category from "./Components/Category/Category";
import Cities from "./Components/Cities/Cities";
import Companies from "./Components/Companies/Companies";
import Dayjobs from "./Components/Dayjobs/Dayjobs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Mobileapp from "./Components/Mobileapp/Mobileapp";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/Sign in/Signin";
import Signup from "./Components/SignUp/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/signin"
          element={
            <>
              <div className="">
                <Navbar />
              </div>
              <div className="sigup">
                <Signin />
              </div>
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <div className="">
                <Navbar />
              </div>
              <div className="sigup">
                <Signup />
              </div>
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
             <div>
        <Navbar />
      </div>
      <div className="Home">
        <Home />
      </div>
      <div className="category">
        <Category />
      </div>

      <div>
        <Banner />
      </div>

      <div>
        <Dayjobs />
      </div>

      <div>
        <Cities />
      </div>

      <div>
        <Companies />
      </div>

      <div>
        <Mobileapp />
      </div>

      <div>
        <Blogs />
      </div>

      <div>
        <Footer />
      </div>
            </>
          }
        />

      </Routes>
      
    </>
  );
}

export default App;
