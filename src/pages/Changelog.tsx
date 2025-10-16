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

      <div className=" space-y-6">
        {versions.map((version) => (
          <Card key={version.version}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{version.version}</h2>
                <span className="text-sm text-muted-foreground">{version.date}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 md:flex md:space-y-0 md:gap-6 md:items-start">
              {version.changes.map((change, i) => (
              <div key={i} className="md:flex-1">
                <Badge
                variant={
                  change.type === "NEW"
                  ? "default"
                  : change.type === "UPDATE"
                  ? "secondary"
                  : "outline"
                }
                className="mb-3"
                >
                {change.type}
                </Badge>
                <ul className="space-y-2 ml-4 list-disc">
                {change.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground">
                  {item}
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
