import React, { useState, useEffect } from "react";
import "./VerticalNavigation.css";
// import App from "./App.jsx"
// import 

export const VerticalNavigation = () => {
  const menuItems = ["About", "Recommendations", "Help", "Mode"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [counter, setCounter] = useState(0)
  // const [window, setWindow] = useState(true)

  const handleArrowKeyPress = (e) => {
    if (e.key === "ArrowUp" && activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
      
    } else if (e.key === "ArrowDown" && activeIndex < menuItems.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }

    if (activeIndex === 0 && e.key === "Enter") {
      setActive1(true);
      setActive(true);
    }
    if (activeIndex === 1 && e.key === "Enter") {
      setActive2(true);
      setActive(true);
    }
    if (activeIndex === 2 && e.key === "Enter") {
      setActive3(true);
      setActive(true);
    }
    // if (activeIndex === 4 && e.key === "Enter") {
    //   setActive3(true);
    //   setActive(true);
    // }
  };

  const handleBtnClicks1 = () => {
    setCounter((prevCounter) => prevCounter + 1)
    console.log(counter);
    // setNav(false);
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(false);

  };

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKeyPress);
    return () => {
      window.removeEventListener("keydown", handleArrowKeyPress);
    };
  }, [activeIndex]);

  return (
    <div>
      <ul
        style={{
          display: active ? 'none' : ''
        }}
        className="vertical-navigation">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
            >
              {item}
              {index === activeIndex && <span className="arrow"></span>}
            </li>
        ))}
      </ul>

      <div
      className="abt-div"
        style={{
          display: active1 ? 'grid' : 'none',
          placeContent: 'center',
        }}
      >
        <h3 className="about">About</h3> 
        <span className="body-span">Lorem ipsum unt non ex excepturi voluptatibus debitis nul</span>
      </div>

      <div
      className="abt-div"
        style={{
          display: active2 ? 'grid' : 'none',
          placeContent: 'center',
        }}
      >
        <h5 className="about">Reccomendations</h5> 
        <span className="body-span">Lorem ipsum dolor ipisicing elit. Quidem eaqune,  voluptatem deserunt non ex excepturi voluptatibus debitis nul</span>

      </div>

      <div
      className="abt-div"
        style={{
          display: active3 ? 'grid' : 'none'
        }}
      >
       <h3 className="h">Help</h3>
        <span className="body-span b">How can we help</span>
        {/* <span className="body-span bb">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sequi laboriosam nesciunt. Ipsam consequuntur nisi quo quis veniam, accusantium ad obcaecati vel fugiat qui incidunt voluptatum veritatis doloremque, illo dignissimos!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque, nemo quibusdam earum ducimus inventore aut neque, voluptatem deserunt non ex excepturi voluptatibus debitis nul</span> */}
        <h3 className="bb">?</h3>
      </div>

      <div
      className="bn"
        style={{
          fontSize: '0.5em',
          position: 'absolute',
          bottom: '0',
          right: '0',
          marginRight: '1vw'
        }}
        onClick={() => handleBtnClicks1()}
      >back</div>
    </div>

  );
};

export default VerticalNavigation;
