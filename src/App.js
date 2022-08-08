import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogContent from './BlogContent';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogContent />
            </Route>

            <Route path= "*">
              <NotFound />
            </Route>

          </Switch>
        </main>
      </div>
    </Router>    
  );
}

export default App;
