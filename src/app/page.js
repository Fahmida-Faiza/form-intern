import Homepage from "@/components/Homepage/Homepage";
import ServiceCard from "@/components/Homepage/ServiceCard";

import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <main className=" mx-auto">
        <Homepage />
       
   <ServiceCard/>
    </main>
  );
}
