import ContactsList from "./components/ContactsList"
import ContactDetails from "./components/ContactDetails"

const App = () => {
  return (
    <>
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
    </>
  )
}

export default App;
