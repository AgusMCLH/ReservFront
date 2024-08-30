const LocalItem = ({ local }) => {
    return (
        <>
            <h2>{local.name}</h2>
            <h2>{local.id}</h2>
            <br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/>
            <h2>{local.apertureTime} - {local.closingTime}</h2>
        </>
    );
}
export default LocalItem;