import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Task from "../views/Task";
import QrCode from "../views/QrCode";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/task" exact element={<Task />} />
        <Route path="/task/:id" exact element={<Task />} />
        <Route path="/qrcode" exact element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
