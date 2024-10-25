import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    totalParcelas: number;
    totalSuperficie: number;
    totalSuperficieConstruida: number;
}

export const LotesTopLevelAnalytics: React.FC<Props> = ({totalParcelas = 0, totalSuperficie = 0, totalSuperficieConstruida = 0}) => {  
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{totalParcelas}</CardTitle>
                    <CardDescription>Total de lotes/parcelas</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>{totalSuperficie} m2</CardTitle>
                    <CardDescription>Total de superficie</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>{totalSuperficieConstruida} m2</CardTitle>
                    <CardDescription>Total de superficie construida</CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}