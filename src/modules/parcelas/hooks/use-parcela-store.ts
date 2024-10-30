import { Parcela } from '@/core/models';
import { useAppDispatch, useAppSelector, useAppStore } from '@/common/hooks'
import { setActiveParcela, setInitialState } from '@/core/store/features';


export const useParcelaStore = () => {
    const { handleSetFailedStatus, handleSetIdleStatus,handleSetLoadingStatus, handleSetSuccededStatus } = useAppStore();
    const { parcelas, activeParcela } = useAppSelector(state => state.parcelas)
    const dispatch = useAppDispatch();


    const startSetInitialState = async () => {
        handleSetLoadingStatus()
        setTimeout(async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/parcelas');
                const data = await response.json() as Parcela[];
                dispatch(setInitialState(data));
                handleSetSuccededStatus();
            } catch (error: any) {
                handleSetFailedStatus(error.message)
                console.error(error);
            } finally {
                handleSetIdleStatus()
            }
        }, 5000)
    }

    const handleSetActiveParcela = (id: number) => {
        dispatch(setActiveParcela(id))
    }

    return {
        parcelas,
        activeParcela,
        startSetInitialState,
        handleSetActiveParcela
    }
}