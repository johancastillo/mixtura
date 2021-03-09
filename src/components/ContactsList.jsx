import { useEffect, useContext } from "react"
import UserContext from "../context/User/UserContext"

const ContactsList = () => {

    const { users, getUsers, getProfile } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    // console.log(users)

    return (
        <div className="list-group h-100">
            {
                users.map(user => {
                    return (
                        <a href="#!" key={user.id} className="card my-2 p-4 d-flex flex-row justify-content-start align-items-center" onClick={() => getProfile(user.id)}>
                            <img src={user.avatar} alt="" className="img-fluid mr-4 rounded-circle" width="70" />

                            <p className="mx-4">
                                {`${user.first_name} ${user.last_name}`}
                            </p>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default ContactsList

