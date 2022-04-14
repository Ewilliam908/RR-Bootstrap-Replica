import './App.css';
import NavBar from './Components/NavBar'
import Background from './Components/BackgroundPage'
import StoreListings from './Components/StoreListings'


function App() {
  return (
    <div className="App">
      <h1>Hola Mondial</h1>
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
