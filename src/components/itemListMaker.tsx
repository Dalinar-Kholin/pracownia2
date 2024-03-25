import Item from "../classes/Item";
import ListItem from "./listItem";
import React from "react";

interface IItemListMaker{
    filter : string
    visible : boolean
    items : Item[]
    setListItems : React.Dispatch<React.SetStateAction<Item[]>>
    paggingInt : number
    sortType : string
}

export default function ItemListMaker({filter,visible,items,setListItems, paggingInt, sortType}:IItemListMaker) {
    return(
        <>
            {items
            .filter(
                (i: Item) =>
                    i.isDone ? true :
                        visible)
            .filter(
                (i: Item) =>
                    i.name.includes(filter)
            )
            .slice(10*paggingInt,10*paggingInt+10 > items.length ?items.length : 10*paggingInt+10)
                .sort(sortType === "def" ? (a, b )=> (b.date - a.date) : (sortType === "alfa" ? (a, b ) => a.name.localeCompare(b.name) : (a, b ) => -a.name.localeCompare(b.name)))
            .map(i => <ListItem
                key={i.name}
                item={i}
                delButton={
                    (item: Item) => {
                        setListItems(items.filter((i: Item) => i.name !== item.name))
                    }
                }
                makeDone={
                    (item: Item) => {
                        setListItems(items.map((i => {
                            if (item.name === i.name) {
                                item.isDone = !item.isDone
                            }
                            return i
                        })))
                    }
                }
            />)}
        </>
            )

}