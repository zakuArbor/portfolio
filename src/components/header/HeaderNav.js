import { React, useEffect, useState } from 'react';
import SocialNav from './SocialNav';
import PageNav from './PageNav';
import logo from '../../images/logo.svg';

const HeaderNav = () => {
    const [socials, setSocials] = useState([]);
    const [pages, setPages] = useState([]);

    const getData = () => {
        fetch(
            'nav.json', 
            { headers: 
                { 
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json'
                }
            }
        ).then((response) => {
            return response.json();
        }).then((res) => {
            setSocials(res.social);
            setPages(res.pages);
        })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <PageNav pages = {pages}/>
            <SocialNav social = {socials}/>
      </header>
    );
}

export default HeaderNav;