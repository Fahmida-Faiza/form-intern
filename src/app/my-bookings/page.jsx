// "use client";
// import { useSession } from "next-auth/react";
// import Link from "next/link";

// import React, { useEffect, useState } from "react";
// import { ToastContainer ,toast} from "react-toastify";


// const Page = () => {
//     const session = useSession();
//     const [bookings, setBooking] = useState([]);
//     const loadData = async () => {
//         const resp = await fetch(
//             `https://form-intern-snowy.vercel.app/my-bookings/api/${session?.data?.user?.email}`
//         );
//         const data = await resp.json();
//         setBooking(data?.myBookings);
       
//     };


//     // delete

//     const handleDelete = async (id) => {
//         const deleted = await fetch(
//             `https://form-intern-snowy.vercel.app/my-bookings/api/booking/${id}`, {
//             method: "DELETE",
//         }
//         );
//         const resp = await deleted.json();
//         console.log(resp)
//         if (resp?.response?.deletedCount > 0) {

//             loadData();
//         }
//     };

    

//     // ////////

//     useEffect(() => {
//         loadData();
//     }, [session]);

//     return (
//         <div className="container mx-auto">
//               <ToastContainer /> 
//             <div className="relative  h-72">
              
//                 <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
//                     <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
//                         My Bookings
//                     </h1>
//                 </div>
//             </div>
//             <div className="mt-12 ">
//                 <div className="overflow-x-auto ">
//                     <table className="table text-black">
//                         {/* head */}
//                         <thead>
//                             <tr className="text-blue-800">
//                                 <th></th>
//                                 <th>Name</th>
                                
                                
//                                 <th>Address</th>
//                                 <th>PhoneNumber</th>

//                                 <th>Days</th>
//                                 <th>Organization</th>
//                                 <th>Attends people</th>
//                                 <th>Services</th>
                                
                                
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {/* row 1 */}
//                             {bookings?.map(({ _id, name, address, phone, days , organization, attend,service}, index) => (
//                                 <tr  key={_id}>
//                                     <th>{index+1}</th>
//                                     <td>{name}</td>
//                                     <td>{address}</td>
//                                     <td>{phone}</td>
//                                     <td>{days}</td>
//                                     <td>{organization}</td>
//                                     <td>{attend}</td>
//                                     <td>{service}</td>
                                    
//                                     <td>
//                                         <div className="flex items-center space-x-3">
//                                              <Link href={`/my-bookings/update/${_id}`}><button class="btn btn-primary">Edit</button></Link>
//                                             <button
//                                                 onClick={() => handleDelete(_id)}
//                                                 class="btn btn-error"
//                                             >
//                                                 Delete
//                                             </button> 
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;

"use client";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Page = () => {
    const session = useSession();
    const [bookings, setBooking] = useState([]);

    const loadData = useCallback(async () => {
        if (!session?.data?.user?.email) return;
        const resp = await fetch(
            `https://form-intern-snowy.vercel.app/my-bookings/api/${session?.data?.user?.email}`
        );
        const data = await resp.json();
        setBooking(data?.myBookings);
    }, [session?.data?.user?.email]);

    const handleDelete = useCallback(async (id) => {
        const deleted = await fetch(`https://form-intern-snowy.vercel.app/my-bookings/api/booking/${id}`, {
            method: "DELETE",
        });
        const resp = await deleted.json();
        if (resp?.response?.deletedCount > 0) {
            loadData();
        }
    }, [loadData]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <div className="container mx-auto">
            <div className="relative h-72">
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                        My Bookings
                    </h1>
                </div>
            </div>
            <div className="mt-12">
                <div className="overflow-x-auto">
                    <table className="table text-black">
                        <thead>
                            <tr className="text-blue-800">
                                <th></th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>PhoneNumber</th>
                                <th>Days</th>
                                <th>Organization</th>
                                <th>Attends people</th>
                                <th>Services</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings?.map(({ _id, name, address, phone, days, organization, attend, service }, index) => (
                                <tr key={_id}>
                                    <th>{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{address}</td>
                                    <td>{phone}</td>
                                    <td>{days}</td>
                                    <td>{organization}</td>
                                    <td>{attend}</td>
                                    <td>{service}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <Link href={`/my-bookings/update/${_id}`}>
                                                <button className="btn btn-primary">Edit</button>
                                            </Link>
                                            <button onClick={() => handleDelete(_id)} className="btn btn-error">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;
