
import UserPage from "./components/UserPage"
import UserProvider from "./contexts/UserProvider"


function App() {

  return (
    <>

    <UserProvider>

        <UserPage />

    </UserProvider>

    
     
    </>
  )
}

export default App
