// import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import LandingPage from "./components/LandingPage";
import DevPage from "./components/DevPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/art" component={MainPage} />
      <Route path="/dev" component={DevPage} />
    </Switch>
  );
}

export default App;
