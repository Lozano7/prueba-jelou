import { Library } from "../../../../../store/slices/books/interfaces/books.interface"

export const applyFilters = (
  sourceLibrary: Library[],
  filters: {
    genero: string[]
    autor: string[]
  },
  search: string,
) => {
  let filteredLibrary = sourceLibrary

  // Apply genre and author filters if values are present
  if (filters.genero.length > 0) {
    filteredLibrary = filteredLibrary.filter(({ book }) =>
      filters.genero.includes(book.genre.toLowerCase()),
    )
  }

  if (filters.autor.length > 0) {
    filteredLibrary = filteredLibrary.filter(({ book }) =>
      filters.autor.includes(book.author.name),
    )
  }

  // Apply search filter if no genre or author filters are selected
  if (search) {
    filteredLibrary = filteredLibrary.filter(({ book }) =>
      book.title.toLowerCase().includes(search.toLowerCase()),
    )
  }

  return filteredLibrary
}
