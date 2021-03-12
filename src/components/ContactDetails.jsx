import {useContext, useEffect} from "react"
import UserContext from "../context/User/UserContext"


const ContactDetails = () => {
    
    const {selectedUser} = useContext(UserContext)

    return(
        <>
          {
                selectedUser ?
                <div className="card py-4 px-5 my-2" style={{position: "fixed"}}>
                    <img src={selectedUser.avatar} className="rounded-circle" width="200" alt=""/>
                    
                    <p className="mt-4">
                        {`${selectedUser.first_name} ${selectedUser.last_name}`}
                    </p>

                    <p>{selectedUser.email}</p>
                </div>
                :
                <h3 className="mt-2" style={{position: "fixed"}}>
                    No se ha seleccionado un usuario
                </h3>
          }  
        </>
    )
}

export default ContactDetails

