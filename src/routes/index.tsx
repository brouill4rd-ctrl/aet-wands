import { createFileRoute, Link } from "@tanstack/react-router";
import crest from "@/assets/AetCrest1.png";
import { HOUSES } from "@/data/wandlore";
import { HouseCard } from "@/components/HouseCard";
import { EditableText } from "@/components/EditableText";

export const Route = createFileRoute("/")(  {
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 text-center">
        <img
          src={crest}
          alt="Herb Wszechnicy Aeternum"
          className="mx-auto h-48 sm:h-64 object-contain animate-glow-pulse animate-fade-up"
        />
        <p className="mt-6 font-display uppercase tracking-[0.5em] text-xs text-primary/80 animate-fade-up">
          <EditableText
            section="homepage"
            itemKey="hero"
            field="subtitle"
            defaultValue="Wszechnica Magii"
          />
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-6xl md:text-7xl gold-gradient-text text-glow animate-fade-up">
          <EditableText
            section="homepage"
            itemKey="hero"
            field="title"
            defaultValue="Aeternum"
          />
        </h1>
        <div className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-foreground/80 animate-fade-up">
          <EditableText
            section="homepage"
            itemKey="hero"
            field="description"
            defaultValue="Ceremonia Przydziału, warsztat różdżkarza, certyfikat Ailana Tahiego. Wybierz Dom, utkuj różdżkę i odbierz swój dokument."
            multiline
            as="p"
            className="text-sm sm:text-base text-foreground/80"
          />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up">
          <Link
            to="/przydzial"
            className="rounded-lg bg-gradient-to-b from-primary-glow via-primary to-primary/80 text-primary-foreground px-7 py-3 text-sm font-semibold uppercase tracking-widest shadow-[0_0_40px_-6px_var(--primary-glow)] hover:shadow-[0_0_60px_-4px_var(--primary-glow)] transition-shadow"
          >
            Rozpocznij Ceremonię
          </Link>
          <Link
            to="/encyklopedia"
            className="rounded-lg border border-primary/30 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary/90 hover:border-primary/60 hover:bg-primary/5 transition"
          >
            Encyklopedia
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="text-center mb-8 animate-fade-up">
          <p className="font-display uppercase tracking-[0.4em] text-xs text-primary/80">
            <EditableText
              section="homepage"
              itemKey="houses_section"
              field="subtitle"
              defaultValue="Trzy Domy"
            />
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl gold-gradient-text">
            <EditableText
              section="homepage"
              itemKey="houses_section"
              field="title"
              defaultValue="Wybór, który zdefiniuje Twoją magię"
            />
          </h2>
          <div className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            <EditableText
              section="homepage"
              itemKey="houses_section"
              field="description"
              defaultValue="Płomień, bursztyn, gwiazdy. Podczas Ceremonii Przydziału wybierzesz jeden — i to on wybierze Cię z powrotem."
              as="p"
              className="text-sm text-muted-foreground"
            />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {HOUSES.map((h) => (
            <HouseCard key={h.id} house={h} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          <Feature
            featureKey="feature_przydzial"
            title="Przydział do Domu"
            body="Wybierz Dom, podaj personalia. Twoja tożsamość zostanie zapisana w Księdze Adeptów."
          />
          <Feature
            featureKey="feature_warsztat"
            title="Warsztat 3D"
            body="Interaktywny model różdżki reaguje na każdy wybór — drewno, rdzeń, elastyczność i długość."
          />
          <Feature
            featureKey="feature_certyfikat"
            title="Certyfikat Ailana Tahiego"
            body="Pobierz oficjalny dokument PDF z Twoim imieniem, Domem i pełną specyfikacją różdżki."
          />
        </div>
      </section>
    </div>
  );
}

function Feature({ featureKey, title, body }: { featureKey: string; title: string; body: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 animate-scale-in">
      <h3 className="font-display text-xl gold-gradient-text">
        <EditableText
          section="homepage"
          itemKey={featureKey}
          field="title"
          defaultValue={title}
        />
      </h3>
      <div className="mt-2 text-sm text-foreground/75">
        <EditableText
          section="homepage"
          itemKey={featureKey}
          field="body"
          defaultValue={body}
          multiline
          as="p"
          className="text-sm text-foreground/75"
        />
      </div>
    </div>
  );
}
