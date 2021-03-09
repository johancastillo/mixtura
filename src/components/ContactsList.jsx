import {useEffect, useContext} from "react"
import UserContext from "../context/User/UserContext"

const ContactsList = () => {
    
    const {getUsers} = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])
    
    return(
        <div>
            adadad
        </div>
    )
}

export default ContactsList

