<script setup>
import { reactive, ref, watch } from "vue";

const cards = reactive([
    {
        title: "FLIGHT DYNAMICS",
        descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image_src: new URL("/home_page/flight-dynamics-icon.png", import.meta.url).href,
    },
    {
        title: "AVIONICS",
        descrizione: `Il Dipartimento di Avionica di StarPi rappresenta il cuore tecnologico del progetto: è il sistema che consente al razzo di “sentire”, interpretare ciò che accade durante il volo e prendere decisioni in totale autonomia. Senza l’avionica, il razzo sarebbe solo una struttura meccanica spinta da un motore; con essa diventa un veicolo intelligente, capace di monitorare il proprio stato e reagire in tempo reale alle diverse fasi della missione. Il team è responsabile della progettazione e dello sviluppo del computer di bordo, della sensoristica e dei sistemi di comunicazione. Integra accelerometri, giroscopi, altimetri barometrici, GPS e sensori di temperatura in un’architettura modulare e ridondante, pensata per garantire precisione e affidabilità anche in condizioni estreme di vibrazione e shock. L’avionica gestisce inoltre il power management, assicurando che ogni modulo sia alimentato in modo stabile e sicuro per tutta la durata della missione. Oltre all’hardware, il dipartimento sviluppa il firmware che elabora i dati in tempo reale, determina lo stato del volo (ascesa, coast, apogeo, discesa) e comanda gli attuatori, come il sistema di recupero e gli eventuali airbrake. Grande attenzione è dedicata ai test e alla validazione: prove a banco, simulazioni e verifiche funzionali permettono di migliorare continuamente la robustezza degli algoritmi e la qualità della fusione sensoriale. L’Avionica è quindi il “cervello” di StarPi: un sottosistema strategico che unisce elettronica, programmazione e integrazione meccanica per garantire sicurezza, precisione e competitività in vista del primo volo di validazione.`,
        image_src: new URL("/home_page/avionics-icon.png", import.meta.url).href,
    },
    {
        title: "PAYLOAD",
        descrizione: `Il Dipartimento Payload rappresenta il "cuore scientifico" del nostro razzo, occupandosi della progettazione e della realizzazione del carico utile. Il nostro obiettivo non è solo garantire il corretto funzionamento dei sistemi, ma spingere le prestazioni e l'affidabilità oltre i limiti attuali attraverso un lavoro costante di ottimizzazione.
		Per la competizione EUROC 2026, abbiamo sviluppato un'architettura modulare basata sullo standard 3U CubeSat (300x100x100 mm). 
		Questa scelta ci permette di utilizzare un design a piattaforma multistrato estremamente efficiente: un'unità (1U) è dedicata interamente all'alimentazione, una alla gestione dell'elettronica e dei dati, mentre la terza rimane libera per future implementazioni, garantendo scalabilità al progetto. L'intero sistema è custodito in un sabot cilindrico stampato in 3D, che funge da interfaccia con la fusoliera e permette un'estrazione rapida per le operazioni di pesatura previste dal regolamento.
		Dal punto di vista tecnologico, il nostro payload è una sfida di indipendenza: pur utilizzando componenti COTS, i nostri sensori operano in totale autonomia rispetto ai sistemi di volo del Dipartimento di Avionica. La nostra suite comprende:
		•   GPS M10Q-5883 per la localizzazione;
		•	INA219 per il monitoraggio energetico in tempo reale;
		•	MPU6050 come unità inerziale a 6 assi;
		•	BME680 per la rilevazione di parametri ambientali quali pressione, umidità e temperatura.
		A completare il setup, gestiamo due telecamere esterne alla struttura del payload, posizionate strategicamente per monitorare le criticità del volo e raccogliere materiale multimediale.
		Tuttavia, il Dipartimento Payload non guarda solo al presente. Siamo divisi in due anime: mentre il team Payload 2026 rifinisce la sensoristica per la gara attuale, il team Payload 2027 sta già sviluppando un sistema d'avanguardia per il rilevamento delle microplastiche in atmosfera. La nostra visione per il futuro è chiara: trasformare il razzo in un vettore di ricerca scientifica per studiare fenomeni ambientali sempre più preoccupanti.`,
        image_src: new URL("/home_page/payload-icon.png", import.meta.url).href,
    },
    {
        title: "RECOVERY SYSTEM",
        descrizione: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        image_src: new URL("/home_page/recovery-system-icon.png", import.meta.url).href,
    },
    {
        title: "PROPULSION",
        descrizione: `Il dipartimento PSM – Propulsion, Structures and Manufacturing è responsabile della progettazione e della realizzazione dei principali componenti strutturali del razzo sperimentale StarPi, operando secondo un approccio integrato che unisce analisi meccanica, simulazioni numeriche e pianificazione dei processi produttivi. L’organizzazione interna è articolata in team dedicati a specifici sottosistemi, con il compito non solo di sviluppare soluzioni progettuali, ma anche di recepire e armonizzare i vincoli provenienti dagli altri reparti quali Avionics, Flight Dynamics, Payload e Recovery , in termini di ingombri, carichi e requisiti funzionali. 
        Il team Propulsione cura l’integrazione del motore commerciale e, in particolare, il sistema di trasmissione della spinta, elemento critico verificato tramite analisi FEM in ANSYS e progettato affinché la fusoliera stessa svolga funzione portante. 
        Il team Fins sviluppa le alette stabilizzatrici, adottando un fissaggio incollato per ridurre le interferenze aerodinamiche e conducendo studi dedicati al fenomeno del flutter mediante codici MATLAB, simulazioni FEM e CFD in collaborazione con Flight Dynamics. 
        Il team Airbrake progetta l’aerofreno a petali radiali destinato al controllo attivo della traiettoria e al raggiungimento dell’apogeo di 3000 m richiesto da EuRoC, con particolare attenzione al supporto dei carichi aerodinamici e alla riduzione degli attriti. 
        Il team Ground Systems realizza la rampa di lancio per le campagne di test, completa di sistemi di stabilizzazione e guide di scorrimento necessarie a garantire la corretta velocità di uscita del veicolo. 
        Il team Fuselage progetta cono e cilindro centrale, scegliendo materiali compositi compatibili con le esigenze di comunicazione e svolgendo un ruolo chiave di integrazione tra avionica, payload, airbrake e recovery, inclusi supporti interni e passaggi cablaggi. 
        Parallelamente il dipartimento coordina le attività di manufacturing, tra cui prove di stampa 3D, lavorazioni meccaniche e prime analisi strutturali, mentre la fase di produzione è in avvio e le attività di test sono previste a partire dalla tarda primavera.`,
        image_src: new URL("/home_page/propulsion-icon.png", import.meta.url).href,
    },
    {
        title: "LOGISTICS & MARKETING",
        descrizione: `Il reparto Media, Business Relation & Logistica rappresenta il cuore pulsante delle attività di supporto di StarPi agendo come una struttura strategica fondamentale per sostenere e potenziare ogni iniziativa del team. La missione è duplice: da un lato, dare voce all'eccellenza tecnica dei nostri ingegneri e, dall'altro, costruire l'impalcatura organizzativa necessaria affinché ogni progetto possa trasformarsi in realtà.
		L’anima comunicativa del dipartimento è affidata al settore Media e Business Relation, che funge da vero e proprio ponte tra il team e il mondo esterno. Ci occupiamo di curare l’immagine coordinata di StarPi gestendo con attenzione la comunicazione sui canali social e il sito ufficiale, trasformando la complessità tecnologica in un racconto avvincente e accessibile. Oltre alla presenza digitale, il nostro impegno si focalizza sulla costruzione e il mantenimento di relazioni solide con le aziende partner e gli sponsor, il cui supporto è vitale per la crescita e l’innovazione tecnologica del nostro gruppo.
		La componente Logistica opera dietro le quinte per garantire che la complessa macchina operativa di StarPi non si fermi mai. Questo settore si fa carico della gestione burocratica e del delicato iter dei permessi necessari per le nostre attività di test e lancio, assicurando che tutto avvenga nel pieno rispetto delle normative. La precisione della Logistica si riflette anche nella gestione meticolosa dell’inventario e nell'ottimizzazione delle risorse interne, orchestrando il coordinamento tra i vari reparti per far sì che ogni evento e ogni traguardo organizzativo siano raggiunti con la massima efficienza.
		Insieme, Media, Business Relation e Logistica lavorano in totale sinergia per permettere a StarPi di guardare sempre più in alto, trasformando l'ambizione accademica in un progetto strutturato, visibile e di successo.`,
        image_src: new URL("/home_page/logistics-icon.png", import.meta.url).href,
    },
]);

const current_index = ref(0);
const textElement = ref(null);
const isAtBottom = ref(false);

const next_card = () => {
    if (current_index.value < cards.length - 1) current_index.value++;
};
const prev_card = () => {
    if (current_index.value > 0) current_index.value--;
};

const handleScroll = (e) => {
    const { scrollTop, offsetHeight, scrollHeight } = e.target;
    // Se siamo vicini al fondo (tolleranza 5px), togliamo l'ombra
    isAtBottom.value = scrollTop + offsetHeight >= scrollHeight - 5;
};

watch(current_index, () => {
    isAtBottom.value = false;
    if (textElement.value) textElement.value.scrollTop = 0;
});
</script>

<template>
    <div class="container">
        <h1 class="primo_titolo">COME COLLABORIAMO</h1>

        <div class="card_container">
            <img :src="cards[current_index].image_src" alt="icona" class="card_image">

            <div class="text_container" :class="{ 'hide-shadow': isAtBottom }">
                <h1 class="titolone"><b>{{ cards[current_index].title }}</b></h1>
                <p ref="textElement" @scroll="handleScroll" class="scrollable_text">
                    {{ cards[current_index].descrizione }}
                </p>
            </div>
        </div>

        <div class="nav-container">
            <button
                class="nav-button"
                @click="prev_card"
                :class="{'nav-button-disabled': current_index === 0}"
            >
                <span>&#10094;</span>
            </button>

            <div class="counter-display">
                <span class="counter-number">{{ current_index + 1 }}</span>
                <span class="counter-separator">/</span>
                <span class="counter-number">{{ cards.length }}</span>
            </div>

            <button
                class="nav-button"
                @click="next_card"
                :class="{'nav-button-disabled': current_index === cards.length - 1}"
            >
                <span>&#10095;</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.container {
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
}

.primo_titolo {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3.5rem;
    font-weight: bold;
}

/* --- CARD --- */
.card_container {
    width: 85vw;
    max-width: 1100px;
    height: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    background-color: #29446E;
    border-radius: 24px;
    padding: 3rem;
    padding-bottom: 4rem; /* Spazio per i tasti */
    position: relative;
}

.card_image {
    width: 280px;
    height: auto;
    max-height: 80%;
    object-fit: contain;
    flex-shrink: 0;
}

/* --- TESTO E OMBRA --- */
.text_container {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    /* Ombra dinamica */
    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    transition: mask-image 0.3s ease, -webkit-mask-image 0.3s ease;
}

.hide-shadow {
    -webkit-mask-image: none !important;
    mask-image: none !important;
}

.titolone {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    flex-shrink: 0;
}

.scrollable_text {
    flex: 1;
    overflow-y: auto;
    font-size: 1.1rem;
    line-height: 1.6;
    padding-right: 15px;
    white-space: pre-line;
}

/* Custom Scrollbar */
.scrollable_text::-webkit-scrollbar { width: 6px; }
.scrollable_text::-webkit-scrollbar-thumb {
    background: rgba(255, 98, 0, 0.3);
    border-radius: 10px;
}

/* --- NAVIGAZIONE --- */
.nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: -35px;
    z-index: 10;
}

.nav-button {
    width: 50px;
    height: 50px;
    background: #0F1B31;
    border: 2px solid #FF6200;
    border-radius: 50%;
    color: #FF6200;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-button:hover:not(.nav-button-disabled) {
    background: #FF6200;
    color: white;
    transform: scale(1.1);
}

.nav-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
    border-color: #555;
    color: #555;
}

.counter-display {
    background: #0F1B31;
    padding: 10px 35px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    gap: 15px;
}

.counter-number {
    color: #FF6200;
    font-size: 1.8rem;
    font-weight: bold;
}

.counter-separator {
    color: white;
    opacity: 0.3;
    font-size: 1.5rem;
}

/* Responsive */
@media (max-width: 1024px) {
    .card_container {
        flex-direction: column;
        height: auto;
        min-height: 600px;
        text-align: center;
    }
    .card_image { width: 150px; }
    .scrollable_text { text-align: left; }
}
</style>