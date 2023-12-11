import IOS from '../assets/IOS.svg'
const Cse = () => {
    return (
      <div>
        <div>
          <h1>ABOUT CSE</h1>
          <p>
            {`
            CSE -Club Scientifique de l'ESI- is a student club at the Higher National School of Computer Science, Algiers.
            It is created for computer science, high technology, robotics, design and anything else technology-related enthusiasts.
            CSE's activities made it establish
            itself on a national & international
            scale and became one of the 
            country's largest & most active
            clubs.
            `}
          </p>
        </div>
        <div>
            <img src={IOS} alt="ios" />
        </div>
      </div>
    )
  }
  export default Cse