import { React } from 'react';
import LinkItem from '../LinkItem'

const PageNav = ({pages}) => {
    return (
      <nav id = "menu_bar" className="main_nav">
      <ul>
        {pages.map(function (obj, i) {
          return <LinkItem text={obj.menu_name} link={obj.link} key={i} type='menu'/>
        })}  
      </ul>
      </nav>
    );
}

export default PageNav;