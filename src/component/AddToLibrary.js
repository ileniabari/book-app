export function AddToLibrary({ id, setLibrary, library }) {


    return (
      <span>
       {library.find((book)=>book===id) ? <p>Already in your library</p> :
          <button onClick={()=>  setLibrary([...library, id])}>Add to library</button>}
      </span>
    )
  }