import axios from "axios"

const BASE_URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'

export const GetPlaceDetails = (data) => {
  const textQuery = data?.textQuery || ''
  return axios.get(
    `${BASE_URL}?input=${encodeURIComponent(textQuery)}&inputtype=textquery&fields=name,formatted_address,geometry,photos&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`
  )
}

export const PHOTO_REF_URL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference='