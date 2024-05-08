
import { BookPreview } from "./BookPreview"

export function Read({ library, bookList,}) {

    return (
      <>
        <h1>My library</h1>
  
       {library
       .map((id) => bookList.find((book) => book.bookId === id))
       .map((book)=>< BookPreview cover = { book.cover } title = { book.title } author = { book.author } />)
  } 
  
  
      </>
    )
  
  }
  