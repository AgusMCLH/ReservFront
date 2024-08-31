import LocalItem from "./LocalItem/LocalItem";
import "./css/style.css";

let localSelected = undefined;
const LocalsList = ({ locals, formInfo, setFormInfo}) => {

    const selectHandeler = (e) => {
        setFormInfo({...formInfo, local: e.target.attributes.localid.value});
        if(localSelected){
            localSelected.classList.remove('selected');
        }
        localSelected = e.target.parentNode;
        e.target.parentNode.classList.add('selected');
    }

    return (
        <div className="localList-Container" >
        {locals.map((local, index) => (
            <LocalItem key={index} local={local} lastItem={index+1===locals.length?'true':'false'} formInfo={formInfo} setFormInfo={setFormInfo} selectHandeler={selectHandeler} />
        ))}
        </div>
    );
}
export default LocalsList;