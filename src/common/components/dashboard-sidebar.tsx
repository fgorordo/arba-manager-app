import { HomeIcon, LandPlotIcon, MapPinHouseIcon, ReceiptIcon, ScaleIcon, UsersRoundIcon } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';
import { Link } from 'react-router-dom'


// Menu items.
const dashboard = [
  {
    title: "Inicio",
    url: '#',
    icon: HomeIcon,
  },
]

const management = [
  {
    title: 'Parcelas',
    url: "parcelas",
    icon: LandPlotIcon
  },
  {
    title: 'Impuestos',
    url: 'impuestos',
    icon: ReceiptIcon
  },
  {
    title: 'Unidades Funcionales',
    url: 'unidades-funcionales',
    icon: MapPinHouseIcon
  },
  {
    title: 'Estado de cuentas',
    url: 'cuentas',
    icon: ScaleIcon
  },
]

const users = [
  {
    title: 'Administrar acceso',
    url: '#',
    icon: UsersRoundIcon
  }
]

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>Don Benito</SidebarHeader>
      <SidebarContent>

        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboard.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to='inicio'>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Gestion</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {management.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Usuarios</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {users.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}
