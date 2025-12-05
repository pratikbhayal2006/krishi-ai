import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

type TranslationKey = string;
type Translations = Record<string, string>;
type LanguageTranslations = Record<string, Translations>;

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: TranslationKey) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations for all supported languages
const translations: LanguageTranslations = {
  en: {
    // Header & Branding
    "app.name": "KrishiMitra",
    "app.name.hindi": "कृषि मित्र",
    "app.tagline": "Sowing Smarter Decisions for Better Harvests",
    "app.badge": "AI-Powered Crop Advisory",
    
    // Hero Section
    "hero.title.line1": "Krishi Mitra",
    "hero.title.line2": "Smart Crop Advisor",
    "hero.title.line3": "for Farmers",
    "hero.description": "Get personalized crop recommendations based on your soil, climate, and farming conditions.",
    "hero.cta.start": "Get Crop Recommendation",
    "hero.cta.learn": "Learn More",
    "hero.stats.crops": "Crops Supported",
    "hero.stats.states": "States Covered",
    "hero.stats.languages": "Languages",
    
    // Form - General
    "form.title": "Farm Details",
    "form.subtitle": "Tell us about your farm to get personalized crop recommendations",
    "form.next": "Next",
    "form.previous": "Previous",
    "form.back": "Back to Home",
    "form.submit": "Get Recommendations",
    
    // Form - Step 1: Location
    "form.step1.title": "Farm Location",
    "form.step1.subtitle": "Where is your farm located?",
    "form.field.state": "State",
    "form.field.district": "District",
    "form.field.tehsil": "Tehsil / Block",
    "form.field.village": "Village / Town",
    "form.placeholder.state": "Select State",
    "form.placeholder.district": "Select District",
    "form.placeholder.tehsil": "Select Tehsil (Optional)",
    "form.placeholder.village": "Select Village (Optional)",
    
    // Form - Step 2: Soil & Irrigation
    "form.step2.title": "Soil & Irrigation",
    "form.step2.subtitle": "Tell us about your soil conditions",
    "form.field.soilType": "Soil Type",
    "form.field.soilPh": "Soil pH Level",
    "form.placeholder.soilType": "Select Soil Type",
    "form.ph.acidic": "Acidic (4.0)",
    "form.ph.neutral": "Neutral (7.0)",
    "form.ph.alkaline": "Alkaline (9.0)",
    "form.field.irrigation": "Irrigation Type",
    "form.placeholder.irrigation": "Select Irrigation Type",
    
    // Form - Step 3: Crop History
    "form.step3.title": "Crop History",
    "form.step3.subtitle": "Previous crop and planting schedule",
    "form.field.previousCrop": "Previous Crop",
    "form.placeholder.previousCrop": "Select Previous Crop",
    "form.field.sowingDate": "Expected Sowing Date",
    "form.placeholder.sowingDate": "Pick a date",
    
    // Dashboard
    "dashboard.title": "Your Crop Recommendations",
    "dashboard.edit": "Edit Details",
    "dashboard.startOver": "Start Over",
    "dashboard.bestMatch": "Best Match",
    "dashboard.matchScore": "Match Score",
    "dashboard.msp": "MSP (Govt. Price)",
    "dashboard.marketPrice": "Expected Market Price",
    "dashboard.perQuintal": "/quintal",
    "dashboard.duration": "Duration",
    "dashboard.waterNeed": "Water Need",
    "dashboard.yourSoil": "Your Soil",
    "dashboard.rotationAdvice": "Crop Rotation Advice",
    "dashboard.growingTips": "Growing Tips",
    "dashboard.otherCrops": "Other Suitable Crops",
    "dashboard.match": "match",
    
    // Climate
    "climate.title": "Climate Information",
    "climate.temperature": "Temperature",
    "climate.humidity": "Humidity",
    "climate.rainfall": "Rainfall (avg)",
    "climate.season": "Current Season",
    
    // Farm Summary
    "summary.title": "Your Farm Summary",
    "summary.soilType": "Soil Type",
    "summary.soilPh": "Soil pH",
    "summary.irrigation": "Irrigation",
    "summary.previousCrop": "Previous Crop",
    "summary.sowingDate": "Sowing Date",
    
    // Disclaimer
    "disclaimer.title": "Disclaimer:",
    "disclaimer.text": "These recommendations are based on general agricultural guidelines and the information you provided. Actual results may vary based on local conditions. Please consult with local agricultural officers for specific advice.",
    
    // Loading
    "loading.locations": "Loading locations...",
  },
  hi: {
    "app.name": "कृषि मित्र",
    "app.name.hindi": "KrishiMitra",
    "app.tagline": "बेहतर फसल के लिए स्मार्ट निर्णय",
    "app.badge": "AI-संचालित फसल सलाहकार",
    
    "hero.title.line1": "कृषि मित्र",
    "hero.title.line2": "स्मार्ट फसल सलाहकार",
    "hero.title.line3": "किसानों के लिए",
    "hero.description": "अपनी मिट्टी, जलवायु और खेती की स्थिति के आधार पर व्यक्तिगत फसल सिफारिशें प्राप्त करें।",
    "hero.cta.start": "फसल सिफारिश प्राप्त करें",
    "hero.cta.learn": "अधिक जानें",
    "hero.stats.crops": "समर्थित फसलें",
    "hero.stats.states": "राज्य कवर",
    "hero.stats.languages": "भाषाएं",
    
    "form.title": "खेत का विवरण",
    "form.subtitle": "व्यक्तिगत फसल सिफारिशें पाने के लिए अपने खेत के बारे में बताएं",
    "form.next": "आगे",
    "form.previous": "पीछे",
    "form.back": "होम पर वापस",
    "form.submit": "सिफारिशें प्राप्त करें",
    
    "form.step1.title": "खेत का स्थान",
    "form.step1.subtitle": "आपका खेत कहाँ स्थित है?",
    "form.field.state": "राज्य",
    "form.field.district": "जिला",
    "form.field.tehsil": "तहसील / ब्लॉक",
    "form.field.village": "गाँव / कस्बा",
    "form.placeholder.state": "राज्य चुनें",
    "form.placeholder.district": "जिला चुनें",
    "form.placeholder.tehsil": "तहसील चुनें (वैकल्पिक)",
    "form.placeholder.village": "गाँव चुनें (वैकल्पिक)",
    
    "form.step2.title": "मिट्टी और सिंचाई",
    "form.step2.subtitle": "अपनी मिट्टी की स्थिति बताएं",
    "form.field.soilType": "मिट्टी का प्रकार",
    "form.field.soilPh": "मिट्टी का pH स्तर",
    "form.placeholder.soilType": "मिट्टी का प्रकार चुनें",
    "form.ph.acidic": "अम्लीय (4.0)",
    "form.ph.neutral": "तटस्थ (7.0)",
    "form.ph.alkaline": "क्षारीय (9.0)",
    "form.field.irrigation": "सिंचाई का प्रकार",
    "form.placeholder.irrigation": "सिंचाई का प्रकार चुनें",
    
    "form.step3.title": "फसल इतिहास",
    "form.step3.subtitle": "पिछली फसल और बुवाई का समय",
    "form.field.previousCrop": "पिछली फसल",
    "form.placeholder.previousCrop": "पिछली फसल चुनें",
    "form.field.sowingDate": "अपेक्षित बुवाई तिथि",
    "form.placeholder.sowingDate": "तारीख चुनें",
    
    "dashboard.title": "आपकी फसल सिफारिशें",
    "dashboard.edit": "विवरण संपादित करें",
    "dashboard.startOver": "फिर से शुरू करें",
    "dashboard.bestMatch": "सर्वोत्तम मिलान",
    "dashboard.matchScore": "मिलान स्कोर",
    "dashboard.msp": "MSP (सरकारी मूल्य)",
    "dashboard.marketPrice": "अपेक्षित बाजार मूल्य",
    "dashboard.perQuintal": "/क्विंटल",
    "dashboard.duration": "अवधि",
    "dashboard.waterNeed": "पानी की जरूरत",
    "dashboard.yourSoil": "आपकी मिट्टी",
    "dashboard.rotationAdvice": "फसल चक्र सलाह",
    "dashboard.growingTips": "उगाने के टिप्स",
    "dashboard.otherCrops": "अन्य उपयुक्त फसलें",
    "dashboard.match": "मिलान",
    
    "climate.title": "जलवायु जानकारी",
    "climate.temperature": "तापमान",
    "climate.humidity": "आर्द्रता",
    "climate.rainfall": "वर्षा (औसत)",
    "climate.season": "वर्तमान मौसम",
    
    "summary.title": "आपके खेत का सारांश",
    "summary.soilType": "मिट्टी का प्रकार",
    "summary.soilPh": "मिट्टी pH",
    "summary.irrigation": "सिंचाई",
    "summary.previousCrop": "पिछली फसल",
    "summary.sowingDate": "बुवाई तिथि",
    
    "disclaimer.title": "अस्वीकरण:",
    "disclaimer.text": "ये सिफारिशें सामान्य कृषि दिशानिर्देशों और आपके द्वारा दी गई जानकारी पर आधारित हैं। स्थानीय परिस्थितियों के आधार पर वास्तविक परिणाम भिन्न हो सकते हैं। विशिष्ट सलाह के लिए कृपया स्थानीय कृषि अधिकारियों से परामर्श करें।",
    
    "loading.locations": "स्थान लोड हो रहे हैं...",
  },
  mr: {
    "app.name": "कृषी मित्र",
    "app.name.hindi": "KrishiMitra",
    "app.tagline": "चांगल्या कापणीसाठी हुशार निर्णय",
    "app.badge": "AI-संचालित पीक सल्लागार",
    
    "hero.title.line1": "कृषी मित्र",
    "hero.title.line2": "स्मार्ट पीक सल्लागार",
    "hero.title.line3": "शेतकऱ्यांसाठी",
    "hero.description": "तुमच्या माती, हवामान आणि शेतीच्या परिस्थितीवर आधारित वैयक्तिक पीक शिफारसी मिळवा.",
    "hero.cta.start": "पीक शिफारस मिळवा",
    "hero.cta.learn": "अधिक जाणून घ्या",
    "hero.stats.crops": "समर्थित पिके",
    "hero.stats.states": "राज्ये समाविष्ट",
    "hero.stats.languages": "भाषा",
    
    "form.title": "शेत तपशील",
    "form.subtitle": "वैयक्तिक पीक शिफारसी मिळवण्यासाठी तुमच्या शेताबद्दल सांगा",
    "form.next": "पुढे",
    "form.previous": "मागे",
    "form.back": "मुख्यपृष्ठावर परत",
    "form.submit": "शिफारसी मिळवा",
    
    "form.step1.title": "शेताचे स्थान",
    "form.step1.subtitle": "तुमचे शेत कुठे आहे?",
    "form.field.state": "राज्य",
    "form.field.district": "जिल्हा",
    "form.field.tehsil": "तालुका / ब्लॉक",
    "form.field.village": "गाव / शहर",
    "form.placeholder.state": "राज्य निवडा",
    "form.placeholder.district": "जिल्हा निवडा",
    "form.placeholder.tehsil": "तालुका निवडा (पर्यायी)",
    "form.placeholder.village": "गाव निवडा (पर्यायी)",
    
    "form.step2.title": "माती आणि सिंचन",
    "form.step2.subtitle": "तुमच्या मातीच्या स्थितीबद्दल सांगा",
    "form.field.soilType": "मातीचा प्रकार",
    "form.field.soilPh": "माती pH पातळी",
    "form.placeholder.soilType": "मातीचा प्रकार निवडा",
    "form.ph.acidic": "आम्ल (4.0)",
    "form.ph.neutral": "तटस्थ (7.0)",
    "form.ph.alkaline": "क्षारीय (9.0)",
    "form.field.irrigation": "सिंचन प्रकार",
    "form.placeholder.irrigation": "सिंचन प्रकार निवडा",
    
    "form.step3.title": "पीक इतिहास",
    "form.step3.subtitle": "मागील पीक आणि पेरणी वेळापत्रक",
    "form.field.previousCrop": "मागील पीक",
    "form.placeholder.previousCrop": "मागील पीक निवडा",
    "form.field.sowingDate": "अपेक्षित पेरणी तारीख",
    "form.placeholder.sowingDate": "तारीख निवडा",
    
    "dashboard.title": "तुमच्या पीक शिफारसी",
    "dashboard.edit": "तपशील संपादित करा",
    "dashboard.startOver": "पुन्हा सुरू करा",
    "dashboard.bestMatch": "सर्वोत्तम जुळणी",
    "dashboard.matchScore": "जुळणी स्कोर",
    "dashboard.msp": "MSP (सरकारी किंमत)",
    "dashboard.marketPrice": "अपेक्षित बाजार किंमत",
    "dashboard.perQuintal": "/क्विंटल",
    "dashboard.duration": "कालावधी",
    "dashboard.waterNeed": "पाण्याची गरज",
    "dashboard.yourSoil": "तुमची माती",
    "dashboard.rotationAdvice": "पीक फेरपालट सल्ला",
    "dashboard.growingTips": "उगवण्याचे टिप्स",
    "dashboard.otherCrops": "इतर योग्य पिके",
    "dashboard.match": "जुळणी",
    
    "climate.title": "हवामान माहिती",
    "climate.temperature": "तापमान",
    "climate.humidity": "आर्द्रता",
    "climate.rainfall": "पाऊस (सरासरी)",
    "climate.season": "सध्याचा हंगाम",
    
    "summary.title": "तुमच्या शेताचा सारांश",
    "summary.soilType": "मातीचा प्रकार",
    "summary.soilPh": "माती pH",
    "summary.irrigation": "सिंचन",
    "summary.previousCrop": "मागील पीक",
    "summary.sowingDate": "पेरणी तारीख",
    
    "disclaimer.title": "अस्वीकरण:",
    "disclaimer.text": "या शिफारसी सामान्य कृषी मार्गदर्शक तत्त्वे आणि तुम्ही दिलेल्या माहितीवर आधारित आहेत. स्थानिक परिस्थितीनुसार वास्तविक परिणाम भिन्न असू शकतात. विशिष्ट सल्ल्यासाठी कृपया स्थानिक कृषी अधिकाऱ्यांचा सल्ला घ्या.",
    
    "loading.locations": "स्थाने लोड होत आहेत...",
  },
  ta: {
    "app.name": "கிருஷி மித்ரா",
    "app.name.hindi": "KrishiMitra",
    "app.tagline": "சிறந்த அறுவடைக்கு புத்திசாலித்தனமான முடிவுகள்",
    "app.badge": "AI-இயக்கப்படும் பயிர் ஆலோசகர்",
    
    "hero.title.line1": "கிருஷி மித்ரா",
    "hero.title.line2": "ஸ்மார்ட் பயிர் ஆலோசகர்",
    "hero.title.line3": "விவசாயிகளுக்கு",
    "hero.description": "உங்கள் மண், காலநிலை மற்றும் விவசாய நிலைமைகளின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பயிர் பரிந்துரைகளைப் பெறுங்கள்.",
    "hero.cta.start": "பயிர் பரிந்துரையைப் பெறுங்கள்",
    "hero.cta.learn": "மேலும் அறிக",
    "hero.stats.crops": "ஆதரிக்கப்படும் பயிர்கள்",
    "hero.stats.states": "மாநிலங்கள் உள்ளடக்கப்பட்டுள்ளன",
    "hero.stats.languages": "மொழிகள்",
    
    "form.title": "பண்ணை விவரங்கள்",
    "form.subtitle": "தனிப்பயனாக்கப்பட்ட பயிர் பரிந்துரைகளைப் பெற உங்கள் பண்ணையைப் பற்றி சொல்லுங்கள்",
    "form.next": "அடுத்து",
    "form.previous": "முந்தைய",
    "form.back": "முகப்புக்கு திரும்பு",
    "form.submit": "பரிந்துரைகளைப் பெறுங்கள்",
    
    "form.step1.title": "பண்ணை இருப்பிடம்",
    "form.step1.subtitle": "உங்கள் பண்ணை எங்கே உள்ளது?",
    "form.field.state": "மாநிலம்",
    "form.field.district": "மாவட்டம்",
    "form.field.tehsil": "தாலுகா / வட்டம்",
    "form.field.village": "கிராமம் / நகரம்",
    "form.placeholder.state": "மாநிலத்தைத் தேர்ந்தெடுக்கவும்",
    "form.placeholder.district": "மாவட்டத்தைத் தேர்ந்தெடுக்கவும்",
    "form.placeholder.tehsil": "தாலுகாவைத் தேர்ந்தெடுக்கவும் (விரும்பினால்)",
    "form.placeholder.village": "கிராமத்தைத் தேர்ந்தெடுக்கவும் (விரும்பினால்)",
    
    "form.step2.title": "மண் & நீர்ப்பாசனம்",
    "form.step2.subtitle": "உங்கள் மண் நிலைமைகளைப் பற்றி சொல்லுங்கள்",
    "form.field.soilType": "மண் வகை",
    "form.field.soilPh": "மண் pH நிலை",
    "form.placeholder.soilType": "மண் வகையைத் தேர்ந்தெடுக்கவும்",
    "form.ph.acidic": "அமிலத்தன்மை (4.0)",
    "form.ph.neutral": "நடுநிலை (7.0)",
    "form.ph.alkaline": "காரத்தன்மை (9.0)",
    "form.field.irrigation": "நீர்ப்பாசன வகை",
    "form.placeholder.irrigation": "நீர்ப்பாசன வகையைத் தேர்ந்தெடுக்கவும்",
    
    "form.step3.title": "பயிர் வரலாறு",
    "form.step3.subtitle": "முந்தைய பயிர் மற்றும் நடவு அட்டவணை",
    "form.field.previousCrop": "முந்தைய பயிர்",
    "form.placeholder.previousCrop": "முந்தைய பயிரைத் தேர்ந்தெடுக்கவும்",
    "form.field.sowingDate": "எதிர்பார்க்கப்படும் விதைப்பு தேதி",
    "form.placeholder.sowingDate": "தேதியைத் தேர்ந்தெடுக்கவும்",
    
    "dashboard.title": "உங்கள் பயிர் பரிந்துரைகள்",
    "dashboard.edit": "விவரங்களைத் திருத்து",
    "dashboard.startOver": "மீண்டும் தொடங்கு",
    "dashboard.bestMatch": "சிறந்த பொருத்தம்",
    "dashboard.matchScore": "பொருத்தம் மதிப்பெண்",
    "dashboard.msp": "MSP (அரசு விலை)",
    "dashboard.marketPrice": "எதிர்பார்க்கப்படும் சந்தை விலை",
    "dashboard.perQuintal": "/குவிண்டால்",
    "dashboard.duration": "காலம்",
    "dashboard.waterNeed": "நீர் தேவை",
    "dashboard.yourSoil": "உங்கள் மண்",
    "dashboard.rotationAdvice": "பயிர் சுழற்சி ஆலோசனை",
    "dashboard.growingTips": "வளர்ப்பு குறிப்புகள்",
    "dashboard.otherCrops": "பிற பொருத்தமான பயிர்கள்",
    "dashboard.match": "பொருத்தம்",
    
    "climate.title": "காலநிலை தகவல்",
    "climate.temperature": "வெப்பநிலை",
    "climate.humidity": "ஈரப்பதம்",
    "climate.rainfall": "மழை (சராசரி)",
    "climate.season": "தற்போதைய பருவம்",
    
    "summary.title": "உங்கள் பண்ணை சுருக்கம்",
    "summary.soilType": "மண் வகை",
    "summary.soilPh": "மண் pH",
    "summary.irrigation": "நீர்ப்பாசனம்",
    "summary.previousCrop": "முந்தைய பயிர்",
    "summary.sowingDate": "விதைப்பு தேதி",
    
    "disclaimer.title": "மறுப்பு:",
    "disclaimer.text": "இந்த பரிந்துரைகள் பொதுவான விவசாய வழிகாட்டுதல்கள் மற்றும் நீங்கள் வழங்கிய தகவல்களின் அடிப்படையில் அமைந்துள்ளன. உள்ளூர் நிலைமைகளின் அடிப்படையில் உண்மையான முடிவுகள் மாறுபடலாம். குறிப்பிட்ட ஆலோசனைக்கு உள்ளூர் விவசாய அதிகாரிகளை அணுகவும்.",
    
    "loading.locations": "இடங்கள் ஏற்றப்படுகின்றன...",
  },
  te: {
    "app.name": "కృషి మిత్ర",
    "app.name.hindi": "KrishiMitra",
    "app.tagline": "మెరుగైన పంటలకు తెలివైన నిర్ణయాలు",
    "app.badge": "AI-ఆధారిత పంట సలహాదారు",
    
    "hero.title.line1": "కృషి మిత్ర",
    "hero.title.line2": "స్మార్ట్ పంట సలహాదారు",
    "hero.title.line3": "రైతులకు",
    "hero.description": "మీ నేల, వాతావరణం మరియు వ్యవసాయ పరిస్థితుల ఆధారంగా వ్యక్తిగతీకరించిన పంట సిఫార్సులను పొందండి.",
    "hero.cta.start": "పంట సిఫార్సు పొందండి",
    "hero.cta.learn": "మరింత తెలుసుకోండి",
    "hero.stats.crops": "మద్దతు ఉన్న పంటలు",
    "hero.stats.states": "కవర్ చేసిన రాష్ట్రాలు",
    "hero.stats.languages": "భాషలు",
    
    "form.title": "పొలం వివరాలు",
    "form.subtitle": "వ్యక్తిగతీకరించిన పంట సిఫార్సులు పొందడానికి మీ పొలం గురించి చెప్పండి",
    "form.next": "తదుపరి",
    "form.previous": "మునుపటి",
    "form.back": "హోమ్‌కు తిరిగి",
    "form.submit": "సిఫార్సులు పొందండి",
    
    "form.step1.title": "పొలం స్థానం",
    "form.step1.subtitle": "మీ పొలం ఎక్కడ ఉంది?",
    "form.field.state": "రాష్ట్రం",
    "form.field.district": "జిల్లా",
    "form.field.tehsil": "తహసీల్ / మండలం",
    "form.field.village": "గ్రామం / పట్టణం",
    "form.placeholder.state": "రాష్ట్రం ఎంచుకోండి",
    "form.placeholder.district": "జిల్లా ఎంచుకోండి",
    "form.placeholder.tehsil": "తహసీల్ ఎంచుకోండి (ఐచ్ఛికం)",
    "form.placeholder.village": "గ్రామం ఎంచుకోండి (ఐచ్ఛికం)",
    
    "form.step2.title": "నేల & నీటిపారుదల",
    "form.step2.subtitle": "మీ నేల పరిస్థితుల గురించి చెప్పండి",
    "form.field.soilType": "నేల రకం",
    "form.field.soilPh": "నేల pH స్థాయి",
    "form.placeholder.soilType": "నేల రకం ఎంచుకోండి",
    "form.ph.acidic": "ఆమ్ల (4.0)",
    "form.ph.neutral": "తటస్థ (7.0)",
    "form.ph.alkaline": "క్షార (9.0)",
    "form.field.irrigation": "నీటిపారుదల రకం",
    "form.placeholder.irrigation": "నీటిపారుదల రకం ఎంచుకోండి",
    
    "form.step3.title": "పంట చరిత్ర",
    "form.step3.subtitle": "మునుపటి పంట మరియు విత్తనం షెడ్యూల్",
    "form.field.previousCrop": "మునుపటి పంట",
    "form.placeholder.previousCrop": "మునుపటి పంట ఎంచుకోండి",
    "form.field.sowingDate": "అంచనా విత్తనం తేదీ",
    "form.placeholder.sowingDate": "తేదీ ఎంచుకోండి",
    
    "dashboard.title": "మీ పంట సిఫార్సులు",
    "dashboard.edit": "వివరాలు సవరించండి",
    "dashboard.startOver": "మళ్ళీ ప్రారంభించండి",
    "dashboard.bestMatch": "ఉత్తమ సరిపోలిక",
    "dashboard.matchScore": "సరిపోలిక స్కోర్",
    "dashboard.msp": "MSP (ప్రభుత్వ ధర)",
    "dashboard.marketPrice": "అంచనా మార్కెట్ ధర",
    "dashboard.perQuintal": "/క్వింటాల్",
    "dashboard.duration": "వ్యవధి",
    "dashboard.waterNeed": "నీటి అవసరం",
    "dashboard.yourSoil": "మీ నేల",
    "dashboard.rotationAdvice": "పంట మార్పిడి సలహా",
    "dashboard.growingTips": "పెంచే చిట్కాలు",
    "dashboard.otherCrops": "ఇతర తగిన పంటలు",
    "dashboard.match": "సరిపోలిక",
    
    "climate.title": "వాతావరణ సమాచారం",
    "climate.temperature": "ఉష్ణోగ్రత",
    "climate.humidity": "తేమ",
    "climate.rainfall": "వర్షపాతం (సగటు)",
    "climate.season": "ప్రస్తుత సీజన్",
    
    "summary.title": "మీ పొలం సారాంశం",
    "summary.soilType": "నేల రకం",
    "summary.soilPh": "నేల pH",
    "summary.irrigation": "నీటిపారుదల",
    "summary.previousCrop": "మునుపటి పంట",
    "summary.sowingDate": "విత్తనం తేదీ",
    
    "disclaimer.title": "నిరాకరణ:",
    "disclaimer.text": "ఈ సిఫార్సులు సాధారణ వ్యవసాయ మార్గదర్శకాలు మరియు మీరు అందించిన సమాచారం ఆధారంగా ఉన్నాయి. స్థానిక పరిస్థితుల ఆధారంగా వాస్తవ ఫలితాలు మారవచ్చు. నిర్దిష్ట సలహా కోసం దయచేసి స్థానిక వ్యవసాయ అధికారులను సంప్రదించండి.",
    
    "loading.locations": "స్థానాలు లోడ్ అవుతున్నాయి...",
  },
  gu: {
    "app.name": "કૃષિ મિત્ર",
    "app.tagline": "વધુ સારી કાપણી માટે સ્માર્ટ નિર્ણયો",
    "hero.cta.start": "પાક ભલામણ મેળવો",
    "form.title": "ખેતરની વિગતો",
    "form.next": "આગળ",
    "form.previous": "પાછળ",
    "form.field.state": "રાજ્ય",
    "form.field.district": "જિલ્લો",
    "loading.locations": "સ્થાનો લોડ થઈ રહ્યા છે...",
  },
  pa: {
    "app.name": "ਕ੍ਰਿਸ਼ੀ ਮਿੱਤਰ",
    "app.tagline": "ਬਿਹਤਰ ਵਾਢੀ ਲਈ ਸਮਾਰਟ ਫੈਸਲੇ",
    "hero.cta.start": "ਫਸਲ ਸਿਫਾਰਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ",
    "form.title": "ਖੇਤ ਦੇ ਵੇਰਵੇ",
    "form.next": "ਅੱਗੇ",
    "form.previous": "ਪਿੱਛੇ",
    "form.field.state": "ਰਾਜ",
    "form.field.district": "ਜ਼ਿਲ੍ਹਾ",
    "loading.locations": "ਥਾਵਾਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...",
  },
  bn: {
    "app.name": "কৃষি মিত্র",
    "app.tagline": "ভালো ফসলের জন্য স্মার্ট সিদ্ধান্ত",
    "hero.cta.start": "ফসল সুপারিশ পান",
    "form.title": "খামারের বিবরণ",
    "form.next": "পরবর্তী",
    "form.previous": "পূর্ববর্তী",
    "form.field.state": "রাজ্য",
    "form.field.district": "জেলা",
    "loading.locations": "স্থানগুলি লোড হচ্ছে...",
  },
  kn: {
    "app.name": "ಕೃಷಿ ಮಿತ್ರ",
    "app.tagline": "ಉತ್ತಮ ಬೆಳೆಗಾಗಿ ಸ್ಮಾರ್ಟ್ ನಿರ್ಧಾರಗಳು",
    "hero.cta.start": "ಬೆಳೆ ಶಿಫಾರಸು ಪಡೆಯಿರಿ",
    "form.title": "ಕೃಷಿ ವಿವರಗಳು",
    "form.next": "ಮುಂದೆ",
    "form.previous": "ಹಿಂದೆ",
    "form.field.state": "ರಾಜ್ಯ",
    "form.field.district": "ಜಿಲ್ಲೆ",
    "loading.locations": "ಸ್ಥಳಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...",
  },
  ml: {
    "app.name": "കൃഷി മിത്ര",
    "app.tagline": "മികച്ച വിളവിനായി സ്മാർട്ട് തീരുമാനങ്ങൾ",
    "hero.cta.start": "വിള ശുപാർശ നേടുക",
    "form.title": "കൃഷി വിശദാംശങ്ങൾ",
    "form.next": "അടുത്തത്",
    "form.previous": "മുൻപ്",
    "form.field.state": "സംസ്ഥാനം",
    "form.field.district": "ജില്ല",
    "loading.locations": "സ്ഥലങ്ങൾ ലോഡ് ചെയ്യുന്നു...",
  },
  or: {
    "app.name": "କୃଷି ମିତ୍ର",
    "app.tagline": "ଉତ୍ତମ ଫସଲ ପାଇଁ ସ୍ମାର୍ଟ ନିଷ୍ପତ୍ତି",
    "hero.cta.start": "ଫସଲ ସୁପାରିସ ପାଆନ୍ତୁ",
    "form.title": "ଚାଷ ବିବରଣୀ",
    "form.next": "ପରବର୍ତ୍ତୀ",
    "form.previous": "ପୂର୍ବ",
    "form.field.state": "ରାଜ୍ୟ",
    "form.field.district": "ଜିଲ୍ଲା",
    "loading.locations": "ସ୍ଥାନଗୁଡ଼ିକ ଲୋଡ଼ ହେଉଛି...",
  },
  as: {
    "app.name": "কৃষি মিত্ৰ",
    "app.tagline": "উন্নত শস্যৰ বাবে স্মাৰ্ট সিদ্ধান্ত",
    "hero.cta.start": "শস্য পৰামৰ্শ লওক",
    "form.title": "খেতিৰ বিৱৰণ",
    "form.next": "পৰৱৰ্তী",
    "form.previous": "পূৰ্বৱৰ্তী",
    "form.field.state": "ৰাজ্য",
    "form.field.district": "জিলা",
    "loading.locations": "স্থানসমূহ লোড হৈ আছে...",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);

  const t = useCallback((key: TranslationKey): string => {
    const langTranslations = translations[language] || translations.en;
    return langTranslations[key] || translations.en[key] || key;
  }, [language]);

  const handleSetLanguage = useCallback((lang: string) => {
    setIsLoading(true);
    setLanguage(lang);
    // Small delay to allow UI to update
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
