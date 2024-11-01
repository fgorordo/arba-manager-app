import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/common/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/common/components/ui/form';
import { Input } from '@/common/components/ui/input';
import { createParcelaFormSchema } from '../helpers';
import { Dispatch, SetStateAction } from 'react';
import { useParcelaStore } from '../hooks';


interface Props {
    handleDialogOpen: Dispatch<SetStateAction<boolean>>
}

export const CreateParcelaForm: React.FC<Props> = ({ handleDialogOpen }) => {
    const { startCreateParcela } = useParcelaStore();

    const form = useForm<z.infer<typeof createParcelaFormSchema>>({
        resolver: zodResolver(createParcelaFormSchema),
        defaultValues: {
            baseImponible: 0,
            chacra: "",
            circ: "",
            fraccion: "",
            manzana: "",
            nombre: "",
            nombrePropietario: "",
            parcela: "",
            partida: "",
            quinta: "",
            seccion: "",
            subParcela: "",
            superficie: 0,
            superficieEdificada: 0,
            tipoPlanta: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof createParcelaFormSchema>) => {
        console.log(values);
        await startCreateParcela(values);
        handleDialogOpen(false)
    }

    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-3 mt-4">
                    <div className='col-span-3'>
                        <h3 className='font-semibold'>Información general</h3>
                        <hr className='mt-2' />
                    </div>
                    <div className='col-span-3 flex gap-4 w-full flex-col md:flex-row'>
                        <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel>Nombre parcela</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Parcela - San Juan" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nombrePropietario"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel>Nombre del propietario</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Juan Pérez" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <FormField
                        control={form.control}
                        name="partida"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>N° Partida</FormLabel>
                                <FormControl>
                                    <Input placeholder="000-000000-0" {...field} />
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
                                    <Input placeholder="Urbano" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="baseImponible"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Base imponible</FormLabel>
                                <FormControl>
                                    <Input placeholder="100000" {...field} type='currency' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className='col-span-3 mt-4'>
                        <h3 className='font-semibold'>Información del inmueble</h3>
                        <hr className='mt-2' />
                    </div>

                    <div className='grid col-span-3 md:grid-cols-5 gap-4'>
                        <FormField
                            control={form.control}
                            name="superficie"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Superficie</FormLabel>
                                    <FormControl>
                                        <Input placeholder="100000" {...field} />
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
                                    <FormLabel>Sup. edificada</FormLabel>
                                    <FormControl>
                                        <Input placeholder="100000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="circ"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Circ.</FormLabel>
                                    <FormControl>
                                        <Input placeholder="-" {...field} />
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
                                        <Input placeholder="-" {...field} />
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
                                        <Input placeholder="-" {...field} />
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
                                    <FormLabel>Quinta</FormLabel>
                                    <FormControl>
                                        <Input placeholder="-" {...field} />
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
                                        <Input placeholder="-" {...field} />
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
                                        <Input placeholder="-" {...field} />
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
                                        <Input placeholder="-" {...field} />
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
                                        <Input placeholder="-" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className='col-span-3 w-full flex justify-between mt-4'>
                        <Button variant={"outline"} onClick={() => handleDialogOpen(false)} type='button'>Cancelar</Button>
                        <Button type="submit">Crear nueva parcela</Button>
                    </div>
                </form>
            </Form>
    )
}