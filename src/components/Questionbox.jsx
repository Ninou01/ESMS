/* eslint-disable react/prop-types */
import arrow from '../assets/ArrowCircleUp.svg'

const Questionbox = ({ question, answer, onClick, isQuestionOpen }) => {
  return (
    <div className="box w-full h-full bg-[#83889d] text-white relative ">
        <div className="question flex justify-between items-center p-2 md:pl-24 cursor-pointer"
        onClick={onClick}>
        <span className=' text-xl font-bold'>{question}</span>
        <span className={`${isQuestionOpen ? "-rotate-180" : "rotate-0"} transition-[transform] duration-500`}>
            <img src={arrow} alt="arrow" className='w-10' />
        </span>
        </div>
        <div className={`aswer overflow-hidden ${isQuestionOpen ? "max-h-40" : "max-h-0"} transition-[max-height] duration-500`}>
        <div className='p-5'>
            <p className='bg-white font-bold p-3 text-primary rounded-lg'>
                {answer}
            </p>
        </div>
        </div>
    </div>
  )
}
export default Questionbox