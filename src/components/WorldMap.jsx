import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
import "./WorldMap.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Активные страны
const activeCountries = new Set([
  "Ukraine", "Turkey", "Egypt", "South Africa", "Morocco", "Ethiopia", "Nigeria", "Ivory Coast",
  "United Arab Emirates", "Qatar", "Singapore", "China", "South Korea", "Australia", "Japan",
  "Chile", "Argentina", "Panama", "Brazil", "Bahamas", "Thailand", "Malaysia", "Indonesia",
  "Kenya", "Tanzania", "Ghana", "Tunisia",
  "Albania", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus",
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Iceland", "Ireland",
  "Italy", "Latvia", "Lithuania", "Malta", "Monaco", "Montenegro", "Netherlands", "Norway",
  "Poland", "Portugal", "Romania", "Slovenia", "Spain", "Sweden", "United Kingdom", "Georgia", 
  "Mexico", "Uruguay", "Liberia", "Côte d'Ivoire", "Togo", "Cameroon", "Bahrain",
  "Pakistan", "Algeria"
]);

// Планируемые страны
const plannedCountries = new Set(["United States of America", "Canada", "India"]);

const WorldMap = () => {
  return (
    <section className="map-section">
      <div className="centered-heading">
        <h2 className="section-title">Worldwide Service Coverage</h2>
      </div>

      <Tooltip id="tooltip-id" />

      <ComposableMap
        projection="geoNaturalEarth1"
        width={980}
        height={480}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const isActive = activeCountries.has(name);
              const isPlanned = plannedCountries.has(name);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    isActive
                      ? "#ffa500"
                      : isPlanned
                        ? "#6c63ff"
                        : "#afb3ba"
                  }
                  stroke="#FFFFFF"
                  data-tooltip-id={(isActive || isPlanned) ? "tooltip-id" : undefined}
                  data-tooltip-content={
                    isPlanned
                      ? `${name} (Service expected soon)`
                      : isActive
                        ? name
                        : undefined
                  }
                  style={{
                    default: {
                      outline: "none",
                      fill: isActive
                        ? "#ffa500"
                        : isPlanned
                          ? "#6c63ff"
                          : "#afb3ba"
                    },
                    hover: {
                      fill: isActive
                        ? "#ff8800"
                        : isPlanned
                          ? "#4f48c4"
                          : "#afb3ba",
                      cursor: (isActive || isPlanned) ? "pointer" : "default",
                      outline: "none"
                    },
                    pressed: {
                      fill: isActive
                        ? "#ff6600"
                        : isPlanned
                          ? "#3e34b1"
                          : "#afb3ba",
                      outline: "none"
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </section>
  );
};

export default WorldMap;
