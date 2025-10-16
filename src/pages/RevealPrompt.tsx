import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Plus, Eye } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RevealPrompt() {
  const chats = [
    { title: "Chat Bot Definition", id: 1 },
    { title: "Essay: Marketing", id: 2 },
    { title: "Future of Social Media", id: 3 },
    { title: "Business Ideas", id: 4 },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="flex-1 flex flex-col bg-background">
        <div className="p-5 border-b border-border">
          <h1 className="text-2xl font-medium">Reveal Prompt</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-light">Input Text:</label>
            <Textarea 
              placeholder="Enter AI-generated text here to reveal the prompt..."
              className="min-h-[200px] resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-light">Revealed Prompt:</label>
            <Textarea 
              placeholder="Original prompt will appear here..."
              className="min-h-[200px] resize-none bg-primary/5"
              readOnly
            />
          </div>
             <div className="p-6 border-t border-border">
            <div className="flex justify-center">
            <Button className="gap-2">
              <Eye className="h-4 w-4" />
              Reveal Prompt
            </Button>
            </div>
        </div>
        </div>

     
      </div>

      <aside className="w-80 border-l border-border bg-muted">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Button className="flex-1 gap-2">
            <Plus className="h-4 w-4" />
            NEW CHAT
          </Button>
        </div>

        <div className="p-4 border-b border-border">
          <label className="text-sm font-light mb-2 block">AI Model:</label>
          <Select defaultValue="gpt4">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt4">GPT-4</SelectItem>
              <SelectItem value="gpt35">GPT-3.5</SelectItem>
              <SelectItem value="claude">Claude</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-4">
          <div className="text-sm font-light mb-2">TODAY</div>
          <div className="space-y-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center justify-between p-2 hover:bg-muted rounded-sm cursor-pointer"
              >
                <span className="text-sm truncate flex-1">{chat.title}</span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
