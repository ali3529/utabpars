import React, { useState, useEffect } from 'react'

function Advice(props) {
  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;
  console.log(props.children.props.children);
  const [y, setY] = useState(false);
  const handleNavigation = (e) => {

    const window = e.currentTarget;

    if (2500 > window.scrollY) {
      setY(false)
    } else {
      setY(true)
    }

  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <div>
      <div className=' fixed bottom-5 right-8 z-50 '>
        {
          y ? <button className='rounded-2xl bg-blue-600 p-4 px-9 text-white' onClick={
            (e) => scroll.scrollTo(3800)
          }> {props.children.props.children}</button> : null
        }

      </div>
    </div>
  )
}

export default Advice