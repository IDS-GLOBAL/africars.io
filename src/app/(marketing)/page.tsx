import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import { Medal } from 'lucide-react'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import React from 'react'
import Link from 'next/link'

import localFont from 'next/font/local'

const headingFont = localFont({
    src: "../../../public/fonts/font.woff2"
})


const Marketing = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn("flex items-center justify-center flex-col", headingFont.className,)}>
                <div className='fw-bolder text-2xl mb-10'>Turn Your Vehicle Into Cash</div>
                <div className='flex items-center border shadow-sm p-4 bg-amber-300 text-amber-600 rounded-full uppercase mb-6'>
                    <Medal className='h-6 w-6 mr-2' />
                    No. 1 task management
                </div>
                <div className='text-3xl md:text-4xl text-center text-neutral-600'>
                    Africars.io can you help sell your personal vehicle.
                </div>

                <div className='text-2xl md:text-4xl bg-gradient-to-r from-fuchsia-600 to-pink-900 text-white px-4 p-2 rounded-md mt-20 pt-4 pb-4 w-fit cursor-pointer'>
                    Get Started Now
                </div>
                <div className="flex mt-4 mb-5">
                    <Button>
                        <Link href='/signup'>Sign up</Link>
                    </Button>
                </div>
                <div className="flex mt-4 mb-5">
                    <Button>
                        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
                    </Button>
                </div>
                <div className="flex mt-4 mb-5">

                </div>

            </div>
        </div>
    )
}

export default Marketing