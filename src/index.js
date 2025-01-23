import React from 'react'
//import ReactDom from 'react-dom'
import './index.css'
import { createRoot } from 'react-dom/client'
import { books } from './books'
import Book from './book'
//import data from './sample.json' 




function Booklist() {
    return (
        <section className="some">
            {
                books.map((book) => {
                    return (
                        //<Book key={book.id} {...book} />
                        <Book key={book.id} name={book.name} img={book.img} title={book.title} />

                    )
                })
            }
        </section>
    )

}


//const Img = () => <img className="hello" src="https://m.media-amazon.com/images/I/71Jg6kSgYwL._AC_UY327_FMwebp_QL65_.jpg" alt="DWE" />

//const name = () => <h4 style={{ color: 'white'}}>Amelia</h4>
//const image = () => <h1>{title}</h1>

//ReactDom.render(<Booklist/>, document.getElementById('root'))
const cont = document.getElementById("root")

const root = createRoot(cont)

root.render(Booklist())



