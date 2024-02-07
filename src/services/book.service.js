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
        .map((book) => formatBook(book))
        .filter((book) => book.imageUrl && book.description);
    }

    return formattedBooks;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
export const getBooksByCategory = async (category) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes",
      {
        params: {
          q: `subject:${category}`,
          orderBy: "relevance",
          maxResults: 5,
        },
      }
    );

    const formattedBooks = response.data.items
      .map((book) => formatBook(book))
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
      const formattedBook = formatBook(response?.data);
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
const getPrice = (responseData) => {
  if (
    responseData &&
    responseData.saleInfo &&
    responseData.saleInfo.listPrice &&
    responseData.saleInfo.listPrice.amount
  ) {
    return responseData.saleInfo.listPrice.amount;
  } else {
    return 15;
  }
};
const formatBook = (bookData) => {
  const book = {
    id: bookData.id,
    title: bookData.volumeInfo.title,
    authors: bookData.volumeInfo.authors || ["Unknown Author"],
    imageUrl: bookData.volumeInfo.imageLinks
      ? bookData.volumeInfo.imageLinks.thumbnail
      : "",
    category: bookData.volumeInfo.categories
      ? bookData.volumeInfo.categories[0]
      : "Uncategorized",
    description: bookData.volumeInfo.description || "No description available",
    price: getPrice(bookData),
    count: 1,
  };
  return book;
};
