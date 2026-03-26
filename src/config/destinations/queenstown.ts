import type { DestinationConfig } from "../types";

const queenstown: DestinationConfig = {
  // ─── Identity ───
  slug: "queenstown",
  name: "Queenstown",
  brandName: "Explore Queenstown",
  domain: "explore-queenstown.com",
  email: "info@explorequeenstown.com",
  privacyEmail: "privacy@explorequeenstown.com",

  // ─── Search ───
  searchTerm: "Queenstown",
  mapCenter: { lat: -45.0312, lng: 168.6626 },

  // ─── Hero ───
  hero: {
    imageUrl:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80",
    heading: "Queenstown — The Adventure Capital of the World",
    subheading:
      "Nestled on the shores of Lake Wakatipu beneath the jagged peaks of The Remarkables, Queenstown is where breathtaking alpine scenery meets world-class adventure.",
    ctaText: "Explore Experiences",
    stats: [
      { num: "220+", label: "activities" },
      { num: "1,810m", label: "Remarkables peak" },
      { num: "175m", label: "deepest lake" },
      { num: "3M+", label: "visitors/year" },
    ],
  },

  // ─── About Section (Homepage) ───
  aboutSection: {
    imageUrl:
      "https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80",
    heading: "Where Mountains Meet Adventure",
    paragraphs: [
      "Queenstown sits on the shores of the crystal-clear Lake Wakatipu, surrounded by dramatic mountain ranges including The Remarkables and Cecil Peak. Originally a gold-rush settlement in the 1860s, this small town has transformed into one of the world's premier adventure tourism destinations.",
      "From the world's first commercial bungee jump at the Kawarau Bridge to jet boating through narrow canyons, Queenstown pioneered modern adventure tourism. Today it offers everything from skydiving and paragliding to world-class wineries, Lord of the Rings film locations, and some of the most stunning hiking trails on Earth.",
    ],
  },

  // ─── About Page ───
  aboutPage: {
    heroGradient: "from-blue-900 via-indigo-900 to-slate-900",
    heading: "About Explore Queenstown",
    subheading:
      "Your gateway to the adventure capital of the world — curating the best experiences in one of New Zealand's most spectacular destinations.",
    story: [
      "Explore Queenstown was born from a love of the southern lakes region and a desire to help visitors discover the very best this remarkable destination has to offer. From the adrenaline-pumping adventures that made Queenstown famous to the quieter pleasures of wine trails, alpine walks, and Maori cultural experiences — we believe every visitor deserves an unforgettable journey.",
      "We partner with local operators who share our commitment to safety, sustainability, and authentic experiences. Every tour, activity, and experience on our platform has been vetted to ensure it meets the highest standards — because when you're 134 metres above a river on a bungee cord, trust matters.",
      "Queenstown and the wider Otago region face unique environmental challenges, from protecting native bush and birdlife to managing the impact of tourism on fragile alpine ecosystems. We're committed to promoting operators who prioritise conservation and give back to the communities that make this place so special.",
    ],
    values: [
      {
        icon: "Mountain",
        title: "Adventure First",
        description:
          "Queenstown is the adventure capital of the world. We champion bold, unforgettable experiences that push boundaries while maintaining the highest safety standards.",
      },
      {
        icon: "TreePine",
        title: "Environmental Stewardship",
        description:
          "New Zealand's pristine landscapes are our greatest asset. We promote sustainable tourism and partner with operators committed to protecting native ecosystems.",
      },
      {
        icon: "Users",
        title: "Community Connection",
        description:
          "We work with locally owned businesses and Maori cultural operators to ensure tourism benefits the communities that call this region home.",
      },
      {
        icon: "Shield",
        title: "Safety & Trust",
        description:
          "Every experience on our platform meets rigorous safety standards. We only feature operators with current certifications and proven track records.",
      },
      {
        icon: "Heart",
        title: "Authentic Experiences",
        description:
          "From Maori heritage tours to backcountry heli-hikes, we curate experiences that reveal the real character of the southern lakes region.",
      },
      {
        icon: "Globe",
        title: "Accessible Adventure",
        description:
          "Whether you're a solo thrill-seeker or a family with young children, we help every visitor find their perfect Queenstown experience.",
      },
    ],
  },

  // ─── Collections ───
  collections: [
    {
      slug: "bungee-skydiving",
      name: "Bungee & Skydiving",
      description:
        "Take the ultimate leap of faith — from the world-famous Kawarau Bridge bungee to tandem skydives with panoramic views of The Remarkables and Lake Wakatipu.",
      searchTerm: "Queenstown bungee skydiving",
      icon: "Zap",
      gradient: "from-red-500 to-orange-500",
    },
    {
      slug: "jet-boats-rafting",
      name: "Jet Boats & Rafting",
      description:
        "Blast through narrow canyons at breathtaking speeds on a Shotover Jet or tackle the Kawarau River rapids on an exhilarating whitewater rafting adventure.",
      searchTerm: "Queenstown jet boat rafting",
      icon: "Waves",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      slug: "wine-food-tours",
      name: "Wine & Food Tours",
      description:
        "Discover the Central Otago wine region — home to the world's southernmost vineyards and award-winning Pinot Noir — paired with gourmet local cuisine.",
      searchTerm: "Queenstown wine food tour",
      icon: "Wine",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      slug: "film-locations",
      name: "Lord of the Rings & Film Locations",
      description:
        "Walk in the footsteps of hobbits and explore the stunning landscapes that brought Middle-earth to life, from Glenorchy to the Remarkables.",
      searchTerm: "Queenstown Lord of the Rings tour",
      icon: "Clapperboard",
      gradient: "from-emerald-500 to-teal-500",
    },
  ],

  // ─── Guide Page ───
  guide: {
    heroImageUrl:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80",
    title: "The Complete Guide to Queenstown (2026)",
    subtitle:
      "The adventure capital of the world — where alpine grandeur, Maori heritage, and adrenaline-fuelled thrills collide on the shores of Lake Wakatipu.",
    stats: [
      { num: "220+", label: "activities" },
      { num: "1,810m", label: "Remarkables peak" },
      { num: "175m", label: "lake depth" },
      { num: "3M+", label: "visitors/year" },
    ],
    facts: [
      {
        icon: "Mountain",
        title: "The Adventure Capital of the World",
        text: "Queenstown has earned this title through decades of innovation in adventure tourism, offering over 220 different activities — more per capita than almost anywhere on Earth.",
      },
      {
        icon: "Waves",
        title: "Lake Wakatipu's Mysterious Rise and Fall",
        text: "Lake Wakatipu rises and falls approximately 12 centimetres every five minutes due to a seiche effect caused by atmospheric pressure changes. Maori legend attributes this to the heartbeat of a sleeping giant, Matau.",
      },
      {
        icon: "Mountain",
        title: "The Remarkables Mountain Range",
        text: "The Remarkables earned their name because they are one of only two mountain ranges in the world that run directly north to south. Their jagged peaks rise to 2,324 metres at Double Cone.",
      },
      {
        icon: "Users",
        title: "A Tiny Town with a Big Reputation",
        text: "Queenstown's permanent population is only around 16,000 — yet it welcomes over 3 million visitors annually, making it one of the most tourism-dependent towns in the world.",
      },
      {
        icon: "Compass",
        title: "Maori Heritage Runs Deep",
        text: "The Maori name for the Queenstown area is Tahuna, meaning 'shallow bay.' Ngai Tahu, the principal South Island iwi, have inhabited the region for over 800 years, using it as a seasonal food-gathering site.",
      },
      {
        icon: "Zap",
        title: "Birthplace of Commercial Bungee Jumping",
        text: "On 12 November 1988, AJ Hackett and Henry van Asch launched the world's first permanent commercial bungee jump from the Kawarau Bridge — a 43-metre leap that spawned a global industry.",
      },
      {
        icon: "Thermometer",
        title: "Four Seasons in One Day",
        text: "Queenstown's alpine climate is famously unpredictable. Temperatures can swing 15°C in a single day, and locals joke that you can experience all four seasons between breakfast and dinner.",
      },
      {
        icon: "TreePine",
        title: "Ancient Beech Forests",
        text: "The surrounding mountains are covered in ancient native beech forests, some trees over 800 years old. These forests are home to native birds including kea — the world's only alpine parrot.",
      },
      {
        icon: "Gem",
        title: "Gold Rush Origins",
        text: "Queenstown was founded during the Otago Gold Rush after two shearers, William Rees and Nicholas von Tunzelmann, discovered gold on the Shotover River in 1862. At its peak, the Shotover was called 'the richest river in the world.'",
      },
    ],
    timeline: [
      {
        year: "~1100 AD",
        title: "Maori Arrive in the Region",
        text: "Early Polynesian settlers reach the southern lakes region, establishing seasonal camps for moa hunting and collecting pounamu (greenstone). The area becomes an important food-gathering route for Ngai Tahu.",
      },
      {
        year: "1853",
        title: "Nathaniel Chalmers — First European",
        text: "Scottish farmer Nathaniel Chalmers becomes the first European to visit the Queenstown area, guided by Maori chief Reko. He later described the scenery as 'fit for a queen.'",
      },
      {
        year: "1862",
        title: "The Otago Gold Rush Begins",
        text: "William Rees and Nicholas von Tunzelmann discover gold on the banks of the Shotover River. Within months, thousands of miners flood the region. The Shotover is declared 'the richest river in the world.'",
      },
      {
        year: "1863",
        title: "Queenstown Is Founded",
        text: "The settlement is officially proclaimed and named Queenstown — reputedly because the area was 'fit for Queen Victoria.' The gold-rush town booms with hotels, stores, and a population of over 6,000.",
      },
      {
        year: "1912",
        title: "TSS Earnslaw Launches",
        text: "The iconic coal-fired steamship TSS Earnslaw is launched on Lake Wakatipu. Still operating today, she is one of the oldest surviving commercial coal-fired steamships in the world.",
      },
      {
        year: "1960s",
        title: "Jet Boat Thrills Begin",
        text: "Bill Hamilton's jet boat invention finds its perfect home on Queenstown's rivers. Commercial jet boat tours launch on the Shotover and Dart Rivers, pioneering what would become a global adventure tourism industry.",
      },
      {
        year: "1988",
        title: "The World's First Commercial Bungee Jump",
        text: "On 12 November, AJ Hackett leaps 43 metres from the Kawarau Bridge in the world's first permanent commercial bungee operation. Over 4 million people have jumped since, and the company now operates worldwide.",
      },
      {
        year: "1999–2001",
        title: "Lord of the Rings Filming",
        text: "Peter Jackson films The Lord of the Rings trilogy across dozens of locations around Queenstown and nearby Glenorchy. The films put New Zealand on the global tourism map and generated an estimated $200 million in tourism revenue.",
      },
      {
        year: "2003",
        title: "Ski Season Expansion",
        text: "Major investment in Coronet Peak and The Remarkables ski areas transforms Queenstown into a premier winter sports destination, extending the tourism season year-round.",
      },
      {
        year: "2020s",
        title: "Sustainable Tourism Push",
        text: "Queenstown embraces regenerative tourism with new conservation initiatives, electric vehicle adoption, and Maori cultural tourism programmes, aiming to protect the landscapes that define the region.",
      },
    ],
    daredevils: [
      {
        year: "1988",
        name: "AJ Hackett — The Father of Bungee",
        text: "New Zealander AJ Hackett didn't invent bungee jumping — Vanuatu land divers did that centuries ago — but he commercialised it. After illegally jumping off the Eiffel Tower in 1987, he opened the Kawarau Bridge bungee in 1988. Over 4 million people have since taken the leap.",
      },
      {
        year: "1960s",
        name: "Bill Hamilton — Jet Boat Pioneer",
        text: "Canterbury farmer and engineer Bill Hamilton invented the modern jet boat in the 1950s, enabling navigation of New Zealand's shallow, braided rivers. His invention launched commercial jet boating on Queenstown's Shotover and Dart rivers, creating an entirely new adventure tourism category.",
      },
      {
        year: "1990s",
        name: "Henry van Asch — Bungee Co-Founder",
        text: "Henry van Asch co-founded AJ Hackett Bungy with his childhood friend. While Hackett was the daredevil face, van Asch was the engineering mind, developing the safety systems that made commercial bungee possible and building the operation into a global brand.",
      },
      {
        year: "1994",
        name: "The Nevis Highwire — Pushing the Limit",
        text: "AJ Hackett Bungy opened the Nevis Bungy, a terrifying 134-metre free-fall from a purpose-built pod suspended over the Nevis River gorge. It was the highest bungee in Australasia and remains one of the most extreme bungee experiences anywhere on Earth.",
      },
      {
        year: "2004",
        name: "The Shotover Canyon Swing Pioneers",
        text: "Local entrepreneurs launched the Shotover Canyon Swing, combining a 60-metre free-fall with a 200-metre arc through the Shotover Canyon. With dozens of jump styles — backwards, upside down, in a chair — it pushed the boundaries of what adventure tourism could be.",
      },
      {
        year: "2010s",
        name: "Modern Adventure Innovators",
        text: "A new generation of Queenstown operators pushed limits further: the Nevis Catapult (launched forward rather than falling), canyon via ferrata routes, heli-mountain-biking, and night-time bungee. Queenstown continues to invent new ways to terrify willing participants.",
      },
    ],
    power: {
      title: "What Makes Queenstown Extraordinary",
      subtitle:
        "The forces of nature and human daring combine to create the world's premier adventure destination.",
      columns: [
        {
          icon: "Zap",
          title: "Adventure & Extreme Sports",
          items: [
            "Over 220 bookable activities — more per capita than any town in New Zealand",
            "World's first commercial bungee jump (Kawarau Bridge, 43m)",
            "Nevis Bungy at 134m is one of the highest commercial bungee jumps on Earth",
            "Shotover Jet — 85 km/h through narrow canyons with just centimetres to spare",
            "Tandem skydiving from 4,572m (15,000 ft) with views of Milford Sound on clear days",
            "Over 30 skydive, bungee, swing, and zip-line operations in the region",
          ],
        },
        {
          icon: "TreePine",
          title: "Natural Environment & Conservation",
          items: [
            "Lake Wakatipu is 80km long, 5km wide, and up to 380m deep — the third-largest lake in NZ",
            "The Remarkables range rises to 2,324m at Double Cone, with glacial valleys and tarns",
            "Home to kea — the world's only alpine parrot — classified as nationally endangered",
            "Ancient native beech and podocarp forests date back over 80 million years",
            "The region sits within the Te Wahipounamu UNESCO World Heritage area",
            "DOC (Dept. of Conservation) manages over 30 walking tracks within 45 minutes of town",
          ],
        },
      ],
    },
    trivia: [
      {
        q: "Lake Wakatipu has a 'heartbeat'",
        text: "The lake level rises and falls about 12cm every 5 minutes due to a standing wave (seiche). Maori legend says it's the heartbeat of the giant Matau, who was set on fire and fell into the lake.",
      },
      {
        q: "The Shotover was the world's richest river",
        text: "During the 1860s gold rush, so much gold was found in the Shotover River that miners could reportedly pan several ounces a day. Chinese miners later recovered gold the original miners missed.",
      },
      {
        q: "Middle-earth was mostly filmed here",
        text: "Over 150 Lord of the Rings and Hobbit filming locations are within a two-hour drive of Queenstown. Glenorchy doubled as Isengard, Lothlorien, and Amon Hen.",
      },
      {
        q: "The TSS Earnslaw still burns coal",
        text: "Built in 1912, the TSS Earnslaw is one of the last coal-fired steamships in commercial service anywhere in the world. She burns about a tonne of coal per return trip across Lake Wakatipu.",
      },
      {
        q: "Queenstown has more restaurants per capita than almost anywhere",
        text: "With a population of only 16,000, Queenstown has over 150 restaurants, cafes, and bars — giving it one of the highest restaurant-to-resident ratios in the Southern Hemisphere.",
      },
      {
        q: "There's a world-class wine region 20 minutes away",
        text: "Central Otago is the world's southernmost wine region and produces some of the finest Pinot Noir on Earth. The Gibbston Valley sub-region is nicknamed 'the Valley of the Vines.'",
      },
      {
        q: "Kea will steal your car parts",
        text: "The native kea parrot, found in Queenstown's mountains, is notorious for pulling rubber seals off cars, stealing windscreen wipers, and unzipping backpacks. They're highly intelligent — and highly destructive.",
      },
      {
        q: "You can ski in the morning and wine-taste in the afternoon",
        text: "Coronet Peak and The Remarkables ski fields are both within 25 minutes of central Queenstown, and the Gibbston Valley wineries are just 20 minutes away — making it possible to hit the slopes and sip Pinot Noir in the same day.",
      },
      {
        q: "Queenstown almost didn't survive the gold bust",
        text: "When the gold ran out in the 1870s, Queenstown nearly became a ghost town. Sheep farming kept it alive for a century until tourism and skiing revived it in the 1970s and 1980s.",
      },
    ],
    tips: [
      {
        icon: "Camera",
        title: "Bob's Peak at Sunset",
        text: "Take the Skyline Gondola to Bob's Peak for the most iconic view of Queenstown. Arrive 30 minutes before sunset for golden light over the lake and mountains — it's the most photographed viewpoint in the region.",
      },
      {
        icon: "Sun",
        title: "Book Adventure Activities Early",
        text: "Peak season (December–February) sells out fast. Book bungee, skydiving, and jet boats at least 2 weeks ahead. Many operators offer free cancellation, so lock in your spot.",
      },
      {
        icon: "Umbrella",
        title: "Layer Up — Weather Changes Fast",
        text: "Queenstown's mountain weather is notoriously fickle. Carry a waterproof layer even on sunny days. Temperatures can drop 10°C in an hour, especially near the lake or at altitude.",
      },
      {
        icon: "Wine",
        title: "Don't Skip Gibbston Valley",
        text: "The Central Otago wine region is just 20 minutes from town. Take a wine tour to Gibbston Valley, Chard Farm, and Peregrine — the Pinot Noir rivals the best from Burgundy.",
      },
      {
        icon: "MapPin",
        title: "Visit Glenorchy for Serenity",
        text: "The 45-minute drive from Queenstown to Glenorchy along Lake Wakatipu is one of the most scenic roads in New Zealand. Go for hiking, kayaking, or Lord of the Rings locations without the crowds.",
      },
      {
        icon: "Ticket",
        title: "Combo Passes Save Big",
        text: "Most operators offer combo deals — bungee + swing, jet boat + rafting, or multi-day adventure passes. Buying combos can save 20–30% versus individual bookings.",
      },
      {
        icon: "Snowflake",
        title: "Winter is Underrated",
        text: "June–August brings skiing at Coronet Peak and The Remarkables, plus the famous Queenstown Winter Festival. Accommodation is cheaper than summer, and the snow-capped scenery is breathtaking.",
      },
      {
        icon: "Utensils",
        title: "Eat at Fergburger (But Time It Right)",
        text: "Queenstown's legendary Fergburger has lines around the block at peak times. Go before 11:30am or after 2pm to avoid the worst queues. It's worth the hype — the burgers are enormous.",
      },
    ],
  },

  // ─── Blog Posts ───
  blogPosts: [
    {
      slug: "top-10-things-to-do-in-queenstown",
      title: "Top 10 Things to Do in Queenstown in 2026",
      excerpt:
        "From bungee jumping off the Kawarau Bridge to wine tasting in Gibbston Valley, here are the must-do experiences for an unforgettable Queenstown trip.",
      date: "March 15, 2026",
      isoDate: "2026-03-15",
      category: "Travel Guide",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
      content: `
<p>Queenstown packs more adventure, scenery, and pure adrenaline into a small lakeside town than most countries manage across an entire continent. Whether you're here for a weekend or a full week, these ten experiences capture the very best of the adventure capital of the world.</p>

<h2>1. Bungee Jump at the Kawarau Bridge</h2>
<p>This is where it all began. On 12 November 1988, AJ Hackett launched the world's first permanent commercial bungee operation from this 43-metre-high historic bridge over the turquoise Kawarau River. The original bungee site remains the most popular in the world, with over 4 million jumps completed. You'll free-fall for about 4 seconds before the cord catches, and you can choose to be dunked in the river below or bounce back up. Even if you don't jump, the viewing platform and free Bungee Centre museum are worth the visit.</p>
<p><strong>Tip:</strong> Book the first session of the day for the shortest queues and the best light for photos and video.</p>

<h2>2. Ride the Shotover Jet</h2>
<p>Hold on tight as you blast through the narrow Shotover River canyons at up to 85 km/h, skimming past rocky walls with just centimetres to spare. The Shotover Jet has been operating since 1965 and has carried over 3 million passengers. The jet boat spins 360 degrees at full speed, and the combination of adrenaline and stunning canyon scenery is unforgettable. The 25-minute ride departs from the Shotover Canyon floor, accessible by a steep road that's an adventure in itself.</p>

<h2>3. Take the Skyline Gondola to Bob's Peak</h2>
<p>The Skyline Gondola carries you 450 metres above Queenstown to Bob's Peak, where panoramic views of Lake Wakatipu, The Remarkables, Cecil Peak, and Walter Peak stretch out before you. At the top, choose from the Stratosfare Restaurant (book ahead for the buffet), the Luge (a gravity-fuelled cart ride down the mountain with three tracks of increasing difficulty), stargazing tours, or mountain biking trails. The view at sunset is genuinely one of the most beautiful in New Zealand.</p>

<h2>4. Wine Tasting in Gibbston Valley</h2>
<p>Just 25 minutes from central Queenstown, the Gibbston Valley is the heart of Central Otago wine country — the world's southernmost wine region. The microclimate here produces exceptional Pinot Noir that rivals the best from Burgundy. Visit Gibbston Valley Winery (with its impressive cave cellar), Chard Farm (perched above the Kawarau Gorge), and Peregrine (with its stunning wing-shaped building). Most wineries offer tastings from $10–15 NZD, and guided wine tours with transport run daily from Queenstown.</p>

<h2>5. Cruise on the TSS Earnslaw</h2>
<p>Built in 1912, the TSS Earnslaw is one of the last coal-fired steamships in commercial service anywhere in the world. This grand old lady of the lake cruises across Lake Wakatipu to Walter Peak High Country Farm, where you can watch sheep-shearing demonstrations, stroll through beautiful heritage gardens, and enjoy a gourmet barbecue lunch with lake and mountain views. The 90-minute cruise itself is magical — you can watch the stokers shovelling coal in the engine room below deck.</p>

<h2>6. Explore Milford Sound (Day Trip)</h2>
<p>Often called the "eighth wonder of the world," Milford Sound is a 4.5-hour drive from Queenstown through some of the most spectacular scenery on Earth. The drive itself — through the Eglinton Valley, past Mirror Lakes, and through the Homer Tunnel — is an experience. Once there, a scenic cruise takes you past Mitre Peak (1,692m), cascading waterfalls, and colonies of fur seals and Fiordland crested penguins. Consider a coach tour or scenic flight to save time.</p>

<h2>7. Tandem Skydive over The Remarkables</h2>
<p>Jumping out of a plane at 4,572 metres (15,000 feet) above Queenstown is as terrifying and exhilarating as it sounds. You'll free-fall for up to 60 seconds at 200 km/h before the parachute opens, revealing a 360-degree panorama of mountain ranges, glacial lakes, and — on clear days — views as far as Milford Sound. NZone Skydive and Skydive Queenstown both operate year-round from Queenstown Airport.</p>

<h2>8. Walk the Queenstown Trail</h2>
<p>The Queenstown Trail is a 130-kilometre network of walking and cycling tracks connecting Queenstown, Arrowtown, Gibbston Valley, and Lake Hayes. You don't need to do the whole thing — popular day sections include the lakeside track from Queenstown to Frankton (easy, flat, stunning views), the Arrowtown to Gibbston trail (through the gorge), and the Lake Hayes loop. Bikes are available for hire throughout town.</p>

<h2>9. Visit Historic Arrowtown</h2>
<p>Just 20 minutes from Queenstown, this beautifully preserved gold-rush village is one of the most picturesque towns in New Zealand. Walk the main street lined with heritage buildings, explore the Chinese Settlement (a poignant reminder of the Chinese miners who worked the goldfields), pan for gold in the Arrow River, and visit the Lakes District Museum. In autumn (April–May), the town erupts in spectacular gold and red foliage.</p>

<h2>10. Hike to Ben Lomond Summit</h2>
<p>For experienced hikers, the Ben Lomond Track is the quintessential Queenstown day hike. Starting from the Skyline Gondola top station, the 5–6 hour return hike climbs through alpine tussock to the 1,748-metre summit, rewarding you with a 360-degree panorama that takes in Lake Wakatipu, The Remarkables, Cecil Peak, and distant peaks as far as Mount Aspiring. It's a challenging hike with steep sections, but the views from the top are unforgettable.</p>

<h2>Planning Your Visit</h2>
<p>Queenstown is busiest from December to February (summer) and June to August (ski season). For the best balance of good weather and manageable crowds, visit in March–April (autumn) or October–November (spring). Most activities can be booked online with free cancellation, so lock in your must-dos early — especially bungee, skydiving, and Milford Sound day trips, which sell out fast in peak season.</p>
      `,
    },
    {
      slug: "queenstown-adventure-guide-bungee-skydive",
      title: "Queenstown Adventure Guide: Bungee, Skydive & More",
      excerpt:
        "A complete rundown of every extreme sport and adrenaline activity in Queenstown — from the original Kawarau bungee to canyon swings, jet boats, and beyond.",
      date: "March 8, 2026",
      isoDate: "2026-03-08",
      category: "Adventure",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
      content: `
<p>Queenstown didn't earn its title as the adventure capital of the world by accident. Over three decades of relentless innovation have produced an astonishing concentration of extreme sports and adrenaline activities — all set against some of the most dramatic scenery on Earth. Here's your complete guide to every major adventure experience in the region.</p>

<h2>Bungee Jumping</h2>
<p>Queenstown is the birthplace of commercial bungee jumping, and the region offers three distinct bungee experiences operated by AJ Hackett Bungy:</p>

<h3>Kawarau Bridge Bungy (43m)</h3>
<p>The original. Opened in 1988, this is where the global bungee industry was born. The 43-metre jump from the historic Kawarau Bridge over the turquoise river is the most accessible and iconic bungee experience in the world. You can opt for a water touch (dipping into the river) or a dry bounce. A free museum at the site tells the story of how AJ Hackett and Henry van Asch started it all.</p>

<h3>Ledge Bungy (47m)</h3>
<p>Located at the top of the Skyline Gondola on Bob's Peak, the Ledge Bungy offers a 47-metre jump with extraordinary views of Queenstown and Lake Wakatipu spread out below you. Unlike the Kawarau, you jump from a custom-built platform off the side of the mountain, which gives the sensation of jumping into open air rather than toward water. Night jumps are available in winter.</p>

<h3>Nevis Bungy (134m)</h3>
<p>The big one. At 134 metres, the Nevis is the highest bungee in Australasia and one of the highest in the world. You jump from a pod suspended by cables above the Nevis River gorge, free-falling for 8.5 seconds before the cord catches. The sheer height and the isolation of the gorge make this an utterly terrifying experience. Not for the faint-hearted.</p>

<h2>Skydiving</h2>
<p>Tandem skydiving over Queenstown is consistently ranked among the best skydiving locations on Earth, thanks to the stunning alpine scenery visible during the descent.</p>
<ul>
<li><strong>Jump heights:</strong> Choose from 9,000 ft (25 seconds free-fall), 12,000 ft (45 seconds), or 15,000 ft (60 seconds)</li>
<li><strong>What you'll see:</strong> The Remarkables, Lake Wakatipu, Coronet Peak, Cecil Peak, and on clear days, views as far as Milford Sound and Mount Cook</li>
<li><strong>Operators:</strong> NZone Skydive and Skydive Queenstown both operate from Queenstown Airport year-round</li>
<li><strong>No experience needed:</strong> You're harnessed to a professional instructor for the entire jump</li>
</ul>
<p><strong>Tip:</strong> Book the highest altitude (15,000 ft) for the full minute of free-fall. The price difference is relatively small for significantly more adrenaline.</p>

<h2>Jet Boating</h2>
<p>Jet boats were invented in New Zealand, and Queenstown's rivers provide the perfect playground for these shallow-draft, high-speed vessels.</p>

<h3>Shotover Jet</h3>
<p>The most famous jet boat experience in the world. You'll blast through the narrow Shotover River canyons at speeds up to 85 km/h, executing heart-stopping 360-degree spins with canyon walls just centimetres away. The 25-minute ride has been thrilling visitors since 1965.</p>

<h3>Dart River Adventures</h3>
<p>For a more scenic experience, Dart River Adventures combines jet boating on the pristine Dart River with short walks through ancient native beech forest. The braided river channels against the backdrop of Mount Aspiring National Park are stunningly beautiful. This tour also visits Lord of the Rings filming locations.</p>

<h2>Whitewater Rafting & Kayaking</h2>
<p>The Kawarau and Shotover Rivers offer Grade 3–5 whitewater rafting, suitable for beginners through to experienced paddlers. The Shotover River trip includes rafting through a 170-metre-long tunnel — one of the most unusual rafting experiences in the world. For a calmer experience, guided kayaking on Lake Wakatipu or the Dart River offers spectacular scenery without the adrenaline overload.</p>

<h2>Canyon Swings & Ziplines</h2>
<p>The Shotover Canyon Swing combines a 60-metre free-fall with a 200-metre pendulum arc through the Shotover Canyon. You can choose from dozens of jump styles — backwards, upside down, in a chair, or wrapped in clingfilm (yes, really). The Nevis Swing, at 160 metres, is the highest swing in the world. For zipline enthusiasts, Ziptrek Ecotours runs multi-line courses through native forest canopy high above Queenstown.</p>

<h2>Paragliding & Hang Gliding</h2>
<p>Tandem paragliding from Bob's Peak (accessed via the Skyline Gondola) gives you 10–15 minutes of soaring flight with panoramic views of the lake and mountains. No experience is needed — you're strapped to a qualified pilot who handles everything while you take in the view. Flights run year-round, weather permitting.</p>

<h2>Canyoning</h2>
<p>Canyoning combines abseiling, rock climbing, zip-lining, and swimming through narrow canyon systems carved by waterfalls. Queenstown Canyoning offers half-day and full-day trips in the Shotover and Routeburn canyons, suitable for beginners. The combination of rushing water, vertical rock, and pristine native bush is extraordinary.</p>

<h2>Booking Tips</h2>
<ul>
<li><strong>Combo deals:</strong> Most operators offer combo packages (e.g., bungee + swing, jet boat + rafting) at 20–30% savings</li>
<li><strong>Book ahead in summer:</strong> December–February is peak season and popular activities sell out days in advance</li>
<li><strong>Weather flexibility:</strong> Many activities operate rain or shine, but skydiving and paragliding are weather-dependent — keep your schedule flexible</li>
<li><strong>Minimum ages/weights:</strong> Check operator websites for restrictions. Bungee has minimum weight requirements; skydiving typically requires age 12+</li>
<li><strong>Photos & video:</strong> Most operators offer photo/video packages. They're pricey but worth it — you won't be taking selfies mid-bungee</li>
</ul>
      `,
    },
    {
      slug: "queenstown-wine-region-central-otago-guide",
      title: "Queenstown Wine Region: A Central Otago Guide",
      excerpt:
        "Central Otago produces some of the world's finest Pinot Noir. Discover the best wineries, tasting rooms, and food experiences near Queenstown.",
      date: "February 28, 2026",
      isoDate: "2026-02-28",
      category: "Food & Drink",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
      content: `
<p>Just minutes from the bungee cords and jet boats, Queenstown's surrounding wine region produces some of the most celebrated wines in the New World. Central Otago is the world's southernmost wine region, and its extreme continental climate — hot summers, cold winters, and massive diurnal temperature variation — creates Pinot Noir of exceptional depth, complexity, and character.</p>

<h2>Central Otago Wine Region at a Glance</h2>
<p>Central Otago is unique among New Zealand wine regions. While most of the country's vineyards sit in maritime climates, Central Otago is continental — the only wine region in New Zealand with this distinction. The region experiences hot, dry summers and cold winters with significant frost, and the daily temperature swings of 15–20°C give wines remarkable intensity and acidity balance.</p>
<ul>
<li><strong>Key grape:</strong> Pinot Noir (over 80% of plantings)</li>
<li><strong>Other varieties:</strong> Pinot Gris, Riesling, Chardonnay, Rosé</li>
<li><strong>Sub-regions:</strong> Gibbston, Bannockburn, Cromwell Basin, Wanaka, Bendigo, Alexandra</li>
<li><strong>Number of wineries:</strong> Over 200 across the region, with 20+ offering cellar door tastings near Queenstown</li>
<li><strong>Altitude:</strong> Vineyards range from 200 to 450 metres above sea level — among the highest in the Southern Hemisphere</li>
</ul>

<h2>Gibbston Valley — The Heart of Queenstown Wine</h2>
<p>Just 25 minutes from central Queenstown, the Gibbston Valley (nicknamed 'the Valley of the Vines') is the most accessible wine sub-region and the best starting point for any wine tour. The valley runs along the Kawarau Gorge, with vineyards clinging to steep, sun-drenched slopes on either side of the river.</p>

<h3>Must-Visit Gibbston Wineries</h3>
<p><strong>Gibbston Valley Winery:</strong> The region's pioneer and largest winery, featuring an impressive cave cellar carved into the schist rock. Their Reserve Pinot Noir is consistently excellent, and the on-site restaurant offers superb food matched with their wines. The cave tour is a must.</p>
<p><strong>Chard Farm:</strong> Perched dramatically above the Kawarau Gorge, Chard Farm's cellar door has one of the most spectacular settings of any winery in the world. Their Pinot Noir and Riesling are standouts. The drive to the cellar door along the narrow, winding gorge road is an adventure in itself.</p>
<p><strong>Peregrine:</strong> Housed in a stunning building designed to resemble a falcon's wing, Peregrine produces elegant, refined Pinot Noir and one of the best Pinot Gris in Central Otago. The architecture alone is worth the visit.</p>
<p><strong>Kinross:</strong> A collaborative cellar door where you can taste wines from multiple small producers under one roof. It's a great way to sample a wide range of Central Otago wines without driving between wineries.</p>

<h2>Beyond Gibbston — Bannockburn & Cromwell</h2>
<p>For serious wine enthusiasts, the 45-minute drive to Bannockburn and Cromwell Basin rewards with some of the region's finest wines. Bannockburn's warmer, drier microclimate produces Pinot Noir of exceptional richness and power.</p>
<p><strong>Felton Road:</strong> Widely regarded as New Zealand's greatest Pinot Noir producer. Their biodynamic wines are allocated globally and often compared to Grand Cru Burgundy. Cellar door is by appointment only — book well ahead.</p>
<p><strong>Mt Difficulty:</strong> Commanding views over the Cromwell Basin and a cellar door restaurant that is destination-worthy in its own right. Their Roaring Meg Pinot Noir offers outstanding value.</p>
<p><strong>Burn Cottage:</strong> A small biodynamic estate producing deeply complex Pinot Noir. Their wines are among the most sought-after in New Zealand.</p>

<h2>Wine Tours from Queenstown</h2>
<p>Since wine tasting and driving don't mix, guided tours are the best way to explore the region:</p>
<ul>
<li><strong>Half-day tours (4 hours):</strong> Typically cover 3–4 Gibbston Valley wineries with tastings and cheese pairings. From around $150 NZD per person.</li>
<li><strong>Full-day tours (7–8 hours):</strong> Extend to Bannockburn and Cromwell with lunch at a winery restaurant. From around $250 NZD per person.</li>
<li><strong>Bike tours:</strong> Cycle the Gibbston River Trail between wineries — relatively flat and thoroughly enjoyable. E-bikes available.</li>
<li><strong>Private tours:</strong> Customised itineraries with a dedicated guide and vehicle. Worth it for groups of 4+.</li>
</ul>

<h2>Food & Wine Pairing</h2>
<p>Central Otago's food scene has grown to match its wines. Key dining experiences include:</p>
<ul>
<li><strong>Gibbston Valley Restaurant:</strong> Seasonal menus matched with cave-aged wines</li>
<li><strong>Amisfield Bistro:</strong> Near Queenstown Airport, offering a renowned "Trust the Chef" multi-course experience paired with their estate wines</li>
<li><strong>Mt Difficulty Restaurant:</strong> Elevated vineyard dining with panoramic views over the Cromwell Basin</li>
<li><strong>Rata (Queenstown):</strong> Josh Emett's acclaimed restaurant in the town centre, showcasing Central Otago produce and wines</li>
</ul>

<h2>Best Time for Wine Touring</h2>
<p>Wine touring is year-round, but the best months are:</p>
<ul>
<li><strong>March–April (Harvest):</strong> The vineyards are at their most active and beautiful. Some wineries offer harvest experiences.</li>
<li><strong>October–November (Spring):</strong> New vintage releases, fewer tourists, and wildflowers among the vines.</li>
<li><strong>January–February (Summer):</strong> Long, warm days perfect for outdoor tastings, but busier with tourists.</li>
</ul>
      `,
    },
    {
      slug: "queenstown-with-kids-family-guide",
      title: "Queenstown with Kids: The Complete Family-Friendly Guide",
      excerpt:
        "Queenstown isn't just for adrenaline junkies. From gentle lake cruises to luge rides and farm visits, here's how to plan a family trip everyone will love.",
      date: "February 18, 2026",
      isoDate: "2026-02-18",
      category: "Family Travel",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80",
      content: `
<p>Queenstown's reputation as the adventure capital of the world might suggest it's all bungee jumps and skydives, but this lakeside town is actually one of the best family destinations in New Zealand. With gentle lake cruises, luge rides, farm experiences, easy walking trails, and yes — some age-appropriate thrills for older kids — there's something for every member of the family.</p>

<h2>Best Activities by Age Group</h2>

<h3>Toddlers & Preschoolers (Ages 2–5)</h3>
<p>Queenstown is surprisingly well-suited for young families. The key is combining short, engaging activities with plenty of downtime near the lake and playgrounds.</p>
<ul>
<li><strong>Queenstown Gardens:</strong> Beautiful public gardens right in town with a large playground, disc golf course, and gentle lakeside paths perfect for little legs and pushchairs.</li>
<li><strong>TSS Earnslaw Cruise:</strong> The historic steamship is a hit with young children — they can watch the crew shovelling coal in the engine room and spot ducks on the lake. The Walter Peak farm visit adds sheep-shearing and animal feeding.</li>
<li><strong>Kiwi Birdlife Park:</strong> A compact wildlife park in central Queenstown where children can see kiwi (in a nocturnal house), kea, tuatara, and native geckos. Conservation talks are engaging even for young kids.</li>
<li><strong>Queenstown Bay Beach:</strong> The pebbly lakeside beach is great for splashing, stone-skipping, and watching the jet boats zoom past. The water is cold but refreshing on a warm day.</li>
</ul>

<h3>Primary School Kids (Ages 6–12)</h3>
<p>This age group hits the sweet spot in Queenstown — old enough for many activities but still thrilled by everything they see.</p>
<ul>
<li><strong>Skyline Luge:</strong> Take the gondola to Bob's Peak and ride the Luge — gravity-powered carts on three tracks of increasing difficulty. Kids 6+ can ride alone on the scenic track; younger kids ride tandem with an adult. Most families buy 5-ride passes because nobody wants to stop.</li>
<li><strong>Shotover Jet:</strong> Children aged 5+ are welcome on the jet boat, and most kids in this age group absolutely love it. The 360-degree spins are a guaranteed highlight.</li>
<li><strong>Gold Panning in Arrowtown:</strong> Buy a gold pan from the Arrowtown museum for a few dollars and head to the Arrow River. Kids love the treasure-hunting aspect, and you can actually find tiny flakes of real gold.</li>
<li><strong>Kawarau Bridge Bungee (Viewing):</strong> Even if kids are too young to jump (minimum 10 years old), the viewing platform at the Kawarau Bridge is free and endlessly entertaining — watching others take the plunge is half the fun.</li>
<li><strong>Off Road Adventures:</strong> Various operators offer family-friendly quad biking and off-road vehicle experiences suitable for children aged 6+, with stunning backcountry scenery.</li>
</ul>

<h3>Teenagers (Ages 13+)</h3>
<p>Teens are in their element in Queenstown. This is where the adventure capital really delivers for families.</p>
<ul>
<li><strong>Kawarau Bridge Bungee:</strong> The minimum age is 10 (with parental consent), and most teenagers who try it describe it as the best experience of their lives. Weight restrictions apply.</li>
<li><strong>Tandem Paragliding:</strong> Available from age 6 but especially popular with teens. The gentle flight from Bob's Peak with panoramic views is thrilling without being terrifying.</li>
<li><strong>Whitewater Rafting:</strong> Grade 3–5 rafting on the Kawarau or Shotover Rivers. Most operators accept ages 13+ for the wilder sections.</li>
<li><strong>Ziptrek Ecotours:</strong> Zipline through native forest canopy high above Queenstown. Multiple lines of increasing length and speed. From age 6.</li>
<li><strong>Mountain Biking:</strong> The Queenstown Bike Park (accessed via the Skyline Gondola) offers trails from beginner to expert. Bike hire is available at the top.</li>
</ul>

<h2>Family-Friendly Dining</h2>
<p>Queenstown's dining scene caters well to families:</p>
<ul>
<li><strong>Fergburger:</strong> The legendary burger joint. Kids' portions aren't on the menu, but one adult burger easily feeds two younger children. Expect queues.</li>
<li><strong>Cookie Time Store:</strong> A Queenstown institution for afternoon treats. Warm cookies, milkshakes, and hot chocolates.</li>
<li><strong>Rata:</strong> Chef Josh Emett's restaurant has a children's menu and a relaxed atmosphere despite the upscale food.</li>
<li><strong>The Boat Shed:</strong> Right on the lake with outdoor seating. Casual atmosphere, good fish and chips, and great views.</li>
</ul>

<h2>Practical Tips for Families</h2>
<ul>
<li><strong>Accommodation:</strong> Self-contained apartments are better value than hotels for families — many are walking distance from town and have kitchens for easy breakfasts and snacks.</li>
<li><strong>Getting around:</strong> Central Queenstown is compact and walkable. For further-afield activities, hire a car — public transport is limited.</li>
<li><strong>Sun protection:</strong> New Zealand's UV levels are extreme due to thin ozone. Apply SPF 50+ even on cloudy days, and re-apply after water activities.</li>
<li><strong>Pack for all weather:</strong> Mountain weather changes rapidly. Carry rain jackets and warm layers even in summer.</li>
<li><strong>Book combo deals:</strong> Family passes for the Skyline Gondola + Luge offer excellent savings. Many adventure operators offer family pricing.</li>
</ul>

<h2>How Many Days Do Families Need?</h2>
<ul>
<li><strong>2–3 days:</strong> Enough for the Skyline Gondola/Luge, TSS Earnslaw cruise, a walk, and a day in Arrowtown</li>
<li><strong>4–5 days:</strong> Add a Milford Sound day trip, Shotover Jet, more adventure activities, and wine touring for the parents</li>
<li><strong>7+ days:</strong> Include Glenorchy, the Routeburn Track day walk, Wanaka, Puzzling World, and plenty of relaxation time by the lake</li>
</ul>
      `,
    },
    {
      slug: "day-trips-from-queenstown",
      title: "Best Day Trips from Queenstown: Milford Sound, Glenorchy & More",
      excerpt:
        "From the fjords of Milford Sound to the gold-rush charm of Arrowtown, these day trips showcase the best of the southern lakes region.",
      date: "February 5, 2026",
      isoDate: "2026-02-05",
      category: "Travel Guide",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?w=800&q=80",
      content: `
<p>While Queenstown itself could keep you busy for a week, some of the most spectacular scenery in New Zealand lies within a few hours' drive. These day trips take you through landscapes that range from ancient fiords and glacial valleys to charming gold-rush villages and world-class wine country.</p>

<h2>Milford Sound (Te Anau / Fiordland)</h2>
<p><strong>Distance:</strong> 287 km / 4–4.5 hours each way by road</p>
<p><strong>Why go:</strong> Rudyard Kipling called Milford Sound the "eighth wonder of the world," and it's not hyperbole. This ancient fiord, carved by glaciers over millions of years, is flanked by sheer rock walls rising up to 1,200 metres straight from the water, with permanent waterfalls cascading down their faces. Mitre Peak, at 1,692 metres, is one of the most photographed mountains in New Zealand.</p>
<p>A scenic cruise (typically 2 hours) takes you the length of the fiord past waterfalls, seal colonies, and — if you're lucky — pods of bottlenose dolphins and rare Fiordland crested penguins. On rainy days (which are frequent — Milford gets 7 metres of rainfall per year), temporary waterfalls appear everywhere, and many visitors consider the rain to be the most dramatic time to visit.</p>
<p><strong>Options:</strong></p>
<ul>
<li><strong>Coach + cruise:</strong> Full-day guided tours from Queenstown including scenic stops along the way. The most affordable option and a great way to enjoy the drive without worrying about road fatigue.</li>
<li><strong>Self-drive:</strong> Gives you flexibility to stop at Mirror Lakes, The Chasm, and other viewpoints at your own pace. Fill up on fuel in Te Anau — there's nothing at Milford.</li>
<li><strong>Scenic flight:</strong> Fly one way and cruise the other. Small planes and helicopters offer jaw-dropping aerial views of Fiordland's mountains and glaciers. Worth the premium if your budget allows.</li>
</ul>
<p><strong>Tip:</strong> Start early. The road can be busy, and avalanche control in the Homer Tunnel occasionally causes delays. Bring snacks — there's very limited food at Milford Sound itself.</p>

<h2>Glenorchy & the Dart River</h2>
<p><strong>Distance:</strong> 46 km / 45 minutes from Queenstown</p>
<p><strong>Why go:</strong> The drive from Queenstown to Glenorchy along the shores of Lake Wakatipu is consistently ranked among the most beautiful roads in the world. The tiny settlement of Glenorchy (population ~400) sits at the head of the lake, surrounded by mountains that were used extensively as filming locations for The Lord of the Rings and The Hobbit trilogies.</p>
<p>Glenorchy is the gateway to some of New Zealand's greatest walks — the Routeburn Track, Greenstone-Caples Track, and Rees-Dart Track all begin here. For a taste without committing to a multi-day hike, the Routeburn Track day walk (2–3 hours return to the flats) offers stunning views of the Humboldt Mountains and Routeburn Valley.</p>
<p><strong>Activities:</strong></p>
<ul>
<li><strong>Dart River Adventures:</strong> Jet boat on the pristine Dart River through ancient beech forest and past Lord of the Rings locations, combined with guided bush walks.</li>
<li><strong>Horse riding:</strong> Guided treks through landscapes used in the films, including the setting for Isengard and the Misty Mountains.</li>
<li><strong>Kayaking:</strong> Guided kayak trips on Lake Wakatipu or the Dart River with stunning mountain reflections.</li>
<li><strong>Photography:</strong> The Glenorchy Lagoon at sunrise is one of the most photographed spots in New Zealand.</li>
</ul>

<h2>Arrowtown</h2>
<p><strong>Distance:</strong> 21 km / 20 minutes from Queenstown</p>
<p><strong>Why go:</strong> This perfectly preserved gold-rush village is one of the most charming towns in New Zealand. Founded in 1862 when gold was discovered in the Arrow River, the town retains its historic character with tree-lined streets, heritage stone buildings, and a gentler pace of life than nearby Queenstown.</p>
<p><strong>What to do:</strong></p>
<ul>
<li><strong>Buckingham Street:</strong> The main street is lined with boutique shops, galleries, cafes, and restaurants housed in heritage buildings.</li>
<li><strong>Chinese Settlement:</strong> A restored village telling the story of the Chinese miners who came during the gold rush. One of the best-preserved Chinese mining settlements in the Southern Hemisphere.</li>
<li><strong>Gold panning:</strong> Buy a gold pan from the museum and try your luck in the Arrow River. Kids and adults alike find it surprisingly addictive.</li>
<li><strong>Autumn Festival:</strong> If you visit in late April, the Arrowtown Autumn Festival celebrates the spectacular fall foliage with market stalls, music, and community events.</li>
</ul>

<h2>Wanaka</h2>
<p><strong>Distance:</strong> 67 km / 1 hour via Crown Range, or 1.5 hours via Cromwell</p>
<p><strong>Why go:</strong> Wanaka is Queenstown's more relaxed sibling — a beautiful lakeside town with a thriving cafe culture, excellent hiking, and the famous #ThatWanakaTree (a lone willow growing in the lake, possibly the most Instagrammed tree in New Zealand). The Crown Range Road connecting Queenstown to Wanaka is the highest sealed road in New Zealand, with extraordinary views from the summit.</p>
<p><strong>What to do:</strong></p>
<ul>
<li><strong>Roy's Peak Track:</strong> One of the most popular day hikes in New Zealand — a steep 5–6 hour return climb rewarded with arguably the best viewpoint in the country overlooking Lake Wanaka and Mount Aspiring.</li>
<li><strong>Puzzling World:</strong> A quirky attraction featuring a tilting house, illusion rooms, and a large outdoor maze. Great for families.</li>
<li><strong>Wanaka Lavender Farm:</strong> Beautiful in summer (December–February) when the lavender is in bloom.</li>
<li><strong>Roys Bay waterfront:</strong> Stroll along the lakefront, grab a coffee, and photograph That Wanaka Tree.</li>
</ul>

<h2>Cromwell & the Kawarau Gorge</h2>
<p><strong>Distance:</strong> 60 km / 45 minutes from Queenstown</p>
<p><strong>Why go:</strong> The drive through the Kawarau Gorge is dramatic, and Cromwell — a former gold-mining town — sits at the confluence of the Kawarau and Clutha rivers. The town is surrounded by orchards and vineyards, and its historic precinct preserves buildings from the original town centre (much of old Cromwell was flooded when the Clyde Dam was built in the 1990s).</p>
<p><strong>What to do:</strong></p>
<ul>
<li><strong>Cromwell Heritage Precinct:</strong> Restored gold-rush-era buildings along the lake edge with artisan shops and cafes.</li>
<li><strong>Fruit stalls:</strong> Cromwell is the stone fruit capital of New Zealand. In summer, roadside stalls sell cherries, apricots, peaches, and nectarines at bargain prices.</li>
<li><strong>Wine touring:</strong> Bannockburn and the wider Cromwell Basin produce some of the finest Pinot Noir in Central Otago. Felton Road, Mt Difficulty, and Burn Cottage are must-visits for wine lovers.</li>
<li><strong>Goldfields Mining Centre:</strong> A recreated gold-mining village where you can pan for gold and learn about the region's gold-rush history.</li>
</ul>

<h2>Planning Tips for Day Trips</h2>
<ul>
<li><strong>Milford Sound:</strong> Book a guided coach tour or scenic flight to avoid driving fatigue. If self-driving, allow 10+ hours for the full return trip including the cruise.</li>
<li><strong>Road conditions:</strong> The Crown Range Road to Wanaka can close in winter due to snow and ice. Check road conditions before departing.</li>
<li><strong>Fuel up:</strong> Fill your tank in Queenstown before any day trip. Fuel options are limited in Glenorchy and non-existent at Milford Sound.</li>
<li><strong>Combine trips:</strong> Arrowtown and Gibbston Valley wineries are on the same road — combine them for a perfect half-day of history and wine.</li>
</ul>
      `,
    },
    {
      slug: "best-time-to-visit-queenstown-seasonal-guide",
      title: "Best Time to Visit Queenstown: A Seasonal Guide",
      excerpt:
        "Summer adventure or winter skiing? Each season in Queenstown offers a completely different experience. Here's how to choose the right time for your trip.",
      date: "January 20, 2026",
      isoDate: "2026-01-20",
      category: "Travel Guide",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80",
      content: `
<p>Queenstown is a genuine year-round destination, but each season delivers a dramatically different experience. Summer brings long days and peak adventure season, autumn paints the landscape in spectacular gold, winter transforms the town into a ski resort, and spring offers wildflowers and uncrowded trails. Here's your season-by-season guide to choosing the best time to visit.</p>

<h2>Summer: December — February</h2>
<p><strong>Weather:</strong> 15–25°C (59–77°F). Long days with up to 16 hours of daylight. Generally warm and dry, but mountain weather can change quickly.</p>
<p><strong>Crowds:</strong> Peak season. Queenstown is at its busiest, especially around Christmas, New Year, and late January when New Zealand school holidays end.</p>
<p><strong>What's happening:</strong></p>
<ul>
<li>All adventure activities operating at full capacity</li>
<li>Longest daylight hours — perfect for hiking, biking, and lake activities</li>
<li>Lake Wakatipu warm enough for swimming (barely — it's always cold)</li>
<li>Outdoor dining season — restaurant terraces buzz until late</li>
<li>Milford Sound at its most accessible (though also most crowded)</li>
</ul>
<p><strong>Prices:</strong> Highest of the year. Accommodation can be 2–3x winter rates. Book 2–3 months ahead for the best options.</p>
<p><strong>Best for:</strong> First-time visitors, families on school holidays, hikers and outdoor enthusiasts, adventure seekers wanting maximum activity choice.</p>

<h2>Autumn: March — May</h2>
<p><strong>Weather:</strong> 8–18°C (46–64°F). Crisp, clear days with cooler nights. April and May see the first frosts.</p>
<p><strong>Crowds:</strong> Moderate, dropping to low by May. The sweet spot for avoiding crowds while still enjoying good weather.</p>
<p><strong>What's happening:</strong></p>
<ul>
<li>Spectacular autumn foliage — Arrowtown and the Arrow River are world-famous for their golden colours in mid-to-late April</li>
<li>Arrowtown Autumn Festival (late April) — markets, music, and community celebrations</li>
<li>Wine harvest in Central Otago — some wineries offer harvest experiences</li>
<li>Most adventure activities still running, with shorter queues</li>
<li>Cooler temperatures make hiking more comfortable</li>
</ul>
<p><strong>Prices:</strong> Dropping from peak. Good value on accommodation, especially mid-week.</p>
<p><strong>Best for:</strong> Photographers (the autumn light and colours are extraordinary), wine lovers, couples seeking a quieter visit, hikers wanting cooler temperatures.</p>

<h2>Winter: June — August</h2>
<p><strong>Weather:</strong> 1–10°C (34–50°F). Cold, often crisp and clear, with regular frosts and occasional snow in town. Mountains are snow-covered.</p>
<p><strong>Crowds:</strong> Moderate to high during school holiday weeks (July) and peak ski weekends. Quieter mid-week.</p>
<p><strong>What's happening:</strong></p>
<ul>
<li>Ski season at Coronet Peak (25 min from town) and The Remarkables (30 min). Both offer night skiing on select evenings.</li>
<li>Queenstown Winter Festival (late June) — 10 days of events including fireworks, music, comedy, street parties, and the famous dog barking competition</li>
<li>Snow-capped mountains create stunning scenery year-round</li>
<li>Many adventure activities still operate — bungee, jet boat, and canyon swing run year-round</li>
<li>Cosy cafe and restaurant culture — mulled wine, roaring fires, hearty food</li>
</ul>
<p><strong>Prices:</strong> Moderate. Ski season accommodation is cheaper than summer peak but more expensive than shoulder months. Ski passes cost $120–160 NZD per day for adults.</p>
<p><strong>Best for:</strong> Skiers and snowboarders, winter festival lovers, those who enjoy crisp mountain air and cosy evenings, budget travellers (outside school holidays).</p>

<h2>Spring: September — November</h2>
<p><strong>Weather:</strong> 8–18°C (46–64°F). Highly variable — spring is the most unpredictable season. Expect sunny days interspersed with rain and occasional late snowfalls.</p>
<p><strong>Crowds:</strong> Low. This is Queenstown's quietest season.</p>
<p><strong>What's happening:</strong></p>
<ul>
<li>Spring skiing continues into September and sometimes October at The Remarkables</li>
<li>Wildflowers begin blooming in alpine meadows from October</li>
<li>New vintage wine releases at Central Otago wineries</li>
<li>Lambing season — the surrounding farmland is dotted with newborn lambs</li>
<li>Adventure activities resume full schedules from late September</li>
</ul>
<p><strong>Prices:</strong> Lowest of the year. The best deals on accommodation and activities. Ideal for budget travellers.</p>
<p><strong>Best for:</strong> Budget travellers, those avoiding crowds, wine enthusiasts (new releases), early-bird hikers wanting the trails to themselves.</p>

<h2>Our Recommendation</h2>
<p>For the best all-round experience, visit in <strong>mid-March to mid-April</strong>. You get warm-enough weather for all outdoor activities, significantly fewer crowds than summer, the start of the spectacular autumn colours, wine harvest season in Central Otago, and accommodation prices 30–40% below peak. The daylight hours are still generous (11–12 hours), and the air has a crispness that makes the mountain scenery even more vivid.</p>
<p>For skiers, <strong>mid-July to mid-August</strong> offers the most reliable snow conditions and the full buzz of winter festival season.</p>

<h2>How Many Days Do You Need?</h2>
<ul>
<li><strong>2–3 days:</strong> Core Queenstown experiences — Skyline Gondola, one major adventure activity, Arrowtown, and a wine tasting</li>
<li><strong>4–5 days:</strong> Add Milford Sound, Glenorchy, multiple adventure activities, and more wine touring</li>
<li><strong>7+ days:</strong> A relaxed pace including Wanaka, multi-day hiking (Routeburn or Milford Track), skiing, and thorough exploration of the wine region</li>
</ul>
      `,
    },
  ],

  // ─── SEO ───
  seo: {
    titleTemplate: "%s | Explore Queenstown",
    defaultTitle:
      "Explore Queenstown — Adventure Capital of the World | Tours & Activities",
    defaultDescription:
      "Discover the best tours, activities, and experiences in Queenstown, New Zealand. From bungee jumping and jet boats to wine tours and Lord of the Rings locations — book with instant confirmation.",
    keywords: [
      "Queenstown",
      "Queenstown tours",
      "Queenstown activities",
      "Queenstown adventure",
      "bungee jumping Queenstown",
      "Queenstown New Zealand",
      "things to do in Queenstown",
      "Queenstown skydiving",
      "Queenstown wine tours",
      "Milford Sound day trip",
      "Queenstown jet boat",
      "Lord of the Rings tour Queenstown",
      "Central Otago wine",
      "Queenstown skiing",
      "Queenstown family activities",
    ],
  },

  // ─── Search Terms ───
  searchTerms: [
    "Queenstown bungee jumping",
    "Queenstown skydiving",
    "Milford Sound day trip from Queenstown",
    "Queenstown jet boat tours",
    "Central Otago wine tour",
    "Lord of the Rings Queenstown tour",
    "Queenstown skiing",
    "Queenstown family activities",
    "Queenstown to Glenorchy",
    "Queenstown adventure packages",
  ],
};

export default queenstown;
