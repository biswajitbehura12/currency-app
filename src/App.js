
import React from 'react';
import { BrowserRouter  as Router,Route,Switch} from "react-router-dom";
import Currency from './currency';
import Submit from './Submit';
function App() {
  

  return (
  
    
    <Router>
      <Switch>
          <Route exact path ="/" component={Submit} />
        <Route  exact path="/currency" component={ ()=> <Currency  auth={false} />}/>
      </Switch>
    </Router>
    
  
  );
}

export default App;
