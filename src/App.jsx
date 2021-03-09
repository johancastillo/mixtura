import ContactsList from "./components/ContactsList"
import ContactDetails from "./components/ContactDetails"
import UserState from "./context/User/UserState";

const App = () => {
  return (
    <UserState>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ContactsList />
          </div>
          
          <div className="col-md-6">
            <ContactDetails />
          </div>
        </div>
      </div>
    </UserState>
  )
}

export default App;
