/* eslint-disable react/no-unescaped-entities */
import CSE from '../assets/cse.svg'
const Cse = () => {
    return (
      <div className='mt-12 text-white mb-12 md:mb-0'>
        <h1 className='text-center text-[7.7vw] font-bold md:text-6xl'>ABOUT CSE</h1>
        <div className=' md:flex'>
          <div className='md:w-1/2 md:flex md:items-center mt-0 mb-10'>
            <div className='md:mb-0 md:text-xl mt-10 '>
              <p>CSE -Club Scientifique de l'ESI- is a student club at the Higher National School of Computer Science, Algiers.</p>
              <p>It is created for computer science, high technology, robotics, design and anything else technology-related enthusiasts.</p>
              <p>
                CSE's activities made it establish
                itself on a national & international
                scale and became one of the
                country's largest & most active
                clubs.
              </p>
            </div>
          </div>
          <div className='md:flex md:items-center md:w-1/2'>
            <img src={CSE} alt="cse" className='md:w-4/5 md:m-auto'/>
          </div>
        </div>
      </div>
    )
  }
  export default Cse