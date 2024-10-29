import { setFailedStatus, setIdleStatus, setLoadingStatus, setSuccededStatus } from '@/core/store/features';
import { useAppDispatch, useAppSelector } from './use-redux';
import { useToast } from './use-toast';

export const useAppStore = () => {
    const { status, errorMessage, succededMessage } = useAppSelector(store => store.app)
    const dispatch = useAppDispatch();
    const { toast } = useToast();


    const handleSetFailedStatus = (message: string | null = null) => {
        dispatch(setFailedStatus(message))
        if (message)
            toast({
                variant: 'destructive',
                title: '¡Algo parece que salio mal!',
                description: message,
            });
    }

    const handleSetSuccededStatus = (message: string | null = null) => {
        dispatch(setSuccededStatus(message))
        if (message)
            toast({
                variant: 'default',
                title: '¡Exito!',
                description: message,
            });
    };

    const handleSetLoadingStatus = () => {
        dispatch(setLoadingStatus())
    }

    const handleSetIdleStatus = () => {
        dispatch(setIdleStatus());
    }


    return {
        status,
        errorMessage,
        succededMessage,

        handleSetIdleStatus,
        handleSetLoadingStatus,
        handleSetFailedStatus,
        handleSetSuccededStatus,
    };
}