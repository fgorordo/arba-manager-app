import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

export const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='p-2 w-full'>
                <Outlet />
            </main>
        </SidebarProvider>
    )
};