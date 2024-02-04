import axios from "axios";

export const fetchBooks = async (category) => {
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

    let formattedBooks = [];

    if (response.data.items) {
      formattedBooks = response.data.items
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
        .filter((book) => book.imageUrl && book.description);
    }

    return formattedBooks;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
export const getPopularBooks = async () => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes",
      {
        params: {
          q: "subject:popular",
          orderBy: "relevance",
          maxResults: 6,
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
      }))
      .filter((book) => book.imageUrl);
    return formattedBooks;
  } catch (error) {
    console.error("Error fetching popular books:", error);
    return [];
  }
};

export const getBookById = async (bookId) => {
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
          response.data.volumeInfo.description || "No description available",
        pageCount: response.data.volumeInfo.pageCount || 0,
        publisher: response.data.volumeInfo.publisher || "Unknown Publisher",
      };
      return formattedBook;
    } else {
      console.error("Book not found");
      return {};
    }
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    return {};
  }
};
