import Navbar from './Navbar.js';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home />
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
