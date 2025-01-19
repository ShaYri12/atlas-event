import React from 'react'

const NewsLetter = () => {
    return (
        <section className='bg-[#658FFF] py-14 px-5'>
            <div className='max-w-[1660px] w-full mx-auto flex justify-between items-center flex-col lg:flex-row gap-10'>
                <div className='lg:max-w-[745px] w-full space-y-4'>
                    <h3 className='text-3xl sm:text-4xl font-medium text-white'>Subscribe to our Newsletter</h3>

                    <p className='text-lg sm:text-2xl font-normal text-white'>
                        Receive our weekly newsletter & updates with new events from your favourite organizers & venues.
                    </p>
                </div>

                <div className='lg:max-w-[706px] w-full'>
                    <div className='border border-[#2B293D] flex h-[60px] sm:h-20 rounded-[10px] overflow-hidden'>
                        <input type="text" placeholder='Enter your e-mail address' className='w-full h-full flex-1 px-4 py-2 text-base sm:text-xl font-normal outline-none  border-none placeholder:text-[#5A5A5A80]' />

                        <button className='text-lg sm:text-2xl font-bold text-white max-w-[120px] sm:max-w-[184px] w-full bg-[#35519D]'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter