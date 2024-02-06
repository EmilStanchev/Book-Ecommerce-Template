/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchBooks,
  getBookById,
  getBooksByCategory,
} from "../services/book.service";

export const useGetBooks = (category) => {
  const [query, setQuery] = useState("");

  const { data, isFetched, isLoading, error, refetch } = useQuery({
    queryKey: [`books/${category}`],
    queryFn: () => fetchBooks(query ? query : category),
    keepPreviousData: true,
    cacheTime: 0,
  });

  return { data, isLoading, error, isFetched, refetch, setQuery };
};

export const useGetPopularBooks = (category) => {
  const { data, isFetched, isLoading, error, refetch } = useQuery({
    queryKey: ["popularBooks"],
    queryFn: () => getBooksByCategory(category),
    keepPreviousData: true,
    cacheTime: 0,
  });
  return { data, error, refetch, isFetched };
};

export const useGetBookById = (bookId) => {
  const { data, refetch, isFetched, error } = useQuery({
    queryKey: [`book/${bookId}`],
    queryFn: () => getBookById(bookId),
    keepPreviousData: true,
    cacheTime: 0,
  });
  return { data, isFetched, refetch, error };
};
