// "use client"

// // import { redirect } from 'next/dist/server/api-utils';s
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import {signIn} from "next-auth/react"
// import { useRouter, useSearchParams } from 'next/navigation';
// import SocialSignin from '@/components/SocialSignin';




// const page = () => {
//     const router = useRouter()

//     const searchParams = useSearchParams()
//     const path = searchParams.get("redirect")
//     // login
//     const handleLogin = async (event) => {
//         event.preventDefault();
//        const email= event.target.email.value;
//         const  password=  event.target.password.value;
//         const resp = await signIn('credentials' ,{
//             email, 
//             password,
//              redirect: true,
//              callbackUrl : path ? path :'/'
//         })
//         // console.log(resp)
//         if(resp.status === 200){
//             router.push('/')
//         }
       
       
//     }
    
//     return (
//         <div className='container mx-auto px-24 bg-slate-100 text-black'>
//             <div className='grid grid-cols-2 gap-12'>
//                 <div>
//                     <Image src="/assets/images/login/login.svg" height="540" width="540" alt="login" />
//                 </div>
//                 <div className='border-2 p-12 '>
//                     <form onSubmit={handleLogin} action="">
//                         <h1 className='text-3xl text-green-400'>Login page</h1>
//                         <label htmlFor="email">Email</label><br></br>
//                         <input type="text" name="email" placeholder="your email" className="mt-3 input input-bordered w-full max-w-xs" />
//                         <br></br>
//                         <label htmlFor="password">password</label><br></br>
//                         <input type="text"
//                          name="password"
//                           placeholder="your password" 
//                           className="mt-3 input input-bordered w-full max-w-xs" />
//                         <br />
                        
//                         <button type="submit" className='mt-4 btn btn-primary'>SignIn</button>
//                     {/* google login r kaj */}
//                     <div  className='text-center'>
//                         <h6>or Sign in with</h6>
//                         <SocialSignin/>
//                     </div>

//                     {/*  */}
//                     </form>

//                     <h3 className='text-xl'>not have an account? <Link className='text-red-400 text-2xl ' href={'/signup'}>Signup</Link></h3>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default page;


"use client";
import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialSignin from '@/components/SocialSignin';
import { signIn } from 'next-auth/react';

// Enforces dynamic rendering, prevents static generation
export const dynamic = 'force-dynamic';

const LoginPageContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams(); // useSearchParams can only run client-side
    const path = searchParams.get("redirect");

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const resp = await signIn('credentials', {
            email,
            password,
            redirect: false,
            callbackUrl: path ? path : '/'
        });

        if (resp.status === 200) {
            router.push('/');
        }
    };

    return (
        <div className='container mx-auto px-24 bg-slate-100 text-black'>
            <div className='grid grid-cols-2 gap-12'>
                <div>
                    <Image src="/assets/images/login/login.svg" height="540" width="540" alt="login" />
                </div>
                <div className='border-2 p-12'>
                    <form onSubmit={handleLogin}>
                        <h1 className='text-3xl text-green-400'>Login page</h1>
                        <label htmlFor="email">Email</label><br />
                        <input type="text" name="email" placeholder="your email" className="mt-3 input input-bordered w-full max-w-xs" />
                        <br />
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" placeholder="your password" className="mt-3 input input-bordered w-full max-w-xs" />
                        <br />
                        <button type="submit" className='mt-4 btn btn-primary'>SignIn</button>

                        <div className='text-center'>
                            <h6>or Sign in with</h6>
                            <SocialSignin />
                        </div>
                    </form>
                    <h3 className='text-xl'>
                        Not have an account?
                        <Link className='text-red-400 text-2xl' href={'/signup'}>Signup</Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

const Page = () => {
    return (
        <Suspense fallback={<div>Loading login page...</div>}>
            <LoginPageContent />
        </Suspense>
    );
};

export default Page;
