import './App.css'
import Footer from './components/Footer'
import { Header } from './components/Header'
import LineBreak from './components/LineBreak'
import LineBreak1 from './components/LineBreak1'
import LineBreak2 from './components/LineBreak2'
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
      <LineBreak1/>
      <SectionThree/>
      <LineBreak2/>
      <SectionFour/>
      <LineBreak/>
      <SectionFive/>
      <Footer/>
        </>
  )
}
 
export default App
 
