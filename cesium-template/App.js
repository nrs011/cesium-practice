/** @format */

// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = "/";

import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

// Your access token can be found at: https://cesium.com/ion/tokens.
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYThjNmE0Mi0xZDkzLTQ4ZTItOTllMi04NjMyMDkwNjg4ZjkiLCJpZCI6NDk0MDcsImlhdCI6MTYxNzM3Mjk3Nn0.cjhh0c4-Do6iLebQ8kjYQcNDx0uFIHM-5Psk7nMYfYI";
// Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: Cesium.createWorldTerrain(),
});
// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = viewer.scene.primitives.add(
  Cesium.createOsmBuildings()
);
// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-15.0),
  },
});
