import type { DestinationConfig } from "../types";

const wellington: DestinationConfig = {
  // ─── Identity ───
  slug: "wellington",
  name: "Wellington",
  brandName: "Explore Wellington",
  domain: "explore-wellington.com",
  email: "info@explorewellington.com",
  privacyEmail: "privacy@explorewellington.com",

  // ─── Search ───
  searchTerm: "Wellington",
  mapCenter: { lat: -41.2866, lng: 174.7756 },

  // ─── Hero ───
  hero: {
    imageUrl:
      "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1920&q=80",
    heading: "Wellington — The Coolest Little Capital in the World",
    subheading:
      "Perched between dramatic harbour waters and forested hills, Wellington is a compact powerhouse of creativity, coffee culture, and culinary brilliance at the southern tip of the North Island.",
    ctaText: "Explore Experiences",
    stats: [
      { num: "215K", label: "population" },
      { num: "30+", label: "cafes per km²" },
      { num: "80+", label: "museums & galleries" },
      { num: "3", label: "major film studios" },
    ],
  },

  // ─── About Section (Homepage) ───
  aboutSection: {
    imageUrl:
      "https://images.unsplash.com/photo-1595125990323-885cec5217ff?w=800&q=80",
    heading: "Discover the Creative Capital",
    paragraphs: [
      "Wellington sits at the bottom of New Zealand's North Island, wrapped around a sparkling harbour and crowned by lush green hills. Despite being one of the smallest capital cities in the world, it punches far above its weight — boasting more cafes, bars, and restaurants per capita than New York City, a thriving independent arts scene, and the legendary Weta Workshop that brought Middle-earth to life.",
      "From the iconic red cable car climbing to the Botanic Garden to the world-class Te Papa Tongarewa museum on the waterfront, Wellington rewards the curious. Venture further to the wild south coast to spot seals at Red Rocks, lose yourself in the urban eco-sanctuary of Zealandia, or follow the aroma of freshly roasted coffee down one of Cuba Street's colourful laneways.",
    ],
  },

  // ─── About Page ───
  aboutPage: {
    heroGradient: "from-emerald-900 via-teal-900 to-slate-900",
    heading: "About Explore Wellington",
    subheading:
      "Your guide to the coolest little capital — curating the best experiences in New Zealand's most creative and compact city.",
    story: [
      "Explore Wellington was created by people who fell in love with this windswept, coffee-fuelled capital and wanted to share its magic with the world. From the craft beer laneways of Te Aro to the primeval forest of Zealandia, we believe Wellington offers experiences that rival any major city — packed into a walkable, welcoming, and wildly creative package.",
      "We partner with local operators, guides, and artisans who know Wellington inside out. Every experience on our platform has been vetted for quality, authenticity, and sustainability — because the best way to experience Wellington is through the people who make it tick.",
      "Wellington faces unique challenges: earthquakes, rising seas, and the ever-present wind. But this city has always turned adversity into character. We're committed to promoting sustainable tourism that supports local communities, protects the harbour environment, and ensures that Wellington's creative spirit endures for generations to come.",
    ],
    values: [
      {
        icon: "Coffee",
        title: "Culture & Creativity",
        description:
          "Wellington is the cultural capital of New Zealand. We champion the artists, makers, and innovators who give this city its unique identity — from street art to world-class theatre.",
      },
      {
        icon: "TreePine",
        title: "Environmental Guardianship",
        description:
          "From Zealandia's predator-free sanctuary to harbour clean-ups, Wellington leads in urban conservation. We promote experiences that protect and celebrate the natural environment.",
      },
      {
        icon: "Users",
        title: "Community First",
        description:
          "We work with locally owned businesses and Maori cultural operators to ensure tourism benefits the communities that call Wellington home and keeps the city's independent spirit alive.",
      },
      {
        icon: "Shield",
        title: "Safety & Trust",
        description:
          "Every experience on our platform meets rigorous safety and quality standards. We only feature operators with proven track records and genuine local knowledge.",
      },
      {
        icon: "Heart",
        title: "Authentic Experiences",
        description:
          "From Maori cultural tours to behind-the-scenes visits at Weta Workshop, we curate experiences that reveal the real Wellington — not the tourist version.",
      },
      {
        icon: "Globe",
        title: "Accessible Discovery",
        description:
          "Whether you're a solo foodie, a film buff, or a family looking for adventure, we help every visitor find their perfect Wellington experience.",
      },
    ],
  },

  // ─── Collections ───
  collections: [
    {
      slug: "food-coffee-culture",
      name: "Food & Coffee Culture",
      description:
        "Explore Wellington's legendary coffee scene and culinary excellence — from world-champion roasters and craft breweries to award-winning restaurants and bustling night markets.",
      searchTerm: "Wellington food coffee tour",
      icon: "Coffee",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      slug: "nature-wildlife",
      name: "Nature & Wildlife",
      description:
        "Discover urban eco-sanctuaries, harbour kayaking, wild seal colonies on the south coast, and forested hill walks — all within minutes of the city centre.",
      searchTerm: "Wellington nature wildlife tour",
      icon: "TreePine",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      slug: "film-arts",
      name: "Film & Arts",
      description:
        "Go behind the scenes at Weta Workshop, explore Te Papa Tongarewa, wander vibrant street art laneways, and experience Wellington's thriving theatre and gallery scene.",
      searchTerm: "Wellington film arts Weta tour",
      icon: "Film",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      slug: "day-trips",
      name: "Day Trips",
      description:
        "Venture beyond the capital to Martinborough's boutique wineries, Kapiti Island's bird sanctuary, the Wairarapa countryside, and the historic Rimutaka Rail Trail.",
      searchTerm: "Wellington day trip Martinborough Kapiti",
      icon: "Map",
      gradient: "from-blue-500 to-cyan-500",
    },
  ],

  // ─── Guide Page ───
  guide: {
    heroImageUrl:
      "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1920&q=80",
    title: "The Complete Guide to Wellington (2026)",
    subtitle:
      "New Zealand's compact, creative capital — where world-class culture, coffee, and coastline collide at the edge of Cook Strait.",
    stats: [
      { num: "215K", label: "population" },
      { num: "30+", label: "cafes per km²" },
      { num: "80+", label: "museums & galleries" },
      { num: "3", label: "major film studios" },
    ],
    facts: [
      {
        icon: "Wind",
        title: "The Windiest City on Earth",
        text: "Wellington is widely cited as the windiest city in the world, with average wind speeds exceeding 26 km/h. The city sits in the path of the Roaring Forties, and Cook Strait funnels wind between the North and South Islands, creating gusts that regularly exceed 100 km/h.",
      },
      {
        icon: "Landmark",
        title: "World's Southernmost Capital",
        text: "Wellington holds the distinction of being the southernmost capital city of any sovereign nation on Earth. At 41.28° south, it sits further from the equator than any other national capital, giving it a unique position on the global map.",
      },
      {
        icon: "Coffee",
        title: "Coffee Capital of New Zealand",
        text: "Wellington has more cafes and coffee roasters per capita than any city in New Zealand — and arguably more than anywhere in the Southern Hemisphere. The flat white was popularised here in the 1980s, and the city's coffee culture has since influenced cafes worldwide.",
      },
      {
        icon: "Bird",
        title: "Zealandia — A Living Time Machine",
        text: "Zealandia Ecosanctuary is the world's first fully fenced urban wildlife sanctuary. Its 225 hectares of regenerating forest, enclosed by a predator-proof fence, have allowed species like the little spotted kiwi, tuatara, and saddleback to return to the mainland for the first time in over a century.",
      },
      {
        icon: "Building",
        title: "Te Papa Tongarewa — Our Place",
        text: "Te Papa is New Zealand's national museum and one of the most visited museums in the Southern Hemisphere. Opened in 1998 on the Wellington waterfront, its innovative, interactive approach to storytelling — including a colossal squid and an earthquake simulator — attracts over 1.5 million visitors annually. Entry is free.",
      },
      {
        icon: "TramFront",
        title: "The Iconic Wellington Cable Car",
        text: "The Wellington Cable Car has been carrying passengers from Lambton Quay to the hilltop Kelburn terminus since 1902. The five-minute ride offers sweeping views of the city and harbour and deposits you at the entrance to the Botanic Garden and Carter Observatory.",
      },
      {
        icon: "Beer",
        title: "Craft Beer Pioneer",
        text: "Wellington is home to New Zealand's densest concentration of craft breweries. Garage Project, ParrotDog, Panhead, and Fork & Brewer are just a few of the breweries that have made Wellington a world-class beer destination, with over 30 craft breweries in the greater region.",
      },
      {
        icon: "Clapperboard",
        title: "Hollywood of the South Pacific",
        text: "Wellington is the film capital of New Zealand, home to Weta Workshop, Weta FX, Park Road Post Production, and Stone Street Studios. Peter Jackson's film empire transformed the city, producing The Lord of the Rings, King Kong, Avatar, and dozens of other blockbusters. The film industry contributes over $3 billion to the New Zealand economy.",
      },
      {
        icon: "AlertTriangle",
        title: "Earthquake Capital",
        text: "Wellington sits directly on the boundary of the Pacific and Australian tectonic plates, making it one of the most earthquake-prone capital cities in the world. The Wellington Fault runs directly beneath the central city, and engineers have designed many modern buildings to absorb seismic energy through base isolation technology.",
      },
    ],
    timeline: [
      {
        year: "~1280",
        title: "Maori Settlement of Te Whanganui-a-Tara",
        text: "Polynesian explorers reach the Wellington harbour region, which Maori name Te Whanganui-a-Tara (the great harbour of Tara). The sheltered harbour and surrounding coastline provide abundant kai moana (seafood) and become home to several iwi.",
      },
      {
        year: "1839",
        title: "The New Zealand Company Arrives",
        text: "Colonel William Wakefield arrives on the Tory and negotiates a controversial land purchase from local Maori chiefs for the New Zealand Company. The first European settlers arrive in January 1840 aboard the Aurora, establishing a settlement they name Britannia (later renamed Wellington after the Duke of Wellington).",
      },
      {
        year: "1840",
        title: "Treaty of Waitangi Signed",
        text: "The Treaty of Waitangi is signed on 6 February, establishing British sovereignty over New Zealand. Wellington's strategic central location makes it increasingly important as a seat of governance.",
      },
      {
        year: "1855",
        title: "The Great Wairarapa Earthquake",
        text: "A massive magnitude 8.2 earthquake — one of the most powerful ever recorded in New Zealand — strikes the Wairarapa region. The earthquake raises the Wellington harbour floor by up to 2 metres, creating new dry land that forms the basis of much of today's central business district, including Lambton Quay.",
      },
      {
        year: "1865",
        title: "Capital Moves from Auckland",
        text: "The seat of government officially moves from Auckland to Wellington on 26 July 1865. Wellington is chosen for its central location between the North and South Islands and its excellent natural harbour, making it the ideal administrative centre for a growing nation.",
      },
      {
        year: "1902",
        title: "Wellington Cable Car Opens",
        text: "The Kelburn and Karori Tramway Company opens the Wellington Cable Car on 22 February 1902. Originally powered by a steam-driven winding mechanism, it carries passengers from Lambton Quay to the hilltop suburb of Kelburn. It quickly becomes the city's most iconic landmark.",
      },
      {
        year: "1968",
        title: "Wahine Disaster",
        text: "On 10 April, the inter-island ferry TEV Wahine is struck by Cyclone Giselle in Wellington Harbour and capsizes on Barrett Reef. Fifty-three people perish in New Zealand's worst modern maritime disaster. The storm also devastates the city with winds exceeding 275 km/h.",
      },
      {
        year: "1998",
        title: "Te Papa Tongarewa Opens",
        text: "New Zealand's national museum, Te Papa Tongarewa, opens on the Wellington waterfront on 14 February. Its bold, interactive approach to museum design sets a new global standard. Within its first year, Te Papa attracts over 2 million visitors — far exceeding projections.",
      },
      {
        year: "2001–2003",
        title: "Lord of the Rings Premieres",
        text: "Peter Jackson's The Lord of the Rings trilogy, filmed across New Zealand and produced at Weta Workshop and Park Road Post Production in Wellington, premieres to global acclaim. The Return of the King premiere in Wellington on 1 December 2003 attracts over 100,000 people to the waterfront, cementing Wellington's identity as a film capital.",
      },
      {
        year: "2000s–2020s",
        title: "Zealandia and Urban Conservation",
        text: "Zealandia Ecosanctuary's predator-proof fence enables the return of native species to the Wellington region. By the 2020s, wild kaka, tui, kereru, and little spotted kiwi are thriving across the city's green belt — an urban conservation success story unprecedented anywhere in the world.",
      },
    ],
    daredevils: [
      {
        year: "1888",
        name: "Katherine Mansfield — Literary Pioneer",
        text: "Born Kathleen Mansfield Beauchamp at 25 Tinakori Road, Wellington, she became one of the most influential modernist short story writers in the English language. Her vivid, psychologically penetrating stories — many set in Wellington — earned comparisons to Chekhov. She left New Zealand at 19 and died tragically young at 34, but her legacy as a literary pioneer endures worldwide.",
      },
      {
        year: "1961",
        name: "Peter Jackson — Filmmaking Visionary",
        text: "Born in Pukerua Bay just north of Wellington, Peter Jackson transformed the city into a global filmmaking hub. From his early splatter films shot in his parents' backyard to the Oscar-winning Lord of the Rings trilogy, Jackson proved that world-class cinema could be made from the bottom of the world. His Weta Workshop and Park Road Post empire employs thousands in Wellington.",
      },
      {
        year: "~1820",
        name: "Te Rauparaha — Warrior Chief",
        text: "The legendary Ngati Toa chief Te Rauparaha led his people from Kawhia to the Cook Strait region in the 1820s, establishing a powerful domain that included Kapiti Island and the wider Wellington coast. A brilliant military strategist, he is perhaps best known today as the composer of Ka Mate, the war dance performed by the All Blacks before every match.",
      },
      {
        year: "1840",
        name: "The First Ships — Settlers of Britannia",
        text: "The passengers of the Aurora, Adelaide, Oriental, Duke of Roxburgh, and Bengal Merchant were the first organised European settlers in Wellington, arriving in January–March 1840. They faced storms, swamp, earthquakes, and hostile terrain to establish the settlement that would become New Zealand's capital. Many of their descendants still live in the region today.",
      },
      {
        year: "1987",
        name: "Richard Taylor — Weta Workshop Co-Founder",
        text: "Sir Richard Taylor co-founded Weta Workshop in Wellington in 1987 with Tania Rodger. What began as a small special effects operation grew into one of the world's most celebrated design, effects, and prop-making studios. Weta's work on Lord of the Rings, Avatar, and dozens of other films earned multiple Academy Awards and made Wellington a pilgrimage site for film fans worldwide.",
      },
      {
        year: "1999",
        name: "Jim Mora, Linda Clark & Wellington's Media Voice",
        text: "Wellington's role as the seat of government made it the centre of New Zealand's political media landscape. Journalists, commentators, and broadcasters based in Wellington shaped national discourse for decades, with the Parliamentary Press Gallery, RNZ, and TVNZ headquarters all operating from the capital, giving the city an outsized influence on the national conversation.",
      },
    ],
    power: {
      title: "What Makes Wellington Extraordinary",
      subtitle:
        "Where creative ambition and environmental consciousness combine to produce a capital city unlike any other.",
      columns: [
        {
          icon: "Clapperboard",
          title: "Creative & Film Industry",
          items: [
            "Home to Weta Workshop, Weta FX, Park Road Post Production, and Stone Street Studios",
            "The Lord of the Rings, King Kong, Avatar, and The Adventures of Tintin were all produced in Wellington",
            "Over 30 craft breweries, 10+ independent theatres, and 80+ galleries in the greater Wellington region",
            "Cuba Street is the creative heart of the city — home to street performers, independent boutiques, and artist studios",
            "The New Zealand Film Commission, NZ Symphony Orchestra, and Royal NZ Ballet are all headquartered here",
            "Wellington's film and screen sector contributes over $1 billion annually to the regional economy",
          ],
        },
        {
          icon: "Leaf",
          title: "Environmental Innovation & Conservation",
          items: [
            "Zealandia Ecosanctuary is the world's first fully fenced urban wildlife sanctuary — 225 hectares of predator-free forest",
            "Native birds including kaka, tui, kereru, and little spotted kiwi now thrive across the city's green belt",
            "Wellington's Town Belt — 425 hectares of protected green space encircling the city — was set aside in 1873",
            "The city has committed to being carbon-neutral by 2050, with major investments in public transport and cycling infrastructure",
            "Kapiti Island, a nature reserve off the coast, is one of the most important bird sanctuaries in New Zealand",
            "The harbour and south coast support populations of fur seals, little blue penguins, and occasional orca visits",
          ],
        },
      ],
    },
    trivia: [
      {
        q: "Wellington wind once blew a train off its tracks",
        text: "In 1936, a goods wagon was blown off the tracks at the Wellington railway yards during a severe storm. Wellingtonians have a saying: 'You can't beat Wellington on a good day' — because on a bad day, the wind might literally blow you off your feet.",
      },
      {
        q: "The flat white was popularised here",
        text: "While both Wellington and Australia claim the flat white, Wellington's coffee scene was instrumental in refining and popularising the drink in the 1980s and 1990s. Today, Wellington roasters like Flight Coffee, Peoples Coffee, and Supreme have international followings.",
      },
      {
        q: "Te Papa houses a colossal squid",
        text: "Te Papa is home to the largest colossal squid specimen ever caught — a 495 kg deep-sea creature hauled up by a fishing boat in the Ross Sea in 2007. Its eyes are the size of dinner plates, and it remains one of the museum's most popular exhibits.",
      },
      {
        q: "Wellington's CBD sits on earthquake-raised land",
        text: "Much of Wellington's central business district — including Lambton Quay, which was once the waterfront — sits on land raised by the catastrophic 1855 Wairarapa earthquake. The quake lifted the harbour floor by up to 2 metres, permanently reshaping the city's geography.",
      },
      {
        q: "There are more bars per capita than New York",
        text: "Wellington has more bars, cafes, and restaurants per capita than New York City. Despite having a population of just 215,000, the city boasts over 600 licensed premises — creating one of the most vibrant dining and nightlife scenes in the Southern Hemisphere.",
      },
      {
        q: "A cable car runs through the city centre",
        text: "The Wellington Cable Car is one of the only urban funicular railways in the Southern Hemisphere still in regular public use. It carries over 1 million passengers a year on its 612-metre journey from Lambton Quay to Kelburn, rising 120 metres in just five minutes.",
      },
      {
        q: "Lord of the Rings premiere shut down the entire city",
        text: "The Return of the King world premiere on 1 December 2003 brought over 100,000 people to Wellington's waterfront — nearly half the city's population. Courtenay Place was transformed into a red carpet stretching over 500 metres, and the event was broadcast live to millions worldwide.",
      },
      {
        q: "Wellington has its own urban seal colony",
        text: "New Zealand fur seals regularly haul out on the rocks at Red Rocks on Wellington's wild south coast, just 30 minutes from the city centre. During winter, up to 100 seals can be seen basking on the shoreline — one of the few mainland urban seal colonies in the world.",
      },
      {
        q: "The beehive is not actually round",
        text: "The Beehive, New Zealand's executive wing of Parliament, is one of the most recognisable government buildings in the world. Despite its name and appearance, the building is not perfectly circular — it's based on a circle divided into segments, designed by British architect Sir Basil Spence and completed in 1979.",
      },
    ],
    tips: [
      {
        icon: "Wind",
        title: "Embrace the Wind",
        text: "Wellington is windy — there's no escaping it. Bring a wind-resistant jacket, hold onto your hat, and lean into it. The windiest months are October–January. On calm days, the city is absolutely stunning, so keep your plans flexible.",
      },
      {
        icon: "Coffee",
        title: "Start Your Day with Great Coffee",
        text: "Wellington's cafe culture is world-class. Head to Flight Coffee on Dixon Street, Peoples Coffee on Constable Street, or Supreme on Willis Street for some of the best flat whites in the world. Most cafes open by 7am.",
      },
      {
        icon: "Footprints",
        title: "Walk Everywhere",
        text: "Wellington's compact centre is best explored on foot. The waterfront, Cuba Street, Courtenay Place, and Parliament are all within a 15-minute walk of each other. Wear comfortable shoes — the city is hilly but the views from the top are worth it.",
      },
      {
        icon: "Train",
        title: "Take the Cable Car",
        text: "The Wellington Cable Car is both a practical transport link and a must-do experience. Ride up from Lambton Quay and walk back down through the Botanic Garden. Buy a return ticket but only use one way — the downhill walk through the gardens is beautiful.",
      },
      {
        icon: "Utensils",
        title: "Eat on Cuba Street",
        text: "Cuba Street is Wellington's dining heartbeat. From Malaysian hawker food at Satay Village to craft cocktails at Havana Bar, the strip has something for every budget. Go hungry and explore — some of the best spots are hidden in laneways and upstairs.",
      },
      {
        icon: "Calendar",
        title: "Time Your Visit for Festivals",
        text: "Wellington hosts major events year-round: CubaDupa (street festival, March), Wellington on a Plate (food festival, August), NZ International Film Festival (July–August), and World of Wearable Art (September–October). Book accommodation early during festival periods.",
      },
      {
        icon: "Compass",
        title: "Don't Skip the South Coast",
        text: "The wild south coast is the antithesis of the sheltered harbour side. Drive or walk to Red Rocks to see fur seals, visit Island Bay's colourful fishing village, or hike along the Skyline Track for panoramic views of Cook Strait and the South Island.",
      },
      {
        icon: "Ticket",
        title: "Te Papa Is Free — Go Twice",
        text: "New Zealand's national museum is free to enter and easily deserves two visits. Go once for the earthquake house and colossal squid, then return for the Maori and Pacific galleries. Some special exhibitions charge entry, but the permanent collection alone is world-class.",
      },
    ],
  },

  // ─── Blog Posts ───
  blogPosts: [
    {
      slug: "top-10-things-to-do-in-wellington",
      title: "Top 10 Things to Do in Wellington in 2026",
      excerpt:
        "From Te Papa and the cable car to Zealandia and Cuba Street, here are the must-do experiences for an unforgettable Wellington trip.",
      date: "March 20, 2026",
      isoDate: "2026-03-20",
      category: "Travel Guide",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800&q=80",
      content: `
<p>Wellington may be small, but this compact capital packs in more culture, creativity, and character per square kilometre than cities ten times its size. Whether you have a weekend or a full week, these ten experiences capture the very best of the coolest little capital in the world.</p>

<h2>1. Explore Te Papa Tongarewa</h2>
<p>New Zealand's national museum is one of the most innovative and engaging museums in the world — and it's completely free. Located on the Wellington waterfront, Te Papa (meaning 'Our Place' in Maori) houses everything from a 495kg colossal squid to an immersive earthquake simulator that recreates the 2016 Kaikoura quake. The Maori and Pacific galleries are extraordinary, offering deep insight into New Zealand's indigenous cultures through taonga (treasures), waka (canoes), and interactive storytelling.</p>
<p>Allow at least three hours, though you could easily spend an entire day. The top-floor cafe offers stunning harbour views, and the museum shop is one of the best in the country for New Zealand-made souvenirs.</p>
<p><strong>Tip:</strong> Visit on a weekday morning to avoid crowds, especially during school holidays. Special exhibitions sometimes charge entry, but the permanent collection is always free.</p>

<h2>2. Ride the Wellington Cable Car</h2>
<p>The bright red Wellington Cable Car has been an icon of the city since 1902. The five-minute ride climbs from Lambton Quay in the central city to the hilltop suburb of Kelburn, offering sweeping views of the harbour, city, and surrounding hills. At the top, you'll find the Cable Car Museum (free entry, surprisingly fascinating), the Carter Observatory, and the entrance to the Wellington Botanic Garden.</p>
<p>The best strategy is to ride up and then walk back down through the Botanic Garden — a beautiful 30-minute downhill stroll through native bush, formal gardens, and a duck pond that deposits you back in the heart of the city.</p>

<h2>3. Wander Cuba Street</h2>
<p>Cuba Street is the beating heart of Wellington's creative scene. This pedestrianised strip and its surrounding laneways are home to independent boutiques, record stores, vintage shops, street art, buskers, and some of the best dining in the country. Start at the Cuba Street bucket fountain (a quirky Wellington landmark that regularly drenches passersby on windy days) and wander south, ducking into side streets and upstairs bars.</p>
<p>Must-visits include Fidel's Cafe (Cuban-inspired brunch), Havana Bar (legendary cocktails and live music), and the countless independent stores that give Cuba Street its character. The annual CubaDupa street festival in March transforms the entire precinct into an open-air celebration of music, food, and performance.</p>

<h2>4. Visit Zealandia Ecosanctuary</h2>
<p>Zealandia is something genuinely unique — a 225-hectare urban wildlife sanctuary enclosed by a predator-proof fence, allowing native species to thrive just minutes from the central city. Walking the forested trails, you'll encounter birds that were once extinct on the mainland: saddleback, hihi (stitchbird), little spotted kiwi, and the prehistoric-looking tuatara reptile.</p>
<p>The sanctuary has been so successful that native birds have spilled out into the surrounding suburbs — today, native kaka and tui are a common sight across Wellington's green belt, something unimaginable 25 years ago. Book the guided night tour for a chance to see kiwi and glow-worms in the wild.</p>

<h2>5. Walk the Waterfront</h2>
<p>Wellington's waterfront promenade stretches from Queens Wharf to Oriental Bay, offering a flat, scenic walk past Te Papa, Frank Kitts Park, the lagoon, restaurants, sculptures, and eventually the golden sand of Oriental Bay beach. On a calm day, the harbour sparkles and the views across to the Eastbourne hills are stunning.</p>
<p>Stop at the Wellington Writers Walk — a series of literary installations embedded along the waterfront featuring quotes from famous New Zealand writers including Katherine Mansfield and Janet Frame. Continue to Oriental Bay for a swim (the beach is safe and popular in summer) or a coffee at one of the beachfront cafes.</p>

<h2>6. Climb Mount Victoria</h2>
<p>For the best panoramic view of Wellington, climb (or drive) to the summit of Mount Victoria. At 196 metres, it's not a strenuous hike — about 30 minutes from Oriental Bay through a mix of native bush and pine forest — but the 360-degree view from the top is breathtaking. On a clear day, you can see from the Rimutaka Range to the South Island across Cook Strait.</p>
<p>Lord of the Rings fans will recognise the pine forest on the slopes as the filming location for the Hobbiton woods scene where the hobbits hide from the Ringwraith. An information panel at the site marks the exact spot.</p>

<h2>7. Go Behind the Scenes at Weta Workshop</h2>
<p>Weta Workshop, the legendary special effects and prop-making studio co-founded by Sir Richard Taylor, offers guided tours of their Miramar facility. You'll see props, costumes, and creatures from The Lord of the Rings, The Hobbit, Avatar, and other blockbusters, and learn about the craftsmanship behind the magic — from miniature model-making to full-scale prosthetics and armour.</p>
<p>The Weta Cave shop and mini-museum in Miramar is free to enter and well worth a visit even if you don't do the full tour. The neighbourhood around Weta — known as Wellywood — is home to several other film production facilities and has a creative, studio-town atmosphere.</p>

<h2>8. Discover the South Coast and Red Rocks</h2>
<p>Wellington's south coast is wild, windswept, and utterly different from the sheltered harbour side. Drive to the end of Owhiro Bay and walk the coastal track to Red Rocks, where New Zealand fur seals haul out on the rocky shoreline — particularly in winter when up to 100 seals can be seen basking. The rocks themselves are genuinely red, coloured by pillow lava formed on an ancient seabed 200 million years ago.</p>
<p>The walk takes about 45 minutes each way along a rugged 4WD track. It's exposed to the elements, so dress warmly and check the weather. The reward is one of the most dramatic coastal landscapes near any capital city in the world.</p>

<h2>9. Eat and Drink Everything</h2>
<p>Wellington's food and drink scene punches absurdly above its weight. The city has more cafes, bars, and restaurants per capita than New York City, and the quality is consistently excellent. Don't miss: a flat white from Flight Coffee, dumplings from Dragons on Tory Street, craft beer at Garage Project's taproom in Aro Valley, and a degustazione dinner at Hillside Kitchen & Cellar or Cochon on Cuba Street.</p>
<p>For the full experience, visit during Wellington on a Plate (August), when the entire city becomes a food festival with special menus, pop-up events, and the famous Burger Wellington competition.</p>

<h2>10. Take a Ferry to Days Bay</h2>
<p>The East by West ferry from Queens Wharf to Days Bay is one of Wellington's best-kept secrets. The 30-minute harbour crossing offers gorgeous views of the city skyline and the surrounding hills, and deposits you at a charming beachside village with a wharf, swimming beach, cafe, and the beautiful Eastbourne coastal walk. It's the perfect half-day escape from the city.</p>
<p>From Days Bay, you can walk along the coast to Eastbourne village, explore the Pencarrow lighthouse track, or simply sit on the beach with an ice cream and watch the ferries cross the harbour.</p>

<h2>Planning Your Visit</h2>
<p>Wellington is a year-round destination, though the best weather is typically from December to March. The city is compact and walkable — you don't need a car for central attractions. Flights from Auckland take about an hour, and the Interislander ferry from the South Island docks right in the city. Book accommodation in Te Aro or the waterfront for the best access to dining and attractions.</p>
      `,
    },
    {
      slug: "wellington-coffee-food-guide",
      title: "Wellington Coffee & Food Guide: The Culinary Capital",
      excerpt:
        "Discover why Wellington is New Zealand's undisputed food capital — from world-class coffee roasters and craft breweries to hidden laneway restaurants.",
      date: "March 12, 2026",
      isoDate: "2026-03-12",
      category: "Food & Drink",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      content: `
<p>Wellington has more cafes, bars, and restaurants per capita than New York City. For a city of just 215,000 people, that statistic alone is remarkable — but it's the quality, creativity, and sheer obsessiveness of Wellington's food and drink scene that truly sets it apart. This is a city where baristas compete nationally, where chefs forage their own ingredients from the surrounding hills, and where a craft brewery can open in a former petrol station and become world-famous within a year.</p>

<h2>The Coffee Scene</h2>
<p>Wellington didn't just adopt coffee culture — it helped define it. The flat white, New Zealand's signature coffee drink, was popularised in Wellington cafes in the 1980s and has since conquered the world. Today, the city is home to dozens of specialty roasters and hundreds of cafes, each with their own personality and loyal following.</p>

<h3>Must-Visit Coffee Roasters</h3>
<p><strong>Flight Coffee:</strong> Located on Dixon Street, Flight is widely considered one of the best specialty coffee roasters in the Southern Hemisphere. Their single-origin pour-overs are exceptional, and the minimalist cafe space is a Wellington institution. Expect queues on weekend mornings.</p>
<p><strong>Peoples Coffee:</strong> A Wellington-born roaster with a strong ethical focus — all their coffee is organic and fair trade. The Constable Street cafe in Newtown is the original, housed in a converted warehouse with a community-minded vibe. Their espresso blend is rich and full-bodied.</p>
<p><strong>Supreme:</strong> One of New Zealand's original specialty roasters, Supreme's Willis Street cafe has been a Wellington fixture for over two decades. Their blends are consistently excellent, and the cafe has a buzzy, no-nonsense atmosphere that perfectly captures the city's coffee culture.</p>
<p><strong>Customs by Coffee Supreme:</strong> Located on the waterfront, Customs offers a sleek, harbour-facing space where you can watch the ferries while sipping meticulously prepared coffee. Their brunch menu is excellent too.</p>

<h3>The Best Cafe Experiences</h3>
<p><strong>Fidel's:</strong> A Cuba Street institution since 1998, Fidel's serves strong coffee and hearty brunch in a space decorated with Cuban revolutionary memorabilia. The vibe is bohemian, the portions are generous, and the people-watching from the window seats is unbeatable.</p>
<p><strong>Prefab:</strong> A sprawling, industrial-chic cafe on Jessie Street that roasts its own beans on-site. The cabinet food is among the best in the city, and the spacious interior makes it ideal for longer stays with a laptop. Weekend brunch is outstanding.</p>
<p><strong>Lamason Brew Bar:</strong> On Lombard Lane, Lamason combines specialty coffee with craft cocktails — switching seamlessly from morning espresso to evening old-fashioneds. The space is gorgeous, with exposed brick and warm lighting.</p>

<h2>Restaurants You Shouldn't Miss</h2>
<p>Wellington's restaurant scene is diverse, ambitious, and remarkably affordable compared to international cities of similar quality.</p>

<h3>Fine Dining</h3>
<p><strong>Hillside Kitchen & Cellar:</strong> Perched in the hills above Thorndon, Hillside offers a seasonal tasting menu that celebrates New Zealand produce with precision and creativity. The wine list focuses on natural and organic New Zealand wines. Book well ahead — it seats only 24.</p>
<p><strong>Cochon:</strong> A French-inspired bistro on Cuba Street that has earned a devoted following for its bold, flavour-driven cooking. The charcuterie is made in-house, and the wine list leans heavily on natural wines from France and New Zealand.</p>

<h3>Casual & Mid-Range</h3>
<p><strong>Loretta:</strong> On Cuba Street, Loretta serves some of the best brunch in Wellington — think buttermilk pancakes, smashed avocado done right, and excellent eggs. The interior is beautiful, all pale wood and greenery.</p>
<p><strong>Dragons:</strong> A tiny dumpling house on Tory Street that produces some of the best Chinese dumplings in New Zealand. The xiao long bao (soup dumplings) are outstanding, and the hand-pulled noodles are made fresh daily. Cash only, expect queues.</p>
<p><strong>Egmont Street Deli:</strong> A beloved neighbourhood deli and cafe serving outstanding sandwiches, salads, and cabinet food. The smoked fish sandwich is legendary among Wellingtonians.</p>

<h2>Craft Beer</h2>
<p>Wellington is the undisputed craft beer capital of New Zealand. The density of breweries, taprooms, and beer-focused bars in the city is extraordinary for its size.</p>

<h3>Essential Brewery Visits</h3>
<p><strong>Garage Project:</strong> Founded in a former petrol station in Aro Valley, Garage Project has become one of New Zealand's most innovative and acclaimed breweries. Their taproom on Aro Street pours an ever-rotating selection of experimental beers — from barrel-aged stouts to wild-fermented saisons. The annual Fresh hop beer (made with hops picked that morning) is a Wellington event.</p>
<p><strong>ParrotDog:</strong> Based in Lyall Bay, ParrotDog's brewery and taproom is a relaxed, dog-friendly space with excellent beer and food trucks on weekends. Their Bitterbitch IPA is a modern NZ craft classic.</p>
<p><strong>Panhead:</strong> Though technically in Upper Hutt, Panhead's beers are a Wellington staple. Their Super Charger APA is one of the best-selling craft beers in New Zealand. The brewery is worth the drive for tours and tastings.</p>

<h3>Best Beer Bars</h3>
<p><strong>Golding's Free Dive:</strong> A tiny, standing-room-only beer bar on Leeds Street with 18 taps of constantly rotating craft beer. It's the kind of place where you might end up chatting with a brewer about fermentation temperatures at midnight.</p>
<p><strong>Fork & Brewer:</strong> A brewpub on Bond Street that brews its own beers on-site and pairs them with a solid food menu. Great for groups and a good introduction to Wellington's craft beer scene.</p>
<p><strong>Hashigo Zake:</strong> A subterranean bar on Taranaki Street with an obsessive focus on quality craft beer from New Zealand and around the world. The atmosphere is intentionally low-key — this is a bar for people who really care about beer.</p>

<h2>Food Events & Festivals</h2>
<p>Wellington's food calendar is packed with events that draw visitors from across New Zealand:</p>
<ul>
<li><strong>Wellington on a Plate (August):</strong> The city's flagship food festival features special menus at restaurants across the city, the Burger Wellington competition (dozens of restaurants create unique burgers), and Visa Wellington on a Plate events showcasing local chefs and producers.</li>
<li><strong>CubaDupa (March):</strong> While primarily a street festival, CubaDupa fills Cuba Street with food stalls, pop-up kitchens, and culinary performances alongside music and art.</li>
<li><strong>Night Markets:</strong> Regular night markets at various locations around the city offer street food from dozens of cuisines — Thai, Ethiopian, Japanese, Mexican, and everything in between.</li>
<li><strong>Beervana (August):</strong> New Zealand's premier craft beer festival, held in Wellington, brings together over 80 breweries and thousands of beer lovers for two days of tastings, talks, and celebrations.</li>
</ul>

<h2>Practical Tips</h2>
<ul>
<li><strong>Book dinner reservations:</strong> Wellington's best restaurants fill up, especially on Thursday–Saturday. Book at least a few days ahead for popular spots.</li>
<li><strong>Cash is rare:</strong> Almost everywhere accepts cards and contactless payment. Some smaller spots are card-only.</li>
<li><strong>Explore the laneways:</strong> Some of Wellington's best food and drink is hidden in laneways and upstairs — Leeds Street, Eva Street, and Lombard Lane are all worth exploring.</li>
<li><strong>Visit in August:</strong> Wellington on a Plate and Beervana make August the best month for food and drink lovers, despite the winter weather.</li>
</ul>
      `,
    },
    {
      slug: "wellington-film-arts-scene",
      title: "Wellington's Film & Arts Scene: A Creative Capital Guide",
      excerpt:
        "From Weta Workshop to street art and world-class theatre, discover why Wellington is New Zealand's undisputed creative hub.",
      date: "March 5, 2026",
      isoDate: "2026-03-05",
      category: "Arts & Culture",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1460881680858-30d872d5b530?w=800&q=80",
      content: `
<p>Wellington has been called the creative capital of New Zealand, and it's a title the city wears with pride. Home to Peter Jackson's filmmaking empire, the national museum, a thriving independent theatre scene, and more galleries per capita than most cities ten times its size, Wellington is a place where creativity isn't just encouraged — it's embedded in the city's DNA.</p>

<h2>The Film Industry</h2>
<p>Wellington's transformation into a global filmmaking hub is one of the great success stories of modern cinema. What began with Peter Jackson making low-budget horror films in his parents' house in Pukerua Bay has grown into a multi-billion-dollar industry that has produced some of the most beloved films of all time.</p>

<h3>Weta Workshop</h3>
<p>Co-founded by Sir Richard Taylor and Tania Rodger in 1987, Weta Workshop is one of the most celebrated design, effects, and prop-making studios in the world. Their work on The Lord of the Rings trilogy earned multiple Academy Awards and established Wellington as a legitimate alternative to Hollywood for major film production. Since then, Weta has worked on Avatar, King Kong, District 9, The Adventures of Tintin, and dozens of other films and TV series.</p>
<p>The Weta Workshop Unleashed experience in Miramar offers guided tours where you can see original props, learn about the design process, and watch demonstrations of the techniques used to create everything from hobbit feet to Na'vi costumes. The adjacent Weta Cave is a free mini-museum and shop that's worth visiting even if you don't do the full tour.</p>

<h3>Wellywood</h3>
<p>The suburb of Miramar, where Weta Workshop, Weta FX, Park Road Post Production, and Stone Street Studios are all located, has been nicknamed 'Wellywood.' A controversial Wellywood sign (modelled on the Hollywood sign) was proposed for the hills above the suburb but was ultimately replaced with a more subtle tribute. Today, Miramar is a thriving creative neighbourhood with cafes, galleries, and a genuine studio-town atmosphere.</p>

<h3>Film Locations</h3>
<p>Wellington itself features in numerous films. Lord of the Rings fans can visit the Mount Victoria pine forest where the hobbits hid from the Ringwraith, or Harcourt Park in Upper Hutt where the Gardens of Isengard were filmed. The Weta Cave offers maps of local filming locations for self-guided tours.</p>

<h2>Te Papa Tongarewa</h2>
<p>New Zealand's national museum is more than a museum — it's a cultural experience. Te Papa's approach to storytelling is bold, interactive, and often deeply moving. Highlights include the earthquake house (which simulates a real quake), the colossal squid exhibit, the stunning Maori meeting house Te Hono ki Hawaiki, and the Gallipoli exhibition featuring hyper-realistic sculptures by Weta Workshop.</p>
<p>Te Papa regularly hosts international touring exhibitions alongside its permanent collection, and the museum's commitment to telling New Zealand's stories from multiple perspectives — Maori, Pakeha, Pacific, and immigrant — makes it one of the most culturally significant institutions in the country. Entry to the permanent collection is free.</p>

<h2>Galleries & Visual Arts</h2>
<p>Wellington's gallery scene ranges from major institutions to tiny artist-run spaces in converted garages.</p>

<h3>Major Galleries</h3>
<p><strong>City Gallery Wellington:</strong> Located in the Civic Square building, City Gallery hosts contemporary art exhibitions of national and international significance. The gallery's programming is ambitious and often provocative — expect video art, installation, and work that challenges as much as it delights. Entry is by koha (donation).</p>
<p><strong>The Dowse Art Museum:</strong> In Lower Hutt, The Dowse focuses on contemporary art, craft, and design. Its exhibitions are consistently excellent, and the building itself — with its dramatic cantilever over the street — is architecturally striking. Free entry.</p>
<p><strong>Pataka Art + Museum:</strong> In Porirua, Pataka is one of the best small museums in New Zealand, with a focus on Maori and Pacific art and culture. The gallery space is beautiful, and exhibitions rotate regularly.</p>

<h3>Independent & Artist-Run Spaces</h3>
<p>Wellington's independent gallery scene is thriving. Enjoy Gallery on Cuba Street, Bowen Galleries in Thorndon, and Page Galleries in James Street all show contemporary New Zealand art. For more experimental work, look for artist-run spaces and pop-up exhibitions in the Aro Valley and Newtown neighbourhoods.</p>

<h2>Theatre & Performance</h2>
<p>Wellington has the highest concentration of professional theatre companies in New Zealand, and the quality of live performance in the city is extraordinary for its size.</p>

<h3>Major Venues & Companies</h3>
<p><strong>Circa Theatre:</strong> Located on the waterfront, Circa is Wellington's premier professional theatre. With two stages, it produces a year-round programme of New Zealand and international plays, from new local works to Shakespeare. The waterfront location means you can combine a show with dinner at one of the surrounding restaurants.</p>
<p><strong>BATS Theatre:</strong> A beloved independent venue on Kent Terrace that programmes experimental, fringe, and emerging theatre. BATS is where many of New Zealand's best directors and playwrights got their start, and the programming is always adventurous. Tickets are affordable, and the bar is a gathering spot for Wellington's creative community.</p>
<p><strong>St James Theatre:</strong> A beautifully restored Edwardian theatre on Courtenay Place that hosts major touring productions, ballet, and musical theatre. The ornate interior is stunning.</p>

<h2>Street Art & Public Art</h2>
<p>Wellington's streets are an open-air gallery. The city actively encourages street art, and you'll find murals, installations, and sculptures throughout the central city.</p>
<p>Key street art locations include Cuba Street (ever-changing murals on building facades), the laneways off Courtenay Place (where commissioned murals cover entire walls), and the waterfront (home to large-scale sculptures and the Writers Walk literary installations). The annual WOW — World of Wearable Art Awards Show — brings sculptural fashion to life in spectacular runway performances every September-October.</p>

<h2>Music</h2>
<p>Wellington has a vibrant live music scene that punches well above its weight. San Fran on Cuba Street, Meow on Edward Street, and the Opera House are key venues for local and international acts. The city is home to the New Zealand Symphony Orchestra and the Royal New Zealand Ballet, both based at the Michael Fowler Centre and the St James Theatre respectively. For a more intimate experience, the many bars on Courtenay Place and Cuba Street host live acts most nights of the week.</p>

<h2>Creative Festivals</h2>
<ul>
<li><strong>NZ International Film Festival (July–August):</strong> One of the oldest film festivals in the Southern Hemisphere, screening the best of world cinema across several Wellington venues.</li>
<li><strong>World of Wearable Art (September–October):</strong> A spectacular awards show combining fashion, sculpture, and performance. The WOW competition attracts entries from over 40 countries.</li>
<li><strong>CubaDupa (March):</strong> A free two-day street festival on Cuba Street featuring over 100 performances, installations, and food stalls.</li>
<li><strong>Fringe Festival (February–March):</strong> Independent theatre, comedy, dance, and visual art in venues across the city. Expect the unexpected.</li>
<li><strong>LUX Light Festival (winter):</strong> Light installations and projections transform the Wellington waterfront and central city during the darkest months of the year.</li>
</ul>
      `,
    },
    {
      slug: "wellington-with-kids-family-guide",
      title: "Wellington with Kids: The Complete Family-Friendly Guide",
      excerpt:
        "Te Papa, Zealandia, the cable car, and beyond — here's how to plan a family trip to Wellington that everyone will love.",
      date: "February 22, 2026",
      isoDate: "2026-02-22",
      category: "Family Travel",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      content: `
<p>Wellington might be known for its coffee culture and creative scene, but it's also one of the best family destinations in New Zealand. With a world-class museum that's completely free, a cable car ride that delights every age, a wildlife sanctuary where you can see kiwi in the wild, and beaches, playgrounds, and green spaces everywhere — Wellington has something for every member of the family.</p>

<h2>Best Activities by Age Group</h2>

<h3>Toddlers & Preschoolers (Ages 2–5)</h3>
<p>Wellington is surprisingly well-suited for young families. The city is compact enough that you can get between activities quickly, with plenty of parks and cafes for refuelling stops along the way.</p>
<ul>
<li><strong>Te Papa Level 2 — Discovery Centres:</strong> Te Papa's interactive zones are designed for young hands and curious minds. The earthquake house (a simulated quake inside a furnished room) is thrilling for kids old enough to understand it's pretend, and the natural history galleries with giant whale skeletons and the colossal squid are a guaranteed hit.</li>
<li><strong>Wellington Cable Car:</strong> The five-minute ride up the hill is pure magic for small children — the city falling away below, the tunnel halfway up, and the views from the top. Ride up and walk down through the Botanic Garden, stopping at the duck pond and the playground near the Lady Norwood Rose Garden.</li>
<li><strong>Frank Kitts Park Playground:</strong> Right on the waterfront, this large playground has slides, climbing structures, and a miniature lighthouse. It's adjacent to the lagoon and close to Te Papa, making it a perfect mid-day break.</li>
<li><strong>Wellington Zoo:</strong> New Zealand's oldest zoo is home to kiwi, tuatara, red pandas, giraffes, and a range of native and exotic species. The zoo is compact enough for small legs, and the close encounter experiences (hand-feeding giraffes, meeting kiwi keepers) are excellent for young children.</li>
</ul>

<h3>Primary School Kids (Ages 6–12)</h3>
<p>This age group has the most fun in Wellington — old enough to engage with museums and nature walks, and endlessly fascinated by the cable car, Zealandia, and Weta Workshop.</p>
<ul>
<li><strong>Zealandia by Night:</strong> The guided night tour at Zealandia is one of Wellington's best family experiences. Walking through the dark forest with a guide, you'll see (and hear) little spotted kiwi, tuatara, glow-worms, and native owls. Children aged 6+ get the most out of it. Book well ahead — tours sell out, especially in summer.</li>
<li><strong>Weta Workshop Unleashed:</strong> Kids who love movies will be thrilled by the behind-the-scenes tour, where they can see actual props from Lord of the Rings, learn how movie miniatures are made, and watch demonstrations of prosthetic and armour-making techniques.</li>
<li><strong>Days Bay Ferry:</strong> Take the East by West ferry from Queens Wharf to Days Bay — a 30-minute harbour crossing that's an adventure in itself. At Days Bay, there's a safe swimming beach, a wharf for jumping off (check with locals first), a playground, and an excellent ice cream shop.</li>
<li><strong>Mount Victoria Walk:</strong> The walk through the pine forest on Mount Victoria is gentle enough for this age group and features the Lord of the Rings filming location where the hobbits hide from the Ringwraith. Kids love finding the exact spot.</li>
<li><strong>MOTAT — Mini Putt at Pataka:</strong> For a rainy-day option, many Wellington families head to Porirua for mini golf, bowling, or the Pataka museum's interactive exhibitions.</li>
</ul>

<h3>Teenagers (Ages 13+)</h3>
<p>Teenagers thrive in Wellington — the city's creative energy, street food scene, and adventure opportunities keep even the most screen-addicted teens engaged.</p>
<ul>
<li><strong>Cuba Street Exploration:</strong> Let teens loose on Cuba Street with a small budget and watch them discover vintage shops, record stores, bubble tea, and street art. The sense of independence in a safe, walkable city is a gift.</li>
<li><strong>Mountain Biking at Makara Peak:</strong> Wellington's network of mountain bike trails is excellent. Makara Peak, just west of the city centre, has trails ranging from beginner to expert, with shuttles and bike hire available.</li>
<li><strong>Rock Climbing at Fergs Kayaks:</strong> Located on the waterfront, Fergs has an indoor rock-climbing wall, kayak hire, and stand-up paddleboard hire — perfect for active teens.</li>
<li><strong>Wellington Night Market:</strong> The Friday and Saturday night markets offer affordable street food from dozens of cuisines, live music, and a buzzy atmosphere that teens love.</li>
<li><strong>Street Art Tour:</strong> Wellington's street art scene is vibrant and ever-changing. Self-guided tours using free online maps take teens through laneways and hidden corners of the city.</li>
</ul>

<h2>Family-Friendly Dining</h2>
<p>Wellington's dining scene is surprisingly family-friendly, even at higher-end restaurants:</p>
<ul>
<li><strong>Prefab:</strong> Spacious, with excellent cabinet food and a relaxed atmosphere. Kids can spread out without feeling cramped.</li>
<li><strong>The Botanist:</strong> In the Botanic Garden, with outdoor seating and a children's menu. Great for a post-cable-car lunch.</li>
<li><strong>Scorch-O-Rama:</strong> On the waterfront near Te Papa, serving pizza and burgers with harbour views. Casual and loud enough that kids won't disturb anyone.</li>
<li><strong>Chocolate Fish Cafe:</strong> On the road to the south coast, this beloved cafe has outdoor seating, stunning harbour views, and generous portions. A Wellington family institution.</li>
</ul>

<h2>Practical Tips for Families</h2>
<ul>
<li><strong>Stay in Te Aro or the waterfront:</strong> These central neighbourhoods put you within walking distance of Te Papa, the cable car, Cuba Street, and the ferry terminal.</li>
<li><strong>Use the bus:</strong> Wellington's Metlink bus network covers the entire city and is affordable. The Airport Flyer bus runs frequently between the airport and central city.</li>
<li><strong>Wind warning:</strong> Wellington is famously windy. Dress children in layers and bring windproof jackets. Pushchairs with rain covers are essential in winter.</li>
<li><strong>UV protection:</strong> New Zealand's UV levels are extreme. Apply SPF 50+ sunscreen even on cloudy days, and reapply after swimming.</li>
<li><strong>Book Zealandia night tours early:</strong> These sell out weeks in advance during summer holidays. Book as soon as your travel dates are confirmed.</li>
</ul>

<h2>How Many Days Do Families Need?</h2>
<ul>
<li><strong>2 days:</strong> Te Papa, cable car and Botanic Garden, Cuba Street, and one of either Zealandia or Weta Workshop</li>
<li><strong>3–4 days:</strong> Add Zealandia (day and/or night), Weta Workshop, Days Bay ferry, Mount Victoria, and the south coast</li>
<li><strong>5+ days:</strong> Include Wellington Zoo, day trips to Kapiti Island or Martinborough, mountain biking, and plenty of relaxation time at Oriental Bay</li>
</ul>
      `,
    },
    {
      slug: "day-trips-from-wellington",
      title:
        "Best Day Trips from Wellington: Martinborough, Kapiti Island & More",
      excerpt:
        "From boutique wineries in the Wairarapa to predator-free island sanctuaries, these day trips from Wellington showcase the best of the lower North Island.",
      date: "February 10, 2026",
      isoDate: "2026-02-10",
      category: "Travel Guide",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1504870712474-3df4f250cb68?w=800&q=80",
      content: `
<p>Wellington's compact size and central location make it the perfect base for exploring the lower North Island. Within an hour or two, you can be tasting world-class Pinot Noir in a sun-drenched village square, hiking through predator-free island forest, or cycling a historic rail trail through dramatic gorge scenery. These day trips reveal a side of the Wellington region that most visitors never see.</p>

<h2>Martinborough — Wine Village of the Wairarapa</h2>
<p><strong>Distance:</strong> 80 km / 1.5 hours via the Rimutaka Hill Road</p>
<p><strong>Why go:</strong> Martinborough is one of the most charming wine villages in New Zealand — a tiny town built around a central square, surrounded by over 20 boutique wineries within walking and cycling distance. The Wairarapa wine region is renowned for its Pinot Noir, which competes with the best in the country, and the intimate scale of the wineries means you'll often be tasted by the winemaker themselves.</p>

<h3>Must-Visit Wineries</h3>
<p><strong>Ata Rangi:</strong> One of New Zealand's most respected wineries, Ata Rangi's Pinot Noir is consistently rated among the finest in the country. The cellar door is welcoming, and tastings are conducted with genuine warmth and knowledge.</p>
<p><strong>Palliser Estate:</strong> A larger operation with a beautiful cellar door and excellent wines across the range — their Pinot Noir and Sauvignon Blanc are both outstanding. The terrace is perfect for a sunny afternoon tasting.</p>
<p><strong>Te Kairanga:</strong> Set in a lovely heritage cottage, Te Kairanga offers relaxed tastings of their estate wines. The Pinot Noir is elegant and well-priced, and the setting is quintessentially Martinborough.</p>
<p><strong>Schubert Wines:</strong> A smaller, boutique operation producing wines of exceptional quality. Winemaker Kai Schubert trained in Germany and brings a European sensibility to his Wairarapa Pinot Noir and Syrah.</p>

<h3>Beyond Wine</h3>
<p>Martinborough's village square is home to excellent restaurants and cafes. Poppies Martinborough offers fine dining in a cottage setting, while the Martinborough Hotel's heritage pub is perfect for a casual lunch. The town hosts the famous Toast Martinborough wine and food festival in November, attracting thousands of visitors for a day of tastings, music, and culinary events.</p>
<p><strong>Getting there:</strong> The drive over the Rimutaka Hill Road is scenic but winding — allow extra time and take it slowly. Alternatively, guided wine tours from Wellington include transport and tastings, so no one needs to be the designated driver.</p>

<h2>Kapiti Island Nature Reserve</h2>
<p><strong>Distance:</strong> 50 km to Paraparaumu Beach / 1 hour, then a 15-minute boat crossing</p>
<p><strong>Why go:</strong> Kapiti Island is one of New Zealand's most important nature reserves — a predator-free island sanctuary where native birds thrive in numbers unimaginable on the mainland. The island has been free of introduced predators since 1998, and the resulting bird populations are extraordinary: kokako, takahe, stitchbird, saddleback, and little spotted kiwi all live here in abundance.</p>
<p>Access is strictly limited to preserve the island's ecology. You must book a permit from the Department of Conservation (DOC) in advance, and visitor numbers are capped at around 50 per day. The boat crossing from Paraparaumu Beach takes about 15 minutes, and once on the island, you can hike trails ranging from gentle coastal walks to the challenging summit track (521m) that rewards with panoramic views of the Kapiti Coast and the South Island.</p>
<p><strong>Practical tips:</strong> Book your DOC permit well ahead (weeks or months in summer). Bring all food and water — there are no facilities on the island. Biosecurity is strict: all bags are inspected for pests before boarding. The experience is unforgettable — the sheer volume of birdsong is overwhelming.</p>

<h2>Rimutaka Rail Trail</h2>
<p><strong>Distance:</strong> Trailhead at Kaitoke / 50 km from Wellington</p>
<p><strong>Why go:</strong> The Rimutaka Rail Trail follows the route of a historic railway that operated from 1878 to 1955, crossing the Rimutaka Range between Wellington and the Wairarapa. The trail passes through a 576-metre summit tunnel, over historic trestle bridges, and through regenerating native bush — all on a gentle, well-maintained gravel path that's suitable for walking or cycling.</p>
<p>The full trail from Kaitoke to Cross Creek is about 18 km one way (allow 5–6 hours walking, 2–3 hours cycling). The highlight is the summit tunnel, which is pitch-black inside and requires a torch — an exciting experience for children. The Wairarapa side of the trail is more dramatic, with views over the wide Wairarapa valley.</p>
<p><strong>Tip:</strong> If cycling, arrange a shuttle from the Martinborough end back to your starting point, or do the trail as a one-way walk and combine it with a visit to Martinborough wineries on the other side.</p>

<h2>Kapiti Coast — Paraparaumu to Otaki</h2>
<p><strong>Distance:</strong> 50–75 km / 45 minutes to 1 hour north of Wellington</p>
<p><strong>Why go:</strong> The Kapiti Coast is Wellington's beachside escape — a string of seaside towns stretching north from Paekakariki to Otaki, backed by the forested Tararua Range and facing the long, low silhouette of Kapiti Island. The coast offers excellent beaches, coastal walks, boutique shopping, and a more relaxed pace of life.</p>
<ul>
<li><strong>Paekakariki:</strong> A bohemian village with a beautiful beach, a heritage steam train (Paekakariki Station), and the Queen Elizabeth Park coastal walk. The surf is good, and the sunsets over Kapiti Island are spectacular.</li>
<li><strong>Paraparaumu:</strong> The main town on the coast, with shopping, the Southward Car Museum (the largest collection of vintage vehicles in the Southern Hemisphere), and the departure point for Kapiti Island boat trips.</li>
<li><strong>Waikanae:</strong> Home to the Nga Manu Nature Reserve, a small but lovely native bird sanctuary with wetlands, bush walks, and a nocturnal kiwi house. A gentler alternative to Zealandia for families with young children.</li>
<li><strong>Otaki:</strong> Famous for its factory outlet shopping and Maori heritage. The Rangiatea Church (rebuilt after a fire) and Otaki Maori Racing Club reflect the strong Ngati Raukawa presence in the area.</li>
</ul>

<h2>Wairarapa Countryside</h2>
<p><strong>Distance:</strong> 80–120 km / 1.5–2 hours from Wellington</p>
<p><strong>Why go:</strong> Beyond Martinborough, the wider Wairarapa offers rolling farmland, small-town charm, and outdoor adventures. Greytown, New Zealand's first planned inland town, has a beautifully preserved Victorian main street lined with boutiques, cafes, and antique shops. Carterton offers craft studios and the annual Wairarapa Balloon Festival. Masterton, the regional centre, is home to the Tararua Forest Park — one of the best tramping destinations in the lower North Island.</p>
<p>The Wairarapa is also famous for its Dark Sky Reserve around Castlepoint — one of the best stargazing locations in the North Island, with minimal light pollution and expansive views of the Milky Way. Castlepoint itself is a dramatic coastal settlement with a lighthouse, rock formations, and a natural lagoon that's popular for swimming.</p>

<h2>Pukaha Mount Bruce National Wildlife Centre</h2>
<p><strong>Distance:</strong> 140 km / 2 hours north of Wellington</p>
<p><strong>Why go:</strong> Pukaha is one of New Zealand's most important captive breeding facilities for endangered native birds. The centre is home to kiwi, kokako, takahe, kaka, and Manukura — a rare white kiwi who became a national celebrity. The bush walks through the surrounding native forest are beautiful, and the eel feeding at 1:30pm daily is a surprisingly dramatic spectacle. It's a longer day trip but highly rewarding for nature lovers and families.</p>

<h2>Planning Tips for Day Trips</h2>
<ul>
<li><strong>Hire a car:</strong> While Wellington's central attractions are walkable, day trips require a car. Hire from the airport or central city — major rental companies all have Wellington locations.</li>
<li><strong>Rimutaka Hill Road:</strong> The road to the Wairarapa crosses the Rimutaka Range and can be windy and narrow. Drive carefully, especially in wet conditions. Allow extra time.</li>
<li><strong>Book Kapiti Island early:</strong> DOC permits are limited. In summer (December–February), book at least 2–4 weeks ahead.</li>
<li><strong>Combine Martinborough and the Rail Trail:</strong> Do the Rimutaka Rail Trail by bike in the morning, then head to Martinborough for wine tasting in the afternoon. Several operators offer combined packages.</li>
<li><strong>Check weather:</strong> The Wairarapa and Kapiti Coast often have better weather than Wellington itself. If Wellington is grey and windy, head over the hill — there's often blue sky on the other side of the Rimutakas.</li>
</ul>
      `,
    },
    {
      slug: "best-time-to-visit-wellington",
      title: "Best Time to Visit Wellington: A Seasonal Guide",
      excerpt:
        "Wind, weather, festivals, and the best months to visit — everything you need to know about timing your Wellington trip perfectly.",
      date: "January 28, 2026",
      isoDate: "2026-01-28",
      category: "Travel Guide",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?w=800&q=80",
      content: `
<p>Wellington's weather is famously unpredictable — a city where locals say "you can't beat Wellington on a good day" precisely because the bad days can be spectacularly wild. But with the right timing and the right expectations, every season in Wellington has something extraordinary to offer. Here's your complete guide to when to visit the coolest little capital.</p>

<h2>Wellington's Climate at a Glance</h2>
<p>Wellington sits at the southern tip of the North Island, directly in the path of the Roaring Forties — powerful westerly winds that circle the Southern Hemisphere. Cook Strait, the narrow channel between the North and South Islands, funnels these winds directly through the city, earning Wellington its reputation as the windiest city on Earth.</p>
<ul>
<li><strong>Average summer temperature (Dec–Feb):</strong> 16–20°C (high of 20–23°C on warm days)</li>
<li><strong>Average winter temperature (Jun–Aug):</strong> 6–12°C</li>
<li><strong>Average annual rainfall:</strong> 1,249 mm (spread fairly evenly throughout the year)</li>
<li><strong>Average wind speed:</strong> 26 km/h (the highest of any city in the world measured by sustained average)</li>
<li><strong>Sunshine hours:</strong> Around 2,000 per year (similar to London, less than Auckland)</li>
</ul>

<h2>Summer (December – February)</h2>
<p><strong>Temperature:</strong> 16–23°C | <strong>Daylight:</strong> Up to 16 hours | <strong>Crowds:</strong> Peak season</p>
<p>Summer is Wellington at its best. Long, warm days, minimal rain (usually), and an energy in the city that's impossible to resist. The waterfront comes alive with swimmers at Oriental Bay, kayakers in the harbour, and outdoor diners spilling onto every available pavement. This is the best time for outdoor activities — hiking Mount Victoria, walking the south coast to Red Rocks, and taking the ferry to Days Bay.</p>
<p>The wind doesn't disappear in summer — in fact, Wellington's windiest month is typically November — but warm wind is far more tolerable than cold wind. On calm summer days, the city is genuinely one of the most beautiful places in New Zealand.</p>

<h3>Summer Events</h3>
<ul>
<li><strong>New Year's Eve on the Waterfront:</strong> Wellington's NYE celebration features live music and fireworks over the harbour.</li>
<li><strong>Wellington Anniversary Day (January):</strong> A public holiday with various events and activities across the region.</li>
<li><strong>Summer Shakespeare in the Park:</strong> The Wellington Shakespeare Society performs free outdoor Shakespeare in the Botanic Garden every February — a beloved Wellington tradition.</li>
</ul>

<h3>Summer Tips</h3>
<ul>
<li>Book accommodation at least 4–6 weeks ahead for December–January — Wellington fills up during the summer holidays.</li>
<li>UV levels are extreme in New Zealand due to thin ozone. Apply SPF 50+ even on partly cloudy days.</li>
<li>The wind can appear from nowhere. Always carry a light jacket, even on a hot day.</li>
</ul>

<h2>Autumn (March – May)</h2>
<p><strong>Temperature:</strong> 10–18°C | <strong>Daylight:</strong> 10–13 hours | <strong>Crowds:</strong> Moderate</p>
<p>Autumn is arguably the best-kept secret for visiting Wellington. March and April often bring the most settled, calm weather of the year — warm enough for outdoor activities, with less wind than summer and fewer tourists. The surrounding hills turn golden and red, and the late-afternoon light over the harbour is magical.</p>
<p>This is also peak festival season. CubaDupa in March fills Cuba Street with music and performance, and the New Zealand International Comedy Festival brings top comedians to Wellington venues in April–May. The Wairarapa vineyards across the Rimutakas are harvesting in March–April, making it the perfect time for a Martinborough wine trip.</p>

<h3>Autumn Events</h3>
<ul>
<li><strong>CubaDupa (March):</strong> Wellington's biggest street festival — two days of free music, food, and performance on Cuba Street and surrounding streets.</li>
<li><strong>NZ International Comedy Festival (April–May):</strong> Stand-up, sketch, and improv comedy in venues across the city.</li>
<li><strong>Martinborough Harvest (March–April):</strong> The best time to visit Wairarapa wineries, when the vineyards are at their most active and beautiful.</li>
</ul>

<h3>Autumn Tips</h3>
<ul>
<li>March is often drier and calmer than February. For the best weather odds, aim for early-to-mid March.</li>
<li>Daylight saving ends in early April — evenings get dark earlier, so plan outdoor activities for the morning.</li>
<li>Accommodation prices drop after the summer peak, making autumn excellent value.</li>
</ul>

<h2>Winter (June – August)</h2>
<p><strong>Temperature:</strong> 6–12°C | <strong>Daylight:</strong> 9–10 hours | <strong>Crowds:</strong> Low season</p>
<p>Wellington in winter is cold, windy, and occasionally stormy — but it's also when the city's indoor attractions really shine. Te Papa, Zealandia (which is atmospheric in rain and mist), Weta Workshop, galleries, theatres, and the cafe and bar scene all come into their own when it's too wild to be outside. Accommodation is at its cheapest, and you'll have many attractions almost to yourself.</p>
<p>Winter is also when the big food and drink festivals happen. Wellington on a Plate and Beervana in August make it the single best month of the year for food and craft beer lovers.</p>

<h3>Winter Events</h3>
<ul>
<li><strong>NZ International Film Festival (July–August):</strong> One of the oldest film festivals in the Southern Hemisphere, screening the best of world cinema.</li>
<li><strong>Wellington on a Plate (August):</strong> The city's flagship food festival, featuring special restaurant menus, Burger Wellington, events, and tastings across the city.</li>
<li><strong>Beervana (August):</strong> New Zealand's premier craft beer festival, held over two days in Wellington with 80+ breweries represented.</li>
<li><strong>Matariki (June–July):</strong> The Maori New Year, celebrated with events, dawn ceremonies, and cultural performances across the city.</li>
</ul>

<h3>Winter Tips</h3>
<ul>
<li>Layer up. Wellington's winter isn't as cold as Queenstown, but the wind chill factor is brutal. A warm, windproof jacket is essential.</li>
<li>August is the best winter month to visit — Wellington on a Plate and Beervana alone are worth the trip.</li>
<li>Shorter days mean earlier sunsets, but the evening atmosphere in Wellington's bars and restaurants is cosy and inviting.</li>
</ul>

<h2>Spring (September – November)</h2>
<p><strong>Temperature:</strong> 10–17°C | <strong>Daylight:</strong> 11–15 hours | <strong>Crowds:</strong> Moderate, building</p>
<p>Spring in Wellington is unpredictable — you might get four seasons in a single day — but as the days lengthen and the Botanic Garden bursts into bloom, the city shakes off winter with visible enthusiasm. The World of Wearable Art Awards Show in September–October is one of Wellington's most spectacular events, and the energy of the city noticeably lifts as summer approaches.</p>
<p>Spring is also peak wind season. October and November are typically the windiest months in Wellington, which can be thrilling or challenging depending on your perspective. The upside is fewer tourists, reasonable accommodation prices, and a city in full bloom.</p>

<h3>Spring Events</h3>
<ul>
<li><strong>World of Wearable Art (September–October):</strong> A spectacular awards show combining wearable sculpture, fashion, and performance. One of Wellington's most internationally recognised events.</li>
<li><strong>Toast Martinborough (November):</strong> The Wairarapa's premier wine and food festival, attracting thousands of visitors for a day of tastings, music, and celebration in the vineyard village.</li>
<li><strong>Gardens Magic (October):</strong> The Wellington Botanic Garden is illuminated with light installations, creating a magical evening experience.</li>
</ul>

<h3>Spring Tips</h3>
<ul>
<li>Be prepared for anything. Spring weather in Wellington can change dramatically within hours. Carry layers, a rain jacket, and sunscreen — you may need all three in the same day.</li>
<li>Book WOW tickets well ahead — popular sessions sell out weeks in advance.</li>
<li>Spring is excellent for Zealandia visits — the native birds are nesting and particularly active.</li>
</ul>

<h2>The Verdict: When Should You Visit?</h2>
<p>The honest answer depends on what matters most to you:</p>
<ul>
<li><strong>Best weather:</strong> Late January–March (settled, warm, less wind)</li>
<li><strong>Best for food & drink:</strong> August (Wellington on a Plate + Beervana)</li>
<li><strong>Best for culture:</strong> September–October (WOW, Film Festival aftermath, gallery openings)</li>
<li><strong>Best value:</strong> June–August (lowest accommodation prices, fewer tourists)</li>
<li><strong>Best overall:</strong> March — settled autumn weather, CubaDupa festival, Martinborough harvest, fewer crowds than peak summer, and that incomparable golden late-afternoon light over the harbour</li>
</ul>
      `,
    },
  ],

  // ─── SEO ───
  seo: {
    titleTemplate: "%s | Explore Wellington",
    defaultTitle: "Explore Wellington — The Coolest Little Capital",
    defaultDescription:
      "Discover Wellington, New Zealand's creative capital. Explore Te Papa, ride the cable car, visit Zealandia, taste world-class coffee, and experience the film, food, and arts scene of the coolest little capital in the world.",
    keywords: [
      "Wellington New Zealand",
      "Wellington things to do",
      "Wellington travel guide",
      "Te Papa museum",
      "Wellington cable car",
      "Zealandia Wellington",
      "Wellington coffee",
      "Weta Workshop tour",
      "Wellington restaurants",
      "Cuba Street Wellington",
      "Wellington waterfront",
      "Martinborough wine",
      "Kapiti Island",
      "Wellington craft beer",
      "coolest little capital",
    ],
  },

  // ─── Chat Widget ───
  chatWidget: {
    org: "explorewellington",
    label: "Plan Your Trip",
    color: "#1e6bb8",
    defaultLocation: "Wellington, New Zealand",
  },

  // ─── Analytics seed data ───
  searchTerms: [
    "Wellington things to do",
    "Te Papa museum Wellington",
    "Wellington cable car",
    "Zealandia ecosanctuary",
    "Weta Workshop Wellington tour",
    "Wellington coffee guide",
    "Cuba Street restaurants",
    "Martinborough wine tour from Wellington",
    "Kapiti Island day trip",
    "Wellington waterfront walk",
  ],
};

export default wellington;
