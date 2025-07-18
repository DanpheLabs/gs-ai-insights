import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Layout } from "@/components/layout/Layout";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target,
  Activity,
  Trophy,
  MapPin,
  Clock,
  Filter,
  Download,
  Share,
  Maximize2
} from "lucide-react";
import playerAnalytics from "@/assets/player-analytics.jpg";

export default function Analytics() {
  const teamStats = [
    { team: "Arsenal", matches: 38, wins: 28, draws: 5, losses: 5, goals: 91, points: 89 },
    { team: "Manchester City", matches: 38, wins: 26, draws: 7, losses: 5, goals: 89, points: 85 },
    { team: "Liverpool", matches: 38, wins: 24, draws: 10, losses: 4, goals: 86, points: 82 },
    { team: "Chelsea", matches: 38, wins: 21, draws: 8, losses: 9, goals: 77, points: 71 },
    { team: "Newcastle", matches: 38, wins: 19, draws: 14, losses: 5, goals: 68, points: 71 }
  ];

  const playerMetrics = [
    { name: "Kevin De Bruyne", position: "Midfielder", goals: 15, assists: 27, rating: 8.9, team: "Man City" },
    { name: "Erling Haaland", position: "Striker", goals: 36, assists: 8, rating: 8.7, team: "Man City" },
    { name: "Bukayo Saka", position: "Winger", goals: 14, assists: 13, rating: 8.5, team: "Arsenal" },
    { name: "Mohamed Salah", position: "Winger", goals: 19, assists: 12, rating: 8.4, team: "Liverpool" },
    { name: "Bruno Fernandes", position: "Midfielder", goals: 8, assists: 16, rating: 8.2, team: "Man United" }
  ];

  const performanceKPIs = [
    { metric: "Pass Accuracy", value: 87.2, change: "+2.1%", trend: "up" },
    { metric: "Shot Conversion", value: 15.8, change: "+1.3%", trend: "up" },
    { metric: "Defensive Actions", value: 24.6, change: "-0.8%", trend: "down" },
    { metric: "Ball Possession", value: 58.9, change: "+3.2%", trend: "up" },
    { metric: "Distance Covered", value: 105.3, change: "+0.5%", trend: "up" },
    { metric: "Sprint Speed", value: 28.4, change: "-1.1%", trend: "down" }
  ];

  const matchAnalysis = [
    {
      match: "Arsenal vs Chelsea",
      date: "Dec 15, 2024",
      score: "2-1",
      highlights: ["Goal - 23'", "Goal - 67'", "Red Card - 78'"],
      insights: "Strong defensive performance in second half"
    },
    {
      match: "Man City vs Liverpool",
      date: "Dec 12, 2024", 
      score: "3-2",
      highlights: ["Goal - 15'", "Goal - 34'", "Goal - 89'"],
      insights: "High-intensity pressing led to turnovers"
    },
    {
      match: "Chelsea vs Newcastle",
      date: "Dec 10, 2024",
      score: "1-0",
      highlights: ["Goal - 56'", "Penalty Save - 72'"],
      insights: "Tactical substitutions changed momentum"
    }
  ];

  const seasons = ["2024-25", "2023-24", "2022-23", "2021-22"];
  const leagues = ["Premier League", "Champions League", "FA Cup", "EFL Cup"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header with Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive sports performance analysis</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-3 py-2 border border-border rounded-md">
              {seasons.map(season => (
                <option key={season} value={season}>{season}</option>
              ))}
            </select>
            <select className="px-3 py-2 border border-border rounded-md">
              {leagues.map(league => (
                <option key={league} value={league}>{league}</option>
              ))}
            </select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Analytics Hero Image */}
        <Card className="mb-8 overflow-hidden">
          <div className="relative">
            <img 
              src={playerAnalytics} 
              alt="Player Analytics"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="px-8 text-primary-foreground">
                <h2 className="text-2xl font-bold mb-2">AI-Powered Analytics</h2>
                <p className="opacity-90">Real-time insights from advanced sports data analysis</p>
              </div>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="team-stats" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="team-stats">Team Stats</TabsTrigger>
            <TabsTrigger value="player-stats">Player Stats</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="matches">Match Analysis</TabsTrigger>
          </TabsList>

          {/* Team Stats Tab */}
          <TabsContent value="team-stats" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>League Table</span>
                </CardTitle>
                <CardDescription>
                  Current season standings with detailed statistics
                </CardDescription>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4">Team</th>
                        <th className="text-center py-3 px-4">MP</th>
                        <th className="text-center py-3 px-4">W</th>
                        <th className="text-center py-3 px-4">D</th>
                        <th className="text-center py-3 px-4">L</th>
                        <th className="text-center py-3 px-4">GF</th>
                        <th className="text-center py-3 px-4">Pts</th>
                        <th className="text-center py-3 px-4">Form</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamStats.map((team, index) => (
                        <tr key={index} className="border-b border-border hover:bg-accent transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                                {index + 1}
                              </span>
                              <span className="font-medium">{team.team}</span>
                            </div>
                          </td>
                          <td className="text-center py-3 px-4">{team.matches}</td>
                          <td className="text-center py-3 px-4 text-success font-medium">{team.wins}</td>
                          <td className="text-center py-3 px-4 text-warning font-medium">{team.draws}</td>
                          <td className="text-center py-3 px-4 text-destructive font-medium">{team.losses}</td>
                          <td className="text-center py-3 px-4">{team.goals}</td>
                          <td className="text-center py-3 px-4 font-bold">{team.points}</td>
                          <td className="text-center py-3 px-4">
                            <div className="flex justify-center space-x-1">
                              {["W", "W", "D", "W", "L"].map((result, i) => (
                                <div
                                  key={i}
                                  className={`w-5 h-5 rounded-full text-xs flex items-center justify-center text-white font-bold ${
                                    result === "W" ? "bg-success" : 
                                    result === "D" ? "bg-warning" : "bg-destructive"
                                  }`}
                                >
                                  {result}
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Player Stats Tab */}
          <TabsContent value="player-stats" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Top Players Performance</span>
                </CardTitle>
                <CardDescription>
                  Individual player statistics and ratings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {playerMetrics.map((player, index) => (
                    <Card key={index} className="sports-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="outline">{player.position}</Badge>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{player.rating}</div>
                            <div className="text-xs text-muted-foreground">Rating</div>
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{player.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{player.team}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-xl font-bold text-success">{player.goals}</div>
                            <div className="text-xs text-muted-foreground">Goals</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-info">{player.assists}</div>
                            <div className="text-xs text-muted-foreground">Assists</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>Performance KPIs</span>
                </CardTitle>
                <CardDescription>
                  Key performance indicators with trend analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {performanceKPIs.map((kpi, index) => (
                    <Card key={index} className="sports-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium text-sm">{kpi.metric}</h4>
                          <div className={`flex items-center space-x-1 text-sm ${
                            kpi.trend === "up" ? "text-success" : "text-destructive"
                          }`}>
                            <TrendingUp className={`h-4 w-4 ${kpi.trend === "down" ? "rotate-180" : ""}`} />
                            <span>{kpi.change}</span>
                          </div>
                        </div>
                        <div className="text-2xl font-bold mb-2">{kpi.value}%</div>
                        <Progress value={kpi.value} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Performance Trends</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Interactive performance charts would be displayed here</p>
                    <p className="text-sm text-muted-foreground mt-2">Showing trends over time for key metrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Match Analysis Tab */}
          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Recent Match Analysis</span>
                </CardTitle>
                <CardDescription>
                  Detailed breakdown of recent matches with AI insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {matchAnalysis.map((match, index) => (
                    <Card key={index} className="border border-border">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-lg">{match.match}</h3>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{match.date}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{match.score}</div>
                            <Badge variant="secondary">Full Time</Badge>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Key Highlights</h4>
                            <div className="space-y-2">
                              {match.highlights.map((highlight, i) => (
                                <div key={i} className="flex items-center space-x-2 text-sm">
                                  <div className="w-2 h-2 rounded-full bg-primary" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">AI Insights</h4>
                            <p className="text-sm text-muted-foreground">{match.insights}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between mt-4">
                          <Button variant="outline" size="sm">
                            View Full Analysis
                          </Button>
                          <Button variant="outline" size="sm">
                            Watch Highlights
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}