export interface IMezzo {
    type: string;
    id: number;
    state: string;

    assegnaUtente(utente: IUtente): void;
    assegnaMezzo(utente: IUtente): void;
    getArticolo(type: string): string;
    capitalize(word: string): string;
}

export interface IUtente {
    name: string;
    surname: string;
    email: string;
    paymentMethod: string;

    prenotaMezzo(mezzo: IMezzo): void;
}

export interface ICitta {
    cityName: string;
    freeMezzo: IMezzo[];

    aggiungiMezzo(mezzo: IMezzo): void;
    mostraMezziDisponibili(): void;
    rimuoviMezzo(mezzo: IMezzo): void;
}


