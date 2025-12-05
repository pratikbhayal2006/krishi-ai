import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FarmData } from "@/components/FarmInputForm";
import { CropRecommendation, ClimateData } from "@/data/cropRecommendations";
import {
  ArrowLeft,
  Thermometer,
  Droplets,
  CloudRain,
  Calendar,
  TrendingUp,
  IndianRupee,
  RefreshCw,
  Lightbulb,
  MapPin,
  Layers,
} from "lucide-react";

interface RecommendationDashboardProps {
  farmData: FarmData;
  climate: ClimateData;
  recommendations: CropRecommendation[];
  onBack: () => void;
  onStartOver: () => void;
}

export const RecommendationDashboard = ({
  farmData,
  climate,
  recommendations,
  onBack,
  onStartOver,
}: RecommendationDashboardProps) => {
  const topRecommendation = recommendations[0];

  return (
    <section className="min-h-screen py-8 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-fade-in">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Your Crop Recommendations
            </h2>
            <p className="text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {farmData.village && `${farmData.village}, `}
              {farmData.tehsil && `${farmData.tehsil}, `}
              {farmData.district}, {farmData.state}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Edit Details
            </Button>
            <Button variant="glass" onClick={onStartOver}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Start Over
            </Button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Top Recommendation */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Recommendation Card */}
            <Card className="glass-card p-6 animate-scale-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl">{topRecommendation.image}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Best Match
                    </Badge>
                    <Badge variant="outline">{topRecommendation.season}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {topRecommendation.name}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {topRecommendation.nameHindi}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    {topRecommendation.suitabilityScore}%
                  </div>
                  <p className="text-sm text-muted-foreground">Match Score</p>
                </div>
              </div>

              <Progress value={topRecommendation.suitabilityScore} className="h-2 mb-6" />

              {/* Price Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <IndianRupee className="w-4 h-4" />
                    <span className="text-sm font-medium">MSP (Govt. Price)</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    ₹{topRecommendation.msp.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground">/quintal</span>
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <div className="flex items-center gap-2 text-secondary mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">Expected Market Price</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    ₹{topRecommendation.expectedPrice.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground">/quintal</span>
                  </p>
                </div>
              </div>

              {/* Crop Details */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <Calendar className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                  <p className="text-sm font-medium">{topRecommendation.duration}</p>
                  <p className="text-xs text-muted-foreground">Duration</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <Droplets className="w-5 h-5 mx-auto mb-1 text-water-blue" />
                  <p className="text-sm font-medium">{topRecommendation.waterRequirement}</p>
                  <p className="text-xs text-muted-foreground">Water Need</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <Layers className="w-5 h-5 mx-auto mb-1 text-soil-brown" />
                  <p className="text-sm font-medium capitalize">{farmData.soilType}</p>
                  <p className="text-xs text-muted-foreground">Your Soil</p>
                </div>
              </div>

              {/* Rotation Notes */}
              <div className="p-4 rounded-xl bg-leaf-green/10 border border-leaf-green/20">
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 text-leaf-green mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Crop Rotation Advice</p>
                    <p className="text-sm text-muted-foreground">
                      {topRecommendation.rotationNotes}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-sun-yellow" />
                  <h4 className="font-semibold">Growing Tips</h4>
                </div>
                <ul className="space-y-2">
                  {topRecommendation.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Other Recommendations */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Other Suitable Crops</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {recommendations.slice(1).map((crop, index) => (
                  <Card
                    key={crop.name}
                    className="glass-card p-4 animate-fade-in"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{crop.image}</span>
                      <div>
                        <h4 className="font-semibold">{crop.name}</h4>
                        <p className="text-xs text-muted-foreground">{crop.nameHindi}</p>
                      </div>
                    </div>
                    <Progress value={crop.suitabilityScore} className="h-1.5 mb-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{crop.suitabilityScore}% match</span>
                      <span className="text-primary font-medium">₹{crop.msp}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Climate & Summary */}
          <div className="space-y-6">
            {/* Climate Card */}
            <Card className="glass-card p-6 animate-slide-in-left">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CloudRain className="w-5 h-5 text-accent" />
                Climate Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-crop-orange" />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className="font-semibold">{climate.temperature}°C</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-water-blue" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <span className="font-semibold">{climate.humidity}%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <CloudRain className="w-5 h-5 text-accent" />
                    <span className="text-sm">Rainfall (avg)</span>
                  </div>
                  <span className="font-semibold">{climate.rainfall} mm</span>
                </div>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Current Season</span>
                    <Badge variant="secondary">{climate.season}</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Farm Summary Card */}
            <Card className="glass-card p-6 animate-slide-in-left" style={{ animationDelay: "100ms" }}>
              <h3 className="text-lg font-semibold mb-4">Your Farm Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Soil Type</span>
                  <span className="font-medium capitalize">{farmData.soilType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Soil pH</span>
                  <span className="font-medium">{farmData.soilPh.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Irrigation</span>
                  <span className="font-medium capitalize">{farmData.irrigationType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Previous Crop</span>
                  <span className="font-medium capitalize">{farmData.previousCrop}</span>
                </div>
                {farmData.cultivationDate && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sowing Date</span>
                    <span className="font-medium">
                      {farmData.cultivationDate.toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                )}
              </div>
            </Card>

            {/* Disclaimer */}
            <Card className="p-4 bg-muted/30 border-muted animate-slide-in-left" style={{ animationDelay: "200ms" }}>
              <p className="text-xs text-muted-foreground">
                <strong>Disclaimer:</strong> These recommendations are based on general agricultural guidelines and the information you provided. Actual results may vary based on local conditions. Please consult with local agricultural officers for specific advice.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
