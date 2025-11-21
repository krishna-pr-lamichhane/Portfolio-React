import './General.css';
import profile1 from '../assets/profile-pic.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const General = () => {
  return (
    <div className='generalSection mt-10'>
      <div className='profilePicture'><img src={profile1} alt="Profile"/></div>
      <div className='nonProfileSection flex flex-col justify-center'>
        <div className='greetings'>
          <p className='text-[rgba(0,0,0,0.5)] text-xl'>Hello i'm</p>
          <h1>Krishna Lamichhane</h1>
        </div>
        <div className='profession'>
          <h2 className='text-[rgba(0,0,0,0.5)] text-3xl font-bold'>Full Stack Developer</h2>
        </div>
        <div className='details flex flex-row gap-4'>
          <div className='cv'>
            <button className='cvButton cursor-pointer mt-5 border-black bg-sky-50 text-black px-4 py-2 rounded-full hover:bg-sky-100 outline-2 '>Download CV</button>
          </div>
          <div className='contact '>
            <button onClick={() => window.location.href = '#contactme'} className='contactButton cursor-pointer mt-5 border-black bg-sky-50 text-black px-4 py-2 rounded-full hover:bg-sky-100 outline-2 '>Contact Me</button>
            </div>
        </div>
        <div className='socialMedia flex flex-row gap-4 mt-6'>
          <a href="https://www.linkedin.com/in/krishna-lamichhane-982ba5222/"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="https://github.com/chrisnalamic"><img src={github} alt="GitHub" /></a>
        </div>
      </div>
    </div>
  )
}

export default General;