import Home from '../../components/Home'
import ProtectedRoute from '../../components/ProtectedRoute'

export default function Page() {
  return (
    <ProtectedRoute>
      <Home/>
    </ProtectedRoute>
  )
}
