import Image from 'next/image'
import React from 'react'

const CreateEvent = () => {
    return (
        <section className='bg-[#FAFAFA] pt-20 pb-14 px-5'>
            <div className='max-w-[1360px] w-full mx-auto flex justify-between items-center flex-col lg:flex-row gap-10'>
                <div className='lg:max-w-[1148px] w-full space-y-4 text-center lg:text-start'>
                    <h3 className='text-3xl sm:text-[40px] sm:leading-[54px] font-medium'>Create an event with Atlas Events</h3>

                    <p className='text-lg sm:text-2xl font-normal'>
                        Got a show, event, activity or a great experience? Explore our full suite of event planning tools.
                    </p>
                </div>

                <button className='bg-[#658FFF] text-white flex items-center gap-[10px] rounded-[10px] h-[65px] xsm:h-20 justify-center p-4 max-w-[220px] sm:max-w-[318px] w-full font-semibold text-xl sm:text-3xl transition-all duration-300 ease-out transform hover:opacity-90'>
                    <Image src="/assets/calendar-icon.svg" alt='calendar icon' width={100} height={100} loading='lazy' className='w-6 sm:w-8 h-7 sm:h-9' />
                    Create Event
                </button>
            </div>
        </section>
    )
}

export default CreateEvent