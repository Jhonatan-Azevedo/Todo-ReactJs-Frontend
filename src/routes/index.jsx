import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Task from "../views/Task";
import QrCode from "../views/QrCode";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/task" exact element={<Task />} />
        <Route path="/task/:id" exact element={<Task />} />
        <Route path="/qrcode" exact element={<QrCode />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
