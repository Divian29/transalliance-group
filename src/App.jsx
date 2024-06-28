
import './App.css'
import { Header } from './components/Header'
import LineBreak from './components/LineBreak'
import SectionFive from './pages/SectionFive'
import SectionFour from './pages/SectionFour'
import SectionOne from './pages/SectionOne'
import SectionThree from './pages/SectionThree'
import SectionTwo from './pages/SectionTwo'

function App() {

  return (
    <>
      <Header />  
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <LineBreak/>
      <SectionFive/>
        </>
  )
}

export default App
