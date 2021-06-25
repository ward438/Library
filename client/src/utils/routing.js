import { Switch, Route } from "react-router-dom";
// import SearchResults from '../pages/searchResults'
import Home from '../pages/home';
import GetBooks from '../utils/apiCall'

export function Routing() {
    return (
        <Switch>
            {/* <Route path="/searchResults" component={GetBooks} /> */}
            <Route path="/" component={Home} />
            <Route render={() => <h1>Page not found</h1>} />
        </Switch>
    );
}