import React from 'react'
import {FaChevronDown,FaGlobe,FaLinkedinIn,FaInstagramSquare,FaTwitter,FaYoutube,FaFacebookF} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='pt-[48px] w-[100vw] h-[90vh] overflow-hidden   mx-auto bg-[#F8F8F8] '>
     
     {/* footer Subheader */}
     <div className='max-w-[1080px] justify-between flex mb-[40px] mx-auto'>
        <div className='flex  '>
        <img className='w-[132px] h-[28px]' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"></img>
        </div>

        <div className='flex gap-5 '>
          <div className='w-[112px] cursor-pointer h-[37px] border-[1px] border-[#A9A9A9] flex gap-2  items-center px-[7px] py-[3px] text-center rounded-md '>
            <img className='w-[22px] h-[14px]'  src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png'></img>
            <p className='text-lg   '>India</p>
            <FaChevronDown/>
          </div>

          <div className='w-[112px] cursor-pointer border-[#A9A9A9] h-[37px] border-[1px] flex gap-2  items-center px-[4px] py-[3px] text-center rounded-md '>
            < FaGlobe/>
            <p className='capitalize text-base '> English</p>
            <FaChevronDown/>
          </div>
        </div>
        
     </div>

     {/* footer contact section */}

     <div className='w-[1080px] mx-auto text-[#1E1E1E] flex gap-8 mb-32    '>

      <div className='w-[201px] h-[186px]'>
        <p className='text-[#1E1E1E]  uppercase mb-3 text-[1.1rem] font-semibold tracking-widest'>about zomato</p>
        <ul>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Blog</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>work with us</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Investor Relations</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>who we are</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Report Fraud</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Contact us</a></li>
        </ul>
      </div>

      <div className='w-[210px] h-[186px]'>
        <p className='text-[#1E1E1E] uppercase mb-3 text-[1.1rem] font-semibold tracking-widest'>ZOMAVERSE</p>
        <ul>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Zomato</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Blinkit</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Feeding India</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Hyperpure</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Zomaland</a></li>
          
        </ul>
      </div>

      <div className='w-[275px] h-[186px]'>
        <p className='text-[#1E1E1E] uppercase mb-3 text-[1.1rem] font-semibold tracking-widest'>FOR RESTAURANTS</p>
        <ul>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Partner With Us</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Apps For You</a></li>


          
          
        </ul>

        <p className='text-[#1E1E1E] uppercase mt-5 mb-3 text-[1.1rem] font-semibold tracking-widest'>FOR ENTERPRISES</p>
        <ul>
        <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Zomato For Enterprises</a></li>
        
        </ul>

      </div>


      <div className='w-[183px] h-[186px]'>
        <p className='text-[#1E1E1E] uppercase mb-3 text-[1.1rem] font-semibold tracking-widest'>LEARN MORE</p>
        <ul>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Privacy</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Security</a></li>
          
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Terms</a></li>
          <li className='capitalize opacity-80 mt-[5px] '><a href='#'>Sitemap</a></li>
          
        </ul>
      </div>

      <div className='w-[201px] h-[186px]'>
        <p className='text-[#1E1E1E] uppercase mb-3 text-[1.1rem] font-semibold tracking-widest'>Social Links</p>
        <ul className='flex gap-4 items-center mb-6 '>
          <li className='capitalize opacity-80 mt-[5px]  bg-black rounded-full h-[30px] w-[30px] flex justify-center items-center  text-white'><a href='#'><FaLinkedinIn/></a></li>
          <li className='capitalize opacity-80 mt-[5px]  bg-black rounded-full h-[30px] w-[30px] flex justify-center items-center text-white'><a href='#'><FaInstagramSquare/></a></li>
          <li className='capitalize opacity-80 mt-[5px]  bg-black rounded-full h-[30px] w-[30px] flex justify-center items-center text-white'><a href='#'><FaTwitter/></a></li>
          <li className='capitalize opacity-80 mt-[5px]  bg-black rounded-full h-[30px] w-[30px] flex justify-center items-center text-white'><a href='#'><FaYoutube/></a></li>
          <li className='capitalize opacity-80 mt-[5px]  bg-black rounded-full h-[30px] w-[30px]  flex justify-center items-center text-white'><a href='#'><FaFacebookF/></a></li>
          
        </ul>
        <img className='mb-6 cursor-pointer' src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png'></img>
        <img className='cursor-pointer mb-6 ' src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'></img>
      </div>

      



     </div>

     <div className='w-[1080px] mx-auto mb-12 mt-20 h-[1px] bg-[#1E1E1E]'></div>

      <div className='w-[1080px] mx-auto'>
        <p className='text-[#1E1E1E] opacity-80 '>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
