import { useParcelaStore } from './hooks';
import { Gridx3Container } from '@/common/layout/tiple-grid-layout';
import { Gridx3MainCard, Gridx3SideCard, Gridx3BottomCard } from '../../common/layout/tiple-grid-layout';
import { DataTable } from '@/common/components';
import { parcelasColumns } from './components';

export const ParcelasPage = () => {
  const { parcelas } = useParcelaStore()

  return (
    <Gridx3Container>
      <Gridx3MainCard>
        <DataTable columns={parcelasColumns} data={parcelas}/>
      </Gridx3MainCard>
      <Gridx3SideCard title='Información general'>
      </Gridx3SideCard>
      <Gridx3BottomCard title='Información del inmueble'></Gridx3BottomCard>
    </Gridx3Container>
  )
}