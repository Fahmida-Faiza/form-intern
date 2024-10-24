"use client"

import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams} from 'next/navigation';
import React from 'react';
import { BsGithub, BsGoogle } from "react-icons/bs";
const SocialSignin = () => {
    const router = useRouter()
    const session = useSession()
    // middleware redirect korey
    const searchParams = useSearchParams()
    const  path = searchParams.get('redirect')
// 
    const handleSocialLogin = (provider) => {
        const resp = signIn(provider,{
            // redirect: false
            redirect: true,
            callbackUrl : path ? path : '/'
        })
    }
    if(session.status === 'authenticated'){
        router.push('/')
    }

    return (
        <div>
            <div className="flex items-center justify-center space-x-3">
                <button onClick={() => handleSocialLogin('google')} className="btn  flex items-center justify-center text-green-500">
                    <BsGoogle />
                </button>

                <button onClick={() => handleSocialLogin('github')} className="btn  flex items-center justify-center text-green-500">
                    <BsGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialSignin;