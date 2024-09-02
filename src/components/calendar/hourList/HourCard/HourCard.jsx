const HourCard = ({ hour }) => {
    return (
        <div className="hour-list__Card">
            <div hour={hour} className="hour-list__Card__Toggler"></div>
            <p>{hour}</p>
        </div>
    );
}

export default HourCard;