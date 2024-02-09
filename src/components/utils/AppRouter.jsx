import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import BookListWithButtons from "../../pages/Books";
import BookDetails from "../../pages/BookDetails";
import Error from "../../pages/Error";
import About from "../../pages/About";
import Checkout from "../../pages/Checkout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookListWithButtons />} />
      <Route path="/books/:bookId" element={<BookDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;
