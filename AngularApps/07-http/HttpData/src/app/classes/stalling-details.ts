export class GeoPoint {
  lon: number;
  lat: number;

  constructor(lon: number = 0, lat: number = 0) {
    this.lon = lon;
    this.lat = lat;
  }
}

export class GeoShape {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: object;

  constructor(type: string = "Feature", coordinates: [number, number] = [0, 0], properties: object = {}) {
    this.type = type;
    this.geometry = { type: "Point", coordinates };
    this.properties = properties;
  }
}

export class StallingDetails {
  objectid: number;
  naam_fietsenstalling: string;
  adres_omschrijving: string;
  type_stalling: string;
  openingstijden_maandag: string;
  openingstijden_dinsdag: string;
  openingstijden_woensdag: string;
  openingstijds_donderdag: string;
  openingstijden_vrijdag: string;
  openingstijden_zaterdag: string;
  openingstijden_zondag: string;
  meer_informatie: string;
  longitude: number;
  latitude: number;
  geo_shape: GeoShape;
  geo_point_2d: GeoPoint;
  geopoint: GeoPoint;

  constructor(
    objectid: number = 0,
    naam_fietsenstalling: string = "",
    adres_omschrijving: string = "",
    type_stalling: string = "",
    openingstijden_maandag: string = "",
    openingstijden_dinsdag: string = "",
    openingstijden_woensdag: string = "",
    openingstijds_donderdag: string = "",
    openingstijden_vrijdag: string = "",
    openingstijden_zaterdag: string = "",
    openingstijden_zondag: string = "",
    meer_informatie: string = "",
    longitude: number = 0,
    latitude: number = 0,
    geo_shape: GeoShape = new GeoShape(),
    geo_point_2d: GeoPoint = new GeoPoint(),
    geopoint: GeoPoint = new GeoPoint()
  ) {
    this.objectid = objectid;
    this.naam_fietsenstalling = naam_fietsenstalling;
    this.adres_omschrijving = adres_omschrijving;
    this.type_stalling = type_stalling;
    this.openingstijden_maandag = openingstijden_maandag;
    this.openingstijden_dinsdag = openingstijden_dinsdag;
    this.openingstijden_woensdag = openingstijden_woensdag;
    this.openingstijds_donderdag = openingstijds_donderdag;
    this.openingstijden_vrijdag = openingstijden_vrijdag;
    this.openingstijden_zaterdag = openingstijden_zaterdag;
    this.openingstijden_zondag = openingstijden_zondag;
    this.meer_informatie = meer_informatie;
    this.longitude = longitude;
    this.latitude = latitude;
    this.geo_shape = geo_shape;
    this.geo_point_2d = geo_point_2d;
    this.geopoint = geopoint;
  }
}
