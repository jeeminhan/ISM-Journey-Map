"use client";

import { backgrounds } from "@/data/backgrounds";
import worldGeoJson from "@/data/world.json";
import { WorldviewBackground } from "@/data/types";
import { worldMapCountries } from "@/data/worldMapCountries";
import { GeoFeatureCollection, Geometry, Position } from "@/types/geojson";
import { useMemo, useState } from "react";

interface Props {
  selectedBackground: WorldviewBackground;
  onBackgroundChange: (background: WorldviewBackground) => void;
}

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 560;

const fillByWorldview: Record<WorldviewBackground, string> = {
  muslim: "#34d399",
  hindu: "#fbbf24",
  buddhist: "#38bdf8",
  secular: "#e879f9",
  nominal: "#818cf8",
};

function projectToMap(longitude: number, latitude: number) {
  const x = ((longitude + 180) / 360) * MAP_WIDTH;
  const y = ((90 - latitude) / 180) * MAP_HEIGHT;
  return [x, y] as const;
}

function ringToPath(ring: Position[]) {
  if (!ring.length) {
    return "";
  }

  const [firstLon, firstLat] = ring[0];
  const [firstX, firstY] = projectToMap(firstLon, firstLat);
  let d = `M ${firstX.toFixed(2)} ${firstY.toFixed(2)}`;

  for (let i = 1; i < ring.length; i += 1) {
    const [lon, lat] = ring[i];
    const [x, y] = projectToMap(lon, lat);
    d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }

  d += " Z";
  return d;
}

function geometryToPath(geometry: Geometry) {
  if (geometry.type === "Polygon") {
    return geometry.coordinates.map((ring) => ringToPath(ring)).join(" ");
  }

  return geometry.coordinates
    .flatMap((polygon) => polygon.map((ring) => ringToPath(ring)))
    .join(" ");
}

export default function WorldMap({ selectedBackground, onBackgroundChange }: Props) {
  const [activeCountryId, setActiveCountryId] = useState(worldMapCountries[0].id);

  const geo = worldGeoJson as GeoFeatureCollection;

  const countriesById = useMemo(
    () => new Map(worldMapCountries.map((country) => [country.id, country])),
    []
  );

  const activeCountry = useMemo(
    () => countriesById.get(activeCountryId) ?? worldMapCountries[0],
    [activeCountryId, countriesById]
  );

  const activeBackground = backgrounds.find((bg) => bg.id === activeCountry.background);

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 md:p-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">Clickable World Map</h3>
          <p className="text-sm text-slate-300">
            Click a country to apply its worldview lens to the journey content below.
          </p>
        </div>
        <p className="text-xs text-slate-400">Countries are rendered from local GeoJSON polygons.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 p-3 md:p-4">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl">
            <svg viewBox="0 0 1000 560" className="h-full w-full" role="img" aria-label="World map">
              <defs>
                <linearGradient id="ocean" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#082f49" />
                  <stop offset="45%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="1000" height="560" fill="url(#ocean)" rx="20" />

              <g stroke="#334155" strokeWidth="1" opacity="0.35">
                <path d="M0 93h1000" />
                <path d="M0 186h1000" />
                <path d="M0 280h1000" />
                <path d="M0 373h1000" />
                <path d="M0 466h1000" />
                <path d="M166 0v560" />
                <path d="M333 0v560" />
                <path d="M500 0v560" />
                <path d="M666 0v560" />
                <path d="M833 0v560" />
              </g>

              <g>
                {geo.features.map((feature) => {
                  const country = countriesById.get(feature.properties.id);
                  if (!country) {
                    return null;
                  }

                  const isActive = country.id === activeCountry.id;
                  const matchesGlobalSelection = country.background === selectedBackground;
                  const worldviewFill = fillByWorldview[country.background];
                  const path = geometryToPath(feature.geometry);

                  return (
                    <path
                      key={country.id}
                      d={path}
                      role="button"
                      tabIndex={0}
                      aria-label={`${country.name} (${country.region})`}
                      fill={worldviewFill}
                      fillOpacity={isActive ? 0.95 : matchesGlobalSelection ? 0.84 : 0.72}
                      stroke={isActive ? "#ffffff" : matchesGlobalSelection ? "#e2e8f0" : "#cbd5e1"}
                      strokeWidth={isActive ? 3 : matchesGlobalSelection ? 1.8 : 1.2}
                      className="cursor-pointer transition-all duration-150 hover:fill-opacity-90"
                      onClick={() => {
                        setActiveCountryId(country.id);
                        onBackgroundChange(country.background);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setActiveCountryId(country.id);
                          onBackgroundChange(country.background);
                        }
                      }}
                    >
                      <title>{country.name}</title>
                    </path>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        <aside className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Selected Country</p>
          <h4 className="mt-1 text-lg font-semibold text-white">{activeCountry.name}</h4>
          <p className="text-sm text-slate-400">{activeCountry.region}</p>

          <div className="mt-4 rounded-lg border border-white/10 bg-slate-900/80 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-400">Applied Background</p>
            <p className="mt-1 text-sm font-medium text-white">
              {activeBackground?.icon} {activeBackground?.label}
            </p>
            <p className="mt-1 text-xs text-slate-400">{activeBackground?.worldviewFramework}</p>
          </div>

          <p className="mt-4 text-sm text-slate-300">{activeCountry.description}</p>
        </aside>
      </div>
    </section>
  );
}
