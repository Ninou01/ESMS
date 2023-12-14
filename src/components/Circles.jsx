import Ellipse from '../assets/Ellipse 67.svg'
const Circles = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 -z-30'>
        <span className='circles absolute w-20 md:w-32 -z-10 bottom-[60px] right-[400px]'><img src={Ellipse} alt="Ellipse" /></span>
        <span className='circles absolute w-20 md:w-32 -z-10  left-[-65px]'><img src={Ellipse} alt="Ellipse" /></span>
        <span className='circles absolute w-44 md:w-60 right-[-4%] -z-10'><img src={Ellipse} alt="Ellipse" /></span>
        <span className='circles absolute w-44 md:w-60 -z-10 bottom-[-130px] left-[100px]'><img src={Ellipse} alt="Ellipse" /></span>
    </div>
  )
}
export default Circles