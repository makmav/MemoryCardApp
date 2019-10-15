import React, {ReactElement} from "react";
import routes from './routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

function App(): ReactElement {
    return (
        <Router>
            <Switch>
                {routerFactory()}
            </Switch>
        </Router>
    )
}

export default App;

function routerFactory(): ReactElement[] {
    return routes.map(route => {
        const {path, component: Component, condition} = route;

        return (
            <Route
                path={path}
                key={path}
                render={({ location }) =>
                    !(condition && condition()) || !condition ? (
                        <Component />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/DeviceNotMatch",
                                state: { from: location }
                            }}
                        />
                    )
                }
            >
            </Route>
        )
    })
}

