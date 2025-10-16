import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Roadmap() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const allVersions = [
    {
      version: "v4.1.2",
      date: "MAY 25, 2025",
      changes: [
        { type: "NEW", items: ["Exclusive Font Icons in 3 Styles", "Image lazy load plugin integration"] },
        { type: "UPDATE", items: ["Updated Angular & Angular Material to v15.1.1", "Global icons migration to Keenicons"] },
        { type: "FIX", items: ["Mobile menu toggle issue", "Layout builder issue"] },
      ],
    },
    {
      version: "v4.1.1",
      date: "JAN 19, 2025",
      changes: [
        { type: "NEW", items: ["Advanced AI prompt optimization", "Multi-model support"] },
        { type: "UPDATE", items: ["Performance improvements", "Enhanced UI/UX"] },
        { type: "FIX", items: ["Dark mode toggle issue", "Responsive layout fixes"] },
      ],
    },
    {
      version: "v4.1.0",
      date: "DEC 15, 2024",
      changes: [
        { type: "NEW", items: ["Prompt reveal feature", "Token analytics dashboard"] },
        { type: "UPDATE", items: ["Improved API response time", "Database optimization"] },
        { type: "FIX", items: ["Authentication flow bug", "Form validation errors"] },
      ],
    },
    {
      version: "v4.0.9",
      date: "NOV 28, 2024",
      changes: [
        { type: "NEW", items: ["Subnet validator integration", "Miner statistics"] },
        { type: "UPDATE", items: ["Enhanced security protocols", "Updated dependencies"] },
        { type: "FIX", items: ["Network timeout issues", "Cache invalidation"] },
      ],
    },
    {
      version: "v4.0.8",
      date: "NOV 10, 2024",
      changes: [
        { type: "NEW", items: ["User profile customization", "Achievement badges"] },
        { type: "UPDATE", items: ["Improved error handling", "Better logging"] },
        { type: "FIX", items: ["Profile image upload", "Settings persistence"] },
      ],
    },
    {
      version: "v4.0.7",
      date: "OCT 22, 2024",
      changes: [
        { type: "NEW", items: ["Community features", "Social sharing"] },
        { type: "UPDATE", items: ["Optimized rendering", "Reduced bundle size"] },
        { type: "FIX", items: ["Notification system", "Timezone handling"] },
      ],
    },
    {
      version: "v4.0.6",
      date: "OCT 5, 2024",
      changes: [
        { type: "NEW", items: ["API rate limiting", "Usage analytics"] },
        { type: "UPDATE", items: ["Enhanced documentation", "API versioning"] },
        { type: "FIX", items: ["Webhook delivery", "Retry logic"] },
      ],
    },
    {
      version: "v4.0.5",
      date: "SEP 18, 2024",
      changes: [
        { type: "NEW", items: ["Batch processing", "Export functionality"] },
        { type: "UPDATE", items: ["Improved search", "Better filtering"] },
        { type: "FIX", items: ["Data synchronization", "Memory leaks"] },
      ],
    },
    {
      version: "v4.0.4",
      date: "SEP 1, 2024",
      changes: [
        { type: "NEW", items: ["Real-time updates", "WebSocket support"] },
        { type: "UPDATE", items: ["Enhanced monitoring", "Better alerts"] },
        { type: "FIX", items: ["Connection stability", "Reconnection logic"] },
      ],
    },
    {
      version: "v4.0.3",
      date: "AUG 15, 2024",
      changes: [
        { type: "NEW", items: ["Custom themes", "Personalization options"] },
        { type: "UPDATE", items: ["UI polish", "Animation improvements"] },
        { type: "FIX", items: ["Theme switching", "Color contrast"] },
      ],
    },
    {
      version: "v4.0.2",
      date: "AUG 1, 2024",
      changes: [
        { type: "NEW", items: ["Mobile app support", "Progressive web app"] },
        { type: "UPDATE", items: ["Mobile optimization", "Touch gestures"] },
        { type: "FIX", items: ["Viewport issues", "Orientation handling"] },
      ],
    },
    {
      version: "v4.0.1",
      date: "JUL 20, 2024",
      changes: [
        { type: "NEW", items: ["Keyboard shortcuts", "Accessibility improvements"] },
        { type: "UPDATE", items: ["ARIA labels", "Screen reader support"] },
        { type: "FIX", items: ["Focus management", "Tab navigation"] },
      ],
    },
  ];

  const totalPages = Math.ceil(allVersions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVersions = allVersions.slice(startIndex, endIndex);

  return (
    <div className="p-8 bg-background min-h-screen">
      <h1 className="text-3xl font-medium mb-12 text-center">Roadmap</h1>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

        <div className="space-y-8">
          {currentVersions.map((version, index) => (
            <div
              key={version.version}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >
              {/* Card */}
              <div className="w-full md:w-[calc(50%-2rem)]">
                <Card className="rounded-sm border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-medium">{version.version}</h2>
                      <span className="text-xs text-muted-foreground">{version.date}</span>
                    </div>
                    <div className="space-y-3">
                      {version.changes.map((change, i) => (
                        <div key={i}>
                          <Badge
                            variant={
                              change.type === "NEW"
                                ? "default"
                                : change.type === "UPDATE"
                                ? "secondary"
                                : "outline"
                            }
                            className="text-xs mb-2"
                          >
                            {change.type}
                          </Badge>
                          <ul className="space-y-1 ml-2">
                            {change.items.map((item, j) => (
                              <li key={j} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-primary mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex w-4 h-4 rounded-sm bg-primary border-4 border-background shadow-lg flex-shrink-0 z-10" />

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
