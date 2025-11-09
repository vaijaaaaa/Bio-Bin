import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, RotateCcw, Leaf, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

type Classification = {
  item: string;
  type: "biodegradable" | "non-biodegradable";
  confidence: number;
};

const Classifier = () => {
  const [classification, setClassification] = useState<Classification | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment" } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      }
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const classifyWaste = async () => {
    setIsProcessing(true);
    
    // Simulated AI classification - in production, this would call an AI model
    setTimeout(() => {
      const items = [
        { item: "Plastic Bottle", type: "non-biodegradable" as const, confidence: 94 },
        { item: "Banana Peel", type: "biodegradable" as const, confidence: 98 },
        { item: "Paper", type: "biodegradable" as const, confidence: 92 },
        { item: "Glass Jar", type: "non-biodegradable" as const, confidence: 96 },
        { item: "Food Waste", type: "biodegradable" as const, confidence: 99 },
      ];
      
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setClassification(randomItem);
      setIsProcessing(false);
      
      toast({
        title: "Classification Complete",
        description: `Identified: ${randomItem.item}`,
      });
    }, 2000);
  };

  const reset = () => {
    setClassification(null);
    stopCamera();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Waste Classifier
          </h1>
          <p className="text-lg text-muted-foreground">
            Point your camera at waste items to get instant classification
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Camera Section */}
          <Card className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Camera View</h2>
            
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden relative">
              {stream ? (
                <video 
                  ref={videoRef}
                  autoPlay 
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Camera className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Camera inactive</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              {!stream ? (
                <Button onClick={startCamera} className="flex-1 gap-2">
                  <Camera className="h-5 w-5" />
                  Start Camera
                </Button>
              ) : (
                <>
                  <Button 
                    onClick={classifyWaste} 
                    className="flex-1 gap-2"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Classify Waste"}
                  </Button>
                  <Button onClick={stopCamera} variant="outline">
                    Stop
                  </Button>
                </>
              )}
            </div>
          </Card>

          {/* Results Section */}
          <Card className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Classification Result</h2>
            
            {classification ? (
              <div className="space-y-6">
                <div className="p-6 bg-muted rounded-2xl space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{classification.item}</h3>
                      <p className="text-sm text-muted-foreground">
                        Confidence: {classification.confidence}%
                      </p>
                    </div>
                    {classification.type === "biodegradable" ? (
                      <Leaf className="h-8 w-8 text-primary" />
                    ) : (
                      <Trash2 className="h-8 w-8 text-destructive" />
                    )}
                  </div>
                  
                  <Badge 
                    variant={classification.type === "biodegradable" ? "default" : "destructive"}
                    className="text-base px-4 py-1"
                  >
                    {classification.type === "biodegradable" ? "Biodegradable" : "Non-Biodegradable"}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Disposal Guidelines:</h4>
                  {classification.type === "biodegradable" ? (
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Can be composted</li>
                      <li>• Decomposes naturally</li>
                      <li>• Safe for organic waste bins</li>
                    </ul>
                  ) : (
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Requires special disposal</li>
                      <li>• Consider recycling options</li>
                      <li>• Check local e-waste facilities</li>
                    </ul>
                  )}
                </div>

                <Button onClick={reset} variant="outline" className="w-full gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Classify Another Item
                </Button>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center py-12">
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    No classification yet. Start your camera and classify an item.
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="p-6 border-primary/20 bg-primary/5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Biodegradable Waste</h3>
                <p className="text-sm text-muted-foreground">
                  Organic materials that decompose naturally. Examples include food scraps, paper, and plant matter.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-destructive/20 bg-destructive/5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-destructive/10 rounded-2xl">
                <Trash2 className="h-6 w-6 text-destructive" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Non-Biodegradable Waste</h3>
                <p className="text-sm text-muted-foreground">
                  Materials that don't decompose naturally. Includes plastics, metals, glass, and electronic waste.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const BarChart3 = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3v18h18"/>
    <path d="M18 17V9"/>
    <path d="M13 17V5"/>
    <path d="M8 17v-3"/>
  </svg>
);

export default Classifier;
