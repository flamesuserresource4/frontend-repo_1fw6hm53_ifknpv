import React from 'react';

export default function CopyButton({ text }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Intero libro copiato negli appunti.');
    } catch (e) {
      console.error(e);
      alert('Impossibile copiare. Riprova.');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      aria-label="Copia tutto il libro"
      title="Copia tutto il libro"
    >
      Copia tutto il libro
    </button>
  );
}
