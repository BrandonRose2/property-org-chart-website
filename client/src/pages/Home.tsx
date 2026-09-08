/**
 * Apartment Corp Properties – Org Chart
 * Design: Industrial Steel Command Center
 * Dark steel base, metallic 3D buttons, color-coded property types
 * Source chart key: orange = Project Based Section 8; blue = LIHTC;
 * yellow = Regional HUD; purple = Conventional & Section 8 Vouchers.
 */

import { useState, useMemo, useCallback } from "react";
import {
  PROPERTIES,
  REGIONS,
  PROPERTY_TYPES,
  getAllStats,
  getRegionStats,
  type Property,
  type PropertyType,
} from "@/lib/properties";
import { MapView } from "@/components/Map";
import {
  Building2,
  MapPin,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Globe,
  List,
  Map,
  Printer,
} from "lucide-react";

// ─── Helpers ────────────────────────────────────────────────────────────────

function getTypeClass(type: PropertyType): string {
  if (type === "LIHTC") return "blue";
  if (type === "Regional HUD") return "yellow";
  if (type === "Conventional & Section 8 Vouchers") return "purple";
  if (type === "Project Based Section 8") return "orange";
  return "steel";
}

function TypeBadge({ type }: { type: PropertyType }) {
  const cls = getTypeClass(type);
  const info = PROPERTY_TYPES[type];
  return (
    <span className={`type-badge type-badge-${cls}`}>
      <span
        className="legend-dot"
        style={{ width: 6, height: 6, background: info.dotColor }}
      />
      {info.label}
    </span>
  );
}

function RegionBadge({ region }: { region: number }) {
  return <span className="region-badge">R{region}</span>;
}

// ─── Property Card ───────────────────────────────────────────────────────────

function PropertyCard({
  property,
  index,
}: {
  property: Property;
  index: number;
}) {
  const cls = getTypeClass(property.type);

  const hasWebsite = !!property.website;
  const hasAptsCom = !!property.apartmentsCom;
  const hasAnyLink = hasWebsite || hasAptsCom;

  const addressLine = [property.address, property.city, property.state]
    .filter(Boolean)
    .join(", ");

  return (
    <div
      className={`property-card type-${cls} card-animate`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <TypeBadge type={property.type} />
        <RegionBadge region={property.region} />
      </div>

      {/* Name */}
      <h3
        className="font-bold text-sm leading-tight mb-1"
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          color: "oklch(0.92 0.005 240)",
          letterSpacing: "0.02em",
        }}
      >
        {property.name}
      </h3>

      {/* Address */}
      {addressLine && (
        <div className="flex items-start gap-1 mb-1">
          <MapPin
            size={10}
            className="mt-0.5 flex-shrink-0"
            style={{ color: "oklch(0.50 0.010 240)" }}
          />
          <span
            className="text-xs leading-tight"
            style={{ color: "oklch(0.60 0.010 240)" }}
          >
            {addressLine}
          </span>
        </div>
      )}

      {/* Units */}
      {property.units !== null && (
        <div className="flex items-center gap-1 mb-2">
          <Building2
            size={10}
            style={{ color: "oklch(0.50 0.010 240)" }}
          />
          <span
            className="text-xs font-semibold"
            style={{ color: "oklch(0.70 0.010 240)" }}
          >
            {property.units} units
          </span>
        </div>
      )}

      {/* Notes */}
      {property.notes && (
        <p
          className="text-xs mb-2 italic"
          style={{ color: "oklch(0.55 0.008 240)" }}
        >
          {property.notes}
        </p>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {hasWebsite && (
          <a
            href={property.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`metal-btn metal-btn-${cls}`}
          >
            <Globe size={9} />
            Official Site
          </a>
        )}
        {hasAptsCom && (
          <a
            href={property.apartmentsCom}
            target="_blank"
            rel="noopener noreferrer"
            className={`metal-btn metal-btn-${cls}`}
          >
            <ExternalLink size={9} />
            {hasWebsite ? "Apts.com" : "View Listing"}
          </a>
        )}
        {!hasAnyLink && (
          <span className="no-listing">No listing found</span>
        )}
      </div>
    </div>
  );
}

// ─── Region Panel ─────────────────────────────────────────────────────────────

function RegionPanel({
  regionId,
  properties,
  defaultOpen,
}: {
  regionId: number;
  properties: Property[];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const region = REGIONS[regionId];
  const stats = getRegionStats(regionId);

  return (
    <div className="region-panel">
      <div className="region-header" onClick={() => setOpen((o) => !o)}>
        {/* Region label */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span
            className="font-black text-base tracking-widest uppercase"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              color: "oklch(0.88 0.008 240)",
              letterSpacing: "0.12em",
            }}
          >
            {region.label}
          </span>
          <span
            className="text-xs font-semibold"
            style={{ color: "oklch(0.55 0.010 240)" }}
          >
            {region.states}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs flex-shrink-0">
          <span style={{ color: "oklch(0.65 0.010 240)" }}>
            <span
              className="font-bold"
              style={{ color: "oklch(0.85 0.008 240)" }}
            >
              {stats.count}
            </span>{" "}
            props
          </span>
          <span style={{ color: "oklch(0.65 0.010 240)" }}>
            <span
              className="font-bold"
              style={{ color: "oklch(0.85 0.008 240)" }}
            >
              {stats.units.toLocaleString()}
            </span>{" "}
            units
          </span>
          {stats.sites > 0 && (
            <span style={{ color: "oklch(0.65 0.010 240)" }}>
              <span
                className="font-bold"
                style={{ color: "oklch(0.85 0.008 240)" }}
              >
                {stats.sites}
              </span>{" "}
              sites
            </span>
          )}
        </div>

        {/* Chevron */}
        <div style={{ color: "oklch(0.50 0.010 240)" }}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>

      {open && (
        <div className="p-4 region-content-animate">
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {properties.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Map View ─────────────────────────────────────────────────────────────────

function PropertyMapView({ properties }: { properties: Property[] }) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleMapReady = useCallback(
    (map: google.maps.Map) => {
      const bounds = new google.maps.LatLngBounds();
      const infoWindow = new google.maps.InfoWindow();

      properties.forEach((prop) => {
        if (!prop.lat || !prop.lng) return;

        const typeInfo = PROPERTY_TYPES[prop.type];
        const marker = new google.maps.Marker({
          position: { lat: prop.lat, lng: prop.lng },
          map,
          title: prop.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: typeInfo.pinColor,
            fillOpacity: 0.9,
            strokeColor: "#ffffff",
            strokeWeight: 1.5,
          },
        });

        marker.addListener("click", () => {
          setSelectedProperty(prop);
          const addressLine = [prop.address, prop.city, prop.state]
            .filter(Boolean)
            .join(", ");
          const links = [
            prop.website
              ? `<a href="${prop.website}" target="_blank" style="color:#5080c8">Official Site</a>`
              : "",
            prop.apartmentsCom
              ? `<a href="${prop.apartmentsCom}" target="_blank" style="color:#5080c8">Apts.com</a>`
              : "",
          ]
            .filter(Boolean)
            .join(" · ");

          infoWindow.setContent(`
            <div style="font-family:'Rajdhani',sans-serif;min-width:180px;padding:4px">
              <div style="font-weight:800;font-size:14px;margin-bottom:4px">${prop.name}</div>
              <div style="font-size:11px;color:#666;margin-bottom:4px">${addressLine}</div>
              ${prop.units ? `<div style="font-size:11px;font-weight:600;margin-bottom:4px">${prop.units} units</div>` : ""}
              <div style="font-size:10px;font-weight:700;color:${typeInfo.dotColor};margin-bottom:6px">${typeInfo.label}</div>
              ${links ? `<div style="font-size:11px">${links}</div>` : ""}
            </div>
          `);
          infoWindow.open(map, marker);
        });

        bounds.extend({ lat: prop.lat, lng: prop.lng });
      });

      if (properties.length > 0) {
        map.fitBounds(bounds);
        const listener = google.maps.event.addListener(map, "idle", () => {
          if ((map.getZoom() ?? 0) > 12) map.setZoom(12);
          google.maps.event.removeListener(listener);
        });
      }
    },
    [properties]
  );

  return (
    <div className="map-container">
      <MapView onMapReady={handleMapReady} />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

type ViewMode = "directory" | "map";
type TypeFilter = "all" | PropertyType;
type RegionFilter = "all" | number;

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("directory");
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [regionFilter, setRegionFilter] = useState<RegionFilter>("all");

  const stats = getAllStats();

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (regionFilter !== "all" && p.region !== regionFilter) return false;
      if (typeFilter !== "all" && p.type !== typeFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.state.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, typeFilter, regionFilter]);

  // Group by region
  const byRegion = useMemo(() => {
    const groups: Record<number, Property[]> = {};
    filteredProperties.forEach((p) => {
      if (!groups[p.region]) groups[p.region] = [];
      groups[p.region].push(p);
    });
    return groups;
  }, [filteredProperties]);

  const activeRegions = Object.keys(byRegion)
    .map(Number)
    .sort((a, b) => a - b);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Header ── */}
      <header className="site-header sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center gap-4 py-3">
            {/* Logo */}
            <div className="ac-logo">AC</div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <h1
                className="font-black text-lg leading-none tracking-widest uppercase"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  color: "oklch(0.90 0.008 240)",
                  letterSpacing: "0.15em",
                }}
              >
                Apartment Corp
              </h1>
              <p
                className="text-xs tracking-widest uppercase mt-0.5"
                style={{
                  color: "oklch(0.50 0.010 240)",
                  letterSpacing: "0.12em",
                }}
              >
                Property Directory
              </p>
            </div>

            {/* Print */}
            <button
              onClick={handlePrint}
              className="metal-btn metal-btn-ghost hidden sm:inline-flex"
              title="Print / Export PDF"
            >
              <Printer size={11} />
              Print
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="stats-bar">
          <div className="container">
            <div className="flex items-stretch overflow-x-auto">
              <div className="stat-item py-2">
                <Building2 size={13} style={{ color: "oklch(0.50 0.010 240)" }} />
                <span
                  className="font-black text-sm"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    color: "oklch(0.88 0.008 240)",
                  }}
                >
                  {stats.totalProps}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.50 0.010 240)" }}
                >
                  Properties
                </span>
              </div>
              <div className="stat-item py-2">
                <span
                  className="font-black text-sm"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    color: "oklch(0.88 0.008 240)",
                  }}
                >
                  {stats.totalUnits.toLocaleString()}+
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.50 0.010 240)" }}
                >
                  Units
                </span>
              </div>
              <div className="stat-item py-2">
                <Globe size={13} style={{ color: "oklch(0.50 0.010 240)" }} />
                <span
                  className="font-black text-sm"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    color: "oklch(0.88 0.008 240)",
                  }}
                >
                  {stats.officialSites}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.50 0.010 240)" }}
                >
                  Official Sites
                </span>
              </div>
              <div className="stat-item py-2 border-r-0">
                <span
                  className="font-black text-sm"
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    color: "oklch(0.88 0.008 240)",
                  }}
                >
                  {stats.regions}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.50 0.010 240)" }}
                >
                  Regions
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Filter Bar ── */}
      <div
        className="filter-bar sticky z-40 py-3 border-b"
        style={{
          top: "calc(var(--header-height, 100px))",
          background: "oklch(0.15 0.009 240)",
          borderColor: "oklch(0.24 0.010 240)",
        }}
      >
        <div className="container">
          <div className="flex flex-wrap items-center gap-2">
            {/* Search */}
            <div className="relative flex-1 min-w-48 max-w-72">
              <Search
                size={13}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "oklch(0.45 0.008 240)" }}
              />
              <input
                type="text"
                placeholder="Search properties, cities, states..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Region filters */}
            <div className="flex items-center gap-1 flex-wrap">
              <button
                className={`filter-btn ${regionFilter === "all" ? "active" : ""}`}
                onClick={() => setRegionFilter("all")}
              >
                ALL
              </button>
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  key={r}
                  className={`filter-btn ${regionFilter === r ? "active" : ""}`}
                  onClick={() => setRegionFilter(r)}
                >
                  R{r}
                </button>
              ))}
            </div>

            {/* Type filters */}
            <div className="flex items-center gap-1 flex-wrap">
              {(
                [
                  ["Project Based Section 8", "orange"],
                  ["LIHTC", "blue"],
                  ["Regional HUD", "yellow"],
                  ["Conventional & Section 8 Vouchers", "purple"],
                ] as const
              ).map(([type, color]) => (
                <button
                  key={type}
                  className={`filter-btn filter-btn-${color} ${typeFilter === type ? "active" : ""}`}
                  onClick={() => setTypeFilter(typeFilter === type ? "all" : type)}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-1 ml-auto">
              <button
                className={`filter-btn flex items-center gap-1 ${viewMode === "directory" ? "active" : ""}`}
                onClick={() => setViewMode("directory")}
              >
                <List size={11} />
                Directory
              </button>
              <button
                className={`filter-btn flex items-center gap-1 ${viewMode === "map" ? "active" : ""}`}
                onClick={() => setViewMode("map")}
              >
                <Map size={11} />
                Map View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="flex-1 py-6">
        <div className="container">
          {viewMode === "map" ? (
            <PropertyMapView properties={filteredProperties} />
          ) : (
            <div className="flex flex-col gap-4">
              {activeRegions.length === 0 ? (
                <div
                  className="text-center py-16"
                  style={{ color: "oklch(0.50 0.010 240)" }}
                >
                  <Building2 size={40} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No properties match your filters.</p>
                </div>
              ) : (
                activeRegions.map((regionId) => (
                  <RegionPanel
                    key={regionId}
                    regionId={regionId}
                    properties={byRegion[regionId]}
                    defaultOpen={regionFilter !== "all" || searchQuery !== "" || typeFilter !== "all" || regionId <= 2}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </main>

      {/* ── Legend ── */}
      <footer
        className="border-t py-4"
        style={{
          background: "oklch(0.15 0.009 240)",
          borderColor: "oklch(0.24 0.010 240)",
        }}
      >
        <div className="container">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.45 0.008 240)" }}
            >
              Legend
            </span>
            {(
              [
                ["Project Based Section 8", "#ED7D31", "Project Based Section 8"],
                ["LIHTC", "#4472C4", "LIHTC"],
                ["Regional HUD", "#FFC000", "Regional HUD (not national HUD)"],
                ["Conventional & Section 8 Vouchers", "#7030A0", "Conventional & Section 8 Vouchers"],
              ] as const
            ).map(([, color, label]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="legend-swatch" style={{ background: color }} />
                <span
                  className="text-xs font-semibold"
                  style={{ color: "oklch(0.65 0.010 240)" }}
                >
                  {label}
                </span>
              </div>
            ))}
            <span
              className="ml-auto text-xs"
              style={{ color: "oklch(0.35 0.008 240)" }}
            >
              Apartment Corp · {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
