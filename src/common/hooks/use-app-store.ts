import { AppStatus, setAppStatus } from '@/core/store/features';
import { useAppDispatch, useAppSelector } from './use-redux';

export const useAppStore = () => {
    const {status, errorMessage, succededMessage} = useAppSelector(store => store.app)
    const dispatch = useAppDispatch();

    const handleAppStatus = (status: AppStatus) => {
        dispatch(setAppStatus(status))
    }
    return {
        status,
        errorMessage,
        succededMessage,
        
        handleAppStatus,
    };
}