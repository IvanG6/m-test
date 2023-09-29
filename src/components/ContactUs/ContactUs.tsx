import {
  TwitterLogoIcon, 
  InstagramLogoIcon, 
  DiscordLogoIcon, 
  EnvelopeClosedIcon, 
  BellIcon, 
  MoveIcon
} from "@radix-ui/react-icons"
import { ContactForm } from "./СontactForm"

function ContactUs() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className="font-bold text-5xl text-black mb-3">Contact Us</h1>
      <p className=" text-gray-500 font-semibold">Any question or remarks? Just write us a message!</p>

      <div className="flex md:flex-row flex-col items-center gap-12 mt-14">
        <div className="bg-black flex-col flex-grow-0 justify-between md:text-start text-center py-10 px-10 mx-3 overflow-hidden relative rounded-bl-lg rounded-tr-lg rounded-tl-lg">
          <div className="absolute rounded-full w-16 h-16 md:w-20 md:h-20 opacity-10 bg-white right-14 bottom-16" />
          <div className="absolute rounded-full w-64 h-64 md:w-72 md:h-72 opacity-10 bg-white left-2/3 top-3/4"/>
          <div>
            <h3 className="font-bold text-white text-3xl mb-2">Contact Information</h3>
            <p className="text-xs text-gray-300">Say something to start a live chat!</p>
          </div>
          <div className="mt-24">
            <ul className="flex flex-col gap-10">
              <li className="text-gray-200 flex md:flex md:flex-row gap-3 flex-col items-center">
                <BellIcon width={24} height={24} />
                +1012 3456 789
              </li>
              <li className="text-gray-200 flex md:flex md:flex-row gap-3 flex-col items-center">
                <EnvelopeClosedIcon width={24} height={24}/>
                demo@gmail.com
              </li>
              <li className="text-gray-200 flex md:flex md:flex-row gap-3 flex-col items-center">
                <MoveIcon width={24} height={24} />
                132 Dartmouth Street Boston,<br/> Massachusetts 02156 United States
              </li>
            </ul>
          </div>
          <div className="mt-24 md:block flex justify-center">
            <ul className="flex gap-5 items-center">
              <li className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-white">
                <a href="#" className="text-white hover:text-black flex items-center justify-center h-full" target="_blank">
                  <TwitterLogoIcon  />
                </a>
              </li>
              <li className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-white">
                <a href="#" className="text-white hover:text-black flex items-center justify-center h-full" target="_blank">
                  <InstagramLogoIcon />
                </a>
              </li>
              <li className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-white">
                <a href="#" className="text-white hover:text-black flex items-center justify-center h-full" target="_blank">
                  <DiscordLogoIcon />
                </a>  
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUs