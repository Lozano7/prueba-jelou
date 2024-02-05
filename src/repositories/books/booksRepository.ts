import { mainApi } from "../../api/mainApi"
import { IResponseBooks } from "../../store/slices/books/interfaces/books.interface"

export const getBooks = async () => {
  return await mainApi.get<IResponseBooks>("/")
}
