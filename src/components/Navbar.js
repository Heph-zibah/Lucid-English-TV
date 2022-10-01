import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className='fixed left-0 top-0 z-50 bg-white  w-full'>
			<header className='flex items-center justify-between px-[30px] md:px-[60px] lg:px[80px] xl:px-[120px] py-[30px] '>
				<div className='flex items-center'>
					<h1 className='text-[28px] lg:text-[32px] font-bold text-[#FF0000] font-[Roboto]'>
						LUCID ENGLISH
					</h1>
					<BsYoutube className='text-[32px] text-[#FF0000] pl-2' />
				</div>
				<ul className='lg:flex hidden font-bold text-[#FF0000] uppercase text-[20px]'>
					<li className='p-4'>Home</li>
					<li className='p-4'>About</li>
					<li className='p-4'>Contact</li>
					<li className='p-4'>Write</li>
					<li className='p-4'>Logout</li>
				</ul>
				<div onClick={handleNav} className='block lg:hidden'>
					{nav ? (
						<AiOutlineClose className='text-3xl text-[#ff0000]' />
					) : (
						<AiOutlineMenu className='text-3xl text-[#ff0000]' />
					)}
				</div>
				<div
					className={
						nav
							? 'fixed p-[30px]  left-0 top-0 w-[100%] h-full bg-black ease-in-out duration-500'
							: 'fixed left-[-100%]'
					}
				>
					<div className='flex justify-between items-center'>
						<div className='flex items-center'>
							<h1 className='text-[32px] font-bold text-[#FF0000] opacity-80'>
								LUCID ENGLISH
							</h1>
							<BsYoutube className='text-[32px] text-[#FF0000] pl-2' />
						</div>
						<div onClick={handleNav} className='block md:hidden'>
							{nav ? (
								<AiOutlineClose className='text-3xl text-[#ff0000]' />
							) : (
								<AiOutlineMenu className='text-3xl text-[#ff0000]' />
							)}
						</div>
					</div>
					<ul className='pt-24 uppercase text-center text-white'>
						<li className='p-4  border-b  border-gray-300'>Home</li>
						<li className='p-4  border-b  border-gray-300'>About</li>
						<li className='p-4  border-b  border-gray-300'>Contact</li>
						<li className='p-4  border-b  border-gray-300'>Write</li>
						<li className='p-4  border-b  border-gray-300'>Logout</li>
					</ul>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
