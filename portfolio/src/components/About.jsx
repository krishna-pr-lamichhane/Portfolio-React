import './About.css';
import profile2 from '../assets/about-pic.png';
import exp from '../assets/experience.png';
import edu from '../assets/education.png';

const About = () => {
  return (
    <div className='aboutSection flex flex-col items-center justify-center' id='aboutme'>
      <div className='aboutStart'>
        <div className='gtkm text-[rgba(0,0,0,0.7)] text-l'><span>Get To Know More</span></div>
        <div className='am text-[rgba(0,0,0)] font-bold text-5xl mt-2'><h2>About Me</h2></div>
      </div>
      <div className='aboutMain mt-10 flex flex-row'>
        <div className='aboutPicture'>
          <img src={profile2} alt="Profile"/>
        </div>
        <div className='aboutDetails flex flex-col'>
          <div className='expedu flex flex-row'>
            <div className='exp flex flex-col'>
              <img src={exp} alt="Experience" width={35} className='mt-6'/>
              <p className='am text-[rgba(0,0,0)] font-bold text-2xl mt-1 mb-4'>Experience</p>
              <p>MERN stack development (1 Year)</p>
            </div>
            <div className='edu flex flex-col'>
              <img src={edu} alt="Education" width={35} className='mt-6'/>
              <p className='am text-[rgba(0,0,0)] font-bold text-2xl mt-1 mb-2'>Education</p>
              <div>
                <p>MERN stack development (2025)</p>
                <p>Bachelors in Information Management (2022-2026)</p>
              </div>

            </div>
          </div>
          <div className='aboutInfo'><span className='text-[rgba(0,0,0,0.5)] text-lg'>I have completed my Bachelors degree in Information Management from the most renowned university in Nepal, Tribhubhan University. I have extensive knowledge about Business, Management, Research and Mostly of Information Technology. I have another degree in MERN stack development which comprises of MongoDB, Node.js with Express.js and React.js making full use of javascript and nosql for a full stack web app development.</span></div>
        </div>
      </div>
    </div>
  )
}

export default About;