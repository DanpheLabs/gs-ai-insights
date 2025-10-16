import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Plus, Send } from "lucide-react";
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
          <h1 className="text-2xl font-bold">Reveal Prompt</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-end">
            <div className="max-w-2xl justify-end">
              {/* <Badge className="mb-2 bg-primary text-primary-foreground ">YOU</Badge> */}
              <div className="bg-muted p-4 rounded-xl">
                <p>What is a chat bot?</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-2xl">
              {/* <Badge variant="secondary" className="mb-2">
                BOT
              </Badge> */}
              <div className="bg-primary/30 border border-border p-4 rounded-xl">
                <p className="text-sm leading-relaxed">
                  At the most basic level, a chatbot is a computer program that simulates and
                  processes human conversation (either written or spoken), allowing humans to
                  interact with digital devices as if they were communicating with a real person.
                  Chatbots can be as simple as rudimentary programs that answer a simple query with
                  a single-line response, or as sophisticated as digital assistants that learn and
                  evolve to deliver increasing levels of personalization as they gather and process
                  information.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-2xl">
              {/* <Badge className="mb-2 bg-primary text-primary-foreground">YOU</Badge> */}
              <div className="bg-muted p-4 rounded-xl">
                <p>How do chatbots work?</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-2xl">
              {/* <Badge variant="secondary" className="mb-2">
                BOT
              </Badge> */}
              <div className="bg-primary/30 border border-border p-4 rounded-xl">
                <p className="text-sm leading-relaxed">
                  Chatbots boost operational efficiency and bring cost savings to businesses while
                  offering convenience and added services to internal employees and external
                  customers. They allow companies to easily resolve many types of customer queries
                  and issues while reducing the need for human interaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-border">
          <div className="flex gap-2">
            <Input placeholder="Send a message..." className="flex-1" />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <aside className="w-80 border-l border-border bg-gray-100">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Button className="flex-1 gap-2">
            <Plus className="h-4 w-4" />
            NEW CHAT
          </Button>
        </div>

        <div className="p-4 border-b border-border">
          <label className="text-sm font-medium mb-2 block">AI Model:</label>
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
          <div className="text-sm font-medium mb-2">TODAY</div>
          <div className="space-y-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center justify-between p-2 hover:bg-muted rounded-xl cursor-pointer"
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
