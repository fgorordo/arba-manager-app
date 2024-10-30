
import { Button } from '@/common/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";
import { useForm } from 'react-hook-form';
import { createParcelaFormSchema } from '../helpers';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";


import { zodResolver } from '@hookform/resolvers/zod';

export const ViewDetailsForm = () => {

  const form = useForm<z.infer<typeof createParcelaFormSchema>>({
    resolver: zodResolver(createParcelaFormSchema),
    defaultValues: {
      baseImponible: 0,
      chacra: undefined,
      circ: undefined,
      fraccion: undefined,
      manzana: undefined,
      nombre: undefined,
      nombrePropietario: undefined,
      parcela: undefined,
      partida: undefined,
      quinta: undefined,
      seccion: undefined,
      subParcela: undefined,
      superficie: 0,
      superficieEdificada: 0,
      tipoPlanta: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof createParcelaFormSchema>) => {
    console.log(values);
  };

  return (
    <Card className=''>
      <CardHeader>
        <CardTitle>nombre_parcelaa</CardTitle>
        <CardDescription>número_partida</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-6'>
          <div className=''>
            <div className='mb-2'>
              <h2 className='text-xl font-semibold'>Información general</h2>
              <hr />
            </div>
            <div className='flex gap-5 flex-wrap'>
              <div>
                <h3 className='font-medium'>Nombre:</h3>
                <p className='text-muted-foreground'>Parcela 01</p>
              </div>
              <div>
                <h3 className='font-medium'>N° de Partida:</h3>
                <p className='text-muted-foreground'>082-028440-2</p>
              </div>
              <div>
                <h3 className='font-medium'>Nombre del propietario:</h3>
                <p className='text-muted-foreground'>Eduardo Rodolfo Repetto</p>
              </div>
              <div>
                <h3 className='font-medium'>Base imponible:</h3>
                <p className='text-muted-foreground'>330579</p>
              </div>
            </div>
          </div>

          <div>
            <div className='mb-2'>
              <h2 className='text-xl font-semibold'>Información del inmueble</h2>
              <hr />
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <h3 className='font-medium'>Circ.:</h3>
                <p className='text-muted-foreground'>14</p>
              </div>
              <div>
                <h3 className='font-medium'>Seccion:</h3>
                <p className='text-muted-foreground'>-</p>
              </div>
              <div>
                <h3 className='font-medium'>Chacra:</h3>
                <p className='text-muted-foreground'>-</p>
              </div>
              <div>
                <h3 className='font-medium'>Quinta:</h3>
                <p className='text-muted-foreground'>-</p>
              </div>
              <div>
                <h3 className='font-medium'>Manzana:</h3>
                <p className='text-muted-foreground'>-</p>
              </div>
              <div>
                <h3 className='font-medium'>Fracción:</h3>
                <p className='text-muted-foreground'>-</p>
              </div>
              <div>
                <h3 className='font-medium'>Parcela:</h3>
                <p className='text-muted-foreground'>1794A</p>
              </div>
              <div>
                <h3 className='font-medium'>Sub Parcela:</h3>
                <p className='text-muted-foreground'>-</p>
              </div>
              <div>
                <h3 className='font-medium'>Superficie:</h3>
                <p className='text-muted-foreground'>20960</p>
              </div>
              <div>
                <h3 className='font-medium'>Superficie edificada:</h3>
                <p className='text-muted-foreground'>20960</p>
              </div>
            </div>
          </div>

        </div>
      </CardContent>
      <CardFooter className='flex w-full justify-between'>
        Card Footer
      </CardFooter>
    </Card >
  )
}