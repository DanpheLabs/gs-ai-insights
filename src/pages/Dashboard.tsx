import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Sparkles, Eye, TrendingUp, Clock, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const stats = [
    { label: "Prompts Optimized", value: "1,247", change: "+12.5%", icon: Sparkles, color: "text-primary" },
    { label: "Prompts Revealed", value: "856", change: "+8.3%", icon: Eye, color: "text-primary" },
    { label: "Total Usage", value: "2,103", change: "+10.2%", icon: Activity, color: "text-primary" },
    { label: "Success Rate", value: "94.7%", change: "+2.1%", icon: TrendingUp, color: "text-primary" },
  ];

  const recentActivity = [
    { action: "Optimized", prompt: "Generate marketing copy for...", time: "2 minutes ago", type: "optimize" },
    { action: "Revealed", prompt: "AI-generated content analysis", time: "15 minutes ago", type: "reveal" },
    { action: "Optimized", prompt: "Create social media post about...", time: "1 hour ago", type: "optimize" },
    { action: "Revealed", prompt: "Technical documentation prompt", time: "2 hours ago", type: "reveal" },
  ];

  const usageData = [
    { model: "GPT-4", usage: 456, percentage: 65 },
    { model: "GPT-3.5", usage: 234, percentage: 33 },
    { model: "Claude", usage: 89, percentage: 12 },
  ];

  return (
    <div className="flex-1 bg-background">
      <div className="p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button className="gap-2">
            <Sparkles className="h-4 w-4" />
            New Optimization
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="rounded-xl">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-primary">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-primary/10 ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className={`p-2 rounded-lg ${activity.type === 'optimize' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                      {activity.type === 'optimize' ? (
                        <Sparkles className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-sm text-muted-foreground truncate">{activity.prompt}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Model Usage */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                AI Model Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {usageData.map((model) => (
                  <div key={model.model} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{model.model}</span>
                      <span className="text-sm text-muted-foreground">{model.usage} uses</span>
                    </div>
                    <Progress value={model.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start gap-2 h-auto py-4 rounded-xl">
                <Sparkles className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Optimize Prompt</div>
                  <div className="text-xs text-muted-foreground">Improve your AI prompts</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-2 h-auto py-4 rounded-xl">
                <Eye className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Reveal Prompt</div>
                  <div className="text-xs text-muted-foreground">Reverse engineer prompts</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start gap-2 h-auto py-4 rounded-xl">
                <Activity className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">View Analytics</div>
                  <div className="text-xs text-muted-foreground">Track your performance</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
