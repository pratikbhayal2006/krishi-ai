import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  states,
  districts,
  tehsils,
  soilTypes,
  irrigationTypes,
  previousCrops,
} from "@/data/indianLocations";
import {
  MapPin,
  Layers,
  Droplets,
  Leaf,
  CalendarIcon,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export interface FarmData {
  state: string;
  district: string;
  tehsil: string;
  village: string;
  soilType: string;
  soilPh: number;
  irrigationType: string;
  previousCrop: string;
  cultivationDate: Date | undefined;
}

interface FarmInputFormProps {
  onSubmit: (data: FarmData) => void;
  onBack: () => void;
}

export const FarmInputForm = ({ onSubmit, onBack }: FarmInputFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FarmData>({
    state: "",
    district: "",
    tehsil: "",
    village: "",
    soilType: "",
    soilPh: 7,
    irrigationType: "",
    previousCrop: "",
    cultivationDate: undefined,
  });

  const totalSteps = 3;

  const updateField = <K extends keyof FarmData>(field: K, value: FarmData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Reset dependent fields
    if (field === "state") {
      setFormData((prev) => ({ ...prev, district: "", tehsil: "" }));
    }
    if (field === "district") {
      setFormData((prev) => ({ ...prev, tehsil: "" }));
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.state && formData.district;
      case 2:
        return formData.soilType && formData.irrigationType;
      case 3:
        return formData.previousCrop && formData.cultivationDate;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onSubmit(formData);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const availableDistricts = formData.state ? districts[formData.state] || [] : [];
  const availableTehsils = formData.district ? tehsils[formData.district] || [] : [];

  return (
    <section className="min-h-screen py-8 px-6 bg-background">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-2">Farm Details</h2>
          <p className="text-muted-foreground">
            Tell us about your farm to get personalized crop recommendations
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                  s < step
                    ? "bg-primary text-primary-foreground"
                    : s === step
                    ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={cn(
                    "w-16 h-1 mx-1 rounded-full transition-all duration-300",
                    s < step ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <Card className="glass-card p-6 md:p-8 animate-scale-in">
          {/* Step 1: Location */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Farm Location</h3>
                  <p className="text-sm text-muted-foreground">Where is your farm located?</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select value={formData.state} onValueChange={(v) => updateField("state", v)}>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50 max-h-60">
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district">District *</Label>
                  <Select
                    value={formData.district}
                    onValueChange={(v) => updateField("district", v)}
                    disabled={!formData.state}
                  >
                    <SelectTrigger id="district">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50 max-h-60">
                      {availableDistricts.map((district) => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tehsil">Tehsil / Block</Label>
                  <Select
                    value={formData.tehsil}
                    onValueChange={(v) => updateField("tehsil", v)}
                    disabled={!formData.district}
                  >
                    <SelectTrigger id="tehsil">
                      <SelectValue placeholder="Select Tehsil (Optional)" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50 max-h-60">
                      {availableTehsils.map((tehsil) => (
                        <SelectItem key={tehsil} value={tehsil}>
                          {tehsil}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="village">Village / Town</Label>
                  <Input
                    id="village"
                    placeholder="Enter village or town name"
                    value={formData.village}
                    onChange={(e) => updateField("village", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Soil & Irrigation */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-soil-brown/20 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-soil-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Soil & Irrigation</h3>
                  <p className="text-sm text-muted-foreground">Tell us about your soil conditions</p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor="soilType">Soil Type *</Label>
                  <Select value={formData.soilType} onValueChange={(v) => updateField("soilType", v)}>
                    <SelectTrigger id="soilType">
                      <SelectValue placeholder="Select Soil Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      {soilTypes.map((soil) => (
                        <SelectItem key={soil.value} value={soil.value}>
                          {soil.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Soil pH Level</Label>
                    <span className="text-lg font-semibold text-primary">{formData.soilPh.toFixed(1)}</span>
                  </div>
                  <Slider
                    value={[formData.soilPh]}
                    onValueChange={([v]) => updateField("soilPh", v)}
                    min={4}
                    max={9}
                    step={0.1}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Acidic (4.0)</span>
                    <span>Neutral (7.0)</span>
                    <span>Alkaline (9.0)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="irrigation" className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-water-blue" />
                    Irrigation Type *
                  </Label>
                  <Select value={formData.irrigationType} onValueChange={(v) => updateField("irrigationType", v)}>
                    <SelectTrigger id="irrigation">
                      <SelectValue placeholder="Select Irrigation Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      {irrigationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Crop History & Date */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-leaf-green/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-leaf-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Crop History</h3>
                  <p className="text-sm text-muted-foreground">Previous crop and planting schedule</p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor="previousCrop">Previous Crop *</Label>
                  <Select value={formData.previousCrop} onValueChange={(v) => updateField("previousCrop", v)}>
                    <SelectTrigger id="previousCrop">
                      <SelectValue placeholder="Select Previous Crop" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      {previousCrops.map((crop) => (
                        <SelectItem key={crop.value} value={crop.value}>
                          {crop.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Expected Sowing Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.cultivationDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.cultivationDate ? (
                          format(formData.cultivationDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border z-50" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.cultivationDate}
                        onSelect={(date) => updateField("cultivationDate", date)}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
            <Button variant="ghost" onClick={handlePrev}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {step === 1 ? "Back to Home" : "Previous"}
            </Button>
            <Button
              variant="hero"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              {step === totalSteps ? "Get Recommendations" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
