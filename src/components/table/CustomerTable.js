import React, { useState } from 'react'
import sortSvg from '../../assets/Icons/sort.svg'
import './style.css'

const CustomerTable = ({ data, onDelete, onEdit }) => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('asc');
        }
    };

    const sortedData = data && [...data]?.sort((a, b) => {
        if (sortColumn) {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
        }
        return data;
    });

    return (
        <>
            <div id='customer-table'>
                <div className="container">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1"></div>
                            <div className="col col-2" style={{ cursor: "pointer", userSelect: "none" }} onClick={() => handleSort('id')}>Customer Id <img src={sortSvg} alt='icon' /></div>
                            <div className="col col-3" style={{ cursor: "pointer", userSelect: "none" }} onClick={() => handleSort('first_name')}>Customer Name <img src={sortSvg} alt='icon' /></div>
                            <div className="col col-4" style={{ cursor: "pointer", userSelect: "none" }} onClick={() => handleSort('email')}>Email <img src={sortSvg} alt='icon' /></div>
                        </li>
                        {sortedData?.map((elem) => {
                            return (
                                <li key={elem?.id} className="table-row">
                                    <div className="col col-1" ><img className='list-image' src={elem?.avatar} alt='image' /></div>
                                    <div className="col col-2" >{elem?.id}</div>
                                    <div className="col col-3" style={{ textDecoration: "underline", color: "#57BC90", cursor: "pointer" }}>{elem?.name ? elem?.name : `${elem?.first_name} ${elem?.last_name}`}</div>
                                    <div className="col col-4" >{elem?.email}</div>
                                    <div className="col col-5" ><button onClick={() => onEdit(elem)} className='edit-button'>Edit</button></div>
                                    <div className="col col-6" ><button onClick={() => onDelete(elem)} className='delete-button'>Delete</button></div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default CustomerTable