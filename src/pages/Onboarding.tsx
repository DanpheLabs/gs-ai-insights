import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Users, 
  Target, 
  Trophy,
  ChevronRight,
  ChevronLeft,
  Upload,
  Check,
  Play,
  BarChart3,
  Settings
} from "lucide-react";
import { useState } from "react";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    interests: [] as string[],
    goals: [] as string[],
    teamName: "",
    bio: ""
  });

  const totalSteps = 5;

  const roles = [
    { id: "coach", name: "Coach", icon: Users, description: "Lead teams and analyze performance" },
    { id: "analyst", name: "Sports Analyst", icon: BarChart3, description: "Deep dive into match statistics" },
    { id: "developer", name: "AI Developer", icon: Settings, description: "Build and train AI models" },
    { id: "player", name: "Player", icon: User, description: "Track personal performance" }
  ];

  const experienceLevels = [
    { id: "beginner", name: "Beginner", description: "New to sports analytics" },
    { id: "intermediate", name: "Intermediate", description: "Some experience with data analysis" },
    { id: "advanced", name: "Advanced", description: "Experienced professional" },
    { id: "expert", name: "Expert", description: "Industry leader/specialist" }
  ];

  const interests = [
    "Tactical Analysis", "Player Performance", "Team Statistics", 
    "Video Analysis", "AI Model Development", "Match Prediction",
    "Set Piece Analysis", "Defensive Patterns", "Attacking Strategies"
  ];

  const goals = [
    "Improve Team Performance", "Develop AI Models", "Generate Match Reports",
    "Create Training Programs", "Analyze Opponent Tactics", "Track Player Development",
    "Build Analytics Dashboard", "Predict Match Outcomes", "Optimize Formations"
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <Trophy className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">Sporto AI</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to the Future of Sports Analytics</h1>
          <p className="text-muted-foreground">Let's personalize your experience in just a few steps</p>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Step Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            {/* Step 1: Role Selection */}
            {currentStep === 1 && (
              <div>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>What's your role in sports?</span>
                  </CardTitle>
                  <CardDescription>
                    This helps us customize your dashboard and features
                  </CardDescription>
                </CardHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    const isSelected = formData.role === role.id;
                    return (
                      <div
                        key={role.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          isSelected 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:bg-accent"
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, role: role.id }))}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">{role.name}</h3>
                            <p className="text-sm text-muted-foreground">{role.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Experience Level */}
            {currentStep === 2 && (
              <div>
                <CardHeader className="px-0 pt-0">
                  <CardTitle>What's your experience level?</CardTitle>
                  <CardDescription>
                    Help us tailor the complexity of features and recommendations
                  </CardDescription>
                </CardHeader>
                <div className="space-y-3">
                  {experienceLevels.map((level) => {
                    const isSelected = formData.experience === level.id;
                    return (
                      <div
                        key={level.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          isSelected 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:bg-accent"
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, experience: level.id }))}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{level.name}</h3>
                            <p className="text-sm text-muted-foreground">{level.description}</p>
                          </div>
                          {isSelected && (
                            <Check className="h-5 w-5 text-primary" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Interests */}
            {currentStep === 3 && (
              <div>
                <CardHeader className="px-0 pt-0">
                  <CardTitle>What interests you most?</CardTitle>
                  <CardDescription>
                    Select the areas you'd like to focus on (choose multiple)
                  </CardDescription>
                </CardHeader>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => {
                    const isSelected = formData.interests.includes(interest);
                    return (
                      <Badge
                        key={interest}
                        variant={isSelected ? "default" : "outline"}
                        className="p-3 cursor-pointer hover:scale-105 transition-transform text-center justify-center"
                        onClick={() => handleInterestToggle(interest)}
                      >
                        {interest}
                      </Badge>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Selected: {formData.interests.length} interests
                </p>
              </div>
            )}

            {/* Step 4: Goals */}
            {currentStep === 4 && (
              <div>
                <CardHeader className="px-0 pt-0">
                  <CardTitle>What are your main goals?</CardTitle>
                  <CardDescription>
                    What do you hope to achieve with Sporto AI?
                  </CardDescription>
                </CardHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {goals.map((goal) => {
                    const isSelected = formData.goals.includes(goal);
                    return (
                      <div
                        key={goal}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors text-center ${
                          isSelected 
                            ? "border-primary bg-primary/5 text-primary" 
                            : "border-border hover:bg-accent"
                        }`}
                        onClick={() => handleGoalToggle(goal)}
                      >
                        <span className="text-sm font-medium">{goal}</span>
                        {isSelected && (
                          <Check className="h-4 w-4 mx-auto mt-1" />
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Selected: {formData.goals.length} goals
                </p>
              </div>
            )}

            {/* Step 5: Profile Setup */}
            {currentStep === 5 && (
              <div>
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Complete your profile</CardTitle>
                  <CardDescription>
                    Final step to personalize your Sporto AI experience
                  </CardDescription>
                </CardHeader>
                <div className="space-y-6">
                  {/* Avatar Upload */}
                  <div className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src="" />
                      <AvatarFallback>
                        <User className="h-12 w-12" />
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Photo
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamName">Team/Organization (Optional)</Label>
                    <Input 
                      id="teamName" 
                      placeholder="e.g., Arsenal FC, Manchester United"
                      value={formData.teamName}
                      onChange={(e) => setFormData(prev => ({ ...prev, teamName: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio (Optional)</Label>
                    <Textarea 
                      id="bio"
                      placeholder="Tell us a bit about yourself and your experience..."
                      value={formData.bio}
                      onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                      className="min-h-20"
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button 
              onClick={nextStep}
              variant="gradient"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button 
              variant="gradient"
              asChild
            >
              <a href="/dashboard">
                <Play className="h-4 w-4 mr-2" />
                Get Started
              </a>
            </Button>
          )}
        </div>

        {/* Summary Card (shown on last step) */}
        {currentStep === 5 && (
          <Card className="mt-8 bg-accent/50">
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Your Profile Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Role:</span>
                  <span className="ml-2 font-medium">
                    {roles.find(r => r.id === formData.role)?.name || "Not selected"}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="ml-2 font-medium">
                    {experienceLevels.find(e => e.id === formData.experience)?.name || "Not selected"}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Interests:</span>
                  <span className="ml-2 font-medium">{formData.interests.length} selected</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Goals:</span>
                  <span className="ml-2 font-medium">{formData.goals.length} selected</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}