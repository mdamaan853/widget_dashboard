import {toast} from 'react-toastify';
export const notification = message => (toast(message));
export const success = message => (toast.success(message));
export const info = message => (toast.info(message));
export const warning = message => (toast.warn(message));
export const error = message => (toast.error(message));
