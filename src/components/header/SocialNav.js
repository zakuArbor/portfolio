import { React } from 'react';
import LinkItem from '../LinkItem';

const SocialNav = ({social}) => {
    
    return (
        <nav id = "social_bar">
            {social.map(function (obj, i) {
                return <LinkItem icon_name={obj.icon_name} link={obj.link} key={i} type='social' text=''/>
            })}       
        </nav>
    );
}

export default SocialNav;