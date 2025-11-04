import React from 'react';

export default function Chapter({ number, title, content }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8" id={`chapter-${number}`}>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Capitolo {number}: {title}</h2>
      <article className="mt-4 space-y-4 text-gray-800 leading-relaxed whitespace-pre-wrap">
        {content}
      </article>
    </section>
  );
}
