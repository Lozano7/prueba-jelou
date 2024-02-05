import { QueryClient } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
    },
  },
})

export default queryClient
