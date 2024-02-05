import { motion, useAnimation } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks"
import { setBooksSelecteds } from "../../../../../store/slices/books/booksSlice"
import { Book } from "../../../../../store/slices/books/interfaces/books.interface"

interface Props {
  book: Book
}

const BookCard = ({ book }: Props) => {
  const dispatch = useAppDispatch()
  const { booksSelecteds } = useAppSelector((state) => state.books)

  const controls = useAnimation()

  const handleHeartIconClick = async () => {
    const isBookSelected = booksSelecteds.find(
      (bookSelected) => bookSelected.title === book.title,
    )

    // Animación de movimiento hacia el Sidebar
    await controls.start({ x: "-100%", opacity: 0, scale: 0.5 })

    if (isBookSelected) {
      dispatch(
        setBooksSelecteds(
          booksSelecteds.filter(
            (bookSelected) => bookSelected.title !== book.title,
          ),
        ),
      )
    } else {
      dispatch(setBooksSelecteds([...booksSelecteds, book]))
    }
  }

  return (
    <motion.div
      className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
      whileHover={{ scale: 1.05 }}
      layout
      animate={controls}
      initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <motion.img
          src={book.cover}
          alt={book.title}
          className="h-full w-full object-cover object-center cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onClick={handleHeartIconClick}
        />
      </div>
      <div className="pb-4 pt-10 text-center">
        <h3 className="text-sm font-medium text-gray-900">{book.title}</h3>
        <div className="mt-3 flex flex-col items-center">
          <p className="mt-2 text-sm text-gray-900">
            Autor:{" "}
            <span className="font-medium text-gray-900">
              {book.author.name}
            </span>
          </p>
          <p className="mt-2 text-sm text-gray-500">{book.pages} paginas</p>
        </div>
        <p className="mt-3 text-base font-medium text-gray-900">{book.genre}</p>
      </div>
    </motion.div>
  )
}

export default BookCard
