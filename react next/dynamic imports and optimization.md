```
import dynamic from 'next/dynamic'
 
const DynamicHeader = dynamic(() => import('../components/header'), {
  loading: () => <p>Loading...</p>,
})
 
export default function Home() {
  return <DynamicHeader />
}
```

## Script Optimization
To load a third-party script for all routes, import next/script and include the script directly in your custom 
component:
```
import Script from 'next/script'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://example.com/script.js" />
    </>
  )
}
```