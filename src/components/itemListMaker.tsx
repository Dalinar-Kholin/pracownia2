import Item from "../classes/Item";
import ListItem from "./listItem";
import React from "react";

interface IItemListMaker{
    filter : string
    visible : boolean
    items : Item[]
    setListItems : React.Dispatch<React.SetStateAction<Item[]>>

}

export default function ItemListMaker({filter,visible,items,setListItems}:IItemListMaker) {
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