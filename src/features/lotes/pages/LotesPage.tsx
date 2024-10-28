import { Button } from "@/components/ui/button"
import { LoteDetails, LotesTable, LotesTopLevelAnalytics } from "../components"
import { Link } from "react-router-dom"
import { FileIcon, PlusCircleIcon } from "lucide-react";

export const LotesPage = () => {


  return (
    <div className="flex gap-2 flex-col">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Lotes y parcelas</h2>
          <p className="text-muted-foreground">Administra y gestiona todos los lotes y parcelas que luego se utilizaran para los calculos de impuestos inmobiliarios según su preferencia.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => alert("Function not implemented yet!")}><FileIcon /> Exportar</Button>
          <Button asChild><Link to={"/lotes/nuevo"}><PlusCircleIcon /> Crear nuevo</Link></Button>
        </div>
      </div>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-5">
        <LotesTopLevelAnalytics />
        <LotesTable />
        <LoteDetails />
      </div>
    </div>
  )
}