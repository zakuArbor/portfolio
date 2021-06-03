import { React, useEffect, useState } from 'react';
import SocialNav from './header/SocialNav';

const Footer = () => {
    const [socials, setSocials] = useState([]);

    const getData = () => {
        fetch(
            'footer.json', 
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
        })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className = "App-footer">
            <SocialNav social = {socials}/>
            <div className = "credits">
                <a href="https://iconscout.com/icons/c-programming">C programming Icon</a> on <a href="https://iconscout.com">Iconscout</a><br/>
                <a href="https://iconscout.com/icons/html-file" target="_blank" rel="noopener noreferrer">Html File Icon</a> by <a href="https://iconscout.com/contributors/dinosoftlabs">Dinosoft Lab</a> on <a href="https://iconscout.com">Iconscout</a>
            </div>
        </div>
    );
}

export default Footer;