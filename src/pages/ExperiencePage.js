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
                if (i === 2) {
                    hr = () => { return (<span></span>)}
                }
                return <div key = {key}><JobItem title={obj.title} date={obj.date} tasks={obj.tasks} skills={obj.skills}/>{hr()}</div>
            })): (<Fragment></Fragment>)
        }  
        </div>
  );
}

export default ExperiencePage;
