import Item from "../classes/Item";

interface IListItem {
    item: Item
    delButton : (arg : Item) => void
    makeDone : (arg : Item) => void
}
export default function ListItem({item, delButton, makeDone}: IListItem) {
    const delClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // Zapobiega propagowaniu zdarzenia wyżej w hierarchii DOM
        delButton(item);
    }
    const divClicked = () =>{
        makeDone(item)
    }
    return (
        <div className={"done"} onClick={divClicked}>
            <div className={item.isDone ? "alreadyDone" : "notDone"}>{item.name}</div>
            <div>
                <button className={"del"} onClick={delClicked}>delete</button>
            </div>
        </div>
    )
}