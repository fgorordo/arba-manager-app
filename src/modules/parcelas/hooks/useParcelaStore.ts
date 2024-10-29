import { Parcela } from '@/core/models';
import { useAppDispatch, useAppSelector, useAppStore } from '@/common/hooks'
import { setInitialState } from '@/core/store/features';


export const useParcelaStore = () => {
    const { handleAppStatus } = useAppStore();
    const parcelas = useAppSelector(state => state.parcelas)
    const dispatch = useAppDispatch();


    const startSetInitialState = async () => {
        handleAppStatus('loading')
        setTimeout(async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/parcelas');
                const data = await response.json() as Parcela[];
                dispatch(setInitialState(data));
                handleAppStatus('succeded')
            } catch (error) {
                handleAppStatus('failed')
                console.error(error);
            } finally {
                handleAppStatus('idle')
            }
        }, 5000)

    }

    return {
        parcelas,
        startSetInitialState
    }
}