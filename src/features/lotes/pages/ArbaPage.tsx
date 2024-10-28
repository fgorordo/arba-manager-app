import { MainContentCard } from "@/components";
import { Button } from "@/components/ui/button";

export const ArbaPage = () => {
  return (
    <MainContentCard title="Impuesto inmobiliario" description="Crea, edita y elimina impuestos inmobilarios para su gestion, prorrateo y cobro de una manera ágil y sincilla.">
      <div>
        <div className="flex justify-end">
          <Button>Crear nuevo impuesto</Button>
        </div>
      </div>
    </MainContentCard>
  )
}