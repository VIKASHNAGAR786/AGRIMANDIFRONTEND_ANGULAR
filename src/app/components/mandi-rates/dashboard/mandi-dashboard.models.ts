export interface PriceTrendPoint {
  label: string;
  value: number;
}

export interface MarketComparisonItem {
  market: string;
  avgPrice: number;
  records: number;
}

export interface DemandSupplyItem {
  commodity: string;
  supply: number;
  demand: number;
}

export interface CropWindowAverage {
  label: string;
  value: number;
}

export interface KpiCard {
  label: string;
  value: string;
  hint: string;
  tone?: 'success' | 'warning' | 'danger' | 'neutral';
}

export interface TopCropItem {
  commodity: string;
  avgPrice: number;
  records: number;
  trend: 'up' | 'down' | 'flat';
}

export interface CropDistributionItem {
  commodity: string;
  share: number;
  records: number;
}

export interface CropPriceTag {
  commodity: string;
  price: number;
}

export interface MandiDashboardData {
  kpis: KpiCard[];
  windowAverages: CropWindowAverage[];
  priceTrend: PriceTrendPoint[];
  marketComparison: MarketComparisonItem[];
  demandSupply: DemandSupplyItem[];
  topCrops: TopCropItem[];
  cropDistribution: CropDistributionItem[];
  highestPriceCrop: CropPriceTag | null;
  lowestPriceCrop: CropPriceTag | null;
}
