// React & Bootstrap
import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

// Imports
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage';
import FilmsList from './pages/FilmsList';
import Film from './pages/Film';
import PeopleList from './pages/PeopleList';
import People from './pages/People';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <div id="App" className="App bg-dark">

        <Navigation />

        <Container className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/films" element={<FilmsList />} />
            <Route path="/films/:id" element={<Film />} />
            <Route path="/people" element={<PeopleList />} />
            <Route path="/people/:id" element={<People />} />
          </Routes>
        </Container>

    </div>
  );
}

export default App;
