import { React } from 'react';

const Page = ({id, title, component, data}) => {

    return (
      <div id = {id} className = "page">
          <span className = "title">{title}</span>
          {component({data})}
      </div>
    );
}

export default Page;
