import { FunctionComponent, useEffect, useState } from 'react'
import fb from '../firebase-config'
// Interfaces
import User from '../interfaces/User'

const Home: FunctionComponent = () => {

    const [allUsers, setAllUsers] = useState<User[] | fb.firestore.DocumentData[]>([])

    const usersRef = fb.firestore().collection('users')

    const getAllUsers = () => {
        usersRef.onSnapshot((querySnapShot) => {
            const users: fb.firestore.DocumentData[] = []
            querySnapShot.forEach((doc) => {
                console.log(doc.data())
                users.push(doc.data())
            }) 
            setAllUsers(users)
        })
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div id="home-container">
            <h2>Available Users</h2>
            {allUsers.map((user: any) => {
                return (
                    <div className="user-container container" key={user.id}>
                        <p>{user.username}</p>
                        <details>
                            <summary>Available Times</summary>
                            <ul>
                                {user.availableTimes.map((time: string) => {
                                    return (
                                        <li>
                                            <p>{time}</p>
                                            <button>book</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </details>
                    </div>
                )
            })}
        </div>
    )
}

export default Home