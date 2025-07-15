import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 50) { setShow(true); }
            else { setShow(false); }
        })

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    };

    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <img 
                alt='Netflix logo'
                src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png'
                className='nav_logo'
                onClick={() => window.location.reload()}
            />

            <input 
                value={searchValue} 
                onChange={handleChange} 
                className='nav__input'
                type='text'
                placeholder='제목을 입력하시오.'
            />

            <img 
                alt='User logged'
                src='https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1751546922/noticon/lsabo81iufpfjrhnxze9.png'
                className='nav_avatar'
            />
        </nav>
    );
}