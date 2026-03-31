"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useMap,
} from "@vis.gl/react-google-maps";
import Link from "next/link";
import Image from "next/image";

interface MapExperience {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  price: string | null;
  image: string | null;
  rating: number;
  reviewCount: number;
}

function ExperienceMarker({
  experience,
  isSelected,
  onClick,
}: {
  experience: MapExperience;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <>
      <AdvancedMarker
        position={{ lat: experience.latitude, lng: experience.longitude }}
        onClick={onClick}
      >
        <div className="relative cursor-pointer">
          <div
            className={`w-8 h-8 rounded-full border-[3px] border-white shadow-md flex items-center justify-center transition-transform ${
              isSelected ? "bg-primary-dark scale-125" : "bg-primary"
            }`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
        </div>
      </AdvancedMarker>

      {isSelected && (
        <InfoWindow
          position={{ lat: experience.latitude, lng: experience.longitude }}
          onCloseClick={onClick}
          pixelOffset={[0, -40]}
        >
          <div className="min-w-[220px] max-w-[260px] font-sans">
            {experience.image && (
              <div className="relative w-full h-[120px] rounded-lg overflow-hidden mb-2">
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>
            )}
            <h3 className="font-semibold text-sm text-dark leading-tight mb-1">
              {experience.name}
            </h3>
            {experience.rating > 0 && (
              <div className="text-xs text-amber-500 mb-1">
                {"★".repeat(Math.round(experience.rating))}{" "}
                <span className="text-gray-400">
                  ({experience.reviewCount})
                </span>
              </div>
            )}
            {experience.price && (
              <p className="text-sm font-semibold text-primary">
                From {experience.price}
              </p>
            )}
            <Link
              href={`/tours/${experience.id}`}
              className="inline-block mt-2 text-xs font-medium text-primary hover:text-primary-dark"
            >
              View Details &rarr;
            </Link>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

/** Automatically fits the map bounds to show all experience markers */
function FitBounds({ experiences }: { experiences: MapExperience[] }) {
  const map = useMap();
  const prevIdsRef = useRef<string>("");

  useEffect(() => {
    if (!map || experiences.length === 0) return;

    // Only refit when the set of experiences actually changes
    const ids = experiences.map((e) => e.id).sort().join(",");
    if (ids === prevIdsRef.current) return;
    prevIdsRef.current = ids;

    const bounds = new google.maps.LatLngBounds();
    experiences.forEach((exp) => {
      bounds.extend({ lat: exp.latitude, lng: exp.longitude });
    });

    // If only one marker, center on it with a reasonable zoom
    if (experiences.length === 1) {
      map.setCenter({ lat: experiences[0].latitude, lng: experiences[0].longitude });
      map.setZoom(14);
    } else {
      map.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
    }
  }, [map, experiences]);

  return null;
}

export default function ExperienceMap({
  experiences,
  center: centerProp,
}: {
  experiences: MapExperience[];
  center?: { lat: number; lng: number };
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleMarkerClick = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "";

  const center = centerProp || { lat: 43.0896, lng: -79.0849 };

  return (
    <APIProvider apiKey={apiKey}>
      <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-gray-200">
        <Map
          defaultCenter={center}
          defaultZoom={11}
          mapId="experience-map"
          gestureHandling="cooperative"
          disableDefaultUI={false}
          zoomControl={true}
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={true}
          className="w-full h-full"
        >
          <FitBounds experiences={experiences} />
          {experiences.map((exp) => (
            <ExperienceMarker
              key={exp.id}
              experience={exp}
              isSelected={selectedId === exp.id}
              onClick={() => handleMarkerClick(exp.id)}
            />
          ))}
        </Map>

        {/* Experience count badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-md px-3 py-2 z-10">
          <p className="text-xs font-semibold text-dark">
            {experiences.length} experiences
          </p>
        </div>
      </div>
    </APIProvider>
  );
}
