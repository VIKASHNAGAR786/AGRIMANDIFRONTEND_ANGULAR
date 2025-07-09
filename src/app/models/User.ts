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

  // Index signature to allow dynamic access
  [key: string]: string | number | boolean | Date | undefined;
}


// export interface Farmer {
// phoneNumber?: string;
// address?: string;
// state?: string;
// district?: string;
// village?: string;
// postalCode?: string;
// landArea?: number;
// farmingType?: string;
// farmerId?: number;
// }

export interface Farmer {
  phoneNumber: string | null;
  address: string | null;
  state: string | null;
  district: string | null;
  village: string | null;
  postalCode: string | null;
  landArea: number | null;
  farmingType: string | null;
  farmerId: number | null;
  [key: string]: string | number | null;
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
  lastPurchaseDate: string;
  totalOrders: number;
  totalSpent: number;
  loyaltyPoints: number;
  buyerRating: number;
  profileImageUrl?: string;
}

export interface BuyerById {
  contactNumber?: string;
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
  lastPurchaseDate: string;  // if it's a DateTime in ba
  totalOrders: number;
  totalSpent: number;
  loyaltyPoints: number;
  buyerRating: number;
  profileImageUrl?: string;

}

export interface BuyerByIdForProfile {
  contactNumber?: string;
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
  lastPurchaseDate: string;  // if it's a DateTime in ba
  totalOrders: number;
  totalSpent: number;
  loyaltyPoints: number;
  buyerRating: number;
}

export interface MessageDTO {
  id: number;
  productId: number;
  buyerId: number;
  message: string;
  isRead: boolean;
  createdAt: string; // Use ISO 8601 string for DateTime
  type: string;
}
export interface UserRoleDto {
  roleid: number;
  role: string;
}
export interface MessageToFarmerModel
 {
   //receiver
   farmerid: number
   //sender
   BuyerId: number
   MessageText: string 
   RelatedProductId: number;
 }
