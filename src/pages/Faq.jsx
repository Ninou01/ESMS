/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Questionbox from '../components/Questionbox'

const QA_Array = [
  {
    q: 'How can we participate ?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id '
  },
  {
    q: 'Do I need to have a team before joining ?',
    a: 'Proin cursus magna nec iaculis molestie. Sed lacinia, dui non congue auctor, nisi ligula tincidunt mauris, ut tempus ligula nisl et nisi. Etiam cursus'
  },
  {
    q: 'Why join us ?',
    a: 'Quisque vitae augue tincidunt, eleifend eros a, placerat arcu. Nullam augue leo, hendrerit quis venenatis et, aliquet eu purus. Donec ac erat ligula. Nunc eleifend l '
  },
  {
    q: 'Is it free ?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id '
  },
]
const Faq = () => {
  const [isOpen, setIsOpen] = useState(new Array(QA_Array.length).fill(false));

  const toggleDropdown = (index) => {
    const updatedState = [...isOpen];
    updatedState[index] = !updatedState[index];
    setIsOpen(updatedState);
  };
    return (
      <div className='mt-12'>
        <div>
          <h1 className='font-bold text-center text-5xl text-white mb-10'>FAQ</h1>
        </div>
        <div className='flex flex-col gap-7 mb-10'>
          {
            QA_Array.map((element, i) => {
              return <Questionbox key={i}
              question={element['q']}
              answer={element['a']}
              isQuestionOpen={isOpen[i]}
              onClick={() => toggleDropdown(i)}/>
            })
          }
        </div>
      </div>
    )
  }
  export default Faq