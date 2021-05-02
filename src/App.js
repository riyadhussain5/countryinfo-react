import Home from "./Component/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

   
import './App.css';
import NotMatching from "./Component/NotMatching/NotMatching";

import CountryInfo from "./Component/CountryInfo/CountryInfo";

function App() {
  return (
    <div className="App">
<Router >
      <Switch>
<Route path="/Home">
<Home></Home>
</Route>


<Route  path="/Details/:name">
            <CountryInfo></CountryInfo>
          </Route>

<Route exact  path="/">
            <Home />
          </Route>

         


<Route   path="*">
<NotMatching></NotMatching>
</Route>



      </Switch>
     
    </Router>
    </div>
    
  );
}

export default App;
