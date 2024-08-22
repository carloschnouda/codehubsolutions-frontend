import React from 'react'
import Script from 'next/script';

function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-SF4RDBVX5G`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SF4RDBVX5G');
          `}
      </Script>
    </>
  )
}

export default GoogleAnalytics