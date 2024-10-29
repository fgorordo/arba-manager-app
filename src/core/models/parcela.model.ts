export interface Parcela {
    id: number;
    nombre: string;
    nombrePropietario: string;
    partida: string;
    baseImponible: number;
    tipoPlanta: string;
    superficie: number;
    superficieEdificada: number;
    circ?: string | undefined;
    seccion?: string | undefined;
    chacra?: string | undefined;
    quinta?: string | undefined;
    manzana?: string | undefined;
    fraccion?: string | undefined;
    parcela?: string | undefined;
    subParcela?: string | undefined;
}