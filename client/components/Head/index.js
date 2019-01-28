// @flow
import React from 'react'
import Helmet from 'react-helmet'
import config from 'app/config'

function metaTagFromConfig(name: string): React$Element<'meta'> {
  return <meta key={name} name={name} content={config(`defaultMetaTags.${name}`)} />
}

function metaTagsFromConfig(names: Array<string>): Array<React$Element<'meta'>> {
  return names.map(name => metaTagFromConfig(name))
}

export default function Head(): React$Element<*> {
  return (
    <Helmet
      defaultTitle={config('projectName').toString()}
      titleTemplate={`${config('projectName').toString()} — %s`}
    >
      <html key="html" lang="en" amp />
      {config('defaultMetaTags.enabled') && [
        ...metaTagsFromConfig(['keywords', 'title', 'robots', 'description']),
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
