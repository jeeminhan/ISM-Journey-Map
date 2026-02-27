import { WorldviewBackground } from "./types";

export interface WorldMapCountry {
  id: string;
  name: string;
  region: string;
  background: WorldviewBackground;
  description: string;
  latitude: number;
  longitude: number;
}

export const worldMapCountries: WorldMapCountry[] = [
  {
    id: "usa",
    name: "United States",
    region: "North America",
    background: "secular",
    description: "Many international students arrive expecting high achievement culture and pragmatic relationships.",
    latitude: 39,
    longitude: -98,
  },
  {
    id: "mexico",
    name: "Mexico",
    region: "North America",
    background: "nominal",
    description: "Faith language is often familiar culturally, but personal discipleship depth varies widely.",
    latitude: 23,
    longitude: -102,
  },
  {
    id: "brazil",
    name: "Brazil",
    region: "South America",
    background: "nominal",
    description: "Spiritual vocabulary is often accessible, while trust and belonging shape openness.",
    latitude: -10,
    longitude: -51,
  },
  {
    id: "uk",
    name: "United Kingdom",
    region: "Europe",
    background: "secular",
    description: "Students often frame questions through skepticism, evidence, and institutional trust concerns.",
    latitude: 54,
    longitude: -2,
  },
  {
    id: "nigeria",
    name: "Nigeria",
    region: "Africa",
    background: "nominal",
    description: "Christian identity is common, though lived practice can range from nominal to deeply committed.",
    latitude: 9,
    longitude: 8,
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    region: "Middle East",
    background: "muslim",
    description: "Honor, family reputation, and social belonging strongly influence spiritual exploration.",
    latitude: 24,
    longitude: 45,
  },
  {
    id: "india",
    name: "India",
    region: "South Asia",
    background: "hindu",
    description: "Devotional patterns and cultural identity are deeply connected in how students process faith.",
    latitude: 22,
    longitude: 78,
  },
  {
    id: "china",
    name: "China",
    region: "East Asia",
    background: "secular",
    description: "Questions often emerge through academic pressure, identity search, and community trust.",
    latitude: 35,
    longitude: 104,
  },
  {
    id: "japan",
    name: "Japan",
    region: "East Asia",
    background: "buddhist",
    description: "Relational consistency and experiential peace can open conversations more than debate.",
    latitude: 37,
    longitude: 138,
  },
  {
    id: "indonesia",
    name: "Indonesia",
    region: "Southeast Asia",
    background: "muslim",
    description: "Community expectations and interdependence are key factors in spiritual decisions.",
    latitude: -2,
    longitude: 118,
  },
  {
    id: "australia",
    name: "Australia",
    region: "Oceania",
    background: "secular",
    description: "Students may be open to spiritual conversations but resistant to institutional religion.",
    latitude: -25,
    longitude: 134,
  },
];
