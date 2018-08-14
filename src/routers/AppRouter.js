import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import Sidebar from '../components/Sidebar';
import NotFoundPage from '../components/NotFoundPage';
import WorkPage from '../components/WorkPage';
import ProjectsHeader from '../components/ProjectsHeader';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import CalmCornerPage from '../components/CalmCornerPage';
import SpacejpgPage from '../components/SpacejpgPage';
import ExpenseLogPage from '../components/ExpenseLogPage';

// export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <div className="column" id="sidebar">
        <Sidebar />
        <Nav />
      </div>
      <div className="column" id="content">
      <Route path="/projects" exact={true} component={ProjectsHeader} />
        <Switch>
          <Route path="/" exact={true} component={Welcome} />
          <Route path="/projects" component={WorkPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/calm-corner" component={CalmCornerPage}/>
          <Route path="/spacejpg" component={SpacejpgPage} />
          <Route path="/expenselog" component={ExpenseLogPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter; 