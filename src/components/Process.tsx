/* eslint-disable @next/next/no-img-element */
export default function Process() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 md:px-8">
      <div className="space-y-16">
        <div className="space-y-4">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
            <img
              src="/images/process/discussion.png"
              alt="Discussione"
              className="h-auto w-full rounded-lg object-contain md:h-32 md:w-auto"
            />
            <div className="space-y-4">
              <h2 className="font-instrument-serif text-3xl text-foreground">
                Discussione dell{"'"}Idea
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Un confronto approfondito per comprendere obiettivi, target e
                visione del progetto, insieme a proposte creative e soluzioni
                personalizzate.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col-reverse items-start gap-6 md:flex-row md:items-center md:gap-8">
            <div className="space-y-4">
              <h2 className="font-instrument-serif text-3xl text-foreground">
                Realizzazione
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Sviluppo con tecnologie all{"'"}avanguardia, attenzione alle
                performance e testing continuo per garantire qualità e
                funzionalità.
              </p>
            </div>
            <img
              src="/images/process/realization.png"
              alt="Discussione"
              className="h-auto w-full rounded-lg object-contain md:h-32 md:w-auto"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
            <img
              src="/images/process/cms.png"
              alt="Discussione"
              className="h-auto w-full rounded-lg object-contain md:h-32 md:w-auto"
            />
            <div className="space-y-4">
              <h2 className="font-instrument-serif text-3xl text-foreground">
                Custom CMS
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Implementazione falcoltativa di un sistema di gestione contenuti
                su misura, semplice da utilizzare ma potente nelle possibilità
                di personalizzazione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
