import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center gap-1'>
            <img className='h-12' src="https://i.ibb.co/BH4Jz86r/homaroom.png" alt="" />
            <p><span className='text-rose-500 font-extrabold'>Homa</span><span className='text-yellow-500 font-extrabold'>Room</span></p>
        </div>
    );
};

export default Logo;