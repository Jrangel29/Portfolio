import './App.css';
import Navbar from './sections/Navbar';
import Header from './sections/Header';
import About from './sections/About';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
