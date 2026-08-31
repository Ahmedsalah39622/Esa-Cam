export type ShippingCalculationMode = "city" | "flat";

export interface CityShippingRate {
  id: string;
  cityNameEn: string;
  cityNameAr: string;
  rateUSD: number;
  estimatedDelivery: string;
  isActive: boolean;
}

export interface ShippingSettings {
  // Global policies
  enableFreeShipping: boolean;
  freeShippingThresholdUSD: number;
  calculationMode: ShippingCalculationMode;
  flatRateUSD: number;
  
  // Extra options
  enableExpressShipping: boolean;
  expressSurchargeUSD: number;
  codHandlingFeeUSD: number;
  
  // Text announcement
  freeShippingBannerText: string;
  defaultEstimatedDelivery: string;

  // City-specific matrix
  cityRates: CityShippingRate[];
}

export const DEFAULT_CITY_SHIPPING_RATES: CityShippingRate[] = [
  {
    id: "cairo",
    cityNameEn: "Greater Cairo",
    cityNameAr: "القاهرة الكبرى",
    rateUSD: 15,
    estimatedDelivery: "Same-Day / 24 Hours",
    isActive: true,
  },
  {
    id: "giza",
    cityNameEn: "Giza & 6th of October",
    cityNameAr: "الجيزة و 6 أكتوبر",
    rateUSD: 15,
    estimatedDelivery: "24 Hours",
    isActive: true,
  },
  {
    id: "alexandria",
    cityNameEn: "Alexandria",
    cityNameAr: "الإسكندرية",
    rateUSD: 20,
    estimatedDelivery: "1-2 Business Days",
    isActive: true,
  },
  {
    id: "delta",
    cityNameEn: "Mansoura & Delta Governorates",
    cityNameAr: "المنصورة ومحافظات الدلتا",
    rateUSD: 22,
    estimatedDelivery: "2-3 Business Days",
    isActive: true,
  },
  {
    id: "gharbia",
    cityNameEn: "Tanta & Gharbia",
    cityNameAr: "طنطا والغربية",
    rateUSD: 22,
    estimatedDelivery: "2-3 Business Days",
    isActive: true,
  },
  {
    id: "canal",
    cityNameEn: "Suez, Port Said & Ismailia",
    cityNameAr: "مدن القناة (السويس، بورسعيد، الإسماعيلية)",
    rateUSD: 25,
    estimatedDelivery: "2-3 Business Days",
    isActive: true,
  },
  {
    id: "redsea",
    cityNameEn: "Hurghada & Red Sea",
    cityNameAr: "الغردقة والبحر الأحمر",
    rateUSD: 30,
    estimatedDelivery: "2-4 Business Days",
    isActive: true,
  },
  {
    id: "sinai",
    cityNameEn: "Sharm El-Sheikh & Sinai",
    cityNameAr: "شرم الشيخ وجنوب سيناء",
    rateUSD: 35,
    estimatedDelivery: "3-4 Business Days",
    isActive: true,
  },
  {
    id: "upperegypt",
    cityNameEn: "Assiut & Upper Egypt",
    cityNameAr: "أسيوط ومحافظات الصعيد",
    rateUSD: 30,
    estimatedDelivery: "2-4 Business Days",
    isActive: true,
  },
];

export const DEFAULT_SHIPPING_SETTINGS: ShippingSettings = {
  enableFreeShipping: true,
  freeShippingThresholdUSD: 500,
  calculationMode: "city",
  flatRateUSD: 25,
  enableExpressShipping: true,
  expressSurchargeUSD: 15,
  codHandlingFeeUSD: 0,
  freeShippingBannerText: "VIP Fragile-Cine Express Shipping Free for orders over $500",
  defaultEstimatedDelivery: "1-3 Business Days",
  cityRates: DEFAULT_CITY_SHIPPING_RATES,
};
