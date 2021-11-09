import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import Photos from './components/Photos';
import Todos from './components/Todos';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
		<Nav />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/photos">
					<Photos />
				</Route>
				<Route path="/todos">
					<Todos />
				</Route>
			</Switch>
		</BrowserRouter>
	</div>
  );

}

export default App;
