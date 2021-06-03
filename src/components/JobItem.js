import React from 'react';

const JobItem = ({ title, date, tasks }) => {
    return (
      <div className = "job">
        <p className = "job_title">{title}</p>
        <p className = "job_date">{date}</p>
        <ul className = "job_desc">
        {tasks.map(function (task, i) {
          let key = "task" + i;
          return <li key = {key}>{task}</li>
        })}  
        </ul>
      </div>
    );
  }

  export default JobItem;