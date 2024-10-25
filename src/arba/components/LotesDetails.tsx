import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { PencilIcon } from 'lucide-react'

interface Props {
  activeLote: ActiveLote;
}

interface ActiveLote {
  nombre?: string;
  propietario?: string;
  partida?: string;
  tipoPlanta?: string;
  baseImponible?: number | string;
  circ?: string;
  seccion?: string;
  chacra?: string;
  quinta?: string;
  manzana?: string;
  fraccion?: string;
  parcela?: string;
  subParcela?: string;
  superficie?: number | string;
  superficieEdificada?: number | string;
}

export const LotesDetails: React.FC<Props> = ({activeLote}) => {
  const {
    baseImponible,
    chacra,
    circ,
    fraccion,
    manzana,
    nombre,
    parcela,
    partida,
    propietario,
    quinta,
    seccion,
    subParcela,
    superficie,
    superficieEdificada,
    tipoPlanta
  } = activeLote;

  return (
    <Card className='row-span-5'>
      <CardHeader>
        <div className='flex items-center'>
          <CardTitle className='flex-1'>Información</CardTitle>
          <Button size="sm"><PencilIcon /></Button>
        </div>
        <div className='py-4 grid grid-cols-2 gap-4'>
          <div className=''>
            <p className='font-semibold text-sm'>Nombre</p>
            <span className='text-sm font-light'>{ nombre ? nombre : "-" }</span>
          </div>

          <div className=''>
            <p className='font-semibold text-sm'>Propietario</p>
            <span className='text-sm font-light'>{propietario ? propietario : "-"}</span>
          </div>

          <div className=''>
            <p className='font-semibold text-sm'>Partida N°</p>
            <span className='text-sm font-light'>{partida ? partida : "-"}</span>
          </div>

          <div className=''>
            <p className='font-semibold text-sm'>Tipo de planta</p>
            <span className='text-sm font-light'>{tipoPlanta ? tipoPlanta : "-"}</span>
          </div>

          <div className=''>
            <p className='font-semibold text-sm'>Base Imponible</p>
            <span className='text-sm font-light'>$ {baseImponible ? baseImponible : "-"}</span>
          </div>

          <div className=''>
            <p className='font-semibold text-sm'>Circ.</p>
            <span className='text-sm font-light'>{circ? circ : "-"}</span>
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>Sec.</p>
            <span className='text-sm font-light'>{seccion ? seccion : "-"}</span>
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>Chacra</p>
            <span className='text-sm font-light'>{chacra ? chacra : "-"}</span>
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>Quinta</p>
            <span className='text-sm font-light'>{quinta ? quinta : "-"}</span>
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>Manzana</p>
            <span className='text-sm font-light'>{manzana ? manzana : "-"}</span>
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>Frac.</p>
            <span className='text-sm font-light'>{fraccion ? fraccion : "-"}</span>
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>Parcela</p>
            <span className='text-sm font-light'>{parcela ? parcela : "-"}</span>
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>Sub Parcela</p>
            <span className='text-sm font-light'>{subParcela ? subParcela : "-"}</span>
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>Superficie</p>
            <span className='text-sm font-light'>{superficie ? `${superficie+" m2"}` : "-"}</span>
          </div>
          <div className=''>
            <p className='font-semibold text-sm'>Sup. Edificada</p>
            <span className='text-sm font-light'>{superficieEdificada ? `${superficieEdificada+" m2"}` : "-"}</span>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}