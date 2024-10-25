import { TableBody, TableCell, TableRow } from '@/components/ui/table'

interface Props {
    nombre: string;
    parcela: string;
    superficie: number;
    superficieEdificada: number;
    baseImponible: number;
}

export const LotesTableRow: React.FC<Props> = ({ baseImponible, nombre, parcela, superficie, superficieEdificada }) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell>{nombre}</TableCell>
                <TableCell>{parcela}</TableCell>
                <TableCell>{superficie}</TableCell>
                <TableCell>{superficieEdificada}</TableCell>
                <TableCell>$ {baseImponible}</TableCell>
            </TableRow>
        </TableBody>
    )
}