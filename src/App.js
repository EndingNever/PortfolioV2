import './App.css';
import Body from './Components/Body/Body';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import ProjectDisplay from './Components/ProjectDisplay/ProjectDisplay';
import ProjectsComp from './Components/ProjectsComp/ProjectsComp';
import Resume from './Components/Resume/Resume';
import StainedGlass from './Components/StainedGlass/StainedGlass';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Body />
      <ProjectDisplay />
      <Resume />
      <Contact />
      {/* <StainedGlass /> */}
    </div>
  );
}

export default App;
