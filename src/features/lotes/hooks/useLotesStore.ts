import { useAppDispatch, useAppSelector } from "@/hooks";
import { ILote } from "../interfaces";
import { createLote, loadInitalLotesData, setActiveLote } from "../slices";
export const useLotesStore = () => {
    const { lotes, activeLoteId } = useAppSelector(state => state.lotes);
    const dispatch = useAppDispatch();

    const startCreateLote = (dto: ILote) => {
        dispatch(createLote(dto));
    }

    const startLoadingInitialLotesData = (data: ILote[]) => {
        dispatch(loadInitalLotesData(data));
    }

    const startSetActiveLoteId = (id: string) => {
        dispatch(setActiveLote(id));
    }


    return {
        lotes,
        activeLoteId,
        startCreateLote,
        startLoadingInitialLotesData,
        startSetActiveLoteId
    };
}