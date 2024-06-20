import Link from 'next/link'
import React from 'react'
import { auth } from '@clerk/nextjs'

const Header = () => {
    const userId = auth();
    console.log(userId);
  return (
    <>
        <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
            <div className="flex items-center">
                <Link href="/">
                    <div className="text-lg uppercase font-bold text-white">
                        Clerk App
                    </div>
                </Link>
            </div>
            <div className="text-white">
                <Link href="/signin" className='text-gray-300 hover:text-white mr-4'>Sign in</Link>
                <Link href="/signup" className='text-gray-300 hover:text-white mr-4'>Sign up</Link>
            </div>
        </nav>
    </>
  )
}

export default Header