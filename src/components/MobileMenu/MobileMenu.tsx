import { Link } from 'react-router-dom';
import cn from "classnames";
import { Cross1Icon, AvatarIcon, LockClosedIcon } from "@radix-ui/react-icons";

const MobileMenu = ({ closeMobileMenu }: { closeMobileMenu: (val: boolean) => void }) => {
	return (
		<div className="fixed bg-black top-0 left-0 w-full h-full px-8 py-5 z-50">
			<div className=" flex justify-between mb-14">
				<h3 className=" text-3xl text-white">Logo Here</h3>
				<button
					onClick={() => closeMobileMenu(false)}
				>
					<Cross1Icon className='text-white' width={24} height={24} />
				</button>
			</div>
			<nav className='mb-16'>
				<ul className=" text-xl text-gray-400 flex flex-col gap-10">
					<li className={cn({ active_mobile: location.pathname === '/' })}>
						<Link
							to="/"
							className="active:text-white"
							onClick={() => closeMobileMenu(false)}
						>
							Home
						</Link>
					</li>
					<li className={cn({ active_mobile: location.pathname === '/features' })}>
						<Link 
							to="/features" 
							className="active:text-white"
							onClick={() => closeMobileMenu(false)}
						>
							Features
						</Link>
					</li>
					<li className={cn({ active_mobile: location.pathname === '/blogs' })}>
						<Link 
							to="/blogs" 
							className="active:text-white"
							onClick={() => closeMobileMenu(false)}
						>
							Blog
						</Link>
					</li>
					<li className={cn({ active_mobile: location.pathname === '/shop' })}>
						<Link 
							to="/shop" 
							className="active:text-white"
							onClick={() => closeMobileMenu(false)}
						>
							Shop
						</Link>
					</li>
					<li className={cn({ active_mobile: location.pathname === '/about' })}>
						<Link 
							to="/about" 
							className="active:text-white"
							onClick={() => closeMobileMenu(false)}
						>
							About
						</Link>
					</li>
					<li className={cn({ active_mobile: location.pathname === '/contact' })}>
						<Link 
							to="/contact" 
							className="active:text-white"
							onClick={() => closeMobileMenu(false)}
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>

			<div>
				<ul className='flex justify-center gap-7 '>
					<li>
						<Link to="/user">
							<AvatarIcon className='text-white' width={36} height={36} />
						</Link>
					</li>
					<li>
						<Link to="/bracket">
							<LockClosedIcon className='text-white' width={36} height={36} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MobileMenu