import React from 'react';
import LinkItem from './LinkItem';

const ProjectItem = ({
  data: { 
    title, 
    desc, 
    tools, 
    github,
    paper,
  },
}) => {
    return (
      <div className = "project">
        <p className = "project_title">{title}</p>
        <p className = "project_desc">{desc}</p>
        <p className = "project_tools"><b>Languages & Tools</b>: {tools}</p>
        <div className = "project_icons">
          <LinkItem icon_name={github.icon_name} link={github.link} type='project'/>
          <LinkItem icon_name={paper.icon_name} link={paper.link} type='project'/>
        </div>
    </div>
    );
  }

  export default ProjectItem;