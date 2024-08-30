import LocalItem from "./LocalItem/LocalItem";
import "./css/style.css";

const LocalsList = ({ locals, setFormInfo}) => {
    return (
        <div className="localList-Container">
        {locals.map((local, index) => (
            <LocalItem key={index} local={local} setFormInfo={setFormInfo} />
        ))}
        </div>
    );
}
export default LocalsList;