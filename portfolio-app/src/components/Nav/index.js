import React from 'react';
import About from './'

function Nav(props) {

    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;
    return (
        <div>
        <header>
            <ul>
                <li>
                    <a href="" className="flex">About</a>
                </li>
                <li>
                    <a href="" className="flex">Projects</a>
                </li>
                <li>
                    <a href="" className="flex">Resume</a>
                </li>
                <li>
                    <a href="" className="flex">Contact Me</a>
                </li>
            </ul>
        </header>
        </div>
    )
}

export default Nav;