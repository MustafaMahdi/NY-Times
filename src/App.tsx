import { Stack, Typography } from "@mui/material";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants";
import { Articles } from "./pages";

function App() {
    return (
        <Stack padding={5}>
            <Stack gap={2}>
                <Typography variant="h3">NY Times</Typography>
                <Switch>
                    <Route path={ROUTES.HOME} exact>
                        <Redirect to={ROUTES.ARTICLES} />
                    </Route>
                    <Route path={ROUTES.ARTICLES} exact>
                        <Articles />
                    </Route>
                </Switch>
            </Stack>
        </Stack>
    );
}

export default App;
