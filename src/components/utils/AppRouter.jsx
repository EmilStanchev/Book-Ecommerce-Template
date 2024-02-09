import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import BookListWithButtons from "../../pages/Books";
import BookDetails from "../../pages/BookDetails";
import Error from "../../pages/Error";
import About from "../../pages/About";
import Checkout from "../../pages/Checkout";
import Contact from "../../pages/Contact";
import ScrollToTop from "../../navigation/ScrollToTop";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookListWithButtons />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default AppRouter;
