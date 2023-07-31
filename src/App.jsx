import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './Logo.css';
import Logo from './Components/Logo';
import Logo2 from './Components/Logo2';
import Nav from './Components/Nav.jsx'
import main from './assets/avatar1.png';
import main2 from './assets/mine-craft.webp';
import main3 from './assets/EA.jpg';
import main4 from './assets/fortnite.jpg'
import main5 from './assets/assassins_creed.jpeg'
import ROGAlly from './assets/ROG.webp'
import ava1 from './assets/avatar1.png'
import banner from './assets/banner.jpg'
import VerticalNavigation from './Components/Nav.jsx';

function App() {
  const [imageSrc, setImageSrc] = useState(main4);
  const [count, setCount] = useState(0);
  const [nav, setNav] = useState(false);
  const cardsDivRef = useRef(null);
  const element = document.getElementById("togg");

  const styles = {
    main: {
      display: nav ? 'none': ''
    },
    col: {
      color: 'white',
    }
  }

  useEffect(() => {
    bounds();    
  }, [count]);

  const bounds = () => {
    if (count > 6 || count < 0) {
      console.log('error: out of bounds');
      if (count > 6) {
        setCount(6);
      } else if (count < 0) {
        setCount(0);
      }
    }

    if (count === 0) {
      setImageSrc(main4);
    } else if (count === 1) {
      setImageSrc(main3);
    } else if(count === 2){
      setImageSrc(main2)
    } else if (count === 3) {
      setImageSrc(main5)
    }
  };

  const toggleFw = () => {
    setCount((prevCount) => prevCount + 1);
    element.scrollLeft += 450;
  };

  const toggleBk = () => {
    setCount((prevCount) => prevCount - 1);
    element.scrollLeft -= 450;
  };

  const handleBtnClicks = () => {
    setNav(currentState => !currentState);
  };



  return (
    <>
    < Logo2 />
    <div className='root'>
      <div className='back'>
      < Logo/>
      <img id='backImg' className='backgroundImage' src={imageSrc} alt="" />
      </div>
     <div className='side'>
        <div id='togg' className='cards-div' ref={cardsDivRef}>
          <div className="card-wrapper">
            <div className="card"><img className='card-img' src={main4} alt="" /></div>
          </div>
          <div className="card-wrapper">
            <div className="card"><img className='card-img' src={main3} alt="" /></div>
          </div>
          <div className="card-wrapper">
            <div className="card"><img className='card-img' src={main2} alt="" /></div>
          </div>
          <div className="card-wrapper">
            <div className="card"><img className='card-img' src={main5} alt="" /></div>
          </div>
          <div className="card-wrapper">
            <div className="card"><img className='card-img' src={main} alt="" /></div>
          </div>
        </div>

        <div className='toggle'>  
          <div onClick={toggleBk}>&lt;</div>
          <div onClick={toggleFw}>&gt;</div>
        </div>
     </div>
      </div>
    
      <div
       className='page2'
       >
        <div className='circle'></div>
        <div className='rog-div'>
          <img className='rogA' style={{}} src={ROGAlly} alt="" />
          
          <div
            className='rog-screen'
            style={{
              overflow: nav ? 'hidden' : ''
            }}
          >
            <div style={styles.main} className="screen-item item1">
              <img className='screen-img' src={main2} alt="" />
              <div className='inner-div one'>Lorem ipsum dolor sit amebeatae exercitationem aut at sapiente quasi. Impedit vero perspiciatis modi, cumque doloremque earum, quos veniam eum ducimus iure est.</div>
            </div>
            <div style={styles.main} className="screen-item item2">
              <img className='screen-img' src={main5} alt="" />
              <div className='inner-div two'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, facilis ab beatae exercitationem aut at sapiente quasi. Impedit vero perspiciatis modi, cumque doloremque earum, quos veniam eum ducimus iure est.</div>
            </div>
            <div style={styles.main} className="screen-item item3">
              <img className='screen-img' src={main4} alt="" />
              <div className='inner-div three'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, facilis ab beatae exercitationem aut at sapiente quasi. Impedit vero perspiciatis modi, cumque doloremque earum, quos veniam eum ducimus iure est.</div>
            </div>
            <div style={styles.main} className="screen-item item4">
              <img className='screen-img' src={main3} alt="" />
              <div className='inner-div four'>Lorem ipsum dolor sit amet, consectetur adipisicinmus iure est.</div>
            </div>
            
            <div 
            className='nav-screen'
            style={{
              background: 'transparent',
              display: nav ? 'grid' : 'none'
            }}
            >
              <Nav/>
            </div>
          </div>
        </div>

        
        <div className='task-bar'>
          <div>
            <span
            onClick={() => handleBtnClicks()} 
            style={{color: '#fff', zIndex: '5'}}
            >
              Menu
            </span>

          </div>
        </div>

            
      </div>
      <div className='copyright'>
          <p>PRIVACY POLICY | TERMS OF USE</p>
          <p>YOUR NIGERIA PRIVACY RIGHTS | ONLINE PRIVACY POLICY</p>
          <p>INTEREST BASED ADS | DO NOT SELL MY INFO</p>
          <p>&#169;2023 BUTUS / SOMTEE</p>
      </div>
    </>
  );
}

export default App;
