import React from 'react';
// import { useForm } from "react-hook-form";


const EmargencyContact = () => {

    // const { register, handleSubmit } = useForm();


    // const onSubmit = data => console.log(data);
    return ( 
        <div className="  container md:pt-0">
            <div className="flex flex-col md:flex-row justify-around md:justify-evenly md:-mt-24">
                <div className="flex justify-center items-center bg-gray-800  py-5 px-5 ">
                    <i class="fas fa-map-marker-alt text-5xl mr-5 text-gray-300"></i>
                    <div className="border-l-4 border-gray-100 pl-3">
                        <h3 className="text-xl mb-0 text-gray-200">Dhaka, Bangladesh</h3>
                        <h3 className="text-xl text-gray-200">Road No-10/12, House-29</h3>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-gray-800 py-5 px-5">
                    <i class="fas fa-phone-alt text-5xl mr-5 text-gray-300"></i>
                    <div className="border-l-4 border-gray-100 pl-3">
                        <h3 className="text-xl mb-0 text-gray-200">(+88) 01833039074</h3>
                        <h3 className="text-xl text-gray-200">293 934 457</h3>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-gray-800 py-5 px-5">
                    <i class="fas fa-subway text-5xl mr-5 text-gray-300"></i>
                    <div className="border-l-4 border-gray-100 pl-3">
                        <h3 className="text-xl mb-0 text-gray-200">Todays Schedule</h3>
                        <h3 className="text-xl text-gray-200">All over Bangladesh</h3>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EmargencyContact;