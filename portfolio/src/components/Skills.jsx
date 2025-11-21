import './Skills.css';
import checkmark from '../assets/checkmark.png';

const Skills = () => {
  return (
    <div className='skillsSection flex flex-col items-center pt-15 mb-30' id='skills'>

      <div className='skillsStart flex flex-col items-center'>
        <div className='sm text-[rgba(0,0,0,0.5)] text-lg'><span>Explore My</span></div>
        <div className='skillsHeader mt-2 am text-[rgba(0,0,0)] font-bold text-5xl mt-2'><h1>Skills</h1></div>
      </div>

      <div className='skillsMain flex flex-col mt-10'>

        <div className='frontend flex flex-row justify-space-around items-center'>
          <div className='sfe text-[rgba(32, 32, 32, 0.5)] text-3xl font-bold'>Frontend</div>
          <section className='html flex flex-row ml-20'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>HTML</p>
              <p>Experienced</p>
            </div>
          </section>

          <section className='css flex flex-row'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>CSS</p>
              <p>Experienced</p>
            </div>
          </section>

          <section className='javascript flex flex-row'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>Javascript</p>
              <p>Intermediate</p>
            </div>
          </section>

          <section className='react flex flex-row'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>React</p>
              <p>Intermediate</p>
            </div>
          </section>

          <section className='mui flex flex-row'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>Material UI</p>
              <p>Intermediate</p>
            </div>
          </section>

          <section className='tailwind flex flex-row'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>Tailwind</p>
              <p>Intermediate</p>
            </div>
          </section>

        </div>
        <div className='backend flex flex-row justify-space-around items-center'>
          <div className='sbe text-[rgba(32, 32, 32, 0.5)] text-3xl font-bold'>Backend</div>
          <section className='php flex flex-row ml-20'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>PHP</p>
              <p>Intermediate</p>
            </div>
          </section>

          <section className='python flex flex-row ml-4'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>Python</p>
              <p>Beginner</p>
            </div>
          </section>

          <section className='node flex flex-row ml-4'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>NodeJS</p>
              <p>Beginner</p>
            </div>
          </section>

          <section className='express flex flex-row ml-4'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>Express</p>
              <p>Beginner</p>
            </div>
          </section>

        </div>
        <div className='database flex flex-row justify-space-around items-center'>
          <div className='sdb text-[rgba(32, 32, 32, 0.5)] text-3xl font-bold'>Database</div>
          <section className='mysql flex flex-row ml-20'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>MySQL</p>
              <p>Intermediate</p>
            </div>
          </section>

          <section className='mongodb flex flex-row ml-4'>
            <div><img src={checkmark}></img></div>
            <div>
              <p>MongoDB</p>
              <p>Beginner</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Skills;