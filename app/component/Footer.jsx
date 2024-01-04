import React from 'react';
import Image from 'next/image';
import github from '../img/github.png';
import mail from '../img/mail.png';
import Link from 'next/link';

const Footer = ({onScrollClick}) => {
    return (
        <footer className='footer'>
            <a className='point cursor-pointer'>
                <button onClick={onScrollClick} className='return'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><title></title><path fill="#fafafa" d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></svg>
                </button>
            </a>
            <div className='socials'>
                <Link href='https://github.com/Haris1221'>
                    <Image src={github} alt='g' className='w-[50px]'/>
                    </Link>
                    <Image src={mail} alt='g' className='w-[50px]' />
            </div>
            <p>ALHARIS ELHASSAN ©2023</p>
</footer>
);
};

export default Footer;
