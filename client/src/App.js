import React, { useEffect, useState } from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SearchPage from './pages/SearchPage/SearchPage';
import CardDetails from './pages/CardDetails/CardDetails';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/:category/:name" exact render={(props) => <CardDetails {...props} data={data} />} />
        <Route path="/" exact render={(props) => <SearchPage {...props} data={data} />} />
      </Switch>
    </Router>
  );
}

export default App;
