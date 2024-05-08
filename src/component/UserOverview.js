import './UserOverview.css'
export function UserOverview({ pages, books, stars }) {


    return (
        <table className="overview" >
            <tr>
            <td >
                <h1>Pages read 📃</h1>
                <p>{pages}</p>
            </td>
            <td>
                <h1>Books finished 📖</h1>
                <p>{books.length}</p>
            </td>
            <td >
                <h1>Stars given 🌟</h1>
                <p>{stars}</p>
            </td>
            </tr>
        </table>
    ) 
}