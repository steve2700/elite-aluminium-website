export interface City {
  slug: string
  name: string
  suburbs: string[]
  blurb: string
  photo: string
}

export const CITIES: City[] = [
  { slug: "johannesburg", name: "Johannesburg", suburbs: ["Rosebank", "Greenside", "Craighall", "Houghton", "Parktown", "Northcliff", "Bedfordview", "Edenvale"],
    blurb: "Johannesburg homes range from older suburban houses that need window replacements to new builds that want large glass openings. We handle both.",
    photo: "aluminium-glass-doors-new-build-wide-opening.jpg" },
  { slug: "sandton", name: "Sandton", suburbs: ["Sandton CBD", "Bryanston", "Morningside", "Illovo", "Hyde Park", "Rivonia", "Sunninghill", "Paulshof", "Woodmead"],
    blurb: "Sandton homes and complexes want a clean, modern look with large panes of glass. We install aluminium and glass to a high finish across Sandton.",
    photo: "black-aluminium-sliding-doors-pool-view.jpg" },
  { slug: "pretoria", name: "Pretoria", suburbs: ["Pretoria CBD", "Hatfield", "Menlyn", "Waterkloof", "Faerie Glen", "Garsfontein", "Montana", "Lynnwood", "Brooklyn"],
    blurb: "From family homes in Waterkloof to complexes in Menlyn, Pretoria properties call us for aluminium windows, doors, gates and glass.",
    photo: "black-aluminium-sliding-doors-patio.jpg" },
  { slug: "centurion", name: "Centurion", suburbs: ["Centurion CBD", "Midfield Estate", "Zwartkop", "Irene", "Rooihuiskraal", "Lyttelton", "Wierda Park", "Doringkloof"],
    blurb: "Centurion estates and security complexes have design rules. We work to them, so send us your guidelines with your quote request.",
    photo: "aluminium-vertical-slat-driveway-gate.jpg" },
  { slug: "midrand", name: "Midrand", suburbs: ["Midrand CBD", "Halfway House", "Kyalami", "Waterfall", "Midstream Estate", "Vorna Valley", "Carlswald", "Grand Central"],
    blurb: "Midrand's estates and new developments need windows, doors and glass installed on schedule. We work with owners and builders across Midrand.",
    photo: "large-corner-aluminium-window-installation.jpg" },
  { slug: "fourways", name: "Fourways", suburbs: ["Fourways", "Douglasdale", "Lonehill", "Witkoppen", "Broadacres", "Farmall", "Norscot", "Dainfern"],
    blurb: "Fourways lifestyle estates and complexes want neat, modern finishes. We install aluminium windows, doors and glass across Fourways.",
    photo: "black-aluminium-corner-windows-and-sliding-doors.jpg" },
  { slug: "randburg", name: "Randburg", suburbs: ["Randburg CBD", "Ferndale", "Northcliff", "Linden", "Greenside", "Fontainebleau", "Rand Park Ridge"],
    blurb: "Randburg homeowners call us to replace tired windows and doors and to add security that looks good.",
    photo: "top-hung-aluminium-windows-with-burglar-bars.jpg" },
  { slug: "roodepoort", name: "Roodepoort", suburbs: ["Roodepoort CBD", "Florida", "Constantia Kloof", "Weltevreden Park", "Little Falls", "Helderkruin", "Strubensvallei", "Wilgeheuwel"],
    blurb: "Roodepoort and the West Rand rely on us for aluminium windows, doors, gates and glass installations.",
    photo: "aluminium-window-and-sliding-door-combination.jpg" },
]

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug)
