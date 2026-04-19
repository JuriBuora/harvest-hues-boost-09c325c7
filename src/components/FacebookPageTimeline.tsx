import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

interface FacebookPageTimelineProps {
  pageUrl: string;
  pageName?: string;
  height?: number;
}

const DEFAULT_HEIGHT = 900;
const DEFAULT_WIDTH = 340;

export default function FacebookPageTimeline({
  pageUrl,
  pageName = "Facebook",
  height = DEFAULT_HEIGHT,
}: FacebookPageTimelineProps) {
  const [enabled, setEnabled] = useState(false);

  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams({
      href: pageUrl,
      tabs: "timeline",
      width: String(DEFAULT_WIDTH),
      height: String(height),
      small_header: "false",
      adapt_container_width: "true",
      hide_cover: "false",
      show_facepile: "true",
    });
    return `https://www.facebook.com/plugins/page.php?${params.toString()}`;
  }, [pageUrl, height]);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h2 className="font-serif text-xl font-semibold text-foreground">Ultimi post su Facebook</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Aggiornamenti pubblicati sulla pagina ufficiale {pageName}.
      </p>

      {!enabled ? (
        <div className="mt-4 space-y-3">
          <Button type="button" onClick={() => setEnabled(true)} className="w-full">
            Carica i post
          </Button>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Caricando i post, Facebook puo' usare cookie e tecnologie di tracciamento di terze parti.
          </p>
          <a
            href={pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-primary hover:underline"
          >
            Apri su Facebook
          </a>
        </div>
      ) : (
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <iframe
            title={`Facebook - ${pageName}`}
            src={iframeSrc}
            width={DEFAULT_WIDTH}
            height={height}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            style={{ border: "none", overflow: "hidden" }}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}
