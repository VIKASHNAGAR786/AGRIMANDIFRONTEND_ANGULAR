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
    farmerName: string;
    state?: string;
    district?: string;
    market?: string;
    farmer?: string;
    farmerPhone?: string;
    farmerAddress?: string;
    postalCode?: string;
    farmingType?: string; // Organic, Conventional, etc.
    landArea?: string; // Acres, Hectares, etc.
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
    farmerEmail?: string;         // User ID associated with the product
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

  export interface PriceApiResponseDto {
  index_Name: string;
  title: string;
  desc: string;
  org_Type: string;
  org: string[];
  sector: string[];
  source: string;
  catalog_Uuid: string;
  visualizable: string;
  active: string;
  created: number;
  updated: number;
  created_Date: string;
  updated_Date: string;
  external_Ws: number;
  external_Ws_Url: string;
  target_Bucket: TargetBucketDto;
  field: FieldDto[];
  field_Dependent: { [key: string]: FieldDependencyDto };
  order: OrderDto[];
  field_Exposed: FieldExposedDto[];
  message: string;
  version: string;
  status: string;
  total: number;
  count: number;
  limit: string;
  offset: string;
  records: PriceRecordDto[];
}

export interface TargetBucketDto {
  index: string;
  type: string;
  field: string;
}

export interface FieldDto {
  name: string;
  id: string;
  type: string;
}

export interface FieldDependencyDto {
  parent: string;
  child: string;
}

export interface OrderDto {
  name: string;
  id: string;
}

export interface FieldExposedDto {
  name: string;
  id: string;
  type: string;
  mandatory: boolean;
  format?: string; // optional, only present in Arrival_Date
}

export interface PriceRecordDto {
  state: string;
  district: string;
  market: string;
  commodity: string;
  variety: string;
  grade: string;
  arrival_Date: string;   // keep as string (API returns dd/MM/yyyy)
  min_Price: string;
  max_Price: string;
  modal_Price: string;
  commodity_Code: string;
}

