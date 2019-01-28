// @flow
import React from 'react'
import Helmet from 'react-helmet'
import config from 'app/config'

export default function Head(): React$Element<*> {
  return (
    <Helmet
      defaultTitle={config('projectName').toString()}
      titleTemplate={`${config('projectName').toString()} — %s`}
    >
      <html key="html" lang="en" amp />
      {config('defaultMetaTags.enabled') && [
        <meta key="keywords" name="keywords" content={config('defaultMetaTags.keywords')} />,
        <meta key="title" name="title" content={config('defaultMetaTags.title')} />,
        <meta key="robots" name="robots" content={config('defaultMetaTags.robots')} />,
        <meta
          key="description"
          name="description"
          content={config('defaultMetaTags.description')}
        />,
        config('defaultMetaTags.openGraphEnabled') && [
          <meta key="ogTitle" property="og:title" content={config('defaultMetaTags.title')} />,
          <meta key="ogType" property="og:type" content={config('defaultMetaTags.type')} />,
          <meta
            key="ogDescription"
            property="og:description"
            content={config('defaultMetaTags.description')}
          />,
          <meta
            key="ogSiteName"
            property="og:site_name"
            content={config('defaultMetaTags.siteName')}
          />,
        ],
      ]}
    </Helmet>
  )
}
