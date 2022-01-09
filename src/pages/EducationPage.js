import { Fragment, React} from 'react';
import EduItem from '../components/EduItem';

const EducationPage= ({data}) => {
    return (
        <div className = "page-content">
        {   
            (data !== undefined && typeof data === "object") ? (
                data.map(function (obj, i) {
                var key = "edu" + i; //this is to avoid child unique key prop warning
                var hr = () => { return (<hr/>)};
                if (i +1 === data.length) {
                    hr = () => { return (<span></span>)}
                }
                return <div key = {key}><EduItem uni={obj.university} date={obj.date} prog={obj.program}/>{hr()}</div>
            })): (<Fragment></Fragment>)
        }  
        </div>
  );
}

export default EducationPage;
