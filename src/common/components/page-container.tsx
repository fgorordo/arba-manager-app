import { PropsWithChildren } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface Props extends PropsWithChildren {
  title: string;
  description?: string;
  className?: string;
}

export const PageContainer: React.FC<Props> = ({ children, title, description, className }) => {
  return (
    <div className='flex flex-col p-6 h-dvh'>
      <Card className='h-full'>
        <CardHeader>
          <CardTitle className='text-2xl'>{title}</CardTitle>
          {
            description && (<CardDescription>{description}</CardDescription>)
          }
        </CardHeader>
        <CardContent className={className}>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}