// Apartment Corp Properties Data
// Design: Industrial Steel Command Center
// 44 properties across 5 regions — Crossroads of Lee Summit added to Region 2

export type PropertyType = "Section 8" | "LIHTC" | "Layered" | "Section 8 + Voucher" | "Section 8 / LIHTC";

export interface Property {
  id: number;
  name: string;
  region: number;
  address: string;
  city: string;
  state: string;
  units: number | null;
  type: PropertyType;
  website: string;
  apartmentsCom: string;
  notes: string;
  lat: number;
  lng: number;
}

export interface Region {
  id: number;
  label: string;
  states: string;
  color: string;
}

export const REGIONS: Record<number, Region> = {
  1: { id: 1, label: "Region 1", states: "FL · MS", color: "#6b7280" },
  2: { id: 2, label: "Region 2", states: "OH · TX · CA · MO", color: "#4070b8" },
  3: { id: 3, label: "Region 3", states: "LA · FL", color: "#4070b8" },
  4: { id: 4, label: "Region 4", states: "AR · CA · GA", color: "#d88840" },
  5: { id: 5, label: "Region 5", states: "NC", color: "#d88840" },
};

export const PROPERTY_TYPES: Record<PropertyType, { label: string; colorClass: string; dotColor: string; pinColor: string }> = {
  "Section 8": { label: "Section 8 / HUD", colorClass: "metal-orange", dotColor: "#d88840", pinColor: "#c87830" },
  "LIHTC": { label: "LIHTC", colorClass: "metal-blue", dotColor: "#4070b8", pinColor: "#3060a8" },
  "Layered": { label: "Layered HUD/LIHTC", colorClass: "metal-yellow", dotColor: "#c8a840", pinColor: "#a89030" },
  "Section 8 + Voucher": { label: "Section 8 + Voucher", colorClass: "metal-orange", dotColor: "#d88840", pinColor: "#c87830" },
  "Section 8 / LIHTC": { label: "Section 8 / LIHTC", colorClass: "metal-orange", dotColor: "#d88840", pinColor: "#c87830" },
};

export const PROPERTIES: Property[] = [
  // Region 1 — FL · MS
  { id: 1, name: "Boca Ciega", region: 1, address: "3401 37th Street South", city: "St. Petersburg", state: "FL", units: 109, type: "Layered", website: "https://bocaciegaresort.com/", apartmentsCom: "https://www.apartments.com/boca-ciega-point-east-condominimums-saint-petersburg-fl/60lj1ns/", notes: "Layered HUD / LIHTC", lat: 27.7360, lng: -82.6880 },
  { id: 2, name: "Jefferson Arms", region: 1, address: "1425 E. Clark Ave", city: "Monticello", state: "FL", units: 75, type: "Section 8", website: "https://jeffersonarmsapartments.com/", apartmentsCom: "https://www.apartments.com/jefferson-arms-apartments-monticello-fl/", notes: "", lat: 30.5443, lng: -83.8710 },
  { id: 3, name: "Opa Locka (135th Street)", region: 1, address: "2860 NW 135th Street", city: "Opa Locka", state: "FL", units: 65, type: "Section 8", website: "", apartmentsCom: "https://www.apartments.com/135th-street-apartments-opa-locka-fl/m7zbpnl/", notes: "Listed as 135th Street Apts", lat: 25.9073, lng: -80.2494 },
  { id: 4, name: "Macedonia Garden", region: 1, address: "1722 W 17th Street", city: "Panama City", state: "FL", units: 100, type: "Section 8", website: "", apartmentsCom: "https://www.apartments.com/macedonia-garden-apartments-panama-city-fl/6ct1e1t/", notes: "", lat: 30.1588, lng: -85.6602 },
  { id: 5, name: "Coral Village", region: 1, address: "", city: "Cape Coral", state: "FL", units: 72, type: "Section 8", website: "", apartmentsCom: "", notes: "", lat: 26.5629, lng: -81.9495 },
  { id: 6, name: "Holiday Apartments", region: 1, address: "601 Old Washington Road", city: "Natchez", state: "MS", units: 115, type: "Section 8", website: "", apartmentsCom: "https://www.apartments.com/holiday-apartments-natchez-ms/9b2xv67/", notes: "", lat: 31.5607, lng: -91.4032 },
  { id: 7, name: "Cumberland Apartments", region: 1, address: "100 Cumberland Drive", city: "Crystal Springs", state: "MS", units: 68, type: "Section 8 + Voucher", website: "", apartmentsCom: "https://www.apartments.com/cumberland-apartments-crystal-springs-ms/", notes: "60 HUD / 8 Voucher", lat: 31.9877, lng: -90.3571 },
  { id: 9, name: "Walnut Hill", region: 1, address: "", city: "Natchez", state: "MS", units: 168, type: "Section 8", website: "", apartmentsCom: "", notes: "", lat: 31.5604, lng: -91.4032 },

  // Region 2 — OH · TX · CA · MO
  { id: 10, name: "River Pointe", region: 2, address: "777 Avonia Drive", city: "Columbus", state: "OH", units: 160, type: "Section 8", website: "http://theriverpointeapartments.com/", apartmentsCom: "https://www.apartments.com/river-pointe-apartments-columbus-oh/qpb5tdy/", notes: "", lat: 39.9366, lng: -83.1202 },
  { id: 11, name: "Breckenridge Village", region: 2, address: "2001 N Floyd St", city: "Ennis", state: "TX", units: 66, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/breckenridge-village-ennis-tx/9ffc8q6/", notes: "", lat: 32.3296, lng: -96.6252 },
  { id: 12, name: "Lexington Arms", region: 2, address: "418 Lexington Dr", city: "Waxahachie", state: "TX", units: 61, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/lexington-arms-waxahachie-tx/7vpy3jz/", notes: "", lat: 32.3868, lng: -96.8453 },
  { id: 13, name: "Grace Townhomes", region: 2, address: "1212 Grace Circle", city: "Ennis", state: "TX", units: 112, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/grace-townhomes-ennis-tx/f2pdser/", notes: "", lat: 32.3240, lng: -96.6210 },
  { id: 14, name: "Grove Park Terrace", region: 2, address: "400 Peters St", city: "Waxahachie", state: "TX", units: 60, type: "Layered", website: "", apartmentsCom: "https://www.apartments.com/grove-park-terrace-waxahachie-tx/lc874fd/", notes: "Layered HUD / LIHTC", lat: 32.3868, lng: -96.8453 },
  { id: 15, name: "La Promesa", region: 2, address: "", city: "Odessa", state: "TX", units: 136, type: "Layered", website: "https://lapromesaodessa.com/", apartmentsCom: "", notes: "Layered HUD / LIHTC", lat: 31.8457, lng: -102.3677 },
  { id: 16, name: "New Wilmington Arms", region: 2, address: "700 W. Laurel Avenue", city: "Compton", state: "CA", units: null, type: "Section 8", website: "https://newwilmingtonarms.loftliving.com/", apartmentsCom: "https://www.apartments.com/new-wilmington-arms-apartments-compton-ca/z19ppgw/", notes: "", lat: 33.8958, lng: -118.2201 },
  { id: 44, name: "Crossroads of Lee Summit", region: 2, address: "NE Town Centre Blvd", city: "Lee's Summit", state: "MO", units: 160, type: "Section 8", website: "", apartmentsCom: "", notes: "", lat: 38.9108, lng: -94.3477 },

  // Region 3 — LA · FL
  { id: 17, name: "Gates on Manhattan", region: 3, address: "1050 Manhattan Blvd", city: "Harvey", state: "LA", units: 276, type: "Section 8", website: "", apartmentsCom: "https://www.apartments.com/the-gates-on-manhattan-harvey-la/tsb9h28/", notes: "", lat: 29.9010, lng: -90.0773 },
  { id: 18, name: "Ruby Diamond", region: 3, address: "", city: "Marrero", state: "LA", units: 73, type: "LIHTC", website: "", apartmentsCom: "", notes: "", lat: 29.8988, lng: -90.1068 },
  { id: 19, name: "Star Homes", region: 3, address: "2020 Melba Place", city: "Marrero", state: "LA", units: 48, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/star-homes-marrero-la/", notes: "", lat: 29.8988, lng: -90.1068 },
  { id: 20, name: "Thibodaux (Colonial Estates)", region: 3, address: "1300 Ridgefield Ave", city: "Thibodaux", state: "LA", units: 107, type: "Section 8", website: "", apartmentsCom: "https://www.apartments.com/colonial-estates-thibodaux-la/ypq74xt/", notes: "Now listed as Colonial Estates", lat: 29.7958, lng: -90.8204 },
  { id: 21, name: "Marrero 3", region: 3, address: "1050 Manhattan Blvd", city: "Harvey", state: "LA", units: 173, type: "Section 8", website: "", apartmentsCom: "https://www.apartments.com/the-gates-on-manhattan-harvey-la/tsb9h28/", notes: "", lat: 29.9010, lng: -90.0773 },
  { id: 22, name: "Arbor Crest", region: 3, address: "64 N Cleveland Street", city: "Quincy", state: "FL", units: 120, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/arbor-crest-apartments-quincy-fl/hwht3r2/", notes: "", lat: 30.5871, lng: -84.5827 },
  { id: 23, name: "Windsor / Yorkshire Village", region: 3, address: "2020 N. Hearne Avenue", city: "Shreveport", state: "LA", units: 134, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/windsor-housing-shreveport-la/4k0j34h/", notes: "Windsor (48) + Yorkshire (86)", lat: 32.5252, lng: -93.7502 },
  { id: 24, name: "North Pointe", region: 3, address: "", city: "Bossier City", state: "LA", units: 27, type: "LIHTC", website: "https://northpointebossiercity.com/", apartmentsCom: "", notes: "", lat: 32.5160, lng: -93.7321 },
  { id: 25, name: "Granite Bayou", region: 3, address: "", city: "Baton Rouge", state: "LA", units: 60, type: "LIHTC", website: "", apartmentsCom: "", notes: "", lat: 30.4515, lng: -91.1871 },
  { id: 26, name: "St. Charles Place", region: 3, address: "1011 18th Street", city: "Lake Charles", state: "LA", units: 121, type: "Layered", website: "", apartmentsCom: "https://www.apartments.com/st-charles-housing-affordable-housing-lake-charles-la/hbgslw1/", notes: "95 layered / 26 LIHTC", lat: 30.2266, lng: -93.2174 },
  { id: 27, name: "Pelican Bay", region: 3, address: "2121 N Lobdell Blvd", city: "Baton Rouge", state: "LA", units: 152, type: "Section 8", website: "https://pelicanbayapts.com/", apartmentsCom: "https://www.apartments.com/pelican-bay-apartments-baton-rouge-la/", notes: "", lat: 30.4515, lng: -91.1871 },
  { id: 28, name: "Howell Place", region: 3, address: "4150 72nd Avenue", city: "Baton Rouge", state: "LA", units: 48, type: "Section 8", website: "https://howellplaceapts.com/", apartmentsCom: "https://www.apartments.com/howell-place-apartments-baton-rouge-la/", notes: "", lat: 30.4515, lng: -91.1871 },
  { id: 29, name: "Pirates Bend", region: 3, address: "8165 Plank Road", city: "Baton Rouge", state: "LA", units: 48, type: "Section 8", website: "https://piratesbendapts.com/", apartmentsCom: "https://www.apartments.com/pirates-bend-apartments-baton-rouge-la/", notes: "", lat: 30.5015, lng: -91.1571 },

  // Region 4 — AR · CA · GA
  { id: 30, name: "NWA", region: 4, address: "", city: "Bentonville", state: "AR", units: 162, type: "Section 8", website: "", apartmentsCom: "", notes: "Northwest Arkansas", lat: 36.3729, lng: -94.2088 },
  { id: 31, name: "Anaheim", region: 4, address: "", city: "Anaheim", state: "CA", units: 80, type: "Section 8", website: "", apartmentsCom: "", notes: "75 HUD / 5 Voucher", lat: 33.8366, lng: -117.9143 },
  { id: 32, name: "Fairfax", region: 4, address: "737 1/2 S Genesee Ave", city: "Los Angeles", state: "CA", units: 46, type: "Section 8", website: "", apartmentsCom: "https://www.apartments.com/fairfax-townhomes-los-angeles-ca/l98jvpf/", notes: "45 HUD / 1 Voucher", lat: 34.0522, lng: -118.3617 },
  { id: 33, name: "Urban 1 & 2", region: 4, address: "", city: "Los Angeles", state: "CA", units: 60, type: "LIHTC", website: "", apartmentsCom: "", notes: "", lat: 34.0522, lng: -118.2437 },
  { id: 34, name: "Midtown Manor", region: 4, address: "", city: "Los Angeles", state: "CA", units: 32, type: "LIHTC", website: "", apartmentsCom: "", notes: "", lat: 34.0522, lng: -118.2437 },
  { id: 35, name: "Pacific Pointe", region: 4, address: "1025 Rosemarie Ln", city: "Stockton", state: "CA", units: 80, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/pacific-pointe-apartments-stockton-ca/jdzc6c7/", notes: "", lat: 37.9577, lng: -121.2908 },
  { id: 36, name: "Granite Ridge", region: 4, address: "246 E Iris Ave", city: "Stockton", state: "CA", units: 80, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/granite-ridge-apartments-stockton-ca/23wqw6b/", notes: "", lat: 37.9577, lng: -121.2908 },
  { id: 37, name: "Columbia Village", region: 4, address: "11299 Columbia Village Dr", city: "Sonora", state: "CA", units: 80, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/columbia-village-townhomes-sonora-ca/m3vkq5l/", notes: "", lat: 37.9853, lng: -120.3835 },
  { id: 38, name: "Forest View (Senior)", region: 4, address: "19499 Hess Ave", city: "Sonora", state: "CA", units: 60, type: "LIHTC", website: "", apartmentsCom: "https://www.apartments.com/forest-view-senior-apartments-sonora-ca/5ewpb0n/", notes: "Senior community", lat: 37.9853, lng: -120.3835 },
  { id: 39, name: "Oak Hills", region: 4, address: "10260 Preston Lane", city: "Jamestown", state: "CA", units: 80, type: "LIHTC", website: "https://oakhillsjamestown.com/", apartmentsCom: "https://www.apartments.com/oak-hills-apartments-jamestown-ca/", notes: "", lat: 37.9530, lng: -120.4238 },
  { id: 40, name: "River Garden", region: 4, address: "", city: "Sonora", state: "CA", units: 123, type: "Section 8", website: "", apartmentsCom: "", notes: "", lat: 37.9853, lng: -120.3835 },
  { id: 41, name: "Riverchase", region: 4, address: "106 Tybee Court", city: "Augusta", state: "GA", units: null, type: "Section 8", website: "https://riverchaseaugusta.com/", apartmentsCom: "https://www.apartments.com/riverchase-rental-homes-augusta-ga/j35t2y7/", notes: "", lat: 33.4559, lng: -81.9342 },

  // Region 5 — NC
  { id: 42, name: "Silver Springs Terrace", region: 5, address: "950 NE 20th Street", city: "Hickory", state: "NC", units: 100, type: "Layered", website: "https://www.silver-street.net/property/silver-springs-apartments/", apartmentsCom: "https://www.apartments.com/silver-springs-terrace-hickory-nc/h8sycw1/", notes: "55 Layered / 45 LIHTC Voucher", lat: 35.7332, lng: -81.3412 },
  { id: 43, name: "Thomasville Church Homes", region: 5, address: "904 Doak Street", city: "Thomasville", state: "NC", units: 100, type: "Section 8", website: "", apartmentsCom: "https://www.apartments.com/thomasville-church-homes-thomasville-nc/g33swlz/", notes: "", lat: 35.8926, lng: -80.0994 },
];

export function getRegionStats(regionId: number) {
  const props = PROPERTIES.filter(p => p.region === regionId);
  const totalUnits = props.reduce((sum, p) => sum + (p.units ?? 0), 0);
  const officialSites = props.filter(p => p.website).length;
  return { count: props.length, units: totalUnits, sites: officialSites };
}

export function getAllStats() {
  const totalProps = PROPERTIES.length;
  const totalUnits = PROPERTIES.reduce((sum, p) => sum + (p.units ?? 0), 0);
  const officialSites = PROPERTIES.filter(p => p.website).length;
  const regions = Object.keys(REGIONS).length;
  return { totalProps, totalUnits, officialSites, regions };
}
