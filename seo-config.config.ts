/** @type {import('next-seo').DefaultSeoProps} */
export const defaultSEOConfig = {
  title: "Seu Filhote",
  titleTemplate: "%s | Seu Filhote",
  defaultTitle: "Seu Filhote",
  description:
    "Crie um site para site para seu Canil com seufilhote.com.br. Economize tempo e dinheiro com nosso catálogo online e compartilhe com seus clientes a história de seus filhotes.",
  canonical: "https://seufilhote.com.br/",
  openGraph: {
    url: "https://seufilhote.com.br/",
    title: "seufilhote.com.br",
    description:
      "Crie um site para site para seu Canil com seufilhote.com.br. Economize tempo e dinheiro com nosso catálogo online e compartilhe com seus clientes a história de seus filhotes.",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "seufilhote.com.brog-image",
      },
    ],
    site_name: "seufilhote.com.br",
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
