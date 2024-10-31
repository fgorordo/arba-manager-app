import { useParcelaStore } from './hooks';
import { Gridx3Container } from '@/common/layout/tiple-grid-layout';
import { Gridx3MainCard, Gridx3SideCard, Gridx3BottomCard } from '../../common/layout/tiple-grid-layout';
import { DataTable } from '@/common/components';
import { parcelasColumns } from './components';
import { Button } from '@/common/components/ui/button';
import { FileIcon } from 'lucide-react';
import { ParcelasFormDialog } from './components/parcelas-form-dialog';

export const ParcelasPage = () => {
  const { parcelas } = useParcelaStore()

  return (
    <Gridx3Container>
      <Gridx3MainCard>
        <div className='mb-4 flex w-full justify-between'>
          <h2 className='text-2xl font-bold'>Lotes y parcelas</h2>
          <div className='flex gap-2'>
            <Button variant={"outline"}><FileIcon/>Exportar</Button>
            <ParcelasFormDialog />
          </div>
        </div>
        <DataTable columns={parcelasColumns} data={parcelas} />
      </Gridx3MainCard>
      <Gridx3SideCard title='Información general'>
      </Gridx3SideCard>
      <Gridx3BottomCard title='Información del inmueble'></Gridx3BottomCard>
    </Gridx3Container>
  )
}