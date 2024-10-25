import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const CreateNewPlatPage = () => {
    return (
        <div className='grid grid-cols-4 gap-4 px-4'>
            <Card>
                <CardHeader>
                    <CardTitle>4</CardTitle>
                    <CardDescription>Total de lotes/parcelas</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>6500 mt2</CardTitle>
                    <CardDescription>Total de superficie</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>200 mt2</CardTitle>
                    <CardDescription>Total de superficie construida</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
};