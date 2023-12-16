import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Board from "./pages/Board";
import MyTodo from "./pages/MyTodo";
import MyInfo from "./pages/MyInfo";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="App" class="flex flex-col h-screen">
      <BrowserRouter>
        <Header class="h-10" />
        <Routes>
          <Route path="/" element={<Board />}></Route>
          <Route path="/my/info" element={<MyInfo />} />
          <Route path="/my/todo" element={<MyTodo />} /> }
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
