import { useEffect } from "react";

const LocalItem = ({ local, formInfo, selectHandeler, setFormInfo, lastItem }) => {
    console.log(local.name, lastItem);
    
    const image = `https://picsum.photos/100/100?random=${local.id}`;   
    const getSchedule = () => {     
        let schedule = [];
        for (let day in local.schedule) {
            if (local.schedule[day].length > 0) {
                schedule.push(`${day}: ${local.schedule[day][0]}${local.schedule[day][0]>=12?'pm':'am'}-${local.schedule[day][1]}${local.schedule[day][0]>=12?'pm':'am'}`);
            } else {
                schedule.push(`${day}: Cerrado`);
            }
        }
        return schedule;
    }
    const Schedule = getSchedule();  
    
    return (
        <div className="LocalItem">
            <div className="LocalItem__selectionButton" localid={local._id} onClick={selectHandeler}></div>
            <img className="LocalItem__image" src={image} alt="local location" />
            <div className="LocalItem__Info">
                <p className="LocalItem__Info-LocalName">{local.name}</p>
                <p className="LocalItem__Info-LocalAddress">{local.address}</p>
                <div className="LocalItem__Info-LocalSchedule">
                    <p className="LocalItem__Info-LocalSchedule-Toggler">Horario</p>
                    <div last={lastItem==='true'?'true':'false'} className="LocalItem__Info-LocalSchedule-Popover">
                        {Schedule.map((day, index) => <p key={index} className="LocalItem__Info-LocalSchedule-Day">{day}</p>)}
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default LocalItem;