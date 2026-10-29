export interface Photo { id: string; file: string; title: string; alt: string; tags: string[]; w: number; h: number }
export interface Video { id: string; file: string; poster: string; title: string; tags: string[] }

export const PHOTOS: Photo[] = [
  { id: "black-aluminium-sliding-doors-large-opening", file: "black-aluminium-sliding-doors-large-opening.jpg", title: "Large black sliding doors", alt: "Large black aluminium sliding door opening", tags: ["sliding-doors"], w: 1080, h: 689 },
  { id: "black-aluminium-sliding-doors-pool-view", file: "black-aluminium-sliding-doors-pool-view.jpg", title: "Sliding doors facing the pool", alt: "Black aluminium sliding doors with a view of the pool", tags: ["sliding-doors"], w: 1183, h: 798 },
  { id: "black-aluminium-sliding-doors-patio", file: "black-aluminium-sliding-doors-patio.jpg", title: "Patio sliding doors", alt: "Black aluminium sliding doors opening onto a patio", tags: ["sliding-doors"], w: 1200, h: 1500 },
  { id: "sliding-doors-with-security-trellis-gate", file: "sliding-doors-with-security-trellis-gate.jpg", title: "Sliding doors with trellis security", alt: "Long run of aluminium sliding doors with a trellis security gate", tags: ["sliding-doors", "burglar-bars"], w: 1040, h: 896 },
  { id: "aluminium-sliding-doors-with-trellis-gate-closed", file: "aluminium-sliding-doors-with-trellis-gate-closed.jpg", title: "Sliding doors with trellis gate closed", alt: "Aluminium sliding doors with the trellis security gate closed", tags: ["sliding-doors", "burglar-bars"], w: 1190, h: 788 },
  { id: "aluminium-glass-doors-new-build-wide-opening", file: "aluminium-glass-doors-new-build-wide-opening.jpg", title: "Wide glass doors on a new build", alt: "Wide aluminium glass doors installed on a new build", tags: ["sliding-doors", "stacking-doors"], w: 1195, h: 698 },
  { id: "aluminium-stacking-doors-entertainment-room", file: "aluminium-stacking-doors-entertainment-room.jpg", title: "Stacking doors to the entertainment room", alt: "Aluminium stacking doors opening an entertainment room to the yard", tags: ["stacking-doors", "sliding-doors"], w: 1280, h: 958 },
  { id: "aluminium-stacking-door-frame-new-build", file: "aluminium-stacking-door-frame-new-build.jpg", title: "Stacking door frame on a new build", alt: "Aluminium stacking door frame installed on a new build", tags: ["stacking-doors"], w: 800, h: 600 },
  { id: "aluminium-window-and-sliding-door-combination", file: "aluminium-window-and-sliding-door-combination.jpg", title: "Window and sliding door combination", alt: "Aluminium window and sliding door installed together", tags: ["windows", "sliding-doors"], w: 1600, h: 1200 },
  { id: "black-aluminium-corner-windows-and-sliding-doors", file: "black-aluminium-corner-windows-and-sliding-doors.jpg", title: "Corner windows and sliding doors", alt: "Black aluminium corner windows and sliding doors", tags: ["windows", "sliding-doors"], w: 1080, h: 727 },
  { id: "large-corner-aluminium-window-installation", file: "large-corner-aluminium-window-installation.jpg", title: "Large corner window", alt: "Large corner aluminium window installation", tags: ["windows"], w: 960, h: 1280 },
  { id: "black-aluminium-corner-window-double-storey-home", file: "black-aluminium-corner-window-double-storey-home.jpg", title: "Corner window on a double storey home", alt: "Black aluminium corner window on a double storey home", tags: ["windows"], w: 500, h: 889 },
  { id: "bronze-aluminium-top-hung-windows-installation", file: "bronze-aluminium-top-hung-windows-installation.jpg", title: "Bronze top hung windows", alt: "Bronze aluminium top hung windows being installed", tags: ["windows"], w: 1200, h: 1600 },
  { id: "top-hung-aluminium-windows-with-burglar-bars", file: "top-hung-aluminium-windows-with-burglar-bars.jpg", title: "Top hung windows with burglar bars", alt: "Top hung aluminium windows fitted with burglar bars", tags: ["windows", "burglar-bars"], w: 1350, h: 1800 },
  { id: "aluminium-window-with-burglar-bars-installed", file: "aluminium-window-with-burglar-bars-installed.jpg", title: "Window with burglar bars", alt: "Aluminium window with burglar bars installed", tags: ["windows", "burglar-bars"], w: 1013, h: 1800 },
  { id: "aluminium-window-installation-with-ladder", file: "aluminium-window-installation-with-ladder.jpg", title: "Window replacement on a townhouse", alt: "Aluminium window replacement on a townhouse", tags: ["windows"], w: 1013, h: 1800 },
  { id: "bronze-aluminium-window-etched-tree-design", file: "bronze-aluminium-window-etched-tree-design.jpg", title: "Etched tree design window", alt: "Bronze aluminium window with an etched tree glass design", tags: ["windows", "etched-glass"], w: 1280, h: 960 },
  { id: "aluminium-pivot-door-geometric-frosted-glass", file: "aluminium-pivot-door-geometric-frosted-glass.jpg", title: "Pivot door with geometric frosted glass", alt: "Aluminium pivot door with a geometric frosted glass design", tags: ["doors", "etched-glass"], w: 867, h: 1156 },
  { id: "aluminium-sliding-door-etched-deer-glass-design", file: "aluminium-sliding-door-etched-deer-glass-design.jpg", title: "Sliding door with etched deer", alt: "Aluminium sliding door with an etched deer glass design", tags: ["doors", "sliding-doors", "etched-glass"], w: 809, h: 1080 },
  { id: "etched-glass-sliding-doors-wildlife-design", file: "etched-glass-sliding-doors-wildlife-design.jpg", title: "Sliding doors with wildlife etching", alt: "Aluminium sliding doors with an etched wildlife glass design", tags: ["doors", "sliding-doors", "etched-glass"], w: 1600, h: 701 },
  { id: "black-aluminium-door-and-frame-installation", file: "black-aluminium-door-and-frame-installation.jpg", title: "Black aluminium door and frame", alt: "Black aluminium door and frame installed", tags: ["doors"], w: 960, h: 1280 },
  { id: "aluminium-pedestrian-door-open", file: "aluminium-pedestrian-door-open.jpg", title: "Aluminium pedestrian door", alt: "Aluminium pedestrian door standing open", tags: ["doors"], w: 720, h: 1280 },
  { id: "aluminium-glass-door-with-pet-flap-installation", file: "aluminium-glass-door-with-pet-flap-installation.jpg", title: "Glass door with pet flap", alt: "Aluminium glass door being fitted with a pet flap", tags: ["doors"], w: 899, h: 1599 },
  { id: "aluminium-vertical-slat-driveway-gate", file: "aluminium-vertical-slat-driveway-gate.jpg", title: "Vertical slat driveway gate", alt: "Aluminium vertical slat driveway gate", tags: ["security-gates"], w: 720, h: 1600 },
  { id: "black-aluminium-slatted-pedestrian-gate", file: "black-aluminium-slatted-pedestrian-gate.jpg", title: "Slatted pedestrian gate", alt: "Black aluminium slatted pedestrian gate", tags: ["security-gates"], w: 960, h: 1280 },
  { id: "trellis-security-door-bronze-frame", file: "trellis-security-door-bronze-frame.jpg", title: "Trellis security door", alt: "Trellis security door in a bronze frame", tags: ["burglar-bars", "security-gates"], w: 960, h: 1280 },
  { id: "frameless-glass-pool-fencing-installation", file: "frameless-glass-pool-fencing-installation.jpg", title: "Frameless glass pool fencing", alt: "Frameless glass pool fencing installation", tags: ["fencing", "balustrades"], w: 1600, h: 900 },
  { id: "frameless-glass-pool-fence-garden", file: "frameless-glass-pool-fence-garden.jpg", title: "Glass pool fence in the garden", alt: "Frameless glass pool fence in a garden", tags: ["fencing", "balustrades"], w: 720, h: 720 },
  { id: "glass-balustrade-installation-team-at-work", file: "glass-balustrade-installation-team-at-work.jpg", title: "Glass balustrade installation", alt: "Elite Aluminium team installing a glass balustrade", tags: ["balustrades"], w: 1200, h: 1600 },
  { id: "stainless-steel-balustrade-staircase-installation", file: "stainless-steel-balustrade-staircase-installation.jpg", title: "Stainless steel staircase balustrade", alt: "Stainless steel balustrade on a staircase", tags: ["balustrades"], w: 1280, h: 720 },
  { id: "stainless-steel-handrail-ramp-installation", file: "stainless-steel-handrail-ramp-installation.jpg", title: "Stainless steel ramp handrail", alt: "Stainless steel handrail on an access ramp", tags: ["balustrades"], w: 1600, h: 900 },
  { id: "horizontal-aluminium-slat-fencing-with-rails", file: "horizontal-aluminium-slat-fencing-with-rails.jpg", title: "Horizontal rail fencing", alt: "Horizontal aluminium rail fencing", tags: ["fencing", "balustrades"], w: 1772, h: 1772 },
  { id: "frameless-glass-shower-door-installation", file: "frameless-glass-shower-door-installation.jpg", title: "Frameless shower door", alt: "Frameless glass shower door installation", tags: ["shower-doors"], w: 720, h: 1510 },
  { id: "shower-door-installation-in-progress", file: "shower-door-installation-in-progress.jpg", title: "Shower door being installed", alt: "Shower door installation in progress", tags: ["shower-doors"], w: 720, h: 1280 },
]

export const VIDEOS: Video[] = [
  { id: "aluminium-window-with-burglar-bars-installation-video", file: "aluminium-window-with-burglar-bars-installation-video.mp4", poster: "aluminium-window-with-burglar-bars-installed.jpg", title: "Window with burglar bars, installation", tags: ["windows", "burglar-bars"] },
  { id: "aluminium-window-replacement-installation-video", file: "aluminium-window-replacement-installation-video.mp4", poster: "aluminium-window-installation-with-ladder.jpg", title: "Window replacement on site", tags: ["windows"] },
  { id: "horizontal-aluminium-slat-fencing-rails-video", file: "horizontal-aluminium-slat-fencing-rails-video.mp4", poster: "horizontal-aluminium-slat-fencing-with-rails.jpg", title: "Horizontal rail fencing", tags: ["fencing", "balustrades"] },
]

export interface GalleryGroup { key: string; label: string; tags: string[] }
export const GROUPS: GalleryGroup[] = [
  { key: "windows", label: "Windows", tags: ["windows"] },
  { key: "doors", label: "Doors", tags: ["doors"] },
  { key: "sliding-doors", label: "Sliding and stacking doors", tags: ["sliding-doors", "stacking-doors"] },
  { key: "gates", label: "Gates and burglar bars", tags: ["security-gates", "burglar-bars"] },
  { key: "balustrades", label: "Balustrades and glass fencing", tags: ["balustrades", "fencing"] },
  { key: "shower-doors", label: "Shower doors", tags: ["shower-doors"] },
  { key: "etched-glass", label: "Etched glass designs", tags: ["etched-glass"] },
]

export const photosFor = (tags: string[], limit = 12) =>
  PHOTOS.filter((p) => p.tags.some((t) => tags.includes(t))).slice(0, limit)
export const photoByFile = (file: string) => PHOTOS.find((p) => p.file === file)
