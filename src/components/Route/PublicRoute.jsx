import { Route } from 'react-router';

const PublicRoute = ({ path, exact, Component }) => {
    return (
        <Route exact={exact} path={path}>
            <Component />
        </Route>
    )
}

export default PublicRoute