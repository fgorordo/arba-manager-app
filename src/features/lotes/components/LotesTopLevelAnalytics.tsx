import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLotesStore } from '../hooks';

export const LotesTopLevelAnalytics: React.FC = () => {
    const { lotes } = useLotesStore();

    const totalParcelas = lotes.length
    const totalSuperficie = lotes.reduce((accumulator, currentValue) => accumulator + currentValue.superficie, 0)
    const totalSuperficieEdificada = lotes.reduce((accumulator, currentValue) => accumulator + currentValue.superficieEdificada, 0)

    return (
        <>
            <Card className=''>
                <CardHeader>
                    <CardTitle>{totalParcelas}</CardTitle>
                    <CardDescription>Total de lotes/parcelas</CardDescription>
                </CardHeader>
            </Card>
            <Card className=''>
                <CardHeader>
                    <CardTitle>{totalSuperficie} m2</CardTitle>
                    <CardDescription>Total de superficie</CardDescription>
                </CardHeader>
            </Card>
            <Card className=''>
                <CardHeader>
                    <CardTitle>{totalSuperficieEdificada} m2</CardTitle>
                    <CardDescription>Total de superficie edificada</CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}