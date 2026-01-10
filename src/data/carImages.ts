const assetBase = "/assets/cars";

export const carImages = {
  audiLuxury: `${assetBase}/Audi (Luxury) — Mythos Black.webp`,
  bmwLuxury: `${assetBase}/BMW (Luxury) — Alpine White.webp`,
  bmw: `${assetBase}/BMW — Alpine White.webp`,
  hyundaiI20: `${assetBase}/Hyundai i20 — Polar White.webp`,
  jaguarXf: `${assetBase}/Jaguar XF — Santorini Black.webp`,
  jaguarXjl: `${assetBase}/jaguar XJL — Metallic Emerald Green.webp`,
  marutiBaleno: `${assetBase}/Maruti Suzuki Baleno — Nexa Blue.webp`,
  marutiErtiga: `${assetBase}/Maruti Suzuki Ertiga — Splendid Silver.webp`,
  marutiFronx: `${assetBase}/Maruti Suzuki Fronx — Arctic White.webp`,
  marutiSwift: `${assetBase}/Maruti Suzuki Swift — Fire Red.webp`,
  marutiXl6: `${assetBase}/Maruti Suzuki XL6 — Grandeur Grey.webp`,
  rangeRoverEvoque: `${assetBase}/Range Rover Evoque — Fuji White.webp`,
  renaultTriber: `${assetBase}/Renault Triber — Metal Mustard.webp`,
  toyotaFortunerLegender: `${assetBase}/Toyota Fortuner (Legender) — Dual-Tone White & Black.webp`,
  toyotaFortuner: `${assetBase}/Toyota Fortuner — White.webp`,
  toyotaInnovaCrysta: `${assetBase}/Toyota Innova Crysta — White Pearl Crystal Shin.webp`,
  toyotaInnova: `${assetBase}/Toyota Innova — White.webp`,
  bus40Seater: `${assetBase}/40 SEATER BUS.webp`,
  travellerCoach: `${assetBase}/Traveller.webp`,
} as const;

export type CarImageKey = keyof typeof carImages;
