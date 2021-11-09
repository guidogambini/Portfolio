import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import Tech from './components/Tech/Tech';
import Projects from './components/Projects/Projects';
import TimeLine from './components/TimeLine/TimeLine';

function App() {
  

  const width = window.screen.width;

  return (
    <div className='mainContainer'>

      <NavBar/>
      
      <div className='profile'>
          <div>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
          { width > 400 ? <h1 className='who'>Who I am?</h1> : null}
          </div>
          { width < 400 ?

            <p className='presentacion'>¡Hi everyone 👋🏼! I'm Guido Gambini and I consider myself a simple and inclusive person who has discovered his true passion: programming 💻.
            After I had finished my studies in Communication Science and Political Science degrees 👨🏼‍🎓, I have recently spent more than 800 hours of coding during the Soy Henry bootcamp, and I daily
            continue diving into this amazing world.</p> :
          
            <p className='presentacion'>¡Hi everyone 👋🏼! I'm Guido Gambini and I consider myself a simple and inclusive person<br/> who has discovered his true passion: programming 💻.
            After I had finished my studies<br/> in Communication Science and Political Science degrees 👨🏼‍🎓, I have recently spent more<br/> than 800 hours of coding during the Soy Henry bootcamp, and I daily
            continue diving into<br/> this amazing world. I just hope you can give me the opportunity
            to take my words into action.</p>
          }
          </div>
          <div className="media" >
                       <h3 className='contact'>Contact</h3>
                       <a href="https://www.linkedin.com/in/guidogambini/?locale=en_US" target="_blank" className='via' >
                            <i  className="fab fa-linkedin linkedin" > </i>
                       </a>
                       <a href="https://github.com/guidogambini" target="_blank" className='via' >
                            <i  className="fab fa-github github"  > </i>
                       </a>
                       <a href="https://wa.me/541156614852" target="_blank" className='via' >
                            <i  className="fab fa-whatsapp whatsapp"  > </i>
                       </a>
                   </div>
      </div>

      <div className='line'>

      <TimeLine/>

      </div>

      <div className='car'>

      <Carousel/>

      </div>

      <div className='projects'>

          <Projects/>

      </div>

      {width > 800 ?
      <div className='tech'>

          <Tech/>

      </div>
      : null}

    </div>
  );
  
}

export default App;
