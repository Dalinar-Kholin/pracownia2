interface IHeader{
    content : string
}


export default function Header({content} : IHeader) {
    return(
        <>
            <h1>{content}</h1>
            <h4>all right reserved</h4>
            <p>but i dont know why</p>
        </>
    )
}