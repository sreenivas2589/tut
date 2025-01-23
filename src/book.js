// JavaScript source code
const Book = (props) => {

    const clickhandler = () => {

        alert('hello')

    }
    //const { name, img, title } = props.bookop
    const { name, img, title } = props
    return (
        <div className="book" onMouseOver={() => {
            console.log(title)
        }}>
            <img alt="" src={img} />
            <h1>{name}</h1>
            <h3>{title}</h3>
            <button type="button" onClick={clickhandler}>Reference example</button>
        </div>


    )
}

export default Book