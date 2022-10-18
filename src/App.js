import './App.css';
import Body from './Components/Body/Body';
import Contact from './Components/Contact/Contact';
import ProjectDisplay from './Components/ProjectDisplay/ProjectDisplay';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Body />
      <ProjectDisplay />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
