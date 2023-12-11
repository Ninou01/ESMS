/* eslint-disable react/no-unescaped-entities */
import longLogo from '../assets/Long LOGO 3.svg'
const Aboutus = () => {
  return (
    <div>
      <h1>What’s Tuto-Mentors?</h1>
      <div>
        <div>
          Tuto-Mentors is a three-day event focusing on computer tutorial creation. 
          Enthusiasts and experts collaborate to produce instructional videos, 
          competing for the best educational content title. 
          The goal is to promote knowledge sharing, emphasizing participants' 
          technical and communication skills.
        </div>
        <div>
          <img src={longLogo} alt="tuto-it" />
        </div>
      </div>
    </div>
  )
}
export default Aboutus