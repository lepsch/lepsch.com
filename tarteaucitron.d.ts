interface TarteaucitronOptions {
  /**
   * Privacy policy url
   */
  privacyUrl?: string

  /**
   * `top` to bring it as first element for accessibility
   * @default bottom
   */
  bodyPosition?: "bottom" | "top"

  /**
   * Open the panel with this hashtag
   * @default "#tarteaucitron"
   */
  hashtag?: string

  /**
   * Cookie name
   * @default "tarteaucitron"
   */
  cookieName?: string

  /**
   * Banner position
   * @default middle
   */
  orientation?: "middle" | "top" | "bottom"

  /**
   * Group services by category
   * @default false
   */
  groupServices?: boolean

  /**
   * Click to expand the description
   * @default true
   */
  showDetailsOnClick?: boolean

  /**
   * Default state
   * @default wait
   */
  serviceDefaultState?: "wait" | boolean

  /**
   * Show the small banner on bottom right
   * @default false
   */
  showAlertSmall?: boolean

  /**
   * Show the cookie list
   * @default false
   */
  cookieslist?: boolean

  /**
   * Show a close X on the banner
   * @default false
   */
  closePopup?: boolean

  /**
   * Show cookie icon to manage cookies
   * @default true
   */
  showIcon?: boolean

  /** Optionnal: URL or base64 encoded image */
  iconSrc?: string
  /**
   * @default BottomRight
   */
  iconPosition: "BottomRight" | "BottomLeft" | "TopRight" | "TopLeft"

  /**
   * Show a Warning if an adblocker is detected
   * @default false
   */
  adblocker?: boolean

  /**
   * Show the deny all button
   * @default true
   */
  DenyAllCta?: boolean

  /**
   * Show the accept all button when highPrivacy on
   * @default true
   */
  AcceptAllCta?: boolean

  /**
   * HIGHLY RECOMMENDED Disable auto consent
   * @default true
   */
  highPrivacy?: boolean

  /**
   * Ask the consent for "Privacy by design" services
   * @default false
   */
  alwaysNeedConsent?: boolean

  /**
   * If Do Not Track == 1, disallow all
   * @default false
   */
  handleBrowserDNTRequest?: boolean

  /**
   * Remove credit link
   * @default false
   */
  removeCredit?: boolean

  /**
   * Show more info link
   * @default true
   */
  moreInfoLink?: boolean

  /**
   * If false, the tarteaucitron.css file will be loaded
   * @default false
   */
  useExternalCss?: boolean

  /**
   * If false, the tarteaucitron.js file will be loaded
   * @default false
   */
  useExternalJs?: boolean

  /** Shared cookie for multisite */
  cookieDomain?: string

  /** Change the default readmore link */
  readmoreLink?: string

  /**
   * Show a message about mandatory cookies
   * @default true
   */
  mandatory?: boolean
  /**
   * Show the disabled accept button when mandatory on
   * @default true
   */
  mandatoryCta?: boolean

  /** Optional a11y: Custom element ID used to open the panel */
  customCloserId?: string

  /**
   * Enable Google Consent Mode v2 for Google ads and GA4
   * @default true
   */
  googleConsentMode?: boolean

  /**
   * Show the number of partners on the popup/middle banner
   * @default false
   */
  partnersList?: boolean
}

declare global {
  const tarteaucitron: {
    init: (options: TarteaucitronOptions) => void
  }
}

export {}
