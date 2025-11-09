import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";

const listings = [
  {
    id: 1,
    title: "MacBook Pro 2018",
    category: "Laptop",
    condition: "Good",
    price: 450,
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
  },
  {
    id: 2,
    title: "iPhone 11",
    category: "Smartphone",
    condition: "Excellent",
    price: 320,
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1592286927505-ed78a58b8bc5?w=400"
  },
  {
    id: 3,
    title: "Dell Monitor 27\"",
    category: "Monitor",
    condition: "Like New",
    price: 180,
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400"
  },
  {
    id: 4,
    title: "iPad Air 2020",
    category: "Tablet",
    condition: "Good",
    price: 380,
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"
  },
  {
    id: 5,
    title: "Gaming Keyboard",
    category: "Accessories",
    condition: "Excellent",
    price: 75,
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
  },
  {
    id: 6,
    title: "Wireless Mouse",
    category: "Accessories",
    condition: "Like New",
    price: 35,
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
  }
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            E-Waste Marketplace
          </h1>
          <p className="text-lg text-muted-foreground">
            Buy, sell, or donate electronic waste to reduce environmental impact
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for items..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              Filter by Category
            </Button>
            <Button>
              Post Listing
            </Button>
          </div>
        </Card>

        {/* Listings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg">{listing.title}</h3>
                    <Badge variant="secondary">{listing.category}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {listing.location}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-primary">{listing.price}</span>
                  </div>
                  <Badge variant="outline">{listing.condition}</Badge>
                </div>

                <Button className="w-full">
                  Contact Seller
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Fair Pricing</h3>
            <p className="text-sm text-muted-foreground">
              Get the best value for your used electronics
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mx-auto w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Local Connections</h3>
            <p className="text-sm text-muted-foreground">
              Find buyers and sellers in your area
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Eco-Friendly</h3>
            <p className="text-sm text-muted-foreground">
              Reduce waste and support sustainability
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
