import {
  Bars3Icon,
  BookOpenIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import {
  setIsViewSidebar,
  setSearch,
} from "../../../../store/slices/books/booksSlice"

export const Header = () => {
  const { booksSelecteds, search } = useAppSelector((state) => state.books)

  const dispatch = useAppDispatch()

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => {
          dispatch(setIsViewSidebar(true))
        }}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1">
          <label htmlFor="search-field" className="sr-only">
            Buscar libros por título
          </label>
          <MagnifyingGlassIcon
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            placeholder="Buscar libros por título..."
            type="search"
            name="search"
            value={search}
            onChange={(e) => {
              dispatch(setSearch(e.target.value))
            }}
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            aria-hidden="true"
          />
          <div className="flow-root">
            <span className="group -m-2 flex items-center p-2">
              <BookOpenIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {booksSelecteds.length}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
