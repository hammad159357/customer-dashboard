import { toast } from 'react-toastify';

export const notifySuccess = (msg, position) => {
    toast.success(msg, { position: position });
}

export const notifyError = (msg, position) => {
    toast.error(msg, { position: position });
}