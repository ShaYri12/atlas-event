import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
    return (
        <div className='px-4'>
            <header className='max-w-[1660px] mx-auto w-full flex items-center justify-between h-16 md:h-24'>
                <Link href="/">
                    <Image src="/assets/logo.svg" alt='logo' width={100} height={100} className='w-auto h-9 md:h-auto -ml-4 md:-ml-6' />
                </Link>
            </header>

            <form className='max-w-[750px] w-full mx-auto py-16'>
                <h1 className='text-3xl md:text-4xl font-extrabold text-[#2D2C3C] text-center mb-14'>Log In</h1>

                <div>
                    <label htmlFor="phonenumber-email" className='text-[#636363] text-lg md:text-xl font-normal block pb-[6px]'>Phone Number or Email</label>
                    <input type="text" className='border border-[#828282B2] h-[60px] text-lg w-full rounded-[10px] px-3 mb-5 md:mb-10' />
                </div>

                <button className='text-2xl font-bold bg-[#658FFF] rounded-[10px] h-[60px] text-white w-full px-3 transition-all duration-300 ease-out transform hover:opacity-90'>
                    Send a link
                </button>



                <div className='flex items-center gap-4 text-[#A3A3A3] text-lg md:text-2xl mt-10 md:mt-24'>
                    <div className='bg-[#6F6F6F4D] h-[1px] flex-1'></div>
                    <div>OR</div>
                    <div className='bg-[#6F6F6F4D] h-[1px] flex-1'></div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 md:gap-10'>
                    <button className='text-lg md:text-2xl font-bold border border-[#A3A3A3] hover:border-black hover:text-black flex items-center justify-center gap-3 rounded-[10px] h-[60px] text-[#2D2C3C] w-full px-3 transition-all duration-300 ease-out transform hover:opacity-90'>
                        <Image src="/assets/google.svg" alt='google' width={20} height={20} className='h-9 w-auto' />
                        Sign up with Google
                    </button>

                    <button className='text-lg md:text-2xl font-bold border border-[#A3A3A3] hover:border-black hover:text-black flex items-center justify-center gap-3 rounded-[10px] h-[60px] text-[#2D2C3C] w-full px-3 transition-all duration-300 ease-out transform hover:opacity-90'>
                        <Image src="/assets/apple.svg" alt='apple' width={20} height={20} className='h-9 w-auto' />
                        Sign up with Apple
                    </button>
                </div>

                <div className='flex justify-center pt-5 md:pt-10'>
                    <p className='text-[#636363] text-lg md:text-xl'>Don&apos;t have an account? <Link href="#" className='text-[#2D2C3C] hover:text-[#658FFF] font-bold inline-block'> Sign Up</Link></p>
                </div>
            </form>
        </div>
    )
}

export default SignIn