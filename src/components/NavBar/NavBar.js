import { useState } from "react";
import "./NavBar.css";
import Arg from "../../arg.png";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const width = window.screen.width;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleScroll = (top1, top2, top3) => {
    window.scrollTo({
      top: width < 500 ? top1 : width < 800 ? top2 : top3,
      behavior: "smooth",
    });
    setClick(!click);
  };

  return (
    <div className='generalCont'>
      <div className="mobileIcon" onClick={handleClick}>
        {!click ? <FaTimes/> : <AiOutlineMenu/>}
      </div>
      <nav className={click ? "bar" : "bar2"}>
        <button onClick={() => handleScroll(0, 0, 0)} className="btn">
          Profile
        </button>
        <button
          onClick={() =>
            handleScroll(530, 500, 475)}
          className="btn"
        >
          Career
        </button>
        <button
          onClick={() =>
            handleScroll(1050, 1020, 990)}
          className="btn"
        >
          Apps
        </button>
        <button
          onClick={() =>
            handleScroll(1580, 1665, 1665)}
          className="btn"
        >
          Code
        </button>
        {width > 800 ? <img src={Arg} className="arg" /> : null}
      </nav>
    </div>
  );
}

export default NavBar;
