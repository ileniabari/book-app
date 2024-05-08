import { AddToLibrary } from "./AddToLibrary"
import { RatingStar } from "./RatingStar"

export function BookPreview({ id, cover, title, author, isOnSearchedList, setLibrary, library, ratingScore}) {

    return (
      <div className="bookPreview">
        <span>
          <img alt={title} src={cover} className="cover"></img>
          <h2>{title}</h2> </span>
        <span>
          <h3 style={{ marginTop: "0px" }}>{author}</h3>
          <RatingStar ratingScore={ratingScore} isOnSearchedList={isOnSearchedList} />
          <br />
        </span>
        {isOnSearchedList ?
          <AddToLibrary id={id} setLibrary={setLibrary} library={library} />
          : <></>}
         
      </div>
  
    )
  }