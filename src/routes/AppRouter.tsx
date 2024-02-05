import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthScreen from "../app/auth/page"
import DashboardScreen from "../app/dashboard/page"

const AppRouter = () => {
  return (
    <div className="min-h-screen min-w-full max-w-full font-quicksand bg-white-blue">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<DashboardScreen />} />
          <Route path="/auth/*" element={<AuthScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
