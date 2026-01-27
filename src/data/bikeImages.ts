const assetBase = "/assets/bikes";

export const bikeImages = {
  harleyDavidson: `${assetBase}/Harley_Davidson.webp`,
  kawasakiNinjaZX10R: `${assetBase}/Kawasaki_Ninja_ZX-10R.webp`,
  kawasakiZ800: `${assetBase}/Kawasaki_Z800.webp`,
  kawasakiZ900: `${assetBase}/Kawasaki_Z900.webp`,
  ktmRC390: `${assetBase}/KTM_RC_390.webp`,
  royalEnfieldBullet350: `${assetBase}/Royal_Enfield_Bullet_350.webp`,
  royalEnfieldGT650: `${assetBase}/Royal_Enfield_GT_650.webp`,
  suzukiHayabusa: `${assetBase}/Suzuki_GSX1300R_Hayabusa.webp`,
} as const;

export type BikeImageKey = keyof typeof bikeImages;
