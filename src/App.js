import { Switch, Route } from 'react-router';
import { Home } from './pages/home/home';
import { Navbar } from './components/navbar/navbar';
import { Artworks } from './pages/artworks/artworks';
import { Preview } from './pages/preview/preview';
import { Success } from './pages/success/success';
import './App.scss';
import { useSelector} from 'react-redux'
function App() {
  const popup = useSelector((state) => state.popup)
  return (
    <div className="App">
      {popup.value && <div className="overlay"></div>}
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artworks" component={Artworks} />
        <Route exact path="/preview" component={Preview} />
        <Route exact path="/success" component={Success} />
        <Route component={Error} />
      </Switch>

      
    </div>
  );
}

export default App;
