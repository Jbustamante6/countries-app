export interface Countries {
  name?: string;
  topLevelDomain?:string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[]
  capital?:string;
  altSpellings?: string[],
  region?: string;
  subregion?: string;
  population?: string;
  latlng?: number[];
  demonym?: string;
  area?: number,
  gini?: number,
  timezones?: string[],
  borders?: string[],
  nativeName?: string;
  numericCode?: string;
  currencies?: Object[];
  languages?: Object[];
  translations?: Object;
  flag?: string;
  regionalBlocs?: Object[];
  cioc?: string;
}
