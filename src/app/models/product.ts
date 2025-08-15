// src/app/models/product.ts
export interface Product {
    productid : number;
    name?: string;
    description?: string;
    category?: string;         // Grains, Fruits, etc.
    type?: string;
    variety?: string;
    grade?: string;            // A, B, C, Organic, etc.
    quantity: number;
    unit?: string;             // Kg, Quintal, Ton, etc.
    pricePerUnit: number;
    totalPrice: number;
    availability: boolean;
    location?: string;
    harvestDate?: Date;
    expiryDate?: Date;
    storageCondition?: string;
    packagingType?: string;
    certification?: string;
    imageUrl?: string;
    farmerId: number;          // Used internally
    addedDate: Date;
    updatedDate: Date;
    status?: string;           // Available, Sold, etc.
  }
  
  export interface ProductByID {
    productid : number;
    name?: string;
    description?: string;
    category?: string;         // Grains, Fruits, etc.
    type?: string;
    variety?: string;
    grade?: string;            // A, B, C, Organic, etc.
    quantity: number;
    unit?: string;             // Kg, Quintal, Ton, etc.
    pricePerUnit: number;
    totalPrice: number;
    availability: boolean;
    location?: string;
    harvestDate?: Date;
    expiryDate?: Date;
    storageCondition?: string;
    packagingType?: string;
    certification?: string;
    imageUrl?: string;
    farmerId: number;          // Used internally
    addedDate: Date;
    updatedDate: Date;
    status?: string;  
    userId?: number;         // User ID associated with the product
  }

  export interface UserByproduct {
    name: string;
    description?: string;
    category: string;
    type?: string;
    variety?: string;
    grade: string;
    quantity: number;
    unit: string;
    pricePerUnit: number;
    totalPrice: number;
    availability: boolean;
    location?: string;
    harvestDate?: Date;
    expiryDate?: Date;
    storageCondition?: string;
    packagingType?: string;
    certification?: string;
    imageUrl?: string;
    addedDate?: Date;
    updatedDate?: Date;
    status: string;
  }
  export interface ProductFilter {
         Name?: string | null;
          Category?: string | null;
          Location?: string | null;
          MinPrice?: number | null;
          MaxPrice?: number | null;
          Availability?: boolean | null;
  }