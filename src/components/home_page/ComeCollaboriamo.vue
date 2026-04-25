<script setup>
import { reactive, ref, watch } from "vue";

const cards = reactive([
  {
    title: "FLIGHT DYNAMICS",
    descrizione: "È il cervello matematico dietro ogni lancio. Questo reparto trasforma le leggi della fisica in traiettorie reali, ottimizzando la stabilità e le performance aerodinamiche del vettore. Attraverso simulazioni avanzate e analisi del bilanciamento dei carichi, il team di Flight Dynamics definisce l’architettura interna del razzo e prevede ogni sua mossa, dal distacco dalla rampa fino all’apertura dei paracadute.",
    image_src: new URL("/home_page/flight-dynamics-icon.png", import.meta.url).href,
  },
  {
    title: "AVIONICS",
    descrizione: `Il Dipartimento di Avionica di StarPi rappresenta il cuore tecnologico del progetto: è il sistema che consente al razzo di “sentire”, interpretare ciò che accade durante il volo e prendere decisioni in totale autonomia. Il team è responsabile della progettazione e dello sviluppo del computer di bordo, della sensoristica e dei sistemi di comunicazione. Integra accelerometri, giroscopi, altimetri barometrici, GPS e sensori di temperatura in un’architettura modulare e ridondante. L’avionica gestisce inoltre il power management e sviluppa il firmware che elabora i dati in tempo reale, determina lo stato del volo e comanda gli attuatori.`,
    image_src: new URL("/home_page/avionics-icon.png", import.meta.url).href,
  },
  {
    title: "PAYLOAD",
    descrizione: `Il Dipartimento Payload si occupa della progettazione e della realizzazione del carico utile. Per la competizione EUROC 2026, abbiamo sviluppato un'architettura modulare basata sullo standard 3U CubeSat. Utilizziamo un design a piattaforma multistrato efficiente: alimentazione, gestione elettronica e dati, e un'unità per future implementazioni. Il payload opera in totale autonomia rispetto ai sistemi di volo, con sensori GPS, monitoraggio energetico e suite inerziale.`,
    image_src: new URL("/home_page/payload-icon.png", import.meta.url).href,
  },
  {
    title: "RECOVERY SYSTEM",
    descrizione: "Ci occupiamo della progettazione e dell’integrazione dei sistemi di espulsione e dei paracadute, gestendo la fase più critica del post-apogeo. Dallo studio dei tempi di deploy alla resistenza strutturale dei vincoli, lavoriamo perché ogni discesa sia controllata, sicura e perfettamente calcolata.",
    image_src: new URL("/home_page/recovery-system-icon.png", import.meta.url).href,
  },
  {
    title: "PROPULSION",
    descrizione: `Il dipartimento PSM è responsabile dei principali componenti strutturali del razzo. Il team Propulsione cura l’integrazione del motore e il sistema di trasmissione della spinta. Il team Fins sviluppa le alette stabilizzatrici, mentre il team Airbrake progetta l’aerofreno per il controllo attivo della traiettoria. Il team Fuselage progetta il cono e il cilindro centrale in materiali compositi, integrando tutti i sistemi interni.`,
    image_src: new URL("/home_page/propulsion-icon.png", import.meta.url).href,
  },
  {
    title: "LOGISTICS & MARKETING",
    descrizione: `Il reparto Media e Logistica sostiene ogni iniziativa del team. Ci occupiamo di curare l’immagine coordinata sui canali social e il sito ufficiale, oltre a gestire le relazioni con partner e sponsor. La componente Logistica gestisce la burocrazia, i permessi per i lanci e l'organizzazione dell'inventario per ottimizzare le risorse interne.`,
    image_src: new URL("/home_page/logistics-icon.png", import.meta.url).href,
  },
]);

const current_index = ref(0);
const textElement = ref(null);
const isAtBottom = ref(false);

const next_card = () => { if (current_index.value < cards.length - 1) current_index.value++; };
const prev_card = () => { if (current_index.value > 0) current_index.value--; };

const handleScroll = (e) => {
  const { scrollTop, offsetHeight, scrollHeight } = e.target;
  isAtBottom.value = scrollTop + offsetHeight >= scrollHeight - 5;
};

watch(current_index, () => {
  isAtBottom.value = false;
  if (textElement.value) textElement.value.scrollTop = 0;
});
</script>

<template>
  <div class="coll-wrapper">
    <h1 class="coll-main-title">COME COLLABORIAMO</h1>

    <div class="coll-card">
      <img :src="cards[current_index].image_src" alt="icona" class="coll-card-img">

      <div class="coll-text-box" :class="{ 'coll-no-shadow': isAtBottom }">
        <h2 class="coll-card-title"><b>{{ cards[current_index].title }}</b></h2>
        <p ref="textElement" @scroll="handleScroll" class="coll-scroll-text">
          {{ cards[current_index].descrizione }}
        </p>
      </div>
    </div>

    <div class="coll-nav">
      <button class="coll-btn" @click="prev_card" :class="{'coll-btn-off': current_index === 0}">
        <span>&#10094;</span>
      </button>

      <div class="coll-counter">
        <span class="coll-count-num">{{ current_index + 1 }}</span>
        <span class="coll-sep">/</span>
        <span class="coll-count-num">{{ cards.length }}</span>
      </div>

      <button class="coll-btn" @click="next_card" :class="{'coll-btn-off': current_index === cards.length - 1}">
        <span>&#10095;</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.coll-wrapper { color: white; width: 100%; display: flex; flex-direction: column; align-items: center; padding: 40px 0; }
.coll-main-title { text-align: center; margin-bottom: 3rem; font-size: 3.5rem; font-weight: bold; }
.coll-card { width: 85vw; max-width: 1100px; height: 500px; display: flex; align-items: center; gap: 4rem; background-color: #29446E; border-radius: 24px; padding: 3rem 3rem 4rem 3rem; position: relative; }
.coll-card-img { width: 280px; height: auto; max-height: 80%; object-fit: contain; flex-shrink: 0; }
.coll-text-box { flex: 1; height: 100%; display: flex; flex-direction: column; overflow: hidden; position: relative; -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%); mask-image: linear-gradient(to bottom, black 80%, transparent 100%); transition: all 0.3s ease; }
.coll-no-shadow { -webkit-mask-image: none !important; mask-image: none !important; }
.coll-card-title { font-size: 2.5rem; margin-bottom: 1.5rem; margin-top: 0; }
.coll-scroll-text { flex: 1; overflow-y: auto; font-size: 1.1rem; line-height: 1.6; padding-right: 15px; white-space: pre-line; margin: 0; }
.coll-scroll-text::-webkit-scrollbar { width: 6px; }
.coll-scroll-text::-webkit-scrollbar-thumb { background: rgba(255, 98, 0, 0.3); border-radius: 10px; }
.coll-nav { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: -35px; z-index: 10; }
.coll-btn { width: 50px; height: 50px; background: #0F1B31; border: 2px solid #E04814; border-radius: 50%; color: #E04814; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
.coll-btn:hover:not(.coll-btn-off) { background: #E04814; color: white; transform: scale(1.1); }
.coll-btn-off { opacity: 0.3; cursor: not-allowed; border-color: #555; color: #555; }
.coll-counter { background: #0F1B31; padding: 10px 35px; border-radius: 50px; border: 1px solid rgba(255, 255, 255, 0.2); display: flex; align-items: center; gap: 15px; }
.coll-count-num { color: #E04814; font-size: 1.8rem; font-weight: bold; }
.coll-sep { color: white; opacity: 0.3; font-size: 1.5rem; }

@media (max-width: 1024px) {
  .coll-main-title { font-size: 2.2rem; padding: 0 20px; }
  .coll-card { flex-direction: column; height: auto; min-height: 600px; width: 92vw; padding: 2rem 1.2rem 5rem 1.2rem; gap: 2rem; }
  .coll-card-img { width: 140px; }
  .coll-card-title { font-size: 1.8rem; text-align: center; }
  .coll-scroll-text { text-align: left; font-size: 1rem; padding-right: 5px; }
}
</style>