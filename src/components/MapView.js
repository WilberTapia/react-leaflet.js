import React, { useState, useEffect } from "react";
import { Map, TileLayer, Polygon, Tooltip } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";

import { useHistory } from "react-router-dom";

import "leaflet/dist/leaflet.css";

const ga01 = [
  [
    [18.479030217793422, -69.96955356098597],
    [18.479835079488566, -69.97125684558405],
    [18.48560308319073, -69.97731462267365],
    [18.491086071943194, -69.9834824120522],
    [18.49574821810253, -69.98933913755863],
    [18.503777172541152, -69.99932288286483],
    [18.504977355553855, -69.99970271911681],
    [18.50783467286543, -69.99644003870362],
    [18.5072879231094, -69.9896729413568],
    [18.505919719266007, -69.98042597347772],
    [18.509258017889344, -69.96615574459925],
    [18.5162010584576, -69.95359966977995],

    // [18.510134, -69.915713],
    [18.50566792826876, -69.91572036357738],
    
    // [18.476253, -69.913615],
    [18.476380698744617, -69.91330955797046],

    [18.475137, -69.916418],
    [18.473183, -69.918778],
    [18.468993, -69.923617],
    [18.465594, -69.93028],
    [18.462683, -69.936041],
    [18.4548, -69.954615],
    [18.451721, -69.961529],
    [18.449991, -69.96743],
    [18.449705032089927, -69.97476376285428],
    [18.454002, -69.972033],
    [18.462197321803554, -69.9689259532804],
    [18.47906688674697, -69.96759903731079],
  ],
];

const ga05 = [
  [
    [18.449705032089927, -69.97476376285428],
    [18.449991, -69.96743],
    [18.451721, -69.961529],
    [18.4548, -69.954615],
    [18.462683, -69.936041],
    [18.465594, -69.93028],
    [18.468993, -69.923617],
    [18.468993, -69.923617],
    [18.473183, -69.918778],
    [18.475137, -69.916418],
    [18.476380698744617, -69.91330955797046],

    [18.50566792826876, -69.91572036357738],
    [18.505788919014257, -69.90885612543715],
    [18.51391930131166, -69.89716905647472],
    [18.50743438480405, -69.87910258457548],
    [18.502700684885756, -69.8759113188801],
    [18.49798117216191, -69.87603270179216],
    [18.49585159334744, -69.8771251480006],
    [18.493088857051493, -69.87943142332958],
    [18.487620810113384, -69.88367982525136],
    [18.47206341305385, -69.88150723321742],
    [18.469991085332488, -69.88350531176349],
    [18.45890124196561, -69.9067975137056],
    [18.455693464218076, -69.91601722200787],
    [18.452711501257497, -69.92127783628749],
    [18.445791887087967, -69.9251192535508],
    [18.44383777194915, -69.92722210521647],
    [18.438748826136024, -69.93490395109717],
    [18.43553801378394, -69.94408580261845],
    [18.426793976844102, -69.97247720540622],
    [18.42641970830792, -69.98174782659972],
    [18.42428924134905, -69.9888942455467],
    [18.427904590570094, -69.9903754953375],
    [18.429531926045136, -69.98976666246277],
    [18.434028471803288, -69.98449595603569],
    [18.43592475495174, -69.98285844277234],
    [18.440504888235623, -69.97893168915176],
    [18.4483772883229, -69.97530995788247],
  
  ],
];

const ga03 = [
  [
    [18.42428924134905, -69.9888942455467],
    [18.427904590570094, -69.9903754953375],
    [18.429531926045136, -69.98976666246277],
    [18.434028471803288, -69.98449595603569],
    [18.43592475495174, -69.98285844277234],
    
    [18.440504888235623, -69.97893168915176],
    [18.449705032089927, -69.97476376285428],
    [18.449705032089927, -69.97476376285428],
    [18.454002, -69.972033],
    [18.462197321803554, -69.9689259532804],
    [18.47906688674697, -69.96759903731079],

    [18.479030217793422, -69.96955356098597],
    [18.479835079488566, -69.97125684558405],
    [18.48560308319073, -69.97731462267365],
    [18.491086071943194, -69.9834824120522],
    [18.49574821810253, -69.98933913755863],
    [18.503777172541152, -69.99932288286483],
    [18.533945166450085, -70.01306589016082],
    [18.563083785741068, -70.06878899725453],
    [18.546264539012892, -70.07928393222285],
    [18.425875760640984, -70.04055262460166]
  ],
];

const ga04 = [
  [
    [18.486356131703566, -69.88141499782512],
    [18.484435588811966, -69.85608982881152],
    [18.485087304841734, -69.84784380847928],
    [18.486154853044617, -69.83698082029603],
    [18.48941086597923, -69.82541941375064],    

    [18.50123872307929, -69.77860114038074],
    [18.46550273144334, -69.77920195514236],
    [18.46879366083197, -69.85140458998637],
    [18.465979416270514, -69.87596085654344],
    
  ]
];

const ga02 =[
  [
    [18.486356131703566, -69.88141499782512],
    [18.484435588811966, -69.85608982881152],
    [18.485087304841734, -69.84784380847928],
    [18.486154853044617, -69.83698082029603],
    [18.48941086597923, -69.82541941375064],    
    [18.50123872307929, -69.77860114038074],
    
    [18.533367565407243, -69.81490830396994],
    [18.51937626523374, -69.83497852388656],
    [18.505052312793655, -69.85671452732154],
    [18.50968096055291, -69.86118112175221],
    [18.509977151756214, -69.86917726268045],
    [18.51015486623215, -69.87476831434512],
    [18.50748912976331, -69.87448720036664],
    [18.500883848195766, -69.86902108840398],

  ]
]


const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 18.4863804, lng: -69.8283164 },
    zoom: 12,
    data,
  });

  const history = useHistory();

  return (
    <Map center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers venues={state.data.dr_GA} />
      <Polygon color="purple" positions={ga01}>
        <Tooltip direction="bottom" opacity={1} permanent>GA01</Tooltip>
      </Polygon>

      <Polygon color="red" positions={ga05}>
        <Tooltip direction="bottom" opacity={1} permanent>GA05</Tooltip>
      </Polygon>

      <Polygon color="green" positions={ga03}>
        <Tooltip direction="bottom" opacity={1} permanent>GA03</Tooltip>
      </Polygon>
      <Polygon color="blue" positions={ga04}>
        <text>gea03</text>
        <Tooltip direction="bottom" opacity={1} permanent>GA04</Tooltip>
      </Polygon>
      <Polygon color="yellow" positions={ga02}>
        <Tooltip direction="bottom" opacity={1} permanent>GA02</Tooltip>
      </Polygon>
    </Map>
  );
};

export default MapView;
