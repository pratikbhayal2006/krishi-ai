import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FarmInputForm, FarmData } from "@/components/FarmInputForm";
import { RecommendationDashboard } from "@/components/RecommendationDashboard";
import { getClimateData, getCropRecommendations, ClimateData, CropRecommendation } from "@/data/cropRecommendations";

type AppState = "hero" | "form" | "results";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("hero");
  const [language, setLanguage] = useState("en");
  const [farmData, setFarmData] = useState<FarmData | null>(null);
  const [climate, setClimate] = useState<ClimateData | null>(null);
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([]);

  const handleGetStarted = () => {
    setAppState("form");
  };

  const handleFormSubmit = (data: FarmData) => {
    setFarmData(data);
    
    // Get climate data based on location and date
    const month = data.cultivationDate?.getMonth() ?? new Date().getMonth();
    const climateData = getClimateData(data.state, month + 1);
    setClimate(climateData);
    
    // Get crop recommendations
    const crops = getCropRecommendations(
      data.soilType,
      data.soilPh,
      data.irrigationType,
      data.previousCrop,
      climateData
    );
    setRecommendations(crops);
    
    setAppState("results");
  };

  const handleBackToForm = () => {
    setAppState("form");
  };

  const handleStartOver = () => {
    setFarmData(null);
    setClimate(null);
    setRecommendations([]);
    setAppState("hero");
  };

  return (
    <main className="min-h-screen bg-background">
      {appState === "hero" && (
        <HeroSection
          language={language}
          onLanguageChange={setLanguage}
          onGetStarted={handleGetStarted}
        />
      )}
      
      {appState === "form" && (
        <FarmInputForm
          onSubmit={handleFormSubmit}
          onBack={handleStartOver}
        />
      )}
      
      {appState === "results" && farmData && climate && (
        <RecommendationDashboard
          farmData={farmData}
          climate={climate}
          recommendations={recommendations}
          onBack={handleBackToForm}
          onStartOver={handleStartOver}
        />
      )}
    </main>
  );
};

export default Index;
