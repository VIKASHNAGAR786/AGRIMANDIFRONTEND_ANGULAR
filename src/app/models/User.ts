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
  