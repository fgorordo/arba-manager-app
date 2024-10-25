import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

export const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full'>
                <div className='bg-red-100 h-14 mb-4'>
                   Header 
                </div>
                <Outlet />
            </main>
        </SidebarProvider>
    )
};