import React from 'react'; 
import Typewriter from 'typewriter-effect';


const TypeWriter = () => {
  return ( 
<Typewriter
  options={{
    strings: [
    'Front End Development',
    'C#',
    'Python',
    'JavaScript',
    'QA',
    'Full Stack Engineering',
    'Data Science',
    'DevOps',
  ],
    autoStart: true,
    loop: true,
  }}
/>
  )
}

export default TypeWriter;
