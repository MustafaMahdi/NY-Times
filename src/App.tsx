import { Link, Stack } from "@mui/material";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants";
import { ArticleDetails, Articles } from "./pages";
import ProviderWrapper from "./providers/ProviderWrapper";

function App() {
    const navigate = useHistory();
    const onHomeClickHandler = () => {
        navigate.push(`${ROUTES.ARTICLES}`);
    };
    return (
        <ProviderWrapper>
            <Stack padding={5}>
                <Stack gap={2}>
                    <Link
                        align="left"
                        underline="none"
                        color={"text.primary"}
                        component="button"
                        variant="h3"
                        onClick={onHomeClickHandler}
                    >
                        NY Times
                    </Link>
                    <Switch>
                        <Route path={ROUTES.HOME} exact>
                            <Redirect to={ROUTES.ARTICLES} />
                        </Route>
                        <Route path={ROUTES.ARTICLES} exact>
                            <Articles />
                        </Route>
                        <Route path={`${ROUTES.ARTICLES}/:articleId`} exact>
                            <ArticleDetails />
                        </Route>
                    </Switch>
                </Stack>
            </Stack>
        </ProviderWrapper>
    );
}

export default App;
