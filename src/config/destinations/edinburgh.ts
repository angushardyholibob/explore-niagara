import type { DestinationConfig } from "../types";

const edinburgh: DestinationConfig = {
  // ─── Identity ───
  slug: "edinburgh",
  name: "Edinburgh",
  brandName: "Explore Edinburgh",
  domain: "explore-edinburgh.com",
  email: "info@exploreedinburgh.com",
  privacyEmail: "privacy@exploreedinburgh.com",

  // ─── Search ───
  searchTerm: "Edinburgh",
  mapCenter: { lat: 55.9533, lng: -3.1883 },

  // ─── Hero ───
  hero: {
    imageUrl:
      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1920&q=80",
    heading: "Edinburgh — A UNESCO World Heritage City of Stories",
    subheading:
      "Where medieval closes and Georgian grandeur collide beneath an ancient volcanic skyline, Edinburgh is a city steeped in history, haunted by legend, and alive with the world's greatest festival spirit.",
    ctaText: "Explore Experiences",
    stats: [
      { num: "900+", label: "years of history" },
      { num: "2", label: "UNESCO World Heritage sites" },
      { num: "12+", label: "annual festivals" },
      { num: "70+", label: "whisky distilleries nearby" },
    ],
  },

  // ─── About Section (Homepage) ───
  aboutSection: {
    imageUrl:
      "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=800&q=80",
    heading: "Discover Scotland's Capital",
    paragraphs: [
      "Edinburgh is a city built on drama — literally. Perched on a series of volcanic hills, its skyline is one of the most iconic in Europe: the medieval Old Town cascading down from the Castle Rock to Holyrood Palace, the elegant Georgian symmetry of the New Town stretching north towards the Firth of Forth, and the wild summit of Arthur's Seat rising 251 metres right in the city centre. Together, the Old and New Towns form a dual UNESCO World Heritage Site recognised for their outstanding architectural and historical significance.",
      "Beyond the stone and spires, Edinburgh pulses with creative energy. Every August, the city transforms into the cultural capital of the world as the Edinburgh Festival Fringe — the largest arts festival on the planet — fills every venue, street corner, and converted basement with theatre, comedy, music, and performance. Year-round, the city offers world-class museums, a thriving food scene, legendary whisky bars, and some of the most atmospheric ghost tours you'll ever experience.",
    ],
  },

  // ─── About Page ───
  aboutPage: {
    heroGradient: "from-indigo-900 via-slate-900 to-stone-900",
    heading: "About Explore Edinburgh",
    subheading:
      "Your guide to Scotland's extraordinary capital — curating the best experiences in one of the world's most storied and atmospheric cities.",
    story: [
      "Explore Edinburgh was born from a deep love for this ancient, layered, endlessly fascinating city. From the wind-battered ramparts of Edinburgh Castle to the cosy snug of a Royal Mile whisky bar, we believe Edinburgh offers experiences that are impossible to replicate anywhere else on Earth — a city where every close, courtyard, and cobblestone has a tale to tell.",
      "We partner with local guides, distillers, historians, and storytellers who know Edinburgh's secrets. Every experience on our platform has been vetted for quality, authenticity, and depth — because Edinburgh deserves more than a surface-level visit. The city rewards those who dig deeper, who wander off the Royal Mile, who ask about the stories behind the stones.",
      "Edinburgh faces the challenges of a beloved historic city: balancing tourism with livability, preserving heritage while embracing the future, and ensuring that the festival spirit extends to its communities year-round. We are committed to promoting responsible tourism that supports local businesses, respects the city's heritage, and keeps Edinburgh's spirit alive for generations to come.",
    ],
    values: [
      {
        icon: "Landmark",
        title: "Heritage & Storytelling",
        description:
          "Edinburgh is one of the most historically rich cities in Europe. We champion the historians, storytellers, and guides who bring its extraordinary past to life — from medieval kings to Enlightenment philosophers.",
      },
      {
        icon: "TreePine",
        title: "Sustainable Tourism",
        description:
          "From Arthur's Seat to the Pentland Hills, Edinburgh's natural landscapes are central to its identity. We promote experiences that tread lightly and protect the green spaces that make this city unique.",
      },
      {
        icon: "Users",
        title: "Community First",
        description:
          "We work with locally owned businesses — independent distillers, family-run guest houses, and Edinburgh-born guides — to ensure tourism benefits the communities that give this city its character.",
      },
      {
        icon: "Shield",
        title: "Safety & Trust",
        description:
          "Every experience on our platform meets rigorous safety and quality standards. We only feature operators with proven track records, proper licensing, and genuine local expertise.",
      },
      {
        icon: "Heart",
        title: "Authentic Experiences",
        description:
          "From private whisky tastings in hidden vaults to dawn hikes up Arthur's Seat, we curate experiences that reveal the real Edinburgh — beyond the tartan-and-shortbread clichés.",
      },
      {
        icon: "Globe",
        title: "Accessible Discovery",
        description:
          "Whether you're a history buff, a whisky enthusiast, a family with children, or a festival-goer seeking your next show, we help every visitor find their perfect Edinburgh experience.",
      },
    ],
  },

  // ─── Collections ───
  collections: [
    {
      slug: "historic-castles-old-town",
      name: "Historic Castles & Old Town",
      description:
        "Explore Edinburgh Castle, walk the Royal Mile, descend into underground vaults, and discover centuries of history in one of Europe's most atmospheric medieval quarters.",
      searchTerm: "Edinburgh Castle Royal Mile Old Town tour",
      icon: "Landmark",
      gradient: "from-amber-600 to-yellow-500",
    },
    {
      slug: "whisky-food-tours",
      name: "Whisky & Food Tours",
      description:
        "Discover Scotland's national drink at world-class distilleries, sample Edinburgh's thriving food scene, and explore gin experiences in the city that helped pioneer the craft spirits revolution.",
      searchTerm: "Edinburgh whisky distillery food tour",
      icon: "Beer",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      slug: "ghost-tours-underground",
      name: "Ghost Tours & Underground",
      description:
        "Descend into Edinburgh's haunted underground vaults, walk the city's most notorious closes after dark, and hear the chilling true stories behind one of the most haunted cities in the world.",
      searchTerm: "Edinburgh ghost tour underground vaults",
      icon: "Skull",
      gradient: "from-purple-600 to-violet-500",
    },
    {
      slug: "day-trips-highlands",
      name: "Day Trips & Highlands",
      description:
        "Venture beyond Edinburgh to the Scottish Highlands, Loch Ness, St Andrews, Stirling Castle, and Rosslyn Chapel — all within easy reach of the capital.",
      searchTerm: "Edinburgh day trip Highlands Loch Ness St Andrews",
      icon: "Compass",
      gradient: "from-emerald-500 to-teal-500",
    },
  ],

  // ─── Guide Page ───
  guide: {
    heroImageUrl:
      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1920&q=80",
    title: "The Complete Guide to Edinburgh (2026)",
    subtitle:
      "Scotland's ancient capital — where volcanic drama, UNESCO heritage, world-famous festivals, and centuries of storytelling converge on one extraordinary skyline.",
    stats: [
      { num: "900+", label: "years of history" },
      { num: "2", label: "UNESCO sites" },
      { num: "4M+", label: "festival visitors annually" },
      { num: "120+", label: "whisky bars" },
    ],
    facts: [
      {
        icon: "Landmark",
        title: "Edinburgh Castle Sits on a Volcano",
        text: "Edinburgh Castle, Scotland's most visited attraction, is built on Castle Rock — the plug of an extinct volcano that last erupted around 340 million years ago. The rock has been fortified since at least the Iron Age, and the castle has witnessed some of the most dramatic episodes in Scottish history, from siege warfare to royal births. The Stone of Destiny, used in the coronation of Scottish monarchs for centuries, is housed within its walls.",
      },
      {
        icon: "Mountain",
        title: "Arthur's Seat — A Volcano in the City Centre",
        text: "Arthur's Seat is the main peak of a group of hills in Holyrood Park, rising 251 metres right in the centre of Edinburgh. It is the remnant of a volcano that erupted approximately 350 million years ago, making it one of the oldest geological features visible in any European capital. The hike to the summit takes about 45 minutes and offers panoramic views of the entire city, the Firth of Forth, and on clear days, the Highlands.",
      },
      {
        icon: "Building2",
        title: "Old Town & New Town — Dual UNESCO World Heritage",
        text: "Edinburgh's Old Town and New Town were jointly inscribed as a UNESCO World Heritage Site in 1995. The Old Town preserves the medieval street plan with its narrow closes and towering tenements along the Royal Mile, while the New Town — built from 1767 onwards — is considered one of the finest examples of Georgian town planning in the world. Together they represent a remarkable contrast of architectural styles spanning 500 years.",
      },
      {
        icon: "Siren",
        title: "Home of the World's First Municipal Fire Brigade",
        text: "Edinburgh established the world's first municipal fire brigade in 1824, led by James Braidwood. The Great Fire of Edinburgh in 1824, which destroyed much of the Old Town's High Street, prompted the city to create a professional, publicly funded firefighting force — a model that was subsequently adopted by cities around the world, including London, where Braidwood later became the first chief of the London Fire Engine Establishment.",
      },
      {
        icon: "BookOpen",
        title: "Birthplace of Sherlock Holmes (Sort Of)",
        text: "Sir Arthur Conan Doyle was born at 11 Picardy Place, Edinburgh, in 1859. He studied medicine at the University of Edinburgh, where his professor — Dr Joseph Bell — became the inspiration for Sherlock Holmes. Bell's extraordinary powers of observation and deduction in diagnosing patients directly influenced the creation of literature's most famous detective. A statue of Sherlock Holmes stands near Conan Doyle's birthplace.",
      },
      {
        icon: "Theater",
        title: "The Edinburgh Fringe — World's Largest Arts Festival",
        text: "The Edinburgh Festival Fringe is the single largest arts festival in the world. Founded in 1947 when eight theatre groups turned up uninvited to the Edinburgh International Festival and performed on the 'fringe,' it has grown into a colossal celebration of performing arts. In a typical year, the Fringe hosts over 3,500 shows across 300+ venues over three weeks in August, attracting audiences of over 3 million. Anyone can perform — there is no selection committee.",
      },
      {
        icon: "Dog",
        title: "Greyfriars Bobby — Edinburgh's Most Loyal Dog",
        text: "Greyfriars Bobby was a Skye Terrier who became famous in 19th-century Edinburgh for spending 14 years guarding the grave of his owner, John Gray, in Greyfriars Kirkyard. The story of the dog's unwavering loyalty captured the city's heart, and when Bobby died in 1872, he was buried just inside the gate of Greyfriars Kirkyard. A statue of Bobby stands at the corner of George IV Bridge and Candlemaker Row — his nose polished gold by generations of visitors rubbing it for luck.",
      },
      {
        icon: "Layers",
        title: "Edinburgh's Underground City",
        text: "Beneath the streets of Edinburgh lies a hidden network of underground chambers and passageways. The South Bridge Vaults, built in the 1780s within the arches of the South Bridge, were originally used as workshops and storage but quickly became slums and a haven for criminal activity. Sealed and forgotten for nearly 200 years, they were rediscovered in the 1980s and are now among Edinburgh's most popular (and atmospheric) tourist attractions.",
      },
      {
        icon: "Wand2",
        title: "Harry Potter Was Born Here",
        text: "J.K. Rowling wrote much of the early Harry Potter novels in Edinburgh cafes, most famously at The Elephant House on George IV Bridge (often called 'the birthplace of Harry Potter') and at Nicolson's Cafe. Edinburgh's Gothic architecture, graveyard names (Tom Riddle's name appears on a gravestone in Greyfriars Kirkyard), and the spires of George Heriot's School (said to have inspired Hogwarts) are woven into the fabric of the wizarding world.",
      },
    ],
    timeline: [
      {
        year: "~850 AD",
        title: "Castle Rock Settlement",
        text: "Archaeological evidence suggests a fortified settlement on Castle Rock from at least the early medieval period. The volcanic plug, with its sheer cliffs on three sides, provided an almost impregnable defensive position. The oldest surviving building in Edinburgh — St Margaret's Chapel, atop the rock — dates to the early 12th century and is the oldest surviving building in the city.",
      },
      {
        year: "1128",
        title: "Holyrood Abbey Founded",
        text: "King David I of Scotland founded the Augustinian Holyrood Abbey at the foot of the Royal Mile in 1128. The abbey became one of the most important religious houses in Scotland and gave rise to the Palace of Holyroodhouse, which remains the official Scottish residence of the British monarch to this day. The ruined nave of the original abbey still stands in the palace grounds.",
      },
      {
        year: "1314",
        title: "The Battle of Bannockburn",
        text: "Robert the Bruce's decisive victory over the English at Bannockburn, near Stirling, secured Scottish independence and cemented Edinburgh's status as Scotland's de facto capital. In the years that followed, Edinburgh Castle was recaptured from the English, and the city grew in political and economic importance as the heart of the Scottish kingdom.",
      },
      {
        year: "1560s",
        title: "The Scottish Reformation",
        text: "John Knox led the Protestant Reformation in Scotland from Edinburgh, preaching fiery sermons at St Giles' Cathedral on the Royal Mile. The Reformation transformed Scottish religious, political, and cultural life, and Knox's legacy is deeply embedded in Edinburgh's identity. His house on the Royal Mile is one of the oldest surviving buildings on the street.",
      },
      {
        year: "1583",
        title: "University of Edinburgh Founded",
        text: "The University of Edinburgh was established by Royal Charter in 1583, making it the sixth oldest university in the English-speaking world. It would become one of the leading intellectual centres of the Scottish Enlightenment, producing alumni including David Hume, Adam Smith, Charles Darwin, Alexander Graham Bell, and Arthur Conan Doyle.",
      },
      {
        year: "1700s",
        title: "The Scottish Enlightenment",
        text: "Edinburgh became known as the 'Athens of the North' during the 18th-century Scottish Enlightenment, a remarkable period of intellectual and cultural achievement. Thinkers including David Hume, Adam Smith, James Hutton, and Joseph Black made Edinburgh one of the most important centres of learning in Europe. The city's influence on philosophy, economics, geology, and medicine during this period was global and lasting.",
      },
      {
        year: "1767",
        title: "New Town Construction Begins",
        text: "Architect James Craig won a competition to design Edinburgh's New Town, a masterpiece of Georgian urban planning north of the Old Town. Construction began in 1767, and over the following decades, the New Town's elegant streets, crescents, and squares — including Princes Street, George Street, and Charlotte Square — were built. The New Town remains one of the finest examples of neoclassical town planning in the world.",
      },
      {
        year: "1947",
        title: "Edinburgh International Festival Founded",
        text: "In the aftermath of World War II, the Edinburgh International Festival was founded to 'provide a platform for the flowering of the human spirit.' That same year, eight uninvited theatre companies performed on the margins — founding what would become the Edinburgh Festival Fringe, now the largest arts festival in the world. Together with the Military Tattoo, Book Festival, and Art Festival, Edinburgh's August festivals attract over 4 million visitors annually.",
      },
      {
        year: "1995",
        title: "UNESCO World Heritage Status",
        text: "Edinburgh's Old Town and New Town were jointly inscribed as a UNESCO World Heritage Site in 1995, recognising the exceptional contrast between the organic medieval Old Town and the planned neoclassical New Town. The inscription highlighted Edinburgh as a remarkable example of urban development spanning five centuries, with a rich architectural heritage unmatched by almost any other European city of its size.",
      },
      {
        year: "1999",
        title: "Scottish Parliament Reconvened",
        text: "The Scottish Parliament was reconvened in Edinburgh on 1 July 1999, meeting for the first time since 1707. The new Scottish Parliament Building at Holyrood, designed by Catalan architect Enric Miralles, opened in 2004. Its bold, controversial design — inspired by the landscape, upturned boats, and the paintings of Henry Raeburn — won the Stirling Prize for architecture and remains a landmark of 21st-century Edinburgh.",
      },
    ],
    daredevils: [
      {
        year: "1542–1587",
        name: "Mary, Queen of Scots",
        text: "One of the most dramatic figures in British history, Mary Stuart became Queen of Scotland at just six days old. She returned to Edinburgh from France in 1561 and held court at Holyrood Palace, where she witnessed the murder of her secretary David Rizzio in her own chambers. Her turbulent reign, three marriages, forced abdication, and eventual execution by Elizabeth I have made her one of Edinburgh's most enduring legends.",
      },
      {
        year: "1759–1796",
        name: "Robert Burns — Scotland's National Poet",
        text: "Though born in Ayrshire, Robert Burns arrived in Edinburgh in 1786 as a literary sensation. His first Edinburgh edition of 'Poems, Chiefly in the Scottish Dialect' cemented his fame, and he became a celebrity in the city's literary salons. Burns' time in Edinburgh shaped his later work and brought Scottish poetry to an international audience. His legacy is celebrated every January 25th on Burns Night, with haggis, whisky, and poetry readings worldwide.",
      },
      {
        year: "1859–1930",
        name: "Arthur Conan Doyle — Creator of Sherlock Holmes",
        text: "Born at 11 Picardy Place, Edinburgh, Arthur Conan Doyle studied medicine at the University of Edinburgh. His professor, Dr Joseph Bell, with his legendary powers of observation and deduction, became the direct inspiration for Sherlock Holmes. Conan Doyle wrote the first Holmes story, A Study in Scarlet, in 1887, creating the most famous fictional detective in history — a character whose origins are unmistakably Edinburgh.",
      },
      {
        year: "1828",
        name: "Burke & Hare — The West Port Murders",
        text: "William Burke and William Hare committed one of the most infamous series of murders in British criminal history in Edinburgh in 1828. They killed 16 people and sold the bodies to Dr Robert Knox for anatomical dissection at the University of Edinburgh. The case shocked the city and led directly to the Anatomy Act of 1832, which reformed the supply of cadavers for medical research. Burke was hanged; his skeleton is still displayed at the University of Edinburgh's Anatomical Museum.",
      },
      {
        year: "1858–1872",
        name: "Greyfriars Bobby — The Faithful Terrier",
        text: "Greyfriars Bobby, a Skye Terrier, became one of Edinburgh's most beloved figures after spending 14 years guarding the grave of his owner, night watchman John Gray, in Greyfriars Kirkyard. The Lord Provost of Edinburgh paid for Bobby's licence, and the dog was fed by locals until his death in 1872. The story has inspired books, films, and a bronze statue that remains one of Edinburgh's most photographed landmarks.",
      },
      {
        year: "1965–present",
        name: "J.K. Rowling — The Wizard of Edinburgh",
        text: "J.K. Rowling moved to Edinburgh in the mid-1990s as a struggling single mother and wrote much of the first Harry Potter novel in the city's cafes. Edinburgh's Gothic architecture, atmospheric graveyards, and medieval streetscapes are woven throughout the Harry Potter universe. Rowling has said that Edinburgh is 'very much home' and has donated millions to Scottish charities. The city's connection to Harry Potter draws hundreds of thousands of literary pilgrims each year.",
      },
    ],
    power: {
      title: "What Makes Edinburgh Extraordinary",
      subtitle:
        "Where literary heritage and Enlightenment innovation converge to create a capital city of world-changing ideas.",
      columns: [
        {
          icon: "BookOpen",
          title: "Literary & Cultural Heritage",
          items: [
            "Edinburgh was the world's first UNESCO City of Literature, designated in 2004",
            "Home to the world's largest arts festival — the Edinburgh Fringe — with 3,500+ shows annually",
            "Birthplace or home of Robert Burns, Walter Scott, Robert Louis Stevenson, Arthur Conan Doyle, Muriel Spark, and J.K. Rowling",
            "The Edinburgh International Book Festival is the largest public book festival in the world",
            "The Royal Mile alone contains more historical landmarks per metre than almost any street in Europe",
            "The Scottish National Gallery, National Museum of Scotland, and Writers' Museum offer free entry year-round",
          ],
        },
        {
          icon: "Lightbulb",
          title: "Innovation & Science",
          items: [
            "Edinburgh was the 'Athens of the North' during the Scottish Enlightenment — home to David Hume, Adam Smith, and James Hutton",
            "The University of Edinburgh (founded 1583) has produced 20 Nobel Prize winners and pioneered modern medicine, geology, and economics",
            "Alexander Graham Bell, inventor of the telephone, was born and educated in Edinburgh",
            "Dolly the Sheep, the first cloned mammal, was created at the Roslin Institute near Edinburgh in 1996",
            "Edinburgh is the UK's second-largest financial centre after London, and a growing hub for technology and artificial intelligence",
            "James Clerk Maxwell, born in Edinburgh, formulated the theory of electromagnetism — described by Einstein as the most important development since Newton",
          ],
        },
      ],
    },
    trivia: [
      {
        q: "Edinburgh has more listed buildings than anywhere in the world",
        text: "Edinburgh contains approximately 4,500 listed buildings — more per square mile than any other city in the world. The concentration of historically significant architecture, from medieval tenements to Georgian masterpieces, is unmatched. This is why the entire city centre holds UNESCO World Heritage status.",
      },
      {
        q: "There's an entire street hidden underground",
        text: "Mary King's Close, a 17th-century street buried beneath the Royal Exchange (now the City Chambers), was sealed off after plague outbreaks and gradually built over. Rediscovered centuries later, it is now one of Edinburgh's most popular attractions, offering tours through the remarkably preserved underground rooms and passageways.",
      },
      {
        q: "The city inspired Treasure Island and Jekyll & Hyde",
        text: "Robert Louis Stevenson, born in Edinburgh in 1850, drew directly on the city's dual nature — respectable New Town by day, seedy Old Town by night — for The Strange Case of Dr Jekyll and Mr Hyde. The real-life Deacon Brodie, a respectable Edinburgh cabinetmaker by day and burglar by night, was a direct inspiration for the character.",
      },
      {
        q: "Edinburgh's one o'clock gun has fired almost every day since 1861",
        text: "At exactly 1pm every day (except Sundays, Good Friday, and Christmas Day), a cannon is fired from Edinburgh Castle. Originally introduced so that ships in the Firth of Forth could set their maritime clocks, the tradition has continued for over 160 years. It still makes first-time visitors jump.",
      },
      {
        q: "Hogmanay is one of the world's biggest New Year celebrations",
        text: "Edinburgh's Hogmanay celebrations are among the largest New Year events in the world, regularly attracting over 150,000 people. The three-day festival features a torchlight procession, a massive street party on Princes Street, live music, fireworks over the castle, and the 'Loony Dook' — a New Year's Day swim in the freezing Firth of Forth.",
      },
      {
        q: "The Royal Mile is actually longer than a mile",
        text: "Despite its name, the Royal Mile — stretching from Edinburgh Castle to the Palace of Holyroodhouse — is actually 1.12 miles (1.81 km) long. It comprises four streets: Castlehill, Lawnmarket, High Street, and Canongate. The 'closes' (narrow alleyways) branching off it hide courtyards, gardens, and buildings that most tourists never see.",
      },
      {
        q: "A tiny dog statue gets more visitors than most museums",
        text: "The bronze statue of Greyfriars Bobby, the loyal Skye Terrier, is one of the most visited and photographed landmarks in Edinburgh. The tradition of rubbing Bobby's nose for luck has polished it to a golden shine, despite the city council's attempts to discourage the practice to preserve the statue.",
      },
      {
        q: "Edinburgh has its own volcano you can climb in 30 minutes",
        text: "Arthur's Seat, the 251-metre extinct volcano in Holyrood Park, is one of the only places in Europe where you can climb a genuine volcano within walking distance of a city centre. The hill is also a Site of Special Scientific Interest, and its geology helped James Hutton develop his theory of deep time — the foundation of modern geology.",
      },
      {
        q: "Tom Riddle's grave is in a real Edinburgh graveyard",
        text: "In Greyfriars Kirkyard, visitors can find a gravestone bearing the name Thomas Riddell — widely believed to have inspired the name of Harry Potter's villain, Lord Voldemort (Tom Riddle). The graveyard also contains the name 'McGonagall' on another stone. J.K. Rowling has acknowledged walking through Greyfriars Kirkyard during the period she was writing the books.",
      },
    ],
    tips: [
      {
        icon: "CloudRain",
        title: "Dress in Layers",
        text: "Edinburgh weather is famously unpredictable — you can experience all four seasons in a single day. Bring waterproof layers, a warm jumper, and comfortable walking shoes. Even in summer, evenings can be chilly and rain can arrive without warning.",
      },
      {
        icon: "Footprints",
        title: "Wear Comfortable Shoes",
        text: "Edinburgh is a hilly city with cobblestone streets, steep closes, and uneven medieval pavements. Comfortable, sturdy footwear is essential — heels and flimsy sandals will not survive the Royal Mile. If you're climbing Arthur's Seat, walking boots or trainers are recommended.",
      },
      {
        icon: "Calendar",
        title: "Book Early for Festival Season",
        text: "If you're visiting in August for the Edinburgh Fringe, Edinburgh International Festival, or Military Tattoo, book accommodation and tickets months in advance. August is the city's busiest period, and prices surge — but the atmosphere is utterly electric and worth the premium.",
      },
      {
        icon: "Ticket",
        title: "Get a Historic Scotland Explorer Pass",
        text: "If you plan to visit Edinburgh Castle, Stirling Castle, and other historic sites, the Historic Scotland Explorer Pass offers excellent value. Edinburgh Castle alone costs over £17 entry, and the pass covers dozens of sites across Scotland. Buy online for the best price.",
      },
      {
        icon: "Clock",
        title: "Visit Edinburgh Castle Early",
        text: "Edinburgh Castle is Scotland's most visited paid attraction and gets extremely busy by late morning. Arrive when it opens at 9:30am to beat the crowds, and allow at least 2 hours to explore. The views from the battlements alone are worth the visit — on a clear day you can see across to the Kingdom of Fife.",
      },
      {
        icon: "Moon",
        title: "Take a Night Ghost Tour",
        text: "Edinburgh is widely considered one of the most haunted cities in the world, and ghost tours are a must-do experience. The underground vault tours run by companies like Mercat Tours and City of the Dead are genuinely atmospheric. Book an evening tour for maximum effect — the Old Town's narrow closes are eerie after dark.",
      },
      {
        icon: "Map",
        title: "Explore Beyond the Royal Mile",
        text: "The Royal Mile is essential, but Edinburgh's best-kept secrets lie in the neighbourhoods beyond. Stockbridge has independent shops and a weekend market, Leith has the city's best restaurants and a revitalised waterfront, and Dean Village is a hidden medieval gem just 10 minutes from Princes Street.",
      },
      {
        icon: "Beer",
        title: "Try a Whisky Tasting",
        text: "Even if you think you don't like whisky, a proper Scotch tasting in Edinburgh might change your mind. The Scotch Whisky Experience on the Royal Mile is a great introduction, while The Bow Bar, Cadenhead's Whisky Shop, and the whisky bars of the Grassmarket offer deeper dives. Always ask for recommendations — staff are passionate and knowledgeable.",
      },
    ],
  },

  // ─── Blog Posts ───
  blogPosts: [
    {
      slug: "top-10-things-to-do-in-edinburgh",
      title: "Top 10 Things to Do in Edinburgh in 2026",
      excerpt:
        "From Edinburgh Castle and the Royal Mile to Arthur's Seat and whisky tastings, here are the must-do experiences in Scotland's extraordinary capital.",
      date: "March 22, 2026",
      isoDate: "2026-03-22",
      category: "Travel Guide",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80",
      content: `
<p>Edinburgh is a city that rewards every kind of traveller — history lovers, whisky enthusiasts, festival-goers, hikers, foodies, and bookworms alike. Built on volcanic hills and steeped in over 900 years of dramatic history, Scotland's capital is compact enough to explore on foot yet deep enough to fill weeks of discovery. Whether you have a weekend or a full week, these ten experiences capture the very best of Edinburgh.</p>

<h2>1. Edinburgh Castle</h2>
<p>Dominating the city skyline from its perch atop Castle Rock — the plug of a 340-million-year-old extinct volcano — Edinburgh Castle is Scotland's most iconic landmark. The castle has served as a royal residence, military fortress, and national symbol for over nine centuries. Inside, you'll find the Scottish Crown Jewels (the Honours of Scotland), the Stone of Destiny, St Margaret's Chapel (the oldest building in Edinburgh, dating to the 12th century), and the National War Museum.</p>
<p>Don't miss the One O'Clock Gun, fired daily at 1pm — a tradition dating back to 1861 when it helped ships in the Firth of Forth set their clocks. The views from the battlements are spectacular, stretching from the Pentland Hills to the Firth of Forth and, on clear days, the Highlands beyond.</p>
<p><strong>Tip:</strong> Arrive when the castle opens at 9:30am to avoid the heaviest crowds. Allow at least two hours, and pre-book tickets online to skip the queue.</p>

<h2>2. Walk the Royal Mile</h2>
<p>The Royal Mile is Edinburgh's historic spine — a 1.12-mile stretch running downhill from Edinburgh Castle to the Palace of Holyroodhouse. Along the way, you'll pass St Giles' Cathedral, the Scottish Parliament, John Knox's House, and countless closes (narrow alleyways) that lead to hidden courtyards, gardens, and stories. Each close has its own history, and venturing down them is one of the great pleasures of exploring Edinburgh.</p>
<p>Highlights include Lady Stair's Close (home to the Writers' Museum, celebrating Burns, Scott, and Stevenson), Riddle's Court (a beautifully restored 16th-century courtyard), and the Canongate Kirk graveyard where economist Adam Smith is buried. The Royal Mile is also home to some of Edinburgh's best pubs, whisky bars, and restaurants.</p>

<h2>3. Climb Arthur's Seat</h2>
<p>Arthur's Seat is the main peak of the group of hills within Holyrood Park, rising 251 metres right in the centre of Edinburgh. It's the remnant of a volcano that erupted approximately 350 million years ago, and climbing it is one of the most rewarding things you can do in the city. The main route from the Palace of Holyroodhouse takes about 45 minutes and offers increasingly dramatic views as you ascend.</p>
<p>From the summit, you get a full 360-degree panorama: the castle and Old Town to the west, the Firth of Forth and the hills of Fife to the north, the Pentland Hills to the south, and on clear days, distant Highland peaks. It's a moderately challenging hike — sturdy footwear is recommended — but it's accessible to most fitness levels.</p>

<h2>4. Explore the Underground Vaults</h2>
<p>Beneath the South Bridge lies a hidden city — a labyrinth of chambers and passageways built within the bridge's 19 arches in 1788. Originally used as workshops, taverns, and storage, the vaults quickly became overcrowded slums and a haven for criminal activity. They were sealed and forgotten for nearly 200 years before being rediscovered in the 1980s.</p>
<p>Today, several companies offer tours of the vaults, ranging from historical tours to ghost tours. The atmosphere is genuinely eerie — dark, damp, and echoing with stories of plague, murder, and poverty. Mercat Tours and City of the Dead run excellent evening tours that bring the vaults' disturbing history to vivid life.</p>

<h2>5. Visit the National Museum of Scotland</h2>
<p>The National Museum of Scotland on Chambers Street is one of the finest museums in Britain — and it's completely free. The collection spans Scottish history, world cultures, science, technology, and natural history across beautifully designed galleries. Highlights include Dolly the Sheep (the world's first cloned mammal), Lewis Chessmen, Scottish crown jewels replicas, and an extraordinary array of scientific instruments reflecting Edinburgh's Enlightenment heritage.</p>
<p>The rooftop terrace offers one of the best free views in Edinburgh — a panorama taking in the castle, Arthur's Seat, and the Pentland Hills. Allow at least two to three hours, though you could easily spend an entire day.</p>

<h2>6. Scotch Whisky Experience</h2>
<p>Located at the top of the Royal Mile, the Scotch Whisky Experience offers an excellent introduction to Scotland's national drink. The tour includes a barrel ride through a simulated distillery, a guided tasting, and access to one of the world's largest collections of Scotch whisky — over 3,500 bottles displayed in a stunning vault. Knowledgeable guides explain the different whisky regions and help you discover your preferred style.</p>
<p>For a deeper experience, book the Gold Tour, which includes an extended tasting of four regional whiskies paired with Scottish foods. Even if you're not a whisky enthusiast, the experience is engaging and educational.</p>

<h2>7. Wander Through Greyfriars Kirkyard</h2>
<p>Greyfriars Kirkyard is one of the most atmospheric and historically significant graveyards in Scotland. Established in 1562, it is the resting place of many famous Scots, including the poet Allan Ramsay and numerous Covenanting martyrs. The kirkyard is also home to the grave of Thomas Riddell — believed to have inspired the name of Harry Potter's villain — and the legendary Greyfriars Bobby, the loyal Skye Terrier who guarded his master's grave for 14 years.</p>
<p>The kirkyard is beautiful by day and genuinely unsettling after dark. Several ghost tour companies run evening tours here, and the Covenanters' Prison section is said to be one of the most haunted locations in Britain.</p>

<h2>8. Calton Hill at Sunset</h2>
<p>Calton Hill, at the east end of Princes Street, offers one of the most iconic viewpoints in Edinburgh. The hill is crowned by several monuments, including the National Monument (an unfinished replica of the Parthenon, started in 1826 and never completed — earning Edinburgh the nickname 'Athens of the North'), the Nelson Monument, and the Dugald Stewart Monument. At sunset, the views west towards the castle and Old Town are breathtaking.</p>
<p>The climb takes only about 10 minutes from street level, making it far more accessible than Arthur's Seat while still offering magnificent panoramic views. It's particularly popular with photographers and is free to visit at any time.</p>

<h2>9. Dean Village</h2>
<p>Tucked in a gorge just 10 minutes' walk from Princes Street, Dean Village feels like stepping back in time. This former milling village on the Water of Leith has been beautifully preserved, with its 19th-century buildings, cobbled streets, and river walks creating a peaceful escape from the city bustle. Follow the Water of Leith Walkway from Dean Village to Stockbridge for a gorgeous riverside stroll past St Bernard's Well and Thomas Telford's bridge.</p>
<p>Dean Village is also home to the Scottish National Gallery of Modern Art, which occupies two beautiful buildings surrounded by sculpture gardens. Entry is free.</p>

<h2>10. Experience Edinburgh's Pub Culture</h2>
<p>Edinburgh's pub scene is legendary, and a proper pub crawl — or even just settling into one good pub for the evening — is an essential Edinburgh experience. The Bow Bar on Victoria Street is widely regarded as one of the best whisky pubs in Scotland, with over 300 malts. The Sheep Heid Inn in Duddingston, dating to 1360, is one of the oldest pubs in Scotland and has a skittle alley in the back. Sandy Bell's on Forrest Road is the spiritual home of Edinburgh's folk music scene, with live sessions most evenings.</p>
<p>For craft beer, head to the Hanging Bat on Lothian Road or BrewDog on Cowgate. For atmosphere, the creaky, candlelit bars of the Grassmarket — directly beneath the castle — are hard to beat.</p>

<h2>Planning Your Visit</h2>
<p>Edinburgh is a year-round destination, though summer (June–August) offers the longest days and the festival season. Spring and autumn are quieter and often offer beautiful light. Winter brings shorter days but the magic of Hogmanay and Christmas markets. The city is compact and walkable — you don't need a car. Edinburgh Airport is a 25-minute tram ride from the city centre, and direct trains from London take about 4.5 hours.</p>
      `,
    },
    {
      slug: "edinburgh-whisky-guide",
      title: "Edinburgh Whisky Guide: Distilleries, Bars & Tastings",
      excerpt:
        "Discover Scotland's national drink in its capital — from the Scotch Whisky Experience and historic distilleries to the city's best whisky bars and hidden dram shops.",
      date: "March 15, 2026",
      isoDate: "2026-03-15",
      category: "Food & Drink",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&q=80",
      content: `
<p>Edinburgh and whisky are inseparable. Scotland's capital sits at the crossroads of the country's great whisky-producing regions — the Highlands to the north, Speyside to the northeast, the Lowlands below, and the Islands to the west — and has been the centre of the Scotch whisky trade for centuries. Whether you're a seasoned malt enthusiast or a curious beginner, Edinburgh offers more ways to explore, taste, and fall in love with Scotch whisky than anywhere else in the world.</p>

<h2>Understanding Scotch Whisky</h2>
<p>Before diving into Edinburgh's whisky scene, it helps to understand the basics. Scotch whisky must be distilled and matured in Scotland for a minimum of three years. There are five official whisky regions — Highland, Lowland, Speyside, Islay, and Campbeltown — each producing distinct flavour profiles. Single malt whisky is made from malted barley at a single distillery, while blended whisky combines malt and grain whiskies from multiple distilleries.</p>
<p>Edinburgh's position as Scotland's capital means its bars and shops stock whiskies from every region, and its proximity to both Highland and Lowland distilleries makes it the perfect base for whisky exploration.</p>

<h2>The Scotch Whisky Experience</h2>
<p>Located at the top of the Royal Mile beside Edinburgh Castle, the Scotch Whisky Experience is the ideal starting point for any whisky journey. The tour begins with a barrel ride through a simulated distillery (surprisingly enjoyable even for adults), followed by guided tastings and an exploration of the Diageo Claive Vidiz Collection — a staggering assemblage of over 3,500 bottles of Scotch whisky displayed in a purpose-built vault.</p>
<p>The Gold Tour is the recommended option, offering an extended tasting of four regional whiskies paired with Scottish artisan foods — smoked salmon, oatcakes, cheese, and chocolate. The guides are certified whisky ambassadors and genuinely passionate about helping visitors find their preferred style.</p>

<h2>Edinburgh Distilleries</h2>
<h3>Holyrood Distillery</h3>
<p>Opened in 2019 in a stunning converted railway engine shed near the Scottish Parliament, Holyrood Distillery is Edinburgh's first single malt whisky distillery in nearly a century. While their whisky is still maturing, they offer fascinating tours of the distillery process and tastings of their new-make spirit and gin. Watch this space — when their first single malt is released, it will be a landmark moment for Edinburgh whisky.</p>

<h3>Edinburgh Gin Distillery</h3>
<p>While not technically a whisky distillery, Edinburgh Gin's operation at 1a Rutland Place (in the basement of the Rutland Hotel) is well worth a visit for spirits enthusiasts. Their 'Gin Making Experience' lets you create your own bespoke gin using their copper stills, and the tasting bar offers an impressive range of gins and cocktails. Edinburgh has become a major player in the global gin renaissance.</p>

<h3>Day Trips to Working Distilleries</h3>
<p>Some of Scotland's finest distilleries are within easy day-trip distance of Edinburgh. Glenkinchie Distillery, one of the classic Lowland malts, is just 25 minutes' drive from the city centre. Further afield, the Highland distilleries of Deanston, Tullibardine, and Aberfeldy are all reachable within 90 minutes. Organised whisky tours from Edinburgh will handle the driving, allowing you to taste freely.</p>

<h2>Edinburgh's Best Whisky Bars</h2>
<h3>The Bow Bar</h3>
<p>Widely considered one of the best whisky bars in Scotland, The Bow Bar on Victoria Street stocks over 300 single malts in an unpretentious, no-nonsense setting. The bar has won numerous awards and is a favourite of whisky professionals and enthusiasts alike. The knowledgeable staff will guide you through the selection without a hint of snobbery — just tell them what flavours you enjoy, and they'll find your perfect dram.</p>

<h3>The Scotch Malt Whisky Society (The Vaults)</h3>
<p>Based in the atmospheric 18th-century vaults at 28 Queen Street, the Scotch Malt Whisky Society (SMWS) is a members' club dedicated to single cask whiskies. While membership is required for full access, non-members can visit during certain events and open days. The whiskies here are bottled at cask strength from individual barrels, meaning each one is unique. It's a pilgrimage site for serious whisky lovers.</p>

<h3>Cadenhead's Whisky Shop & Tasting Room</h3>
<p>Scotland's oldest independent bottler has a shop and tasting room on the Canongate section of the Royal Mile. Cadenhead's bottles whiskies directly from individual casks with no artificial colouring or chill-filtration, making each bottle a unique expression of its distillery. The tastings here are intimate, knowledgeable, and excellent value — one of Edinburgh's best-kept whisky secrets.</p>

<h3>The Last Drop</h3>
<p>Located in the Grassmarket — historically the site of public executions — The Last Drop is a characterful pub with a strong whisky selection and a dark sense of humour about its name. The atmosphere is lively, the whisky list is extensive, and the location beneath the towering castle rock is atmospheric.</p>

<h3>Usquabae</h3>
<p>With over 300 whiskies on its menu, Usquabae (from the Gaelic 'uisge beatha,' meaning 'water of life') on Hope Street is a dedicated whisky bar with a serious selection and a welcoming atmosphere. Their whisky flights offer an excellent way to compare styles and regions, and the staff are passionate about helping visitors explore.</p>

<h2>Whisky Shopping</h2>
<p>Edinburgh is one of the best cities in the world for buying whisky. Royal Mile Whiskies on the High Street stocks an extraordinary range of Scotch, Japanese, and world whiskies, with staff who can recommend hidden gems at every price point. Cadenhead's, mentioned above, offers unique independent bottlings you won't find anywhere else. For duty-free options, Edinburgh Airport has an excellent whisky shop with exclusive releases.</p>

<h2>Whisky Festivals & Events</h2>
<p>The Edinburgh Whisky Stramash, held annually, brings together dozens of distilleries and independent bottlers for tastings and masterclasses. The Spirit of Speyside and Feis Ile festivals are slightly further afield but accessible from Edinburgh. Many of Edinburgh's whisky bars also host regular tasting events — check listings at The Bow Bar, Usquabae, and the SMWS.</p>

<h2>Practical Tips for Whisky Beginners</h2>
<ul>
<li><strong>Start gentle:</strong> If you're new to whisky, begin with a Lowland or Speyside malt — they tend to be lighter, sweeter, and more approachable than the peaty Islay whiskies.</li>
<li><strong>Add water:</strong> Adding a few drops of water to your whisky is not just acceptable — it's encouraged. Water opens up the flavours and aromas, especially in cask-strength whiskies.</li>
<li><strong>Don't rush:</strong> Whisky is meant to be sipped slowly. Nosing (smelling) is just as important as tasting. Hold the glass below your nose first, then gradually bring it closer.</li>
<li><strong>Ask questions:</strong> Edinburgh's whisky bartenders and shop staff are among the most knowledgeable in the world. Don't be afraid to ask for recommendations — they love sharing their passion.</li>
<li><strong>Budget wisely:</strong> A dram in Edinburgh costs anywhere from £4 for a standard blend to £50+ for a rare single cask. Set a budget and explore across your range — some of the best whiskies are surprisingly affordable.</li>
</ul>
      `,
    },
    {
      slug: "edinburgh-haunted-history-ghost-tours",
      title: "Edinburgh's Haunted History: Ghost Tours & Underground Vaults",
      excerpt:
        "Discover why Edinburgh is considered one of the most haunted cities in the world — from the plague-sealed closes to the terrifying underground vaults.",
      date: "March 8, 2026",
      isoDate: "2026-03-08",
      category: "History & Culture",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1561632669-7f55f7975606?w=800&q=80",
      content: `
<p>Edinburgh is widely regarded as one of the most haunted cities in the world, and it's not hard to see why. Built on volcanic rock, layered with centuries of plague, murder, body-snatching, and religious persecution, the Scottish capital has a dark history that seeps from its very stones. Beneath the elegant facades of the Royal Mile lie sealed streets, forgotten chambers, and underground vaults where the most desperate chapters of Edinburgh's past unfolded in the dark. For visitors willing to venture below the surface — literally and figuratively — Edinburgh offers some of the most atmospheric and genuinely unsettling ghost experiences anywhere.</p>

<h2>Why Edinburgh Is So Haunted</h2>
<p>Edinburgh's reputation as a haunted city isn't just folklore — it's rooted in genuine historical trauma. The city's medieval Old Town was one of the most densely populated places in Europe. Towering tenements rose to 12 storeys on the narrow ridge of the Royal Mile, with thousands of people packed into dark, airless closes. When plague struck, entire streets were sometimes sealed with the inhabitants still inside. The dead were buried in mass graves, and the living endured conditions of almost unimaginable squalor.</p>
<p>Add to this the city's history of witch trials (over 300 women were executed as witches in Edinburgh between the 15th and 18th centuries), the notorious Burke and Hare murders of 1828, and the violent religious persecutions of the Covenanters, and you have a city with more than enough dark material to generate centuries of ghost stories.</p>

<h2>The South Bridge Vaults</h2>
<p>The South Bridge Vaults are Edinburgh's most famous underground attraction. Built within the 19 arches of the South Bridge when it was constructed in 1788, these chambers were originally intended as workshops, taverns, and storage spaces. However, poor ventilation and persistent damp made them unsuitable for most purposes, and they quickly became slums inhabited by the city's poorest residents — and a haven for criminals.</p>
<p>The vaults were sealed in the mid-19th century and remained hidden for nearly 200 years until they were rediscovered in the 1980s during construction work. Today, guided tours take visitors through the dark, echoing chambers, where guides recount the grim history of the people who lived and died within these walls. Many visitors and tour guides report unexplained phenomena — cold spots, strange sounds, and the feeling of being watched.</p>

<h2>Mary King's Close</h2>
<p>Arguably Edinburgh's most famous underground attraction, the Real Mary King's Close offers tours through a 17th-century street that was buried beneath the Royal Exchange (now the City Chambers) on the Royal Mile. The close and its branching rooms were home to ordinary Edinburgh residents — traders, craftspeople, and families — before being partially demolished and built over in 1753.</p>
<p>The remarkably preserved rooms give a vivid, often disturbing picture of life in 17th-century Edinburgh. Guides in period costume tell the stories of real residents, including a young girl named Annie whose spirit is said to haunt a particular room. Visitors often leave dolls and toys for Annie in a corner of the room, creating an eerily touching collection. The Real Mary King's Close operates year-round and is one of Edinburgh's most popular attractions — book ahead.</p>

<h2>Greyfriars Kirkyard</h2>
<p>Greyfriars Kirkyard, established in 1562, is one of the most atmospheric graveyards in Britain. By day, it's a peaceful, tree-lined burial ground with elaborate 17th-century monuments and the famous statue of Greyfriars Bobby nearby. By night, it transforms into one of the most reliably terrifying stops on any ghost tour.</p>
<p>The most notorious section is the Covenanters' Prison — a locked area where 1,200 Presbyterian Covenanters were imprisoned in appalling conditions in 1679 after the Battle of Bothwell Bridge. Many died of exposure, starvation, and disease. Since the prison was opened to tours in 1999, there have been hundreds of reports of unexplained attacks on visitors — scratches, bruising, and people fainting. Whether you believe in ghosts or not, the atmosphere in the Covenanters' Prison after dark is genuinely unnerving.</p>

<h2>Best Ghost Tour Companies</h2>
<h3>Mercat Tours</h3>
<p>Mercat Tours is one of Edinburgh's most established and respected tour companies. Their underground vault tours are consistently excellent, with knowledgeable guides who balance genuine historical detail with atmospheric storytelling. The 'Ghosts & Ghouls' tour and the 'Ghostly Underground' tour both include access to the South Bridge Vaults. Mercat holds exclusive access to certain vault sections, making their tours unique.</p>

<h3>City of the Dead Tours</h3>
<p>City of the Dead's 'Doomed, Dead and Buried' tour is often cited as one of the scariest ghost tours in the world. The tour culminates with a visit to the Covenanters' Prison in Greyfriars Kirkyard — the same section where hundreds of unexplained incidents have been reported. The company's guides are theatrical, well-researched, and genuinely committed to delivering an unsettling experience. Not recommended for young children or the faint-hearted.</p>

<h3>Auld Reekie Tours</h3>
<p>Auld Reekie ('Old Smoky,' Edinburgh's historic nickname) offers a range of underground and ghost tours, including a torture tour that explores the city's grim history of punishment and execution. Their tours tend to be grittier and more focused on the disturbing realities of Edinburgh's history than on theatrical scares.</p>

<h2>Other Haunted Edinburgh Locations</h2>
<h3>Edinburgh Castle</h3>
<p>Edinburgh Castle itself is reported to be one of the most haunted places in Scotland. Over the centuries, numerous visitors and staff have reported sightings of ghostly figures, phantom pipers, and unexplained drumming. In 2001, a scientific study by psychologist Richard Wiseman sent 240 volunteers into the castle's most haunted areas — nearly half reported unusual experiences, including sudden temperature drops, shadowy figures, and the sensation of being touched.</p>

<h3>The Banshee Labyrinth</h3>
<p>Located in the old vaults beneath Niddry Street, the Banshee Labyrinth is Edinburgh's most haunted pub — or so it claims. The bar occupies a labyrinthine network of underground rooms and tunnels, and it wears its haunted reputation with pride. Regular paranormal events and ghost tours operate from within the pub, and even on a normal night, the atmosphere in the deeper rooms is undeniably eerie.</p>

<h3>Surgeons' Hall Museums</h3>
<p>The Surgeons' Hall Museums on Nicolson Street house a fascinating and sometimes disturbing collection related to Edinburgh's medical history. Exhibits include surgical instruments, anatomical specimens, and the death mask and life mask of William Burke — one half of the infamous Burke and Hare partnership. The museum provides essential context for understanding Edinburgh's dark history of body-snatching and anatomical murder.</p>

<h2>Tips for Ghost Tours</h2>
<ul>
<li><strong>Book evening tours:</strong> The atmosphere is dramatically better after dark. Most companies run tours from 7pm onwards, with the latest departing around 9pm or 10pm.</li>
<li><strong>Dress warmly:</strong> The underground vaults are cold and damp year-round. Bring a warm layer even in summer.</li>
<li><strong>Manage expectations:</strong> Ghost tours are as much about history and storytelling as they are about frights. The best tours weave genuine historical detail into the experience.</li>
<li><strong>Book ahead:</strong> The most popular tours — especially City of the Dead and Mercat underground tours — sell out regularly, particularly in summer and during the Festival Fringe. Book online at least a day or two in advance.</li>
<li><strong>Not suitable for all ages:</strong> Many ghost tours involve dark spaces, steep stairs, and disturbing historical content. Check age recommendations before booking for families.</li>
</ul>
      `,
    },
    {
      slug: "edinburgh-with-kids-family-guide",
      title: "Edinburgh with Kids: The Complete Family-Friendly Guide",
      excerpt:
        "From the castle and Dynamic Earth to child-friendly ghost tours and Arthur's Seat, here's how to plan a family trip to Edinburgh that every age will love.",
      date: "February 28, 2026",
      isoDate: "2026-02-28",
      category: "Family Travel",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=800&q=80",
      content: `
<p>Edinburgh is one of the most family-friendly cities in Europe. With a castle that looks like it belongs in a storybook, a volcano you can climb in the city centre, world-class interactive museums with free entry, and enough Harry Potter connections to thrill young wizards, Scotland's capital offers experiences that will captivate children of every age. Here's how to plan a family trip that works for everyone.</p>

<h2>Ages 3–6: Little Explorers</h2>
<h3>Edinburgh Castle</h3>
<p>Even the youngest visitors will be wowed by Edinburgh Castle — the dramatic approach up the Esplanade, the cannons on the battlements, and the views from the ramparts are genuinely exciting for small children. Mons Meg, a massive medieval siege cannon from the 15th century, is always a hit. Under-5s enter free, and there are accessible routes throughout the castle. The One O'Clock Gun firing can be very loud and may startle small children — be prepared if you're visiting at that time.</p>

<h3>Dynamic Earth</h3>
<p>Our Dynamic Earth, near the Scottish Parliament at Holyrood, is an interactive science centre that takes visitors on a journey through Earth's history — from the Big Bang to the present day. It's specifically designed for families and young children, with hands-on exhibits including a tropical rainforest, an iceberg you can touch, a 4D theatre, and an earthquake simulator. Children under 3 enter free, and the centre is fully pushchair-accessible.</p>

<h3>Edinburgh Zoo</h3>
<p>Edinburgh Zoo is home to over 1,000 animals, including Scotland's only giant pandas (check current status before visiting), penguins (the daily penguin parade is a highlight), sun bears, and red pandas. The zoo is set on a hillside, so a pushchair with good brakes is essential. The Budongo Trail — an indoor chimpanzee habitat — is particularly impressive and offers close encounters with these fascinating primates.</p>

<h2>Ages 7–11: Young Adventurers</h2>
<h3>Climb Arthur's Seat</h3>
<p>Children in this age group will love the adventure of climbing Arthur's Seat — Edinburgh's 251-metre extinct volcano. The main route from Holyrood is manageable for most children aged 7+, though the final section near the summit involves some scrambling over rocks. The sense of achievement at the top is enormous, and the views are spectacular. Pack water, snacks, and a warm layer. The walk takes about 45 minutes up and 30 minutes down.</p>

<h3>Camera Obscura and World of Illusions</h3>
<p>Located at the top of the Royal Mile, Camera Obscura has been wowing visitors since 1853. The original camera obscura — a Victorian projection device on the rooftop that projects a live image of the city onto a white table — is mesmerising for children and adults alike. The five floors below are filled with optical illusions, holograms, magic mirrors, and interactive exhibits. The Vortex Tunnel (a rotating tunnel that makes you feel like the floor is moving) is a particular hit with older children.</p>

<h3>National Museum of Scotland</h3>
<p>The National Museum of Scotland is a rainy-day saviour for families. Entry is free, and the galleries are designed with families in mind. The interactive science and technology galleries let children build bridges, launch rockets, and race against Usain Bolt. The natural world galleries feature dinosaur skeletons, taxidermy, and Dolly the Sheep. The museum's Imagine gallery, specifically for under-5s, is a dedicated play space with hands-on activities. The rooftop terrace has stunning views and is perfect for letting children run off steam.</p>

<h3>Harry Potter Walking Tour</h3>
<p>For young Harry Potter fans, Edinburgh is a magical destination. Several companies offer family-friendly walking tours that visit the real locations said to have inspired J.K. Rowling — from the cafe where she wrote the early chapters to Greyfriars Kirkyard (where the tombstones of Tom Riddle and McGonagall can be found), George Heriot's School (said to have inspired Hogwarts), and the street that may have inspired Diagon Alley. Tours typically last 90 minutes and are suitable for ages 6+.</p>

<h2>Ages 12+: Teenage Adventures</h2>
<h3>Ghost Tours (Age-Appropriate)</h3>
<p>Teenagers will love Edinburgh's ghost tours — particularly the underground vault tours. Several companies offer tours specifically suitable for older children (typically 12+), which balance genuine historical content with atmospheric storytelling without being too graphic. Mercat Tours' 'Ghostly Underground' is a good option for families with teenagers — it's informative, atmospheric, and slightly spooky without being terrifying.</p>

<h3>Edinburgh Dungeon</h3>
<p>The Edinburgh Dungeon on Market Street offers a theatrical, actor-led journey through Edinburgh's darkest historical episodes — Burke and Hare, the plague, witch trials, and more. It's designed to be entertaining rather than genuinely scary, and teenagers typically love it. The experience includes rides, special effects, and jump scares. Recommended for ages 12+ (though some brave 10-year-olds may enjoy it).</p>

<h3>Scotch Whisky Experience (for Parents)</h3>
<p>While the whisky tastings are for adults only, the Scotch Whisky Experience's barrel ride and historical exhibits are family-friendly and open to all ages. Teenagers may find the distillery process genuinely interesting, and the massive whisky collection is visually impressive regardless of age. It's a good option for families where parents want a whisky experience without excluding younger visitors.</p>

<h2>Outdoor Activities for All Ages</h2>
<h3>Royal Botanic Garden</h3>
<p>The Royal Botanic Garden Edinburgh is a 70-acre green paradise just north of the city centre. Entry to the grounds is free (there's a small charge for the glasshouses). Children love the rock garden, the pond, and the huge open lawns for running. The glasshouses contain tropical plants, giant lily pads, and towering palm trees — a welcome escape on cold or rainy Edinburgh days.</p>

<h3>Water of Leith Walkway</h3>
<p>The Water of Leith Walkway follows the river through Edinburgh for 12 miles, but the section from Dean Village to Stockbridge is perfect for families — flat, scenic, and about 30 minutes' walk. Children enjoy looking for wildlife (herons, kingfishers, and ducks are common) and crossing the historic bridges. Stockbridge has excellent cafes and an ice cream shop as a reward at the finish.</p>

<h2>Practical Family Tips</h2>
<ul>
<li><strong>Many top attractions are free:</strong> The National Museum, National Galleries, Royal Botanic Garden, and many churches are free entry — Edinburgh is one of the most affordable family destinations in the UK for attractions.</li>
<li><strong>Invest in a pushchair rain cover:</strong> Edinburgh weather is unpredictable. A rain cover and a warm blanket for the pushchair will save many a day out.</li>
<li><strong>Avoid August if budget is tight:</strong> The Festival Fringe makes Edinburgh magical in August, but accommodation prices triple. May, June, and September offer better value with good weather.</li>
<li><strong>Use the buses:</strong> Edinburgh's Lothian Buses are excellent, affordable, and cover the entire city. Children under 5 travel free, and a family day ticket is great value. Exact change or contactless payment only.</li>
<li><strong>Pack snacks:</strong> Restaurants can be busy, especially at lunch near the Royal Mile. Having snacks and water reduces meltdown risk significantly.</li>
</ul>
      `,
    },
    {
      slug: "day-trips-from-edinburgh",
      title: "Day Trips from Edinburgh: Highlands, Lochs & Castles",
      excerpt:
        "From the Highlands and Loch Ness to St Andrews, Stirling Castle, and the mysterious Rosslyn Chapel — the best day trips from Scotland's capital.",
      date: "February 18, 2026",
      isoDate: "2026-02-18",
      category: "Day Trips",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1461183479101-6c14cd5299c4?w=800&q=80",
      content: `
<p>Edinburgh is an extraordinary city in its own right, but it's also the perfect gateway to some of Scotland's most spectacular landscapes and historic sites. From the wild grandeur of the Highlands and the mystery of Loch Ness to the medieval splendour of Stirling Castle and the championship golf links of St Andrews, an astonishing range of day trips are possible from the Scottish capital. Whether you drive yourself or join a guided tour, these excursions will add unforgettable depth to your Edinburgh visit.</p>

<h2>The Scottish Highlands & Loch Ness</h2>
<p>The Highlands are Scotland's most iconic landscape — a vast wilderness of mountains, glens, lochs, and coastline that stretches north from the Highland Boundary Fault to the tip of the Scottish mainland. A day trip from Edinburgh to the Highlands is ambitious but absolutely possible, and several excellent tour companies run full-day excursions.</p>
<p>The most popular route heads north through Stirling and the Trossachs, past Glencoe (one of the most dramatic and historically significant valleys in Scotland — site of the infamous 1692 massacre), and on to Loch Ness. The loch itself is spectacular even without the monster — 23 miles long, up to 230 metres deep, and containing more fresh water than all the lakes of England and Wales combined. Most tours stop at Urquhart Castle on the loch shore, where you can explore the ruins and scan the dark waters for Nessie.</p>
<p><strong>Getting there:</strong> Organised tours depart from Edinburgh early morning (typically 7:30–8am) and return by 7–8pm. Expect 10–12 hours including travel time. Driving yourself takes about 3.5 hours each way to Loch Ness. Tour companies include Rabbie's, Highland Explorer Tours, and Haggis Adventures.</p>

<h2>St Andrews</h2>
<p>The historic town of St Andrews, on the east coast of Fife, is world-famous for two things: golf and its ancient university. The Old Course at St Andrews is considered the home of golf — the sport has been played here since the 15th century, and the Royal and Ancient Golf Club (founded 1754) remains the governing authority of golf worldwide (outside the Americas). Even if you don't play golf, walking the course's fairways and visiting the British Golf Museum is a remarkable experience.</p>
<p>Beyond golf, St Andrews is a beautiful medieval town. The ruins of St Andrews Cathedral — once the largest church in Scotland — and St Andrews Castle (with its extraordinary siege tunnels) are well worth exploring. The town's three streets of medieval stone buildings, independent shops, and excellent seafood restaurants make it a charming place to spend a day. The University of St Andrews, founded in 1413, is Scotland's oldest university and where Prince William and Catherine Middleton famously met.</p>
<p><strong>Getting there:</strong> St Andrews is about 1.5 hours from Edinburgh by car. There's no direct train, but the X59 bus runs regularly from Edinburgh Bus Station (about 2 hours). Guided tours are available and often combine St Andrews with the fishing villages of the East Neuk of Fife.</p>

<h2>Stirling Castle & The Wallace Monument</h2>
<p>Stirling Castle is often described as Scotland's grandest castle — and many historians consider it more important than Edinburgh Castle. Perched on a volcanic crag overlooking the plain where the Battles of Stirling Bridge (1297) and Bannockburn (1314) were fought, Stirling Castle was the strategic key to controlling Scotland. The Great Hall, restored to its original golden-yellow render, is one of the finest medieval halls in Europe. The Royal Palace, built for James V, contains remarkable recreations of the original 16th-century interiors.</p>
<p>Nearby, the National Wallace Monument towers above the surrounding woodland on Abbey Craig — the hill from which William Wallace supposedly watched the English army approach before the Battle of Stirling Bridge. The climb to the top (246 steps) rewards you with panoramic views and a surprisingly moving exhibition about Wallace's life and Scotland's Wars of Independence. Wallace's actual sword — over 5 feet long — is displayed in the monument's Hall of Arms.</p>
<p><strong>Getting there:</strong> Stirling is just 50 minutes from Edinburgh by car or 50 minutes by train. Trains run frequently from Edinburgh Waverley to Stirling station, from where the castle is a 15-minute uphill walk.</p>

<h2>Rosslyn Chapel</h2>
<p>Rosslyn Chapel, about 7 miles south of Edinburgh city centre, is one of the most extraordinary buildings in Scotland. Founded in 1446 by William Sinclair, Earl of Orkney, this small chapel is covered in the most intricate stone carvings you'll ever see — hundreds of individual sculptures depicting biblical scenes, Green Men, angels, and mysterious symbols that have inspired centuries of speculation about connections to the Knights Templar and Freemasonry.</p>
<p>The chapel gained worldwide fame after featuring prominently in Dan Brown's novel The Da Vinci Code, but its appeal far transcends fiction. The quality of the stonework is genuinely breathtaking — every surface is carved with extraordinary detail, and the famous Apprentice Pillar (said to have been carved by an apprentice so skilled that his master killed him in jealousy) is a masterwork of medieval craftsmanship. The chapel took 40 years to build and was never completed — the foundations for the full collegiate church can still be seen in the grounds.</p>
<p><strong>Getting there:</strong> Rosslyn Chapel is just 25 minutes from Edinburgh by car or 40 minutes by bus (Lothian Bus 37 from Edinburgh city centre to Roslin village). It's easily combined with a visit to the surrounding Roslin Glen Country Park for a woodland walk.</p>

<h2>The Borders & Melrose Abbey</h2>
<p>The Scottish Borders — the rolling countryside between Edinburgh and England — is an underappreciated region of abbeys, rivers, and gentle hills. Melrose Abbey, founded in 1136 by Cistercian monks, is the finest ruined abbey in Scotland. Its delicate Gothic tracery and detailed carvings are extraordinary, and the heart of Robert the Bruce is believed to be buried beneath the east window (marked by a lead casket discovered in 1921).</p>
<p>The Borders are also Sir Walter Scott country — his grand house at Abbotsford, on the banks of the River Tweed, is a fascinating museum and one of Scotland's most important literary landmarks. The house is filled with Scott's enormous collection of historical artifacts, manuscripts, and curiosities. The Borders also offer excellent walking along the River Tweed and through the Eildon Hills.</p>
<p><strong>Getting there:</strong> Melrose is about an hour from Edinburgh by car. The Borders Railway runs from Edinburgh Waverley to Tweedbank (near Melrose) in about an hour — a scenic journey through the Midlothian countryside.</p>

<h2>North Berwick & The East Lothian Coast</h2>
<p>For something closer and more relaxed, the seaside town of North Berwick on the East Lothian coast is a delightful day trip — especially in good weather. The town has a beautiful harbour, two sandy beaches, excellent seafood, and views of the Bass Rock — a volcanic island that is home to the world's largest colony of northern gannets (over 150,000 birds). Boat trips to the Bass Rock run from the Scottish Seabird Centre on the harbour.</p>
<p>The surrounding East Lothian coast offers beautiful cliff-top walks, the dramatic ruins of Tantallon Castle (perched on the edge of a cliff facing the Bass Rock), and some of Scotland's best links golf courses, including Muirfield. The area is sometimes called Scotland's Golf Coast.</p>
<p><strong>Getting there:</strong> North Berwick is just 30 minutes from Edinburgh by train — one of the easiest and most rewarding day trips from the city. Trains run frequently from Edinburgh Waverley.</p>

<h2>Practical Tips for Day Trips</h2>
<ul>
<li><strong>Organised vs self-drive:</strong> For the Highlands and Loch Ness, an organised tour is recommended — the distances are long and the roads can be challenging. For St Andrews, Stirling, Rosslyn Chapel, and North Berwick, self-drive or public transport work well.</li>
<li><strong>Book Highland tours in advance:</strong> Popular routes to Loch Ness and Glencoe sell out, especially in summer. Book at least a week ahead.</li>
<li><strong>Pack layers and rain gear:</strong> Scottish weather is unpredictable, especially in the Highlands. A waterproof jacket and warm layers are essential for any day trip, any time of year.</li>
<li><strong>Start early:</strong> Highland day trips typically depart Edinburgh around 7:30–8am. Getting an early start maximises your time at each stop and avoids returning in the dark during winter months.</li>
<li><strong>Combine wisely:</strong> Stirling Castle and The Kelpies (massive horse-head sculptures near Falkirk) combine well. St Andrews and the East Neuk fishing villages work beautifully together. Rosslyn Chapel pairs with a walk in Roslin Glen or a visit to a Borders abbey.</li>
</ul>
      `,
    },
    {
      slug: "best-time-to-visit-edinburgh",
      title: "Best Time to Visit Edinburgh: Festival Season & Beyond",
      excerpt:
        "From the world-famous Fringe and Hogmanay to quiet spring mornings on Arthur's Seat — a month-by-month guide to visiting Edinburgh at the right time for you.",
      date: "February 10, 2026",
      isoDate: "2026-02-10",
      category: "Travel Planning",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
      content: `
<p>Edinburgh is a city that transforms with the seasons. In August, it becomes the cultural capital of the world as the Festival Fringe takes over every venue, street corner, and converted basement. At Hogmanay, it hosts one of the planet's largest New Year celebrations. In spring, the Royal Botanic Garden bursts into bloom while the city enjoys long, light evenings. And in the depths of winter, the castle glows above Christmas markets while the Old Town's cobblestone closes feel more atmospheric than ever. The best time to visit Edinburgh depends entirely on what you're looking for.</p>

<h2>August: Festival Season</h2>
<p>August is Edinburgh's defining month. The city hosts not one but several major festivals simultaneously: the Edinburgh Festival Fringe (the world's largest arts festival), the Edinburgh International Festival (curated, world-class performances), the Royal Edinburgh Military Tattoo (spectacular military performances against the backdrop of the castle), the Edinburgh International Book Festival, and the Edinburgh Art Festival. Together, they attract over 4 million visits and transform the city into a non-stop celebration of human creativity.</p>

<h3>The Fringe</h3>
<p>The Edinburgh Festival Fringe is the beating heart of August. With over 3,500 shows across 300+ venues — from grand theatres to converted vans — there is literally something for everyone. Comedy, theatre, dance, music, spoken word, children's shows, and the entirely uncategorisable fill every available space. The Royal Mile becomes a constant parade of performers, flyerers, and audiences, and the atmosphere is electric. Many of the world's most famous comedians — including Peter Kay, Russell Howard, and Phoebe Waller-Bridge — got their big breaks at the Fringe.</p>
<p>Tickets range from free to about £30, with the majority of shows priced between £8 and £18. The Fringe programme is published in June, and the best shows sell out quickly — but spontaneous discovery is part of the magic. Take a chance on something you've never heard of; the Fringe rewards the adventurous.</p>

<h3>The Military Tattoo</h3>
<p>The Royal Edinburgh Military Tattoo is performed on the Esplanade of Edinburgh Castle every evening in August (except Sundays). Featuring military bands, pipe bands, dancers, and performers from around the world against the floodlit castle backdrop, it's one of the most spectacular live events in the world. The Tattoo has been running since 1950 and sells out months in advance — book as early as possible.</p>

<h3>Practical Considerations for August</h3>
<p>August is Edinburgh's busiest and most expensive month. Accommodation prices can triple, and the most central hotels and apartments book out months ahead. Restaurants are packed, and the Royal Mile is thronged with visitors. If you're visiting in August, book accommodation and key shows well in advance, be prepared for crowds, and embrace the chaos. The atmosphere is utterly unlike any other time of year.</p>

<h2>December–January: Hogmanay & Christmas</h2>
<p>Edinburgh's Christmas market opens in late November, filling Princes Street Gardens with stalls, rides, and an ice rink beneath the castle. The mulled wine, German sausages, and twinkling lights create a festive atmosphere, though the market has grown somewhat commercial in recent years. The Old Town, by contrast, feels genuinely magical in winter — dark closes lit by lamplight, cosy pubs with roaring fires, and the castle silhouetted against the winter sky.</p>

<h3>Hogmanay</h3>
<p>Edinburgh's Hogmanay is one of the world's great New Year celebrations. The three-day festival includes a torchlight procession through the Old Town (30 December), a massive street party on Princes Street with live music stages and fireworks (31 December), and the legendary 'Loony Dook' — a mass New Year's Day swim in the freezing waters of the Firth of Forth at South Queensferry.</p>
<p>The street party on Princes Street is ticketed and attracts around 80,000 people. The midnight fireworks over Edinburgh Castle are spectacular and visible from vantage points across the city. Hogmanay is deeply embedded in Scottish culture — the tradition of 'first-footing' (visiting neighbours after midnight, ideally bearing whisky, coal, and shortbread) remains alive in Edinburgh homes.</p>

<h2>Spring (March–May): Edinburgh in Bloom</h2>
<p>Spring is one of Edinburgh's best-kept secrets. The city is quieter than summer, accommodation is more affordable, and the days are lengthening rapidly. By May, Edinburgh enjoys over 17 hours of daylight, and the quality of light on the sandstone buildings is beautiful.</p>
<p>The Royal Botanic Garden is particularly spectacular in spring, with rhododendrons, azaleas, and cherry blossoms in full bloom. Arthur's Seat is carpeted in gorse (the yellow-flowering shrub with a distinctive coconut scent), and the Water of Leith walkway is lush and green. Easter often brings the Edinburgh Science Festival — a two-week celebration of science and technology with events for all ages.</p>
<p>Temperatures in spring range from about 5°C to 14°C. Rain is possible at any time, but there are also stretches of glorious sunshine. Pack layers and a waterproof jacket, and you'll be well-prepared.</p>

<h2>Summer (June–July): Long Days & Pre-Festival Calm</h2>
<p>June and July offer Edinburgh at its most pleasant — long days (sunset after 10pm at midsummer), warm temperatures (15–20°C on a good day), and the pre-festival calm before August's mayhem. It's an excellent time to enjoy the city's outdoor spaces: climb Arthur's Seat, walk the coastline to Cramond Island (accessible at low tide), or cycle the Water of Leith trail.</p>
<p>The Edinburgh International Film Festival typically takes place in June, and various smaller festivals and events run throughout the summer. Accommodation is more reasonably priced than August, and the city feels lively without being overwhelmed. This is arguably the best time for a first visit to Edinburgh if you want to explore the city itself without the festival crowds.</p>

<h2>Autumn (September–November): Golden Light & Quiet Streets</h2>
<p>September is a hidden gem — the festival crowds have departed, the weather is often still warm, and the city feels like it belongs to Edinburgh residents again. The autumn colours in the Botanic Garden, Dean Village, and Holyrood Park are beautiful, and there's a particular quality of golden light in September and October that makes Edinburgh's stone buildings glow.</p>
<p>October brings the Scottish International Storytelling Festival — a fitting event for a city built on stories. Halloween in Edinburgh is atmospheric, and November's dimming light gives the Old Town its most brooding, Gothic character. Temperatures drop through autumn (from about 14°C in September to 5°C in November), and the days shorten noticeably. Pack warm layers and embrace the moody atmosphere.</p>

<h2>Winter (January–February): Off-Season Edinburgh</h2>
<p>January and February are Edinburgh's quietest months. The festival decorations have come down, the tourists have departed, and the city settles into its winter rhythm. This is Edinburgh at its most atmospheric for those who appreciate a city in its quiet moments — empty closes, misty mornings on Arthur's Seat, warm pubs with no queues, and museums you can explore in peace.</p>
<p>The downside is the weather: short days (just 7 hours of daylight in December), cold temperatures (0–5°C), frequent rain, and occasional snow. But for budget travellers and those who prefer to avoid crowds, winter offers the lowest accommodation prices, no queues at attractions, and an Edinburgh that feels genuinely local.</p>

<h2>Month-by-Month Summary</h2>
<ul>
<li><strong>January–February:</strong> Cold, dark, quiet. Lowest prices, no crowds. Best for budget travellers and atmosphere seekers.</li>
<li><strong>March–April:</strong> Spring arriving. Botanic Garden blooming. Edinburgh Science Festival. Increasingly pleasant.</li>
<li><strong>May:</strong> Long days, mild weather, affordable accommodation. Excellent time to visit.</li>
<li><strong>June–July:</strong> Best weather, longest days, pre-festival calm. Film festival. Ideal for outdoor activities.</li>
<li><strong>August:</strong> Festival season. The world's greatest arts festival. Expensive, crowded, absolutely unmissable if you love performance and culture.</li>
<li><strong>September:</strong> Post-festival calm, golden light, warm weather. A hidden gem.</li>
<li><strong>October–November:</strong> Autumn colours, storytelling festival, Halloween atmosphere. Cooler but characterful.</li>
<li><strong>December:</strong> Christmas markets, Hogmanay preparations, festive atmosphere. Cold but magical.</li>
</ul>

<h2>Final Advice</h2>
<p>There is no bad time to visit Edinburgh — each season offers something unique. If you want the full festival experience, August is essential. If you want the city at its most atmospheric and affordable, try late September or February. For the best weather with manageable crowds, May or June is ideal. And for one of the world's great New Year celebrations, Hogmanay is unforgettable. Whatever time you choose, Edinburgh will reward you.</p>
      `,
    },
  ],

  // ─── SEO ───
  seo: {
    titleTemplate: "%s | Explore Edinburgh",
    defaultTitle: "Explore Edinburgh — Discover Scotland's Capital",
    defaultDescription:
      "Discover the best things to do in Edinburgh. From Edinburgh Castle and the Royal Mile to whisky tastings, ghost tours, and the Highlands — curated experiences in Scotland's UNESCO World Heritage capital.",
    keywords: [
      "Edinburgh things to do",
      "Edinburgh Castle",
      "Royal Mile Edinburgh",
      "Edinburgh whisky tours",
      "Edinburgh ghost tours",
      "Edinburgh Festival Fringe",
      "Arthur's Seat Edinburgh",
      "Edinburgh day trips Highlands",
      "Edinburgh travel guide 2026",
      "Explore Edinburgh experiences",
    ],
  },

  // ─── Analytics seed data ───
  searchTerms: [
    "Edinburgh things to do",
    "Edinburgh Castle tickets",
    "Edinburgh whisky tasting",
    "Edinburgh ghost tour underground vaults",
    "Edinburgh Festival Fringe 2026",
    "Day trips from Edinburgh Highlands",
    "Royal Mile Edinburgh guide",
    "Arthur's Seat hike Edinburgh",
    "Edinburgh with kids family activities",
    "Best whisky bars Edinburgh",
  ],
};

export default edinburgh;
