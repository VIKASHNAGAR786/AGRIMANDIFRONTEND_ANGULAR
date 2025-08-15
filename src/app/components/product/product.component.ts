import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { AlertService } from '../../services/alert.service';
import { CommonModule } from '@angular/common';
import { UserinfowithloginService } from '../../services/userinfowithlogin.service';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [ReactiveFormsModule, CommonModule],
})
export class ProductComponent implements OnInit {
  productForm!: FormGroup;
  today: string = new Date().toISOString().split('T')[0];

  currentStep: number = 1;

  states: string[] = [];// Object.keys(this.STATE_DISTRICTS); // ['Rajasthan', 'Gujarat', ...]
  districts: string[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private alertService: AlertService,
    private userInfo: UserinfowithloginService
  ) { }

  RAJASTHAN_DISTRICTS: string[] = ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa',
    'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar',
    'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand',
    'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur', 'Balotra', 'Beawar',
    'Deeg', 'Didwana-Kuchaman', 'Dudu', 'Gangapur City', 'Jaipur North', 'Jaipur South', 'Jodhpur East',
    'Jodhpur West',
    'Khairthal-Tijara', 'Kotputli-Behror', 'Neem Ka Thana', 'Phalodi', 'Salumbar', 'Shahpura', 'Sanchore'
  ];


  categories = ['Grains', 'Fruits', 'Vegetables', 'Dairy', 'Flowers', 'Spices', 'Pulses', 'Oilseeds', 'Herbs', 'Others'];
  grades = ['Standard', 'A', 'B', 'C', 'Organic', 'Premium'];
  units = ['Kg', 'Quintal', 'Ton', 'Liters', 'Packets', 'Bunch', 'Dozen'];



ngOnInit(): void {
  // ✅ Step 1: Create the form first
  this.productForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      type: [''],
      variety: [''],
      state: [''],
      district: [''],
      grade: ['Standard'],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unit: ['Kg', Validators.required],
      pricePerUnit: [0, [Validators.required, Validators.min(1)]],
      availability: [true],
      location: [''], // We’ll update this later
      harvestDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      storageCondition: [''],
      packagingType: [''],
      certification: [''],
      farmerId: [0],
      status: ['Pending'],
      imageUrl: [null], //  for files
    },
    {
      validators: this.expiryDateAfterHarvestDate('harvestDate', 'expiryDate'),
    }
  );

  // ✅ Step 2: Populate state list
  this.states = Object.keys(this.STATE_DISTRICTS);

  // ✅ Step 3: Watch for state changes
  this.productForm.get('state')?.valueChanges.subscribe(state => {
    console.log('Selected State:', state);
    this.districts = this.STATE_DISTRICTS[state] || [];
    this.productForm.patchValue({ district: '' });
  });
}




  expiryDateAfterHarvestDate(harvestKey: string, expiryKey: string) {
    return (group: AbstractControl): ValidationErrors | null => {
      const harvestDate = group.get(harvestKey)?.value;
      const expiryDate = group.get(expiryKey)?.value;

      if (harvestDate && expiryDate) {
        const harvest = new Date(harvestDate);
        const expiry = new Date(expiryDate);
        return expiry >= harvest ? null : { expiryBeforeHarvest: true };
      }
      return null;
    };
  }

  get f() {
    return this.productForm.controls;
  }

  submitProduct(): void {
    const email = this.userInfo.getUserEmail();
    const name = this.userInfo.getUserName();

    if (!email || !name) {
      this.alertService.showAlert('User information missing in token!', 'error');
      return;
    }

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      this.alertService.showAlert('Please fill all required fields correctly.', 'error');
      return;
    }

    this.productService.getFarmerId(email, name).subscribe({
      next: (farmerId: number) => {
        // const productData = {
        // ...this.productForm.value,
        // farmerId,
        // status: 'Pending',
        const productData = new FormData();
        productData.append('name', this.productForm.value.name);
        productData.append('description', this.productForm.value.description);
        productData.append('category', this.productForm.value.category);
        productData.append('type', this.productForm.value.type);
        productData.append('variety', this.productForm.value.variety);
        productData.append('grade', this.productForm.value.grade);
        productData.append('quantity', this.productForm.value.quantity);
        productData.append('unit', this.productForm.value.unit);
        productData.append('pricePerUnit', this.productForm.value.pricePerUnit);
        productData.append('availability', this.productForm.value.availability);
      productData.append('location',`${this.productForm.value.district}, ${this.productForm.value.state}`);
        productData.append('harvestDate', this.productForm.value.harvestDate);
        productData.append('expiryDate', this.productForm.value.expiryDate);
        productData.append('storageCondition', this.productForm.value.storageCondition);
        productData.append('packagingType', this.productForm.value.packagingType);
        productData.append('certification', this.productForm.value.certification);
        productData.append('farmerId', farmerId.toString());
        productData.append('status', 'Pending');

        // Add files (if any)
        const fileList: FileList = this.productForm.get('imageUrl')?.value;
        if (fileList && fileList.length > 0) {
          for (let i = 0; i < fileList.length; i++) {
            productData.append('files', fileList[i]);
          }
        }

        this.productService.saveproduct(productData).subscribe({
          next: (response) => {
            console.log('✅ Product registered:', response);
            this.alertService.showAlert('Product added successfully!', 'success');
            this.productForm.reset({ availability: true });
          },
          error: (err) => {
            console.error('❌ Failed to save product:', err);
            this.alertService.showAlert('Failed to add product! Please try again.', 'error');
          },
        });
      },
      error: (err) => {
        console.error('❌ Failed to get Farmer ID:', err);
        this.alertService.showAlert('Could not fetch Farmer ID. Please login again.', 'error');
      },
    });
  }
  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.productForm.patchValue({ imageUrl: event.target.files });
    }
  }

  goNext() {
  if (this.currentStep < 3) this.currentStep++;
}

goBack() {
  if (this.currentStep > 1) this.currentStep--;
}
  // all states  and district of india
  STATE_DISTRICTS: { [key: string]: string[] } = {

    "Andaman and Nicobar Island (UT)": ["Nicobar", "North and Middle Andaman", "South Andaman"], "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari",
      "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Sri Potti Sriramulu Nellore", "Visakhapatnam", "Vizianagaram",
      "West Godavari", "YSR District, Kadapa (Cuddapah)"],

    "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi",
      "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang",
      "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],


    "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri",
      "Dibrugarh", "Dima Hasao (North Cachar Hills)", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup",

      "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari",
      "Sivasagar", "Sonitpur", "South Salamara-Mankachar", "Tinsukia", "Udalguri",
      "West Karbi Anglong"],

    "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga",

      "East Champaran (Motihari)", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar", "Khagaria",
      "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger (Monghyr)", "Muzaffarpur", "Nalanda", "Nawada", "Patna",
      "Purnia (Purnea)", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul",
      "Vaishali",
      "West Champaran"
    ],
    "Chandigarh (UT)": [
      "Chandigarh"
    ],
    "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada (South Bastar)",
      "Dhamtari", "Durg", "Gariyaband", "Janjgir-Champa", "Jashpur", "Kabirdham (Kawardha)", "Kanker (North Bastar)", "Kondagaon",
      "Korba", "Korea (Koriya)", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur  ",
      "Surguja"
    ],
    "Dadra and Nagar Haveli (UT)": [
      "Dadra &amp; Nagar Haveli"
    ],
    "Daman and Diu (UT)": [
      "Daman",
      "Diu"
    ],
    "Delhi (NCT)": [
      "Central Delhi",
      "East Delhi",
      "New Delhi",
      "North Delhi",
      "North East  Delhi",
      "North West  Delhi",
      "Shahdara",
      "South Delhi",
      "South East Delhi",
      "South West  Delhi",
      "West Delhi"
    ],
    "Goa": [
      "North Goa",
      "South Goa"
    ],
    "Gujarat": [
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Aravalli",
      "Banaskantha (Palanpur)",
      "Bharuch",
      "Bhavnagar",
      "Botad",
      "Chhota Udepur",
      "Dahod",
      "Dangs (Ahwa)",
      "Devbhoomi Dwarka",
      "Gandhinagar",
      "Gir Somnath",
      "Jamnagar",
      "Junagadh",
      "Kachchh",
      "Kheda (Nadiad)",
      "Mahisagar",
      "Mehsana",
      "Morbi",
      "Narmada (Rajpipla)",
      "Navsari",
      "Panchmahal (Godhra)",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Sabarkantha (Himmatnagar)",
      "Surat",
      "Surendranagar",
      "Tapi (Vyara)",
      "Vadodara",
      "Valsad"
    ],
    "Haryana": [
      "Ambala",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gurgaon",
      "Hisar",
      "Jhajjar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Mahendragarh",
      "Mewat",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
      "Yamunanagar"
    ],
    "Himachal Pradesh": [
      "Bilaspur",
      "Chamba",
      "Hamirpur",
      "Kangra",
      "Kinnaur",
      "Kullu",
      "Lahaul &amp; Spiti",
      "Mandi",
      "Shimla",
      "Sirmaur (Sirmour)",
      "Solan",
      "Una"
    ],
    "Jammu and Kashmir(UT)": [
      "Anantnag",
      "Bandipore",
      "Baramulla",
      "Budgam",
      "Doda",
      "Ganderbal",
      "Jammu",
      "Kathua",
      "Kishtwar",
      "Kulgam",
      "Kupwara",
      "Poonch",
      "Pulwama",
      "Rajouri",
      "Ramban",
      "Reasi",
      "Samba",
      "Shopian",
      "Srinagar",
      "Udhampur"
    ],
    "Jharkhand": [
      "Bokaro",
      "Chatra",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "East Singhbhum",
      "Garhwa",
      "Giridih",
      "Godda",
      "Gumla",
      "Hazaribag",
      "Jamtara",
      "Khunti",
      "Koderma",
      "Latehar",
      "Lohardaga",
      "Pakur",
      "Palamu",
      "Ramgarh",
      "Ranchi",
      "Sahibganj",
      "Seraikela-Kharsawan",
      "Simdega",
      "West Singhbhum"
    ],
    "Karnataka": [
      "Bagalkot",
      "Ballari (Bellary)",
      "Belagavi (Belgaum)",
      "Bengaluru (Bangalore) Rural",
      "Bengaluru (Bangalore) Urban",
      "Bidar",
      "Chamarajanagar",
      "Chikballapur",
      "Chikkamagaluru (Chikmagalur)",
      "Chitradurga",
      "Dakshina Kannada",
      "Davangere",
      "Dharwad",
      "Gadag",
      "Hassan",
      "Haveri",
      "Kalaburagi (Gulbarga)",
      "Kodagu",
      "Kolar",
      "Koppal",
      "Mandya",
      "Mysuru (Mysore)",
      "Raichur",
      "Ramanagara",
      "Shivamogga (Shimoga)",
      "Tumakuru (Tumkur)",
      "Udupi",
      "Uttara Kannada (Karwar)",
      "Vijayapura (Bijapur)",
      "Yadgir"
    ],
    "Kerala": [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad"
    ],
    "Ladakh(UT)": [
      "Kargil",
      "Leh"
    ],
    "Lakshadweep (UT)": [
      "Lakshadweep"
    ],
    "Madhya Pradesh": [
      "Agar Malwa",
      "Alirajpur",
      "Anuppur",
      "Ashoknagar",
      "Balaghat",
      "Barwani",
      "Betul",
      "Bhind",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Dindori",
      "Guna",
      "Gwalior",
      "Harda",
      "Hoshangabad",
      "Indore",
      "Jabalpur",
      "Jhabua",
      "Katni",
      "Khandwa",
      "Khargone",
      "Mandla",
      "Mandsaur",
      "Morena",
      "Narsinghpur",
      "Neemuch",
      "Panna",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shajapur",
      "Sheopur",
      "Shivpuri",
      "Sidhi",
      "Singrauli",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha"
    ],
    "Maharashtra": [
      "Ahmednagar",
      "Akola",
      "Amravati",
      "Aurangabad",
      "Beed",
      "Bhandara",
      "Buldhana",
      "Chandrapur",
      "Dhule",
      "Gadchiroli",
      "Gondia",
      "Hingoli",
      "Jalgaon",
      "Jalna",
      "Kolhapur",
      "Latur",
      "Mumbai City",
      "Mumbai Suburban",
      "Nagpur",
      "Nanded",
      "Nandurbar",
      "Nashik",
      "Osmanabad",
      "Palghar",
      "Parbhani",
      "Pune",
      "Raigad",
      "Ratnagiri",
      "Sangli",
      "Satara",
      "Sindhudurg",
      "Solapur",
      "Thane",
      "Wardha",
      "Washim",
      "Yavatmal"
    ],
    "Manipur": [
      "Bishnupur",
      "Chandel",
      "Churachandpur",
      "Imphal East",
      "Imphal West",
      "Jiribam",
      "Kakching",
      "Kamjong",
      "Kangpokpi",
      "Noney",
      "Pherzawl",
      "Senapati",
      "Tamenglong",
      "Tengnoupal",
      "Thoubal",
      "Ukhrul"
    ],
    "Meghalaya": [
      "East Garo Hills",
      "East Jaintia Hills",
      "East Khasi Hills",
      "North Garo Hills",
      "Ri Bhoi",
      "South Garo Hills",
      "South West Garo Hills ",
      "South West Khasi Hills",
      "West Garo Hills",
      "West Jaintia Hills",
      "West Khasi Hills"
    ],
    "Mizoram": [
      "Aizawl",
      "Champhai",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saiha",
      "Serchhip"
    ],
    "Nagaland": [
      "Dimapur",
      "Kiphire",
      "Kohima",
      "Longleng",
      "Mokokchung",
      "Mon",
      "Peren",
      "Phek",
      "Tuensang",
      "Wokha",
      "Zunheboto"
    ],
    "Odisha": [
      "Angul",
      "Balangir",
      "Balasore",
      "Bargarh",
      "Bhadrak",
      "Boudh",
      "Cuttack",
      "Deogarh",
      "Dhenkanal",
      "Gajapati",
      "Ganjam",
      "Jagatsinghapur",
      "Jajpur",
      "Jharsuguda",
      "Kalahandi",
      "Kandhamal",
      "Kendrapara",
      "Kendujhar (Keonjhar)",
      "Khordha",
      "Koraput",
      "Malkangiri",
      "Mayurbhanj",
      "Nabarangpur",
      "Nayagarh",
      "Nuapada",
      "Puri",
      "Rayagada",
      "Sambalpur",
      "Sonepur",
      "Sundargarh"
    ],
    "Puducherry (UT)": [
      "Karaikal",
      "Mahe",
      "Pondicherry",
      "Yanam"
    ],
    "Punjab": [
      "Amritsar",
      "Barnala",
      "Bathinda",
      "Faridkot",
      "Fatehgarh Sahib",
      "Fazilka",
      "Ferozepur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Kapurthala",
      "Ludhiana",
      "Mansa",
      "Moga",
      "Muktsar",
      "Nawanshahr (Shahid Bhagat Singh Nagar)",
      "Pathankot",
      "Patiala",
      "Rupnagar",
      "Sahibzada Ajit Singh Nagar (Mohali)",
      "Sangrur",
      "Tarn Taran"
    ],
    "Rajasthan": [
      "Ajmer",
      "Alwar",
      "Banswara",
      "Baran",
      "Barmer",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Dholpur",
      "Dungarpur",
      "Hanumangarh",
      "Jaipur",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Karauli",
      "Kota",
      "Nagaur",
      "Pali",
      "Pratapgarh",
      "Rajsamand",
      "Sawai Madhopur",
      "Sikar",
      "Sirohi",
      "Sri Ganganagar",
      "Tonk",
      "Udaipur"
    ],
    "Sikkim": [
      "East Sikkim",
      "North Sikkim",
      "South Sikkim",
      "West Sikkim"
    ],
    "statename": [],
    "Tamil Nadu": [
      "Ariyalur",
      "Chennai",
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri",
      "Dindigul",
      "Erode",
      "Kanchipuram",
      "Kanyakumari",
      "Karur",
      "Krishnagiri",
      "Madurai",
      "Nagapattinam",
      "Namakkal",
      "Nilgiris",
      "Perambalur",
      "Pudukkottai",
      "Ramanathapuram",
      "Salem",
      "Sivaganga",
      "Thanjavur",
      "Theni",
      "Thoothukudi (Tuticorin)",
      "Tiruchirappalli",
      "Tirunelveli",
      "Tiruppur",
      "Tiruvallur",
      "Tiruvannamalai",
      "Tiruvarur",
      "Vellore",
      "Viluppuram",
      "Virudhunagar"
    ],
    "Telangana": [
      "Adilabad",
      "Bhadradri Kothagudem",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Jayashankar Bhoopalpally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem Asifabad",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal",
      "Nagarkurnool",
      "Nalgonda",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Rangareddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Wanaparthy",
      "Warangal (Rural)",
      "Warangal (Urban)",
      "Yadadri Bhuvanagiri"
    ],
    "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"
    ],
    "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar",
      "Uttarkashi"
    ],
    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi (Chatrapati Sahuji Mahraj Nagar)", "Amroha (J.P. Nagar)", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur (Panchsheel Nagar)", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar (Kasganj)", "Kaushambi", "Kushinagar (Padrauna)", "Lakhimpur - Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur", "Saharanpur", "Sambhal (Bhim Nagar)", "Sant Kabir Nagar", "Shahjahanpur", "Shamali (Prabuddh Nagar)", "Shravasti", "Siddharth Nagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
    ],
    "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur (South Dinajpur)", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur (West Medinipur)", "Paschim (West) Burdwan (Bardhaman)", "Purba Burdwan (Bardhaman)", "Purba Medinipur (East Medinipur)", "Purulia", "South 24 Parganas", "Uttar Dinajpur (North Dinajpur)"
    ]
  };


}
