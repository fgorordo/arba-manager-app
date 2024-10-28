import { Card } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useLotesStore } from '../hooks';
import { useEffect } from 'react';
import { devData } from '../data';

interface CustomTableRowProps {
    nombre: string;
    parcela: string;
    superficie: number;
    superficieEdificada: number;
    baseImponible: number;    
}

const CustomTableRow: React.FC<CustomTableRowProps> = ({baseImponible, nombre, parcela, superficie, superficieEdificada}) => {
    const {startSetActiveLoteId} = useLotesStore();

    return (
        <TableRow className='cursor-pointer' onClick={() => startSetActiveLoteId(nombre)}>
            <TableCell>{nombre}</TableCell>
            <TableCell>{parcela}</TableCell>
            <TableCell>{superficie}</TableCell>
            <TableCell>{superficieEdificada}</TableCell>
            <TableCell className='font-semibold'>$ {baseImponible}</TableCell>
        </TableRow>
    )
}

export const LotesTable: React.FC = () => {

    const { lotes } = useLotesStore()
    const {startLoadingInitialLotesData} = useLotesStore()

    useEffect(() => {
      startLoadingInitialLotesData(devData)
    }, [])

    return (
        <Card className='lg:col-span-3'>
            <Table>
                <TableCaption className='mb-4'>
                    {
                        lotes.length === 0
                        ? 'No hay lotes registrados, por favor crea un nuevo lote.'
                        : 'Las unidades de superficie están expresadas en m2.'
                    }
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Parcela</TableHead>
                        <TableHead>Superficie</TableHead>
                        <TableHead>Sup. Edificada</TableHead>
                        <TableHead>Base Imponible</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        lotes.map(item => (
                            <CustomTableRow 
                                baseImponible={item.baseImponible} 
                                nombre={item.nombre}
                                parcela={item.parcela ? item.parcela : 'No disponible'}
                                superficie={item.superficie}
                                superficieEdificada={item.superficieEdificada}
                                key={item.parcela}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </Card>
    )
}