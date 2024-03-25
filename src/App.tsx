import React, { useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Item from "./classes/Item";
import AddItem from "./components/addItem";
import ItemListMaker from "./components/itemListMaker";
import PaggingButton from "./components/paggingButton";

function App() {
    const inicialList: Item[] = [
        new Item(false, "nice", new Date().getTime()),
        new Item(true, "kinda",new Date().getTime()),
        new Item(true, "gut",new Date().getTime()),
        new Item(true, "gut1", new Date().getTime()),
        new Item(true, "gut2", new Date().getTime()),
        new Item(true, "gut3", new Date().getTime()),
        new Item(true, "gut4", new Date().getTime()),
        new Item(true, "gut5", new Date().getTime()),
        new Item(true, "gut6", new Date().getTime()),
        new Item(true, "gut7", new Date().getTime()),
        new Item(true, "gut8", new Date().getTime()),
        new Item(true, "gut9", new Date().getTime()),
        new Item(true, "gut10",new Date().getTime()),

    ]
    const [showDone, setShowDone] = useState<boolean>(false)
    const [filter, setFilter] = useState<string>("")
    const [listItems, setListItems] = useState<Item[]>(inicialList)
    const [paggingInt, setPaggingInt] = useState(0)
    const [value, setValue] = useState('');

    const toggle = () => {
        setShowDone(!showDone)
    };


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
            <h3>sort type</h3>
            <input type="radio" id="alfabetical" name="sortType" value="alfabetical"/>
            <label htmlFor="alfabetical" onClick={() => setValue("alfa")}>alfabetical</label><br/>
            <input type="radio" id="reversAlfa" name="sortType" value="malejąco alfabetycznie"/>
            <label htmlFor="reversAlfa" onClick={() => setValue("rev")} >malejąco alfabetycznie</label><br/>
            <input type="radio" id="default" name="sortType" value="default"/>
            <label htmlFor="default" onClick={() => setValue("def")}>default</label>

            <p></p>
            <div className={"showDoneClass"}>
            <div>czy pokazywać zrobione</div>
            <button onClick={toggle} style={{borderRadius: "10px"}}>
                {showDone ? 'Prawda' : 'Fałsz'}
            </button>
            </div>
            <ItemListMaker filter={filter} visible={showDone} items={listItems} setListItems={setListItems}
                           paggingInt={paggingInt} sortType={value}/>
            <PaggingButton
                sub={() => {
                    setPaggingInt(paggingInt === 0 ? 0 : paggingInt - 1)
                }}
                add={() => {
                    const len =( (Math.round(listItems.filter((i: Item) =>
                        i.isDone ? true :
                            showDone).length) * 10 /10))
                    setPaggingInt((paggingInt+1)*10<=len-1 ?(paggingInt+ 1) : paggingInt)

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
