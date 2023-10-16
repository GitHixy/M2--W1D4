/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
Stringa (String): 
Una stringa è come una catena di perline. 
Ogni perla è una lettera o un numero, e insieme formano una frase o una parola. Ad esempio, "Cane" è una stringa. 

Numero (Number): 
I numeri sono proprio come i numeri che usiamo quotidianamente. 
Possiamo contarli, aggiungerli, sottrarli, moltiplicarli e dividerli.

Booleano (Boolean): 
Un booleano è come un interruttore elettrico, può essere acceso (true) o spento (false). 

Array: 
Un array è come una scatola.
Puoi mettere dentro un sacco di oggetti diversi (come numeri o stringhe) e tenerli tutti insieme.

Oggetto (Object): 
Un oggetto è come una borsa con tasche dove in ogni tasca puoi mettere informazioni.

Null: 
Null è come un contenitore vuoto. Dichiarato esplicitamente vuoto.

Non definito (Undefined): 
Quando qualcosa è non definito, significa che non c'è alcun valore assegnato a esso al momento.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*
Se hai un oggetto chiamato "Persona" con una tasca chiamata "Nome" e un'altra tasca chiamata "Età", 
puoi guardare dentro e vedere il nome di una persona e la sua età. 
Gli oggetti in JavaScript sono utili perché ci consentono di organizzare le informazioni. 
Sono come piccoli contenitori che aiutano il computer a capire e gestire dati diversi.
 */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let primoNumero = 12
let secondoNumero = 20
let somma = primoNumero + secondoNumero
console.log("La somma dei due numeri è: " + somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Michael"

/* ESERCIZIO 6
 Esegui una sottrazione tra il numero 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4
let sottrazione = y - x
console.log("Il risultato della sottrazione è " + sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"
console.log(name1 !== name2); // name1 DIVERSO name2 => TRUE
console.log(name1 === name2); // name1 UGUALE name2 => FALSE
console.log(name1 === name2.toLowerCase()); // name1 UGUALE name2 SE name2 trasformato in minuscolo => TRUE