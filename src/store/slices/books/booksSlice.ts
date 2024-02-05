import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Book, Library } from "./interfaces/books.interface"

interface BooksState {
  booksSelecteds: Book[] | []
  isViewSidebar: boolean
  library: Library[]
  search: string
  filters: {
    genero: string[]
    autor: string[]
  }
}

const books: BooksState = {
  booksSelecteds: [],
  isViewSidebar: false,
  library: [],
  search: "",
  filters: {
    genero: [],
    autor: [],
  },
}

const booksSlice = createSlice({
  initialState: books,
  name: "books",
  reducers: {
    // add reducers here
    setBooksSelecteds: (state, action) => {
      state.booksSelecteds = action.payload
    },
    setIsViewSidebar: (state, action) => {
      state.isViewSidebar = action.payload
    },
    setLibrary: (state, action) => {
      state.library = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setFilters: (
      state,
      action: PayloadAction<{ genero: string[]; autor: string[] }>,
    ) => {
      state.filters = action.payload
    },
    setFiltersInit: (state) => {
      state.filters = {
        genero: [],
        autor: [],
      }
    },
  },
})

export const {
  setBooksSelecteds,
  setIsViewSidebar,
  setLibrary,
  setSearch,
  setFilters,
  setFiltersInit,
} = booksSlice.actions

export default booksSlice.reducer
