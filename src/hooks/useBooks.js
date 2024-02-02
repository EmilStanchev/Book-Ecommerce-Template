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
              maxResults: 39,
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
