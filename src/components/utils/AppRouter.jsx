import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import BookListWithButtons from "../../pages/Books";
import BookDetails from "../books/BookDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookListWithButtons />} />
      <Route path="/books/:bookId" element={<BookDetails />} />
    </Routes>
  );
};
export default AppRouter;
