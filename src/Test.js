import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Define your components
const Home = () => <h1>Welcome Home!</h1>;
const About = () => <h1>About Us</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

// Define a component that renders based on the keyword
const RenderComponent = ({ match }) => {
  const { keyword } = match.params;

  switch (keyword) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    default:
      return <NotFound />;
  }
};

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Define route with a parameter */}
        <Route path="/:keyword" component={RenderComponent} />
        {/* Fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
