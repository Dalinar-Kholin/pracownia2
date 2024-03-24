import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Item from "./classes/Item";
import AddItem from "./components/addItem";
import ItemListMaker from "./components/itemListMaker";
import PaggingButton from "./components/paggingButton";

function App() {
    const inicialList: Item[] = [
        new Item(false, "nice"),
        new Item(true, "kinda"),
        new Item(true, "gut"),
        new Item(true, "gut1"),
        new Item(true, "gut2"),
        new Item(true, "gut3"),
        new Item(true, "gut4"),
        new Item(true, "gut5"),
        new Item(true, "gut6"),
        new Item(true, "gut7"),
        new Item(true, "gut8"),
        new Item(true, "gut9"),
        new Item(true, "gut10"),

    ]
    const [showDone, setShowDone] = useState<boolean>(false)
    const [filter, setFilter] = useState<string>("")
    const [listItems, setListItems] = useState<Item[]>(inicialList)
    const [paggingInt, setPaggingInt] = useState(0)
    return (
        <div className="App">
            <Header content={"To Do List"}/>
            <AddItem
                compName={"add item"}
                buttonName={"add"}
                add={(i: Item) => {
                    if (listItems.some(item => i.name === item.name)) {
                        alert("cant add")
                    } else {
                        setListItems([i, ...listItems])
                    }
                }}/>
            <AddItem
                compName={"filter"}
                buttonName={"filter"}
                add={(i: Item) => {
                    setFilter(i.name)

                }}/>
            <button style={{borderRadius: '10px'}} onClick={() => {
                setShowDone(!showDone)
            }}>
                show done := {showDone ? "true" : "false"}
            </button>
            <ItemListMaker filter={filter} visible={showDone} items={listItems} setListItems={setListItems} paggingInt={paggingInt}/>
            <PaggingButton
                sub={()=> {
                    setPaggingInt(paggingInt === 0 ? 0 : paggingInt - 1)
                }}
                add={()=>{
                    const len = Math.round(listItems.filter((i: Item) =>
                        i.isDone ? true :
                            showDone).length/10)-1
                    setPaggingInt( paggingInt>=len ? len+1 : paggingInt +1)

                }}
                len={listItems.filter((i: Item) =>
                    i.isDone ? true :
                        showDone).length}
                paggingInt={paggingInt}
            ></PaggingButton>

        </div>
    );
}
//
export default App;
