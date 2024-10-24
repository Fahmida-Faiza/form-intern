import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = () => {
    return (
        <div>
            {/*card  */}

            <div className='mx-auto  w-[90%] grid grid-cols-1 lg:grid-cols-3 gap-4 text-black '>
                <div className="card hover:shadow-xl">
                    {/*..............................................  */}
                    <div className="group relative">
                        {/* Image 1 - Shown by default */}

                        <figure>
                            <Image
                                src="/assets/shoes-1.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                        </figure>

                        <figure>
                            <Image
                                src="/assets/shoe_2.jpg" width="1200" height="1200" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" alt="Banner 2" />
                        </figure>


                    </div>

                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">CONTACT INFORMATION</h2>
                        {/* <p>North Star ROYAL Casual Lace-Up Sneaker for Men</p>
                        <div className=''>
                            <span className='text-gray-400'>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div> */}

                        <div className="card-actions justify-center">
                            {/* <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button> */}
                            <Link href={`/contact`}>
                                <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">View Details</button></Link>

                        </div>
                    </div>
                </div>

                {/* 2nd card */}
                <div className="card   hover:shadow-xl ">
                    {/*..............................................  */}
                    <div className="group relative">
                        {/* Image 1 - Shown by default */}

                        <figure>
                            <Image
                                src="/assets/shoes2.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                        </figure>

                        <figure>
                            <Image
                                src="/assets/shoes2.png" width="1200" height="1200" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" alt="Banner 2" />
                        </figure>


                    </div>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">PARTY INVITE</h2>
                        {/* <p>North Star ROYAL Casual Lace-Up Sneaker for Men</p>
                        <div className=''>
                            <span className='text-gray-400'>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div> */}

                        <div className="card-actions justify-center">
                            {/* <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">Shop Now</button> */}
                            <Link href={`/party`}>  <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">View Details</button></Link>

                        </div>
                    </div>
                </div>

                {/* 3rd card */}
                <div className="card hover:shadow-xl">
                    <div className="group relative">
                        {/* Image 1 - Shown by default */}

                        <figure>
                            <Image
                                src="/assets/shoes-1.jpg" width="1200" height="1200" className="w-full h-full object-cover" alt="Banner 2" />
                        </figure>

                        <figure>
                            <Image
                                src="/assets/shoe_2.jpg" width="1200" height="1200" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" alt="Banner 2" />
                        </figure>


                    </div>

                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">EVENT REGISTRATION</h2>
                        {/* <p>North Star ROYAL Casual Lace-Up Sneaker for Men</p>



                        <div className=''>
                            <span className='text-gray-400'>Tk <del>3299</del> </span>
                            <span className='text-red-500'>Tk 2960</span>
                        </div> */}


                        <div className="card-actions justify-center ">
                            <Link href={`/event`}>  <button className="btn  text-white w-full  hover:btn-error  hover:text-white ">View Details</button></Link>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default ServiceCard;