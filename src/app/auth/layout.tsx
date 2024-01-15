import type { Metadata } from 'next'

import '../../app/globals.css'
import NavBar from '@/components/NavBars/NavBar'

export const metadata: Metadata = {
    title: 'Africars.io Select Through Mutiple African Cars Trucks Bikes and Heavy Equipment',
    description: 'Find your next automobile in your country in Africa.',
}


const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='h-full bg-slate-100'>
            {/* {NavBar} */}
            <NavBar />
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
        </div>
    )
}

export default AuthLayout