import {LuInstagram,LuFacebook,LuLinkedin,LuTwitter} from 'react-icons/lu'
const Footer = () => {
  return (
    <div className="px-3">
      <div className="border-t-2 p-5 font-bold flex flex-col md:flex-row  items-center justify-between border-black ">
        <div className="text-3xl acme-regular">MERNSTORE</div>
        <div>
        <div className="flex justify-center items-center gap-3">
          <div className="text-3xl acme-regular text-center">Follow Us</div>
          <div className="text-3xl acme-regular">|</div>
          <div className="text-3xl acme-regular text-center">Contact Us</div>
        </div>
        <div className='flex-col flex justify-center items-center gap-3'>
          <div>Contact No: +91-6290517107</div>
          <div className="flex justify-center items-center gap-4 ">
            <a title='instagram' href='https://www.instagram.com/sdasgupta39/' className='p-2 cursor-pointer bg-green-200 rounded-full'><LuInstagram /></a>
            <a  title='facebook' href='https://www.facebook.com/' className='p-2 cursor-pointer bg-red-200 rounded-full'><LuFacebook/></a>
            <a title='linkedin'
             href='https://www.linkedin.com/in/sebanti-dasgupta-515541243/' className='p-2 cursor-pointer bg-pink-200 rounded-full'><LuLinkedin/></a>
            <a title='twitter' href='https://x.com/Sebanti3092003' className='p-2 cursor-pointer bg-blue-200 rounded-full'><LuTwitter/></a>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
