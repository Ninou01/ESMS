/* eslint-disable react/no-unescaped-entities */
import Rectangle from '../assets/Rectangle 18.svg'
import calendar from "../assets/calendar.svg";
import location from "../assets/location.svg";

const Home = () => {
  return (
    <div className='text-white pt-10 md:flex md:flex-row-reverse md:gap-3 md:items-start md:mt-24 md:h-auto md:pt-0 mb-14 md:mb-0'>
      <div className='mb-16 md:w-1/2'>
        <h1 className='md:hidden text-center text-[8vw] font-bold mb-10'>Tuto Mentor</h1>
        <div className='w-full min-h-[200px] overflow-hidden opacity-40'>
          <img src={Rectangle} alt="Rectangle" />
        </div>
      </div>
      <div className='md:w-1/2'>
        <h1 className='hidden md:block text-[8vw] font-bold mb-10 md:text-5xl text-center'>Tuto Mentor</h1>
          <span className='flex items-center justify-start text-[7.5vw] md:text-2xl gap-5 mb-5'>
            <img src={calendar} alt="calendar" />
            <p>December 7th , 2023</p>
          </span>
          <span className='flex items-center justify-start text-[7.5vw] md:text-2xl gap-5 mb-12'>
            <img src={location} alt="location" className='-ml-2 '/>
            <p className='hidden md:block'>Ecole nationale superieure d'informatique Oued Smar - Alger</p>
            <p className='md:hidden'>ESI-Oued Smar-Alger </p>
          </span>
          <button className='text-primary text-3xl rounded-full font-bold text-center
          block m-auto px-6 py-4 bg-[linear-gradient(-100deg,_#F17007,_#f6851d)] cursor-pointer'>
            Register Now!
          </button>
      </div>
    </div>
  )
}
export default Home