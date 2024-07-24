import { createContext, Dispatch } from 'react';

const ToastContext = createContext({
    showToastBar: (() => null) as Dispatch<any>,
});

export default ToastContext;
