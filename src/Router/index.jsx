import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Signup = lazy(() => import('pages/Signup'));

function Router() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Router;
