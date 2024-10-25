import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import DBLogo from "@/assets/LOGO DON BENITO.jpeg";
import { NavLink } from 'react-router-dom';

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>

                <SidebarHeader>
                    <div className="flex flex-1 text-left text-sm leading-tight items-center gap-2">
                        <img src={DBLogo} alt="Logo Don Benito" className='w-12 h-12' />
                        <div className='flex-col flex'>
                            <span className="truncate font-semibold">
                                Don Benito
                            </span>
                            <span className="truncate text-xs">
                                ARBA Manager
                            </span>
                        </div>
                    </div>
                </SidebarHeader>

                <SidebarGroup>
                    <SidebarGroupLabel>ARBA</SidebarGroupLabel>
                    <SidebarMenuItem className='list-none'>
                        <SidebarMenuButton>
                            Cargar factura
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            Ver facturas
                        </SidebarMenuButton>
                        <SidebarMenuButton asChild>
                            <NavLink to={"/arba/lotes"}>Lotes</NavLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Pagos</SidebarGroupLabel>
                    <SidebarMenuItem className='list-none'>
                        <SidebarMenuButton>
                            Confirmar un pago
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            Listar pagos
                        </SidebarMenuButton>

                        <SidebarMenuButton>
                            Estado de cuentas
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Unidades Funcionales</SidebarGroupLabel>
                    <SidebarMenuItem className='list-none'>
                        <SidebarMenuButton>
                            Crear unidad funcional
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            Ver unidades funcionales
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            Editar unidades funcionales
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Usuarios</SidebarGroupLabel>
                    <SidebarMenuItem className='list-none'>
                        <SidebarMenuButton>
                            Crear usuario
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            Ver usuarios
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
