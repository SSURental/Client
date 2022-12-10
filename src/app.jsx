import "./app.css";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Main from "./pages/main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Rent from "./pages/rent";
import Board from "./pages/board";
import Chat from "./pages/chat";
import Product from "./components/product";
import ProductEnroll from "./pages/productEnroll";
import Article from "./components/article";
import ArticleEnroll from "./pages/articleEnroll";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signUp" element={<SignUp />}></Route>
          <Route exact path="/rent" element={<Rent />}></Route>
          <Route exact path="/board" element={<Board />}></Route>
          <Route exact path="/chat" element={<Chat />}></Route>
          <Route exact path="/rent/product" element={<Product />}></Route>
          <Route exact path="/rent/enroll" element={<ProductEnroll />}></Route>
          <Route exact path="/board/article" element={<Article />}></Route>
          <Route exact path="/board/enroll" element={<ArticleEnroll />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
