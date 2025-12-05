export interface CropRecommendation {
  name: string;
  nameHindi: string;
  image: string;
  msp: number;
  expectedPrice: number;
  season: string;
  duration: string;
  waterRequirement: string;
  suitabilityScore: number;
  rotationNotes: string;
  tips: string[];
}

export interface ClimateData {
  temperature: number;
  humidity: number;
  rainfall: number;
  season: string;
}

export const getClimateData = (state: string, month: number): ClimateData => {
  const seasons = {
    kharif: [6, 7, 8, 9, 10],
    rabi: [10, 11, 12, 1, 2, 3],
    zaid: [3, 4, 5, 6],
  };

  const currentSeason = seasons.kharif.includes(month)
    ? "Kharif"
    : seasons.rabi.includes(month)
    ? "Rabi"
    : "Zaid";

  const climateByState: Record<string, { temp: number; humidity: number; rainfall: number }> = {
    "Maharashtra": { temp: 28, humidity: 65, rainfall: 120 },
    "Punjab": { temp: 25, humidity: 55, rainfall: 80 },
    "Uttar Pradesh": { temp: 30, humidity: 60, rainfall: 90 },
    "Gujarat": { temp: 32, humidity: 50, rainfall: 60 },
    "Karnataka": { temp: 27, humidity: 70, rainfall: 150 },
    "Tamil Nadu": { temp: 30, humidity: 75, rainfall: 100 },
    "Rajasthan": { temp: 35, humidity: 40, rainfall: 40 },
    "Madhya Pradesh": { temp: 29, humidity: 55, rainfall: 100 },
    "West Bengal": { temp: 28, humidity: 80, rainfall: 180 },
    "Telangana": { temp: 31, humidity: 60, rainfall: 90 },
  };

  const climate = climateByState[state] || { temp: 28, humidity: 60, rainfall: 100 };

  return {
    temperature: climate.temp + Math.floor(Math.random() * 5 - 2),
    humidity: climate.humidity + Math.floor(Math.random() * 10 - 5),
    rainfall: climate.rainfall + Math.floor(Math.random() * 30 - 15),
    season: currentSeason,
  };
};

export const getCropRecommendations = (
  soilType: string,
  ph: number,
  irrigation: string,
  previousCrop: string,
  climate: ClimateData
): CropRecommendation[] => {
  const allCrops: CropRecommendation[] = [
    {
      name: "Wheat",
      nameHindi: "गेहूं",
      image: "🌾",
      msp: 2275,
      expectedPrice: 2450,
      season: "Rabi",
      duration: "120-150 days",
      waterRequirement: "Medium",
      suitabilityScore: 0,
      rotationNotes: "Excellent after rice or pulses. Avoid continuous wheat cultivation.",
      tips: ["Sow in mid-November", "Apply first irrigation 21 days after sowing", "Use certified seeds"],
    },
    {
      name: "Rice",
      nameHindi: "चावल",
      image: "🌾",
      msp: 2183,
      expectedPrice: 2350,
      season: "Kharif",
      duration: "120-150 days",
      waterRequirement: "High",
      suitabilityScore: 0,
      rotationNotes: "Follow with wheat or pulses for best soil health.",
      tips: ["Transplant 25-30 day old seedlings", "Maintain 5cm water level", "Apply nitrogen in 3 splits"],
    },
    {
      name: "Cotton",
      nameHindi: "कपास",
      image: "🏵️",
      msp: 6620,
      expectedPrice: 7200,
      season: "Kharif",
      duration: "150-180 days",
      waterRequirement: "Medium",
      suitabilityScore: 0,
      rotationNotes: "Rotate with pulses or oilseeds to maintain soil fertility.",
      tips: ["Sow after first monsoon shower", "Maintain proper spacing", "Regular pest monitoring"],
    },
    {
      name: "Soybean",
      nameHindi: "सोयाबीन",
      image: "🫘",
      msp: 4600,
      expectedPrice: 5100,
      season: "Kharif",
      duration: "90-100 days",
      waterRequirement: "Medium",
      suitabilityScore: 0,
      rotationNotes: "Excellent for nitrogen fixation. Follow with wheat or maize.",
      tips: ["Treat seeds with Rhizobium", "Sow in first week of July", "Avoid waterlogging"],
    },
    {
      name: "Maize",
      nameHindi: "मक्का",
      image: "🌽",
      msp: 2090,
      expectedPrice: 2300,
      season: "Kharif/Rabi",
      duration: "90-120 days",
      waterRequirement: "Medium",
      suitabilityScore: 0,
      rotationNotes: "Good after legumes. Can be followed by wheat or mustard.",
      tips: ["Use hybrid varieties", "Apply zinc if deficient", "Earthing up at 30 days"],
    },
    {
      name: "Mustard",
      nameHindi: "सरसों",
      image: "🌻",
      msp: 5650,
      expectedPrice: 6200,
      season: "Rabi",
      duration: "110-140 days",
      waterRequirement: "Low",
      suitabilityScore: 0,
      rotationNotes: "Ideal after kharif crops like rice, maize, or millets.",
      tips: ["Sow in October", "Thin seedlings at 15-20 days", "First irrigation at flowering"],
    },
    {
      name: "Chickpea",
      nameHindi: "चना",
      image: "🫘",
      msp: 5440,
      expectedPrice: 5900,
      season: "Rabi",
      duration: "90-120 days",
      waterRequirement: "Low",
      suitabilityScore: 0,
      rotationNotes: "Fixes nitrogen in soil. Excellent before wheat or rice.",
      tips: ["Avoid excess irrigation", "Use wilt-resistant varieties", "Seed treatment essential"],
    },
    {
      name: "Groundnut",
      nameHindi: "मूंगफली",
      image: "🥜",
      msp: 6377,
      expectedPrice: 6800,
      season: "Kharif",
      duration: "100-130 days",
      waterRequirement: "Medium",
      suitabilityScore: 0,
      rotationNotes: "Good for sandy soils. Follow with wheat or vegetables.",
      tips: ["Sow at onset of monsoon", "Apply gypsum at flowering", "Timely harvesting important"],
    },
  ];

  // Calculate suitability scores based on inputs
  return allCrops
    .map((crop) => {
      let score = 50; // Base score

      // Soil type compatibility
      const soilCompatibility: Record<string, string[]> = {
        alluvial: ["Wheat", "Rice", "Sugarcane", "Maize"],
        black: ["Cotton", "Soybean", "Chickpea", "Wheat"],
        red: ["Groundnut", "Maize", "Millets", "Pulses"],
        laterite: ["Cashew", "Tea", "Coffee", "Spices"],
        sandy: ["Groundnut", "Millets", "Mustard", "Watermelon"],
        clayey: ["Rice", "Wheat", "Sugarcane"],
        loamy: ["Wheat", "Rice", "Cotton", "Vegetables"],
        saline: ["Barley", "Cotton", "Sugarbeet"],
      };

      if (soilCompatibility[soilType]?.includes(crop.name)) {
        score += 20;
      }

      // pH compatibility
      const phRanges: Record<string, [number, number]> = {
        Wheat: [6.0, 7.5],
        Rice: [5.5, 7.0],
        Cotton: [6.0, 8.0],
        Soybean: [6.0, 7.0],
        Maize: [5.5, 7.5],
        Mustard: [6.0, 7.5],
        Chickpea: [6.0, 8.0],
        Groundnut: [5.5, 7.0],
      };

      const phRange = phRanges[crop.name];
      if (phRange && ph >= phRange[0] && ph <= phRange[1]) {
        score += 15;
      }

      // Season compatibility
      if (crop.season.includes(climate.season)) {
        score += 15;
      }

      // Irrigation compatibility
      const waterNeeds: Record<string, string[]> = {
        High: ["canal", "tubewell", "well"],
        Medium: ["canal", "tubewell", "well", "drip", "sprinkler"],
        Low: ["rainfed", "drip", "tank"],
      };

      if (waterNeeds[crop.waterRequirement]?.includes(irrigation)) {
        score += 10;
      }

      // Crop rotation bonus
      if (previousCrop !== crop.name.toLowerCase() && previousCrop !== "none") {
        score += 10;
      }

      return { ...crop, suitabilityScore: Math.min(score, 100) };
    })
    .sort((a, b) => b.suitabilityScore - a.suitabilityScore)
    .slice(0, 4);
};
