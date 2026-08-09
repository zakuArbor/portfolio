import React from 'react';

const EduItem = ({ uni, date, prog }) => {
    return (
      <div className = "edu">
        <p className = "edu_title">{prog} @ {uni}</p>
        <p className = "edu_date">{date}</p>
      </div>
    );
}

  export default EduItem;
