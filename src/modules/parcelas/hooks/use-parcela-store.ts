import { Parcela } from '@/core/models';
import { useAppDispatch, useAppSelector, useAppStore } from '@/common/hooks'
import { createParcela, setActiveParcela, setInitialState } from '@/core/store/features';


export const useParcelaStore = () => {
    const { handleSetFailedStatus, handleSetIdleStatus, handleSetLoadingStatus, handleSetSuccededStatus } = useAppStore();
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

    const startCreateParcela = async (dto: Partial<Parcela>) => {
        handleSetLoadingStatus()
        setTimeout(async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/parcelas', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dto)
                });
                const data = await response.json() as Parcela;
                dispatch(createParcela(data));
                handleSetSuccededStatus();
            } catch (error: any) {
                handleSetFailedStatus(error.message)
                console.error(error);
            } finally {
                handleSetIdleStatus()
            }
        }, 5000)
    }

    return {
        parcelas,
        activeParcela,

        startCreateParcela,
        startSetInitialState,
        handleSetActiveParcela
    }
}