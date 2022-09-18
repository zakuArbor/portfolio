import { Fragment, React} from 'react';
import JobItem from '../components/JobItem';

const ExperiencePage = ({data}) => {
    return (
        <div className = "page-content">
        {   
            (data !== undefined) ? (
                data.map(function (obj, i) {
                var key = "exp" + i; //this is to avoid hild unique key prop warning
                var hr = () => { return (<hr/>)};
                if (i + 1 === data.length) {
                    hr = () => { return (<span></span>)}
                }
                let skills = "skills" in obj ? obj.skills : "";
                let tasks = "tasks" in obj ? obj.tasks : {};
                return <div key = {key}><JobItem title={obj.title} date={obj.date} tasks={tasks} skills={skills}/>{hr()}</div>
            })): (<Fragment></Fragment>)
        }  
        </div>
  );
}

export default ExperiencePage;
