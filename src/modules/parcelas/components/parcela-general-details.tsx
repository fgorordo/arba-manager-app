import { useEffect } from "react";
import { useParcelaStore } from "../hooks"
import { createMoneyFormat } from "../helpers";

export const ParcelaGeneralDetails = () => {

    const { activeParcela } = useParcelaStore();

    useEffect(() => {

    }, [activeParcela])

    return (
        <div className='grid grid-cols-1 gap-4 pt-4'>
            <div className='flex items-center gap-1'>
                <h3 className='font-medium text-xs'>ID:</h3>
                <p className='text-xs text-muted-foreground'>{activeParcela ? activeParcela.id : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Nombre:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.nombre : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Nombre propietario:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.nombrePropietario : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Partida N°:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.partida : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Tipo de planta:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? activeParcela.tipoPlanta : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Base imponible:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? `${createMoneyFormat(activeParcela.baseImponible)}` : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Superficie:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? `${activeParcela.superficie} m²` : '-'}</p>
            </div>
            <div>
                <h3 className='font-medium text-sm'>Superficie edificada:</h3>
                <p className='text-sm text-muted-foreground'>{activeParcela ? `${activeParcela.superficieEdificada} m²` : '-'}</p>
            </div>
        </div>
    )
}