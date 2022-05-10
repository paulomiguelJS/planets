import mercury from "../assets/planet-mercury.svg";
import mercuryInternal from "../assets/planet-mercury-internal.svg"
import mercurySurface from "../assets/mercury-surface.svg"

import venus from "../assets/planet-venus.svg";
import venusInternal from "../assets/planet-venus-internal.svg"
import venusSurface from "../assets/venus-surface.svg"

import earth from "../assets/planet-earth.svg";
import earthInternal from "../assets/planet-earth-internal.svg"
import earthSurface from "../assets/earth-surface.svg"

import mars from "../assets/planet-mars.svg";
import marsInternal from "../assets/planet-mars-internal.svg"
import marsSurface from "../assets/mars-surface.svg"

import jupiter from "../assets/planet-jupiter.svg";
import jupiterInternal from "../assets/planet-jupiter-internal.svg"
import jupiterSurface from "../assets/jupiter-surface.svg"

import saturn from "../assets/planet-saturn.svg";
import saturnInternal from "../assets/planet-saturn-internal.svg"
import saturnSurface from "../assets/saturn-surface.svg"

import uranus from "../assets/planet-uranus.svg";
import uranusInternal from "../assets/planet-uranus-internal.svg"
import uranusSurface from "../assets/uranus-surface.svg"

import neptune from "../assets/planet-neptune.svg";
import neptuneInternal from "../assets/planet-neptune-internal.svg"
import neptuneSurface from "../assets/neptune-surface.svg"

export const planets = [
  {
    name: "MERCURY",
    id: 1,
    overview:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    internal:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surface:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    color: "#419EBB",
    planetover: mercury,
    planetinter: mercuryInternal,
    planetsurf: mercurySurface,
    rotation: "58.6 DAYS",
    revolution: "87.97 DAYS",
    radius: "2,439.7 KM",
    average: "430°C",
  },
  {
    name: "VENUS",
    id: 2,
    overview:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    internal:
      "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
    surface:
      "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
    color: "#EDA249",
    planetover: venus,
    planetinter: venusInternal,
    planetsurf: venusSurface,
    rotation: "243 DAYS",
    revolution: "224.7 DAYS",
    radius: "6,051.8 KM",
    average: "471°C",
  },
  {
    name: "EARTH",
    id: 3,
    overview:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    internal:
      "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    surface:
      "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    color: "#6f2ed6",
    planetover: earth,
    planetinter: earthInternal,
    planetsurf: earthSurface,
    rotation: "0.99 DAYS",
    revolution: "365.26 DAYS",
    radius: "6,371 KM",
    average: "16°C",
  },
  {
    name: "MARS",
    id: 4,
    overview:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
    internal:
      "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    surface:
      "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    color: "#D14C32",
    planetover: mars,
    planetinter: marsInternal,
    planetsurf: marsSurface,
    rotation: "1.03 DAYS",
    revolution: "1.88 YEARS",
    radius: "3,389.5 KM",
    average: "−28°C",
  },
  {
    name: "JUPITER",
    id: 5,
    overview:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    internal:
      "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    surface:
      "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    color: "#D83A34",
    planetover: jupiter,
    planetinter: jupiterInternal,
    planetsurf: jupiterSurface,
    rotation: "9.93 HOURS",
    revolution: "11.86 YEARS",
    radius: "69,911 KM",
    average: "-108°C",
  },
  {
    name: "SATURN",
    id: 6,
    overview:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    internal:
      "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    surface:
      "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
    color: "#CD5120",
    planetover: saturn,
    planetinter: saturnInternal,
    planetsurf: saturnSurface,
    rotation: "10.8 HOURS",
    revolution: "29.46 YEARS",
    radius: "58,232 KM",
    average: "-138°C",
  },
  {
    name: "URANUS",
    id: 7,
    overview:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    internal:
      "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    surface:
      "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    color: "#1ec2a4",
    planetover: uranus,
    planetinter: uranusInternal,
    planetsurf: uranusSurface,
    rotation: "17.2 HOURS",
    revolution: "84 YEARS",
    radius: "25,362 KM",
    average: "-195°C",
  },
  {
    name: "NEPTUNE",
    id: 8,
    overview:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    internal:
      "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    surface:
      "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    color: "#2d68f0",
    planetover: neptune,
    planetinter: neptuneInternal,
    planetsurf: neptuneSurface,
    rotation: "16.08 HOURS",
    revolution: "164.79 YEARS",
    radius: "24,622 KM",
    average: "-201°C",
  },
];
