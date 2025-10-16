import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle2, Zap, TrendingUp, Plus } from "lucide-react";

export default function Models() {
  const [open, setOpen] = useState(false);

  const supportedModels = [
    {
      name: "GPT-4",
      provider: "OpenAI",
      status: "active",
      maxTokens: "8,192",
      avgLatency: "1.2s",
      costPer1k: "$0.03",
      features: ["Chat", "Code", "Analysis"],
    },
    {
      name: "GPT-3.5 Turbo",
      provider: "OpenAI",
      status: "active",
      maxTokens: "4,096",
      avgLatency: "0.8s",
      costPer1k: "$0.002",
      features: ["Chat", "Fast", "Cost-effective"],
    },
    {
      name: "Claude 3 Opus",
      provider: "Anthropic",
      status: "active",
      maxTokens: "200,000",
      avgLatency: "1.5s",
      costPer1k: "$0.015",
      features: ["Long context", "Analysis", "Reasoning"],
    },
    {
      name: "Claude 3 Sonnet",
      provider: "Anthropic",
      status: "active",
      maxTokens: "200,000",
      avgLatency: "1.1s",
      costPer1k: "$0.003",
      features: ["Balanced", "Fast", "Accurate"],
    },
    {
      name: "Gemini Pro",
      provider: "Google",
      status: "active",
      maxTokens: "32,000",
      avgLatency: "1.0s",
      costPer1k: "$0.00125",
      features: ["Multimodal", "Fast", "Cost-effective"],
    },
    {
      name: "LLaMA 2 70B",
      provider: "Meta",
      status: "active",
      maxTokens: "4,096",
      avgLatency: "1.3s",
      costPer1k: "$0.001",
      features: ["Open source", "Local", "Private"],
    },
    {
      name: "Mistral Large",
      provider: "Mistral AI",
      status: "active",
      maxTokens: "32,000",
      avgLatency: "0.9s",
      costPer1k: "$0.008",
      features: ["Fast", "Multilingual", "Code"],
    },
    {
      name: "Command R+",
      provider: "Cohere",
      status: "active",
      maxTokens: "128,000",
      avgLatency: "1.2s",
      costPer1k: "$0.003",
      features: ["RAG", "Enterprise", "Accurate"],
    },
  ];

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    // Handle form submission
  };

  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-medium">Supported Models</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Request New Model
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Request New Model</DialogTitle>
              <DialogDescription>
                Submit a request for a new AI model to be added to our platform.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRequestSubmit} className="space-y-4">
              <div>
                <Input placeholder="Model Name *" required />
              </div>
              <div>
                <Input placeholder="Provider *" required />
              </div>
              <div>
                <Input type="email" placeholder="Your Email *" required />
              </div>
              <div>
                <Textarea
                  placeholder="Why do you need this model? *"
                  className="min-h-24"
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Submit Request</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="rounded-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-sm bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Active Models</p>
                <h3 className="text-2xl font-medium">{supportedModels.length}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-sm bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Requests</p>
                <h3 className="text-2xl font-medium">134K</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-sm bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Avg Response Time</p>
                <h3 className="text-2xl font-medium">1.1s</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {supportedModels.map((model) => (
          <Card key={model.name} className="rounded-sm hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg mb-1">{model.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{model.provider}</p>
                </div>
                <Badge variant="default" className="gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  {model.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Max Tokens</span>
                  <span className="font-light">{model.maxTokens}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Latency</span>
                  <span className="font-light">{model.avgLatency}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Cost/1K</span>
                  <span className="font-light">{model.costPer1k}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-border">
                <div className="flex flex-wrap gap-1">
                  {model.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
