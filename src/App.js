

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Component/NavBar';
import WeatherSearch from './Component/WeatherSearch';


function App() {
  return (
 <div className='app'>
<NavBar/>
<WeatherSearch/>
 </div>
  );
}

export default App;
