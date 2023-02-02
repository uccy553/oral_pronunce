import React from 'react'
import '../styles/PreviewPost.css'
import avatar from '../assets/avatar.jpg';
import right from '../assets/chevron-right.svg'
import left from '../assets/chevron-left.svg'
import { BiWorld } from 'react-icons/bi'
import devs from '../assets/devs.jpg';
import { AiFillLike, AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import { FcIdea } from 'react-icons/fc'
import { RiShareForwardLine } from 'react-icons/ri'
import { IoIosSend } from 'react-icons/io'
import LinkedIn from '../assets/LinkedIn.svg'
import facebook from '../assets/Facebook-logo.svg'
import twitter from '../assets/Twitter-logo.svg'
import instagram from '../assets/instagram-logo.svg'
import { SlOptionsVertical } from 'react-icons/sl'


const PreviewPost = () => {
  return (
    <section>
            <h2 style={{ marginTop: '1em', marginLeft: '1.4em' }}>Preview Post</h2>
        <div className='preview'>

            <div className='preview_social'>

                <img src={avatar} alt="avatar" className="a_vatar" />
                <div>
                    <small>Shireen Amin - 2 st</small>
                    <small>UI/UX Designer</small>
                    <small>17h . <BiWorld /></small>
                </div>

                <SlOptionsVertical className='option' />
            </div>

            <div className='preview-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum rem corrupti et molestias</p>
                <img src={devs} alt="developers" className='devs' />
            </div>

            <div className='icon'>
                <small><AiFillLike color='blue' /> <FcIdea /> 77</small>
                <small>52 comments</small>
            </div>

            <div className='icon-section'>
                <div>
                    <AiFillLike />
                    <small>Like</small>
                </div>

                <div>
                    <AiOutlineComment />
                    <small>Comment</small>
                </div>

                <div>
                    <RiShareForwardLine />
                    <small>Share</small>
                </div>

                <div>
                    <IoIosSend />
                    <small>Send</small>
                </div>
            </div>
        </div>

        <div className='arrow'>
            <img src={left} alt="left-arrow" />

            <div className='arrow_image'>
                <img src={LinkedIn} alt="linkedin" />
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
            </div>

            <img src={right} alt="right-arrow" />
        </div>

        <div className='btn'>
            <button>Post</button>
        </div>

    </section>
  )
}

export default PreviewPost