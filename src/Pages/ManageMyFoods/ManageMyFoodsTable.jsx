// import { useReactTable } from '@tanstack/react-table'
// import {useTable} from 'react-table'

const ManageMyFoodsTable = ({ food }) => {

    const {donatorName, expirationTime, pickupLocation} = food
    console.log(food);
    return (
        <div>
            <p>{donatorName }</p>
            <p>{expirationTime }</p>
            <p>{pickupLocation }</p>
            
        </div>
    );
};

export default ManageMyFoodsTable;