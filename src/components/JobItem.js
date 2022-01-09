import React from 'react';

const JobItem = ({ title, date, tasks, skills }) => {
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
        {skills.length !== 0 ?
          <p className = "job_skills"><b>Languages and Tools:</b> { skills } </p>
          :
          null
      }
      </div>
    );
  }

  export default JobItem;
