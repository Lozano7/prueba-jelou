import FiltersProducts from "../components/filters"
import Footer from "../components/footer"
import ProductGridList from "../components/productsLists"

import { useEffect } from "react"
import { useGetBooks } from "../../../queries/books.query"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { setBooksSelecteds } from "../../../store/slices/books/booksSlice"
import Header from "../components/header"
import Sidebar from "../components/sidebar"

export const DashboardScreen = () => {
  const { booksSelecteds } = useAppSelector((state) => state.books)

  const { data } = useGetBooks()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (booksSelecteds.length > 0) {
      localStorage.setItem("bookList", JSON.stringify(booksSelecteds))
    }
  }, [booksSelecteds])

  useEffect(() => {
    const bookList = localStorage.getItem("bookList")
    if (bookList) {
      const parsedBookList = JSON.parse(bookList)
      dispatch(setBooksSelecteds(parsedBookList))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div>
        <Sidebar />
        <div className={`${booksSelecteds.length > 0 ? "lg:pl-72" : ""}`}>
          <Header />
          <div className="bg-white">
            <main className="pb-24">
              <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  Libros
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
                  A continuación, se mostrará nuestro catálogo de libros, puedes
                  crear tu lista de lectura dándole click a la imagen de cada
                  libro que te guste.
                </p>
              </div>

              <FiltersProducts />
              <ProductGridList data={data} />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardScreen
