Progetto Moove - Sistema di Micromobilità Condivisa
Questo progetto implementa un sistema in TypeScript che modella la struttura organizzativa di Moove, un servizio di micromobilità condivisa. Il sistema si concentra sulle interazioni tra utenti, mezzi di trasporto e le città servite da Moove.

Installazione
Clone del repository

git clone https://github.com/ale93ag/moove-micromobilita.git

Installazione delle dipendenze
Assicurati di avere Node.js e npm installati. Nella directory del progetto, esegui:
npm install

Configurazione
Non sono necessarie configurazioni aggiuntive per l'esecuzione del progetto.

Utilizzo
Il progetto è diviso in tre principali componenti: Mezzo, Utente e Città.

Mezzo
La classe Mezzo rappresenta i vari mezzi di trasporto (bici, scooter, monopattino) disponibili.
Esempio di utilizzo:
let bici = new Mezzo('bici', 1, 'disponibile');
bici.assegnaUtente(utente);

Utente
La classe Utente rappresenta gli utenti del servizio Moove.
Esempio di utilizzo:
let utente = new Utente('Mario', 'Rossi', 'mario.rossi@example.com', 'Carta di credito');
utente.prenotaMezzo(mezzo);

Città
La classe Città rappresenta le città in cui Moove opera e gestisce i mezzi disponibili.
Esempio di utilizzo:
let roma = new Città('Roma', [bici, scooter, monopattino]);
roma.mostraMezziDisponibili();

Istanziare e Testare
Per testare il sistema, sono già stati istanziati dei mezzi e degli utenti di esempio nel file app.ts. Esegui il seguente comando per vedere il sistema in azione:
npm start
Questo comando eseguirà il file app .ts e mostrerà i mezzi disponibili nelle città di Roma e Milano, nonché le prenotazioni degli utenti e la loro interazione con i mezzi.
