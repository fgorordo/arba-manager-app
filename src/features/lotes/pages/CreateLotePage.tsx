import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useLotesStore } from '../hooks';

const formSchema = z.object({
    nombre: z.string({ required_error: 'Debes ingresar un nombre para la parcela.' }),
    nombrePropietario: z.string({ required_error: 'Debes ingresar un nombre de propietario.' }),
    partida: z.string({ required_error: 'Debes ingresar un número de partida.' }),
    baseImponible: z.coerce.number({ required_error: 'Debes ingresar la base imponible.', invalid_type_error: 'Debes ingresar un valor' }),
    tipoPlanta: z.string({ required_error: 'Debes ingresar un tipo de planta.' }),
    superficie: z.coerce.number({ required_error: 'Debes ingresar un valor de superficie.', message: 'Debes ingresar un número.' }).min(1, { message: 'La superficie no puede ser menor a 1.' }),
    superficieEdificada: z.coerce.number({ required_error: 'Debes ingresar un valor de superficie edificada.', invalid_type_error: 'Debes ingresar un número.' }),
    circ: z.string().optional(),
    seccion: z.string().optional(),
    chacra: z.string().optional(),
    quinta: z.string().optional(),
    manzana: z.string().optional(),
    fraccion: z.string().optional(),
    parcela: z.string().optional(),
    subParcela: z.string().optional(),
})


export const CreateLotePage = () => {
    const navigate = useNavigate();
    const { startCreateLote } = useLotesStore()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: undefined,
            nombrePropietario: undefined,
            partida: undefined,
            baseImponible: undefined,
            tipoPlanta: undefined,
            superficie: undefined,
            superficieEdificada: undefined,
            circ: undefined,
            seccion: undefined,
            chacra: undefined,
            quinta: undefined,
            manzana: undefined,
            fraccion: undefined,
            parcela: undefined,
            subParcela: undefined,
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        startCreateLote(values);
        return navigate("/lotes");
    }
    return (
        <Card className='m-2 max-w-3xl mx-auto'>
            <CardHeader className='mb-2'>
                <CardTitle>
                    Crear nueva parcela/lote
                </CardTitle>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-5xl">

                        <div className='mb-2'>
                            <h2 className='text-2xl'>Información general</h2>
                            <hr className='mb-2' />

                            <div className='flex gap-2 mt-5 flex-col lg:flex-row'>
                                <FormField
                                    control={form.control}
                                    name="nombre"
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
                                    name="partida"
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


                        <div>
                            <h2 className='text-2xl'>Datos del inmueble</h2>
                            <hr className='mb-2' />

                            <div className='grid gap-2 grid-cols-1 lg:grid-cols-4'>
                                <FormField
                                    control={form.control}
                                    name="baseImponible"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Base imponible</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder='0.00' />
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
                                                <Input {...field} placeholder='0' />
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
                                                <Input {...field} placeholder='0' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className='grid lg:col-span-4 lg:grid-cols-4 gap-2'>
                                    <FormField
                                        control={form.control}
                                        name="circ"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Circ.</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder='-' />
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
                                                    <Input {...field} placeholder='-' />
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
                                                    <Input {...field} placeholder='-' />
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
                                                    <Input {...field} placeholder='-' />
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
                                                    <Input {...field} placeholder='-' />
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
                                                    <Input {...field} placeholder='-' />
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
                                                    <Input {...field} placeholder='-' />
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
                                                    <Input {...field} placeholder='-' />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                            </div>

                        </div>

                        <div className='flex gap-4 justify-between mt-4'>
                            <Button asChild variant="outline"><Link to="/lotes">Cancelar</Link></Button>
                            <Button type="submit">Continuar</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>

        </Card>
    )
}