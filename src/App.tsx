import { FunctionComponent, useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import NewUser from './components/NewUser'

const App: FunctionComponent = () => {

  const [user, setUser] = useState({
    id: '',
    username: '',
    authorized: false,
    availableTimes: [],
    scheduledTimes: [],
    pendingRequests: [],
    pendingResponses: []
})

  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <h1>Pocket RN Scheduling</h1>
        <Switch>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/login' exact render={() => <Login />} />
          <Route path='/new-user' exact render={() => <NewUser />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
