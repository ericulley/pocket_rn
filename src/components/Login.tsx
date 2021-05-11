import { FunctionComponent } from 'react'

const Login: FunctionComponent = () => {
    return (
        <form id="login-container" className="container">
            <h3>Log In</h3>
            <label htmlFor="login-input">Username</label>
            <input id="login-input" type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login