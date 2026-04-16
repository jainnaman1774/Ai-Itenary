import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip])

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label
    }
    const result = await GetPlaceDetails(data).then(resp => {
      const place = resp.data?.candidates?.[0]
      const photoReference = place?.photos?.[0]?.photo_reference
      if (photoReference) {
        const PhotoUrl = `${PHOTO_REF_URL}${photoReference}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`
        setPhotoUrl(PhotoUrl)
      }
    }).catch((error) => {
      console.error('GetPlaceDetails error', error)
    })
  }

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className='hover:scale-105 transition-all'>
        <img src={photoUrl ? photoUrl : '/placeholder.jpg'} alt="" className='object-cover rounded-xl h-[220px]' />
        <div>
          <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
          <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} budget. </h2>
        </div>
      </div>
    </Link >
  )
}

export default UserTripCardItem