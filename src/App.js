import './App.css';
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
import ProjectDisplay from './Components/ProjectDisplay/ProjectDisplay';
import ProjectsComp from './Components/ProjectsComp/ProjectsComp';
import StainedGlass from './Components/StainedGlass/StainedGlass';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Body />
      <ProjectDisplay />
      {/* <StainedGlass /> */}
    </div>
  );
}

export default App;
