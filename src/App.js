import {Navigation} from './component/Navigation';
import {Search} from './component/Search';
import {Read} from './component/Read';
import {Main} from  './component/Main';
import './App.css';
import {useState } from 'react'
import { UserOverview } from './component/UserOverview';



const bookList = [
  {
    bookId: "0",
    cover: "https://images.booksense.com/images/478/389/9798734389478.jpg",
    title: "divina commedia",
    author: "dante alighieri",
    pages: 360,
    ISBN: "88-09-61292-2",
    ratingScore: 4
  },
  {
    bookId: "1",
    cover: "https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg",
    title: "pride and Prejudice",
    author: "jane austen",
    pages: 266,
    ISBN: "88-530-0778-8",
    ratingScore: 3
  },
  {
    bookId: "2",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8HX6KThQo6ZsyTxuoFJ92-OREN5nmeIDY23Jw8xZ7g&s",
    title: "other book",
    ratingScore: 1
  }
]




export default function App() {
  const [input, setInput] = useState("")
  const [resultList, setResultList] = useState([])
  const [library, setLibrary] = useState([])
  const [readList, setReadList]=useState([])
  const [totalPages, setTotalPages]= useState(0)
 

  return (
    <>
      <Navigation>
        <Search bookList={bookList} input={input} setInput={setInput} resultList={resultList} setResultList={setResultList} setLibrary={setLibrary} library={library}/>
      </Navigation>
      <Main>
        <UserOverview pages={totalPages} books= {readList}/>
        <Read library={library} bookList={bookList} />
       
      </Main>
    </>

  );
}









