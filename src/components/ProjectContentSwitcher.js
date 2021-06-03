import { React } from 'react';
import htmlLogo from '../images/html-logo.png';
import cLogo from '../images/c-logo.png';

const ProjectContextSwitcher = ({handler}) => {
    return (
        <div className="project_type_icons">
            {
                [{"icon": "c_proj", "logo": cLogo}, {"icon": "web_proj", "logo": htmlLogo}].map(({icon, logo}) => {
                    let clickHandler = ()=>{handler(icon)};
                    return <img className = "project_type" onClick ={clickHandler} src = {logo} alt={icon}/>
                })
            }
        </div>
    );
}

export default ProjectContextSwitcher;