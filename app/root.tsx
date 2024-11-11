import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"
import type { LinksFunction, MetaFunction } from "react-router"
import { HOSTNAME } from "./constants"
// import type * as Route from "./+types.root"

import "normalize.css"
import "./styles.scss"

export const loader = () => {
  return {
    updatedTime: new Date().toISOString(),
  }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  ...(data ? [{ property: "og:updated_time", content: data.updatedTime }] : []),
]

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" },
  { rel: "icon", href: "/favicon.ico" },
]

const title = "Guilherme Lepsch"
const subtitle = "Passionate About Code, Crafting Solutions with Heart"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{`${title} - ${subtitle}`}</title>
        <meta name="description" content={`${title} - ${subtitle}`} />

        <meta name="theme-color" content="#33ff33" />
        <meta content={title} name="application-name" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
        <meta content={title} name="apple-mobile-web-app-title" />
        <meta content="#33ff33" name="msapplication-TileColor" />
        <meta content={`https://${HOSTNAME}/guilherme-lepsch.jpg`} name="msapplication-TileImage" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DucklyHQ" /> */}
        <meta property="og:image" content={`https://${HOSTNAME}/guilherme-lepsch.jpg`} />
        <meta property="og:image:alt" content={`${title} - ${subtitle}`} />
        <meta property="og:image:width" content="884" />
        <meta property="og:image:height" content="881" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:locale" content="en_PT" />
        <meta property="og:site_name" content={`${title} - ${subtitle}`} />
        <meta property="og:url" content={`https://${HOSTNAME}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - ${subtitle}`} />
        <meta property="og:description" content={`${title} - ${subtitle}`} />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <script src="/tarteaucitronjs/tarteaucitron.min.js"></script>
        <script src={TARTEAUCITRON_INIT_URL} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              'tarteaucitron.user.gtagUa = "G-PMLP8XPFL5"; (tarteaucitron.job = tarteaucitron.job || []).push("gtag");',
          }}
        ></script>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
