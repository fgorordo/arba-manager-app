import { DashboardLayout } from '@/dashboard';
import { ArbaPage, CreateLotePage, LotesPage, SettingsPage } from '@/features/lotes';
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
                path: "/lotes",
                element: <LotesPage />,
            },
            {
                path: "/lotes/nuevo",
                element: <CreateLotePage />
            },
            {
                path: "/arba",
                element: <ArbaPage />
            },
            {
                path: "/configurar-lotes",
                element: <SettingsPage />
            }

        ]
    }
])