import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import Tech from './components/Tech/Tech';
import Projects from './components/Projects/Projects';


function App() {

  
  return (
    <div className='mainContainer'>

      <NavBar/>
      
      <div className='profile'>
          <div>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
          <h1>Who I am?</h1>
          </div>
          <p style={{lineHeight:'2.5rem'}}>I consider myself a simple and inclusive person who has discovered his true passion: programming. <br/>I have recently spent more than 800 hours of coding during the Soy Henry bootcamp, and I daily<br/> continue diving into this amazing knowledgment world. I just hope you can give me the opportunity <br/>to take my words into action. I trust a united working group will always beat.</p>
          </div>
          <div className="media" >
                       <h3 style={{fontSize:'3rem', marginBottom:'0em', marginLeft:'-4rem'}}>Contact me</h3>
                       <a href="https://www.linkedin.com/in/guidogambini/?locale=en_US" target="_blank" style={{color:'#3E065F'}} className='via' >
                            <i  className="fab fa-linkedin linkedin" > </i>
                       </a>
                       <a href="https://github.com/guidogambini" target="_blank" style={{color:'#3E065F'}} className='via' >
                            <i  className="fab fa-github github"  > </i>
                       </a>
                       <a href="https://wa.me/541156614852" target="_blank" style={{color:'#3E065F'}} className='via' >
                            <i  className="fab fa-whatsapp whatsapp"  > </i>
                       </a>
                   </div>
      </div>

      <div className='car'>

      <Carousel/>

      </div>

      <div className='projects'>

          <Projects/>

      </div>

      <div className='tech'>

          <Tech/>

      </div>

    </div>
  );
  
}

export default App;
