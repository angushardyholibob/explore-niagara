import type { DestinationConfig } from "../types";

const config: DestinationConfig = {
  // ─── Identity ───
  slug: "niagara",
  name: "Niagara Falls",
  brandName: "Explore Niagara",
  domain: "explore-niagara.com",
  email: "info@exploreniagara.com",
  privacyEmail: "privacy@exploreniagara.com",

  // ─── Search ───
  searchTerm: "Niagara Falls",
  mapCenter: { lat: 43.0896, lng: -79.0849 },

  // ─── Hero ───
  hero: {
    imageUrl:
      "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=1920&q=80",
    heading:
      "Explore the best tours and attractions Niagara Falls has to offer",
    subheading:
      "From breathtaking boat rides to thrilling adventures \u2014 discover unforgettable experiences at one of the world\u2019s greatest natural wonders.",
    ctaText: "All Experiences",
  },

  // ─── About Section (Homepage) ───
  aboutSection: {
    imageUrl:
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80",
    heading: "Your Adventure Starts Here",
    paragraphs: [
      "At Explore Niagara, we believe every visit to Niagara Falls should be extraordinary. Our team of passionate local experts curates the very best tours, activities, and hidden gems so you can focus on making memories.",
      "Whether you\u2019re chasing the thrill of a jet boat ride, marveling at the falls from the deck of the Maid of the Mist, or savoring world-class wines in the Niagara region \u2014 we\u2019ve got you covered with hand-picked experiences and knowledgeable guides.",
    ],
  },

  // ─── About Page ───
  aboutPage: {
    heroGradient: "from-[#0a3d5c] via-[#0b6b96] to-primary",
    heading: "About Explore Niagara",
    subheading:
      "We\u2019re passionate locals on a mission to help every visitor experience the magic of Niagara Falls.",
    story: [
      "Founded by a team of Niagara Falls locals, Explore Niagara was born from a simple idea: make it effortless for visitors to discover and book the best experiences the region has to offer.",
      "We know these falls, trails, and vineyards inside and out. We\u2019ve personally vetted every operator, tested every tour, and hand-picked only the experiences that meet our high standards for quality, safety, and sheer wonder.",
      "Whether you\u2019re a first-time visitor or a returning local, our goal is to connect you with unforgettable moments \u2014 from the thundering mist of Horseshoe Falls to the quiet beauty of the Niagara wine trail.",
    ],
    values: [
      {
        icon: "Heart",
        title: "Passion for Niagara",
        description:
          "We live and breathe this region. Our recommendations come from real, personal experience.",
      },
      {
        icon: "Users",
        title: "People First",
        description:
          "Every traveler deserves a personalized, hassle-free experience from booking to adventure.",
      },
      {
        icon: "MapPin",
        title: "Local Expertise",
        description:
          "Our team of local guides and curators know the hidden gems most visitors never find.",
      },
      {
        icon: "ShieldCheck",
        title: "Trust & Safety",
        description:
          "Every operator is vetted, insured, and held to the highest standards of quality.",
      },
      {
        icon: "CalendarX2",
        title: "Flexibility",
        description:
          "Plans change. That\u2019s why most of our tours offer free cancellation up to 24 hours before.",
      },
      {
        icon: "Zap",
        title: "Instant Booking",
        description:
          "No waiting, no phone calls. Book online and get instant confirmation and e-tickets.",
      },
    ],
  },

  // ─── Collections ───
  collections: [
    {
      slug: "maid-of-the-mist",
      name: "Maid of the Mist",
      description:
        "Get up close to the thundering falls on this iconic boat tour.",
      searchTerm: "Maid of the Mist",
      icon: "Ship",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      slug: "cave-of-the-winds",
      name: "Cave of the Winds",
      description: "Feel the power of Niagara from the Hurricane Deck.",
      searchTerm: "Cave of the Winds",
      icon: "Mountain",
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      slug: "jet-boats",
      name: "Jet Boats",
      description:
        "An adrenaline-pumping ride through the Niagara Gorge rapids.",
      searchTerm: "Jet Boat Niagara",
      icon: "Waves",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      slug: "experience-niagara",
      name: "Experience Niagara",
      description:
        "Multi-attraction passes and all-in-one experiences.",
      searchTerm: "Niagara Falls experience",
      icon: "Compass",
      gradient: "from-violet-500 to-purple-400",
    },
  ],

  // ─── Guide Page ───
  guide: {
    heroImageUrl:
      "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=1920&q=80",
    title: "The Complete Guide to Niagara Falls",
    subtitle:
      "The most powerful waterfall in North America \u2014 straddling two nations, shaping two centuries of history, and still thundering on.",
    stats: [
      { num: "168K", label: "m\u00b3/min flow" },
      { num: "57m", label: "Horseshoe drop" },
      { num: "12,500", label: "years old" },
      { num: "30M+", label: "visitors/year" },
    ],
    facts: [
      {
        icon: "Droplets",
        title: "Massive Water Volume",
        text: "Over 168,000 cubic metres of water thunder over the crestline every single minute during peak hours \u2014 around 700,000 gallons per second.",
      },
      {
        icon: "Mountain",
        title: "Horseshoe Falls Dimensions",
        text: "The Canadian Horseshoe Falls drops an average of 57 metres (188 ft) and stretches approximately 790 metres (2,600 ft) wide \u2014 far larger than the American side.",
      },
      {
        icon: "Zap",
        title: "Hydroelectric Powerhouse",
        text: "Power plants on both sides produce nearly 4\u20135 million kilowatts of electricity \u2014 supplying over a quarter of all power used in New York State and Ontario.",
      },
      {
        icon: "Waves",
        title: "Erosion in Progress",
        text: "The falls erode roughly 30 cm (12 inches) per year \u2014 down from 90 cm historically thanks to engineering. At this rate, they\u2019ll reach Lake Erie in about 50,000 years.",
      },
      {
        icon: "Fish",
        title: "Fish Survive the Plunge",
        text: "Fish regularly go over Niagara Falls and almost all survive, thanks to their ability to flow naturally with the current. Some are briefly stunned but swim away.",
      },
      {
        icon: "TreePine",
        title: "The Green Colour",
        text: "That distinctive emerald-green hue comes from an estimated 60 tonnes of dissolved salts and extremely fine rock flour generated by the river\u2019s relentless erosion every minute.",
      },
      {
        icon: "Droplets",
        title: "Four Great Lakes Drain Here",
        text: "Water from Lakes Superior, Michigan, Huron, and Erie all drain through the Niagara River \u2014 representing nearly 1/5 of all Earth\u2019s fresh water.",
      },
      {
        icon: "Clock",
        title: "Night-Time Flow is Halved",
        text: "Under an international treaty, flow over the falls is reduced at night so more water can be diverted for hydroelectric generation \u2014 the spectacle is managed for both power and tourism.",
      },
      {
        icon: "Landmark",
        title: "America\u2019s Oldest State Park",
        text: "Niagara Falls State Park was established in 1885 and designed by Frederick Law Olmsted \u2014 the same landscape architect who designed Central Park in New York City.",
      },
    ],
    timeline: [
      {
        year: "~10,500 BC",
        title: "The Ice Age Gives Birth to Niagara",
        text: "As glaciers melted, vast quantities of meltwater carved through the Niagara Escarpment, creating the falls. Southern Ontario was covered in ice sheets 2\u20133 km thick.",
      },
      {
        year: "~10,000 BC",
        title: "First Humans Arrive",
        text: "The Paleo-Indian Clovis people were among the first inhabitants \u2014 nomadic hunters who witnessed the very birth of the falls, living on tundra and hunting caribou, mastodons, and elk.",
      },
      {
        year: "1615",
        title: "Etienne Brule \u2014 First European",
        text: "French explorer Etienne Brule is believed to have become the first European to see the falls. The Indigenous Iroquois name \u2014 Onguiaahra, meaning \u2018Thundering Waters\u2019 \u2014 appears on maps as early as 1641.",
      },
      {
        year: "1678",
        title: "Father Hennepin\u2019s Discovery",
        text: "Recollet priest Louis Hennepin visited in December 1678 and published the first engraving of the falls in 1697. He was so awestruck he estimated their height at 183 metres \u2014 more than three times actual.",
      },
      {
        year: "1812",
        title: "The War of 1812",
        text: "The Niagara River became a frontline. The region saw fierce battles, and artifacts are still found along the riverside. Niagara-on-the-Lake was taken by American forces and later burned.",
      },
      {
        year: "1825",
        title: "Tourism Begins in Earnest",
        text: "The completion of the Erie Canal made Niagara Falls easily accessible for the first time. Within 50 years, tourism had increased tenfold to become the area\u2019s dominant industry.",
      },
      {
        year: "1883",
        title: "America\u2019s First State Park",
        text: "The Niagara Reservation was created \u2014 the very first state park in the United States. An early triumph of the conservation movement against commercial exploitation of the falls.",
      },
      {
        year: "1896",
        title: "The Birth of Hydroelectric Power",
        text: "Nikola Tesla and George Westinghouse developed the world\u2019s first large-scale hydroelectric power plant here. In November 1896, AC electricity was transmitted for the first time to Buffalo, NY \u2014 changing the world.",
      },
      {
        year: "1969",
        title: "The Falls Are \u2018Turned Off\u2019",
        text: "The U.S. Army Corps of Engineers built a temporary dam, completely stopping flow over the American Falls for months. Engineers studied the riverbed. Two bodies were discovered in the dried-out falls.",
      },
      {
        year: "2012",
        title: "Nik Wallenda\u2019s Tightrope Walk",
        text: "Nik Wallenda became the first person to walk a tightrope directly over the thundering Niagara Falls from the US to Canada, drawing a global television audience of millions.",
      },
    ],
    daredevils: [
      {
        year: "1829",
        name: "Sam Patch \u2014 The Jersey Jumper",
        text: "Constructed a platform 85 feet above the Niagara River and jumped in. He survived, returned days later to jump from 130 feet \u2014 and survived again. He became one of America\u2019s first celebrities.",
      },
      {
        year: "1859",
        name: "Blondin \u2014 The Great Tightrope Walker",
        text: "Jean Francois Gravelet performed breathtaking tightrope walks across the Niagara Gorge during 1859\u20131860, thrilling tens of thousands. He even crossed blindfolded, on stilts, and pushing a wheelbarrow.",
      },
      {
        year: "1901",
        name: "Annie Edson Taylor \u2014 First Barrel Rider",
        text: "On her 63rd birthday, schoolteacher Annie became the first person to go over the falls in a barrel and survive. Days before, her cat was sent over to test it \u2014 the cat also survived.",
      },
      {
        year: "1911",
        name: "Bobby Leach \u2014 The Steel Barrel",
        text: "Survived in a crude steel barrel but spent six months in hospital with two broken kneecaps and a fractured jaw. Ironically, years later he died after slipping on an orange peel.",
      },
      {
        year: "2003",
        name: "Kirk Jones \u2014 No Device Needed",
        text: "Became the first person to survive going over Horseshoe Falls without any flotation device \u2014 he just swam over. Jones was fined $2,300 and banned for life from entering Canada.",
      },
      {
        year: "2012",
        name: "Nik Wallenda \u2014 The Wire Walk",
        text: "Seventh-generation member of the Flying Wallendas family walked a 550-metre tightrope directly over Horseshoe Falls from the US to Canada, watched live by millions worldwide.",
      },
    ],
    trivia: [
      {
        q: "It\u2019s NOT the world\u2019s tallest",
        text: "Around 500 waterfalls are taller. Venezuela\u2019s Angel Falls stands at 979 metres \u2014 nearly 17 times higher. But none match Niagara\u2019s combination of height and staggering volume.",
      },
      {
        q: "Marilyn Monroe filmed here",
        text: "The 1953 film Niagara starring Marilyn Monroe was filmed in Niagara Falls, Ontario \u2014 cementing the falls\u2019 romantic and cinematic mystique worldwide.",
      },
      {
        q: "P.T. Barnum wanted a circus here",
        text: "The legendary showman proposed turning Goat Island into a circus ground. The idea was rejected, preserving it for the public as part of Niagara Falls State Park.",
      },
      {
        q: "A golf ball was hit across it",
        text: "In 2019, pro golfer Maurice Allen became the first person to hit a golf ball across Horseshoe Falls \u2014 a shot of 393 yards through the mist, landing on Goat Island.",
      },
      {
        q: "It was \u2018turned off\u2019 in 1969",
        text: "The US Army Corps of Engineers literally stopped the water over the American Falls by building a temporary dam. Two bodies were found in the riverbed during the process.",
      },
      {
        q: "Black squirrels crossed the bridge",
        text: "According to local legend, there were no black squirrels on the US side until the first suspension bridge was built \u2014 the squirrels crossed over from Canada, and you can still spot them today.",
      },
      {
        q: "The Underground Railroad ran through here",
        text: "Niagara Falls was a crucial stop on the Underground Railroad. The historic Village of Lewiston was the last stop before freedom in Canada.",
      },
      {
        q: "It doesn\u2019t actually freeze",
        text: "The water flows too fast to freeze. However, in 1848 an upstream ice jam reduced the flow to a trickle for several hours \u2014 the only time in recorded history.",
      },
      {
        q: "1/5 of Earth\u2019s fresh water",
        text: "The water comes from four of the five Great Lakes, which together hold nearly one-fifth of all the fresh water on the entire planet.",
      },
    ],
    tips: [
      {
        icon: "Camera",
        title: "Canadian Side is Better",
        text: "The Canadian side offers the most dramatic views, especially of Horseshoe Falls. For the best vantage points, stay in Ontario.",
      },
      {
        icon: "Sun",
        title: "Visit at Night",
        text: "Every evening after dusk, the falls are illuminated in spectacular multi-coloured light. The illumination show is completely free to watch from the parkway.",
      },
      {
        icon: "Umbrella",
        title: "Go in June",
        text: "June offers the best balance of warm weather, fewer summer crowds, and boat tours operating at full schedule.",
      },
      {
        icon: "Wine",
        title: "Don\u2019t Skip Niagara-on-the-Lake",
        text: "Only 20 minutes away, it\u2019s one of Canada\u2019s most beautiful towns with nearly 100 wineries. Add a half-day \u2014 you won\u2019t regret it.",
      },
      {
        icon: "Droplets",
        title: "Bring a Poncho",
        text: "Both the boat cruise and Journey Behind the Falls will drench you. Ponchos are provided, but waterproof shoes are your responsibility!",
      },
      {
        icon: "MapPin",
        title: "Free Shuttle in Season",
        text: "The free \u2018Discover Niagara\u2019 shuttle runs May\u2013October, linking attractions and extending to Niagara-on-the-Lake. Avoid parking headaches.",
      },
      {
        icon: "Ticket",
        title: "Table Rock is Free",
        text: "You can view Horseshoe Falls for free from Table Rock Welcome Centre \u2014 no ticket required for the most dramatic ground-level view.",
      },
      {
        icon: "Snowflake",
        title: "Try Icewine",
        text: "The Niagara Peninsula is the world\u2019s leading Icewine producer. Try a tasting at any of the 100+ local wineries.",
      },
    ],
    power: {
      title: "The Falls That Power a Continent",
      subtitle:
        "Niagara Falls was the birthplace of modern electricity. Nikola Tesla\u2019s vision transformed not just the falls, but the entire world\u2019s relationship with power.",
      columns: [
        {
          icon: "Zap",
          title: "Power Generation",
          items: [
            "4\u20135 million kilowatts generated by both US & Canadian plants",
            "50\u201375% of Niagara River water is diverted for power generation",
            "1/4 of all power used in New York State and Ontario comes from Niagara",
            "1896: World\u2019s first large-scale AC electricity transmission to Buffalo, NY",
            "1950 Treaty regulates water diversion between US and Canada",
            "Flow is reduced at night under treaty to maximise generation",
          ],
        },
        {
          icon: "Mountain",
          title: "Geology",
          items: [
            "Formed 12,500 years ago when glaciers melted",
            "Originally located 11 km downstream at Queenston-Lewiston",
            "Horseshoe Falls erosion: ~30 cm/year (was 90 cm historically)",
            "Deepest section of Niagara River: 52 metres",
            "Water speed at crestline: up to 109 km/h (68 mph)",
            "Green colour = 60 tonnes/min dissolved salts & rock flour",
          ],
        },
      ],
    },
  },

  // ─── Blog Posts ───
  blogPosts: [
    {
      slug: "top-10-things-to-do-niagara-falls",
      title: "Top 10 Things to Do in Niagara Falls in 2026",
      excerpt:
        "Planning a trip to Niagara Falls? From the iconic Maid of the Mist to hidden wine trails, here are the must-do experiences for an unforgettable visit.",
      date: "March 15, 2026",
      isoDate: "2026-03-15",
      category: "Travel Guide",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800&q=80",
      content: `
<p>Niagara Falls draws over 12 million visitors a year — and for good reason. But with so much to see and do, it's easy to miss the best experiences if you don't plan ahead. Whether you're visiting for a day or a long weekend, here are the top 10 things you absolutely shouldn't miss.</p>

<h2>1. Maid of the Mist Boat Tour</h2>
<p>No trip to Niagara Falls is complete without the Maid of the Mist. This legendary boat tour has been operating since 1846, taking visitors right into the spray of Horseshoe Falls. You'll get a blue poncho (which you'll absolutely need) and sail past the American Falls and Bridal Veil Falls before reaching the thundering base of the Horseshoe Falls. The sheer power of the water is something photos simply can't capture.</p>
<p><strong>Tip:</strong> Book the first departure of the day to avoid the biggest crowds. The boat runs from late April through early November.</p>

<h2>2. Cave of the Winds</h2>
<p>If you want to feel the raw power of Niagara Falls up close, Cave of the Winds is the way to do it. Located on the American side, this experience takes you down 175 feet by elevator, then along wooden walkways to the Hurricane Deck — just 20 feet from the base of Bridal Veil Falls. You will get soaked. That's the point.</p>

<h2>3. Niagara Gorge Jet Boat Tour</h2>
<p>For adrenaline seekers, the jet boat tour through the Niagara Gorge is an absolute thrill. You'll blast through Class 5 whitewater rapids at speeds up to 55 mph, surrounded by the towering walls of the gorge. Choose the "Wet Jet" for full exposure or the "Jet Dome" for a drier (but still exciting) ride.</p>

<h2>4. Journey Behind the Falls</h2>
<p>On the Canadian side, Journey Behind the Falls takes you through tunnels carved into the rock behind Horseshoe Falls. You'll stand on an observation deck with 150,000 gallons of water per second thundering just feet in front of you. It's a perspective on the falls that most visitors miss.</p>

<h2>5. Niagara Wine Trail</h2>
<p>The Niagara region is home to over 100 wineries producing world-class wines — including the famous Canadian icewine. The Niagara-on-the-Lake wine route takes you through picturesque vineyards with tasting rooms, farm-to-table restaurants, and stunning lake views. Don't miss Inniskillin and Peller Estates.</p>

<h2>6. Whirlpool Aero Car</h2>
<p>This antique cable car, built in 1916, carries you 3,500 feet across the Niagara Whirlpool — a massive natural whirlpool formed by the river's sharp turn downstream from the falls. The views from above are spectacular, especially in autumn when the gorge explodes with color.</p>

<h2>7. Hornblower Niagara Cruises</h2>
<p>The Canadian counterpart to the Maid of the Mist, Hornblower Niagara Cruises offers a slightly different angle on the falls. Their catamaran-style vessels get remarkably close to Horseshoe Falls, and the evening "Falls Fireworks Cruise" on select summer nights is magical.</p>

<h2>8. Clifton Hill Entertainment District</h2>
<p>Known as the "Street of Fun," Clifton Hill is packed with attractions, restaurants, and entertainment. From the Niagara SkyWheel (a 175-foot Ferris wheel with incredible falls views) to haunted houses and wax museums, it's the perfect spot for families and anyone looking for some lighthearted fun after a day of sightseeing.</p>

<h2>9. Niagara Parks Butterfly Conservatory</h2>
<p>Home to over 2,000 tropical butterflies representing 45 species, this lush conservatory is a peaceful escape from the crowds. Walk through a tropical rainforest setting as butterflies land on your shoulders. It's especially great with kids.</p>

<h2>10. Illumination of the Falls</h2>
<p>Every evening, the falls are illuminated with a spectacular light show using LED technology that paints the cascading water in vibrant colors. The best viewing spots are Queen Victoria Park on the Canadian side or Prospect Point on the American side. During special events and holidays, fireworks are launched over the falls for an even more dramatic display.</p>

<h2>Planning Your Visit</h2>
<p>The best time to visit Niagara Falls is between June and August for warm weather and full access to all attractions. However, spring (May) and fall (September-October) offer smaller crowds and lower prices. Winter transforms the falls into an ice-covered wonderland — stunning to see, though many outdoor attractions close for the season.</p>
<p>Most of these experiences can be booked online with instant confirmation and free cancellation, so you can plan ahead without worry.</p>
    `,
    },
    {
      slug: "maid-of-the-mist-complete-guide",
      title: "The Complete Guide to Maid of the Mist (2026)",
      excerpt:
        "Everything you need to know about the Maid of the Mist — tickets, best times to go, what to wear, and how to make the most of your boat tour experience.",
      date: "March 8, 2026",
      isoDate: "2026-03-08",
      category: "Tours",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?w=800&q=80",
      content: `
<p>The Maid of the Mist is the most iconic experience at Niagara Falls, and for good reason. For nearly 180 years, this boat tour has given millions of visitors an up-close encounter with one of the world's most powerful waterfalls. Here's everything you need to know to plan your trip.</p>

<h2>What Is the Maid of the Mist?</h2>
<p>The Maid of the Mist is a boat tour that departs from the American side of Niagara Falls (Niagara Falls, New York). The 20-minute ride takes you past the American Falls and Bridal Veil Falls before heading directly into the horseshoe-shaped basin of the Canadian Horseshoe Falls, where you'll be surrounded by mist, spray, and the deafening roar of 750,000 gallons of water per second.</p>

<h2>Tickets & Pricing</h2>
<p>Tickets are available for purchase online or at the Observation Tower ticket office in Niagara Falls State Park. Booking online in advance is strongly recommended during peak season (June through August) as tours can sell out.</p>
<ul>
<li><strong>Adults:</strong> From $22.25 USD</li>
<li><strong>Children (6-12):</strong> From $13.00 USD</li>
<li><strong>Children under 6:</strong> Free</li>
</ul>
<p>Your ticket includes a biodegradable rain poncho and access to the Observation Tower elevator.</p>

<h2>Best Time to Visit</h2>
<p>The Maid of the Mist operates from late April through early November, weather permitting. For the best experience:</p>
<ul>
<li><strong>Early morning (first departure):</strong> Fewest crowds, beautiful morning light for photos</li>
<li><strong>Weekdays:</strong> Significantly less crowded than weekends</li>
<li><strong>Late afternoon:</strong> Chance to see rainbows in the mist as the sun angles west</li>
<li><strong>September-October:</strong> Gorgeous fall foliage along the gorge with smaller crowds</li>
</ul>

<h2>What to Wear & Bring</h2>
<p>You <em>will</em> get wet. The provided poncho helps, but expect your feet and lower legs to get soaked. Here's what we recommend:</p>
<ul>
<li>Waterproof shoes or sandals you don't mind getting wet</li>
<li>Quick-dry clothing underneath the poncho</li>
<li>A waterproof phone case or pouch (essential for photos)</li>
<li>Leave valuables in a locker at the Observation Tower</li>
</ul>

<h2>How to Get There</h2>
<p>The Maid of the Mist departs from the base of the Observation Tower in Niagara Falls State Park, New York. If you're coming from the Canadian side, you can walk across the Rainbow Bridge (bring your passport). Parking is available at the state park for $20/day.</p>

<h2>Accessibility</h2>
<p>The boat is wheelchair accessible, with elevator access from the Observation Tower to the dock. The crew is experienced at assisting visitors with mobility needs.</p>

<h2>Maid of the Mist vs. Hornblower (Canadian Side)</h2>
<p>Hornblower Niagara Cruises is the Canadian counterpart, departing from the Table Rock area. Both offer a similar experience, but the Maid of the Mist tends to get slightly closer to Horseshoe Falls due to its departure angle. Hornblower offers a larger catamaran and evening cruises during fireworks nights. If you're on the American side, Maid of the Mist is the obvious choice; if you're on the Canadian side, Hornblower is equally impressive.</p>
    `,
    },
    {
      slug: "niagara-falls-winter-guide",
      title: "Visiting Niagara Falls in Winter: What to Expect",
      excerpt:
        "The falls are magical year-round. Frozen mist, glowing ice formations, and zero crowds — here's why a winter visit should be on your bucket list.",
      date: "February 20, 2026",
      isoDate: "2026-02-20",
      category: "Seasonal",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80",
      content: `
<p>Most people visit Niagara Falls in summer, but the winter transforms this natural wonder into something truly otherworldly. Ice formations, frozen mist clouds, and dramatically fewer crowds make December through March a surprisingly rewarding time to visit.</p>

<h2>Do the Falls Freeze?</h2>
<p>The falls themselves never fully freeze — the volume of water is simply too massive. However, the mist and spray create stunning ice formations along the gorge walls, railings, trees, and rocks. In extremely cold years, an "ice bridge" forms across the base of the falls when massive ice chunks from Lake Erie jam together. The last time the flow was significantly reduced was during a rare ice jam in 1848.</p>

<h2>What's Open in Winter?</h2>
<p>While outdoor boat tours like the Maid of the Mist shut down for winter (typically November through April), there's still plenty to see and do:</p>
<ul>
<li><strong>Journey Behind the Falls:</strong> Open year-round on the Canadian side. The frozen spray inside the tunnels is extraordinary.</li>
<li><strong>Winter Festival of Lights:</strong> Running from mid-November through mid-January, this festival lights up the Niagara Parks with over 3 million lights and displays along an 8km route.</li>
<li><strong>Niagara Parks Power Station:</strong> This immersive indoor attraction is open year-round and features a stunning light show in the former Ontario Power generating station.</li>
<li><strong>Wine touring:</strong> The Niagara wine region is beautiful in winter, and January is icewine harvest season — a perfect time to visit tasting rooms.</li>
<li><strong>Indoor waterparks:</strong> Fallsview Indoor Waterpark and Great Wolf Lodge offer warm, family-friendly fun.</li>
</ul>

<h2>Winter Photography Tips</h2>
<p>Winter offers some of the most dramatic photography conditions at Niagara Falls:</p>
<ul>
<li>The mist creates ice-coated trees that look like crystal sculptures</li>
<li>Fewer people means cleaner compositions without crowds</li>
<li>Morning light hitting the ice creates spectacular rainbow effects</li>
<li>Bring a microfiber cloth — your lens will fog up constantly from the mist</li>
</ul>

<h2>What to Wear</h2>
<p>Temperatures regularly drop to -10\u00b0C to -20\u00b0C (14\u00b0F to -4\u00b0F), and wind chill near the falls makes it feel even colder. Dress in layers:</p>
<ul>
<li>Thermal base layer</li>
<li>Insulated mid-layer (fleece or down)</li>
<li>Waterproof outer shell (the mist still sprays in winter)</li>
<li>Waterproof boots with good traction (ice everywhere)</li>
<li>Hand warmers, a warm hat, and insulated gloves</li>
</ul>

<h2>Hotel Deals</h2>
<p>Winter is off-peak season, which means hotel prices drop significantly. Fallsview hotels that cost $300+ per night in July can often be found for $100-150 in January. It's some of the best value you'll find all year.</p>
    `,
    },
    {
      slug: "niagara-wine-trail-food-guide",
      title: "Niagara Wine Trail: A Food & Wine Lover's Guide",
      excerpt:
        "Discover world-class icewine, farm-to-table dining, and hidden vineyard gems along the Niagara wine trail.",
      date: "February 12, 2026",
      isoDate: "2026-02-12",
      category: "Food & Drink",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
      content: `
<p>Beyond the thundering falls, Niagara is home to one of Canada's premier wine regions. With over 100 wineries, award-winning restaurants, and the world's most celebrated icewine production, the Niagara Wine Trail offers an experience that rivals Napa Valley — at a fraction of the price.</p>

<h2>The Niagara Wine Region at a Glance</h2>
<p>The Niagara Peninsula benefits from a unique microclimate created by Lake Ontario and the Niagara Escarpment. This produces conditions ideal for growing cool-climate varietals like Riesling, Chardonnay, Pinot Noir, and Cabernet Franc. The region is divided into several sub-appellations, each with distinct terroir:</p>
<ul>
<li><strong>Niagara-on-the-Lake:</strong> The most famous area, home to big-name wineries like Inniskillin, Peller Estates, and Jackson-Triggs</li>
<li><strong>Beamsville Bench:</strong> Higher elevation vineyards producing excellent Chardonnay and Riesling</li>
<li><strong>Twenty Mile Bench:</strong> Known for rich reds and biodynamic farming</li>
<li><strong>Short Hills Bench:</strong> Warmer microclimate, great for Cabernet and Merlot</li>
</ul>

<h2>Must-Visit Wineries</h2>

<h3>Inniskillin</h3>
<p>The birthplace of Canadian icewine and arguably the most famous winery in the country. Their icewine tasting experience is a must — you'll learn about the painstaking harvest process (grapes must be picked at -8\u00b0C or colder) and taste several varieties. The estate itself is beautiful, set in a restored 1920s barn.</p>

<h3>Peller Estates</h3>
<p>A stunning property with one of the region's best restaurants. Their "10 Below" icewine lounge — kept at -10\u00b0C — lets you taste icewine in the conditions under which it's harvested. Worth the experience, even if you're not a wine enthusiast.</p>

<h3>Tawse Winery</h3>
<p>A smaller, biodynamic and organic winery that consistently wins "Canadian Winery of the Year." Their Chardonnay and Pinot Noir are world-class. The gravity-flow winery built into the Escarpment is architecturally stunning.</p>

<h3>Pearl Morissette</h3>
<p>For natural wine lovers, Pearl Morissette is a revelation. Minimal intervention wines, a acclaimed tasting menu restaurant, and a laid-back atmosphere that feels more Burgundy than Ontario. Reservations are essential.</p>

<h2>Farm-to-Table Dining</h2>
<p>The Niagara region's culinary scene has exploded in recent years:</p>
<ul>
<li><strong>Restaurant at Pearl Morissette:</strong> Multi-course tasting menus showcasing hyper-local ingredients</li>
<li><strong>Treadwell Farm-to-Table:</strong> A Niagara-on-the-Lake staple, with ingredients sourced from their own farm</li>
<li><strong>Backhouse:</strong> Located in a heritage building, offering creative dishes with Niagara produce</li>
<li><strong>The Good Earth Food & Wine Co.:</strong> Vineyard dining at its best, with panoramic views of the Escarpment</li>
</ul>

<h2>Icewine: What You Need to Know</h2>
<p>Niagara produces over 75% of the world's icewine. This intensely sweet dessert wine is made from grapes that freeze naturally on the vine, concentrating their sugars. A single bottle requires 3-5 times more grapes than regular wine, which is why it's expensive — but even a small tasting is an unforgettable experience.</p>
<p>The best time for icewine harvest is January, when temperatures consistently hit -8\u00b0C. Many wineries offer special icewine festival events during this period.</p>

<h2>Getting Around the Wine Trail</h2>
<p>The wineries are spread across a wide area, so driving yourself limits tasting. Better options include:</p>
<ul>
<li><strong>Guided wine tours:</strong> Several operators offer full-day tours with tastings at 4-5 wineries, lunch, and transportation</li>
<li><strong>Bike tours:</strong> The terrain is relatively flat, and several companies rent bikes with maps of winery routes</li>
<li><strong>Niagara Wine Bus:</strong> A hop-on, hop-off shuttle service connecting major wineries on weekends</li>
</ul>
    `,
    },
    {
      slug: "best-time-to-visit-niagara-falls",
      title: "Best Time to Visit Niagara Falls: Month-by-Month Guide",
      excerpt:
        "When should you visit Niagara Falls? We break down weather, crowds, prices, and what's open each month to help you pick the perfect time.",
      date: "January 28, 2026",
      isoDate: "2026-01-28",
      category: "Travel Guide",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80",
      content: `
<p>The "best" time to visit Niagara Falls depends entirely on what you're looking for. Peak summer means maximum access to attractions but massive crowds. Winter means frozen landscapes and hotel deals but limited outdoor tours. Here's a month-by-month breakdown to help you decide.</p>

<h2>Peak Season: June — August</h2>
<p><strong>Weather:</strong> 25-30\u00b0C (77-86\u00b0F), warm and humid. Occasional thunderstorms.</p>
<p><strong>Crowds:</strong> Very high. Expect long queues for major attractions, especially on weekends.</p>
<p><strong>What's open:</strong> Everything. All boat tours, outdoor attractions, and events are in full operation.</p>
<p><strong>Prices:</strong> Highest of the year. Book Fallsview hotels 2-3 months in advance.</p>
<p><strong>Best for:</strong> Families, first-time visitors who want the full experience.</p>

<h2>Shoulder Season: May, September — October</h2>
<p><strong>Weather:</strong> 15-22\u00b0C (59-72\u00b0F) in May and September. October can dip to 8-15\u00b0C (46-59\u00b0F).</p>
<p><strong>Crowds:</strong> Moderate. Weekdays are pleasant; weekends still get busy.</p>
<p><strong>What's open:</strong> Most attractions, including boat tours (Maid of the Mist typically runs late April to early November).</p>
<p><strong>Prices:</strong> 20-40% less than peak. Great value.</p>
<p><strong>Best for:</strong> The sweet spot. Good weather, manageable crowds, better prices. October adds stunning fall foliage along the gorge.</p>

<h2>Off Season: November — April</h2>
<p><strong>Weather:</strong> -5 to 5\u00b0C (23-41\u00b0F). January and February can drop to -15\u00b0C (5\u00b0F) with wind chill.</p>
<p><strong>Crowds:</strong> Very low. You'll practically have the viewing areas to yourself.</p>
<p><strong>What's open:</strong> Boat tours are closed. Journey Behind the Falls and indoor attractions remain open. The Winter Festival of Lights runs November-January.</p>
<p><strong>Prices:</strong> Lowest of the year. Hotels at 50-60% off peak rates.</p>
<p><strong>Best for:</strong> Budget travelers, photographers, couples looking for a romantic winter getaway.</p>

<h2>Our Recommendation</h2>
<p>For the best overall experience, visit in <strong>late May or September</strong>. You get warm enough weather for all outdoor attractions, significantly fewer crowds than the summer peak, and hotel prices that are much more reasonable. If you're flexible on dates, a mid-week visit during these months is the sweet spot.</p>

<h2>How Many Days Do You Need?</h2>
<ul>
<li><strong>1 day:</strong> Enough for the falls viewpoints, one boat tour, and Clifton Hill</li>
<li><strong>2 days:</strong> Add Cave of the Winds, Journey Behind the Falls, and an evening at the illuminated falls</li>
<li><strong>3-4 days:</strong> Include the wine trail, a jet boat tour, and explore Niagara-on-the-Lake</li>
<li><strong>5+ days:</strong> A relaxed pace with time for hiking the gorge, multiple winery visits, and day trips to Toronto (90 minutes away)</li>
</ul>
    `,
    },
    {
      slug: "niagara-falls-with-kids",
      title: "Niagara Falls with Kids: Family-Friendly Guide",
      excerpt:
        "Traveling to Niagara Falls with children? Here's how to plan a family trip that keeps everyone entertained — from toddlers to teenagers.",
      date: "January 15, 2026",
      isoDate: "2026-01-15",
      category: "Family Travel",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      content: `
<p>Niagara Falls is one of the best family destinations in North America. The falls themselves are endlessly fascinating for kids of all ages, and the surrounding area is packed with family-friendly attractions. Here's how to plan a trip that works for the whole family.</p>

<h2>Best Activities by Age</h2>

<h3>Toddlers & Preschoolers (Ages 2-5)</h3>
<ul>
<li><strong>Niagara Parks Butterfly Conservatory:</strong> Over 2,000 butterflies in a tropical greenhouse. Kids love having butterflies land on them.</li>
<li><strong>Falls viewpoints:</strong> The sheer size and sound of the falls is mesmerizing for little ones. Queen Victoria Park and Table Rock have great viewing areas with guardrails.</li>
<li><strong>Bird Kingdom:</strong> The world's largest free-flying indoor aviary, with parrots, toucans, and a walk-through bat cave that older toddlers love.</li>
<li><strong>Niagara SkyWheel:</strong> Enclosed, climate-controlled gondolas make this Ferris wheel safe for all ages, with stunning falls views.</li>
</ul>

<h3>School-Age Kids (Ages 6-12)</h3>
<ul>
<li><strong>Maid of the Mist:</strong> Kids 6+ love the boat ride. Children under 6 ride free, but the noise and spray can be overwhelming for very young children.</li>
<li><strong>Cave of the Winds:</strong> The Hurricane Deck is an absolute hit with this age group. They'll talk about it for months.</li>
<li><strong>Clifton Hill:</strong> Mini golf, go-karts, haunted houses, and arcades. Budget for a few hours here.</li>
<li><strong>Fallsview Indoor Waterpark:</strong> 3 acres of water slides, wave pools, and splash areas. Perfect for a rainy day or a break from sightseeing.</li>
</ul>

<h3>Teenagers (Ages 13+)</h3>
<ul>
<li><strong>Jet Boat Tour:</strong> The whitewater rapids are a huge adrenaline rush. Must be 6+ for the Wet Jet, 4+ for the Jet Dome.</li>
<li><strong>Zipline to the Falls:</strong> A 2,200-foot zipline from the top of the gorge toward the falls at 70 km/h.</li>
<li><strong>WildPlay Whirlpool Adventure Course:</strong> A high-ropes course and zipline over the Niagara Whirlpool.</li>
<li><strong>Evening illumination:</strong> Teens appreciate the light show more than younger kids, especially when combined with the Clifton Hill nightlife.</li>
</ul>

<h2>Practical Tips for Families</h2>
<ul>
<li><strong>Bring a stroller with rain cover:</strong> The mist from the falls can reach viewing areas, and you'll do a lot of walking.</li>
<li><strong>Pack layers:</strong> It's always cooler near the falls due to the mist, even on hot summer days.</li>
<li><strong>Buy attraction passes:</strong> Multi-attraction passes save 20-30% compared to individual tickets. The Niagara Falls Adventure Pass is excellent value.</li>
<li><strong>Stay on the Canadian side:</strong> More family-friendly hotels, restaurants, and attractions within walking distance of the falls.</li>
<li><strong>Don't forget passports:</strong> If you want to experience both sides of the falls, you'll need to cross an international border.</li>
</ul>

<h2>Where to Stay with Kids</h2>
<p>For families, we recommend staying on the Canadian side within walking distance of the falls. The Fallsview district has hotels at every price point, many with falls-view rooms that kids love waking up to. Great Wolf Lodge is another excellent option for families — it's a resort with an indoor waterpark included in your room rate.</p>
    `,
    },
  ],

  // ─── SEO ───
  seo: {
    titleTemplate: "%s | Explore Niagara",
    defaultTitle:
      "Explore Niagara | Best Tours & Attractions in Niagara Falls",
    defaultDescription:
      "Explore the best tours and attractions Niagara Falls has to offer. Book Maid of the Mist, Cave of the Winds, Jet Boats and more.",
    keywords: [
      "Niagara Falls tours",
      "Niagara Falls attractions",
      "Maid of the Mist",
      "Cave of the Winds",
      "Niagara Falls experiences",
      "things to do in Niagara Falls",
      "Niagara Falls tickets",
      "Niagara Falls booking",
    ],
  },

  // ─── Chat Widget ───
  chatWidget: {
    org: "exploreniagara",
    label: "Plan Your Trip",
    color: "#1e6bb8",
    defaultLocation: "Niagara Falls, Ontario",
  },

  // ─── Analytics seed data ───
  searchTerms: [
    "niagara falls tours",
    "maid of the mist tickets",
    "things to do niagara falls",
    "cave of the winds",
    "niagara falls boat tour",
    "niagara wine trail",
    "niagara falls winter",
    "niagara falls with kids",
    "jet boat niagara",
    "niagara falls attractions",
  ],
};

export default config;
