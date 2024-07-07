// Definizione della classe Mezzo
export class Mezzo {
    constructor(type, id, state) {
        this.type = type;
        this.id = id;
        this.state = state;
    }
    assegnaUtente(utente) {
        const articolo = this.getArticolo(this.type);
        console.log(`${this.capitalize(articolo)} ${this.type} con id ${this.id} è attualmente ${this.state}`);
    }
    assegnaMezzo(utente) {
        if (this.state === 'disponibile') {
            this.state = 'in uso';
            const articolo = this.getArticolo(this.type);
            console.log(`${this.capitalize(articolo)} ${this.type} con id ${this.id} è stato assegnato a ${utente.name} ${utente.surname}`);
        }
        else {
            const articolo = this.getArticolo(this.type);
            console.log(`${this.capitalize(articolo)} ${this.type} con id ${this.id} non è disponibile per l'assegnazione. Scegli un altro mezzo.`);
        }
    }
    getArticolo(type) {
        const articoli = {
            'bici': 'la',
            'monopattino': 'il',
            'scooter': 'lo'
        };
        return articoli[type.toLowerCase()] || 'il';
    }
    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}
// Definizione della classe Utente
export class Utente {
    constructor(name, surname, email, paymentMethod) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.paymentMethod = paymentMethod;
    }
    prenotaMezzo(mezzo) {
        const articolo = mezzo.getArticolo(mezzo.type);
        console.log(`L'utente ${this.name} ${this.surname} ha prenotato ${mezzo.capitalize(articolo)} ${mezzo.type} con id ${mezzo.id} pagando con ${this.paymentMethod}`);
        mezzo.assegnaMezzo(this);
    }
}
// Definizione della classe Città
export class Città {
    constructor(cityName, freeMezzo) {
        this.cityName = cityName;
        this.freeMezzo = freeMezzo;
    }
    aggiungiMezzo(mezzo) {
        this.freeMezzo.push(mezzo);
    }
    mostraMezziDisponibili() {
        console.log(`Mezzi disponibili a ${this.cityName}:`);
        this.freeMezzo.forEach((mezzo) => {
            if (mezzo.state === 'disponibile') {
                const articolo = mezzo.getArticolo(mezzo.type);
                console.log(`${this.capitalize(articolo)} ${mezzo.type} con id ${mezzo.id}`);
            }
        });
    }
    rimuoviMezzo(mezzo) {
        this.freeMezzo = this.freeMezzo.filter((m) => m.id !== mezzo.id);
    }
    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}
