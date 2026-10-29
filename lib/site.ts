// Contact details for Elite Aluminium. Change them here and the whole site updates.
export const SITE = {
  name: "Elite Aluminium",
  url: "https://www.elitealuminium.co.za",
  phoneDisplay: "060 269 1601",
  phoneTel: "+27602691601",
  whatsapp: "27602691601",
  email: "info@elitealuminium.co.za",
  region: "Gauteng",
  city: "Johannesburg",
  // TODO: confirm trading hours with the owner
  hours: "Mon to Fri 8am to 5pm, Sat 8am to 1pm",
  instagram: "https://www.instagram.com/_elitealuminium/",
  facebook: "https://www.facebook.com/elitealuminium",
  linkedin: "https://www.linkedin.com/company/elitealuminiumza/",
}

export const WA_LINK = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
