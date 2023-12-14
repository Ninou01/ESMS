/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import footerBG from '../assets/footer-bg.svg'
import linkedinIcon from '../assets/linkedin-icon.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import youtubeIcon from '../assets/youtube-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import cseLogo from '../assets/cse-logo.svg'
const Footer = ({ isMobileScreen }) => {
  return (
    <footer className='w-full h-48 bg-[center_top] bg-cover bg-no-repeat' >
        <div className='max-w-6xl m-auto px-12 relative h-full'>
          {!isMobileScreen && 
            <span className='absolute -translate-y-1/2 top-1/2 left-[20%]'>
              <img src={cseLogo} alt="cse-logo" className='w-24'/>
            </span>
          }
          <div className='w-1/3 m-auto flex flex-col justify-center gap-6 h-full '>
              <h2 className='text-center font-bold text-orange text-2xl'>
                CONTACT US 
              </h2>
              <div className='flex justify-between'>
                <span className='cursor-pointer'>
                  <img src={linkedinIcon} alt="linkedin-icon" className='w-7' />
                </span>
                <span className='cursor-pointer'>
                  <img src={facebookIcon} alt="facebook-icon" className='w-7' />
                </span>
                <span className='cursor-pointer'>
                  <img src={youtubeIcon} alt="youtube-icon" className='w-7' />
                </span>
                <span className='cursor-pointer'>
                  <img src={twitterIcon} alt="twitter-icon" className='w-7' />
                </span>
                <span className='cursor-pointer'>
                  <img src={instagramIcon} alt="instagram-icon" className='w-7' />
                </span>
              </div>
          </div>
        </div>
    </footer>
  )
}
export default Footer