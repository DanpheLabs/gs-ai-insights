import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Layout } from "@/components/layout/Layout";
import { 
  BarChart3, 
  Users, 
  PlayCircle, 
  Upload, 
  TrendingUp,
  Activity,
  Bell,
  MessageSquare,
  Target,
  Trophy,
  Clock,
  ArrowUpRight
} from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Videos Analyzed",
      value: "1,247",
      change: "+12%",
      icon: PlayCircle,
      color: "text-primary"
    },
    {
      title: "AI Models Active",
      value: "23",
      change: "+3",
      icon: Activity,
      color: "text-success"
    },
    {
      title: "Team Performance",
      value: "87%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-info"
    },
    {
      title: "Match Highlights",
      value: "456",
      change: "+28",
      icon: Trophy,
      color: "text-warning"
    }
  ];

  const quickActions = [
    { title: "Upload New Video", icon: Upload, href: "/upload", variant: "gradient" as const },
    { title: "View Analytics", icon: BarChart3, href: "/analytics", variant: "outline" as const },
    { title: "Player Stats", icon: Users, href: "/profile", variant: "secondary" as const },
    { title: "Generate Highlights", icon: PlayCircle, href: "/highlights", variant: "sports" as const }
  ];

  const recentActivity = [
    { 
      type: "video", 
      title: "Match vs Arsenal analyzed", 
      time: "2 hours ago",
      status: "completed"
    },
    { 
      type: "model", 
      title: "Defensive Pattern AI updated", 
      time: "4 hours ago",
      status: "active"
    },
    { 
      type: "highlight", 
      title: "Goal highlights generated", 
      time: "6 hours ago",
      status: "ready"
    },
    { 
      type: "analysis", 
      title: "Player performance report", 
      time: "1 day ago",
      status: "viewed"
    }
  ];

  const messages = [
    { 
      from: "Coach Martinez", 
      message: "Great analysis on yesterday's match!",
      time: "1 hour ago",
      unread: true
    },
    { 
      from: "Data Team", 
      message: "New defensive metrics available",
      time: "3 hours ago",
      unread: true
    },
    { 
      from: "System", 
      message: "Weekly report is ready for review",
      time: "1 day ago",
      unread: false
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-8">
          <img 
            src={dashboardHero} 
            alt="Sports Analytics Dashboard"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
            <div className="px-8 text-primary-foreground">
              <h1 className="text-4xl font-bold mb-2">Welcome to Sporto AI</h1>
              <p className="text-lg opacity-90">Advanced sports analytics powered by artificial intelligence</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="sports-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                        <Badge variant="secondary" className="text-success">
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>
                Get started with common tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={index}
                      variant={action.variant}
                      className="h-20 flex-col space-y-2"
                      asChild
                    >
                      <a href={action.href}>
                        <Icon className="h-6 w-6" />
                        <span>{action.title}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Messages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Messages</span>
                </div>
                <Badge variant="secondary">2 new</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${message.unread ? 'bg-primary' : 'bg-muted'}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{message.from}</p>
                    <p className="text-sm text-muted-foreground truncate">{message.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Messages
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>
                Latest updates from your sports analytics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <Badge variant={activity.status === 'completed' ? 'default' : 'secondary'}>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Progress Indicators */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>Model Training Progress</span>
              </CardTitle>
              <CardDescription>
                Current AI model training status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Defensive Pattern Recognition</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Player Movement Analysis</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Goal Scoring Prediction</span>
                  <span>92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <Button variant="outline" className="w-full">
                <ArrowUpRight className="h-4 w-4 mr-2" />
                View All Models
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}