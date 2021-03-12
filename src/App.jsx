import ContactsList from "./components/ContactsList"
import ContactDetails from "./components/ContactDetails"
import UserState from "./context/User/UserState";
import Home from "./pages/Home";

const App = () => {
  return (
    <UserState>
      <Home />
    </UserState>
  )
}

export default App;
