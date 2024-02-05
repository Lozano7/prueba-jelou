import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { AnimatePresence, motion } from "framer-motion"
import { Fragment } from "react"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import {
  setBooksSelecteds,
  setIsViewSidebar,
} from "../../../../store/slices/books/booksSlice"

export const Sidebar = () => {
  const { booksSelecteds, isViewSidebar } = useAppSelector(
    (state) => state.books,
  )

  const dispatch = useAppDispatch()

  return (
    <>
      <Transition.Root show={isViewSidebar} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={() => {
            dispatch(setIsViewSidebar(true))
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => {
                        dispatch(setIsViewSidebar(false))
                      }}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-200 px-6 pb-4">
                  <h2 className="my-5 text-2xl font-bold tracking-tight text-gray-900 text-center">
                    Lista de lectura
                  </h2>
                  <div className="relative">
                    <AnimatePresence>
                      {booksSelecteds.map((selectedBook, index) => (
                        <motion.div
                          key={selectedBook.title}
                          initial={{
                            opacity: 0,
                            x: booksSelecteds.find(
                              (book) => book.title === selectedBook.title,
                            )
                              ? 50 * index
                              : -50 * index,
                          }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{
                            opacity: 0,
                            x: booksSelecteds.find(
                              (book) => book.title === selectedBook.title,
                            )
                              ? 50 * index
                              : -50 * index,
                          }}
                          transition={{ duration: 0.25 }}
                          style={{
                            position: "absolute",
                            left: "25%",
                            right: "25%",
                            top: `${index * 30}px`,
                            transform: "translateX(50%)",
                            zIndex: index + 1,
                          }}
                        >
                          {/* Contenido de cada libro seleccionado */}
                          <div className="bg-white relative">
                            <img
                              src={selectedBook.cover}
                              alt={selectedBook.title}
                              className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                            />
                            {/* Detalles del libro */}

                            <button
                              onClick={() => {
                                dispatch(
                                  setBooksSelecteds(
                                    booksSelecteds.filter(
                                      (book) =>
                                        book.title !== selectedBook.title,
                                    ),
                                  ),
                                )
                              }}
                              className="absolute top-0 right-0 p-2 text-white
                                rounded-full shadow-md
                                hover:bg-zinc-800
                                transition-all
                                duration-200
                                ease-in-out
                              "
                            >
                              <XMarkIcon className="h-6 w-6 " />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      {booksSelecteds.length > 0 && (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-slate-200 ">
          <h2 className="mt-5 mb-10 text-2xl font-bold tracking-tight text-gray-900 text-center">
            Lista de lectura
          </h2>
          <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4 relative">
            {/* Mostrar libros seleccionados en el Sidebar */}
            <AnimatePresence>
              {booksSelecteds.map((selectedBook, index) => (
                <motion.div
                  key={selectedBook.title}
                  initial={{
                    opacity: 0,
                    x: booksSelecteds.find(
                      (book) => book.title === selectedBook.title,
                    )
                      ? 50 * index
                      : -50 * index,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: booksSelecteds.find(
                      (book) => book.title === selectedBook.title,
                    )
                      ? 50 * index
                      : -50 * index,
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: "absolute",
                    left: "25%",
                    right: "25%",
                    top: `${index * 30}px`,
                    transform: "translateX(50%)",
                    zIndex: index + 1,
                  }}
                >
                  {/* Contenido de cada libro seleccionado */}
                  <div className="bg-white relative">
                    <img
                      src={selectedBook.cover}
                      alt={selectedBook.title}
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                    {/* Detalles del libro */}

                    <button
                      onClick={() => {
                        dispatch(
                          setBooksSelecteds(
                            booksSelecteds.filter(
                              (book) => book.title !== selectedBook.title,
                            ),
                          ),
                        )
                      }}
                      className="absolute top-0 right-0 p-2 text-white
                      rounded-full shadow-md
                      hover:bg-zinc-800
                      transition-all
                      duration-200
                      ease-in-out

                      "
                    >
                      <XMarkIcon className="h-6 w-6 " />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
