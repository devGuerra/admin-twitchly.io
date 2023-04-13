/** @type {import('next-seo').DefaultSeoProps} */
export const defaultSEOConfig = {
  title: "Seu Filhote",
  titleTemplate: "%s | Seu Filhote",
  defaultTitle: "Seu Filhote",
  description:
    "Encontre seu novo amigo com a ajuda do Seu Filhote. Aqui você encontra os melhores anúncios criadores para encontrar seu gato ou cachorro.",
  canonical: "https://seufilhote.com.br/",
  openGraph: {
    url: "https://seufilhote.com.br/",
    title: "seufilhote.com.br",
    description:
      "Encontre seu novo amigo com a ajuda do Seu Filhote. Aqui você encontra os melhores anúncios criadores para encontrar seu gato ou cachorro.",
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
};
