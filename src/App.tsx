import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

const App:React.FC = () => {
  return (
  <>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/dashboard"}/>}/>
        <Route path="/dashboard/:gameId?" render={() => <div>Games</div>} />
        <Route path="/teams/:teamId?" render={() => <div>Teams</div>} />
        <Route path="*" render={() => <img src='src/assets/images/404.png' alt="" style={{marginTop:"30px"}}/>} />
      </Switch>
    </main>
    <Footer />
  </>
  )
  };
export default App;
