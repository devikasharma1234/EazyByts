import React from 'react';
import {Menu, Settings} from "lucide-react";
import { Search } from 'lucide-react';
import {Plus} from "lucide-react";
import { Sun } from 'lucide-react';


const Header = () => {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
    border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
      <div className='flex items-center justify-between'>
        {/* Left section*/}
        <div className='flex items-center space-x-4'>
            <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'> 
            <Menu className='w-5 h-5'/>
            </button>

            <div className='hidden md:block'>
                <h1 className='text-2xl font-black text-slate-800 dark:text-white'>Dashboard</h1>
                <p>Welcome back, Devika!</p>
            </div>
        </div>

        {/* Center */}
        <div className='flex-1 max-w-md mx-8'>
            <div className='relative'>
              <Search className= 'w-4- h-4 absolute left-3 top-1/2 transform - translate-y-1/2'/>
              <input type='text' placeholder='Search' className='w-full pl-10 pr-4 py-2.5'></input>

            </div>

            {/* {Right} */}
            <div className='flex items-center space-x-3'>
              <button className='hiddeb ld:flex items-center space-x-2 py-2 px-4
              bg=gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow
              transition-all'>
                <Plus className='w-4 h-4' />
                <span className='text-sm font-medium'></span>
              </button>

              <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
              hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                <Sun classNamew-5 h-5/>
              </button>

              {/* {Notification} */}
              <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
              hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                <Settings className='w-5 h-5'/>
              </button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Header
