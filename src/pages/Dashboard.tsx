import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, ShoppingBag, Camera, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const stats = [
    { label: "Items Classified", value: "142", icon: Camera, color: "text-primary" },
    { label: "Marketplace Listings", value: "8", icon: ShoppingBag, color: "text-accent" },
    { label: "CO₂ Saved (kg)", value: "23.5", icon: Leaf, color: "text-primary" },
    { label: "Impact Score", value: "89", icon: TrendingUp, color: "text-accent" },
  ];

  const recentActivity = [
    { action: "Classified", item: "Plastic Bottle", type: "Non-Biodegradable", time: "2 hours ago" },
    { action: "Listed", item: "MacBook Pro 2018", type: "Marketplace", time: "1 day ago" },
    { action: "Classified", item: "Food Waste", type: "Biodegradable", time: "2 days ago" },
    { action: "Sold", item: "iPhone 11", type: "Marketplace", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Track your environmental impact and activity</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-muted rounded-2xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 p-6">
            <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {activity.action === "Classified" ? (
                        <Camera className="h-5 w-5 text-primary" />
                      ) : (
                        <ShoppingBag className="h-5 w-5 text-accent" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{activity.action}: {activity.item}</p>
                      <p className="text-sm text-muted-foreground">{activity.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Button className="w-full justify-start gap-3" variant="outline">
                <Camera className="h-5 w-5" />
                Classify New Item
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <ShoppingBag className="h-5 w-5" />
                Create Listing
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline">
                <BarChart3 className="h-5 w-5" />
                View Analytics
              </Button>
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Eco Impact</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                You've helped divert 23.5kg of waste from landfills this month!
              </p>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }} />
              </div>
              <p className="text-xs text-muted-foreground mt-2">72% towards monthly goal</p>
            </div>
          </Card>
        </div>

        {/* Classification Breakdown */}
        <Card className="mt-8 p-6">
          <h2 className="text-2xl font-semibold mb-6">Waste Classification Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Leaf className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Biodegradable</span>
                </div>
                <span className="text-2xl font-bold">68</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: "48%" }} />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-destructive">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </div>
                  <span className="font-medium">Non-Biodegradable</span>
                </div>
                <span className="text-2xl font-bold">74</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-destructive h-3 rounded-full" style={{ width: "52%" }} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
