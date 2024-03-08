import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Item from "./classes/Item";
import AddItem from "./components/addItem";
import ItemListMaker from "./components/itemListMaker";

function App() {
    const inicialList: Item[] = [
        new Item(false, "nice"),
        new Item(true, "kinda"),
        new Item(true, "gut")
    ]
    const [showDone, setShowDone] = useState<boolean>(false)
    const [filter, setFilter] = useState<string>("")
    const [listItems, setListItems] = useState<Item[]>(inicialList)

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
            <ItemListMaker filter={filter} visible={showDone} items={listItems} setListItems={setListItems}/>


        </div>
    );
}

export default App;
