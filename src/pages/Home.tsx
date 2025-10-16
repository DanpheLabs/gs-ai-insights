import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, MessageSquare, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex ">
      <div style={{ height: "calc(100vh - var(--nav-height, 64px))" }}
        className="flex-1 p-12 bg-[size:0px_0px] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] h-screen overflow-y-hidden"
        >

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-2xl font-bold mb-4">Unleash Your Creativity with AI</h1>
            <p className="text-muted-foreground text-md">
              Generate your ideas into stunning visuals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/optimize-prompt">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-card border border-border h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <ImageIcon className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold mb-4">Optimize Prompt</h2>
                  <p className="text-muted-foreground mb-6">
                    AI-powered prompt optimization combines deep learning and generative models to
                    refine your inputs for the best outputs. Optimize prompt to save tokens and
                    improve quality of output.
                  </p>
                  <ChevronRight className="h-6 w-6 text-primary mt-auto" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/reveal-prompt">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-card border border-border h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <MessageSquare className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold mb-4">Reveal Prompt</h2>
                  <p className="text-muted-foreground mb-6">
                    Unlock the hidden blueprint behind any AI output. Reveal Prompt lets you decode
                    prompts and master the art of reverse prompt engineering.
                  </p>
                  <ChevronRight className="h-6 w-6 text-primary mt-auto" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      <aside
        className="w-80 border-l border-border p-8 bg-gray-50 overflow-hidden flex flex-col"
        style={{ height: "calc(100vh - var(--nav-height, 64px))" }}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
          REVEAL PROMPT
        </h2>
        <p className="text-muted-foreground mb-8">
          The official server of TECH-AI, a
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="font-medium">1,154,694</span>
            <span className="text-muted-foreground">Online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
            <span className="font-medium">77,345,912</span>
            <span className="text-muted-foreground">Members</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
