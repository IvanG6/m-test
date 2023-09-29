import { BellIcon, MoveIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { ProfileForm } from './ProfileForm'

function Footer() {

  return (
    <>
      <div className='bg-black text-white w-full py-5 px-5 sm:px-20 mx-auto'>
        <h1 className='text-center text-4xl font-bold mb-8 mt-3'>Logo Here</h1>

        <hr className='mb-5' />

        <div className='grid grid-cols-2 sm:grid-cols-5 gap-10'>
          <div className='w-full'>
            Reach us
            <ul className='grid gap-3 mt-3 text-xs text-gray-200'>
              <li>
                <BellIcon className='mb-1' />
                +1012 3456 789
              </li>
              <li>
                <EnvelopeClosedIcon className='mb-1' />
                demo@gmail.com
              </li>
              <li>
                <MoveIcon className='mb-1' />
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </li>
            </ul>
          </div>
          <div className='w-full'>
            Legal
            <ul className='grid gap-3 mt-3 text-xs text-gray-200'>
              <li>
                <Link to='/privacy-policy'>Privacy Policy</Link>
              </li>
              <li>
                <Link to='/terms&services'>Terms & Services</Link>
              </li>
              <li>
                <Link to='/terms'>Terms of Use</Link>
              </li>
              <li>
                <Link to='/refund'>Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            Company
            <ul className='text-xs grid gap-3 mt-3 text-gray-200'>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/blogs'>Blogs</Link>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            Quick Links
            <ul className='grid gap-3 mt-3 text-xs text-gray-200'>
              <li><a href="#" target='_blank'>Techlabz Keybox</a></li>
              <li><a href="#" target='_blank'>Downloads</a></li>
              <li><a href="#" target='_blank'>Forum</a></li>
            </ul>
          </div>
          <div className='w-full col-span-2 md:col-span-1 py-3 px-2 bg-stone-900 rounded-lg'>
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer