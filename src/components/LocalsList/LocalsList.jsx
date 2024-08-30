import LocalItem from "./LocalItem/LocalItem";
import "./css/style.css";

const LocalsList = ({ locals, setFormInfo}) => {

    let localSelected = undefined;
    const selectHandeler = (e) => {
        console.log('actual: ',e.target.parentNode);
        console.log('anterior: ',localSelected);
        if(localSelected){
            localSelected.classList.remove('selected');
        }
        localSelected = e.target.parentNode;
        e.target.parentNode.classList.add('selected');
    }

    return (
        <div className="localList-Container" >
        {locals.map((local, index) => (
            <LocalItem key={index} local={local} setFormInfo={setFormInfo} selectHandeler={selectHandeler} />
        ))}
        </div>
    );
}
export default LocalsList;