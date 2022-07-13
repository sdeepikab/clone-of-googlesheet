import './App.css';
import Singnup from './components/Singnup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './components/Login';
import Landing from './components/Landing';
import Addtask from './components/Addtask';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Singnup />
          </Route>
          <Route path="/addtask">
            <Addtask />
          </Route>
          <Route path="/tasklist">
            <TaskList />
          </Route>
          <Route path="/edittask:id">
            <EditTask />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
