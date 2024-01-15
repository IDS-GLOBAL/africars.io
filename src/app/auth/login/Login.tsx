import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
    return (
        <div className='flex'>
            <div className='flex-row'>
                <h2>Login Page</h2>
            </div>

            <div className='flex-row'>
                <Button size={"lg"}>
                    <Link href="/auth/signup">Sign Up</Link>
                </Button>
            </div>

        </div>
    )
}

export default LoginPage