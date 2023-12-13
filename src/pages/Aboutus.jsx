/* eslint-disable react/no-unescaped-entities */
import longLogo from '../assets/Long LOGO 3.svg'
const Aboutus = () => {
  return (
    <div className='mt-12 text-white mb-12 md:mb-0'>
      <h1 className='text-center text-[7.7vw] font-bold md:text-6xl'>What’s Tuto-Mentors?</h1>
      <div className='mt-10 md:flex'>
        <div className='mb-10 md:mb-0 md:flex md:items-center md:text-xl md:w-1/2' style={{wordSpacing: '1rem'}}>
          <p>
            Tuto-Mentors is a three-day event focusing on computer tutorial creation.
            Enthusiasts and experts collaborate to produce instructional videos,
            competing for the best educational content title.
            The goal is to promote knowledge sharing, emphasizing participants'
            technical and communication skills.
          </p>
        </div>
        <div className='md:flex md:items-center md:w-1/2'>
          <img src={longLogo} alt="tuto-it" className='md:w-4/5 md:m-auto' />
        </div>
      </div>
    </div>
  )
}
export default Aboutus