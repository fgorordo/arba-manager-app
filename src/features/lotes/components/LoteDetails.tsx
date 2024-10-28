import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { PencilIcon } from 'lucide-react'
import { useLotesStore } from '../hooks'
import { useEffect, useState } from 'react'
import { ILote } from '../interfaces'

export const LoteDetails: React.FC = () => {

    const {activeLoteId, lotes} = useLotesStore();
    const [activeLote, setActiveLote] = useState<ILote | undefined>(undefined)

    useEffect(() => {
        if (activeLoteId) {
            setActiveLote(lotes.find(lote => lote.nombre === activeLoteId))
        }
    }, [activeLoteId])

    return (
        <Card className='lg:col-span-3 xl:col-span-2'>
            <CardHeader>
                <div className='flex items-center'>
                    <CardTitle className='flex-1'>Información</CardTitle>
                    <Button size="sm" disabled={activeLoteId ? false : true} ><PencilIcon /></Button>
                </div>
                <div className='py-4 grid grid-cols-2 gap-4'>
                    <div className=''>
                        <p className='font-semibold text-sm'>Nombre</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.nombre : "-"}</span>
                    </div>

                    <div className=''>
                        <p className='font-semibold text-sm'>Propietario</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.nombrePropietario : "-"}</span>
                    </div>

                    <div className=''>
                        <p className='font-semibold text-sm'>Partida N°</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.partida : "-"}</span>
                    </div>

                    <div className=''>
                        <p className='font-semibold text-sm'>Tipo de planta</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.tipoPlanta : "-"}</span>
                    </div>

                    <div className=''>
                        <p className='font-semibold text-sm'>Base Imponible</p>
                        <span className='text-sm font-light'>$ {activeLote ? activeLote.baseImponible : "-"}</span>
                    </div>

                    <div className=''>
                        <p className='font-semibold text-sm'>Circ.</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.circ ? activeLote.circ : "-" : "-"}</span>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-sm'>Sec.</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.seccion ? activeLote.seccion : "-" : "-"}</span>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-sm'>Chacra</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.chacra ? activeLote.chacra : "-" : "-"}</span>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-sm'>Quinta</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.quinta ? activeLote.quinta : "-" : "-"}</span>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-sm'>Manzana</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.manzana ? activeLote.manzana : "-" : "-"}</span>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-sm'>Frac.</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.fraccion ? activeLote.fraccion : "-" : "-"}</span>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-sm'>Parcela</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.parcela ? activeLote.parcela : "-" : "-"}</span>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-sm'>Sub Parcela</p>
                        <span className='text-sm font-light'>{activeLote ? activeLote.subParcela ? activeLote.parcela : "-" : "-"}</span>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-sm'>Superficie</p>
                        <span className='text-sm font-light'>{activeLote ? `${activeLote.superficie} m2` : "-"}</span>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-sm'>Sup. Edificada</p>
                        <span className='text-sm font-light'>{activeLote ? `${activeLote.superficieEdificada} m2` : "-"}</span>
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}