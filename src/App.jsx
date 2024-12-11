

import Navigation from "./Components/Navigation/Navigation";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import SkillsPage from "./Pages/SkillsPage";
import Data from '../src/Model/Data';
import ProjectPage from "./Pages/ProjectPage";



export default function App() {


  const {language, other, project} = Data
 

  return (
    <>
      <Navigation />
      <HomePage />
      <AboutPage />
      <SkillsPage language={language} other={other}/>
      <ProjectPage project={project}/>
    </>
  )
}
