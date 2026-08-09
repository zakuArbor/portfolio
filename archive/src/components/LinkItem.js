import React from 'react';

const LinkItem = ({ icon_name, type, link, text }) => {
    const getClassName = (type) => {
        switch(type) {
            case 'social': return 'social_item ' + icon_name;
            case 'project': return 'project_icon ' + icon_name; 
            default: return 'menu_item';
        }
    }

    return (
      <a href ={link} className={getClassName(type, icon_name)}>{text}</a>
    );
  }

  export default LinkItem;