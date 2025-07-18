import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Layout } from "@/components/layout/Layout";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Trophy, 
  Target,
  BarChart,
  Settings,
  Upload,
  Star,
  ExternalLink,
  Edit,
  Save
} from "lucide-react";
import { useState } from "react";
import coachAvatar from "@/assets/coach-avatar.jpg";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const skills = [
    { name: "Tactical Analysis", level: 95 },
    { name: "Player Development", level: 88 },
    { name: "Data Analytics", level: 92 },
    { name: "Video Analysis", level: 85 },
    { name: "Performance Metrics", level: 90 }
  ];

  const achievements = [
    { title: "Top Analyst 2024", description: "Recognized for outstanding performance analysis" },
    { title: "Model Developer", description: "Created 5+ AI models with 90%+ accuracy" },
    { title: "Team Champion", description: "Helped team achieve 15-match winning streak" },
    { title: "Innovation Award", description: "Pioneered new defensive pattern recognition" }
  ];

  const workSamples = [
    {
      title: "Defensive Structure Analysis",
      description: "Comprehensive breakdown of Premier League defensive patterns",
      type: "Analysis Report",
      date: "Dec 2024"
    },
    {
      title: "Player Heat Map Study",
      description: "Movement patterns and positioning optimization",
      type: "Video Analysis",
      date: "Nov 2024"
    },
    {
      title: "Goal Prediction Model",
      description: "AI model predicting goal scoring opportunities",
      type: "AI Model",
      date: "Oct 2024"
    }
  ];

  const socialLinks = [
    { platform: "LinkedIn", url: "#", icon: ExternalLink },
    { platform: "Twitter", url: "#", icon: ExternalLink },
    { platform: "YouTube", url: "#", icon: ExternalLink }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <div className="relative inline-block">
                <Avatar className="w-32 h-32 mx-auto">
                  <AvatarImage src={coachAvatar} alt="Profile" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="absolute -bottom-2 -right-2 rounded-full"
                >
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="text-2xl mt-4">Carlos Martinez</CardTitle>
              <CardDescription className="text-base">
                Senior Football Analyst & AI Specialist
              </CardDescription>
              <div className="flex justify-center space-x-2 mt-4">
                <Badge variant="secondary">Analyst</Badge>
                <Badge variant="secondary">AI Developer</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>carlos.martinez@sportoai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Barcelona, Spain</span>
              </div>
              
              <div className="pt-4 space-y-2">
                <Label className="text-sm font-medium">Social Links</Label>
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={link.url}>
                        <Icon className="h-4 w-4 mr-2" />
                        {link.platform}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">User Profile</h1>
              <Button
                variant={isEditing ? "success" : "outline"}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Bio Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>About Me</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <Textarea
                        placeholder="Tell us about yourself..."
                        defaultValue="Passionate football analyst with 8+ years of experience in sports data analytics and AI model development. Specialized in tactical analysis, player performance evaluation, and predictive modeling for professional football teams."
                        className="min-h-24"
                      />
                    ) : (
                      <p className="text-muted-foreground">
                        Passionate football analyst with 8+ years of experience in sports data analytics and AI model development. Specialized in tactical analysis, player performance evaluation, and predictive modeling for professional football teams.
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5" />
                      <span>Achievements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg">
                          <div className="flex items-start space-x-3">
                            <Star className="h-5 w-5 text-warning mt-1" />
                            <div>
                              <h4 className="font-medium">{achievement.title}</h4>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5" />
                      <span>Skills & Expertise</span>
                    </CardTitle>
                    <CardDescription>
                      Your areas of expertise and skill levels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart className="h-5 w-5" />
                      <span>Work Samples</span>
                    </CardTitle>
                    <CardDescription>
                      Showcase of your analysis work and AI models
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {workSamples.map((sample, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{sample.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{sample.description}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{sample.type}</Badge>
                              <span className="text-xs text-muted-foreground">{sample.date}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="h-5 w-5" />
                      <span>Account Settings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Carlos" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Martinez" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="carlos.martinez@sportoai.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">
                      Update Information
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}