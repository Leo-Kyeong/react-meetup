import {Route, Switch} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./component/layout/MainNavigation";

function App() {
  return (
      <div>
          <MainNavigation />
          <Switch>
            <Route path={'/'} exact={true}>
              <AllMeetupsPage />
            </Route>
            <Route path={'/new-meetup'}>
              <NewMeetupsPage />
            </Route>
            <Route path={'/favorites'}>
              <FavoritesPage />
            </Route>
          </Switch>
      </div>
  );
}

export default App;
