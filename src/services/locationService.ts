// Comprehensive Indian location data service
// Data includes all 28 states, 8 UTs, and major districts, tehsils, and villages

export interface LocationData {
  states: string[];
  districts: Record<string, string[]>;
  tehsils: Record<string, string[]>;
  villages: Record<string, string[]>;
}

// All Indian States and Union Territories
export const allStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  // Union Territories
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

// Comprehensive district data for all states
export const allDistricts: Record<string, string[]> = {
  "Andhra Pradesh": [
    "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", 
    "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", 
    "West Godavari", "YSR Kadapa", "Alluri Sitharama Raju", "Anakapalli", 
    "Annamayya", "Bapatla", "Eluru", "Kakinada", "Konaseema", "Nandyal", 
    "NTR", "Palnadu", "Parvathipuram Manyam", "Sri Sathya Sai", "Tirupati"
  ],
  "Arunachal Pradesh": [
    "Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", 
    "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", 
    "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", 
    "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", 
    "Tirap", "Upper Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"
  ],
  "Assam": [
    "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", 
    "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", 
    "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", 
    "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", 
    "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", 
    "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"
  ],
  "Bihar": [
    "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", 
    "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", 
    "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", 
    "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", 
    "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", 
    "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"
  ],
  "Chhattisgarh": [
    "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", 
    "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", 
    "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", 
    "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", 
    "Rajnandgaon", "Sukma", "Surajpur", "Surguja"
  ],
  "Goa": [
    "North Goa", "South Goa"
  ],
  "Gujarat": [
    "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", 
    "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", 
    "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", 
    "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", 
    "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", 
    "Tapi", "Vadodara", "Valsad"
  ],
  "Haryana": [
    "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", 
    "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", 
    "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", 
    "Sonipat", "Yamunanagar"
  ],
  "Himachal Pradesh": [
    "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", 
    "Mandi", "Shimla", "Sirmaur", "Solan", "Una"
  ],
  "Jharkhand": [
    "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", 
    "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", 
    "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", 
    "Sahibganj", "Saraikela-Kharsawan", "Simdega", "West Singhbhum"
  ],
  "Karnataka": [
    "Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", 
    "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", 
    "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", 
    "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", 
    "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", 
    "Vijayanagara", "Vijayapura", "Yadgir"
  ],
  "Kerala": [
    "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", 
    "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", 
    "Thiruvananthapuram", "Thrissur", "Wayanad"
  ],
  "Madhya Pradesh": [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", 
    "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", 
    "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", 
    "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", 
    "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", 
    "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", 
    "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", 
    "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"
  ],
  "Maharashtra": [
    "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", 
    "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", 
    "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", 
    "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", 
    "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", 
    "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
  ],
  "Manipur": [
    "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", 
    "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", 
    "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"
  ],
  "Meghalaya": [
    "East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", 
    "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", 
    "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"
  ],
  "Mizoram": [
    "Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", 
    "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip"
  ],
  "Nagaland": [
    "Chumoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", 
    "Mon", "Niuland", "Noklak", "Peren", "Phek", "Shamator", "Tseminyu", 
    "Tuensang", "Wokha", "Zunheboto"
  ],
  "Odisha": [
    "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", 
    "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", 
    "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", 
    "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", 
    "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"
  ],
  "Punjab": [
    "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", 
    "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", 
    "Malerkotla", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", 
    "SAS Nagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"
  ],
  "Rajasthan": [
    "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", 
    "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", 
    "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", 
    "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", 
    "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"
  ],
  "Sikkim": [
    "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim", "Pakyong", "Soreng"
  ],
  "Tamil Nadu": [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", 
    "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Kanyakumari", "Karur", 
    "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", 
    "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", 
    "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", 
    "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", 
    "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"
  ],
  "Telangana": [
    "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", 
    "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", 
    "Khammam", "Kumuram Bheem", "Mahabubabad", "Mahbubnagar", "Mancherial", 
    "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", 
    "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", 
    "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", 
    "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"
  ],
  "Tripura": [
    "Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", 
    "Unakoti", "West Tripura"
  ],
  "Uttar Pradesh": [
    "Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", 
    "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", 
    "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", 
    "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", 
    "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", 
    "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", 
    "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", 
    "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", 
    "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", 
    "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", 
    "Prayagraj", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", 
    "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", 
    "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
  ],
  "Uttarakhand": [
    "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", 
    "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", 
    "Udham Singh Nagar", "Uttarkashi"
  ],
  "West Bengal": [
    "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", 
    "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", 
    "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", 
    "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", 
    "Purulia", "South 24 Parganas", "Uttar Dinajpur"
  ],
  "Andaman and Nicobar Islands": [
    "Nicobar", "North and Middle Andaman", "South Andaman"
  ],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": [
    "Dadra and Nagar Haveli", "Daman", "Diu"
  ],
  "Delhi": [
    "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", 
    "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", 
    "South West Delhi", "West Delhi"
  ],
  "Jammu and Kashmir": [
    "Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", 
    "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", 
    "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"
  ],
  "Ladakh": ["Kargil", "Leh"],
  "Lakshadweep": ["Lakshadweep"],
  "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
};

// Tehsils/Talukas for major districts
export const allTehsils: Record<string, string[]> = {
  // Maharashtra
  "Pune": ["Haveli", "Mulshi", "Maval", "Junnar", "Ambegaon", "Khed", "Shirur", "Baramati", "Indapur", "Daund", "Purandar", "Bhor", "Velhe"],
  "Mumbai Suburban": ["Andheri", "Kurla", "Borivali", "Bandra", "Malad", "Kandivali", "Goregaon", "Santacruz", "Vile Parle", "Jogeshwari"],
  "Nagpur": ["Nagpur Urban", "Nagpur Rural", "Hingna", "Kamptee", "Ramtek", "Parseoni", "Umred", "Kuhi", "Bhiwapur", "Narkhed", "Katol", "Saoner", "Kalmeshwar", "Mauda"],
  "Nashik": ["Nashik", "Igatpuri", "Trimbakeshwar", "Dindori", "Peth", "Surgana", "Kalwan", "Deola", "Baglan", "Malegaon", "Nandgaon", "Chandwad", "Yeola", "Niphad", "Sinnar"],
  "Ahmednagar": ["Ahmednagar", "Shevgaon", "Pathardi", "Parner", "Sangamner", "Kopargaon", "Akole", "Shrirampur", "Nevasa", "Rahata", "Rahuri", "Shrigonda", "Karjat", "Jamkhed"],
  "Aurangabad": ["Aurangabad", "Khuldabad", "Kannad", "Sillod", "Soegaon", "Phulambri", "Vaijapur", "Gangapur", "Paithan"],
  "Kolhapur": ["Karvir", "Panhala", "Shahuwadi", "Radhanagari", "Kagal", "Hatkanangle", "Shirol", "Bavda", "Gadhinglaj", "Chandgad", "Ajra", "Bhudargad"],
  "Solapur": ["Solapur North", "Solapur South", "Akkalkot", "Barshi", "Karmala", "Madha", "Malshiras", "Mangalvedhe", "Mohol", "Pandharpur", "Sangola"],
  
  // Uttar Pradesh
  "Lucknow": ["Lucknow", "Mohanlalganj", "Bakshi Ka Talab", "Malihabad", "Sarojini Nagar", "Chinhat", "Kakori"],
  "Kanpur Nagar": ["Kanpur", "Bilhaur", "Ghatampur", "Kalyanpur", "Narwal", "Sarsaul"],
  "Varanasi": ["Varanasi", "Pindra", "Chiraigaon", "Cholapur", "Harahua", "Kashi Vidyapith", "Sewapuri", "Arajiline"],
  "Agra": ["Agra", "Kheragarh", "Fatehabad", "Etmadpur", "Bah", "Kiraoli", "Achhnera", "Jaitpur Kalan", "Shamsabad", "Jagner", "Pinahat", "Fatehpur Sikri", "Bichpuri"],
  "Prayagraj": ["Prayagraj", "Soraon", "Phulpur", "Handia", "Karchana", "Meja", "Koraon", "Bara", "Pratappur", "Uruwan", "Saidabad", "Dhanupur", "Chail", "Kaurihar", "Mauaima"],
  "Meerut": ["Meerut", "Sardhana", "Mawana", "Hastinapur", "Parikshitgarh", "Rajpura"],
  
  // Gujarat
  "Ahmedabad": ["Ahmedabad City", "Daskroi", "Dholka", "Sanand", "Bavla", "Detroj-Rampura", "Mandal", "Viramgam", "Dhandhuka", "Ranpur", "Barwala"],
  "Surat": ["Surat City", "Choryasi", "Palsana", "Kamrej", "Olpad", "Bardoli", "Mahuva", "Valod", "Mandvi", "Mangrol", "Umarpada"],
  "Vadodara": ["Vadodara", "Karjan", "Padra", "Savli", "Waghodia", "Dabhoi", "Shinor", "Sankheda", "Nasvadi", "Kavant", "Pavijetpur", "Chhota Udaipur"],
  "Rajkot": ["Rajkot", "Kotda Sangani", "Lodhika", "Paddhari", "Jasdan", "Gondal", "Jetpur", "Dhoraji", "Upleta", "Jamkandorna", "Vinchhiya"],
  
  // Punjab
  "Amritsar": ["Amritsar-I", "Amritsar-II", "Ajnala", "Baba Bakala", "Majitha", "Verka", "Attari", "Lopoke", "Rayya"],
  "Ludhiana": ["Ludhiana East", "Ludhiana West", "Khanna", "Samrala", "Machhiwara", "Jagraon", "Raikot", "Doraha", "Payal", "Sidhwan Bet", "Dehlon"],
  "Jalandhar": ["Jalandhar East", "Jalandhar West", "Nakodar", "Shahkot", "Phillaur", "Lohian Khas", "Rurka Kalan", "Adampur", "Alawalpur"],
  "Patiala": ["Patiala", "Nabha", "Samana", "Rajpura", "Ghanaur", "Patran", "Sanaur", "Shutrana"],
  "Bathinda": ["Bathinda", "Rampura Phul", "Talwandi Sabo", "Goniana", "Maur", "Sangat"],
  
  // Karnataka
  "Bengaluru Urban": ["Bengaluru North", "Bengaluru South", "Bengaluru East", "Anekal"],
  "Mysuru": ["Mysuru", "Nanjangud", "Hunsur", "Periyapatna", "Heggadadevankote", "K R Nagara", "T Narsipur"],
  "Belagavi": ["Belagavi", "Khanapur", "Saundatti", "Ramdurg", "Bailhongal", "Raibag", "Gokak", "Hukkeri", "Chikkodi", "Athni"],
  
  // Tamil Nadu
  "Chennai": ["Chennai", "Ambattur", "Madhavaram", "Tondiarpet", "Mylapore", "Alandur", "Tiruvottiyur", "Manali", "Perambur", "Sholinganallur"],
  "Coimbatore": ["Coimbatore North", "Coimbatore South", "Pollachi", "Mettupalayam", "Valparai", "Sulur", "Annur", "Madukkarai", "Kinathukadavu", "Periyanayakkanpalayam"],
  "Madurai": ["Madurai North", "Madurai South", "Melur", "Vadipatti", "Usilampatti", "Thirumangalam", "Peraiyur", "Kallikudi"],
  
  // Telangana
  "Hyderabad": ["Hyderabad", "Secunderabad", "Golconda", "Charminar", "Khairatabad", "Musheerabad", "Nampally", "Ameerpet", "Jubilee Hills", "Banjara Hills"],
  "Rangareddy": ["Rajendranagar", "Ibrahimpatnam", "Chevella", "Moinabad", "Shamshabad", "Maheshwaram", "Kandukur", "Farooqnagar", "Shadnagar"],
  "Medchal-Malkajgiri": ["Medchal", "Malkajgiri", "Quthbullapur", "Keesara", "Ghatkesar", "Uppal", "Shamirpet", "Dundigal"],
  
  // Rajasthan
  "Jaipur": ["Jaipur", "Amber", "Sanganer", "Bassi", "Chaksu", "Jamwa Ramgarh", "Phagi", "Chomu", "Shahpura", "Viratnagar", "Kotputli", "Govindgarh"],
  "Jodhpur": ["Jodhpur", "Bilara", "Bhopalgarh", "Pipar City", "Osian", "Phalodi", "Luni", "Mandore", "Balesar", "Shergarh", "Tinwari"],
  "Udaipur": ["Udaipur", "Girwa", "Vallabhnagar", "Mavli", "Salumber", "Kherwara", "Gogunda", "Jhadol", "Kotra", "Sarada", "Bhinder", "Rishabhdeo"],
  
  // West Bengal
  "Kolkata": ["Kolkata", "Alipore", "Behala", "Garden Reach", "Jadavpur", "Tollygunge", "Bhowanipore", "Jorasanko", "Shyampukur", "Maniktala"],
  "North 24 Parganas": ["Barasat", "Basirhat", "Barrackpore", "Bidhannagar", "Bongaon", "Deganga", "Habra", "Rajarhat", "Dum Dum", "Haringhata"],
  "Howrah": ["Howrah", "Uluberia", "Shyampur", "Amta", "Bagnan", "Jagatballavpur", "Domjur", "Sankrail", "Bally", "Liluah"],
  
  // Madhya Pradesh
  "Bhopal": ["Bhopal", "Huzur", "Berasia", "Phanda", "Sehore"],
  "Indore": ["Indore", "Mhow", "Depalpur", "Sanwer", "Hatod"],
  "Jabalpur": ["Jabalpur", "Patan", "Sihora", "Shahpura", "Panagar", "Kundam", "Bargi"],
  "Gwalior": ["Gwalior", "Morar", "Dabra", "Bhitarwar", "Bhander"],
};

// Villages for major tehsils (sample data)
export const allVillages: Record<string, string[]> = {
  // Maharashtra - Pune District Tehsils
  "Haveli": ["Wagholi", "Lohegaon", "Kharadi", "Viman Nagar", "Hadapsar", "Mundhwa", "Koregaon Park", "Yerawada", "Wadgaon Sheri", "Dhanori", "Vishrantwadi", "Kalas", "Sainikwadi", "Tingre Nagar", "Vadgaon Budruk"],
  "Mulshi": ["Paud", "Pirangut", "Lavale", "Hinjewadi", "Maan", "Nande", "Bhugaon", "Sus", "Mulshi", "Tamhini", "Bhaje", "Kolwan", "Walhe", "Taje"],
  "Maval": ["Talegaon Dabhade", "Lonavala", "Kamshet", "Vadgaon", "Kanhe", "Tung", "Pavana Dam", "Ghorawadi", "Devale", "Kandholi"],
  "Junnar": ["Junnar", "Otur", "Narayangaon", "Alephata", "Pimpri Pendhar", "Ozar", "Kukadi", "Kolwadi", "Rajur", "Vadaj"],
  "Baramati": ["Baramati", "Supa", "Undwadi", "Katewadi", "Morgaon", "Jalgaon", "Malad", "Nimbut", "Walchandnagar", "Karanje"],
  "Indapur": ["Indapur", "Bhigwan", "Nimgaon Ketaki", "Bhatawade", "Shelgaon", "Nimgaon", "Sansar", "Agoti", "Kalthan"],
  "Shirur": ["Shirur", "Koregaon Bhima", "Ranjangaon", "Talegaon Dhamdhere", "Shikrapur", "Nhavare", "Pabal", "Chakan"],
  
  // Maharashtra - Other major tehsils
  "Nagpur Urban": ["Nagpur City", "Sadar", "Civil Lines", "Sitabuldi", "Dharampeth", "Mahal", "Itwari", "Gandhibagh"],
  "Nashik": ["Nashik City", "Deolali", "Eklahare", "Satpur", "Gangapur", "Panchavati", "CIDCO"],
  
  // Uttar Pradesh
  "Lucknow": ["Lucknow City", "Alambagh", "Gomti Nagar", "Indira Nagar", "Charbagh", "Hazratganj", "Aliganj", "Rajajipuram", "Jankipuram", "Vikas Nagar"],
  "Mohanlalganj": ["Mohanlalganj", "Gosainganj", "Bhithauli", "Kasimpur", "Isanagar"],
  "Varanasi": ["Varanasi City", "Godowlia", "Bhelupur", "Lanka", "Assi Ghat", "Dashashwamedh", "Ramnagar", "Sarnath"],
  
  // Gujarat
  "Ahmedabad City": ["Ahmedabad", "Navrangpura", "Satellite", "Vastrapur", "Bodakdev", "Maninagar", "Naroda", "Gota", "Chandkheda", "Bopal"],
  "Daskroi": ["Daskroi", "Jetalpur", "Manipur", "Gyaspur", "Santej", "Tragad"],
  "Sanand": ["Sanand", "Changodar", "Bol", "Khoraj", "Sargasan"],
  
  // Punjab
  "Amritsar-I": ["Amritsar City", "Golden Temple Area", "Ranjit Avenue", "Mall Road", "Lawrence Road", "Majitha Road"],
  "Amritsar-II": ["Chheharta", "GT Road", "Batala Road", "Tarn Taran Road"],
  "Ludhiana East": ["Ludhiana", "Model Town", "Sarabha Nagar", "Civil Lines", "Ferozepur Road"],
  
  // Karnataka
  "Bengaluru North": ["Yelahanka", "Hebbal", "RT Nagar", "Sahakara Nagar", "Nagavara", "Thanisandra", "Jakkur"],
  "Bengaluru South": ["Jayanagar", "JP Nagar", "Banashankari", "BTM Layout", "HSR Layout", "Koramangala", "Basavanagudi"],
  "Mysuru": ["Mysuru City", "Saraswathipuram", "Gokulam", "Kuvempunagar", "Vijayanagar", "Chamundi Hill"],
  
  // Tamil Nadu
  "Chennai": ["Chennai City", "T Nagar", "Adyar", "Anna Nagar", "Nungambakkam", "Guindy", "Velachery", "Tambaram"],
  "Coimbatore North": ["Coimbatore", "RS Puram", "Gandhipuram", "Saibaba Colony", "Race Course", "Peelamedu"],
  "Madurai North": ["Madurai", "Anna Nagar", "KK Nagar", "Goripalayam", "Teppakulam"],
  
  // Telangana
  "Hyderabad": ["Hyderabad City", "Ameerpet", "Begumpet", "Himayatnagar", "Abids", "Koti", "Malakpet", "Dilsukhnagar"],
  "Secunderabad": ["Secunderabad", "Begumpet", "Trimulgherry", "Alwal", "Bowenpally", "Marredpally", "Tarnaka"],
  
  // Rajasthan
  "Jaipur": ["Jaipur City", "Raja Park", "C Scheme", "Malviya Nagar", "Vaishali Nagar", "Mansarovar", "Sitapura", "Sanganer"],
  "Amber": ["Amber", "Jaigarh", "Amer Palace Area", "Kanak Ghati"],
  
  // West Bengal
  "Kolkata": ["Kolkata City", "Park Street", "Salt Lake", "New Town", "Ballygunge", "Gariahat", "Howrah Bridge Area"],
  
  // Madhya Pradesh
  "Bhopal": ["Bhopal City", "MP Nagar", "Arera Colony", "Kolar Road", "BHEL", "Bairagarh", "Hoshangabad Road"],
  "Indore": ["Indore City", "Palasia", "Vijay Nagar", "MG Road", "Rajwada", "Sapna Sangeeta"],
};

// Function to get all states
export const getStates = (): string[] => allStates;

// Function to get districts for a state
export const getDistricts = (state: string): string[] => {
  return allDistricts[state] || [];
};

// Function to get tehsils for a district
export const getTehsils = (district: string): string[] => {
  return allTehsils[district] || [];
};

// Function to get villages for a tehsil
export const getVillages = (tehsil: string): string[] => {
  return allVillages[tehsil] || [];
};

// Soil types with translations
export const getSoilTypes = (language: string) => {
  const soilData: Record<string, { value: string; en: string; hi: string }[]> = {
    types: [
      { value: "alluvial", en: "Alluvial Soil", hi: "जलोढ़ मिट्टी" },
      { value: "black", en: "Black Soil (Regur)", hi: "काली मिट्टी (रेगुर)" },
      { value: "red", en: "Red Soil", hi: "लाल मिट्टी" },
      { value: "laterite", en: "Laterite Soil", hi: "लेटराइट मिट्टी" },
      { value: "sandy", en: "Sandy Soil", hi: "रेतीली मिट्टी" },
      { value: "clayey", en: "Clayey Soil", hi: "चिकनी मिट्टी" },
      { value: "loamy", en: "Loamy Soil", hi: "दोमट मिट्टी" },
      { value: "saline", en: "Saline/Alkaline Soil", hi: "लवणीय/क्षारीय मिट्टी" },
      { value: "peaty", en: "Peaty/Marshy Soil", hi: "पीट/दलदली मिट्टी" },
      { value: "forest", en: "Forest Soil", hi: "वन मिट्टी" },
    ]
  };
  
  return soilData.types.map(soil => ({
    value: soil.value,
    label: language === "hi" ? `${soil.hi} (${soil.en})` : `${soil.en} (${soil.hi})`
  }));
};

// Irrigation types with translations
export const getIrrigationTypes = (language: string) => {
  const irrigationData = [
    { value: "canal", en: "Canal Irrigation", hi: "नहर सिंचाई" },
    { value: "well", en: "Well Irrigation", hi: "कुआं सिंचाई" },
    { value: "tubewell", en: "Tubewell/Borewell", hi: "ट्यूबवेल/बोरवेल" },
    { value: "drip", en: "Drip Irrigation", hi: "टपक सिंचाई" },
    { value: "sprinkler", en: "Sprinkler Irrigation", hi: "फव्वारा सिंचाई" },
    { value: "rainfed", en: "Rainfed (No Irrigation)", hi: "वर्षा आधारित" },
    { value: "tank", en: "Tank/Pond Irrigation", hi: "तालाब सिंचाई" },
    { value: "river", en: "River Lift Irrigation", hi: "नदी लिफ्ट सिंचाई" },
  ];
  
  return irrigationData.map(item => ({
    value: item.value,
    label: language === "hi" ? `${item.hi} (${item.en})` : `${item.en} (${item.hi})`
  }));
};

// Previous crops with translations
export const getPreviousCrops = (language: string) => {
  const cropsData = [
    { value: "wheat", en: "Wheat", hi: "गेहूं" },
    { value: "rice", en: "Rice/Paddy", hi: "धान/चावल" },
    { value: "cotton", en: "Cotton", hi: "कपास" },
    { value: "sugarcane", en: "Sugarcane", hi: "गन्ना" },
    { value: "maize", en: "Maize/Corn", hi: "मक्का" },
    { value: "soybean", en: "Soybean", hi: "सोयाबीन" },
    { value: "groundnut", en: "Groundnut/Peanut", hi: "मूंगफली" },
    { value: "pulses", en: "Pulses/Lentils", hi: "दालें" },
    { value: "vegetables", en: "Vegetables", hi: "सब्जियां" },
    { value: "mustard", en: "Mustard", hi: "सरसों" },
    { value: "jowar", en: "Jowar/Sorghum", hi: "ज्वार" },
    { value: "bajra", en: "Bajra/Pearl Millet", hi: "बाजरा" },
    { value: "ragi", en: "Ragi/Finger Millet", hi: "रागी" },
    { value: "potato", en: "Potato", hi: "आलू" },
    { value: "onion", en: "Onion", hi: "प्याज" },
    { value: "tomato", en: "Tomato", hi: "टमाटर" },
    { value: "chilli", en: "Chilli", hi: "मिर्च" },
    { value: "turmeric", en: "Turmeric", hi: "हल्दी" },
    { value: "none", en: "None / Fallow Land", hi: "कोई नहीं / परती भूमि" },
  ];
  
  return cropsData.map(crop => ({
    value: crop.value,
    label: language === "hi" ? `${crop.hi} (${crop.en})` : `${crop.en} (${crop.hi})`
  }));
};
