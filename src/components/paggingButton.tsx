interface IPaggingButton {
    add  : () => void
    sub : () => void
    len : number
    paggingInt : number
}


export default function PaggingButton({add, sub,len,paggingInt} : IPaggingButton) {
    return <div className={"paggingPanel"}>
        <button onClick={sub}>prev</button>
        {`${10*paggingInt} to ${10*paggingInt+10 > len ?len : 10*paggingInt+10}`}

        <button onClick={add}>next page</button>
    </div>
}