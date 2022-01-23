import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <main>
      <Header />
      <About />
      <Project />
      <Skills />
      <ContactMe />
    </main>
  );
}

export default App;
