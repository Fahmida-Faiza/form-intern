// "use client"

// import { useSession } from 'next-auth/react';
// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// const Contact = ({params}) => {

//     const { data } = useSession();
//     const [booking, setBooking] = useState([]);


   




//     useEffect(() => {
//         const loadBooking = async () => {
//             const bookingDetail = await fetch(
//                 `http://localhost:3000/my-bookings/api/booking/${params.id}`
//             );
//             const data = await bookingDetail.json();
//             setBooking(data.data);
//         };
//     }, [params.id]);




//     const handleBooking = async (event) => {
//         event.preventDefault();
//         const newBooking = {
//             email: data?.user?.email,
//             name: data?.user?.name,
//             address: event.target.address.value,
//             phone: event.target.phone.value,
//             service: "contact"
//             // date: event.target.date.value,



//         }

//         // api
//         const resp = await fetch('http://localhost:3000/bookings/api', {
//             method: 'POST',
//             body: JSON.stringify(newBooking),
//             headers: {
//                 "content-type": "application/json"
//             }
//         })
//         // console.log(resp)
//         const response = await resp?.json()
//         toast.success(response?.message)
//         event.target.reset()
//     }

//     const handleUpdateBooking = async (event) => {
//         event.preventDefault();
//         const updatedBooking = {
//             // date: event.target.date.value,
//             phone: event.target.phone.value,
//             address: event.target.address.value,
//         };
//         const resp = await fetch(
//             `http://localhost:3000/my-bookings/api/booking/${params.id}`,
//             {
//                 method: "PATCH",
//                 body: JSON.stringify(updatedBooking),
//                 headers: {
//                     "content-type": "application/json",
//                 },
//             }
//         );
//         if (resp.status === 200) {
//             toast.success("Updated Successfully")
//         }
//     };






//     return (
//         <div className='w-4/5 mx-auto bg-green-200 my-5'>
//             <h3 className='text-blue-700 font-extrabold text-center text-5xl'>This is Update page</h3>

//             <form onSubmit={handleUpdateBooking}>


//                 <label className="input input-bordered flex items-center gap-2 my-5 py-10 bg-white text-black">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 16 16"
//                         fill="currentColor"
//                         className="h-4 w-4 opacity-70">
//                         <path
//                             d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                     </svg>
//                     <input defaultValue={data?.user?.name} name="name" type="text" className="grow" placeholder="Name" />
//                 </label>


//                 <label className="input input-bordered flex items-center gap-2 my-5 py-10 bg-white text-black">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 16 16"
//                         fill="currentColor"
//                         className="h-4 w-4 opacity-70">
//                         <path
//                             d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                         <path
//                             d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                     </svg>
//                     <input defaultValue={data?.user?.email} type="text" name="email" className="grow" placeholder="Email" />
//                 </label>


//                 <label className="input input-bordered flex items-center gap-2 my-5 py-10 bg-white text-black">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 16 16"
//                         fill="currentColor"
//                         className="h-4 w-4 opacity-70">
//                         <path
//                             d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                     </svg>
//                     <input
//                         defaultValue={booking.address}
//                     type="text" name="address" className="grow" placeholder="Address" />
//                 </label>

//                 <label className="input input-bordered flex items-center gap-2 my-5 py-10 bg-white text-black">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 16 16"
//                         fill="currentColor"
//                         className="h-4 w-4 opacity-70">
//                         <path
//                             d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                     </svg>
//                     <input
//                     defaultValue={booking.phone}
//                      type="number" name="phone" className="grow" placeholder="PhoneNumber" />
//                 </label>


//                 <div className='text-center '>
//                     <input
//                         className='btn btn-warning btn-block'
//                         type="submit"
//                         value="Update Confirm"

//                     />
//                 </div>

//             </form>

//         </div>
//     );
// };

// export default Contact;





"use client"

import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Contact = ({ params }) => {
    const { data } = useSession();
    const [booking, setBooking] = useState([]);

    const loadBooking = async () => {
        const bookingDetail = await fetch(
            `http://localhost:3000/my-bookings/api/booking/${params.id}`
        );
        const data = await bookingDetail.json();
        setBooking(data.data);
    };

    useEffect(() => {
        loadBooking();
    }, [params.id]);

    const handleBooking = async (event) => {
        event.preventDefault();
        const newBooking = {
            email: data?.user?.email,
            name: data?.user?.name,
            address: event.target.address.value,
            phone: event.target.phone.value,
            service: "contact",
        };

        const resp = await fetch('http://localhost:3000/bookings/api', {
            method: 'POST',
            body: JSON.stringify(newBooking),
            headers: {
                "content-type": "application/json",
            },
        });
        const response = await resp?.json();
        toast.success(response?.message);
        event.target.reset();
    };

    const handleUpdateBooking = async (event) => {
        event.preventDefault();
        const updatedBooking = {
            phone: event.target.phone.value,
            address: event.target.address.value,
        };
        const resp = await fetch(
            `http://localhost:3000/my-bookings/api/booking/${params.id}`,
            {
                method: "PATCH",
                body: JSON.stringify(updatedBooking),
                headers: {
                    "content-type": "application/json",
                },
            }
        );
        if (resp.status === 200) {
            toast.success("Updated Successfully");
        }
    };

    return (
        <div className='w-4/5 mx-auto bg-green-200 my-5'>
            <h3 className='text-blue-700 font-extrabold text-center text-5xl'>This is Update page</h3>

            <form onSubmit={handleUpdateBooking}>
                <label className="input input-bordered flex items-center gap-2 my-5 py-10 bg-white text-black">
                    <input defaultValue={data?.user?.name} name="name" type="text" className="grow" placeholder="Name" />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-5 py-10 bg-white text-black">
                    <input defaultValue={data?.user?.email} type="text" name="email" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-5 py-10 bg-white text-black">
                    <input defaultValue={booking.address} type="text" name="address" className="grow" placeholder="Address" />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-5 py-10 bg-white text-black">
                    <input defaultValue={booking.phone} type="number" name="phone" className="grow" placeholder="PhoneNumber" />
                </label>

                <div className='text-center'>
                    <input className='btn btn-warning btn-block' type="submit" value="Update Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Contact;