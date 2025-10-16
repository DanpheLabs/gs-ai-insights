import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Settings() {
  return (
    <div className="p-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-medium mb-8">Settings</h1>

      <div className="flex gap-8">
        <div className="flex-shrink-0">
          <div className="w-64 h-64 bg-muted rounded-lg flex flex-col items-center justify-center text-center p-6">
            <Upload className="h-12 w-12 mb-4 text-muted-foreground" />
            <div className="font-light mb-2">Drag & Drop a Image</div>
            <div className="text-sm text-muted-foreground mb-2">OR</div>
            <Button variant="link" className="text-sm">
              Browse
            </Button>
            <div className="text-xs text-muted-foreground mt-2">
              Supports JPG, JPEG, and PNG
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm text-muted-foreground mb-2">
              Name
            </Label>
            <Input id="name" defaultValue="Caden Smith" />
          </div>

          <div>
            <Label htmlFor="username" className="text-sm text-muted-foreground mb-2">
              Username
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">@</span>
              <Input id="username" defaultValue="caddeomyth" className="pl-8" />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-sm text-muted-foreground mb-2">
              Email Address
            </Label>
            <Input id="email" type="email" defaultValue="cadensmith@gmail.com" />
          </div>

          <div>
            <Label htmlFor="password" className="text-sm text-muted-foreground mb-2">
              Password
            </Label>
            <Input id="password" type="password" defaultValue="••••••••••••" />
          </div>

          <div className="flex items-center gap-2 pt-4">
            <Checkbox id="approve" />
            <Label htmlFor="approve" className="text-sm cursor-pointer">
              I approve all changes
            </Label>
          </div>

          <Button className="w-full rounded-full" variant="outline">
            SAVE CHANGES
          </Button>
        </div>
      </div>
    </div>
  );
}
