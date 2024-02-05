import { Disclosure } from "@headlessui/react"
import { FunnelIcon } from "@heroicons/react/20/solid"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import {
  setFilters,
  setFiltersInit,
} from "../../../../store/slices/books/booksSlice"

const filters = {
  genero: [
    { value: "terror", label: "Terror", checked: false },
    { value: "ciencia ficción", label: "Ciencia ficción", checked: false },
    { value: "zombies", label: "Zombies", checked: false },
    { value: "fantasía", label: "Fantasía", checked: false },
  ],
  autor: [
    { value: "Mary Shelley", label: "Mary Shelley", checked: false },
    { value: "H.P. Lovecraft", label: "H.P. Lovecraft", checked: false },
    { value: "Bram Stoker", label: "Bram Stoker", checked: false },
    { value: "Stephen King", label: "Stephen King", checked: false },
    { value: "Ray Bradbury", label: "Ray Bradbury", checked: false },
    { value: "William Gibson", label: "William Gibson", checked: false },
    { value: "Douglas Adams", label: "Douglas Adams", checked: false },
    { value: "Frank Herbert", label: "Frank Herbert", checked: false },
    { value: "Manel Loreiro", label: "Manel Loreiro", checked: false },
    { value: "George Orwell", label: "George Orwell", checked: false },
    { value: "J.K. Rowling", label: "J.K. Rowling", checked: false },
    {
      value: "George R. R. Martin",
      label: "George R. R. Martin",
      checked: false,
    },
    {
      value: "J.R.R. Tolkien",
      label: "J.R.R. Tolkien",
      checked: false,
    },
  ],
}

const FiltersProducts = () => {
  const dispatch = useAppDispatch()
  const { filters: globalFilters } = useAppSelector((state) => state.books)

  const handleFilterChange = (
    filterType: "genero" | "autor",
    value: string,
  ) => {
    const updatedFilters = {
      ...globalFilters,
      [filterType]: globalFilters[filterType].includes(value)
        ? globalFilters[filterType].filter((filter) => filter !== value)
        : [...globalFilters[filterType], value],
    }
    dispatch(setFilters(updatedFilters))
  }

  return (
    <Disclosure
      as="section"
      aria-labelledby="filter-heading"
      className="grid items-center border-b border-t border-gray-200"
    >
      <h2 id="filter-heading" className="sr-only">
        Filters
      </h2>
      <div className="relative col-start-1 row-start-1 py-4">
        <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
          <div>
            <Disclosure.Button className="group flex items-center font-medium text-gray-700">
              <FunnelIcon
                className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              {Number(globalFilters.autor.length) +
                Number(globalFilters.genero.length)}{" "}
              Filtros aplicados
            </Disclosure.Button>
          </div>
          <div className="pl-6">
            <button
              type="button"
              className="text-gray-500"
              onClick={() => {
                dispatch(setFiltersInit())
              }}
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>
      <Disclosure.Panel className="border-t border-gray-200 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
          <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
            <fieldset>
              <legend className="block font-medium">Género</legend>
              <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                {filters.genero.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center text-base sm:text-sm"
                  >
                    <input
                      id={`genero-${option.value}`}
                      name="genero[]"
                      type="checkbox"
                      className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      checked={globalFilters.genero.includes(option.value)}
                      onChange={() =>
                        handleFilterChange("genero", option.value)
                      }
                    />
                    <label
                      htmlFor={`genero-${option.value}`}
                      className="ml-3 min-w-0 flex-1 text-gray-600"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="block font-medium">Autor</legend>
              <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4 grid grid-cols-12">
                {filters.autor.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center text-base sm:text-sm col-span-6"
                  >
                    <input
                      id={`autor-${option.value}`}
                      name="autor[]"
                      type="checkbox"
                      className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      checked={globalFilters.autor.includes(option.value)}
                      onChange={() => handleFilterChange("autor", option.value)}
                    />
                    <label
                      htmlFor={`autor-${option.value}`}
                      className="ml-3 min-w-0 flex-1 text-gray-600"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  )
}

export default FiltersProducts
