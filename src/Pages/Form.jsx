import React from 'react'

export default function Form({ handleSubmit, firstNameRef, lastNameRef, emailRef, mobRef, skillRef }) {
    
return (
    <div className='min-h-screen bg-sky-50 from-blue-50 to-indigo-100 p-4 sm:p-8'>
        <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Details Form</h2>
            
            <div className='space-y-4 mb-6'>
                <div>
                    <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-1'>First Name:</label>
                    <input type='text' id='firstName' name='firstName' placeholder='First Name' ref={firstNameRef} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                </div>
                <div>
                    <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-1'>Last Name:</label>
                    <input type='text' id='lastName' name='lastName' placeholder='Last Name' ref={lastNameRef} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                </div>
            </div>

            <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email:</label>
                <input type='email' id='email' name='email' placeholder='Enter your email address' ref={emailRef} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
            </div>

            <div className='mb-4'>
                <label htmlFor='number' className='block text-sm font-medium text-gray-700 mb-1'>Phone Number:</label>
                <input type='text' id='number' name='mob' placeholder='Enter your phone number' ref={mobRef} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
            </div>

            <div className='mb-6'>
                <label htmlFor='skill' className='block text-sm font-medium text-gray-700 mb-1'>Skills:</label>
                <input type='text' id='skill' name='skill' placeholder='Enter your skills' ref={skillRef} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
            </div>

            <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'>Submit</button>
        </form>
    </div>
)
}
