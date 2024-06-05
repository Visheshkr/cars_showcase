import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image 
                    src="/StarExpo.png"
                    alt="Star Expo Logo"
                    width={150}
                    height={18}
                    className='object-contain'
                />
            </Link>
            <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </nav>
    </header>
  )
}

export default Navbar;