import AppLayout from "./components/layout/AppLayout"
import { CryptoContextProvider } from "./context/crypto-context"
import "@ant-design/v5-patch-for-react-19"
function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  )
}

export default App
