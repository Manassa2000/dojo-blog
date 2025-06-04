import Navbar from './Navbar';
import Home from './Home.js';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p> */}
      </div>
    </div>
  );
}

export default App;
