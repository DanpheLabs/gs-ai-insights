import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Changelog() {
  const versions = [
    {
      version: "v4.1.2",
      date: "MAY 25, 2025",
      changes: [
        { type: "NEW", items: ["Exclusive Font Icons in 3 Styles", "Image lazy load plugin integration"] },
        {
          type: "UPDATE",
          items: [
            "(Dependencies) Updated Angular & Angular Material to v15.1.1",
            "Global icons migration to Keenicons",
          ],
        },
        { type: "FIX", items: ["Mobile menu toggle issue", "Layout builder issue"] },
      ],
    },
    {
      version: "v4.1.1",
      date: "JAN 19, 2025",
      changes: [
        { type: "NEW", items: ["Exclusive Font Icons in 3 Styles", "Image lazy load plugin integration"] },
        {
          type: "UPDATE",
          items: [
            "(Dependencies) Updated Angular & Angular Material to v15.0.0",
            "Performance improvements",
          ],
        },
        { type: "FIX", items: ["Dark mode toggle issue", "Responsive layout fixes"] },
      ],
    },
  ];

  return (
    <div className="p-8 bg-background">
      <h1 className="text-3xl font-bold mb-8">Changelog</h1>

      <div className="space-y-4 max-w-5xl">
        {versions.map((version) => (
          <Card key={version.version} className="rounded-xl">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{version.version}</h2>
                <span className="text-xs text-muted-foreground">{version.date}</span>
              </div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              {version.changes.map((change, i) => (
                <div key={i} className="space-y-2">
                  <Badge
                    variant={
                      change.type === "NEW"
                        ? "default"
                        : change.type === "UPDATE"
                        ? "secondary"
                        : "outline"
                    }
                    className="text-xs"
                  >
                    {change.type}
                  </Badge>
                  <ul className="space-y-1">
                    {change.items.map((item, j) => (
                      <li key={j} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
