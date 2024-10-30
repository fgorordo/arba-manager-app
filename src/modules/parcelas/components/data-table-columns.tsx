import { Parcela } from "@/core/models"
import { ColumnDef } from "@tanstack/react-table"

export const parcelasColumns: ColumnDef<Parcela>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        cell: ({row}) => {
            return <div className='text-ellipsis w-10 overflow-hidden'>{row.getValue('id')}</div>
        }
    },
    {
        accessorKey: "nombre",
        header: "Nombre",
    },
    {
        accessorKey: "partida",
        header: "Partida",
    },
    {
        accessorKey: "circ",
        header: "Circ.",
        cell: ({row}) => {
            let value = row.getValue("circ");
            return <>{value ? value : '-'}</>
        }
    },
    {
        accessorKey: "parcela",
        header: "Parcela",
    },
    {
        accessorKey: "baseImponible",
        header: () => <div className="text-right">Base Imponible</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("baseImponible"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "superficie",
        header: () => <div className="text-right">Superficie</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("superficie"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: 'unit',
                unit: 'meter',
            }).format(amount)

            return <div className="text-right font-medium">{formatted}²</div>
        },
    },
    {
        accessorKey: "superficieEdificada",
        header: () => <div className="text-right">Sup. Edificada</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("superficieEdificada"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: 'unit',
                unit: 'meter',
            }).format(amount)

            return <div className="text-right font-medium">{formatted}²</div>
        },
    },
]