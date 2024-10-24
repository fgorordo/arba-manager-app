import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const formSchema = z.object({
  fullName: z.string(),
  expireDate: z.string(),
  shareNumber: z.number(),
  totalAmount: z.number(),
  year: z.number(),
  allotmentId: z.string(),
  comments: z.string(),
  type: z.string(),
  certificateNumber: z.string(),
  taxBase: z.number(),
})

export const CreateArbaForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      allotmentId: "",
      certificateNumber: "",
      comments: "",
      expireDate: new Date().toISOString(),
      fullName: "",
      shareNumber: 1,
      taxBase: 0,
      totalAmount: 0,
      type: "",
      year: 2024,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo</FormLabel>
              <FormControl>
                <Input placeholder="Juan Perez" {...field} />
              </FormControl>
              <FormDescription>
                Nombre de la persona que figura en la boleta de arba
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="certificateNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>N° de partida</FormLabel>
              <FormControl>
                <Input placeholder="000-000000-0" {...field} />
              </FormControl>
              <FormDescription>
                N° de partida que figura en la boleta de ARBA.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="allotmentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parcela</FormLabel>
              <FormControl>
                <Input placeholder="1234B" {...field} />
              </FormControl>
              <FormDescription>
                Identificador de parcela que se encuentra en la boleta.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="totalAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monto a pagar</FormLabel>
              <FormControl>
                <Input placeholder="1234B" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shareNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cuota</FormLabel>
              <FormControl>
                <Input placeholder="1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Año</FormLabel>
              <FormControl>
                <Input placeholder="2024" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expireDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vencimiento</FormLabel>
              <FormControl>
                <Input placeholder="Fecha de vencimiento" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}