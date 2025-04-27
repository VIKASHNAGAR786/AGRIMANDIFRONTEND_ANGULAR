export interface UpdateBuyer {
    user_id: number;
    // Contact Info
    contactNumber?: string;
    alternateContact?: string;
    emailVerified?: boolean;
    phoneVerified?: boolean;
    // Location Info
    address?: string;
    city?: string;
    state?: string;
    country?: string; // default can be "India" on form load
    pincode?: string;
    geoLat?: number;
    geoLong?: number;
    // Business Info
    companyName?: string;
    companyType?: string;
    gstNumber?: string;
    panNumber?: string;
    isVerified?: boolean;
    // Purchase Preferences
    preferredCrops?: string; // comma-separated or array if you want multiselect
    budgetRange?: string;
    purchaseFrequency?: string;
    preferredPaymentMethod?: string;
    // Engagement Metrics
    lastPurchaseDate?: Date;
    totalOrders?: number;
    totalSpent?: number;
    loyaltyPoints?: number;
    buyerRating?: number;
  }

  export interface Farmer {
    phoneNumber?: string;
    address?: string;
    state?: string;
    district?: string;
    village?: string;
    postalCode?: string;
    landArea?: number;
    farmingType?: string;
    farmerId?: number;
  }

  export interface FarmerDTO {
    name?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
    state?: string;
    district?: string;
    village?: string;
    postalCode?: string;
    landArea?: number;
    farmingType?: string;
    status?: string;
  }
  
  export interface AllBuyer {
    buyerId: number;
    userId: number;
    profileimage: string | null;
    contactNumber: string;
    alternateContact: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    geoLat: number;
    geoLong: number;
    companyName: string;
    companyType: string;
    gstNumber: string;
    panNumber: string;
    isVerified: boolean;
    preferredCrops: string;
    budgetRange: string;
    purchaseFrequency: string;
    preferredPaymentMethod: string;
    lastPurchaseDate: string;  // if it's a DateTime in backend, you can also use Date type
    totalOrders: number;
    totalSpent: number;
    loyaltyPoints: number;
    buyerRating: number;

    bytes: string;    // (base64 string of file)
    contenttype: string;  // (example: 'image/png')
    // 🔥 Also optionally add this helper field (not from backend, created in frontend)
    profileImageUrl?: string; // (Blob URL to display image in UI)
  }
  
  export interface BuyerById {
    contactNumber?: string;
    alternateContact: string;
    emailVerified : boolean;
    phoneVerified : boolean;
    address : string;
    city : string;
    state : string;
    country : string;
    pincode : string;
    geoLat : number;
    geoLong : number;
    companyName : string;
    companyType : string;
    gstNumber : string;
    panNumber : string;
    isVerified : boolean;
    preferredCrops : string;
    budgetRange : string;
    purchaseFrequency : string;
    preferredPaymentMethod : string;
    lastPurchaseDate : string;  // if it's a DateTime in ba
    totalOrders : number;
    totalSpent : number;
    loyaltyPoints : number;
    buyerRating : number;
    profileImageUrl?: string; 
  
  }
  
  export interface BuyerByIdForProfile {
    contactNumber?: string;
    alternateContact: string;
    emailVerified : boolean;
    phoneVerified : boolean;
    address : string;
    city : string;
    state : string;
    country : string;
    pincode : string;
    geoLat : number;
    geoLong : number;
    companyName : string;
    companyType : string;
    gstNumber : string;
    panNumber : string;
    isVerified : boolean;
    preferredCrops : string;
    budgetRange : string;
    purchaseFrequency : string;
    preferredPaymentMethod : string;
    lastPurchaseDate : string;  // if it's a DateTime in ba
    totalOrders : number;
    totalSpent : number;
    loyaltyPoints : number;
    buyerRating : number;
  }