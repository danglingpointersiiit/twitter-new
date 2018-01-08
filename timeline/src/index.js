import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'; 
import './index.css';
import './flex.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Profile from './Profile';
import Timeline from './Timeline';
import Follow from './Follow';
import Footer from './Footer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; 


const TimelinePage = () => (
  <MuiThemeProvider>
  
    
     <div className="flexview"> 
        <div className="flex-item"></div>   
        <Profile /> 
        <Timeline  />
          <div className="flex-item">
           <Follow  /> 
          <Footer />   
          </div>
        <div ></div> 
      </div>
  </MuiThemeProvider>
);

const Searchpage = () =>  (
  <h1>Hello</h1>
);

const Navbar1 =() => (
  <MuiThemeProvider>
  <div >
  <Navbar />
  <br />
      <br />
      <br /><br />
      <br />
     <br />
  </div>
  </MuiThemeProvider>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar1/>
      <Switch>
        <Route path="/" component={TimelinePage} exact={true} />
        <Route path="/aadhaar" component={Searchpage} />
        <Route render={() => (<Redirect to="/" />)} />
      </Switch>
    </div>

  </BrowserRouter>
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
