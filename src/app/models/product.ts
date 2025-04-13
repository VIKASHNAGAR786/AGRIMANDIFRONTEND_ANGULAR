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
    status?: string;           // Available, Sold, etc.
  }