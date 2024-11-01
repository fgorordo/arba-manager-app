import { useParcelaStore } from "../hooks"

export const ParcelaExtraDetails = () => {

    const { activeParcela } = useParcelaStore();

    return (
        <div className='flex gap-4 justify-between mt-4'>
            <div>
                <h3 className='font-medium text-sm'>Circ.:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.circ ? activeParcela.circ : '-' : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Seccion:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.seccion ? activeParcela.seccion : '-' : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Chacra:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.chacra ? activeParcela.chacra : '-' : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Quinta:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.quinta ? activeParcela.quinta : '-' : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Manzana:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.manzana ? activeParcela.manzana : '-' : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Fraccion:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.fraccion ? activeParcela.fraccion : '-' : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Parcela:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.parcela ? activeParcela.parcela : '-' : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Sub parcela:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.subParcela ? activeParcela.subParcela : '-' : '-'}</p>
            </div>
        </div>
    )
}