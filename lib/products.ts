export interface Product {
  key: string
  name: string
  short: string
  tags: string[]
  hubSlug?: string
  intro: string
  answer: string
  options: string[]
  benefits: { t: string; d: string }[]
  faqs: { q: string; a: string }[]
}

export const PRODUCTS: Product[] = [
  {
    key: "windows", name: "Aluminium Windows", short: "Made to measure aluminium windows: top hung, side hung, sliding, fixed and corner.", tags: ["windows"], hubSlug: "aluminium-windows",
    intro: "Aluminium windows give you slim frames, big views and a finish that does not rust or rot. We measure, make and install them for new builds, renovations and replacements.",
    answer: "Elite Aluminium makes and installs aluminium windows across Gauteng, including top hung, side hung, sliding, fixed and corner windows, in powder coated colours such as black, charcoal, bronze and white.",
    options: ["Top hung and side hung windows", "Sliding windows", "Fixed and picture windows", "Corner windows", "Windows with burglar bars", "Etched and frosted glass", "Double glazing options"],
    benefits: [
      { t: "Does not rust or rot", d: "Aluminium frames suit South African weather and need very little maintenance." },
      { t: "Slim frames, more light", d: "Strong, narrow frames mean larger panes of glass and brighter rooms." },
      { t: "Powder coated colours", d: "Choose the frame colour that suits the house, from black and charcoal to bronze and white." },
      { t: "Made to measure", d: "Every window is made to the size of your opening, for new builds and replacements." },
    ],
    faqs: [
      { q: "Can you replace my old windows?", a: "Yes. We measure the existing openings, make new aluminium windows and fit them, and make good around the frame." },
      { q: "Can windows come with burglar bars?", a: "Yes. We can fit burglar bars to windows, and you can see examples in our gallery." },
      { q: "Do you offer double glazing?", a: "Yes. Ask for double glazing on your quote and we will explain the options for your openings." },
    ],
  },
  {
    key: "doors", name: "Aluminium Doors", short: "Hinged, pivot and French aluminium doors with clear, frosted or etched glass.", tags: ["doors"], hubSlug: "aluminium-doors",
    intro: "A good door sets the tone for the whole house. We build aluminium front doors, pivot doors, French doors and patio doors, with glass that suits your style, including frosted and etched designs.",
    answer: "Elite Aluminium makes and installs aluminium doors across Gauteng, including hinged, pivot and French doors with clear, frosted or etched glass, in powder coated finishes.",
    options: ["Hinged front doors", "Pivot doors", "French doors", "Patio and garden doors", "Frosted and etched glass designs", "Doors with pet flaps", "Powder coated finishes"],
    benefits: [
      { t: "Strong and slim", d: "Aluminium frames carry large glass panels with a slim, modern look." },
      { t: "Glass designs", d: "Choose clear, frosted or etched glass. See our geometric and wildlife designs in the gallery." },
      { t: "Weather ready", d: "Aluminium suits our climate and does not swell, warp or rot." },
      { t: "Made to measure", d: "We build each door to your opening and fit it ready to use." },
    ],
    faqs: [
      { q: "Can I have a custom glass design?", a: "Yes. We have installed etched and frosted designs such as geometric patterns, trees and wildlife. Send us a picture of what you like." },
      { q: "Do you install pivot doors?", a: "Yes. Pivot doors are a popular choice for entrances, and we can show you photos of ones we have installed." },
    ],
  },
  {
    key: "sliding-doors", name: "Sliding Doors", short: "Aluminium sliding doors for patios, pools and large openings.", tags: ["sliding-doors"], hubSlug: "sliding-doors",
    intro: "Sliding doors open a room to the garden and let the light in. We install aluminium sliding doors for patios, pool areas and large openings, with the option of a trellis security gate.",
    answer: "Elite Aluminium installs aluminium sliding doors across Gauteng for patios, pools and large openings, in two, three or four panel layouts, with optional trellis security gates.",
    options: ["Two, three and four panel sliding doors", "Large and floor to ceiling openings", "Patio and pool doors", "Sliding doors with trellis security", "Etched and frosted glass", "Powder coated frames"],
    benefits: [
      { t: "Big openings", d: "Wide sliding doors connect the inside and outside of the house." },
      { t: "Smooth and strong", d: "Quality tracks and rollers keep the doors gliding for years." },
      { t: "Security options", d: "Add a trellis security gate for peace of mind. See examples in the gallery." },
      { t: "Made to measure", d: "Built to the size of your opening, with a neat finish inside and out." },
    ],
    faqs: [
      { q: "How wide can a sliding door be?", a: "We build sliding doors for large openings. Send the measurements or photos and we will advise on the best layout." },
      { q: "Can I add a security gate?", a: "Yes. We fit trellis security gates to sliding doors, and you can see examples in our gallery." },
    ],
  },
  {
    key: "stacking-doors", name: "Stacking and Folding Doors", short: "Stacking doors that fold away to open an entire wall.", tags: ["stacking-doors"], hubSlug: undefined,
    intro: "Stacking doors fold to the side to open a whole wall, which is perfect for entertainment rooms and patios. We design and install aluminium stacking and folding door systems.",
    answer: "Elite Aluminium installs aluminium stacking and folding doors across Gauteng that fold away to open up an entire wall to the patio or garden.",
    options: ["Stacking door systems", "Folding doors", "Patio and entertainment room openings", "Powder coated finishes", "Clear and tinted glass"],
    benefits: [
      { t: "Open the whole wall", d: "Panels stack neatly to the side for a wide, clear opening." },
      { t: "Great for entertaining", d: "Join your lounge to the patio for a bigger living space." },
      { t: "Aluminium strength", d: "Strong frames that suit large glass panels." },
      { t: "Made to measure", d: "Built to your opening and installed neatly." },
    ],
    faqs: [
      { q: "What is the difference between stacking and sliding doors?", a: "Sliding doors slide past each other. Stacking doors fold and stack to the side, so you can open more of the wall." },
    ],
  },
  {
    key: "security-gates", name: "Security Gates", short: "Slatted aluminium gates and trellis security gates for homes and complexes.", tags: ["security-gates"], hubSlug: "security-gates",
    intro: "A good gate protects the property and looks good doing it. We make and install aluminium slatted gates, driveway and pedestrian gates and trellis security gates.",
    answer: "Elite Aluminium makes and installs security gates across Gauteng, including aluminium slatted driveway and pedestrian gates and trellis security gates for doors.",
    options: ["Vertical slat driveway gates", "Pedestrian gates", "Trellis security gates", "Gates for sliding doors", "Powder coated finishes", "Made to estate guidelines"],
    benefits: [
      { t: "Looks as good as it protects", d: "Aluminium slat gates give a clean, modern look with strong security." },
      { t: "Will not rust", d: "Aluminium does not rust, so gates stay neat with little upkeep." },
      { t: "Made to measure", d: "Built to your opening and fitted securely." },
      { t: "Estate friendly", d: "Send your estate's design guidelines and we build to them." },
    ],
    faqs: [
      { q: "Can you match my estate's rules?", a: "Yes. Send us your estate's design guidelines with your quote request and we will build to them." },
    ],
  },
  {
    key: "burglar-bars", name: "Burglar Bars", short: "Window burglar bars and trellis security doors that look neat.", tags: ["burglar-bars"],
    intro: "Burglar bars keep your home secure without spoiling the look of your windows and doors. We make and fit window burglar bars and trellis security doors.",
    answer: "Elite Aluminium makes and fits burglar bars and trellis security doors across Gauteng, to suit windows, sliding doors and entrances.",
    options: ["Window burglar bars", "Trellis security doors", "Burglar bars for sliding doors", "Powder coated finishes", "Made to measure"],
    benefits: [
      { t: "Security that looks neat", d: "Clean lines and a colour matched finish keep the house looking good." },
      { t: "Made to measure", d: "Built to fit your windows and doors exactly." },
      { t: "Fitted properly", d: "Installed securely so they do their job." },
      { t: "Clear quotes", d: "Send photos and measurements and we will quote." },
    ],
    faqs: [
      { q: "Can burglar bars match my window frames?", a: "Yes. We can colour match bars to your frames. See examples in the gallery." },
    ],
  },
  {
    key: "balustrades", name: "Glass Balustrades", short: "Frameless glass and stainless steel balustrades for stairs, balconies and decks.", tags: ["balustrades"], hubSlug: "glass-balustrades",
    intro: "Glass balustrades keep the view and keep people safe. We design and install frameless glass and stainless steel balustrades for staircases, balconies, decks and ramps.",
    answer: "Elite Aluminium installs frameless glass and stainless steel balustrades across Gauteng for staircases, balconies, decks and ramps.",
    options: ["Frameless glass balustrades", "Stainless steel balustrades", "Staircase balustrades", "Balcony and deck balustrades", "Ramp handrails", "Glass pool fencing"],
    benefits: [
      { t: "Keeps the view", d: "Clear glass protects without blocking the view." },
      { t: "Strong and safe", d: "Quality glass and fixings that are installed correctly." },
      { t: "Clean modern look", d: "Frameless glass and stainless steel finishes suit modern homes." },
      { t: "Made to measure", d: "Measured and made for your stairs, balcony or deck." },
    ],
    faqs: [
      { q: "Can you do staircase balustrades?", a: "Yes. We have installed stainless steel and glass balustrades on staircases. See the gallery for photos." },
      { q: "Do you install glass pool fencing?", a: "Yes. We install frameless glass pool fencing. Pool safety has requirements, so tell us about the pool and we will advise." },
    ],
  },
  {
    key: "fencing", name: "Aluminium and Glass Fencing", short: "Aluminium slat fencing and frameless glass pool fencing.", tags: ["fencing"],
    intro: "A fence should look as good as it works. We install aluminium slat and rail fencing and frameless glass pool fencing for homes and complexes.",
    answer: "Elite Aluminium installs aluminium slat and rail fencing and frameless glass pool fencing across Gauteng for homes and complexes.",
    options: ["Aluminium slat fencing", "Horizontal rail fencing", "Frameless glass pool fencing", "Boundary and security fencing", "Powder coated finishes"],
    benefits: [
      { t: "Will not rust", d: "Aluminium suits our weather and stays neat." },
      { t: "Modern designs", d: "Slat, rail and glass fencing styles to suit the property." },
      { t: "Built to your boundary", d: "Measured and made for your site." },
      { t: "Estate friendly", d: "Send your estate's guidelines and we build to them." },
    ],
    faqs: [
      { q: "Do you do glass pool fencing?", a: "Yes. Pool fences have safety requirements, so tell us about the pool and we will advise on the right design." },
    ],
  },
  {
    key: "shower-doors", name: "Shower Doors", short: "Frameless and framed glass shower doors made to measure.", tags: ["shower-doors"],
    intro: "A good shower door keeps water in and makes the bathroom look bigger. We make and install frameless and framed glass shower doors and enclosures, measured for your bathroom.",
    answer: "Elite Aluminium makes and installs frameless and framed glass shower doors and enclosures across Gauteng, measured to suit your bathroom.",
    options: ["Frameless shower doors", "Framed shower doors", "Hinged and sliding doors", "Shower enclosures", "Clear and frosted glass"],
    benefits: [
      { t: "Made to measure", d: "Measured to your shower for a neat, leak free fit." },
      { t: "Looks clean", d: "Frameless glass opens up the bathroom." },
      { t: "Easy to clean", d: "Smooth glass is simple to keep looking good." },
      { t: "Fitted properly", d: "Installed securely by our team." },
    ],
    faqs: [
      { q: "Can you measure for a shower door before the tiles go in?", a: "Tiles affect the measurements, so we normally measure once tiling is complete. Talk to us during the build and we will advise." },
    ],
  },
  {
    key: "glazing", name: "Glass and Glazing", short: "Replacement glass, etched and frosted glass designs.", tags: ["etched-glass"],
    intro: "Glass can add privacy, style and character. We supply and install replacement glass and etched or frosted glass designs for windows and doors.",
    answer: "Elite Aluminium supplies and installs replacement glass and etched or frosted glass designs for windows and doors across Gauteng.",
    options: ["Replacement glass", "Etched glass designs", "Frosted glass", "Glass for windows and doors"],
    benefits: [
      { t: "Privacy with style", d: "Frosted and etched glass lets in light but keeps the view private." },
      { t: "Custom designs", d: "See our geometric, tree and wildlife designs in the gallery." },
      { t: "Replacement glass", d: "Cracked or broken glass replaced." },
      { t: "Made to measure", d: "Cut and fitted to your frames." },
    ],
    faqs: [
      { q: "Can I choose my own etched design?", a: "Yes. Send us a picture of the design you like and we will tell you what is possible." },
    ],
  },
  {
    key: "shopfronts", name: "Shopfronts", short: "Aluminium and glass shopfronts for businesses.", tags: [],
    intro: "A shopfront is your first impression. We install aluminium and glass shopfronts and glass doors for shops, offices and commercial properties.",
    answer: "Elite Aluminium installs aluminium and glass shopfronts, doors and windows for shops, offices and commercial properties across Gauteng.",
    options: ["Aluminium and glass shopfronts", "Commercial glass doors", "Office glazing", "Powder coated frames"],
    benefits: [
      { t: "A strong first impression", d: "Clean aluminium and glass makes your business look professional." },
      { t: "Built for traffic", d: "Frames and doors made for commercial use." },
      { t: "Made to measure", d: "Built to your premises and installed on schedule." },
      { t: "Clear quotes", d: "Send details and photos and we will quote." },
    ],
    faqs: [
      { q: "Can you work around our trading hours?", a: "Tell us when you trade and what is possible on site, and we will plan the installation around it." },
    ],
  },
  {
    key: "carports", name: "Aluminium Carports", short: "Aluminium carports and covers for homes and complexes.", tags: [],
    intro: "A carport protects the car and adds value to the home. We build aluminium carports and covers that suit modern properties.",
    answer: "Elite Aluminium builds and installs aluminium carports and covers across Gauteng for homes and complexes.",
    options: ["Aluminium carports", "Carport covers", "Powder coated finishes", "Made to estate guidelines"],
    benefits: [
      { t: "Will not rust", d: "Aluminium suits our weather and needs little upkeep." },
      { t: "Modern look", d: "Clean lines that suit modern homes." },
      { t: "Built to your space", d: "Measured and made to fit." },
      { t: "Estate friendly", d: "Send your estate's guidelines and we build to them." },
    ],
    faqs: [
      { q: "Do you build to estate guidelines?", a: "Yes. Send us your estate's design rules with your quote request." },
    ],
  },
]

export const getProduct = (key: string) => PRODUCTS.find((p) => p.key === key)!
