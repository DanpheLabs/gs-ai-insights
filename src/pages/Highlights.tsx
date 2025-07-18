import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout/Layout";
import { 
  PlayCircle, 
  Search, 
  Filter,
  Clock,
  Eye,
  Share,
  Download,
  Target,
  Flag,
  Zap,
  Trophy,
  Calendar,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

export default function Highlights() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Highlights", icon: PlayCircle, count: 256 },
    { id: "goals", name: "Goals", icon: Target, count: 89 },
    { id: "assists", name: "Assists", icon: Zap, count: 67 },
    { id: "corners", name: "Corners", icon: Flag, count: 34 },
    { id: "freekicks", name: "Free Kicks", icon: Target, count: 28 },
    { id: "penalties", name: "Penalties", icon: Trophy, count: 15 },
    { id: "saves", name: "Great Saves", icon: Target, count: 23 }
  ];

  const highlights = [
    {
      id: 1,
      title: "Stunning Goal - Arsenal vs Chelsea",
      category: "goals",
      thumbnail: "/api/placeholder/320/180",
      duration: "0:45",
      views: "2.1K",
      date: "2 hours ago",
      description: "Incredible long-range strike from midfield",
      tags: ["Premier League", "Arsenal", "Goal of the Month"],
      insights: {
        speed: "28.4 km/h",
        distance: "35 meters",
        accuracy: "Top corner"
      }
    },
    {
      id: 2,
      title: "Perfect Assist - De Bruyne Magic",
      category: "assists",
      thumbnail: "/api/placeholder/320/180",
      duration: "0:32",
      views: "1.8K",
      date: "4 hours ago",
      description: "Pinpoint cross leads to easy tap-in",
      tags: ["Manchester City", "Assist", "Precision"],
      insights: {
        speed: "45.2 km/h",
        accuracy: "98% pass accuracy",
        technique: "Outside foot"
      }
    },
    {
      id: 3,
      title: "Corner Kick Masterclass",
      category: "corners",
      thumbnail: "/api/placeholder/320/180",
      duration: "0:28",
      views: "945",
      date: "6 hours ago",
      description: "Tactical corner routine results in goal",
      tags: ["Set Piece", "Tactical", "Corner"],
      insights: {
        height: "2.8 meters",
        timing: "Perfect",
        players: "4 involved"
      }
    },
    {
      id: 4,
      title: "Free Kick Excellence",
      category: "freekicks",
      thumbnail: "/api/placeholder/320/180",
      duration: "0:38",
      views: "3.2K",
      date: "1 day ago",
      description: "Curved shot beats goalkeeper",
      tags: ["Free Kick", "Technique", "Goal"],
      insights: {
        curve: "2.3m deviation",
        speed: "87 km/h",
        placement: "Top corner"
      }
    },
    {
      id: 5,
      title: "Penalty Under Pressure",
      category: "penalties",
      thumbnail: "/api/placeholder/320/180",
      duration: "0:25",
      views: "1.5K",
      date: "1 day ago",
      description: "Cool finish in crucial moment",
      tags: ["Penalty", "Pressure", "Clutch"],
      insights: {
        pressure: "High",
        placement: "Bottom left",
        technique: "Confident"
      }
    },
    {
      id: 6,
      title: "Goalkeeper Wonder Save",
      category: "saves",
      thumbnail: "/api/placeholder/320/180",
      duration: "0:18",
      views: "2.7K",
      date: "2 days ago",
      description: "Acrobatic save denies certain goal",
      tags: ["Save", "Reflexes", "Goalkeeper"],
      insights: {
        reaction: "0.2 seconds",
        dive: "Full stretch",
        difficulty: "Extreme"
      }
    }
  ];

  const filteredHighlights = highlights.filter(highlight => {
    const matchesSearch = highlight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         highlight.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || highlight.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : PlayCircle;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">Football Highlights</h1>
            <p className="text-muted-foreground">AI-generated highlights and set-piece analysis</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="gradient">
              <PlayCircle className="h-4 w-4 mr-2" />
              Generate New
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search highlights by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
                <CardDescription>Browse highlights by type</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isSelected = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          isSelected 
                            ? "bg-primary text-primary-foreground" 
                            : "hover:bg-accent"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <Badge variant={isSelected ? "secondary" : "outline"} className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {selectedCategory === "all" ? "All Highlights" : 
                 categories.find(cat => cat.id === selectedCategory)?.name} 
                <span className="text-muted-foreground ml-2">({filteredHighlights.length})</span>
              </h2>
              <select className="px-3 py-2 border border-border rounded-md text-sm">
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="duration">By Duration</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredHighlights.map((highlight) => {
                const CategoryIcon = getCategoryIcon(highlight.category);
                return (
                  <Card key={highlight.id} className="sports-card overflow-hidden">
                    {/* Thumbnail */}
                    <div className="relative">
                      <div className="w-full h-48 bg-muted flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="icon" className="rounded-full">
                          <PlayCircle className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                        {highlight.duration}
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="text-xs">
                          <CategoryIcon className="h-3 w-3 mr-1" />
                          {categories.find(cat => cat.id === highlight.category)?.name}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {highlight.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {highlight.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {highlight.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{highlight.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      {/* Insights */}
                      <div className="bg-accent/50 rounded-lg p-3 mb-3">
                        <h4 className="text-xs font-medium mb-2 text-muted-foreground">AI Insights</h4>
                        <div className="space-y-1">
                          {Object.entries(highlight.insights).map(([key, value], index) => (
                            <div key={index} className="flex justify-between text-xs">
                              <span className="capitalize">{key}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{highlight.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{highlight.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Watch
                        </Button>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon">
                            <Share className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Load More */}
            {filteredHighlights.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline">
                  Load More Highlights
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredHighlights.length === 0 && (
              <div className="text-center py-12">
                <PlayCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No highlights found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}