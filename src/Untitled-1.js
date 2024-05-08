
import './App.css';
import { useEffect, useState } from 'react'
//import { useEffect } from 'react'



const bookList = [
  {
    bookId: "0",
    cover: "https://images.booksense.com/images/478/389/9798734389478.jpg",
    title: "divina commedia",
    author: "dante alighieri",
    pages: 360,
    ISBN: "88-09-61292-2",
    read: true
  },
  {
    bookId: "1",
    cover: "https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg",
    title: "pride and Prejudice",
    author: "jane austen",
    pages: 266,
    ISBN: "88-530-0778-8",
    read: true
  },
  {
    bookId: "2",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8HX6KThQo6ZsyTxuoFJ92-OREN5nmeIDY23Jw8xZ7g&s",
    title: "other book",
    read: false
  }


]



export default function App() {
  const [input, setInput] = useState("")
  const [resultList, setResultList] = useState([])
  const [book, setBook]=useState('')
  const library=[]

  useEffect(()=> {
    library.push(book)
  },[book])

  
  return (
    <>
      <Navigation>
        <Search input={input} setInput={setInput} resultList={resultList} setResultList={setResultList} setBook={setBook} book={book} />
      </Navigation>
      <Main>
        <Read />
      </Main>

    </>

  );
}

function Navigation({ children }) {
  return (
    <div style={{ float: "left", marginLeft: "15px" }} className="background">
      {children}
    </div>
  )
}

function Main({ children }) {
  return (
    <main style={{ float: "right", marginRight: "15px" }} className="background">
      {children}
    </main>
  )
}

function Search({ input, setInput, setResultList, resultList, setBook }) {

  useEffect(() => {
    let searchList = []
    if (input.length > 0) {
      searchList = bookList.filter((book) => book.title.indexOf(input) !== -1)
    } else {
      searchList = []
    }
    setResultList(searchList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]
  )


  function handleSearch(e) {
    setInput(e.target.value.toLowerCase())
  }

  return (<>
    <input type="text" placeholder="🔎Search title" onChange={handleSearch} value={input} ></input>
    {input.length > 0 ? <p>Found {resultList.length} books</p> : <p></p>}
    {resultList.map((book) => (<BookPreview id={book.bookId} cover={book.cover} title={book.title} author={book.author} setBook={setBook} isOnSearchedList={true}  />)
    )}

  </>

  )
}

function Read() {
  return (
    <>
      <h1>My library</h1>

      {bookList
        .filter((book) => book.read)
        .map((book) =>
          <BookPreview cover={book.cover} title={book.title} author={book.author} />)}


    </>
  )

}

function BookPreview({ id, cover, title, author, isOnSearchedList,setBook }) {
  const [isInLibrary, setIsInLibrary] = useState(false)
  return (
    <div className="bookPreview">
      <span>
        <img alt={title} src={cover} className="cover"></img>
        <h2>{title}</h2> </span>
      <span>
        <h3 style={{ marginTop: "0px" }}>{author}</h3>
        <br />
      </span>
      {isOnSearchedList ?
        <AddToLibrary isInLibrary={isInLibrary} setIsInLibrary={setIsInLibrary} id={id} setBook={setBook} />
        : <></>}
    </div>

  )
}

function AddToLibrary({isInLibrary,id, setIsInLibrary, setBook}) {
  
  function handleAddToLibrary() {
    setIsInLibrary(true)
    setBook(id)
    
  }
  return (
    <span>
      {isInLibrary?<p>Already in your library</p> :
      <button onClick={handleAddToLibrary}>Add to library</button>}
    </span>
  )
}
