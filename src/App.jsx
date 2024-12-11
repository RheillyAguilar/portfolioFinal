

import Navigation from "./Components/Navigation/Navigation";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import SkillsPage from "./Pages/SkillsPage";
import Data from '../src/Model/Data';



export default function App() {


  const {language, other} = Data
 

  return (
    <>
      <Navigation />
      <HomePage />
      <AboutPage />
      <SkillsPage language={language} other={other}/>
    </>
  )
}
