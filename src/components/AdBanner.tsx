import React, { useEffect } from 'react'

const AdBanner = () => {
  useEffect(() => {
    try {
        // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: 'block',
      }}
      data-ad-client="ca-pub-3061584926754950"
      data-ad-slot="2024361056"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export default AdBanner
