import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, ShoppingBag, BarChart3, Leaf, Recycle, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroBg from "@/assets/hero-bg.jpg";
import aiClassifier from "@/assets/ai-classifier.jpg";
import marketplace from "@/assets/marketplace.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Smart Waste Management</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Detect. Classify. Recycle.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Harness the power of AI to sort waste intelligently and discover a marketplace for sustainable e-waste solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/classifier">
                <Button size="lg" className="gap-2">
                  <Camera className="h-5 w-5" />
                  Try Classifier
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Join Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Waste Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining AI technology with community-driven sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Classifier Feature */}
            <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={aiClassifier} 
                  alt="AI Waste Classifier" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">AI Waste Classifier</h3>
                </div>
                <p className="text-muted-foreground">
                  Use your camera to instantly identify and classify waste items. Our AI detects whether items are biodegradable or non-biodegradable with high accuracy.
                </p>
                <Link to="/classifier">
                  <Button className="w-full">
                    Try Now
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Marketplace Feature */}
            <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={marketplace} 
                  alt="E-Waste Marketplace" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-2xl">
                    <ShoppingBag className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">E-Waste Marketplace</h3>
                </div>
                <p className="text-muted-foreground">
                  Buy, sell, or donate electronic waste. Connect with others to give your old devices a second life and reduce environmental impact.
                </p>
                <Link to="/marketplace">
                  <Button variant="outline" className="w-full">
                    Browse Listings
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How EcoSort Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">1. Scan Waste</h3>
              <p className="text-muted-foreground">
                Point your camera at any waste item to start the classification process
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">2. Get Classification</h3>
              <p className="text-muted-foreground">
                Receive instant AI-powered classification results with confidence scores
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">3. Take Action</h3>
              <p className="text-muted-foreground">
                Dispose properly or list e-waste items on our marketplace for reuse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg opacity-90">
            Join thousands of users contributing to a cleaner, more sustainable future through smart waste management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/auth">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
            </Link>
            <Link to="/classifier">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
