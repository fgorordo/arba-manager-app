import { Copy, PlusCircleIcon } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { DialogClose } from '@radix-ui/react-dialog';



export const CreateLoteDialog = () => {

    

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button><PlusCircleIcon /> Añadir lote</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Crear nuevo lote/parcela</DialogTitle>
                    <DialogDescription>
                        Completa el formulario para añadir un nuevo lote/parcela a la lista.
                    </DialogDescription>
                </DialogHeader>


                


                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancelar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}