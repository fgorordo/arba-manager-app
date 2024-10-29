import { DataTable, PageContainer } from '@/common/components';
import { useParcelaStore } from './hooks';
import { DataTableColumns, ViewDetailsForm } from './components';

export const ParcelasPage = () => {
  const { parcelas } = useParcelaStore()

  return (
    <PageContainer title='Parcelas y Lotes'>
      <div className='grid grid-cols-4 gap-2'>
        <DataTable className='col-span-3' columns={DataTableColumns} data={parcelas} filterCriteria='partida' filterCriteriaPlaceholder='número de partida.'/>
        <ViewDetailsForm />
      </div>
    </PageContainer>
  )
}