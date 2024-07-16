import { Città, Mezzo, Utente } from "./classes.js";

// Nuovi mezzi in Città
let Bici = new Mezzo('bici', 1, 'disponibile');
let Scooter = new Mezzo('scooter', 2, 'in uso');
let Monopattino = new Mezzo('monopattino', 3, 'in manutenzione');

// Nuovi Utenti
let Utente1 = new Utente('Mario', 'Rossi', 'mario.rossi@example.com', 'Carta di credito');
let Utente2 = new Utente('Anna', 'Verdi', 'anna.verdi@example.com', 'PayPal');
let Utente3 = new Utente('Alessandra', 'Galotta', 'alessandra.galotta@example.com', 'Satispay');

// Creazione dei mezzi disponibili nelle città
let mezziRoma = [
    new Mezzo('bici', 1, 'disponibile'),
    new Mezzo('bici', 2, 'disponibile'),
    new Mezzo('bici', 3, 'disponibile'),
    new Mezzo('monopattino', 4, 'disponibile'),
    new Mezzo('monopattino', 5, 'disponibile'),
    new Mezzo('monopattino', 6, 'disponibile'),
    new Mezzo('scooter', 7, 'disponibile'),
    new Mezzo('scooter', 8, 'in uso'),
    new Mezzo('scooter', 9, 'disponibile')
];

let mezziMilano = [
    new Mezzo('bici', 10, 'disponibile'),
    new Mezzo('bici', 11, 'disponibile'),
    new Mezzo('bici', 12, 'disponibile'),
    new Mezzo('monopattino', 13, 'disponibile'),
    new Mezzo('monopattino', 14, 'in manutenzione'),
    new Mezzo('monopattino', 15, 'disponibile'),
    new Mezzo('scooter', 16, 'disponibile'),
    new Mezzo('scooter', 17, 'in uso'),
    new Mezzo('scooter', 18, 'disponibile')
];

// Creazione delle città
let Roma = new Città('Roma', mezziRoma);
let Milano = new Città('Milano', mezziMilano);

// Mostra mezzi disponibili nelle città
Roma.mostraMezziDisponibili();
Milano.mostraMezziDisponibili();

// Prenotazioni utenti
Utente1.prenotaMezzo(mezziRoma[7]); // Scooter già in uso
Utente2.prenotaMezzo(mezziRoma[4]); // Monopattino disponibile
Utente3.prenotaMezzo(mezziMilano[0]); // Bici disponibile

// Mostra mezzi disponibili dopo prenotazioni
Roma.mostraMezziDisponibili();
Milano.mostraMezziDisponibili();

