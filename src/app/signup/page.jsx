"use client"

// import SocialSignin from '@/components/Shared/SocialSignin';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
    // signup
    const handleSignUp = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        console.log(newUser);
        // api request korbo
        const resp = await fetch("https://form-intern-snowy.vercel.app/signup/api" , {
            method: "POST",
            body :JSON.stringify(newUser),
            headers : {
                "content-type" :"application/json"
            }

        })
        // console.log(resp)

// // reset korey likha gula form er
// if(resp.status === 200){
//     event.target.reset()
// }
        
    }
    // 
    return (
        <div>
            <div className='container mx-auto px-24 bg-slate-100 text-black'>
                <div className='grid grid-cols-2 gap-12 items-center'>
                    <div>
                        <Image src="/assets/picture5.jpg" height="540" width="540" alt="login" className='rounded-3xl' />

                    </div>
                    <div className='border-2 p-12 '>
                        <form onSubmit={handleSignUp} action="">
                            <h1 className='text-3xl text-red-400'>Signup page</h1>
                            <label htmlFor="name">Name</label><br></br>
                            <input type="text" name="name" placeholder="your name" className="mt-3 input input-bordered w-full max-w-xs" />
                            <br></br>
                            <label htmlFor="email">Email</label><br></br>
                            <input type="text" name="email" placeholder="your email" className="mt-3 input input-bordered w-full max-w-xs" />
                            <br></br>
                            <label htmlFor="password">password</label><br></br>
                            <input type="text"
                                name="password"
                                placeholder="your password"
                                className="mt-3 input input-bordered w-full max-w-xs" />
                            <br />

                            <button type="submit" className='mt-4 btn btn-primary'>SignIn</button>

                            <div className='text-center'>
                                <h6>or Sign in with</h6>
                                {/* <SocialSignin /> */}
                            </div>
                        </form>

                        <h3 className=''>Already have an account <Link className='text-red-400 text-xl' href={'/login'}>Login</Link></h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUpPage;