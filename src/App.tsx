import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import TeamsListContainer from '@Components/Teams/TeamsListContainer';
import Header from '@Components/Header/index';
import Footer from '@Components/Footer';
import './App.scss';
import GamesContainer from '@Components/Games/GamesContainer';
import TeamContainer from '@Components/Teams/Team/TeamContainer';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard/:gameId?" render={() => <GamesContainer />} />
        <Route exact path="/teams/" render={() => <TeamsListContainer />} />
        <Route path="/teams/:teamId" render={() => <TeamContainer />} />
        <Route
          path="*"
          render={() => (
            <img
              src="../assets/images/404.png"
              alt="notFound"
              className="notFound"
            />
          )}
        />
      </Switch>
    </main>
    <Footer />
  </>
);
export default App;
