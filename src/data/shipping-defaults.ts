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
    cityNameEn: "Greater Cairo (Bab El-Louq & Downtown)",
    cityNameAr: "القاهرة الكبرى (باب اللوق ووسط البلد)",
    rateUSD: 0.99, // 50 EGP
    estimatedDelivery: "خلال 24 ساعة",
    isActive: true,
  },
  {
    id: "giza",
    cityNameEn: "Giza & 6th of October",
    cityNameAr: "الجيزة و 6 أكتوبر",
    rateUSD: 0.99, // 50 EGP
    estimatedDelivery: "خلال 24-48 ساعة",
    isActive: true,
  },
  {
    id: "alexandria",
    cityNameEn: "Alexandria",
    cityNameAr: "الإسكندرية",
    rateUSD: 1.98, // 100 EGP
    estimatedDelivery: "1-2 يوم عمل",
    isActive: true,
  },
  {
    id: "delta",
    cityNameEn: "Mansoura & Delta Governorates",
    cityNameAr: "المنصورة ومحافظات الدلتا",
    rateUSD: 1.98, // 100 EGP
    estimatedDelivery: "2-3 أيام عمل",
    isActive: true,
  },
  {
    id: "gharbia",
    cityNameEn: "Tanta & Gharbia",
    cityNameAr: "طنطا والغربية",
    rateUSD: 1.98, // 100 EGP
    estimatedDelivery: "2-3 أيام عمل",
    isActive: true,
  },
  {
    id: "canal",
    cityNameEn: "Suez, Port Said & Ismailia",
    cityNameAr: "مدن القناة (السويس، بورسعيد، الإسماعيلية)",
    rateUSD: 2.97, // 150 EGP
    estimatedDelivery: "2-3 أيام عمل",
    isActive: true,
  },
  {
    id: "redsea",
    cityNameEn: "Hurghada & Red Sea",
    cityNameAr: "الغردقة والبحر الأحمر",
    rateUSD: 3.96, // 200 EGP
    estimatedDelivery: "2-4 أيام عمل",
    isActive: true,
  },
  {
    id: "sinai",
    cityNameEn: "Sharm El-Sheikh & Sinai",
    cityNameAr: "شرم الشيخ وجنوب سيناء",
    rateUSD: 3.96, // 200 EGP
    estimatedDelivery: "3-4 أيام عمل",
    isActive: true,
  },
  {
    id: "upperegypt",
    cityNameEn: "Assiut & Upper Egypt",
    cityNameAr: "أسيوط ومحافظات الصعيد",
    rateUSD: 4.95, // 250 EGP
    estimatedDelivery: "2-4 أيام عمل",
    isActive: true,
  },
];

export const DEFAULT_SHIPPING_SETTINGS: ShippingSettings = {
  enableFreeShipping: false,
  freeShippingThresholdUSD: 0,
  calculationMode: "city",
  flatRateUSD: 0.99, // 50 EGP fallback
  enableExpressShipping: false,
  expressSurchargeUSD: 0,
  codHandlingFeeUSD: 0,
  freeShippingBannerText: "",
  defaultEstimatedDelivery: "1-3 Business Days",
  cityRates: DEFAULT_CITY_SHIPPING_RATES,
};

