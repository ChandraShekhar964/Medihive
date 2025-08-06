import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Verify from "./pages/Verify";

const Login = lazy(() => import("./pages/Login"));
const Appointment = lazy(() => import("./pages/Appointment"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-4 sm:mx-[10%]">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
