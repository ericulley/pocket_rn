import { FunctionComponent, useState } from 'react'
import fb from '../firebase-config'
// Interfaces
import User from '../interfaces/User'

const NewUser: FunctionComponent = () => {

    const createNewUser = () => {

    }

    return (
        <div id="login-container" className="container">
            <h3>Create New User</h3>
            <form onSubmit={createNewUser}>
                <label htmlFor="login-input">Username</label>
                <input id="login-input" type="text" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewUser