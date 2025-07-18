import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Layout } from "@/components/layout/Layout";
import { 
  Upload as UploadIcon, 
  FileVideo, 
  Image,
  Database,
  CheckCircle,
  Clock,
  AlertCircle,
  X,
  Play,
  Settings,
  Target,
  Zap,
  BarChart3
} from "lucide-react";
import { useState } from "react";

export default function Upload() {
  const [selectedAnalysisTypes, setSelectedAnalysisTypes] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});

  const analysisTypes = [
    {
      id: "team-performance",
      name: "Team Performance Analysis",
      description: "Analyze team tactics, formations, and overall performance",
      icon: Target,
      estimatedTime: "15-20 minutes"
    },
    {
      id: "player-trends",
      name: "Player Trend Analysis", 
      description: "Track individual player statistics and performance trends",
      icon: BarChart3,
      estimatedTime: "10-15 minutes"
    },
    {
      id: "highlight-generation",
      name: "Highlight Generation",
      description: "Auto-generate highlights for goals, assists, and key moments",
      icon: Zap,
      estimatedTime: "5-10 minutes"
    }
  ];

  const uploadedFiles = [
    {
      name: "Match_Arsenal_vs_Chelsea.mp4",
      size: "2.1 GB",
      status: "processing",
      progress: 75,
      analysisType: "Team Performance",
      estimatedCompletion: "5 minutes"
    },
    {
      name: "Training_Session_Dec15.mp4", 
      size: "1.8 GB",
      status: "completed",
      progress: 100,
      analysisType: "Player Trends",
      estimatedCompletion: "Completed"
    },
    {
      name: "Highlights_LastMatch.mp4",
      size: "0.8 GB", 
      status: "queued",
      progress: 0,
      analysisType: "Highlight Generation",
      estimatedCompletion: "Queued"
    }
  ];

  const handleAnalysisTypeToggle = (typeId: string) => {
    setSelectedAnalysisTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "processing":
        return <Clock className="h-4 w-4 text-warning" />;
      case "queued":
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <CheckCircle className="h-4 w-4 text-success" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: any } = {
      completed: "default",
      processing: "secondary", 
      queued: "outline",
      error: "destructive"
    };
    return variants[status] || "secondary";
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Upload & Analysis</h1>
            <p className="text-muted-foreground">Upload match videos and configure AI analysis</p>
          </div>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Upload Settings
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileVideo className="h-5 w-5" />
                  <span>Upload Match Video</span>
                </CardTitle>
                <CardDescription>
                  Upload your match footage for AI-powered analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Drag & Drop Area */}
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:bg-accent/50 transition-colors">
                  <UploadIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Drop your video files here</h3>
                  <p className="text-muted-foreground mb-4">
                    or click to browse files
                  </p>
                  <Button variant="outline" className="mb-2">
                    Choose Files
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Supported formats: MP4, MOV, AVI (Max size: 10GB)
                  </p>
                </div>

                {/* Match Metadata */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="match-title">Match Title</Label>
                    <Input 
                      id="match-title" 
                      placeholder="e.g., Arsenal vs Chelsea"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="match-date">Match Date</Label>
                    <Input 
                      id="match-date" 
                      type="date"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="league">League/Competition</Label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option>Premier League</option>
                      <option>Champions League</option>
                      <option>FA Cup</option>
                      <option>EFL Cup</option>
                      <option>International</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="season">Season</Label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option>2024-25</option>
                      <option>2023-24</option>
                      <option>2022-23</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="match-notes">Additional Notes</Label>
                  <Textarea 
                    id="match-notes"
                    placeholder="Any specific notes about this match, key events, or analysis focus areas..."
                    className="min-h-20"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Analysis Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Analysis Configuration</span>
                </CardTitle>
                <CardDescription>
                  Choose the type of analysis to perform on your video
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analysisTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedAnalysisTypes.includes(type.id);
                    return (
                      <div
                        key={type.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          isSelected 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:bg-accent"
                        }`}
                        onClick={() => handleAnalysisTypeToggle(type.id)}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-2 rounded-lg ${
                            isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium">{type.name}</h3>
                              <Badge variant={isSelected ? "default" : "outline"}>
                                {type.estimatedTime}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-medium mb-2">Selected Analysis Types</h4>
                  {selectedAnalysisTypes.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedAnalysisTypes.map(typeId => {
                        const type = analysisTypes.find(t => t.id === typeId);
                        return (
                          <Badge key={typeId} variant="secondary">
                            {type?.name}
                          </Badge>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No analysis types selected
                    </p>
                  )}
                </div>

                <Button 
                  className="w-full mt-6" 
                  variant="gradient"
                  disabled={selectedAnalysisTypes.length === 0}
                >
                  <UploadIcon className="h-4 w-4 mr-2" />
                  Start Upload & Analysis
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Queue & Status */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Processing Queue</span>
                </CardTitle>
                <CardDescription>
                  Track your uploads and analysis progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(file.status)}
                        <div>
                          <p className="font-medium text-sm truncate max-w-32">
                            {file.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {file.size}
                          </p>
                        </div>
                      </div>
                      <Badge variant={getStatusBadge(file.status)} className="text-xs">
                        {file.status}
                      </Badge>
                    </div>

                    {file.status === "processing" && (
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Processing...</span>
                          <span>{file.progress}%</span>
                        </div>
                        <Progress value={file.progress} className="h-2" />
                      </div>
                    )}

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Analysis:</span>
                        <span>{file.analysisType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ETA:</span>
                        <span>{file.estimatedCompletion}</span>
                      </div>
                    </div>

                    <div className="flex justify-between mt-3">
                      {file.status === "completed" && (
                        <Button variant="outline" size="sm" className="flex-1 mr-2">
                          <Play className="h-3 w-3 mr-1" />
                          View Results
                        </Button>
                      )}
                      <Button variant="ghost" size="icon">
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}

                {uploadedFiles.length === 0 && (
                  <div className="text-center py-8">
                    <FileVideo className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground">
                      No uploads in queue
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Upload Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Uploads</span>
                  <span className="font-medium">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Data Processed</span>
                  <span className="font-medium">156 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Analysis Time</span>
                  <span className="font-medium">23.5 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                  <span className="font-medium text-success">98.7%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}