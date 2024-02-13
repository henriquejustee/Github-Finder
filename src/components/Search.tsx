import React from 'react'
import { useState } from 'react'

type SearchProps = {
    loadUser : (userName : string) => Promise<void>
}

export const Search = ({ loadUser } : SearchProps ) => {
    const [userName, setUserName] = useState("");
    return (
        <div className='flex flex-col items-center font-mono justify-center pt-4'>
            <div className='p-8 bg-indigo-900 rounded-xl shadow-md shadow-black w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-4 text-center'>Search for an user</h2>
                <p className='text-gray-200 mb-4 text-center'>Find his best repositories</p>
                <div className='flex items-center'>
                    <input type="text" placeholder='write the username' onChange={(e) => setUserName(e.target.value)} className='flex-grow h-10 bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    <button className='h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => loadUser(userName)}>Search</button>
                </div>
            </div>
        </div>
    )
}