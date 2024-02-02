import { useState, useEffect } from "react";
import axios from "axios";

export const useBooks = (category) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params: {
              q: category,
              maxResults: 40,
            },
          }
        );

        const formattedBooks = response.data.items
          .map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors || ["Unknown Author"],
            imageUrl: book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "",
            category: book.volumeInfo.categories
              ? book.volumeInfo.categories[0]
              : "Uncategorized",
            description:
              book.volumeInfo.description || "No description available",
          }))
          .filter((book) => book.imageUrl && book.description); // Filter out books without image or description

        setBooks(formattedBooks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [category]);

  return { books, loading };
};

export const usePopularBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params: {
              q: "subject:popular",
              orderBy: "relevance",
              maxResults: 2,
            },
          }
        );

        const formattedBooks = response.data.items.map((book) => ({
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors || ["Unknown Author"],
          imageUrl: book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "",
          category: book.volumeInfo.categories
            ? book.volumeInfo.categories[0]
            : "Uncategorized",
        }));

        setBooks(formattedBooks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular books:", error);
        setLoading(false);
      }
    };

    fetchPopularBooks();
  }, []);

  return { books, loading };
};

export const useBookById = (bookId) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );

        if (response.data && response.data.volumeInfo) {
          const formattedBook = {
            id: response.data.id,
            title: response.data.volumeInfo.title,
            authors: response.data.volumeInfo.authors || ["Unknown Author"],
            imageUrl: response.data.volumeInfo.imageLinks
              ? response.data.volumeInfo.imageLinks.thumbnail
              : "",
            category: response.data.volumeInfo.categories
              ? response.data.volumeInfo.categories[0]
              : "Uncategorized",
            description:
              response.data.volumeInfo.description ||
              "No description available",
            pageCount: response.data.volumeInfo.pageCount || 0,
            publisher:
              response.data.volumeInfo.publisher || "Unknown Publisher",
          };

          setBook(formattedBook);
          setLoading(false);
        } else {
          console.error("Book not found");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching book by ID:", error);
        setLoading(false);
      }
    };

    fetchBook();
  }, []);

  return { book, loading };
};
