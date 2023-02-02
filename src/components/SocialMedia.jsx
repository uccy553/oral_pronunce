import React from 'react'
import instagram from '../assets/instagram-5.svg'
import twitter from '../assets/Twitter.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import facebook from '../assets/Facebook.svg'

const SocialMedia = () => {
  return (
    <div className='social-info'>
        <div className='social_info'>
            <div>
                <img src={instagram} alt="insta" className="social-img" />
                <p>Instagram</p>
            </div>
            <input type="checkbox"  />
        </div>

        <div className='social_info'>
            <div>
                <img src={twitter} alt="twitter" className="social-img" />
                <p>Twitter</p>
            </div>
            <input type="checkbox"  />
        </div>

        <div className='social_info'>
            <div>
                <img src={LinkedIn} alt="linkedin" className="social-img" />
                <p>LinkedIn</p>
            </div>
            <input type="checkbox"  />
        </div>

        <div className='social_info'>
            <div>
                <img src={facebook} alt="facebook" className="social-img" />
                <p>Facebook</p>
            </div>
            <input type="checkbox"  />
        </div>
    </div>
  )
}

export default SocialMedia