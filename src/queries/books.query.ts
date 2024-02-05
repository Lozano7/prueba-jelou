import { useQuery } from "react-query"
import { getBooks } from "../repositories/books/booksRepository"

export const useGetBooks = () => {
  return useQuery(["books"], getBooks)
}
