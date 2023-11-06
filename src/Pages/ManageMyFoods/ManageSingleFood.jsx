import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

const ManageSingleFood = () => {
    const loadedFood = useLoaderData()
    const [singleFood, setSingleFood] = useState(loadedFood)
    const { id } = useParams()

    const {_id,foodName,foodImage,foodQuantity,pickupLocation,expirationTime,additionalNotes,foodStatus,donatorName,email,donatorImage} = singleFood
    
//     useEffect(() => {
//         fetch(`http://localhost:5000/get-food/${id}`)
//         .then(res => {
//             res.json()
//         })
//         .then(data => {
//             console.log(data)
//     })
//    },[id])
    
    console.log(singleFood);
 
    return (
        <div>
            id: {singleFood._id}
            <p>
                {email}
            </p>
        </div>
    );
};

export default ManageSingleFood;