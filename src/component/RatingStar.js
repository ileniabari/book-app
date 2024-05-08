import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

export function RatingStar({ ratingScore, isOnSearchedList }) {
    const colors = {
        orange: "#F2C265",
        grey: "a9a9a9"
    }
    const [myRatingScore, setMyRatingScore] = useState(isOnSearchedList ? ratingScore : 0)
    const stars = Array(5).fill(0)

   

    return (
        <>

            {stars.map((_, index) =>

                <FaStar
                    key={index}
                    size={24}
                    color={myRatingScore > index ? colors.orange : colors.grey}
                    onClick={()=>!isOnSearchedList?setMyRatingScore(index + 1):null}
                />

            )
            }
            <p>{ratingScore} </p>
        </>
    )

}