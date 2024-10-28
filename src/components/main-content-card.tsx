import { PropsWithChildren } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

interface Props extends PropsWithChildren {
    title: string;
    description: string;
}

export const MainContentCard: React.FC<Props> = ({title, description, children}) => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}