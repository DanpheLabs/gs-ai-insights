import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Network() {
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  ];

  return (
    <div className="p-8 bg-background">
      <h1 className="text-3xl font-bold mb-8">Network</h1>

      <Tabs defaultValue="generations" className="mb-6">
        <TabsList>
          <TabsTrigger value="generations">YOUR GENERATIONS</TabsTrigger>
          <TabsTrigger value="followers">FOLLOWER'S</TabsTrigger>
          <TabsTrigger value="liked">LIKED</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex gap-4 mb-8">
        <Input placeholder="Search gallery" className="max-w-xs" />
        <Button variant="outline">SEARCH</Button>
        <div className="flex items-center gap-2 ml-auto">
          <Checkbox id="upscaled" />
          <label htmlFor="upscaled" className="text-sm">
            Upscaled
          </label>
        </div>
        <Button variant="outline">Select Items</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
