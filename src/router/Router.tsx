import { CreateLotePage, LotesPage } from '@/arba';
import { DashboardLayout } from '@/dashboard';
import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
    {
        path: "/",
        element: "Landing Page"
    },
    {
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <>Main</>,
            },
            {
                path: "/arba/lotes",
                element: <LotesPage/>
            },
            {
                path: "/arba/lotes/crear",
                element:<CreateLotePage />
            }
        ]
    }
])