import { Button } from '@/common/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/common/components/ui/dialog';
import { CirclePlusIcon } from 'lucide-react';
import { CreateParcelaForm } from './create-parcela-form';
import { useState } from 'react';

export const ParcelasFormDialog = () => {

    const [open, setOpen] = useState<boolean>(false)

    return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button><CirclePlusIcon />Añadir parcela</Button>
                </DialogTrigger>
                <DialogContent className='max-w-screen-md overflow-auto'>
                    <DialogHeader>
                        <DialogTitle>Añadir nueva parcela</DialogTitle>
                        <DialogDescription>
                            Completa el formulario para añadir una nueva parcela o lote a la lista, luego podras realizar varias operaciones asociadas a él.
                        </DialogDescription>
                    </DialogHeader>
                    <CreateParcelaForm handleDialogOpen={setOpen} />
                </DialogContent>
            </Dialog>
    )
}