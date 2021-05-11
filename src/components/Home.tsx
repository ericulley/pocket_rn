import { FunctionComponent, useEffect, useState } from 'react'
import firebase from "../firebase-config"
// Interfaces
import User from '../interfaces/User'

const Home: FunctionComponent = () => {

    const [allUsers, setAllUsers] = useState<any[]>([])

    const db = firebase.firestore()
    const usersRef = db.collection('users')

    const getAllUsers = () => {
        usersRef.onSnapshot((querySnapShot) => {
            const users: any[] = []
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
                                times
                            </ul>
                        </details>
                    </div>
                )
            })}
        </div>
    )
}

export default Home