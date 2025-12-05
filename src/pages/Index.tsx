import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { HeroSection } from "@/components/HeroSection";
import { FarmInputForm, FarmData } from "@/components/FarmInputForm";
import { RecommendationDashboard } from "@/components/RecommendationDashboard";
import { getClimateData, getCropRecommendations, ClimateData, CropRecommendation } from "@/data/cropRecommendations";

type AppState = "hero" | "form" | "results";

const AppContent = () => {
  const [appState, setAppState] = useState<AppState>("hero");
  const { language, setLanguage } = useLanguage();
  const [farmData, setFarmData] = useState<FarmData | null>(null);
  const [climate, setClimate] = useState<ClimateData | null>(null);
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([]);

  const handleGetStarted = () => {
    setAppState("form");
  };

  const handleFormSubmit = (data: FarmData) => {
    setFarmData(data);
    
    const month = data.cultivationDate?.getMonth() ?? new Date().getMonth();
    const climateData = getClimateData(data.state, month + 1);
    setClimate(climateData);
    
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

const Index = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default Index;
