/** @type {import('next-seo').DefaultSeoProps} */
export const defaultSEOConfig = {
  title: "Twitchly",
  titleTemplate: "%s | Twitchly",
  defaultTitle: "Twitchly",
  description:
    "Improve your growth on Twitch with Twitchly. Get more followers, viewers and subscribers.",
  canonical: "https://twitchly.io",
  openGraph: {
    url: "https://twitchly.io",
    title: "twitchly.io",
    description:
      "Improve your growth on Twitch with Twitchly. Get more followers, viewers and subscribers.",
    images: [
      {
        url: "https://twitchly.io/api/opengraph",
        alt: "Twitchly - improve your growth",
      },
    ],
    site_name: "twitchly.io",
  },
  twitter: {
    handle: "@dev_guerra",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon-precomposed",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/favicon/touch-icon-ipad.jpg",
      sizes: "76x76",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};
