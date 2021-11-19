// import "./bootstrap.min.css";
import "./App.css";
import "./style.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Screens/Landingpage";
import Navbar from "./Components/navbar"
// import SingleMoviePage from "./Screens/Singlemoviepage";
// import Header from "./Task/Header";
// import page01 from "./Task/screen/page01";
// import page02 from "./Task/screen/page02";
// import page03 from "./Task/screen/page03";
// import page04 from "./Task/screen/page04";
// import page05 from "./Task/screen/page05";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        {/* <Header /> */}
        <Switch>
          {/* <Route path="/:id/:name" component={SingleMoviePage} /> */}
          <Route path="/" exact component={LandingPage} />
          {/* <Route path="/page01" component={page01} />
          <Route path="/page02" component={page02} />
          <Route path="/page03" component={page03} p />
          <Route path="/page04" component={page04} />
          <Route path="/page05" component={page05} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
