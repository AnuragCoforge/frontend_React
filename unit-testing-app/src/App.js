import logo from './logo.svg';
import './App.css';
import HelloComponent from './component/HelloComponent';
import { GetUser } from './component/GetUser';
import { Welcome } from './component/Welcome';

function App() {
  const user={
    id:1,
    name:'swapna',
    city:'hyd'
  }
  return (
    <div className="App">
      {/* <HelloComponent name="anurag"></HelloComponent> */}
      {/* <GetUser user = {user}></GetUser> */}
      <Welcome></Welcome>
    </div>
  );
}

export default App;
