import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Authors from './Authors';
import ModifiedAuthors from './ModifiedAuthors';
import AllAuthors from './AllAuthors';

function App() {
  return (
    <div className="App">    
      <BrowserRouter>
        <Authors />
        <Route exact path="/modifiedauthors" render={(props) => {
          return (<ModifiedAuthors {...props}/>)
        }}>
        </Route>

        <Route path={`/modifiedauthors/allauthors`}>
          <AllAuthors />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
