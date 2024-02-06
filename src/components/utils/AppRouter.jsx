import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import BookListWithButtons from "../../pages/Books";
import BookDetails from "../books/BookDetails";
import Error from "../../pages/Error";
import About from "../../pages/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookListWithButtons />} />
      <Route path="/books/:bookId" element={<BookDetails />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;
