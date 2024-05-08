import { BookPreview } from "./BookPreview"
import { useEffect } from 'react'

export function Search({ bookList, input, setInput, setResultList, resultList, library, setLibrary }) {

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
      {resultList.map((book) => (<BookPreview id={book.bookId} cover={book.cover} title={book.title} author={book.author} isOnSearchedList={true} setLibrary={setLibrary} library={library} ratingScore={book.ratingScore}/>)
      )}
  
    </>
  
    )
  }
  