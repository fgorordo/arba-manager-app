import { PropsWithChildren } from 'react'
import { Card, CardContent, CardTitle } from '../components/ui/card';

export const Gridx3Container: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='bg-gray-100 h-full grid grid-cols-1 gap-2 p-2 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 md:max-h-screen'>
            {children}
        </div >
    )
}

interface Gridx3MainCardProps extends PropsWithChildren {
    title?: string;
}

export const Gridx3MainCard: React.FC<Gridx3MainCardProps> = ({ children, title }) => {
    return (
        <Card className='md:col-span-2 lg:col-span-3 md:row-span-3 overflow-auto'>
            <CardContent className='p-6'>
                {
                    title && (<CardTitle className='text-4xl'>{title}</CardTitle>)
                }
                {children}
            </CardContent>
        </Card>
    )
}

interface Gridx3SideCardProps extends PropsWithChildren {
    title?: string;
}

export const Gridx3SideCard: React.FC<Gridx3SideCardProps> = ({ children, title }) => {
    return (
        <Card className='lg:row-span-3 overflow-auto'>
            <CardContent className='p-6'>
                {
                    title && (<CardTitle className='text-xl'>{title}</CardTitle>)
                }
                <hr className='my-1'/>
                {children}
            </CardContent>
        </Card>
    )
}

interface Gridx3BottomCardProps extends PropsWithChildren {
    title?: string;
}

export const Gridx3BottomCard: React.FC<Gridx3BottomCardProps> = ({ children, title }) => {
    return (
        <Card className='lg:col-span-4 overflow-auto'>
            <CardContent className='p-6'>
                {
                    title && (<CardTitle className='text-xl'>{title}</CardTitle>)
                }
                <hr className='my-1'/>
                {children}
            </CardContent>
        </Card>
    )
}