import Ellipse from '../assets/Ellipse 67.svg'
const Circles = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 -z-30'>
        <span className='circles absolute w-20 md:w-32 -z-10 right-0 bottom-52 md:bottom-[60px] md:right-[400px]'>
          <img src={Ellipse} alt="Ellipse" />
        </span>
        <span className='circles absolute w-28 top-32 -left-16 md:w-32 -z-10  md:left-[-65px] md:top-auto'>
          <img src={Ellipse} alt="Ellipse" />
        </span>
        <span className='circles absolute w-44 md:w-60 right-[-4%] -z-10'>
          <img src={Ellipse} alt="Ellipse" />
        </span>
        <span className='circles absolute w-44 md:w-60 -z-10 bottom-0 -left-12 md:bottom-[-130px] md:left-[100px]'>
          <img src={Ellipse} alt="Ellipse" />
        </span>
    </div>
  )
}
export default Circles