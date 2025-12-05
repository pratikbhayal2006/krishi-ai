import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sprout, ArrowRight, Leaf, Sun, Droplets } from "lucide-react";

interface HeroSectionProps {
  language: string;
  onLanguageChange: (value: string) => void;
  onGetStarted: () => void;
}

export const HeroSection = ({ language, onLanguageChange, onGetStarted }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sprout className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{t("app.name")}</h1>
              <p className="text-xs text-muted-foreground">{t("app.name.hindi")}</p>
            </div>
          </div>
          <LanguageSelector value={language} onChange={onLanguageChange} />
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Leaf className="w-4 h-4" />
                <span>{t("app.badge")}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">{t("hero.title.line1")}</span>
                <br />
                <span className="text-gradient-hero">{t("hero.title.line2")}</span>
                <br />
                <span className="text-foreground">{t("hero.title.line3")}</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                {t("app.tagline")} {t("hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" onClick={onGetStarted}>
                  {t("hero.cta.start")}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="glass" size="xl">
                  {t("hero.cta.learn")}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">{t("hero.stats.crops")}</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-secondary">36</p>
                  <p className="text-sm text-muted-foreground">{t("hero.stats.states")}</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-accent">12</p>
                  <p className="text-sm text-muted-foreground">{t("hero.stats.languages")}</p>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-primary/10 animate-pulse-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-secondary/20 animate-pulse-slow" style={{ animationDelay: "1s" }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-accent/20 animate-pulse-slow" style={{ animationDelay: "2s" }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-xl glow-primary">
                    <Sprout className="w-12 h-12 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute top-10 left-10 w-14 h-14 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float">
                  <Sun className="w-7 h-7 text-sun-yellow" />
                </div>
                <div className="absolute top-20 right-16 w-14 h-14 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <Droplets className="w-7 h-7 text-water-blue" />
                </div>
                <div className="absolute bottom-20 left-20 w-14 h-14 rounded-xl bg-card shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <Leaf className="w-7 h-7 text-leaf-green" />
                </div>
                <div className="absolute bottom-10 right-10 text-6xl animate-float" style={{ animationDelay: "0.5s" }}>
                  🌾
                </div>
                <div className="absolute top-1/4 right-0 text-4xl animate-float" style={{ animationDelay: "1.5s" }}>
                  🌻
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--card))" fillOpacity="0.5"/>
        </svg>
      </div>
    </section>
  );
};
