import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Layout } from "@/components/layout/Layout";
import { 
  Upload, 
  Database, 
  Brain, 
  BarChart3,
  Settings,
  FileVideo,
  Image,
  Download,
  Trash2,
  Play,
  Pause,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Activity
} from "lucide-react";

export default function AdminPanel() {
  const models = [
    {
      name: "Defensive Pattern Recognition",
      status: "active",
      accuracy: 94.2,
      lastTrained: "2 days ago",
      version: "v2.1"
    },
    {
      name: "Player Movement Analysis",
      status: "training",
      accuracy: 87.5,
      lastTrained: "Training...",
      version: "v1.8"
    },
    {
      name: "Goal Scoring Prediction",
      status: "active",
      accuracy: 91.8,
      lastTrained: "1 week ago",
      version: "v3.0"
    },
    {
      name: "Tactical Formation Detection",
      status: "inactive",
      accuracy: 89.1,
      lastTrained: "2 weeks ago",
      version: "v1.5"
    }
  ];

  const datasets = [
    {
      name: "Premier League 2023-24",
      type: "COCO Format",
      size: "15.2 GB",
      annotations: "45,230",
      status: "processed"
    },
    {
      name: "Champions League Highlights",
      type: "Custom Format",
      size: "8.7 GB",
      annotations: "22,180",
      status: "processing"
    },
    {
      name: "Training Ground Sessions",
      type: "COCO Format",
      size: "23.4 GB",
      annotations: "67,892",
      status: "processed"
    }
  ];

  const recentUploads = [
    {
      name: "Match_Arsenal_vs_Chelsea.mp4",
      size: "2.1 GB",
      status: "completed",
      uploaded: "2 hours ago"
    },
    {
      name: "Training_Session_Dec15.mp4",
      size: "1.8 GB",
      status: "processing",
      uploaded: "4 hours ago"
    },
    {
      name: "Tactical_Analysis_Data.json",
      size: "45 MB",
      status: "completed",
      uploaded: "1 day ago"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "training":
        return <RefreshCw className="h-4 w-4 text-warning animate-spin" />;
      case "processing":
        return <Clock className="h-4 w-4 text-info" />;
      case "inactive":
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
      default:
        return <CheckCircle className="h-4 w-4 text-success" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: any } = {
      active: "default",
      training: "secondary",
      processing: "secondary",
      inactive: "outline",
      completed: "default",
      processed: "default"
    };
    return variants[status] || "secondary";
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="text-muted-foreground">Manage datasets, models, and analytics</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="gradient">
              <Upload className="h-4 w-4 mr-2" />
              Upload Data
            </Button>
          </div>
        </div>

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="models">AI Models</TabsTrigger>
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Video Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileVideo className="h-5 w-5" />
                    <span>Video Upload</span>
                  </CardTitle>
                  <CardDescription>
                    Upload match videos for analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drag and drop video files or click to browse
                    </p>
                    <Button variant="outline">
                      Choose Files
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="match-info">Match Information</Label>
                    <Input id="match-info" placeholder="e.g., Arsenal vs Chelsea - Premier League" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="match-date">Match Date</Label>
                    <Input id="match-date" type="date" />
                  </div>
                  <Button className="w-full">
                    Upload Video
                  </Button>
                </CardContent>
              </Card>

              {/* Dataset Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5" />
                    <span>Dataset Upload</span>
                  </CardTitle>
                  <CardDescription>
                    Upload annotated or raw datasets
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Image className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload COCO format or custom datasets
                    </p>
                    <Button variant="outline">
                      Choose Dataset
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dataset-name">Dataset Name</Label>
                    <Input id="dataset-name" placeholder="e.g., Premier League 2024" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dataset-format">Format</Label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option>COCO Format</option>
                      <option>Custom Format</option>
                      <option>YOLO Format</option>
                    </select>
                  </div>
                  <Button className="w-full">
                    Upload Dataset
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Uploads */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Uploads</CardTitle>
                <CardDescription>
                  Track your recent file uploads and processing status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUploads.map((upload, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(upload.status)}
                        <div>
                          <p className="font-medium">{upload.name}</p>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{upload.size}</span>
                            <span>•</span>
                            <span>{upload.uploaded}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getStatusBadge(upload.status)}>
                          {upload.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Models Tab */}
          <TabsContent value="models" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>AI Model Management</span>
                </CardTitle>
                <CardDescription>
                  Train, version, and manage your AI models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {models.map((model, index) => (
                    <div key={index} className="p-6 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(model.status)}
                          <div>
                            <h3 className="font-medium">{model.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {model.version} • {model.lastTrained}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={getStatusBadge(model.status)}>
                            {model.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            {model.status === "active" ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Accuracy</span>
                          <span>{model.accuracy}%</span>
                        </div>
                        <Progress value={model.accuracy} className="h-2" />
                      </div>
                      <div className="flex justify-between mt-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Retrain Model
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Datasets Tab */}
          <TabsContent value="datasets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>Dataset Management</span>
                </CardTitle>
                <CardDescription>
                  Version and manage your training datasets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {datasets.map((dataset, index) => (
                    <Card key={index} className="sports-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Database className="h-8 w-8 text-primary" />
                          <Badge variant={getStatusBadge(dataset.status)}>
                            {dataset.status}
                          </Badge>
                        </div>
                        <h3 className="font-medium mb-2">{dataset.name}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>Type: {dataset.type}</p>
                          <p>Size: {dataset.size}</p>
                          <p>Annotations: {dataset.annotations}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            Export
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Models</p>
                      <h3 className="text-2xl font-bold">23</h3>
                    </div>
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                      <h3 className="text-2xl font-bold">156</h3>
                    </div>
                    <Users className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Data Processed</p>
                      <h3 className="text-2xl font-bold">1.2TB</h3>
                    </div>
                    <Activity className="h-8 w-8 text-info" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Model Performance Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {models.map((model, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{model.name}</span>
                        <span className="text-muted-foreground">{model.accuracy}%</span>
                      </div>
                      <Progress value={model.accuracy} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Augmentation</CardTitle>
                  <CardDescription>
                    Enhance your datasets with augmentation tools
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    Image Augmentation
                  </Button>
                  <Button className="w-full" variant="outline">
                    Video Augmentation
                  </Button>
                  <Button className="w-full" variant="outline">
                    Annotation Tools
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Export & Integration</CardTitle>
                  <CardDescription>
                    Export data and integrate with external tools
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    Export to COCO
                  </Button>
                  <Button className="w-full" variant="outline">
                    Export to YOLO
                  </Button>
                  <Button className="w-full" variant="outline">
                    API Integration
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}