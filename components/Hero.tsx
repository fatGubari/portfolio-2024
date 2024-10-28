/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaDownload } from 'react-icons/fa6'
const PDF_URL = "http://localhost:3000/FatimaResume.pdf"

const Hero = () => {


    return (
        <div className='pb-20 pt-36'>
            {/* Spotlight */}
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            {/* Gird and Dot Backgrounds */}
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            {/* Text Generate Effect */}
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className=' uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Welcome to my website</h2>
                    <TextGenerateEffect words={'Crafting digital dreams one line of code  at a time '} className='text-center text-[40px] md:text-5xl lg:text-6xl' />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&apos;m Fatima, A full-Stack Developer</p>

                    {/* Magic Button Tailwind CSS buttons */}
                    {/* < href="#about"> */}
                    <MagicButton
                        title='Download CV'
                        icon={<FaDownload />}
                        position='right'
                        otherClasses={''}
                        downloadUrl={PDF_URL} />
                    {/* </a> */}

                </div>
            </div>
        </div>
    )
}

export default Hero