import React, { useEffect, useState } from 'react'
import { getRequest } from '../../utils/api'
import signIn from '../../assets/Icons/Sign_In.svg'
import CustomerTable from '../../components/table/CustomerTable'
import AddModal from '../../components/modal/addModal/AddModal'
import DeleteModal from '../../components/modal/deleteModal/DeleteModal'
import { useSelector, useDispatch } from 'react-redux'
import { setCusomerData, addCustomer, deleteCustomer, editCustomer } from '../../redux/customerReducer/customerSlice'
import './style.css'
import { notifyError, notifySuccess } from '../../utils/functions'

const Customer = () => {
    const [show, setShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState({});
    const [validated, setValidated] = useState(false);
    const customers = useSelector((state) => state?.customer?.data)
    const dispatch = useDispatch()
    const fetchData = async () => {
        try {
            const res = await getRequest('https://reqres.in/api/users?page=1')
            dispatch(setCusomerData(res?.data))
            localStorage.setItem('customerData', JSON.stringify(res?.data));
        } catch (err) {
            console.log("Erroe", err)
            notifyError("Something went wrong")
        }
    }



    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setSelectedCustomer({ ...selectedCustomer, [name]: URL.createObjectURL(files[0]), filename: files[0].name });
        } else {
            setSelectedCustomer({ ...selectedCustomer, [name]: value, first_name: value });
        }
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return
        }

        if (selectedCustomer?.id) {
            dispatch(editCustomer(selectedCustomer))
            notifySuccess('Customer edited successfully')
        } else {
            const customerWithId = { ...selectedCustomer, id: Date.now() };
            dispatch(addCustomer(customerWithId))
            notifySuccess('Customer added successfully')
        }
        setSelectedCustomer({})
        setShow(false)
    };

    const openDeleteModal = (customer) => {
        setSelectedCustomer(customer)
        setShowDeleteModal(true)
    }
    const onConfirmDelete = () => {
        dispatch(deleteCustomer(selectedCustomer?.id))
        const storedData = localStorage.getItem('customerData');
        const parsedData = JSON.parse(storedData);
        const updatedData = { ...parsedData, data: parsedData.data.filter(elem => elem?.id !== selectedCustomer?.id) };
        localStorage.setItem('customerData', JSON.stringify(updatedData));
        notifySuccess('Customer deleted successfully')
        setSelectedCustomer({})
        setShowDeleteModal(false)
    }

    const openEditModal = (customer) => {
        setSelectedCustomer(customer)
        setShow(true)
    }

    useEffect(() => {
        const storedData = localStorage.getItem('customerData');
        if (storedData) {
            dispatch(setCusomerData(JSON.parse(storedData)))
        } else {
            fetchData()
        }
    }, [])

    return (
        <>
            <div >
                <button onClick={() => { setShow(true); }} className='customer-button'>
                    <img src={signIn} alt='icon' /> Add New Customer
                </button>
                <CustomerTable data={customers?.data} onDelete={openDeleteModal} onEdit={openEditModal} />
            </div>
            {show && <AddModal validated={validated} handleSubmit={handleSubmit} selectedCustomer={selectedCustomer} handleChange={handleChange} show={show} handleClose={() => { setShow(false); setSelectedCustomer({}) }} />}
            {showDeleteModal && <DeleteModal show={showDeleteModal} handleClose={() => { setShowDeleteModal(false); setSelectedCustomer(false) }} onDelete={onConfirmDelete} />}
        </>
    )
}

export default Customer