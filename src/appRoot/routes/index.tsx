import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicRoutes from './public.routes';

interface IRoutes {
  id: number;
  path: string;
  component: any;
  exact: boolean;
}

const Routes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {PublicRoutes.map((route: IRoutes) => (
          <Route
            key={route.id}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
