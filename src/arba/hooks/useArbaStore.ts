import { useAppDispatch, useAppSelector } from '@/hooks';
import { createNewLote, ILote } from '../slices/arbaSlice';

export const useArbaStore = () => {
    const { lotes } = useAppSelector(state => state.arba);
    const dispatch = useAppDispatch();

    const createLote = (dto: ILote) => {
        return dispatch(createNewLote(dto));
    }

    return {
        lotes,

        createLote,
    };
}