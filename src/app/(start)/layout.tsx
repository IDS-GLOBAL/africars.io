import type { Metadata } from 'next'

import '../../app/globals.css'

export const metadata: Metadata = {
    title: 'Africars.io Select Through Mutiple African Cars Trucks Bikes and Heavy Equipment',
    description: 'Find your next automobile in your country in Africa.',
}


const StartLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='h-full bg-slate-100'>
            {/* {NavBar} */}
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
        </div>
    )
}

export default StartLayout