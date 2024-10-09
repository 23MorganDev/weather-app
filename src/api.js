export const geoApiOptions= {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const GEO_API_URL = import.meta.env.VITE_GEOD_API_URL;

export const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
