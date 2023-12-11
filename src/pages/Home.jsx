/* eslint-disable react/no-unescaped-entities */
import Rectangle from '../assets/Rectangle 18.svg'
import calendar from "../assets/calendar.svg";
import location from "../assets/location.svg";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className='md:hidden'>Tuto Mentor</h1>
        <img src={Rectangle} alt="Rectangle" />
      </div>
      <div>
        <h1 className='sm:hidden md:block'>Tuto Mentor</h1>
          <span>
            <img src={calendar} alt="calendar" />
            <p>December 7th , 2023</p>
          </span>
          <span>
            <img src={location} alt="location" />
            <p className='sm:hidden md:block'>Ecole nationale superieure d'informatique Oued Smar - Alger</p>
            <p className='md:hidden'>ESI-Oued Smar-Alger </p>
          </span>
          <button>
            Get Started
          </button>
      </div>
    </div>
  )
}
export default Home