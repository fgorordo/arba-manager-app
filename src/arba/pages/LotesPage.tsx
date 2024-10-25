import { Button } from '@/components/ui/button';
import { PlusCircleIcon } from 'lucide-react';
import { LotesDetails } from '../components/LotesDetails';
import { LotesTopLevelAnalytics } from '../components/LotesTopLevelAnalytics';
import { LotesTable } from '../components';
import { Link } from 'react-router-dom';
import { useArbaStore } from '../hooks/useArbaStore';

export const LotesPage = () => {

    const { lotes } = useArbaStore();

    const totalSuperficie = lotes.reduce(
        (accumulator, currentValue) => accumulator + currentValue.superficie,
        0,
    );

    const totalSuperficieEdificada = lotes.reduce(
        (accumulator, currentValue) => accumulator + currentValue.superficieEdificada,
        0,
    );

    return (
        <div className='px-4'>
            <div className='mb-4 flex justify-between'>
                <h2 className='text-2xl font-bold'>Lotes y parcelas</h2>
                <Button asChild><Link to="crear"><PlusCircleIcon /> Añadir lote</Link></Button>
            </div>
            <div className='grid grid-cols-4 gap-4 grid-rows-5'>
                <LotesTopLevelAnalytics totalParcelas={lotes.length} totalSuperficie={totalSuperficie} totalSuperficieConstruida={totalSuperficieEdificada}/>
                <LotesDetails activeLote={"3232B"}/>
                <LotesTable lotesTableData={lotes}/>
            </div>
        </div>
    );
};