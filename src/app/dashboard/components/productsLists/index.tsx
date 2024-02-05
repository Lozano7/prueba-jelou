import { AxiosResponse } from "axios"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import { setLibrary } from "../../../../store/slices/books/booksSlice"
import { IResponseBooks } from "../../../../store/slices/books/interfaces/books.interface"
import BookCard from "./components/BookCard"
import { applyFilters } from "./helpers"

interface Props {
  data: AxiosResponse<IResponseBooks, any> | undefined
}

const ProductGridList = ({ data }: Props) => {
  const { library, booksSelecteds, search, filters } = useAppSelector(
    (state) => state.books,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      const filteredLibrary = applyFilters(
        data.data.default.library,
        filters,
        search,
      )
      dispatch(setLibrary(filteredLibrary))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, dispatch, filters, search])

  return (
    <>
      <section
        aria-labelledby="products-heading"
        className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"
      >
        <h2 id="products-heading" className="sr-only">
          Lista de libros
        </h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {library
            .filter(
              ({ book }) =>
                !booksSelecteds.some(
                  (selected) => selected.title === book.title,
                ),
            )
            .map(({ book }, idx) => (
              <BookCard
                key={`${book.title}-${book.author.name}-${idx}`}
                book={book}
              />
            ))}
        </div>
      </section>
    </>
  )
}

export default ProductGridList
