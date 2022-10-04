import React from 'react';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {

    return (
        <div className='rounded-div flex items-center justify-between h-20 font-bold'>
            <div>
                <h1 className='font-bold text-lg'>Where in the world</h1>
            </div>
            <div className='block'>
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;