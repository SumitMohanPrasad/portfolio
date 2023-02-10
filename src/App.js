import './App.css';
import ContactBar from './Components/ContactBar/ContactBar';
import Footer from './Components/Footer/Footer';
import Heading from './Components/Heading/Heading';
import Navbar from './Components/Navbar/Navbar';
import About from './Sections/About/About';
import Contact from './Sections/Contact/Contact';
import Experience from './Sections/Experience/Experience';
import Home from './Sections/Home/Home';
import Work from './Sections/Work/Work';

function App() {
  return (
   <main className="main">
   <Navbar/>
   <div className= "app_section_container">
     {/* <Fade left> */}
     <Home/>
     {/* </Fade> */}
     {/* <Fade bottom> */}
     <About/>
     {/* </Fade> */}
     <Experience/>
     <Work/>
     <Contact/>
   </div>
   <ContactBar/>
   <Footer/>
   </main>
  );
}

export default App;
