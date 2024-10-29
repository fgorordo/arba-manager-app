import { PropsWithChildren } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface Props extends PropsWithChildren {
  title: string;
  description?: string;
}

export const PageContainer: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div className='flex flex-col h-full p-6'>
      <Card className='flex-grow'>
        <CardHeader>
          <CardTitle className='text-2xl'>{title}</CardTitle>
          {
            description && (<CardDescription>{description}</CardDescription>)
          }
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}