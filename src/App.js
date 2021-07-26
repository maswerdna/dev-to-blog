import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import Home from './Home';
import Article from './Article';
import Search from './Search';

function App() {
  const location = useLocation();//.substring(1);
  const history = useHistory();
  // console.log(location);
  const [posts, setPosts] = useState([]);
  const [failure, setFailure] = useState(false);
  const [query, setQuery] = useState(location.pathname);
  const [isShowing, setIsShowing] = useState(false);
  //
  function handleChange(event) {
    history.push(event.target.value);
  }
  function SideNavToggler() {
    setIsShowing(isShowing => !isShowing);
  }
            //
  useEffect(() => {
    const mymap = {
      '/': 0,
      '/top/week': 7,
      '/top/month': 30,
      '/top/year': 365,
      '/top/infinity': 366,
      '/latest': 1
    }
    const qpath = mymap[location.pathname];
    const fetchArticles = async () => {
      try {
        setFailure(false);
        setPosts([]);
        // setQuery(qpath);
        const url = 'https://dev.to/api/articles' + (qpath ? '?top=' + qpath : '');
        const api_response = await fetch(url);
        const data = await api_response.json();

        if (api_response.status !== 200) {
          throw Error(api_response.error);
        }
        // console.log(data);
        setQuery(location.pathname);
        setPosts(data);
      } catch (error) {
        // console.log(error);
        setFailure(true);
        setQuery('');
      }
    }
    !isNaN(qpath) && fetchArticles();
  }, [location])

  const navState = {SideNavToggler, isShowing};
  const data = {query, failure, posts, handleChange, ...navState};

  return (
    <div className="App">
      <Switch>
        <Route path="/" render={() => <Home data={data} />} exact />
        <Route path="/top" render={() => <Home data={data} />} />
        <Route path="/latest" render={() => <Home data={data} />} />
        <Route path="/search" component={Search} />

        <Route render={() => <Article data={navState} />} />
      </Switch>
    </div>
  );
}

export default App;
