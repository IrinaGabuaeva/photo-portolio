import { Route, Switch } from "react-router-dom";
import MainPage from "./components/photoPage/MainPage";
import LandingPage from "./components/photoPage/LandingPage";
import DevPage from "./components/devPage/DevPage.js";
import Photo from "./components/photoPage/Photo";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/art" component={MainPage} />
      <Route path="/dev" component={DevPage} />
      <Route path="/photo" component={Photo} />
    </Switch>
  );
}

export default App;
