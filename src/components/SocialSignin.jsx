"use client"

import { signIn } from 'next-auth/react';
import React from 'react';
import { BsGithub, BsGoogle } from "react-icons/bs";
const SocialSignin = () => {
    const handleSocialLogin = async (provider) => {
        const resp = signIn(provider,{
            redirect: true,
        })
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