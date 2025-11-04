import React from 'react';

export default function Header() {
  return (
    <header className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">TrueCrime Italia – Benvenuti</h1>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Prima di iniziare: questa è una ricostruzione accurata e documentata. Se amate le storie di cold case risolti grazie alla
        genealogia genetica, restate con noi. Iscrivetevi subito al canale TrueCrime Italia e lasciate un commento con il vostro
        primo pensiero su questo caso: secondo voi, quale pista decisiva era stata ignorata per così tanto tempo? La vostra opinione
        ci aiuta a far crescere la community e a dare voce alle vittime dimenticate.
      </p>
      <p className="mt-3 text-gray-700">
        Hook: Un bambino senza nome, trovato in una scatola di cartone a Filadelfia nel millenovecentocinquantasette. Per più di
        sei decenni, un volto senza identità. Poi, la scienza ha parlato. Oggi ripercorriamo la storia che ha svelato il nome del
        cosiddetto “Ragazzo nella Scatola” e ha aperto un nuovo, doloroso capitolo alla ricerca della verità.
      </p>
      <div className="mt-4 inline-flex gap-3">
        <a href="#commenti" className="text-indigo-700 hover:text-indigo-900 underline">Iscriviti e commenta ora</a>
        <span className="text-gray-400" aria-hidden>•</span>
        <a href="#inizio" className="text-indigo-700 hover:text-indigo-900 underline">Vai all’inizio del racconto</a>
      </div>
    </header>
  );
}
