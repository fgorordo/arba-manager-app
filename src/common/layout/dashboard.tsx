import { Outlet } from 'react-router-dom';

import { SidebarProvider, SidebarTrigger } from '../components/ui/sidebar';
import { DashboardSidebar } from '../components';
import { useParcelaStore } from '@/modules/parcelas/hooks';
import { useEffect } from 'react';
import { useAppStore } from '../hooks';
import { ProgressBar } from 'react-loader-spinner';
import { Toaster } from '../components/ui/toaster';


export const DashboardLayout: React.FC = () => {
    const { startSetInitialState } = useParcelaStore()
    const { status } = useAppStore();


    useEffect(() => {
        startSetInitialState()
    }, [])

    return (
        <SidebarProvider>
            <DashboardSidebar />
            <main className='flex flex-col w-full overflow-auto'>
                <SidebarTrigger className='md:hidden' />
                {
                    status === 'loading'
                        ? (
                            <div className='flex items-center justify-center h-full w-full'>
                                <ProgressBar
                                    visible={true}
                                    height="80"
                                    width={200}
                                    barColor='#6b7280'
                                    borderColor='#1f2937'
                                    ariaLabel="progress-bar-loading"
                                    wrapperClass=""
                                />
                            </div>
                        )
                        : <Outlet />
                }
                <Toaster />
            </main>
        </SidebarProvider>
    );
}