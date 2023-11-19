import AppLayout from "../layout/AppLayout"
import AntProvider from "./AntProvider"
import StoreProvider from "./AppStore"
const AppProvider = () => {
  return (
    <StoreProvider>
      <AntProvider>
        <AppLayout />
      </AntProvider>
    </StoreProvider>

  )
}

export default AppProvider