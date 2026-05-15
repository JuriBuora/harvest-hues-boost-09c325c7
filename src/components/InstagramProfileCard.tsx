import { Button } from "@/components/ui/button";

interface InstagramProfileCardProps {
  profileUrl: string;
  profileName: string;
}

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function InstagramProfileCard({ profileUrl, profileName }: InstagramProfileCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <InstagramIcon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground">Seguici su Instagram</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Foto e aggiornamenti dal profilo ufficiale {profileName}.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-md border border-border bg-muted/40 p-4">
        <p className="text-sm font-semibold text-foreground">@soc.agr.farina_2.0</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Apri il profilo Instagram per vedere raccolti, prodotti di stagione e aggiornamenti dall’azienda.
        </p>
      </div>

      <Button type="button" className="mt-4 w-full" asChild>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          Apri Instagram
        </a>
      </Button>
    </div>
  );
}
