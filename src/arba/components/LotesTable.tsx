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
import { ILote } from '../slices/arbaSlice';

interface Props {
    lotesTableData: ILote[]
}

interface CustomTableRowProps {
    nombre: string;
    parcela: string;
    superficie: number;
    superficieEdificada: number;
    baseImponible: number;
}

const CustomTableRow: React.FC<CustomTableRowProps> = ({baseImponible, nombre, parcela, superficie, superficieEdificada}) => {
    return (
        <TableRow onClick={() => alert('Cargando el lote')} className='cursor-pointer'>
            <TableCell>{nombre}</TableCell>
            <TableCell>{parcela}</TableCell>
            <TableCell>{superficie}</TableCell>
            <TableCell>{superficieEdificada}</TableCell>
            <TableCell className='font-semibold'>$ {baseImponible}</TableCell>
        </TableRow>
    )
}

export const LotesTable: React.FC<Props> = ({lotesTableData}) => {
    return (
        <Card className='row-span-4 col-span-3'>
            <Table>
                <TableCaption>
                    {
                        lotesTableData.length === 0
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
                        lotesTableData.map(item => (
                            <CustomTableRow 
                                baseImponible={item.baseImponible} 
                                nombre={item.nombreParcela}
                                parcela={item.parcela!}
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