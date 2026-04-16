import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function PlaceCardItem({place}) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
      place && GetPlacePhoto();
  }, [place])

  const GetPlacePhoto = async () => {
      const data = {
          textQuery: place?.place
      }
      const result = await GetPlaceDetails(data).then(resp => {
          const placeDetail = resp.data?.candidates?.[0]
          const photoReference = placeDetail?.photos?.[0]?.photo_reference
          if (photoReference) {
            const PhotoUrl = `${PHOTO_REF_URL}${photoReference}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`
            setPhotoUrl(PhotoUrl)
          }
      }).catch((error) => {
          console.error('GetPlaceDetails error', error)
      })
  }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' +place?.place} target='_blank'>
    <div className='shadow-sm border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
        <img src={photoUrl?photoUrl:'/placeholder.jpg'} alt="" className='w-[130px] h-[130px] rounded-xl object-cover' />
        <div>
            <h2 className='font-bold text-lg'>{place.place}</h2>
            <p className='text-sm text-gray-500'>{place.details}</p>
            {/* <h2>place.timetoTravel</h2> */}
            <h2 className='text-xs font-medium mt-2 mb-2'>🏷️Ticket: {place.ticket_pricing}</h2>
            {/* <Button size="sm"><FaMapLocationDot /></Button> */}
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem