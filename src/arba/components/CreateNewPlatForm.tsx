import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  nombreParcela: z.string(),
  nombrePropietario: z.string(),
  numeroPartida: z.string(),
  baseImponible: z.number(),
  tipoPlanta: z.string(),
  superficie: z.number(),
  superficieEdificada: z.number(),
  circ: z.string(),
  seccion: z.string(),
  chacra: z.string(),
  quinta: z.string(),
  manzana: z.string(),
  fraccion: z.string(),
  parcela: z.string(),
  subParcela: z.string(),
  comentarios: z.string(),
})

export const CreateNewPlatForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreParcela: "",
      nombrePropietario: "",
      numeroPartida: "",
      baseImponible: 0,
      tipoPlanta: "",
      superficie: 0,
      superficieEdificada: 0,
      circ: "",
      seccion: "",
      chacra: "",
      quinta: "",
      manzana: "",
      fraccion: "",
      parcela: "",
      subParcela: "",
      comentarios: "",
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    return console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-5xl">

        <div className='mb-2'>
          <h2 className='text-2xl'>Información general</h2>
          <hr className='mb-2' />

          <div className='flex gap-5'>
            <FormField
              control={form.control}
              name="nombreParcela"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de parcela</FormLabel>
                  <FormControl>
                    <Input placeholder="Parcela norte" {...field} />
                  </FormControl>
                  <FormDescription>
                    Nombre que sera asignado a la parcela para identificarla internamente.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nombrePropietario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del propietario</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan Pérez" {...field} />
                  </FormControl>
                  <FormDescription>
                    Nombre del propietario de la parcela.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numeroPartida"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Partida N°</FormLabel>
                  <FormControl>
                    <Input placeholder="000-000000-0" {...field} />
                  </FormControl>
                  <FormDescription>
                    Número de partida tal cual figura en la boleta.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>


        <div className='mb-2'>
          <h2 className='text-2xl'>Datos del inmueble</h2>
          <hr className='mb-2' />

          <div className='grid grid-cols-4 gap-5'>
            <FormField
              control={form.control}
              name="baseImponible"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Base imponible</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tipoPlanta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de planta</FormLabel>
                  <FormControl>
                    <Input placeholder='Rural/Urbano' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="superficie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Superficie del terreno</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="superficieEdificada"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Superficie edificada</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='col-span-4 grid grid-cols-4 gap-5'>
              <FormField
                control={form.control}
                name="circ"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Circ.</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="seccion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seccion</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="chacra"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chacra</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quinta"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quinta</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="manzana"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Manzana</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fraccion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fraccion</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="parcela"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parcela</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subParcela"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sub parcela</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
          </div>

        </div>

        <FormField
          control={form.control}
          name="comentarios"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comentarios adicionales</FormLabel>
              <FormControl>
                <Textarea {...field} className='resize-none h-40'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <Button type="submit" className='mt-4'>Continuar</Button>
      </form>
    </Form>
  )
}