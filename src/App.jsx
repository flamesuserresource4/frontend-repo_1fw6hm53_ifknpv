import React, { useMemo } from 'react';
import Header from './components/Header.jsx';
import Chapter from './components/Chapter.jsx';
import CopyButton from './components/CopyButton.jsx';
import Footer from './components/Footer.jsx';

const chapters = [
  {
    title: "Il volto dell'enigma",
    content: `Nel cuore di Filadelfia, in un giorno freddo del millenovecentocinquantasette, venne trovata una scatola di cartone abbandonata in un terreno incolto nel quartiere di Fox Chase. Dentro, avvolto in una coperta economica, c'era il corpo di un bambino. Non aveva un nome, non aveva documenti, non aveva nulla: solo un volto che, nel tempo, sarebbe diventato un simbolo di un mistero doloroso. Gli investigatori dell'epoca lavorarono senza sosta: registrarono meticolosamente ferite, segni, dettagli. Rilevarono che il bambino era stato curato con attenzione in passato, con un taglio di capelli recente e tracce di malnutrizione; il suo corpo raccontava insieme cura e trascuratezza, protezione e abbandono.

Le foto scattate alla vittima, in bianco e nero, cominciarono a circolare sui giornali e poi, anno dopo anno, sulle bacheche delle stazioni di polizia. L'opinione pubblica si appassionò, le ipotesi si moltiplicarono, ma l'identità restava un segreto impenetrabile. La comunità non dimenticò. Il “Ragazzo nella Scatola” diventò una presenza silenziosa, una domanda aperta, una ferita collettiva.

Questa storia segue il filo degli sforzi investigativi, delle speranze, degli errori e, soprattutto, dell’arrivo di una scienza capace di mettere nome e radici a un volto rimasto sospeso per decenni. La genealogia genetica, il confronto con alberi familiari, la ricostruzione minuziosa dei legami di sangue hanno infine portato a un nome: Joseph Augustus Zarelli. Il riconoscimento ufficiale è arrivato nel duemilaventidue, a distanza di circa sessantacinque anni dal ritrovamento. Un risultato reso possibile dal lavoro congiunto tra forze dell’ordine, scienziati forensi, genealogisti e una comunità che non ha mai smesso di chiedere verità e giustizia.`
  },
  {
    title: "Il ritrovamento a Fox Chase",
    content: `Il luogo del ritrovamento non era un angolo qualunque di città: una zona semi-rurale ai margini, frequentata da chi cercava di scaricare rifiuti lontano da occhi indiscreti. Una semplice scatola, un marchio di elettrodomestici, una coperta di flanella a quadri: dettagli che, per gli investigatori, potevano essere una pista o un inganno. La scena venne protetta come meglio si poteva secondo le pratiche dell’epoca, ma le tecniche di allora non consentivano tutto ciò che oggi darebbe certezze maggiori.

Il corpo mostrava segni di percosse e malnutrizione; tuttavia, non vi erano indizi diretti che conducessero subito a una casa o a un quartiere. La città si strinse attorno al bambino, dedicandogli articoli e veglie. Mentre i detective seguivano ogni pista — orfanotrofi, cliniche, scuole, segnalazioni — le risposte rimanevano sfuggenti.`
  },
  {
    title: "Le prime ipotesi investigative",
    content: `I primi anni furono un susseguirsi di verifiche: furono controllati parrucchieri per via del taglio recente, furono passati al setaccio i registri degli orfanotrofi, e si cercò di associare il volto a fotografie di bambini scomparsi in tutto il paese. Emersero teorie diverse, alcune plausibili, altre frutto di suggestioni. Una delle ipotesi più discusse fu la cosiddetta pista della casa di accoglienza, con collegamenti supposti tra indizi materiali e famiglie del quartiere; ma nulla portò a un’identificazione certa.

La frustrazione cresceva. Le autorità decisero allora di mantenere viva l’attenzione pubblica, rilanciando periodicamente l’appello a chiunque avesse visto, saputo o sospettato qualcosa. Eppure, il silenzio continuava a prevalere.`
  },
  {
    title: "Il peso del tempo",
    content: `Con il passare degli anni, il caso divenne un cold case emblematico. Ogni anniversario riportava in prima pagina quel volto. I detective in pensione ricordavano il fascicolo come un debito sospeso. La vittima fu sepolta con una lapide che parlava per tutti: “Il Ragazzo nella Scatola”. Non aveva ancora un nome, ma aveva una comunità che lo riconosceva come proprio.

Nel frattempo, la scienza forense evolveva. Si affinarono le analisi del DNA, si imposero metodologie nuove per conservare e trattare i reperti. Ogni salto tecnologico riaccendeva la speranza: e se oggi, finalmente, il profilo genetico potesse raccontare ciò che nessun testimone aveva saputo dire?`
  },
  {
    title: "L'arrivo della genealogia genetica (commenta!)",
    content: `A un certo punto, le indagini imboccarono la via della genealogia genetica: non più solo il confronto tra profili in banche dati criminali, ma la ricostruzione degli alberi familiari a partire da segmenti condivisi con parenti lontani. Questo approccio, reso celebre da casi risolti in più stati, aprì uno spiraglio anche qui. Si procedette con estrema cautela: ricampionamenti, verifiche di laboratorio, riduzione dei rischi di contaminazione.

Momento interattivo: che cosa ne pensate dell'uso della genealogia genetica nei cold case? È un confine etico delicato o uno strumento necessario per ridare un nome alle vittime? Scrivete il vostro commento adesso: sarà interessante confrontare opinioni diverse mentre proseguiamo nella ricostruzione.`
  },
  {
    title: "I profili genetici e gli alberi familiari",
    content: `I dati genetici estratti con tecniche moderne permisero di individuare parentele compatibili con famiglie della zona. Si trattò di un lavoro minuzioso: incrociare ramificazioni, cognomi, migrazioni interne, matrimoni e nascite. Gli investigatori collaborarono con genealogisti specializzati, che costruirono ipotesi familiari via via più ristrette. Ogni ipotesi veniva poi verificata con documenti anagrafici, certificati di nascita e morte, registri catastali, obituari e tracciati scolastici.

Passo dopo passo, emerse una linea familiare che portava a un nome possibile: Joseph Augustus Zarelli. Si riaprirono vecchi registri, si cercarono fotografie, si confrontarono caratteristiche fisiche e contesti di vita. La prudenza rimase sempre massima: un’identificazione non è mai un annuncio, ma un traguardo che richiede conferme indipendenti.`
  },
  {
    title: "L'annuncio dell'identità",
    content: `Le autorità di Filadelfia, nel mese di dicembre del duemilaventidue, annunciarono ufficialmente l’identità del “Ragazzo nella Scatola”: Joseph Augustus Zarelli. La notizia fece il giro del paese. Per alcuni, fu un sollievo; per altri, una riapertura della ferita. Dare un nome significa riconoscere una storia, una famiglia, legami complessi, circostanze difficili.

Con l’identità, però, non arrivarono tutte le risposte. Restavano aperti interrogativi sulle responsabilità, sul contesto in cui il bambino aveva vissuto, su come era stato possibile che nessuno — o quasi — avesse collegato quel volto a quel nome in tempi precedenti. L’annuncio non chiudeva il caso: lo trasformava.`
  },
  {
    title: "Le piste riaperte",
    content: `L’identificazione permise di riaprire piste investigative con un nuovo sguardo. Ora si potevano esaminare relazioni, indirizzi, vicini, registri medici, percorsi scolastici potenziali. Si tornò a parlare con persone che, all’epoca, erano bambini o adolescenti e oggi erano anziani. La memoria collettiva, sommata agli strumenti moderni, poteva ancora custodire tasselli preziosi.

Nonostante i progressi, gli investigatori ribadirono un principio di base: la prudenza. Ogni dichiarazione pubblica doveva rispettare non solo l’inchiesta, ma anche la dignità delle persone coinvolte. Il caso, già iconico, richiedeva misura.`
  },
  {
    title: "Il ruolo della comunità",
    content: `Per decenni, la comunità di Filadelfia aveva mantenuto viva la memoria del bambino senza nome. Veglie, raccolte fondi per la sepoltura, articoli, podcast, documentari: un coro di voci che chiedeva di non dimenticare. Quando arrivò il nome, quel coro cambiò tonalità. Dalla domanda “Chi era?” si passò alla domanda “Che cosa possiamo imparare?”.

Il ruolo della comunità non fu marginale: fu sostanziale. Tenere i riflettori accesi, sostenere le innovazioni investigative, fornire contesto e testimonianze: tutto contribuì a mettere insieme i pezzi. In casi così complessi, la verità è quasi sempre un mosaico a cui lavorano in molti.`
  },
  {
    title: "Etica, privacy e giustizia",
    content: `La genealogia genetica applicata ai cold case apre questioni profonde. Da un lato, la possibilità di restituire un nome alle vittime e identificare sospettati; dall’altro, interrogativi su privacy, consenso, uso responsabile dei dati. Negli Stati Uniti, linee guida e protocolli sono stati aggiornati proprio alla luce dei casi risolti. La fiducia pubblica si conquista con trasparenza, limiti chiari e controllo indipendente.

Nel caso di Joseph Augustus Zarelli, il bilanciamento tra interesse pubblico e tutela dei diritti è stato oggetto di confronto. Eppure, per la maggioranza, l’esito ha rappresentato un passo avanti storico nella giustizia per le vittime senza voce.`
  },
  {
    title: "Cronologia essenziale",
    content: `Ricapitoliamo i passaggi chiave con le parole, evitando cifre: ritrovamento alla fine degli anni cinquanta del secolo scorso a Filadelfia; decenni di indagini e piste interrotte; progressive innovazioni della scienza forense; avvio della genealogia genetica con ricostruzione degli alberi familiari; identificazione ufficiale nel mese di dicembre dell’anno duemilaventidue.

Ogni fase ha richiesto perseveranza, metodo e collaborazione. Senza uno solo di questi elementi, il risultato finale non sarebbe stato possibile.`
  },
  {
    title: "Voci dal passato (commenta ancora!)",
    content: `In questa parte, fermiamoci un attimo: quale tra le piste storiche vi ha colpito di più e perché? Ritenete che una testimonianza, se ascoltata in modo diverso all’epoca, avrebbe potuto anticipare l’esito? Scrivete ora il vostro punto di vista nei commenti: confrontarci su questi dettagli aiuta a comprendere come migliorare le indagini future.

Molte voci dal passato, rilette oggi, lasciano intravedere connessioni sfuggite allora. È facile giudicare col senno di poi; è più difficile interrogarsi su come istituzioni e comunità possano lavorare meglio insieme, fin da subito.`
  },
  {
    title: "Impatto culturale del caso",
    content: `Il “Ragazzo nella Scatola” è rimasto nell’immaginario collettivo statunitense per oltre mezzo secolo. Libri, articoli, ricostruzioni televisive ne hanno consolidato la fama come uno dei misteri più inquietanti. L’identificazione ha trasformato l’icona in persona: Joseph Augustus Zarelli. Questa transizione culturale è significativa, perché ricorda che al centro non c’è un enigma astratto, ma una vita reale, recisa troppo presto.

L’impatto culturale non si misura solo in visualizzazioni o ascolti, ma nella capacità di promuovere consapevolezza: sull’infanzia vulnerabile, sui doveri della comunità, sulla potenza e sui limiti della scienza.`
  },
  {
    title: "Confronto con altri cold case",
    content: `Negli ultimi anni, diversi casi negli Stati Uniti e in altri paesi hanno trovato nuova luce grazie alla genealogia del DNA. Le metodologie non sono identiche ovunque, ma il principio comune è l’incrocio tra profili genetici e alberi familiari pubblicamente tracciabili. In Australia, come in più stati americani, casi definiti “impossibili” hanno avuto svolte inattese. Questo non significa che ogni enigma sia risolvibile, ma dimostra che la pazienza investigativa, unita a nuove tecnologie, può superare ostacoli un tempo invalicabili.`
  },
  {
    title: "Limiti e responsabilità",
    content: `Ogni progresso porta con sé limiti e responsabilità. La qualità del campione, la conservazione dei reperti, gli errori umani, le interpretazioni affrettate: tutto può compromettere l’esito. Per questo, i team che hanno lavorato all’identificazione di Joseph hanno mantenuto una postura rigorosa, sottoponendo ogni passaggio a verifiche incrociate. È un insegnamento: la verità giudiziaria e storica richiede metodo e umiltà.

Non tutti i tasselli, ancora oggi, sono al loro posto. Ma rispetto a ieri, disponiamo di una mappa più chiara.`
  },
  {
    title: "Un nome sulla pietra",
    content: `Quando è stato pronunciato pubblicamente il nome Joseph Augustus Zarelli, una lapide e un archivio hanno smesso di parlare in termini impersonali. Un nome è riconoscimento, memoria, continuità. La comunità che per lunghissimo tempo ha vegliato un bambino senza identità ha potuto dirgli, finalmente, “ti vediamo”.

Questo capitolo della storia non è finito. Ma ha cambiato il modo in cui guardiamo a quel volto e a tutti i volti senza nome. Restituire identità è un atto di giustizia.`
  },
  {
    title: "Conclusione e invito finale",
    content: `Siamo arrivati alla fine di questo percorso. Abbiamo seguito il ritrovamento, le piste, le domande, la svolta della genealogia genetica e l’annuncio dell’identità di Joseph Augustus Zarelli. Se questa ricostruzione vi ha parlato, lasciate un ultimo commento: quale lezione pensate sia la più importante per la società? Iscrivetevi a TrueCrime Italia per non perdere le prossime storie, dove continueremo a dare voce a chi per troppo tempo non l’ha avuta.`
  }
];

function App() {
  const fullText = useMemo(() => {
    const headerIntro = `Benvenuti su TrueCrime Italia. Prima di iniziare, iscrivetevi e lasciate un commento con il vostro primo pensiero sul caso.\n\n`;
    return headerIntro + chapters
      .map((ch, idx) => `Capitolo ${idx + 1}: ${ch.title}\n\n${ch.content}`)
      .join('\n\n');
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <div className="max-w-4xl mx-auto px-4">
        <CopyButton text={fullText} />
      </div>

      <main id="inizio" className="divide-y divide-gray-100">
        {chapters.map((ch, i) => (
          <Chapter key={i} number={i + 1} title={ch.title} content={ch.content} />
        ))}
      </main>

      <div className="max-w-4xl mx-auto px-4 pb-6">
        <CopyButton text={fullText} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
