import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactMe from './components/ContactMe';

function App() {
  const handlePrint = async (e) => {
    e.preventDefault();
    if(e.ctrlKey && e.keyCode === 80) {
      const link = document.createElement('a');
      link.setAttribute("href", "https://drive.google.com/file/d/1vIdBzSmhb_69VIEoJS-U9scVJAHmbn64/view?usp=sharing")
      link.setAttribute("target", "_blank");
      // link.setAttribute("download", "CV");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  };
  document.addEventListener('keydown', handlePrint, false);
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
