import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  const interests = [
    "ADVERTISING",
    "ARCHITECTURE",
    "ART",
    "EDUCATION",
    "FASHION",
    "FILM TV",
    "INTERIOR",
    "MARKETING",
    "GRAPHICS",
    "GAMES",
    "STOCK IMAGES",
    "OTHER",
  ];

  return (
    <div className="p-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>

      <div className="bg-card border border-border rounded-lg p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex gap-6">
            <img
              src="/placeholder-avatar.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-lg object-cover"
            />
            <div className="space-y-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">NAME</div>
                <div className="font-medium">Caden Smith</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">EMAIL ADDRESS</div>
                <div className="font-medium">cadensmith@gmail.com</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">USERNAME</div>
              <div className="font-medium">@caddeomyth</div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-8">
        <div className="mb-6">
          <div className="text-xs text-muted-foreground mb-2">YOUR PLAN</div>
          <div className="flex items-center justify-between">
            <div className="text-sm">Personal Plan - You will given 8000 tokens every month</div>
            <Button variant="outline" className="rounded-full">
              UPGRADE
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">What are your interests?</h2>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest, i) => (
            <Badge
              key={interest}
              variant={i === 0 ? "default" : "outline"}
              className="px-4 py-2 text-sm"
            >
              {interest}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
