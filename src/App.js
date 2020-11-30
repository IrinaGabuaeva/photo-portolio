// import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/*" component={MainPage} />
    </Switch>
  );
}

export default App;
