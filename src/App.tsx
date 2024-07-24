import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants";
import { Articles } from "./pages";

function App() {
    return (
        <Switch>
            <Route path={ROUTES.HOME} exact>
                <Redirect to={ROUTES.ARTICLES} />
            </Route>
            <Route path={ROUTES.ARTICLES} exact>
                <Articles />
            </Route>
        </Switch>
    );
}

export default App;
