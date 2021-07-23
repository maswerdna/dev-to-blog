import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import Home from './Home';
import Article from './Article';
import Search from './Search';
/**
 * TODO
 * create header component
 * create side navigator 
 */

function App() {
  const location = useLocation();//.substring(1);
  const history = useHistory();
  // console.log(qpath);
  const [posts, setPosts] = useState([]);
  const [failure, setFailure] = useState(false);
  const [query, setQuery] = useState(location.pathname);
  //
  function handleChange(event) {
    history.push(event.target.value);
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
    qpath && fetchArticles();
  }, [location])

  const data = {query, failure, posts, handleChange};

  return (
    <div className="App">
      <Switch>
        <Route path="/dev-to-blog" render={() => <Home data={data} />} exact />
        <Route path="/top" render={() => <Home data={data} />} />
        <Route path="/latest" render={() => <Home data={data} />} />
        <Route path="/search" component={Search} />

        <Route render={() => <Article />} />
      </Switch>
    </div>
  );
}

export default App;
