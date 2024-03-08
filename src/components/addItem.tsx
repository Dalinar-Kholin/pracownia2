import {useState} from "react";
import Item from "../classes/Item";

interface IAddItem {
    compName : string
    buttonName : string
    add : (i : Item ) => void
}

export default function AddItem({compName,buttonName,add} : IAddItem){
    const [input, setInput] = useState("");



    return(
        <div className={"addItem"}>
            <h3>{compName}</h3>
            <form
                style={{borderRadius: '15px'}}
                onSubmit={(e) => {
                    e.preventDefault();
                    add(new Item(true, input))
                }}
                className={input==="" ? "hidden" : ""}
            >
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">{buttonName}</button>
            </form>

        </div>
    )
}