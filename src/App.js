import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

function App() {
  return (
    <div className="App">
        <h1>Hello!</h1>
        <Header/>
        <Map/>
        <List/>
        <PlaceDetails/>
    </div>
  );
}

export default App;
