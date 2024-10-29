import { DashboardLayout } from '@/common/layout';
import { HomePage } from '@/modules/home/home-page';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { APP_ROUTES, AUX_ROUTES } from '../interfaces';
import { ParcelasPage } from '@/modules/parcelas';
import { ImpuestosPage } from '@/modules/impuestos';
import { UnidadesFuncionalesPage } from '@/modules/unidades-funcionales';
import { CuentasPage } from '@/modules/cuentas';

export const appRouter = createBrowserRouter([
    {
        path: APP_ROUTES.ROOT,
        element:<>Auth PAge</>
    },
    {
        path: AUX_ROUTES.DASHBOARD,
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <Navigate to={APP_ROUTES.HOME}/>
            },
            {
                path: APP_ROUTES.HOME,
                element: <HomePage />
            },
            {
                path: APP_ROUTES.PARCELAS,
                element: <ParcelasPage />
            },
            {
                path: APP_ROUTES.IMPUESTOS,
                element: <ImpuestosPage />
            },
            {
                path: APP_ROUTES.UNIDADES_FUNCIONALES,
                element: <UnidadesFuncionalesPage />
            },
            {
                path: APP_ROUTES.BALANCE,
                element: <CuentasPage />
            }
        ]
    }
])