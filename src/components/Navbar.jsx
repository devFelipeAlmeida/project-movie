import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { PiPopcorn } from 'react-icons/pi'

import "./Navbar.css";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav className='navbar'>
            <div className="fixed">
                <h2>
                    <Link to='/'>
                        <PiPopcorn /> ButterPopcorn
                    </Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)} value={search} />
                    <button type='submit'>
                        <BiSearchAlt2 />
                    </button>
                </form>

                <div className='text'>

                    <div className='text_title'>
                        <Link to='/popular'><h3>Populares</h3></Link>
                    </div>

                    <div className='text_title'>
                        <Link to='/topmovie'><h3>Melhores Filmes</h3></Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar