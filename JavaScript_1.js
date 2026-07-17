const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* ----------------------------------------
   Dynamic footer year
   Keeps the copyright year current without
   having to hand-edit every page.
---------------------------------------- */
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* ----------------------------------------
   Hero background slider
   Cycles through each movie's backdrop.
   Change ROTATE_INTERVAL to slow/speed it up.
---------------------------------------- */
const heroBgs = document.querySelectorAll(".hero-bg");
const ROTATE_INTERVAL = 3500; // 3.5s, feel free to tweak between 3000-4000
let currentBg = 0;

if (heroBgs.length > 1) {
    setInterval(() => {
        heroBgs[currentBg].classList.remove("active");
        currentBg = (currentBg + 1) % heroBgs.length;
        heroBgs[currentBg].classList.add("active");
    }, ROTATE_INTERVAL);
}

/* ----------------------------------------
   Movie data
   Add trailer (YouTube embed URL), synopsis,
   rating and year for each movie here. This is
   also where you'll plug in real data from an
   API like TMDB later on.
---------------------------------------- */
const movieData = {
    backrooms: {
        title: "Backrooms",
        genre: "Sci-Fi/Horror",
        year: "2026",
        rating: "87% (RT)",
        synopsis: "A furniture store owner stumbles into a strange doorway in his shop's basement that leads to an endless maze of eerie, empty rooms. When he goes missing, his therapist has to step through the same door to find him.",
        trailer: "https://www.youtube.com/watch?v=0HjdiohVOik"
    },
    obsession: {
        title: "Obsession",
        genre: "Horror",
        year: "2026",
        rating: "94% (RT)",
        synopsis: "A lonely guy makes a wish for his crush to fall for him — and it works a little too well, twisting into a dangerous, violent fixation that puts everyone around her in danger.",
        trailer: "https://www.youtube.com/watch?v=uIvA2eHql08"
    },
    hailmary: {
        title: "Project Hail Mary",
        genre: "Sci-Fi",
        year: "2026",
        rating: "6.1 (IMDb)",
        synopsis: "A science teacher wakes up alone on a spacecraft with no memory of how he got there, and slowly pieces together that he's humanity's last hope for stopping an extinction-level threat to the sun.",
        trailer: "https://www.youtube.com/watch?v=m08TxIsFTRI"
    },
    supergirl: {
        title: "Supergirl",
        genre: "Action/Superhero",
        year: "2026",
        rating: "New release",
        synopsis: "Kara Zor-El steps out of her cousin's shadow in her own DCU adventure, balancing life on Earth with the weight of protecting it as one of the last survivors of Krypton.",
        trailer: "https://www.youtube.com/watch?v=PI9e89dyLt4"
    },
    odyssey: {
        title: "The Odyssey",
        genre: "Adventure/Action",
        year: "2026",
        rating: "7.0 (IMDb)",
        synopsis: "Christopher Nolan's telling of Homer's epic follows the king Odysseus on his long, dangerous journey home from war, facing monsters, gods, and his own limits along the way.",
        trailer: "https://www.youtube.com/watch?v=f_bKjZeJBBI"
    },
    minions: {
        title: "Minions & Monsters",
        genre: "Animation/Comedy",
        year: "2026",
        rating: "New release",
        synopsis: "The Despicable Me universe expands with a new animated chapter, bringing fresh characters and chaos to Gru's world of gadgets, schemes, and yellow mischief-makers.",
        trailer: "https://www.youtube.com/watch?v=ZSdOwt-G49w"
    },
    "beale-street": {
        title: "If Beale Street Could Talk",
        genre: "Romance, Drama, Period",
        year: "2018",
        rating: "7.4 (IMDb)",
        synopsis: "In 1970s Harlem, a young woman races to prove her fiance's innocence while carrying their first child, told with warm, intimate framing.",
        trailer: "https://www.youtube.com/watch?v=hGCvdlaWUF0"
    },
    "brooklyn": {
        title: "Brooklyn",
        genre: "Romance, Period Drama",
        year: "2015",
        rating: "7.5 (IMDb)",
        synopsis: "An Irish immigrant in 1950s New York falls for a local, then returns home and must choose between two lives and two loves.",
        trailer: "https://www.youtube.com/watch?v=15syDwC000k"
    },
    "malena": {
        title: "Malena",
        genre: "Romance, Drama, War",
        year: "2000",
        rating: "7.5 (IMDb)",
        synopsis: "In WWII Sicily, a teenage boy becomes fixated on the town's most beautiful woman, whose beauty draws both desire and cruelty.",
        trailer: "https://www.youtube.com/watch?v=SxqUoUvNBXY"
    },
    "handmaiden": {
        title: "The Handmaiden",
        genre: "Romance, Thriller, Psychological",
        year: "2016",
        rating: "8.1 (IMDb)",
        synopsis: "A con man hires a maid to defraud a wealthy heiress in 1930s Korea, but the women's bond defies every plan.",
        trailer: "https://www.youtube.com/watch?v=whldChqCsYk"
    },
    "her": {
        title: "Her",
        genre: "Romance, Sci-Fi, Drama",
        year: "2013",
        rating: "8.0 (IMDb)",
        synopsis: "A lonely writer falls in love with an advanced AI companion in a warm, near-future Los Angeles.",
        trailer: "https://www.youtube.com/watch?v=PJi2ZGBWQfU"
    },
    "ammonite": {
        title: "Ammonite",
        genre: "Romance, Period Drama, LGBTQ+",
        year: "2020",
        rating: "6.5 (IMDb)",
        synopsis: "In 1840s England, a paleontologist and a wealthy young woman develop a fierce connection on the wild Jurassic coast.",
        trailer: "https://www.youtube.com/watch?v=AnDhlrs3XVM"
    },
    "bright-star": {
        title: "Bright Star",
        genre: "Romance, Biographical, Period",
        year: "2009",
        rating: "7.3 (IMDb)",
        synopsis: "Poet John Keats and Fanny Brawne share a passionate, brief romance before his early death.",
        trailer: "https://www.youtube.com/watch?v=X0nx5Iu6KQo"
    },
    "loving": {
        title: "Loving",
        genre: "Romance, Biographical, Legal Drama",
        year: "2016",
        rating: "7.3 (IMDb)",
        synopsis: "The real-life story of Richard and Mildred Loving, whose interracial marriage challenged U.S. law.",
        trailer: "https://www.youtube.com/watch?v=bQMF5MSohPA"
    },
    "blue-warmest-color": {
        title: "Blue Is the Warmest Color",
        genre: "Romance, Drama, LGBTQ+",
        year: "2013",
        rating: "7.7 (IMDb)",
        synopsis: "A young French woman falls deeply in love with an older artist, told through raw, intimate close-ups.",
        trailer: "https://www.youtube.com/watch?v=uKmWi_T3QWE"
    },
    "crouching-tiger": {
        title: "Crouching Tiger, Hidden Dragon",
        genre: "Romance, Fantasy, Martial Arts",
        year: "2000",
        rating: "7.9 (IMDb)",
        synopsis: "A warrior and a noblewoman chase a stolen sword through floating bamboo forests and misty mountains, defying duty and love.",
        trailer: "https://www.youtube.com/watch?v=-jTdOdcMKoY"
    },
    "children-of-men": {
        title: "Children of Men",
        genre: "Action, Thriller, Dystopian",
        year: "2006",
        rating: "7.9 (IMDb)",
        synopsis: "In a world without children, a disillusioned activist protects the first pregnant woman in 18 years.",
        trailer: "https://www.youtube.com/watch?v=2VT2apoX90o"
    },
    "sicario": {
        title: "Sicario",
        genre: "Action, Crime, Thriller",
        year: "2015",
        rating: "7.6 (IMDb)",
        synopsis: "An idealistic FBI agent joins a task force fighting cartels at the U.S.-Mexico border.",
        trailer: "https://www.youtube.com/watch?v=Yfhu5JIxnZc"
    },
    "bumblebee": {
        title: "Bumblebee",
        genre: "Action, Sci-Fi, Family",
        year: "2018",
        rating: "6.8 (IMDb)",
        synopsis: "In 1987, a teenager finds and befriends the Autobot scout Bumblebee amid nostalgic California sun.",
        trailer: "https://www.youtube.com/watch?v=lcwmDAYt22k"
    },
    "atomic-blonde": {
        title: "Atomic Blonde",
        genre: "Action, Spy, Thriller",
        year: "2017",
        rating: "6.7 (IMDb)",
        synopsis: "A British spy navigates Cold War Berlin to recover a double-agent list through neon-lit rain and brutal fights.",
        trailer: "https://www.youtube.com/watch?v=IGDdv88uJsQ"
    },
    "raid-2": {
        title: "The Raid 2",
        genre: "Action, Crime, Martial Arts",
        year: "2014",
        rating: "7.9 (IMDb)",
        synopsis: "An undercover cop infiltrates Jakarta's criminal underworld in a brutal, kinetic thriller.",
        trailer: "https://www.youtube.com/watch?v=PQ6yUHHfZ04"
    },
    "casino-royale": {
        title: "Casino Royale",
        genre: "Action, Spy, Thriller",
        year: "2006",
        rating: "8.0 (IMDb)",
        synopsis: "James Bond's first mission pits him against a terrorist financier across crisp Venetian canals.",
        trailer: "https://www.youtube.com/watch?v=GV_18deeAXk"
    },
    "edge-of-tomorrow": {
        title: "Edge of Tomorrow",
        genre: "Action, Sci-Fi, Time Loop",
        year: "2014",
        rating: "7.9 (IMDb)",
        synopsis: "A soldier relives the same alien invasion battle over and over until he masters it.",
        trailer: "https://www.youtube.com/watch?v=yUmSVcttXnI"
    },
    "northman": {
        title: "The Northman",
        genre: "Action, Fantasy, Revenge",
        year: "2022",
        rating: "7.0 (IMDb)",
        synopsis: "A Viking prince avenges his father's murder across stark Icelandic vistas and fire-lit rituals.",
        trailer: "https://www.youtube.com/watch?v=oMSdFM12hOw"
    },
    "mad-max-fury-road": {
        title: "Mad Max: Fury Road",
        genre: "Action, Sci-Fi, Adventure",
        year: "2015",
        rating: "8.1 (IMDb)",
        synopsis: "A warrior and a drifter flee a tyrant across the desert in a visual masterpiece of practical stunts.",
        trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8"
    },
    "extraction": {
        title: "Extraction",
        genre: "Action, Thriller",
        year: "2020",
        rating: "6.7 (IMDb)",
        synopsis: "A mercenary races to rescue a drug lord's son through the dense, colorful streets of Dhaka.",
        trailer: "https://www.youtube.com/watch?v=L6P3nI6VnlY"
    },
    "gravity": {
        title: "Gravity",
        genre: "Sci-Fi, Thriller, Space",
        year: "2013",
        rating: "7.7 (IMDb)",
        synopsis: "Two astronauts are stranded alone in orbit after debris destroys their shuttle.",
        trailer: "https://www.youtube.com/watch?v=OiTiKOy59o4"
    },
    "dune-2021": {
        title: "Dune",
        genre: "Sci-Fi, Epic, Fantasy",
        year: "2021",
        rating: "8.0 (IMDb)",
        synopsis: "A noble family fights for control of the desert planet Arrakis amid vast dunes and brutalist architecture.",
        trailer: "https://www.youtube.com/watch?v=n9xhJrPXop4"
    },
    "arrival": {
        title: "Arrival",
        genre: "Sci-Fi, Drama, First Contact",
        year: "2016",
        rating: "7.9 (IMDb)",
        synopsis: "Linguists race to decode alien visitors' language before war breaks out.",
        trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g"
    },
    "annihilation": {
        title: "Annihilation",
        genre: "Sci-Fi, Horror, Mystery",
        year: "2018",
        rating: "6.8 (IMDb)",
        synopsis: "A team enters The Shimmer, a quarantined zone where nature mutates in strange, iridescent ways.",
        trailer: "https://www.youtube.com/watch?v=89OP78l9oF0"
    },
    "under-the-skin": {
        title: "Under the Skin",
        genre: "Sci-Fi, Horror, Mystery",
        year: "2013",
        rating: "6.3 (IMDb)",
        synopsis: "An alien lures men in Scotland into a void in this eerie, minimalist thriller.",
        trailer: "https://www.youtube.com/watch?v=J7bAZCOk0Sc"
    },
    "ready-player-one": {
        title: "Ready Player One",
        genre: "Sci-Fi, Adventure, Action",
        year: "2018",
        rating: "7.3 (IMDb)",
        synopsis: "Gamers race for control of a vast virtual world in a neon-soaked, kaleidoscopic adventure.",
        trailer: "https://www.youtube.com/watch?v=cSp1dM2Vj48"
    },
    "tron-legacy": {
        title: "Tron: Legacy",
        genre: "Sci-Fi, Action, Adventure",
        year: "2010",
        rating: "6.8 (IMDb)",
        synopsis: "A teen enters a digital realm to find his father amid glowing circuits and sleek neon grids.",
        trailer: "https://www.youtube.com/watch?v=P78pl1FUXfA"
    },
    "solaris": {
        title: "Solaris",
        genre: "Sci-Fi, Drama, Psychological",
        year: "1972",
        rating: "6.4 (IMDb)",
        synopsis: "A psychologist on a space station orbiting a sentient ocean confronts his dead wife's ghost.",
        trailer: "https://www.youtube.com/watch?v=rvm7WMbXfeY"
    },
    "stalker": {
        title: "Stalker",
        genre: "Sci-Fi, Drama, Mystery",
        year: "1979",
        rating: "8.1 (IMDb)",
        synopsis: "A guide leads two men through a forbidden zone where wishes come true.",
        trailer: "https://www.youtube.com/watch?v=YuOnfQd-aTw"
    },
    "the-creator": {
        title: "The Creator",
        genre: "Sci-Fi, Action, Drama",
        year: "2023",
        rating: "7.0 (IMDb)",
        synopsis: "A soldier hunts the AI architect behind a superweapon through lush, futuristic jungle metropolises.",
        trailer: "https://www.youtube.com/watch?v=ex3C1-5Dhb8"
    },
    "lighthouse": {
        title: "The Lighthouse",
        genre: "Horror, Psychological, Thriller",
        year: "2019",
        rating: "7.4 (IMDb)",
        synopsis: "Two lighthouse keepers on a remote island descend into madness, shot in stark black-and-white.",
        trailer: "https://www.youtube.com/watch?v=Hyag7lR8CPA"
    },
    "blackcoats-daughter": {
        title: "The Blackcoat's Daughter",
        genre: "Horror, Supernatural, Psychological",
        year: "2015",
        rating: "5.9 (IMDb)",
        synopsis: "Two girls are stranded at a boarding school over winter break as quiet dread builds.",
        trailer: "https://www.youtube.com/watch?v=pRc_-iK3RVE"
    },
    "innocents": {
        title: "The Innocents",
        genre: "Horror, Supernatural, Drama",
        year: "2021",
        rating: "7.7 (IMDb)",
        synopsis: "Neighborhood children discover hidden psychic powers under soft Nordic summer light.",
        trailer: "https://www.youtube.com/watch?v=LhERIj0ddXI"
    },
    "night-house": {
        title: "The Night House",
        genre: "Horror, Psychological, Supernatural",
        year: "2020",
        rating: "6.6 (IMDb)",
        synopsis: "A widow uncovers her husband's unsettling secrets at their lake house.",
        trailer: "https://www.youtube.com/watch?v=2Tshycci2ZA"
    },
    "under-the-shadow": {
        title: "Under the Shadow",
        genre: "Horror, Supernatural, War",
        year: "2016",
        rating: "6.7 (IMDb)",
        synopsis: "In 1980s Tehran, a mother and daughter are haunted as missiles fall outside.",
        trailer: "https://www.youtube.com/watch?v=G_ATX4C8Pmw"
    },
    "girl-walks-home-alone": {
        title: "A Girl Walks Home Alone at Night",
        genre: "Horror, Vampire, Western",
        year: "2014",
        rating: "6.7 (IMDb)",
        synopsis: "A lonely vampire stalks an Iranian ghost town in stark, high-contrast black-and-white.",
        trailer: "https://www.youtube.com/watch?v=_YGmTdo3vuY"
    },
    "empty-man": {
        title: "The Empty Man",
        genre: "Horror, Supernatural, Mystery",
        year: "2020",
        rating: "6.8 (IMDb)",
        synopsis: "An ex-cop hunts a missing girl linked to a cult through misty mountains and surreal rituals.",
        trailer: "https://www.youtube.com/watch?v=tk6u9X1bW30"
    },
    "barbarian": {
        title: "Barbarian",
        genre: "Horror, Thriller, Psychological",
        year: "2022",
        rating: "7.0 (IMDb)",
        synopsis: "A woman rents an Airbnb and finds a terrifying secret in the basement.",
        trailer: "https://www.youtube.com/watch?v=Dr89pmKrqkI"
    },
    "pearl": {
        title: "Pearl",
        genre: "Horror, Period, Psychological",
        year: "2022",
        rating: "7.0 (IMDb)",
        synopsis: "A farm girl in 1918 dreams of stardom in a story that turns from vivid Technicolor to madness.",
        trailer: "https://www.youtube.com/watch?v=L5PW5r3pEOg"
    },
    "vast-of-night": {
        title: "The Vast of Night",
        genre: "Horror, Sci-Fi, Mystery",
        year: "2019",
        rating: "6.7 (IMDb)",
        synopsis: "A radio DJ and switchboard operator investigate strange sounds in 1950s New Mexico.",
        trailer: "https://www.youtube.com/watch?v=ZEiwpCJqMM0"
    },
    "jesse-james": {
        title: "The Assassination of Jesse James by the Coward Robert Ford",
        genre: "Crime, Western, Biographical",
        year: "2007",
        rating: "7.5 (IMDb)",
        synopsis: "The legendary outlaw's final days and his fatal betrayal, shot in golden prairie light.",
        trailer: "https://www.youtube.com/watch?v=R1vYGRFr-_c"
    },
    "zodiac": {
        title: "Zodiac",
        genre: "Crime, Thriller, True Story",
        year: "2007",
        rating: "7.7 (IMDb)",
        synopsis: "Journalists and detectives hunt the Zodiac Killer through rainy San Francisco nights.",
        trailer: "https://www.youtube.com/watch?v=f9cDKbmCD0o"
    },
    "memories-of-murder": {
        title: "Memories of Murder",
        genre: "Crime, Thriller, Mystery",
        year: "2003",
        rating: "8.1 (IMDb)",
        synopsis: "Two mismatched detectives hunt Korea's first serial killer across rural autumn fields.",
        trailer: "https://www.youtube.com/watch?v=0n_HQwQU8ls"
    },
    "the-town": {
        title: "The Town",
        genre: "Crime, Heist, Thriller",
        year: "2010",
        rating: "7.5 (IMDb)",
        synopsis: "A Boston thief falls for a bank hostage he kidnapped, set against gritty brick streets.",
        trailer: "https://www.youtube.com/watch?v=uAjECYnrYks"
    },
    "public-enemies": {
        title: "Public Enemies",
        genre: "Crime, Biographical, Gangster",
        year: "2009",
        rating: "7.0 (IMDb)",
        synopsis: "Bank robber John Dillinger's final year unfolds across Art Deco cities and night-time gunfights.",
        trailer: "https://www.youtube.com/watch?v=Ee92mDZu_PI"
    },
    "irishman": {
        title: "The Irishman",
        genre: "Crime, Biographical, Gangster",
        year: "2019",
        rating: "7.8 (IMDb)",
        synopsis: "A mob hitman recalls his life and the disappearance of Jimmy Hoffa.",
        trailer: "https://www.youtube.com/watch?v=WHXxVmeGQUc"
    },
    "nightcrawler": {
        title: "Nightcrawler",
        genre: "Crime, Thriller, Psychological",
        year: "2014",
        rating: "7.9 (IMDb)",
        synopsis: "A freelance cameraman chases violent news through the neon-lit streets of LA.",
        trailer: "https://www.youtube.com/watch?v=u1uP_8VJkDQ"
    },
    "departed": {
        title: "The Departed",
        genre: "Crime, Thriller, Gangster",
        year: "2006",
        rating: "8.5 (IMDb)",
        synopsis: "An undercover cop and a mob mole hunt each other through the gritty streets of Boston.",
        trailer: "https://www.youtube.com/watch?v=iojhqm0JTW4"
    },
    "casino": {
        title: "Casino",
        genre: "Crime, Drama, Gangster",
        year: "1995",
        rating: "8.2 (IMDb)",
        synopsis: "Mobsters run a Las Vegas casino amid dazzling neon and 70s glamour.",
        trailer: "https://www.youtube.com/watch?v=EJXDMwGWhoA"
    },
    "black-mass": {
        title: "Black Mass",
        genre: "Crime, Biographical, Gangster",
        year: "2015",
        rating: "6.9 (IMDb)",
        synopsis: "Boston mob boss Whitey Bulger's reign unfolds across gray winter cityscapes.",
        trailer: "https://www.youtube.com/watch?v=R_F-lVhSfx8"
    },
    "prisoners": {
        title: "Prisoners",
        genre: "Thriller, Crime, Mystery",
        year: "2013",
        rating: "8.1 (IMDb)",
        synopsis: "A father takes desperate action when his daughter vanishes, building crushing tension.",
        trailer: "https://www.youtube.com/watch?v=bpXfcTF6iVk"
    },
    "decision-to-leave": {
        title: "Decision to Leave",
        genre: "Thriller, Romance, Mystery",
        year: "2022",
        rating: "7.5 (IMDb)",
        synopsis: "A detective falls for the widow of a dead man he's investigating amid misty coastlines.",
        trailer: "https://www.youtube.com/watch?v=Bmoy73lhs-s"
    },
    "parasite": {
        title: "Parasite",
        genre: "Thriller, Dark Comedy, Drama",
        year: "2019",
        rating: "8.5 (IMDb)",
        synopsis: "A poor family cons their way into a wealthy home in a sharp visualization of class divides.",
        trailer: "https://www.youtube.com/watch?v=isOGD_7hNIY"
    },
    "burning": {
        title: "Burning",
        genre: "Thriller, Mystery, Psychological",
        year: "2018",
        rating: "7.5 (IMDb)",
        synopsis: "A young writer investigates a friend's wealthy acquaintance and his secret hobby.",
        trailer: "https://www.youtube.com/watch?v=oihHs2Errwk"
    },
    "prestige": {
        title: "The Prestige",
        genre: "Thriller, Mystery, Psychological",
        year: "2006",
        rating: "8.5 (IMDb)",
        synopsis: "Two rival magicians sabotage each other in Victorian London.",
        trailer: "https://www.youtube.com/watch?v=RLtaA9fFNXU"
    },
    "memento": {
        title: "Memento",
        genre: "Thriller, Mystery, Psychological",
        year: "2000",
        rating: "8.4 (IMDb)",
        synopsis: "A man with no short-term memory hunts his wife's killer through disjointed, fractured framing.",
        trailer: "https://www.youtube.com/watch?v=HDWylEQSwFo"
    },
    "mulholland-drive": {
        title: "Mulholland Drive",
        genre: "Thriller, Mystery, Psychological",
        year: "2001",
        rating: "7.9 (IMDb)",
        synopsis: "An amnesiac and an actress wander a dreamlike, surreal Los Angeles.",
        trailer: "https://www.youtube.com/watch?v=jbZJ487oJlY"
    },
    "gone-girl": {
        title: "Gone Girl",
        genre: "Thriller, Crime, Mystery",
        year: "2014",
        rating: "8.1 (IMDb)",
        synopsis: "A husband becomes a suspect when his wife vanishes from their polished suburban home.",
        trailer: "https://www.youtube.com/watch?v=2-_-1nJf8Vg"
    },
    "the-game": {
        title: "The Game",
        genre: "Thriller, Mystery, Psychological",
        year: "1997",
        rating: "7.7 (IMDb)",
        synopsis: "A wealthy banker joins a mysterious game that unravels his life.",
        trailer: "https://www.youtube.com/watch?v=nsKdR05ZsGE"
    },
    "roma": {
        title: "Roma",
        genre: "Documentary-Style Drama, Biographical",
        year: "2018",
        rating: "7.7 (IMDb)",
        synopsis: "A housekeeper cares for a family in 1970s Mexico City, shot in crisp black-and-white.",
        trailer: "https://www.youtube.com/watch?v=6BS27ngZtxg"
    },
    "free-solo": {
        title: "Free Solo",
        genre: "Documentary, Sports, Adventure",
        year: "2018",
        rating: "8.1 (IMDb)",
        synopsis: "The first free solo climb of El Capitan, captured in dizzying vertical shots.",
        trailer: "https://www.youtube.com/watch?v=urRVZ4SW7WU"
    },
    "our-planet": {
        title: "Our Planet",
        genre: "Documentary, Nature, Environment",
        year: "2019",
        rating: "9.3 (IMDb)",
        synopsis: "Stunning wildlife footage across ice, ocean, and forest, narrated by David Attenborough.",
        trailer: "https://www.youtube.com/watch?v=aETNYyrqNYE"
    },
    "man-on-wire": {
        title: "Man on Wire",
        genre: "Documentary, Biography, History",
        year: "2008",
        rating: "7.9 (IMDb)",
        synopsis: "Philippe Petit's 1974 high-wire walk between the Twin Towers, told with poetic reenactments.",
        trailer: "https://www.youtube.com/watch?v=Cz6oddi0mts"
    },
    "my-octopus-teacher": {
        title: "My Octopus Teacher",
        genre: "Documentary, Nature, Biography",
        year: "2020",
        rating: "8.1 (IMDb)",
        synopsis: "A filmmaker bonds with a wild octopus in the glowing kelp forests off South Africa.",
        trailer: "https://www.youtube.com/watch?v=3s0LTDhqe5A"
    },
    "the-rescue": {
        title: "The Rescue",
        genre: "Documentary, Thriller, Rescue",
        year: "2021",
        rating: "8.1 (IMDb)",
        synopsis: "The tense, immersive story of the 2018 Tham Luang cave rescue.",
        trailer: "https://www.youtube.com/results?search_query=the+rescue+trailer"
    },
    "wont-you-be-my-neighbor": {
        title: "Won't You Be My Neighbor?",
        genre: "Documentary, Biography, Culture",
        year: "2018",
        rating: "8.4 (IMDb)",
        synopsis: "A warm look at Fred Rogers' legacy and lasting kindness.",
        trailer: "https://www.youtube.com/watch?v=FhwktRDG_aQ"
    },
    "13th": {
        title: "13th",
        genre: "Documentary, History, Social Justice",
        year: "2016",
        rating: "8.2 (IMDb)",
        synopsis: "A sharp examination of mass incarceration's roots in the United States.",
        trailer: "https://www.youtube.com/watch?v=K6IXQbXPO3I"
    },
    "cobain-montage-of-heck": {
        title: "Cobain: Montage of Heck",
        genre: "Documentary, Biography, Music",
        year: "2015",
        rating: "7.6 (IMDb)",
        synopsis: "A raw look at Nirvana's Kurt Cobain through rare home movies and surreal animation.",
        trailer: "https://www.youtube.com/watch?v=DsB6SzPV9B0"
    },
    "senna": {
        title: "Senna",
        genre: "Documentary, Sports, Biography",
        year: "2010",
        rating: "8.6 (IMDb)",
        synopsis: "F1 legend Ayrton Senna's life, told through glowing race tracks and vintage cars.",
        trailer: "https://www.youtube.com/watch?v=_jMIULxyT4w"
    },
    "boy-and-the-heron": {
        title: "The Boy and the Heron",
        genre: "Animation, Fantasy, Adventure",
        year: "2023",
        rating: "7.5 (IMDb)",
        synopsis: "A grieving boy enters a spirit world rendered in painterly, hand-drawn detail.",
        trailer: "https://www.youtube.com/watch?v=658aukjP5G0"
    },
    "suzume": {
        title: "Suzume",
        genre: "Animation, Romance, Adventure",
        year: "2022",
        rating: "7.7 (IMDb)",
        synopsis: "A girl locks doors of disaster across Japan amid glowing skies and vivid seasons.",
        trailer: "https://www.youtube.com/watch?v=5pTcio2hTSw"
    },
    "wind-rises": {
        title: "The Wind Rises",
        genre: "Animation, Biographical, Drama",
        year: "2013",
        rating: "7.7 (IMDb)",
        synopsis: "Jiro Horikoshi designs airplanes and falls in love against soft, dreamlike cloudscapes.",
        trailer: "https://www.youtube.com/watch?v=RzSpDgiF5y8"
    },
    "princess-kaguya": {
        title: "The Tale of the Princess Kaguya",
        genre: "Animation, Fantasy, Folklore",
        year: "2013",
        rating: "7.9 (IMDb)",
        synopsis: "A bamboo cutter finds a tiny princess in a film that looks like moving ink-wash art.",
        trailer: "https://www.youtube.com/watch?v=W71mtorCZDw"
    },
    "wolfwalkers": {
        title: "Wolfwalkers",
        genre: "Animation, Fantasy, Adventure",
        year: "2020",
        rating: "7.8 (IMDb)",
        synopsis: "A hunter's daughter befriends a girl who turns into a wolf amid living forest tapestries.",
        trailer: "https://www.youtube.com/watch?v=d_Z_tybgPgg"
    },
    "secret-of-kells": {
        title: "The Secret of Kells",
        genre: "Animation, Fantasy, History",
        year: "2009",
        rating: "7.6 (IMDb)",
        synopsis: "A boy illuminates a sacred book amid Viking raids, in vivid stained-glass color.",
        trailer: "https://www.youtube.com/watch?v=7UuUOXfiz9Q"
    },
    "song-of-the-sea": {
        title: "Song of the Sea",
        genre: "Animation, Fantasy, Folklore",
        year: "2014",
        rating: "7.9 (IMDb)",
        synopsis: "A selkie child returns to the sea in a film full of swirling ocean blues and Irish folklore.",
        trailer: "https://www.youtube.com/watch?v=VrhoOzW8oF8"
    },
    "ponyo": {
        title: "Ponyo",
        genre: "Animation, Fantasy, Family",
        year: "2008",
        rating: "7.7 (IMDb)",
        synopsis: "A goldfish princess befriends a boy amid bright sunsets and rolling waves.",
        trailer: "https://www.youtube.com/watch?v=h6XP82TyFWw"
    },
    "howls-moving-castle": {
        title: "Howl's Moving Castle",
        genre: "Animation, Fantasy, Romance",
        year: "2004",
        rating: "8.2 (IMDb)",
        synopsis: "A cursed hatter travels with a wizard's walking castle through pastel skies and whimsical design.",
        trailer: "https://www.youtube.com/watch?v=iwROgK94zcM"
    },
    "spiderverse-across": {
        title: "Spider-Man: Across the Spider-Verse",
        genre: "Animation, Superhero, Sci-Fi",
        year: "2023",
        rating: "8.6 (IMDb)",
        synopsis: "Miles Morales leaps across wildly different visual universes in a genre-defining animation style.",
        trailer: "https://www.youtube.com/watch?v=cqGjhVJWtEg"
    },
    "lawrence-of-arabia": {
        title: "Lawrence of Arabia",
        genre: "Adventure, Epic, Biographical",
        year: "1962",
        rating: "8.3 (IMDb)",
        synopsis: "British officer T.E. Lawrence unites Arab tribes against the Ottoman Empire across vast Saharan dunes.",
        trailer: "https://www.youtube.com/watch?v=vOlRhGEhG7k"
    },
    "the-fall": {
        title: "The Fall",
        genre: "Adventure, Fantasy, Drama",
        year: "2006",
        rating: "7.9 (IMDb)",
        synopsis: "A paralyzed stuntman tells a hospitalized girl an epic fantasy tale, filmed across 28 countries with zero CGI.",
        trailer: "https://www.youtube.com/watch?v=OTn5XUFP_iA"
    },
    "life-of-pi": {
        title: "Life of Pi",
        genre: "Adventure, Survival, Fantasy",
        year: "2012",
        rating: "7.9 (IMDb)",
        synopsis: "A boy survives a shipwreck on a lifeboat with a Bengal tiger amid glowing oceans and surreal landscapes.",
        trailer: "https://www.youtube.com/watch?v=J5NsKV5r4vY"
    },
    "lost-city": {
        title: "The Lost City",
        genre: "Adventure, Comedy, Romance",
        year: "2022",
        rating: "6.2 (IMDb)",
        synopsis: "A reclusive romance novelist is kidnapped and dragged into a lush jungle quest.",
        trailer: "https://www.youtube.com/watch?v=nfKO9rYDmE8"
    },
    "cast-away": {
        title: "Cast Away",
        genre: "Adventure, Survival, Drama",
        year: "2000",
        rating: "7.8 (IMDb)",
        synopsis: "A FedEx executive washes up alone on a deserted island in a stark study of isolation.",
        trailer: "https://www.youtube.com/watch?v=qGuOZPwLayY"
    },
    "way-back": {
        title: "The Way Back",
        genre: "Adventure, Survival, Historical",
        year: "2010",
        rating: "6.8 (IMDb)",
        synopsis: "Seven prisoners escape a Siberian gulag and walk 4,000 miles across shifting, breathtaking terrain.",
        trailer: "https://www.youtube.com/watch?v=VzNJVSsjE-I"
    },
    "king-kong-2005": {
        title: "King Kong",
        genre: "Adventure, Fantasy, Monster",
        year: "2005",
        rating: "7.2 (IMDb)",
        synopsis: "A film crew travels to Skull Island and encounters the giant gorilla Kong amid mist-shrouded jungles.",
        trailer: "https://www.youtube.com/watch?v=1TSidCNA7mQ"
    },
    "1917": {
        title: "1917",
        genre: "Adventure, War, Historical",
        year: "2019",
        rating: "8.2 (IMDb)",
        synopsis: "Two WWI soldiers race across enemy territory to deliver a life-saving message in seamless long takes.",
        trailer: "https://www.youtube.com/watch?v=YqNYrYUiMfg"
    },
    "into-the-wild": {
        title: "Into the Wild",
        genre: "Adventure, Biographical, Survival",
        year: "2007",
        rating: "8.1 (IMDb)",
        synopsis: "A top graduate gives away his savings and hitchhikes into the Alaskan wilderness.",
        trailer: "https://www.youtube.com/watch?v=XZG1FzyB8DI"
    },
    "pans-labyrinth": {
        title: "Pan's Labyrinth",
        genre: "Adventure, Fantasy, Dark Drama",
        year: "2006",
        rating: "8.2 (IMDb)",
        synopsis: "In 1940s Spain, a girl enters a twisted magical labyrinth to prove her worth.",
        trailer: "https://www.youtube.com/watch?v=jVZRnnVSQ8k"
    },
    "grand-budapest-hotel": {
        title: "The Grand Budapest Hotel",
        genre: "Comedy, Adventure, Crime",
        year: "2014",
        rating: "8.1 (IMDb)",
        synopsis: "A legendary concierge and his young protege steal a priceless painting in 1930s Europe.",
        trailer: "https://www.youtube.com/watch?v=zru-1DbbcsA"
    },
    "amelie": {
        title: "Amelie",
        genre: "Comedy, Romance, Fantasy",
        year: "2001",
        rating: "8.3 (IMDb)",
        synopsis: "A shy Parisian waitress secretly orchestrates small miracles for others while searching for her own happiness.",
        trailer: "https://www.youtube.com/watch?v=HUECWi5pX7o"
    },
    "poor-things": {
        title: "Poor Things",
        genre: "Comedy, Drama, Sci-Fi",
        year: "2023",
        rating: "7.9 (IMDb)",
        synopsis: "A young woman brought back to life by a scientist explores the world in a surreal, vividly designed odyssey.",
        trailer: "https://www.youtube.com/watch?v=RlbR5N6veqw"
    },
    "o-brother": {
        title: "O Brother, Where Art Thou?",
        genre: "Comedy, Adventure, Musical",
        year: "2000",
        rating: "7.7 (IMDb)",
        synopsis: "Three escaped convicts chase treasure across Depression-era Mississippi in a sun-drenched fable.",
        trailer: "https://www.youtube.com/watch?v=3HnWeWcE5n8"
    },
    "hot-fuzz": {
        title: "Hot Fuzz",
        genre: "Comedy, Action, Crime",
        year: "2007",
        rating: "7.8 (IMDb)",
        synopsis: "A hyper-competent London cop is sent to a sleepy village hiding deadly secrets.",
        trailer: "https://www.youtube.com/watch?v=ayTnvVpj9t4"
    },
    "barbie": {
        title: "Barbie",
        genre: "Comedy, Fantasy, Adventure",
        year: "2023",
        rating: "6.8 (IMDb)",
        synopsis: "Barbie and Ken leave Barbieland for the real world in a burst of pastel dreamscapes.",
        trailer: "https://www.youtube.com/watch?v=pBk4NYhWNMM"
    },
    "moonrise-kingdom": {
        title: "Moonrise Kingdom",
        genre: "Comedy, Romance, Adventure",
        year: "2012",
        rating: "7.8 (IMDb)",
        synopsis: "Two 1960s pen-pals run away together on a New England island.",
        trailer: "https://www.youtube.com/watch?v=_eOI3AamSm8"
    },
    "princess-bride": {
        title: "The Princess Bride",
        genre: "Comedy, Adventure, Fantasy",
        year: "1987",
        rating: "8.0 (IMDb)",
        synopsis: "A farm boy, a princess, pirates, and a giant battle for love and revenge.",
        trailer: "https://www.youtube.com/results?search_query=the+princess+bride+trailer"
    },
    "birdman": {
        title: "Birdman",
        genre: "Comedy, Drama, Satire",
        year: "2014",
        rating: "7.7 (IMDb)",
        synopsis: "A washed-up superhero actor tries to mount a Broadway comeback in a seamless one-take illusion.",
        trailer: "https://www.youtube.com/watch?v=uJfLoE6hanc"
    },
    "what-we-do-in-the-shadows": {
        title: "What We Do in the Shadows",
        genre: "Comedy, Horror, Mockumentary",
        year: "2014",
        rating: "7.6 (IMDb)",
        synopsis: "Ancient vampires share a modern Wellington flat in this mockumentary full of Gothic-suburban irony.",
        trailer: "https://www.youtube.com/watch?v=IAZEWtyhpes"
    },
    "stardust": {
        title: "Stardust",
        genre: "Fantasy, Adventure, Romance",
        year: "2007",
        rating: "7.6 (IMDb)",
        synopsis: "A young man crosses into a magical realm to retrieve a fallen star.",
        trailer: "https://www.youtube.com/watch?v=-wwv427DAvA"
    },
    "everything-everywhere": {
        title: "Everything Everywhere All at Once",
        genre: "Fantasy, Action, Comedy",
        year: "2022",
        rating: "7.8 (IMDb)",
        synopsis: "A laundromat owner must save infinite parallel universes in a wildly inventive multiverse adventure.",
        trailer: "https://www.youtube.com/watch?v=wxN1T1uxQ2g"
    },
    "shape-of-water": {
        title: "The Shape of Water",
        genre: "Fantasy, Romance, Drama",
        year: "2017",
        rating: "7.3 (IMDb)",
        synopsis: "A mute cleaner falls for an aquatic creature held in a government lab.",
        trailer: "https://www.youtube.com/watch?v=XFYWazblaUA"
    },
    "narnia-lion-witch-wardrobe": {
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        genre: "Fantasy, Adventure, Family",
        year: "2005",
        rating: "6.9 (IMDb)",
        synopsis: "Four siblings step through a wardrobe into a frozen land ruled by an evil witch.",
        trailer: "https://www.youtube.com/watch?v=TeeUm92phIU"
    },
    "wicked-part-one": {
        title: "Wicked: Part One",
        genre: "Fantasy, Musical, Adventure",
        year: "2024",
        rating: "7.6 (IMDb)",
        synopsis: "The untold friendship between Elphaba and Glinda before Dorothy arrives in Oz.",
        trailer: "https://www.youtube.com/watch?v=6COmYeLsz4c"
    },
    "crimson-peak": {
        title: "Crimson Peak",
        genre: "Fantasy, Horror, Romance",
        year: "2015",
        rating: "6.5 (IMDb)",
        synopsis: "A young author marries into a crumbling English manor with a dark, bleeding secret.",
        trailer: "https://www.youtube.com/watch?v=vLWsNDZqXpo"
    },
    "300": {
        title: "300",
        genre: "Fantasy, Action, Epic",
        year: "2006",
        rating: "7.6 (IMDb)",
        synopsis: "300 Spartans hold off an empire at Thermopylae in stylized, comic-book contrast.",
        trailer: "https://www.youtube.com/watch?v=UrIbxk7idYA"
    },
    "tumbbad": {
        title: "Tumbbad",
        genre: "Fantasy, Horror, Mythology",
        year: "2018",
        rating: "8.2 (IMDb)",
        synopsis: "Three generations in a cursed Indian village chase endless gold from a forbidden god.",
        trailer: "https://www.youtube.com/watch?v=YGIcZrUBY0k"
    },
    "imaginarium-doctor-parnassus": {
        title: "The Imaginarium of Doctor Parnassus",
        genre: "Fantasy, Adventure, Mystery",
        year: "2009",
        rating: "6.8 (IMDb)",
        synopsis: "A traveling show leads audiences through a mirror into a world of pure imagination.",
        trailer: "https://www.youtube.com/watch?v=Iqe85ffv9-w"
    },
    "the-fountain": {
        title: "The Fountain",
        genre: "Fantasy, Drama, Adventure",
        year: "2006",
        rating: "7.2 (IMDb)",
        synopsis: "Three parallel stories, a conquistador, a scientist, and a space traveler, chase eternal life.",
        trailer: "https://www.youtube.com/watch?v=m8IlyFCbNZg"
    },
    "manchester-by-the-sea": {
        title: "Manchester by the Sea",
        genre: "Drama, Family",
        year: "2016",
        rating: "7.8 (IMDb)",
        synopsis: "A withdrawn handyman is forced to return to his hometown and confront old grief when he becomes guardian to his teenage nephew.",
        trailer: "https://www.youtube.com/watch?v=gsVoD0pTge0"
    },
    "whiplash": {
        title: "Whiplash",
        genre: "Drama, Music",
        year: "2014",
        rating: "8.5 (IMDb)",
        synopsis: "An ambitious young drummer pushes himself to the breaking point under the brutal mentorship of a ruthless music instructor.",
        trailer: "https://www.youtube.com/watch?v=7d_jQycdQGo"
    },
    "there-will-be-blood": {
        title: "There Will Be Blood",
        genre: "Drama, Period",
        year: "2007",
        rating: "8.2 (IMDb)",
        synopsis: "A ruthless silver miner turned oilman builds an empire in the California desert, driven by greed and contempt for those around him.",
        trailer: "https://www.youtube.com/watch?v=FeSLPELpMeM"
    },
    "green-mile": {
        title: "The Green Mile",
        genre: "Drama, Fantasy",
        year: "1999",
        rating: "8.6 (IMDb)",
        synopsis: "A death row prison guard in the 1930s discovers one of his inmates possesses an extraordinary, inexplicable gift.",
        trailer: "https://www.youtube.com/watch?v=Ki4haFrqSrw"
    },
    "12-angry-men": {
        title: "12 Angry Men",
        genre: "Drama, Legal",
        year: "1957",
        rating: "9.0 (IMDb)",
        synopsis: "A single holdout juror slowly convinces eleven others to reconsider the evidence in a murder trial on a sweltering afternoon.",
        trailer: "https://www.youtube.com/watch?v=TEN-2uTi2c0"
    },
    "moonlight": {
        title: "Moonlight",
        genre: "Drama, Coming-of-Age",
        year: "2016",
        rating: "7.4 (IMDb)",
        synopsis: "A young Black man's identity and sexuality are traced across three chapters of his life growing up in Miami.",
        trailer: "https://www.youtube.com/watch?v=9NJj12tJzqc"
    },
    "the-pianist": {
        title: "The Pianist",
        genre: "Drama, War, Biographical",
        year: "2002",
        rating: "8.5 (IMDb)",
        synopsis: "A Polish-Jewish pianist struggles to survive the destruction of the Warsaw ghetto during World War II.",
        trailer: "https://www.youtube.com/watch?v=BFwGqLa_oAo"
    },
    "marriage-story": {
        title: "Marriage Story",
        genre: "Drama, Romance",
        year: "2019",
        rating: "7.9 (IMDb)",
        synopsis: "A stage director and an actress navigate a painful coast-to-coast divorce that tests what's left of their family.",
        trailer: "https://www.youtube.com/watch?v=BHi-a1n8t7M"
    },
    "nomadland": {
        title: "Nomadland",
        genre: "Drama, Road Movie",
        year: "2020",
        rating: "7.3 (IMDb)",
        synopsis: "After losing everything in the Great Recession, a woman packs her van and sets off across the American West as a modern-day nomad.",
        trailer: "https://www.youtube.com/watch?v=6sxCFZ8_d84"
    },
    "12-years-a-slave": {
        title: "12 Years a Slave",
        genre: "Drama, Biographical, Period",
        year: "2013",
        rating: "8.1 (IMDb)",
        synopsis: "A free Black man in the pre-Civil War North is kidnapped and sold into slavery, fighting to survive and reclaim his life.",
        trailer: "https://www.youtube.com/watch?v=z02Ie8wKKRg"
    },
    "john-wick": {
        title: "John Wick",
        genre: "Action, Thriller",
        year: "2014",
        rating: "7.4 (IMDb)",
        synopsis: "A retired hitman seeks vengeance after thugs kill his dog and steal his car.",
        trailer: "https://www.youtube.com/watch?v=C0BMx-qxsP4"
    },
    "die-hard": {
        title: "Die Hard",
        genre: "Action, Thriller",
        year: "1988",
        rating: "8.2 (IMDb)",
        synopsis: "An NYPD cop battles terrorists who seize a Los Angeles skyscraper on Christmas Eve.",
        trailer: "https://www.youtube.com/watch?v=jaJuwKCmJbY"
    },
    "terminator-2": {
        title: "Terminator 2: Judgment Day",
        genre: "Action, Sci-Fi",
        year: "1991",
        rating: "8.6 (IMDb)",
        synopsis: "A reprogrammed Terminator protects a young boy from a deadlier, shape-shifting machine.",
        trailer: "https://www.youtube.com/watch?v=nGrW-OR2uDk"
    },
    "gladiator": {
        title: "Gladiator",
        genre: "Action, Drama, Epic",
        year: "2000",
        rating: "8.5 (IMDb)",
        synopsis: "A betrayed Roman general fights his way through the arena to avenge his family.",
        trailer: "https://www.youtube.com/watch?v=TcYIqlBihW4"
    },
    "the-matrix": {
        title: "The Matrix",
        genre: "Action, Sci-Fi",
        year: "1999",
        rating: "8.7 (IMDb)",
        synopsis: "A hacker discovers reality is a simulation and joins a rebellion against machine overlords.",
        trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
    },
    "heat": {
        title: "Heat",
        genre: "Action, Crime, Thriller",
        year: "1995",
        rating: "8.3 (IMDb)",
        synopsis: "A master thief and the detective hunting him circle each other across Los Angeles.",
        trailer: "https://www.youtube.com/watch?v=2GfZl4kuVNI"
    },
    "mission-impossible-fallout": {
        title: "Mission: Impossible - Fallout",
        genre: "Action, Spy",
        year: "2018",
        rating: "7.7 (IMDb)",
        synopsis: "An IMF agent races to stop stolen plutonium from reaching black-market extremists.",
        trailer: "https://www.youtube.com/watch?v=wb49-oV0F78"
    },
    "kill-bill-vol-1": {
        title: "Kill Bill: Vol. 1",
        genre: "Action, Revenge",
        year: "2003",
        rating: "8.2 (IMDb)",
        synopsis: "A former assassin wakes from a coma and hunts the squad that betrayed her.",
        trailer: "https://www.youtube.com/watch?v=7kSuas6mRpk"
    },
    "the-raid": {
        title: "The Raid: Redemption",
        genre: "Action, Martial Arts",
        year: "2011",
        rating: "7.6 (IMDb)",
        synopsis: "A SWAT team is trapped in a tower block run by a ruthless crime lord.",
        trailer: "https://www.youtube.com/watch?v=m6Q7KnXpNOg"
    },
    "speed": {
        title: "Speed",
        genre: "Action, Thriller",
        year: "1994",
        rating: "7.3 (IMDb)",
        synopsis: "A cop must keep a city bus above 50 mph or a bomb aboard will detonate.",
        trailer: "https://www.youtube.com/watch?v=8piqd2BWeGI"
    },
    "inglourious-basterds": {
        title: "Inglourious Basterds",
        genre: "Action, War",
        year: "2009",
        rating: "8.3 (IMDb)",
        synopsis: "A team of Jewish-American soldiers plots to end WWII by striking Nazi leadership in occupied France.",
        trailer: "https://www.youtube.com/watch?v=KnrRy6kSFF0"
    },
    "dredd": {
        title: "Dredd",
        genre: "Action, Sci-Fi",
        year: "2012",
        rating: "7.1 (IMDb)",
        synopsis: "A lawman and rookie psychic partner clear a mega-block ruled by a ruthless drug lord.",
        trailer: "https://www.youtube.com/watch?v=G-eI5oLlIeY"
    },
    "the-bourne-identity": {
        title: "The Bourne Identity",
        genre: "Action, Spy",
        year: "2002",
        rating: "7.9 (IMDb)",
        synopsis: "An amnesiac trained killer pieces together his identity while evading assassins sent to silence him.",
        trailer: "https://www.youtube.com/watch?v=xDn0Wno3Lss"
    },
    "logan": {
        title: "Logan",
        genre: "Action, Drama",
        year: "2017",
        rating: "8.1 (IMDb)",
        synopsis: "An aging Wolverine protects a young mutant girl while confronting his own mortality.",
        trailer: "https://www.youtube.com/watch?v=Div0iP65aZo"
    },
    "top-gun-maverick": {
        title: "Top Gun: Maverick",
        genre: "Action, Drama",
        year: "2022",
        rating: "8.2 (IMDb)",
        synopsis: "A veteran naval aviator trains a new generation of pilots for a near-impossible mission.",
        trailer: "https://www.youtube.com/watch?v=qSqVVswa420"
    },
    "the-avengers": {
        title: "The Avengers",
        genre: "Action, Sci-Fi, Superhero",
        year: "2012",
        rating: "8.0 (IMDb)",
        synopsis: "Earth's mightiest heroes assemble to stop a god from opening a portal for an alien invasion.",
        trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8"
    },
    "baby-driver": {
        title: "Baby Driver",
        genre: "Action, Crime, Music",
        year: "2017",
        rating: "7.6 (IMDb)",
        synopsis: "A young getaway driver with tinnitus plans one last heist to escape his criminal ties.",
        trailer: "https://www.youtube.com/watch?v=zTvJJnoWIPk"
    },
    "skyfall": {
        title: "Skyfall",
        genre: "Action, Spy",
        year: "2012",
        rating: "7.8 (IMDb)",
        synopsis: "James Bond returns to protect MI6 from a vengeful former agent targeting M.",
        trailer: "https://www.youtube.com/watch?v=6kw1UVovByw"
    },
    "the-dark-knight": {
        title: "The Dark Knight",
        genre: "Action, Crime, Superhero",
        year: "2008",
        rating: "9.0 (IMDb)",
        synopsis: "Batman faces the Joker, a chaos-driven criminal mastermind terrorizing Gotham City.",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
    },
    "mad-max-2": {
        title: "Mad Max 2: The Road Warrior",
        genre: "Action, Post-Apocalyptic",
        year: "1981",
        rating: "7.6 (IMDb)",
        synopsis: "A lone drifter defends a fuel refinery from a marauding gang in the wasteland.",
        trailer: "https://www.youtube.com/watch?v=UlwtiOyaoo0"
    },
    "indiana-jones-raiders": {
        title: "Raiders of the Lost Ark",
        genre: "Adventure, Action",
        year: "1981",
        rating: "8.4 (IMDb)",
        synopsis: "Archaeologist Indiana Jones races Nazis to find the legendary Ark of the Covenant.",
        trailer: "https://www.youtube.com/watch?v=0xQSIdSRlAk"
    },
    "jurassic-park": {
        title: "Jurassic Park",
        genre: "Adventure, Sci-Fi",
        year: "1993",
        rating: "8.2 (IMDb)",
        synopsis: "A theme park of cloned dinosaurs spirals into chaos when the power fails.",
        trailer: "https://www.youtube.com/watch?v=_jKEqDKpJLw"
    },
    "lord-of-the-rings-fellowship": {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        genre: "Adventure, Fantasy",
        year: "2001",
        rating: "8.9 (IMDb)",
        synopsis: "A hobbit and his companions set out to destroy a powerful ring before it falls into evil hands.",
        trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4"
    },
    "the-goonies": {
        title: "The Goonies",
        genre: "Adventure, Family",
        year: "1985",
        rating: "7.7 (IMDb)",
        synopsis: "A group of kids follow an old map to search for pirate treasure.",
        trailer: "https://www.youtube.com/watch?v=hJ2j4oWdQtU"
    },
    "the-revenant": {
        title: "The Revenant",
        genre: "Adventure, Survival",
        year: "2015",
        rating: "8.0 (IMDb)",
        synopsis: "A frontiersman left for dead crawls across the wilderness seeking revenge.",
        trailer: "https://www.youtube.com/watch?v=LoebZZ8K5N0"
    },
    "up": {
        title: "Up",
        genre: "Adventure, Animation",
        year: "2009",
        rating: "8.3 (IMDb)",
        synopsis: "An elderly widower ties balloons to his house and flies to South America with a stowaway scout.",
        trailer: "https://www.youtube.com/watch?v=HWEW_qTLSEE"
    },
    "life-aquatic": {
        title: "The Life Aquatic with Steve Zissou",
        genre: "Adventure, Comedy",
        year: "2004",
        rating: "7.3 (IMDb)",
        synopsis: "An eccentric oceanographer hunts the shark that killed his partner.",
        trailer: "https://www.youtube.com/watch?v=yh401Rmkq0o"
    },
    "call-of-the-wild": {
        title: "The Call of the Wild",
        genre: "Adventure, Family",
        year: "2020",
        rating: "6.6 (IMDb)",
        synopsis: "A domesticated dog is thrust into the Yukon wilderness and discovers his primal instincts.",
        trailer: "https://www.youtube.com/watch?v=5P8R2zAhEwg"
    },
    "treasure-of-sierra-madre": {
        title: "The Treasure of the Sierra Madre",
        genre: "Adventure, Western",
        year: "1948",
        rating: "8.2 (IMDb)",
        synopsis: "Three prospectors search for gold in the Mexican mountains, and greed slowly consumes them.",
        trailer: "https://www.youtube.com/watch?v=XZ8Q9mOYJgE"
    },
    "the-lost-world": {
        title: "The Lost World: Jurassic Park",
        genre: "Adventure, Sci-Fi",
        year: "1997",
        rating: "6.5 (IMDb)",
        synopsis: "A team returns to an island of dinosaurs, only to find poachers with their own agenda.",
        trailer: "https://www.youtube.com/watch?v=RxrvaneULkE"
    },
    "walter-mitty": {
        title: "The Secret Life of Walter Mitty",
        genre: "Adventure, Comedy, Drama",
        year: "2013",
        rating: "7.3 (IMDb)",
        synopsis: "A daydreaming photo editor embarks on a real-life globe-trotting adventure to find a missing negative.",
        trailer: "https://www.youtube.com/watch?v=QD6cy4PBQPI"
    },
    "moana": {
        title: "Moana",
        genre: "Adventure, Animation",
        year: "2016",
        rating: "7.6 (IMDb)",
        synopsis: "A Polynesian teenager sets sail across the ocean to save her island and find a demigod.",
        trailer: "https://www.youtube.com/watch?v=LKFuXETZUsI"
    },
    "jungle-book-2016": {
        title: "The Jungle Book",
        genre: "Adventure, Family",
        year: "2016",
        rating: "7.4 (IMDb)",
        synopsis: "A boy raised by wolves must find his place between the human world and the jungle.",
        trailer: "https://www.youtube.com/watch?v=T_EN03fJIyY"
    },
    "pirates-caribbean": {
        title: "Pirates of the Caribbean: The Curse of the Black Pearl",
        genre: "Adventure, Fantasy",
        year: "2003",
        rating: "8.0 (IMDb)",
        synopsis: "A blacksmith teams with an eccentric pirate to rescue a woman from cursed buccaneers.",
        trailer: "https://www.youtube.com/watch?v=naQr0uTrH_s"
    },
    "the-mummy-1999": {
        title: "The Mummy",
        genre: "Adventure, Fantasy",
        year: "1999",
        rating: "7.1 (IMDb)",
        synopsis: "Explorers accidentally awaken a cursed ancient priest while searching an Egyptian city of the dead.",
        trailer: "https://www.youtube.com/watch?v=f7oKxlaUBac"
    },
    "the-edge": {
        title: "The Edge",
        genre: "Adventure, Survival",
        year: "1997",
        rating: "6.8 (IMDb)",
        synopsis: "Two men stranded in the Alaskan wilderness must survive both the elements and a man-eating bear.",
        trailer: "https://www.youtube.com/watch?v=U0ZVuHntc-8"
    },
    "motorcycle-diaries": {
        title: "The Motorcycle Diaries",
        genre: "Adventure, Biographical",
        year: "2004",
        rating: "7.8 (IMDb)",
        synopsis: "A young Che Guevara and his friend journey across South America by motorcycle.",
        trailer: "https://www.youtube.com/watch?v=RWBsQArUkQY"
    },
    "wild": {
        title: "Wild",
        genre: "Adventure, Drama",
        year: "2014",
        rating: "7.1 (IMDb)",
        synopsis: "A grieving woman hikes over a thousand miles of the Pacific Crest Trail alone.",
        trailer: "https://www.youtube.com/watch?v=tn2-GSqPyl0"
    },
    "everest": {
        title: "Everest",
        genre: "Adventure, Survival",
        year: "2015",
        rating: "7.0 (IMDb)",
        synopsis: "Climbers on Mount Everest are caught in a catastrophic storm during their descent.",
        trailer: "https://www.youtube.com/watch?v=79Q2rrQlPW4"
    },
    "adventures-of-tintin": {
        title: "The Adventures of Tintin",
        genre: "Adventure, Animation",
        year: "2011",
        rating: "7.3 (IMDb)",
        synopsis: "A young reporter and his dog chase a treasure tied to a model ship's secret.",
        trailer: "https://www.youtube.com/watch?v=teyAfaZ1FwM"
    },
    "spirited-away": {
        title: "Spirited Away",
        genre: "Animation, Fantasy",
        year: "2001",
        rating: "8.6 (IMDb)",
        synopsis: "A girl wanders into a spirit world and must work in a bathhouse to save her parents.",
        trailer: "https://www.youtube.com/watch?v=ByXuk9QqQkk"
    },
    "toy-story": {
        title: "Toy Story",
        genre: "Animation, Comedy",
        year: "1995",
        rating: "8.3 (IMDb)",
        synopsis: "A cowboy doll's world is turned upside down when a new spaceman toy arrives.",
        trailer: "https://www.youtube.com/watch?v=v-PjgYDrg70"
    },
    "the-incredibles": {
        title: "The Incredibles",
        genre: "Animation, Action, Family",
        year: "2004",
        rating: "8.0 (IMDb)",
        synopsis: "A family of retired superheroes is drawn back into action to stop a vengeful villain.",
        trailer: "https://www.youtube.com/watch?v=-UaGUdNJdRQ"
    },
    "wall-e": {
        title: "WALL-E",
        genre: "Animation, Sci-Fi",
        year: "2008",
        rating: "8.4 (IMDb)",
        synopsis: "A lonely trash-compacting robot on an abandoned Earth falls for a sleek scanning probe.",
        trailer: "https://www.youtube.com/watch?v=CZ1CATNbXg0"
    },
    "inside-out": {
        title: "Inside Out",
        genre: "Animation, Family",
        year: "2015",
        rating: "8.1 (IMDb)",
        synopsis: "Five emotions inside a young girl's mind navigate her difficult move to a new city.",
        trailer: "https://www.youtube.com/watch?v=yRUAzGQ3nSY"
    },
    "coco": {
        title: "Coco",
        genre: "Animation, Family",
        year: "2017",
        rating: "8.4 (IMDb)",
        synopsis: "A boy is transported to the Land of the Dead and uncovers his family's hidden history.",
        trailer: "https://www.youtube.com/watch?v=xlnPHQ3TLX8"
    },
    "how-to-train-your-dragon": {
        title: "How to Train Your Dragon",
        genre: "Animation, Adventure",
        year: "2010",
        rating: "8.1 (IMDb)",
        synopsis: "A young Viking befriends the dragon he was raised to kill.",
        trailer: "https://www.youtube.com/watch?v=22w7z_lT6YM"
    },
    "finding-nemo": {
        title: "Finding Nemo",
        genre: "Animation, Adventure, Family",
        year: "2003",
        rating: "8.2 (IMDb)",
        synopsis: "A clownfish father crosses the ocean to find his missing son.",
        trailer: "https://www.youtube.com/watch?v=SPHfeNgogVs"
    },
    "shrek": {
        title: "Shrek",
        genre: "Animation, Comedy",
        year: "2001",
        rating: "7.9 (IMDb)",
        synopsis: "A grumpy ogre teams with a talking donkey to rescue a princess and reclaim his swamp.",
        trailer: "https://www.youtube.com/watch?v=CwXOrWvPBPk"
    },
    "kung-fu-panda": {
        title: "Kung Fu Panda",
        genre: "Animation, Comedy, Action",
        year: "2008",
        rating: "7.2 (IMDb)",
        synopsis: "An overweight panda is unexpectedly chosen as the prophesied Dragon Warrior.",
        trailer: "https://www.youtube.com/watch?v=NRc-ze7Wrxw"
    },
    "my-neighbor-totoro": {
        title: "My Neighbor Totoro",
        genre: "Animation, Fantasy, Family",
        year: "1988",
        rating: "8.1 (IMDb)",
        synopsis: "Two sisters befriend gentle forest spirits after moving to the countryside.",
        trailer: "https://www.youtube.com/watch?v=HaLISMAGdOE"
    },
    "princess-mononoke": {
        title: "Princess Mononoke",
        genre: "Animation, Fantasy",
        year: "1997",
        rating: "8.4 (IMDb)",
        synopsis: "A prince caught between forest gods and industrial humans searches for a way to end their war.",
        trailer: "https://www.youtube.com/watch?v=vf6c6n35wr4"
    },
    "akira": {
        title: "Akira",
        genre: "Animation, Sci-Fi",
        year: "1988",
        rating: "8.0 (IMDb)",
        synopsis: "A Tokyo biker gang member gains terrifying psychic powers after a secret military experiment.",
        trailer: "https://www.youtube.com/watch?v=nA8KmHC2Z-g"
    },
    "into-the-spider-verse": {
        title: "Spider-Man: Into the Spider-Verse",
        genre: "Animation, Superhero",
        year: "2018",
        rating: "8.4 (IMDb)",
        synopsis: "A teenager becomes Spider-Man and joins alternate-dimension counterparts to stop a dangerous experiment.",
        trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ&t=3s"
    },
    "the-lion-king": {
        title: "The Lion King",
        genre: "Animation, Family, Drama",
        year: "1994",
        rating: "8.5 (IMDb)",
        synopsis: "A young lion prince flees his kingdom after his father's death, only to learn what leadership truly means.",
        trailer: "https://www.youtube.com/watch?v=lFzVJEksoDY"
    },
    "zootopia": {
        title: "Zootopia",
        genre: "Animation, Comedy, Mystery",
        year: "2016",
        rating: "8.0 (IMDb)",
        synopsis: "A rookie rabbit officer teams with a con-artist fox to crack a case in a city of animals.",
        trailer: "https://www.youtube.com/watch?v=g9lmhBYB11U"
    },
    "ratatouille": {
        title: "Ratatouille",
        genre: "Animation, Comedy",
        year: "2007",
        rating: "8.1 (IMDb)",
        synopsis: "A rat with a gift for cooking dreams of becoming a chef in Paris.",
        trailer: "https://www.youtube.com/watch?v=NgsQ8mVkN8w"
    },
    "triplets-of-belleville": {
        title: "The Triplets of Belleville",
        genre: "Animation, Comedy",
        year: "2003",
        rating: "7.6 (IMDb)",
        synopsis: "An elderly woman and her dog cross the ocean to rescue her kidnapped cyclist grandson.",
        trailer: "https://www.youtube.com/watch?v=PZeWp1D8MlU"
    },
    "grave-of-the-fireflies": {
        title: "Grave of the Fireflies",
        genre: "Animation, War, Drama",
        year: "1988",
        rating: "8.5 (IMDb)",
        synopsis: "Two siblings struggle to survive in Japan during the final months of World War II.",
        trailer: "https://www.youtube.com/watch?v=4vPeTSRd580"
    },
    "persepolis": {
        title: "Persepolis",
        genre: "Animation, Biographical, Drama",
        year: "2007",
        rating: "8.0 (IMDb)",
        synopsis: "A girl comes of age in Iran during and after the Islamic Revolution.",
        trailer: "https://www.youtube.com/watch?v=NZ22VyjJ6n8"
    },
    "superbad": {
        title: "Superbad",
        genre: "Comedy",
        year: "2007",
        rating: "7.6 (IMDb)",
        synopsis: "Two high school best friends try to buy alcohol for a party before they head to separate colleges.",
        trailer: "https://www.youtube.com/watch?v=4eaZ_48ZYog"
    },
    "bridesmaids": {
        title: "Bridesmaids",
        genre: "Comedy",
        year: "2011",
        rating: "6.8 (IMDb)",
        synopsis: "A maid of honor's life unravels as she competes to plan the perfect wedding.",
        trailer: "https://www.youtube.com/watch?v=FNppLrmdyug"
    },
    "anchorman": {
        title: "Anchorman: The Legend of Ron Burgundy",
        genre: "Comedy",
        year: "2004",
        rating: "7.2 (IMDb)",
        synopsis: "A vain 1970s San Diego news anchor clashes with the network's first female co-anchor.",
        trailer: "https://www.youtube.com/watch?v=QvJ1K0_JzFI"
    },
    "groundhog-day": {
        title: "Groundhog Day",
        genre: "Comedy, Fantasy",
        year: "1993",
        rating: "8.0 (IMDb)",
        synopsis: "A cynical weatherman relives the same day over and over in a small town.",
        trailer: "https://www.youtube.com/watch?v=xmdXJ_1aGz0"
    },
    "the-hangover": {
        title: "The Hangover",
        genre: "Comedy",
        year: "2009",
        rating: "7.7 (IMDb)",
        synopsis: "Three friends must retrace their blackout night in Las Vegas to find the missing groom.",
        trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M"
    },
    "dumb-and-dumber": {
        title: "Dumb and Dumber",
        genre: "Comedy",
        year: "1994",
        rating: "7.3 (IMDb)",
        synopsis: "Two dimwitted friends road-trip across the country to return a briefcase full of money.",
        trailer: "https://www.youtube.com/watch?v=l13yPhimE3o"
    },
    "knives-out": {
        title: "Knives Out",
        genre: "Comedy, Mystery",
        year: "2019",
        rating: "7.9 (IMDb)",
        synopsis: "A detective investigates the death of a wealthy crime novelist surrounded by a scheming family.",
        trailer: "https://www.youtube.com/watch?v=qGqiHJTsRkQ"
    },
    "juno": {
        title: "Juno",
        genre: "Comedy, Drama",
        year: "2007",
        rating: "7.4 (IMDb)",
        synopsis: "A witty teenager navigates an unplanned pregnancy and finds adoptive parents for her child.",
        trailer: "https://www.youtube.com/watch?v=K0SKf0K3bxg"
    },
    "napoleon-dynamite": {
        title: "Napoleon Dynamite",
        genre: "Comedy",
        year: "2004",
        rating: "6.9 (IMDb)",
        synopsis: "An awkward teenager helps his friend run for class president in small-town Idaho.",
        trailer: "https://www.youtube.com/watch?v=ZHDi_AnqwN4"
    },
    "legally-blonde": {
        title: "Legally Blonde",
        genre: "Comedy",
        year: "2001",
        rating: "6.7 (IMDb)",
        synopsis: "A sorority sister enrolls at Harvard Law to win back her ex, and finds she's a natural.",
        trailer: "https://www.youtube.com/watch?v=vWOHwI_FgAo"
    },
    "mean-girls": {
        title: "Mean Girls",
        genre: "Comedy",
        year: "2004",
        rating: "7.1 (IMDb)",
        synopsis: "A homeschooled teenager navigates the brutal social hierarchy of an American high school.",
        trailer: "https://www.youtube.com/watch?v=fFtdbEgnUOk"
    },
    "the-truman-show": {
        title: "The Truman Show",
        genre: "Comedy, Drama",
        year: "1998",
        rating: "8.2 (IMDb)",
        synopsis: "A man discovers his entire life has been a nonstop, unwitting TV broadcast.",
        trailer: "https://www.youtube.com/watch?v=dlnmQbPGuls"
    },
    "borat": {
        title: "Borat",
        genre: "Comedy",
        year: "2006",
        rating: "7.3 (IMDb)",
        synopsis: "A Kazakh journalist travels across America, exposing prejudice through outrageous mockumentary encounters.",
        trailer: "https://www.youtube.com/watch?v=ZN-dGVbCjLI"
    },
    "clueless": {
        title: "Clueless",
        genre: "Comedy",
        year: "1995",
        rating: "6.9 (IMDb)",
        synopsis: "A wealthy, well-meaning Beverly Hills teenager plays matchmaker with mixed results.",
        trailer: "https://www.youtube.com/watch?v=Mgjwq1ZzdPQ"
    },
    "galaxy-quest": {
        title: "Galaxy Quest",
        genre: "Comedy, Sci-Fi",
        year: "1999",
        rating: "7.3 (IMDb)",
        synopsis: "Washed-up actors from a cancelled sci-fi show are mistaken for real heroes by an alien race.",
        trailer: "https://www.youtube.com/watch?v=4kIavuY5NXw"
    },
    "booksmart": {
        title: "Booksmart",
        genre: "Comedy",
        year: "2019",
        rating: "7.1 (IMDb)",
        synopsis: "Two overachieving best friends try to cram four years of fun into their last night before graduation.",
        trailer: "https://www.youtube.com/watch?v=VjGJm3wV5-I"
    },
    "the-nice-guys": {
        title: "The Nice Guys",
        genre: "Comedy, Crime",
        year: "2016",
        rating: "7.4 (IMDb)",
        synopsis: "A mismatched pair of private eyes investigate a missing girl and a conspiracy in 1970s LA.",
        trailer: "https://www.youtube.com/watch?v=GQR5zsLHbYw"
    },
    "game-night": {
        title: "Game Night",
        genre: "Comedy",
        year: "2018",
        rating: "6.9 (IMDb)",
        synopsis: "A couple's game night turns into a real kidnapping mystery they can't tell is staged or not.",
        trailer: "https://www.youtube.com/watch?v=qmxMAdV6s4U"
    },
    "mrs-doubtfire": {
        title: "Mrs. Doubtfire",
        genre: "Comedy, Family",
        year: "1993",
        rating: "7.1 (IMDb)",
        synopsis: "A divorced father disguises himself as an elderly housekeeper to stay close to his children.",
        trailer: "https://www.youtube.com/watch?v=3euGQ7-brs4"
    },
    "spinal-tap": {
        title: "This Is Spinal Tap",
        genre: "Comedy, Music",
        year: "1984",
        rating: "7.9 (IMDb)",
        synopsis: "A mockumentary follows a fading British rock band's disastrous American tour.",
        trailer: "https://www.youtube.com/watch?v=HsFm6Yk_HkE"
    },
    "the-godfather": {
        title: "The Godfather",
        genre: "Crime, Drama",
        year: "1972",
        rating: "9.2 (IMDb)",
        synopsis: "A mafia patriarch transfers control of his empire to his reluctant youngest son.",
        trailer: "https://www.youtube.com/watch?v=sY1S34973zA"
    },
    "pulp-fiction": {
        title: "Pulp Fiction",
        genre: "Crime, Drama",
        year: "1994",
        rating: "8.9 (IMDb)",
        synopsis: "The lives of two hitmen, a boxer, and a gangster's wife intertwine across interlocking Los Angeles stories.",
        trailer: "https://www.youtube.com/watch?v=5ZAhzsi1ybM"
    },
    "goodfellas": {
        title: "Goodfellas",
        genre: "Crime, Drama",
        year: "1990",
        rating: "8.7 (IMDb)",
        synopsis: "A young man rises through the ranks of the mob before it all comes crashing down.",
        trailer: "https://www.youtube.com/watch?v=2ilzidi_J8Q"
    },
    "no-country-for-old-men": {
        title: "No Country for Old Men",
        genre: "Crime, Thriller",
        year: "2007",
        rating: "8.1 (IMDb)",
        synopsis: "A hunter who stumbles on drug money is pursued by a relentless, remorseless killer.",
        trailer: "https://www.youtube.com/watch?v=38A__WT3-o0"
    },
    "the-usual-suspects": {
        title: "The Usual Suspects",
        genre: "Crime, Mystery",
        year: "1995",
        rating: "8.5 (IMDb)",
        synopsis: "A small-time con man recounts the events leading to a deadly heist gone wrong.",
        trailer: "https://www.youtube.com/watch?v=Q0eCiCinc4E"
    },
    "se7en": {
        title: "Se7en",
        genre: "Crime, Thriller",
        year: "1995",
        rating: "8.6 (IMDb)",
        synopsis: "Two detectives hunt a serial killer who stages murders around the seven deadly sins.",
        trailer: "https://www.youtube.com/watch?v=znmZoVkCjpI"
    },
    "training-day": {
        title: "Training Day",
        genre: "Crime, Drama",
        year: "2001",
        rating: "7.7 (IMDb)",
        synopsis: "A rookie cop's first day with a corrupt narcotics detective spirals into a violent test of morals.",
        trailer: "https://www.youtube.com/watch?v=DXPJqRtkDP0"
    },
    "american-gangster": {
        title: "American Gangster",
        genre: "Crime, Drama",
        year: "2007",
        rating: "7.4 (IMDb)",
        synopsis: "A Harlem drug kingpin builds an empire while a determined detective closes in.",
        trailer: "https://www.youtube.com/watch?v=BV_nssS6Zkg"
    },
    "scarface": {
        title: "Scarface",
        genre: "Crime, Drama",
        year: "1983",
        rating: "8.3 (IMDb)",
        synopsis: "A Cuban immigrant claws his way to the top of Miami's cocaine trade.",
        trailer: "https://www.youtube.com/watch?v=cv276Wg3e7I"
    },
    "french-connection": {
        title: "The French Connection",
        genre: "Crime, Thriller",
        year: "1971",
        rating: "7.7 (IMDb)",
        synopsis: "Two NYPD detectives chase a massive heroin smuggling ring through New York City.",
        trailer: "https://www.youtube.com/watch?v=T76K3RxJY0A"
    },
    "drive": {
        title: "Drive",
        genre: "Crime, Thriller",
        year: "2011",
        rating: "7.8 (IMDb)",
        synopsis: "A Hollywood stunt driver moonlighting as a getaway wheelman gets pulled into a deadly heist.",
        trailer: "https://www.youtube.com/watch?v=KBiOF3y1W0Y"
    },
    "donnie-brasco": {
        title: "Donnie Brasco",
        genre: "Crime, Drama",
        year: "1997",
        rating: "7.7 (IMDb)",
        synopsis: "An undercover FBI agent infiltrates the mob and grows dangerously close to his target.",
        trailer: "https://www.youtube.com/watch?v=omIiE9KKj2o"
    },
    "the-untouchables": {
        title: "The Untouchables",
        genre: "Crime, Drama",
        year: "1987",
        rating: "7.9 (IMDb)",
        synopsis: "A federal agent assembles an incorruptible team to bring down Al Capone.",
        trailer: "https://www.youtube.com/watch?v=2cGat1xI8G8"
    },
    "reservoir-dogs": {
        title: "Reservoir Dogs",
        genre: "Crime, Thriller",
        year: "1992",
        rating: "8.3 (IMDb)",
        synopsis: "A jewelry heist goes wrong, and the surviving crooks suspect a police informant among them.",
        trailer: "https://www.youtube.com/watch?v=vayksn4Y93A"
    },
    "la-confidential": {
        title: "L.A. Confidential",
        genre: "Crime, Mystery",
        year: "1997",
        rating: "8.2 (IMDb)",
        synopsis: "Three LAPD officers investigate corruption tangled up in a multiple murder case.",
        trailer: "https://www.youtube.com/watch?v=6sOXrY5yV4g"
    },
    "in-bruges": {
        title: "In Bruges",
        genre: "Crime, Comedy, Drama",
        year: "2008",
        rating: "7.9 (IMDb)",
        synopsis: "Two hitmen hide out in a Belgian city after a job goes badly wrong.",
        trailer: "https://www.youtube.com/watch?v=p-gG2qo_l_A"
    },
    "history-of-violence": {
        title: "A History of Violence",
        genre: "Crime, Drama",
        year: "2005",
        rating: "7.3 (IMDb)",
        synopsis: "A small-town diner owner's violent past resurfaces after he becomes an unlikely local hero.",
        trailer: "https://www.youtube.com/watch?v=89oWVqLOXMw"
    },
    "eastern-promises": {
        title: "Eastern Promises",
        genre: "Crime, Drama",
        year: "2007",
        rating: "7.6 (IMDb)",
        synopsis: "A midwife gets entangled with the Russian mafia in London after a young girl's death.",
        trailer: "https://www.youtube.com/watch?v=ifilHp3_dWQ"
    },
    "the-gentlemen": {
        title: "The Gentlemen",
        genre: "Crime, Comedy",
        year: "2019",
        rating: "7.8 (IMDb)",
        synopsis: "An American expat tries to sell off his lucrative marijuana empire amid a web of scheming rivals.",
        trailer: "https://www.youtube.com/watch?v=2B0RpUGss2c"
    },
    "widows": {
        title: "Widows",
        genre: "Crime, Thriller",
        year: "2018",
        rating: "6.7 (IMDb)",
        synopsis: "Four women with nothing in common inherit a dangerous debt left by their dead husbands' heist crew.",
        trailer: "https://www.youtube.com/watch?v=nN2yBBSRC78"
    },
    "fahrenheit-911": {
        title: "Fahrenheit 9/11",
        genre: "Documentary, Political",
        year: "2004",
        rating: "7.5 (IMDb)",
        synopsis: "A look at the Bush administration's response to 9/11 and the lead-up to the Iraq War.",
        trailer: "https://www.youtube.com/watch?v=yg-be2r7ouc"
    },
    "blackfish": {
        title: "Blackfish",
        genre: "Documentary",
        year: "2013",
        rating: "8.0 (IMDb)",
        synopsis: "An investigation into the dangers of keeping orcas in captivity, centered on a SeaWorld trainer's death.",
        trailer: "https://www.youtube.com/watch?v=G93beiYiE74"
    },
    "inconvenient-truth": {
        title: "An Inconvenient Truth",
        genre: "Documentary, Environmental",
        year: "2006",
        rating: "7.4 (IMDb)",
        synopsis: "Al Gore presents the science and urgency of climate change through a widely toured slideshow.",
        trailer: "https://www.youtube.com/watch?v=CH-qO9RRchc"
    },
    "exit-through-gift-shop": {
        title: "Exit Through the Gift Shop",
        genre: "Documentary, Art",
        year: "2010",
        rating: "7.9 (IMDb)",
        synopsis: "An eccentric Frenchman's obsession with street art spirals into his own unlikely art career.",
        trailer: "https://www.youtube.com/watch?v=oHJBdDSTbLw"
    },
    "act-of-killing": {
        title: "The Act of Killing",
        genre: "Documentary",
        year: "2012",
        rating: "8.2 (IMDb)",
        synopsis: "Indonesian death squad leaders reenact their real-life killings for a bizarre self-made film.",
        trailer: "https://www.youtube.com/watch?v=6GiqYLrJBG0"
    },
    "supersize-me": {
        title: "Super Size Me",
        genre: "Documentary",
        year: "2004",
        rating: "7.2 (IMDb)",
        synopsis: "A filmmaker eats only McDonald's for 30 days to study the effects on his health.",
        trailer: "https://www.youtube.com/watch?v=as2zMlxeOkw"
    },
    "icarus": {
        title: "Icarus",
        genre: "Documentary, Sports",
        year: "2017",
        rating: "8.0 (IMDb)",
        synopsis: "An amateur cyclist's doping experiment uncovers Russia's state-sponsored Olympic doping scandal.",
        trailer: "https://www.youtube.com/watch?v=qXoRdSTrR-4"
    },
    "the-cove": {
        title: "The Cove",
        genre: "Documentary",
        year: "2009",
        rating: "8.4 (IMDb)",
        synopsis: "Activists expose a secretive dolphin hunt in a small Japanese fishing town.",
        trailer: "https://www.youtube.com/watch?v=jHaLJOYqvUQ"
    },
    "amy": {
        title: "Amy",
        genre: "Documentary, Music, Biographical",
        year: "2015",
        rating: "7.8 (IMDb)",
        synopsis: "An intimate look at singer Amy Winehouse's rise to fame and tragic decline.",
        trailer: "https://www.youtube.com/watch?v=_2yCIwmNuLE"
    },
    "citizenfour": {
        title: "Citizenfour",
        genre: "Documentary, Political",
        year: "2014",
        rating: "8.0 (IMDb)",
        synopsis: "Filmmakers document Edward Snowden's disclosure of mass NSA surveillance from a Hong Kong hotel room.",
        trailer: "https://www.youtube.com/watch?v=XiGwAvd5mvM"
    },
    "jiro-dreams-of-sushi": {
        title: "Jiro Dreams of Sushi",
        genre: "Documentary, Food",
        year: "2011",
        rating: "7.9 (IMDb)",
        synopsis: "An 85-year-old sushi master pursues perfection at his tiny, world-renowned Tokyo restaurant.",
        trailer: "https://www.youtube.com/watch?v=0VB_DrsHDQ0"
    },
    "the-social-dilemma": {
        title: "The Social Dilemma",
        genre: "Documentary",
        year: "2020",
        rating: "7.6 (IMDb)",
        synopsis: "Tech insiders warn about the addictive, manipulative design behind social media platforms.",
        trailer: "https://www.youtube.com/watch?v=uaaC57tcci0"
    },
    "crip-camp": {
        title: "Crip Camp",
        genre: "Documentary",
        year: "2020",
        rating: "7.7 (IMDb)",
        synopsis: "Disabled teens at a 1970s summer camp go on to spark the disability rights movement.",
        trailer: "https://www.youtube.com/watch?v=XRrIs22plz0"
    },
    "white-helmets": {
        title: "The White Helmets",
        genre: "Documentary, War",
        year: "2016",
        rating: "7.6 (IMDb)",
        synopsis: "Volunteer rescue workers pull civilians from bombed buildings during the Syrian civil war.",
        trailer: "https://www.youtube.com/watch?v=3wj4ncIEDxw"
    },
    "minding-the-gap": {
        title: "Minding the Gap",
        genre: "Documentary",
        year: "2018",
        rating: "8.0 (IMDb)",
        synopsis: "Three skateboarding friends confront trauma and adulthood in their declining Rust Belt hometown.",
        trailer: "https://www.youtube.com/watch?v=n5Vm_Awe3bw"
    },
    "tiger-king": {
        title: "Tiger King",
        genre: "Documentary, True Crime",
        year: "2020",
        rating: "7.5 (IMDb)",
        synopsis: "A feud between big cat breeders spirals into fraud, murder-for-hire plots, and prison.",
        trailer: "https://www.youtube.com/watch?v=acTdxsoa428"
    },
    "searching-for-sugar-man": {
        title: "Searching for Sugar Man",
        genre: "Documentary, Music",
        year: "2012",
        rating: "8.1 (IMDb)",
        synopsis: "Fans in South Africa search for a forgotten American musician rumored to have died decades ago.",
        trailer: "https://www.youtube.com/watch?v=QL5TffdOQ7g"
    },
    "the-imposter": {
        title: "The Imposter",
        genre: "Documentary, True Crime",
        year: "2012",
        rating: "7.6 (IMDb)",
        synopsis: "A young Frenchman convinces a grieving Texas family he is their long-missing son.",
        trailer: "https://www.youtube.com/watch?v=yDjpnpzw4GY"
    },
    "honeyland": {
        title: "Honeyland",
        genre: "Documentary",
        year: "2019",
        rating: "8.0 (IMDb)",
        synopsis: "A solitary beekeeper in North Macedonia tries to protect her traditional way of life from new neighbors.",
        trailer: "https://www.youtube.com/watch?v=B27ORUHlp6E"
    },
    "the-last-dance": {
        title: "The Last Dance",
        genre: "Documentary, Sports",
        year: "2020",
        rating: "9.1 (IMDb)",
        synopsis: "Michael Jordan and the Chicago Bulls' dynasty is chronicled through their historic final championship season.",
        trailer: "https://www.youtube.com/watch?v=N9Z9JtNcCWY"
    },
    "harry-potter-sorcerers-stone": {
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy, Family",
        year: "2001",
        rating: "7.6 (IMDb)",
        synopsis: "An orphaned boy discovers he's a wizard and enrolls at a magical boarding school.",
        trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo"
    },
    "lotr-return-of-the-king": {
        title: "The Lord of the Rings: The Return of the King",
        genre: "Fantasy, Adventure",
        year: "2003",
        rating: "9.0 (IMDb)",
        synopsis: "The final battle for Middle-earth unfolds as the ring bearer nears his destination.",
        trailer: "https://www.youtube.com/watch?v=r5X-hFf6Bwo"
    },
    "edward-scissorhands": {
        title: "Edward Scissorhands",
        genre: "Fantasy, Romance",
        year: "1990",
        rating: "7.9 (IMDb)",
        synopsis: "A gentle artificial man with scissors for hands falls for a suburban teenager.",
        trailer: "https://www.youtube.com/watch?v=TBHIO60whNw"
    },
    "big-fish": {
        title: "Big Fish",
        genre: "Fantasy, Drama",
        year: "2003",
        rating: "8.0 (IMDb)",
        synopsis: "A son tries to separate fact from tall tale in his dying father's fantastical life stories.",
        trailer: "https://www.youtube.com/watch?v=D0kiS4ROWkQ"
    },
    "willow": {
        title: "Willow",
        genre: "Fantasy, Adventure",
        year: "1988",
        rating: "6.4 (IMDb)",
        synopsis: "A reluctant farmer protects a magical baby destined to overthrow an evil queen.",
        trailer: "https://www.youtube.com/watch?v=uzn2izehkno"
    },
    "neverending-story": {
        title: "The NeverEnding Story",
        genre: "Fantasy, Family",
        year: "1984",
        rating: "7.5 (IMDb)",
        synopsis: "A boy reads himself into a magical world that is slowly being consumed by nothingness.",
        trailer: "https://www.youtube.com/watch?v=UeFni9dOv7c"
    },
    "labyrinth": {
        title: "Labyrinth",
        genre: "Fantasy, Musical",
        year: "1986",
        rating: "7.3 (IMDb)",
        synopsis: "A teenager must navigate a goblin king's maze to rescue her baby brother.",
        trailer: "https://www.youtube.com/watch?v=FVpaKT8YwJ8"
    },
    "beetlejuice": {
        title: "Beetlejuice",
        genre: "Fantasy, Comedy",
        year: "1988",
        rating: "7.5 (IMDb)",
        synopsis: "A recently deceased couple hires a rowdy poltergeist to scare off their home's new owners.",
        trailer: "https://www.youtube.com/watch?v=ickbVzajrk0"
    },
    "midsommar": {
        title: "Midsommar",
        genre: "Fantasy, Horror",
        year: "2019",
        rating: "7.1 (IMDb)",
        synopsis: "A grieving woman and her friends attend a Swedish midsummer festival that turns increasingly sinister.",
        trailer: "https://www.youtube.com/watch?v=xb-lGS5RV5A"
    },
    "doctor-strange": {
        title: "Doctor Strange",
        genre: "Fantasy, Superhero",
        year: "2016",
        rating: "7.5 (IMDb)",
        synopsis: "A brilliant surgeon studies mystic arts after a car accident ends his career.",
        trailer: "https://www.youtube.com/watch?v=h7gvFravm4A"
    },
    "the-green-knight": {
        title: "The Green Knight",
        genre: "Fantasy, Adventure",
        year: "2021",
        rating: "6.6 (IMDb)",
        synopsis: "A nephew of King Arthur embarks on a perilous quest to face a supernatural challenger.",
        trailer: "https://www.youtube.com/watch?v=sS6ksY8xWCY"
    },
    "corpse-bride": {
        title: "Corpse Bride",
        genre: "Fantasy, Animation",
        year: "2005",
        rating: "7.6 (IMDb)",
        synopsis: "A nervous groom accidentally marries a deceased bride and is pulled into the land of the dead.",
        trailer: "https://www.youtube.com/watch?v=AGACeWVdFqo"
    },
    "the-witch": {
        title: "The Witch",
        genre: "Fantasy, Horror",
        year: "2015",
        rating: "6.9 (IMDb)",
        synopsis: "A Puritan family's faith unravels after they're exiled to the edge of a sinister forest.",
        trailer: "https://www.youtube.com/watch?v=iQXmlf3Sefg"
    },
    "practical-magic": {
        title: "Practical Magic",
        genre: "Fantasy, Romance",
        year: "1998",
        rating: "5.9 (IMDb)",
        synopsis: "Two witch sisters navigate love and an old family curse in a small New England town.",
        trailer: "https://www.youtube.com/watch?v=R7uixLkpjPs"
    },
    "wizard-of-oz": {
        title: "The Wizard of Oz",
        genre: "Fantasy, Musical, Family",
        year: "1939",
        rating: "8.0 (IMDb)",
        synopsis: "A Kansas farm girl is swept into a magical land and must find her way home.",
        trailer: "https://www.youtube.com/watch?v=njdreZRjvpc"
    },
    "golden-compass": {
        title: "The Golden Compass",
        genre: "Fantasy, Adventure",
        year: "2007",
        rating: "5.9 (IMDb)",
        synopsis: "A girl sets out to rescue kidnapped children in a world of armored polar bears and daemons.",
        trailer: "https://www.youtube.com/watch?v=LHYoOGfBObU"
    },
    "maleficent": {
        title: "Maleficent",
        genre: "Fantasy, Family",
        year: "2014",
        rating: "6.9 (IMDb)",
        synopsis: "The story of Sleeping Beauty retold from the perspective of its infamous villain.",
        trailer: "https://www.youtube.com/watch?v=7Aw-XMYBeIQ"
    },
    "into-the-woods": {
        title: "Into the Woods",
        genre: "Fantasy, Musical",
        year: "2014",
        rating: "5.9 (IMDb)",
        synopsis: "Fairy tale characters' wishes intertwine and collide in a dark, musical retelling of classic stories.",
        trailer: "https://www.youtube.com/watch?v=7pjy5MK1X70"
    },
    "jumanji": {
        title: "Jumanji",
        genre: "Fantasy, Adventure, Family",
        year: "1995",
        rating: "6.9 (IMDb)",
        synopsis: "A magical board game unleashes jungle chaos on the players who dare to finish it.",
        trailer: "https://www.youtube.com/watch?v=eTjDsENDZ6s"
    },
    "spiderwick-chronicles": {
        title: "The Spiderwick Chronicles",
        genre: "Fantasy, Family",
        year: "2008",
        rating: "6.4 (IMDb)",
        synopsis: "Siblings discover a hidden guide to a world of faeries after moving into an old estate.",
        trailer: "https://www.youtube.com/watch?v=I99bp9SOhcQ"
    },
    "the-exorcist": {
        title: "The Exorcist",
        genre: "Horror",
        year: "1973",
        rating: "8.1 (IMDb)",
        synopsis: "A mother seeks the help of two priests when her daughter becomes possessed by a demonic entity.",
        trailer: "https://www.youtube.com/watch?v=BU2eYAO31Cc"
    },
    "hereditary": {
        title: "Hereditary",
        genre: "Horror",
        year: "2018",
        rating: "7.3 (IMDb)",
        synopsis: "A family unravels dark secrets following the death of their secretive grandmother.",
        trailer: "https://www.youtube.com/watch?v=V6wWKNij_1M"
    },
    "get-out": {
        title: "Get Out",
        genre: "Horror, Thriller",
        year: "2017",
        rating: "7.7 (IMDb)",
        synopsis: "A young Black man uncovers a sinister secret during a visit to his white girlfriend's family estate.",
        trailer: "https://www.youtube.com/watch?v=DzfpyUB60YY"
    },
    "the-shining": {
        title: "The Shining",
        genre: "Horror",
        year: "1980",
        rating: "8.4 (IMDb)",
        synopsis: "A writer's descent into madness threatens his family while they winter alone in a haunted hotel.",
        trailer: "https://www.youtube.com/watch?v=S014oGZiSdI"
    },
    "it-follows": {
        title: "It Follows",
        genre: "Horror",
        year: "2014",
        rating: "6.8 (IMDb)",
        synopsis: "A young woman is pursued by a shapeshifting entity passed on through sexual contact.",
        trailer: "https://www.youtube.com/watch?v=HkZYbOH0ujw"
    },
    "nightmare-on-elm-street": {
        title: "A Nightmare on Elm Street",
        genre: "Horror",
        year: "1984",
        rating: "7.4 (IMDb)",
        synopsis: "Teenagers are stalked in their dreams by a disfigured killer who can murder them in their sleep.",
        trailer: "https://www.youtube.com/watch?v=dCVh4lBfW-c"
    },
    "rosemarys-baby": {
        title: "Rosemary's Baby",
        genre: "Horror",
        year: "1968",
        rating: "8.0 (IMDb)",
        synopsis: "A pregnant woman grows suspicious that her neighbors have dark plans for her unborn child.",
        trailer: "https://www.youtube.com/watch?v=BjpA6IH_Skc"
    },
    "the-babadook": {
        title: "The Babadook",
        genre: "Horror",
        year: "2014",
        rating: "6.8 (IMDb)",
        synopsis: "A widowed mother and her troubled son are terrorized by a sinister creature from a pop-up book.",
        trailer: "https://www.youtube.com/watch?v=k5WQZzDRVtw"
    },
    "sinister": {
        title: "Sinister",
        genre: "Horror",
        year: "2012",
        rating: "6.8 (IMDb)",
        synopsis: "A true-crime writer discovers a box of home movies revealing a family's grisly murders.",
        trailer: "https://www.youtube.com/watch?v=_kbQAJR9YWQ"
    },
    "the-conjuring": {
        title: "The Conjuring",
        genre: "Horror",
        year: "2013",
        rating: "7.5 (IMDb)",
        synopsis: "Paranormal investigators help a family terrorized by a dark presence in their farmhouse.",
        trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o"
    },
    "talk-to-me": {
        title: "Talk to Me",
        genre: "Horror",
        year: "2023",
        rating: "7.0 (IMDb)",
        synopsis: "Teenagers use an embalmed hand to conjure spirits at parties, with terrifying consequences.",
        trailer: "https://www.youtube.com/watch?v=aLAKJu9aJys"
    },
    "suspiria": {
        title: "Suspiria",
        genre: "Horror",
        year: "1977",
        rating: "7.4 (IMDb)",
        synopsis: "An American ballet student uncovers a coven of witches running her prestigious European dance academy.",
        trailer: "https://www.youtube.com/watch?v=BY6QKRl56Ok"
    },
    "it-2017": {
        title: "It",
        genre: "Horror",
        year: "2017",
        rating: "7.3 (IMDb)",
        synopsis: "A group of kids in Derry, Maine face a shapeshifting evil that preys on children's fears.",
        trailer: "https://www.youtube.com/watch?v=xKJmEC5ieOk"
    },
    "scream": {
        title: "Scream",
        genre: "Horror",
        year: "1996",
        rating: "7.3 (IMDb)",
        synopsis: "A masked killer stalks a small town, targeting a teenager haunted by her mother's murder.",
        trailer: "https://www.youtube.com/watch?v=beToTslH17s"
    },
    "the-thing": {
        title: "The Thing",
        genre: "Horror, Sci-Fi",
        year: "1982",
        rating: "8.2 (IMDb)",
        synopsis: "An Antarctic research team is hunted by a shapeshifting alien that can imitate any of them.",
        trailer: "https://www.youtube.com/watch?v=5ftmr17M-a4"
    },
    "the-descent": {
        title: "The Descent",
        genre: "Horror",
        year: "2005",
        rating: "7.2 (IMDb)",
        synopsis: "A caving expedition turns deadly when the women discover they aren't alone in the cave system.",
        trailer: "https://www.youtube.com/watch?v=CSYg7Z1KS_I"
    },
    "train-to-busan": {
        title: "Train to Busan",
        genre: "Horror, Action",
        year: "2016",
        rating: "7.6 (IMDb)",
        synopsis: "Passengers on a train fight to survive as a zombie outbreak spreads car by car.",
        trailer: "https://www.youtube.com/watch?v=1ovgxN2VWNc"
    },
    "hush": {
        title: "Hush",
        genre: "Horror, Thriller",
        year: "2016",
        rating: "6.6 (IMDb)",
        synopsis: "A deaf writer living alone in the woods is stalked by a masked killer.",
        trailer: "https://www.youtube.com/watch?v=Q_P8WCbhC6s"
    },
    "invisible-man-2020": {
        title: "The Invisible Man",
        genre: "Horror, Thriller",
        year: "2020",
        rating: "7.1 (IMDb)",
        synopsis: "A woman fears her abusive ex, presumed dead, is secretly stalking her unseen.",
        trailer: "https://www.youtube.com/watch?v=WO_FJdiY9dA"
    },
    "men": {
        title: "Men",
        genre: "Horror",
        year: "2022",
        rating: "5.5 (IMDb)",
        synopsis: "A grieving woman's countryside retreat turns disturbing as the local men all seem eerily alike.",
        trailer: "https://www.youtube.com/watch?v=pt81CJcWZy8"
    },
    "casablanca": {
        title: "Casablanca",
        genre: "Romance, Drama",
        year: "1942",
        rating: "8.5 (IMDb)",
        synopsis: "An American expat must choose between his own safety and helping the woman he loves escape the Nazis.",
        trailer: "https://www.youtube.com/watch?v=BkL9l7qovsE"
    },
    "before-sunrise": {
        title: "Before Sunrise",
        genre: "Romance, Drama",
        year: "1995",
        rating: "8.1 (IMDb)",
        synopsis: "Two strangers fall for each other during one night wandering Vienna before parting ways.",
        trailer: "https://www.youtube.com/watch?v=6MUcuqbGTxc"
    },
    "eternal-sunshine": {
        title: "Eternal Sunshine of the Spotless Mind",
        genre: "Romance, Sci-Fi",
        year: "2004",
        rating: "8.3 (IMDb)",
        synopsis: "A heartbroken man undergoes a procedure to erase memories of his ex, only to relive them anew.",
        trailer: "https://www.youtube.com/watch?v=07-QBnEkgXU"
    },
    "the-notebook": {
        title: "The Notebook",
        genre: "Romance, Drama",
        year: "2004",
        rating: "7.8 (IMDb)",
        synopsis: "A poor young man and a wealthy young woman's summer romance is tested across a lifetime.",
        trailer: "https://www.youtube.com/watch?v=BjJcYdEOI0k"
    },
    "la-la-land": {
        title: "La La Land",
        genre: "Romance, Musical",
        year: "2016",
        rating: "8.0 (IMDb)",
        synopsis: "An aspiring actress and a jazz pianist chase their dreams and each other across Los Angeles.",
        trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8"
    },
    "pride-and-prejudice-2005": {
        title: "Pride & Prejudice",
        genre: "Romance, Period",
        year: "2005",
        rating: "7.8 (IMDb)",
        synopsis: "A spirited young woman clashes with a proud, wealthy suitor in Regency-era England.",
        trailer: "https://www.youtube.com/watch?v=Ur_DIHs92NM"
    },
    "call-me-by-your-name": {
        title: "Call Me by Your Name",
        genre: "Romance, LGBTQ+",
        year: "2017",
        rating: "7.9 (IMDb)",
        synopsis: "A teenager and his father's graduate student fall for each other during a summer in Italy.",
        trailer: "https://www.youtube.com/watch?v=Z9AYPxH5NTM"
    },
    "in-the-mood-for-love": {
        title: "In the Mood for Love",
        genre: "Romance, Drama",
        year: "2000",
        rating: "8.1 (IMDb)",
        synopsis: "Two neighbors grow close after discovering their spouses are having an affair together.",
        trailer: "https://www.youtube.com/watch?v=m8GuedsQnWQ"
    },
    "moonstruck": {
        title: "Moonstruck",
        genre: "Romance, Comedy",
        year: "1987",
        rating: "7.1 (IMDb)",
        synopsis: "A widow falls for her fiance's estranged younger brother in Brooklyn.",
        trailer: "https://www.youtube.com/watch?v=MN3sPq9RJKM"
    },
    "atonement": {
        title: "Atonement",
        genre: "Romance, Drama",
        year: "2007",
        rating: "7.8 (IMDb)",
        synopsis: "A childhood lie irrevocably tears apart two young lovers on the eve of World War II.",
        trailer: "https://www.youtube.com/watch?v=zRlkHu-R7yI"
    },
    "before-sunset": {
        title: "Before Sunset",
        genre: "Romance, Drama",
        year: "2004",
        rating: "8.1 (IMDb)",
        synopsis: "Two former lovers reunite in Paris nearly a decade after their first encounter.",
        trailer: "https://www.youtube.com/watch?v=u8AQg9Ngpxw"
    },
    "titanic": {
        title: "Titanic",
        genre: "Romance, Drama",
        year: "1997",
        rating: "7.9 (IMDb)",
        synopsis: "A penniless artist and a wealthy young woman fall in love aboard the doomed ocean liner.",
        trailer: "https://www.youtube.com/watch?v=I7c1etV7D7g"
    },
    "the-half-of-it": {
        title: "The Half of It",
        genre: "Romance, Comedy",
        year: "2020",
        rating: "7.0 (IMDb)",
        synopsis: "A shy student ghostwrites love letters for a jock while falling for the same girl herself.",
        trailer: "https://www.youtube.com/watch?v=B-yhF7IScUE"
    },
    "carol": {
        title: "Carol",
        genre: "Romance, LGBTQ+",
        year: "2015",
        rating: "7.2 (IMDb)",
        synopsis: "A department store clerk and an older, unhappily married woman fall in love in 1950s New York.",
        trailer: "https://www.youtube.com/watch?v=EH3zcuRQXNo"
    },
    "sense-and-sensibility": {
        title: "Sense and Sensibility",
        genre: "Romance, Period",
        year: "1995",
        rating: "7.7 (IMDb)",
        synopsis: "Two sisters navigate love and financial ruin in 18th-century England.",
        trailer: ""
    },
    "the-lobster": {
        title: "The Lobster",
        genre: "Romance, Sci-Fi, Comedy",
        year: "2015",
        rating: "7.1 (IMDb)",
        synopsis: "Single people must find a partner within 45 days or be transformed into an animal.",
        trailer: "https://www.youtube.com/watch?v=LTNZmOJxuAc"
    },
    "always-be-my-maybe": {
        title: "Always Be My Maybe",
        genre: "Romance, Comedy",
        year: "2019",
        rating: "6.5 (IMDb)",
        synopsis: "Childhood best friends reconnect as adults after years of estrangement.",
        trailer: "https://www.youtube.com/watch?v=iHBcWHY9lN4"
    },
    "anna-karenina-2012": {
        title: "Anna Karenina",
        genre: "Romance, Period, Drama",
        year: "2012",
        rating: "6.6 (IMDb)",
        synopsis: "A married aristocrat's affair with a cavalry officer scandalizes imperial Russian society.",
        trailer: "https://www.youtube.com/watch?v=Z-nyXX5zOLg"
    },
    "remains-of-the-day": {
        title: "The Remains of the Day",
        genre: "Romance, Drama",
        year: "1993",
        rating: "7.8 (IMDb)",
        synopsis: "A duty-bound butler reflects on the unspoken love he never allowed himself to pursue.",
        trailer: "https://www.youtube.com/watch?v=jALmEb72beg"
    },
    "affair-to-remember": {
        title: "An Affair to Remember",
        genre: "Romance, Drama",
        year: "1957",
        rating: "7.5 (IMDb)",
        synopsis: "Two engaged strangers fall for each other on a cruise and vow to reunite months later.",
        trailer: "https://www.youtube.com/watch?v=1qFSl4DiKXA"
    },
    "blade-runner": {
        title: "Blade Runner",
        genre: "Sci-Fi, Noir",
        year: "1982",
        rating: "8.1 (IMDb)",
        synopsis: "A bounty hunter tracks down rogue bioengineered replicants hiding in a dystopian Los Angeles.",
        trailer: "https://www.youtube.com/watch?v=eogpIG53Cis"
    },
    "interstellar": {
        title: "Interstellar",
        genre: "Sci-Fi, Drama",
        year: "2014",
        rating: "8.7 (IMDb)",
        synopsis: "A team of explorers travel through a wormhole to find a new home for humanity.",
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E&t=1s"
    },
    "inception": {
        title: "Inception",
        genre: "Sci-Fi, Action",
        year: "2010",
        rating: "8.8 (IMDb)",
        synopsis: "A thief who steals secrets through dream-sharing is tasked with planting an idea instead.",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    "2001-space-odyssey": {
        title: "2001: A Space Odyssey",
        genre: "Sci-Fi",
        year: "1968",
        rating: "8.3 (IMDb)",
        synopsis: "Astronauts and a sentient computer confront a mysterious alien artifact on a mission to Jupiter.",
        trailer: "https://www.youtube.com/watch?v=oR_e9y-bka0"
    },
    "ex-machina": {
        title: "Ex Machina",
        genre: "Sci-Fi, Thriller",
        year: "2014",
        rating: "7.7 (IMDb)",
        synopsis: "A programmer is invited to administer a Turing test to a strikingly human android.",
        trailer: "https://www.youtube.com/watch?v=sNExF5WYMaA"
    },
    "district-9": {
        title: "District 9",
        genre: "Sci-Fi, Action",
        year: "2009",
        rating: "7.9 (IMDb)",
        synopsis: "A bureaucrat tasked with relocating alien refugees begins to transform into one of them.",
        trailer: "https://www.youtube.com/watch?v=DyLUwOcR5pk"
    },
    "the-martian": {
        title: "The Martian",
        genre: "Sci-Fi, Drama",
        year: "2015",
        rating: "8.0 (IMDb)",
        synopsis: "An astronaut stranded on Mars must find a way to survive and signal Earth for rescue.",
        trailer: "https://www.youtube.com/watch?v=ej3ioOneTy8"
    },
    "moon": {
        title: "Moon",
        genre: "Sci-Fi, Drama",
        year: "2009",
        rating: "7.8 (IMDb)",
        synopsis: "A solitary astronaut nearing the end of a lunar mining contract makes a disturbing discovery.",
        trailer: "https://www.youtube.com/watch?v=WWoDBcSW4_c"
    },
    "blade-runner-2049": {
        title: "Blade Runner 2049",
        genre: "Sci-Fi, Noir",
        year: "2017",
        rating: "8.0 (IMDb)",
        synopsis: "A new blade runner uncovers a secret that could fracture what's left of society.",
        trailer: "https://www.youtube.com/watch?v=gCcx85zbxz4"
    },
    "minority-report": {
        title: "Minority Report",
        genre: "Sci-Fi, Thriller",
        year: "2002",
        rating: "7.6 (IMDb)",
        synopsis: "A police officer who arrests future murderers becomes the target of his own precrime unit.",
        trailer: "https://www.youtube.com/watch?v=lG7DGMgfOb8"
    },
    "looper": {
        title: "Looper",
        genre: "Sci-Fi, Action",
        year: "2012",
        rating: "7.4 (IMDb)",
        synopsis: "A hitman who kills targets sent from the future is confronted with his own older self.",
        trailer: "https://www.youtube.com/watch?v=2iQuhsmtfHw"
    },
    "fifth-element": {
        title: "The Fifth Element",
        genre: "Sci-Fi, Action",
        year: "1997",
        rating: "7.6 (IMDb)",
        synopsis: "A cab driver becomes humanity's last hope against an ancient evil threatening Earth.",
        trailer: "https://www.youtube.com/watch?v=pqs9ycvKfD8"
    },
    "contact": {
        title: "Contact",
        genre: "Sci-Fi, Drama",
        year: "1997",
        rating: "7.4 (IMDb)",
        synopsis: "A scientist makes first contact with an alien intelligence and travels through a mysterious device.",
        trailer: "https://www.youtube.com/watch?v=Q399v-pMG30"
    },
    "snowpiercer": {
        title: "Snowpiercer",
        genre: "Sci-Fi, Action",
        year: "2013",
        rating: "7.0 (IMDb)",
        synopsis: "The last survivors of a frozen Earth live aboard a perpetually moving train divided by class.",
        trailer: "https://www.youtube.com/watch?v=lGcJL6TG5cA"
    },
    "ai-artificial-intelligence": {
        title: "A.I. Artificial Intelligence",
        genre: "Sci-Fi, Drama",
        year: "2001",
        rating: "7.1 (IMDb)",
        synopsis: "An android boy longs to become real so his human mother will love him again.",
        trailer: "https://www.youtube.com/watch?v=_19pRsZRiz4"
    },
    "gattaca": {
        title: "Gattaca",
        genre: "Sci-Fi, Drama",
        year: "1997",
        rating: "7.8 (IMDb)",
        synopsis: "A genetically imperfect man assumes another's identity to pursue his dream of space travel.",
        trailer: "https://www.youtube.com/watch?v=NIIZ2P-fiyI"
    },
    "primer": {
        title: "Primer",
        genre: "Sci-Fi, Thriller",
        year: "2004",
        rating: "6.9 (IMDb)",
        synopsis: "Two engineers accidentally invent time travel and slowly lose control of its consequences.",
        trailer: "https://www.youtube.com/watch?v=-vD-yj9o664"
    },
    "the-terminator": {
        title: "The Terminator",
        genre: "Sci-Fi, Action",
        year: "1984",
        rating: "8.1 (IMDb)",
        synopsis: "A cyborg assassin is sent back in time to kill the future leader of the human resistance.",
        trailer: "https://www.youtube.com/watch?v=nGrW-OR2uDk"
    },
    "metropolis": {
        title: "Metropolis",
        genre: "Sci-Fi, Silent",
        year: "1927",
        rating: "8.3 (IMDb)",
        synopsis: "In a divided futuristic city, a wealthy man's son falls for a woman leading the oppressed workers.",
        trailer: ""
    },
    "close-encounters": {
        title: "Close Encounters of the Third Kind",
        genre: "Sci-Fi, Drama",
        year: "1977",
        rating: "7.6 (IMDb)",
        synopsis: "An ordinary man becomes obsessed with a strange vision after a UFO encounter.",
        trailer: "https://www.youtube.com/watch?v=dSpQ3G08k48"
    },
    "shutter-island": {
        title: "Shutter Island",
        genre: "Thriller, Mystery",
        year: "2010",
        rating: "8.2 (IMDb)",
        synopsis: "A U.S. Marshal investigates a psychiatric facility and begins to question his own sanity.",
        trailer: "https://www.youtube.com/watch?v=v8yrZSkKxTA"
    },
    "silence-of-the-lambs": {
        title: "The Silence of the Lambs",
        genre: "Thriller, Horror",
        year: "1991",
        rating: "8.6 (IMDb)",
        synopsis: "A young FBI trainee consults an imprisoned cannibal killer to catch another serial murderer.",
        trailer: "https://www.youtube.com/watch?v=6iB21hsprAQ"
    },
    "girl-with-dragon-tattoo": {
        title: "The Girl with the Dragon Tattoo",
        genre: "Thriller, Mystery",
        year: "2011",
        rating: "7.8 (IMDb)",
        synopsis: "A disgraced journalist and a hacker investigate a decades-old disappearance for a wealthy industrialist.",
        trailer: "https://www.youtube.com/watch?v=DqQe3OrsMKI"
    },
    "rear-window": {
        title: "Rear Window",
        genre: "Thriller, Mystery",
        year: "1954",
        rating: "8.5 (IMDb)",
        synopsis: "A wheelchair-bound photographer becomes convinced he's witnessed a murder across the courtyard.",
        trailer: "https://www.youtube.com/watch?v=m01YktiEZCw"
    },
    "vertigo": {
        title: "Vertigo",
        genre: "Thriller, Romance",
        year: "1958",
        rating: "8.3 (IMDb)",
        synopsis: "A former detective with a fear of heights becomes obsessed with a woman he's asked to follow.",
        trailer: "https://www.youtube.com/watch?v=Z5jvQwwHQNY"
    },
    "gone-baby-gone": {
        title: "Gone Baby Gone",
        genre: "Thriller, Crime",
        year: "2007",
        rating: "7.6 (IMDb)",
        synopsis: "Private investigators searching for a missing girl uncover a moral dilemma with no clean answer.",
        trailer: "https://www.youtube.com/watch?v=Wzh4Q88sthY"
    },
    "wind-river": {
        title: "Wind River",
        genre: "Thriller, Crime",
        year: "2017",
        rating: "7.7 (IMDb)",
        synopsis: "A wildlife tracker and a rookie FBI agent investigate a young woman's death on a Wyoming reservation.",
        trailer: "https://www.youtube.com/watch?v=W7V9Fsll5qM"
    },
    "the-vanishing": {
        title: "The Vanishing",
        genre: "Thriller, Mystery",
        year: "1988",
        rating: "7.7 (IMDb)",
        synopsis: "A man's obsessive search for his missing girlfriend leads him into the hands of her captor.",
        trailer: "https://www.youtube.com/watch?v=Q8PrhDPU-VU"
    },
    "oldboy": {
        title: "Oldboy",
        genre: "Thriller, Mystery",
        year: "2003",
        rating: "8.4 (IMDb)",
        synopsis: "A man imprisoned without explanation for fifteen years seeks brutal revenge after his sudden release.",
        trailer: "https://www.youtube.com/watch?v=2HkjrJ6IK5E"
    },
    "michael-clayton": {
        title: "Michael Clayton",
        genre: "Thriller, Legal",
        year: "2007",
        rating: "7.3 (IMDb)",
        synopsis: "A law firm fixer uncovers a massive corporate cover-up while facing his own crisis of conscience.",
        trailer: "https://www.youtube.com/watch?v=5kJRYBhG43Q"
    },
    "the-others": {
        title: "The Others",
        genre: "Thriller, Horror",
        year: "2001",
        rating: "7.6 (IMDb)",
        synopsis: "A woman and her light-sensitive children believe their isolated house is haunted.",
        trailer: "https://www.youtube.com/watch?v=C7pKqaPtMiA"
    },
    "fracture": {
        title: "Fracture",
        genre: "Thriller, Legal",
        year: "2007",
        rating: "7.2 (IMDb)",
        synopsis: "A prosecutor faces off against a man who confessed to shooting his wife, yet built the perfect defense.",
        trailer: ""
    },
    "side-effects": {
        title: "Side Effects",
        genre: "Thriller, Mystery",
        year: "2013",
        rating: "7.1 (IMDb)",
        synopsis: "A psychiatrist's prescription for a troubled patient spirals into a web of deception.",
        trailer: "https://www.youtube.com/watch?v=X5WgC_JthA4"
    },
    "talented-mr-ripley": {
        title: "The Talented Mr. Ripley",
        genre: "Thriller, Crime",
        year: "1999",
        rating: "7.4 (IMDb)",
        synopsis: "A con man ingratiates himself into a wealthy circle, with increasingly dangerous consequences.",
        trailer: "https://www.youtube.com/watch?v=h4e-Si4oGEw"
    },
    "the-machinist": {
        title: "The Machinist",
        genre: "Thriller, Psychological",
        year: "2004",
        rating: "7.7 (IMDb)",
        synopsis: "An insomniac factory worker's paranoia and guilt spiral as his body wastes away.",
        trailer: "https://www.youtube.com/watch?v=H0fuHY4U1UA"
    },
    "black-swan": {
        title: "Black Swan",
        genre: "Thriller, Psychological",
        year: "2010",
        rating: "8.0 (IMDb)",
        synopsis: "A ballerina's grip on reality unravels as she competes for the lead role in Swan Lake.",
        trailer: "https://www.youtube.com/watch?v=5jaI1XOB-bs"
    },
    "captain-phillips": {
        title: "Captain Phillips",
        genre: "Thriller, Drama",
        year: "2013",
        rating: "7.8 (IMDb)",
        synopsis: "A cargo ship captain and his crew are taken hostage by Somali pirates.",
        trailer: "https://www.youtube.com/watch?v=GEyM01dAxp8&t=23s"
    },
    "phone-booth": {
        title: "Phone Booth",
        genre: "Thriller",
        year: "2002",
        rating: "7.1 (IMDb)",
        synopsis: "A publicist is held hostage by an unseen sniper who threatens to shoot him if he hangs up.",
        trailer: "https://www.youtube.com/watch?v=gUqTCsjCsA8"
    },
    "panic-room": {
        title: "Panic Room",
        genre: "Thriller",
        year: "2002",
        rating: "6.8 (IMDb)",
        synopsis: "A mother and daughter hide in their home's safe room during a break-in, but the room isn't as safe as it seems.",
        trailer: "https://www.youtube.com/watch?v=sp2kKzrCm44"
    },
    "the-firm": {
        title: "The Firm",
        genre: "Thriller, Legal",
        year: "1993",
        rating: "6.9 (IMDb)",
        synopsis: "A young lawyer discovers his prestigious new firm is a front for organized crime.",
        trailer: "https://www.youtube.com/watch?v=FX3AXA3icR0"
    },
    "schindlers-list": {
        title: "Schindler's List",
        genre: "Drama, War, Biographical",
        year: "1993",
        rating: "9.0 (IMDb)",
        synopsis: "A German businessman gradually risks everything to save Jewish refugees during the Holocaust.",
        trailer: "https://www.youtube.com/watch?v=gG22XNhtnoY"
    },
    "shawshank-redemption": {
        title: "The Shawshank Redemption",
        genre: "Drama",
        year: "1994",
        rating: "9.3 (IMDb)",
        synopsis: "A wrongly convicted banker forms an unlikely friendship and quiet hope during decades in prison.",
        trailer: "https://www.youtube.com/watch?v=PLl99DlL6b4"
    },
    "forrest-gump": {
        title: "Forrest Gump",
        genre: "Drama, Comedy",
        year: "1994",
        rating: "8.8 (IMDb)",
        synopsis: "A kind-hearted, slow-witted man unwittingly influences several defining moments of 20th-century America.",
        trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg"
    },
    "fight-club": {
        title: "Fight Club",
        genre: "Drama, Thriller",
        year: "1999",
        rating: "8.8 (IMDb)",
        synopsis: "An insomniac office worker and a soap salesman form an underground fight club that spirals out of control.",
        trailer: "https://www.youtube.com/watch?v=qtRKdVHc-cE"
    },
    "good-will-hunting": {
        title: "Good Will Hunting",
        genre: "Drama",
        year: "1997",
        rating: "8.3 (IMDb)",
        synopsis: "A janitor with a genius-level intellect confronts his troubled past with the help of a therapist.",
        trailer: "https://www.youtube.com/watch?v=ReIJ1lbL-Q8"
    },
    "the-social-network": {
        title: "The Social Network",
        genre: "Drama, Biographical",
        year: "2010",
        rating: "7.7 (IMDb)",
        synopsis: "The founding of Facebook is traced through lawsuits, betrayal, and Mark Zuckerberg's rise.",
        trailer: "https://www.youtube.com/watch?v=lB95KLmpLR4"
    },
    "million-dollar-baby": {
        title: "Million Dollar Baby",
        genre: "Drama, Sports",
        year: "2004",
        rating: "8.1 (IMDb)",
        synopsis: "An aging boxing trainer reluctantly takes on a determined female fighter.",
        trailer: "https://www.youtube.com/watch?v=5_RsHRmIRBY"
    },
    "spotlight": {
        title: "Spotlight",
        genre: "Drama, Journalism",
        year: "2015",
        rating: "8.1 (IMDb)",
        synopsis: "Boston Globe reporters uncover a systemic cover-up of child abuse within the Catholic Church.",
        trailer: "https://www.youtube.com/watch?v=EwdCIpbTN5g"
    },
    "pursuit-of-happyness": {
        title: "The Pursuit of Happyness",
        genre: "Drama, Biographical",
        year: "2006",
        rating: "8.0 (IMDb)",
        synopsis: "A struggling salesman fights to build a better life for himself and his young son.",
        trailer: "https://www.youtube.com/watch?v=DMOBlEcRuw8"
    },
    "dead-poets-society": {
        title: "Dead Poets Society",
        genre: "Drama",
        year: "1989",
        rating: "8.1 (IMDb)",
        synopsis: "An unconventional English teacher inspires his prep school students to seize the day.",
        trailer: "https://www.youtube.com/watch?v=ye4KFyWu2do"
    },
    "a-beautiful-mind": {
        title: "A Beautiful Mind",
        genre: "Drama, Biographical",
        year: "2001",
        rating: "8.2 (IMDb)",
        synopsis: "A brilliant mathematician struggles with schizophrenia while making groundbreaking contributions to game theory.",
        trailer: "https://www.youtube.com/watch?v=9wZM7CQY130"
    },
    "requiem-for-a-dream": {
        title: "Requiem for a Dream",
        genre: "Drama",
        year: "2000",
        rating: "8.3 (IMDb)",
        synopsis: "Four intertwined lives spiral into addiction with devastating, hallucinatory consequences.",
        trailer: "https://www.youtube.com/watch?v=0nU7dC9bIDg"
    },
    "boyhood": {
        title: "Boyhood",
        genre: "Drama, Coming-of-Age",
        year: "2014",
        rating: "7.9 (IMDb)",
        synopsis: "A boy's childhood is filmed over twelve real years, tracing his growth into adulthood.",
        trailer: ""
    },
    "the-help": {
        title: "The Help",
        genre: "Drama, Period",
        year: "2011",
        rating: "8.1 (IMDb)",
        synopsis: "Black maids in 1960s Mississippi share their stories with a young white writer.",
        trailer: "https://www.youtube.com/watch?v=XOTkNsxhECY"
    },
    "hidden-figures": {
        title: "Hidden Figures",
        genre: "Drama, Biographical",
        year: "2016",
        rating: "7.8 (IMDb)",
        synopsis: "Three Black women mathematicians play crucial roles at NASA during the early space race.",
        trailer: "https://www.youtube.com/watch?v=5wfrDhgUMGI"
    },
    "theory-of-everything": {
        title: "The Theory of Everything",
        genre: "Drama, Biographical",
        year: "2014",
        rating: "7.7 (IMDb)",
        synopsis: "Physicist Stephen Hawking's early life, romance, and diagnosis with motor neuron disease are chronicled.",
        trailer: "https://www.youtube.com/watch?v=Salz7uGp72c"
    },
    "room": {
        title: "Room",
        genre: "Drama",
        year: "2015",
        rating: "8.1 (IMDb)",
        synopsis: "A mother and her young son held captive in a small room must adjust to life after their escape.",
        trailer: "https://www.youtube.com/watch?v=E_Ci-pAL4eE"
    },
    "amadeus": {
        title: "Amadeus",
        genre: "Drama, Biographical",
        year: "1984",
        rating: "8.4 (IMDb)",
        synopsis: "A rival composer's jealousy of Mozart's genius consumes him in imperial Vienna.",
        trailer: ""
    },
    "elephant-man": {
        title: "The Elephant Man",
        genre: "Drama, Biographical",
        year: "1980",
        rating: "8.2 (IMDb)",
        synopsis: "A severely disfigured man in Victorian London is exhibited as a curiosity before finding compassion.",
        trailer: "https://www.youtube.com/watch?v=ZQV9yySOmhs"
    },
    "kings-speech": {
        title: "The King's Speech",
        genre: "Drama, Biographical",
        year: "2010",
        rating: "8.0 (IMDb)",
        synopsis: "King George VI works with an unconventional speech therapist to overcome his stammer before WWII.",
        trailer: "https://www.youtube.com/watch?v=EcxBrTvLbBM"
    },
};

/* ----------------------------------------
   Movie details modal
---------------------------------------- */
const modal = document.getElementById("movieModal");
const modalClose = document.getElementById("modalClose");
const modalTrailer = document.getElementById("modalTrailer");
const modalTitle = document.getElementById("modalTitle");
const modalGenre = document.getElementById("modalGenre");
const modalYear = document.getElementById("modalYear");
const modalRating = document.getElementById("modalRating");
const modalSynopsis = document.getElementById("modalSynopsis");

/* Converts a YouTube "watch" or short URL into an embeddable
   /embed/ URL. Returns "" if it can't figure out a video ID
   (e.g. non-YouTube links), so callers can fall back gracefully. */
function getYouTubeEmbedUrl(url) {
    if (!url) return "";
    try {
        const u = new URL(url);
        if (u.pathname.startsWith("/embed/")) return url;
        let videoId = "";
        if (u.hostname.includes("youtu.be")) {
            videoId = u.pathname.slice(1);
        } else if (u.searchParams.has("v")) {
            videoId = u.searchParams.get("v");
        }
        return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    } catch (e) {
        return "";
    }
}

/* Fallback link shown next to the embedded trailer so that if the
   embed fails to play (embedding disabled, region lock, ad blockers,
   slow connection, etc.) the user can still open the trailer directly
   on YouTube in a new tab. Created dynamically so this works even if
   the HTML wasn't updated with a dedicated element. */
let modalTrailerLink = document.getElementById("modalTrailerLink");
if (!modalTrailerLink && modalTrailer) {
    modalTrailerLink = document.createElement("a");
    modalTrailerLink.id = "modalTrailerLink";
    modalTrailerLink.target = "_blank";
    modalTrailerLink.rel = "noopener noreferrer";
    modalTrailerLink.className = "modal-trailer-link";
    modalTrailerLink.innerHTML = `
        <i class="fab fa-youtube"></i>
        <span>Trailer won't play? Watch on YouTube</span>
        <i class="fas fa-arrow-up-right-from-square"></i>
    `;
    modalTrailer.insertAdjacentElement("afterend", modalTrailerLink);
}

/* Styling for the fallback button, injected once so this works even
   without touching the stylesheet. Safe to move into your CSS file
   later — just delete this block if you do. */
if (modalTrailerLink && !document.getElementById("modalTrailerLinkStyles")) {
    const style = document.createElement("style");
    style.id = "modalTrailerLinkStyles";
    style.textContent = `
        .modal-trailer-link {
            display: none;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: fit-content;
            max-width: 100%;
            margin: 12px auto 0;
            padding: 10px 18px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 999px;
            color: #f2f2f2;
            font-size: 0.85rem;
            font-weight: 500;
            text-decoration: none;
            white-space: nowrap;
            transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
        }
        .modal-trailer-link:hover {
            background: #e50914;
            border-color: #e50914;
            transform: translateY(-1px);
        }
        .modal-trailer-link i.fa-youtube {
            color: #ff0000;
            font-size: 1.1rem;
        }
        .modal-trailer-link:hover i.fa-youtube {
            color: #fff;
        }
        .modal-trailer-link i.fa-arrow-up-right-from-square {
            font-size: 0.75rem;
            opacity: 0.7;
        }
        .modal-trailer-missing {
            display: block;
            margin-top: 10px;
            padding: 20px;
            text-align: center;
            background: rgba(255,255,255,0.05);
            border-radius: 6px;
            color: #ccc;
            font-size: 0.9rem;
        }
    `;
    document.head.appendChild(style);
}

function openModal(movieId) {
    const movie = movieData[movieId];
    if (!movie || !modal) return;

    modalTitle.textContent = movie.title;
    modalGenre.textContent = movie.genre;
    modalYear.textContent = movie.year;
    modalRating.textContent = movie.rating;
    modalSynopsis.textContent = movie.synopsis;

    if (movie.trailer) {
        const embedUrl = getYouTubeEmbedUrl(movie.trailer);
        modalTrailer.src = embedUrl ? embedUrl + "?autoplay=1&mute=1" : "";
        if (modalTrailerLink) {
            modalTrailerLink.href = movie.trailer;
            // Always show the link alongside the embed. We can't reliably
            // detect an embed failure from JS (blocked embeds fail silently
            // due to cross-origin restrictions), so the safe bet is to
            // always offer the direct link as a backup.
            modalTrailerLink.style.display = "inline-flex";
        }
    } else {
        modalTrailer.src = "";
        if (modalTrailerLink) modalTrailerLink.style.display = "none";
    }

    modal.classList.add("active");
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    modalTrailer.src = ""; // stop playback
}

/* Reusable: wires up any .details-btn on the page (including ones
   added dynamically later, e.g. by the search results page). Safe
   to call more than once — skips buttons already wired up. */
function attachDetailsButtons() {
    document.querySelectorAll(".details-btn:not([data-wired])").forEach((btn) => {
        btn.setAttribute("data-wired", "true");
        btn.addEventListener("click", () => {
            const card = btn.closest(".card");
            const movieId = card.getAttribute("data-movie");
            openModal(movieId);
        });
    });
}

attachDetailsButtons();

if (modalClose) {
    modalClose.addEventListener("click", closeModal);
}

if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

/* ----------------------------------------
   Search
   Redirects to search-results.html with the
   typed query as a URL parameter.
---------------------------------------- */
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

function runSearch() {
    if (!searchInput) return;
    const query = searchInput.value.trim();
    if (!query) return;
    window.location.href = "search-results.html?q=" + encodeURIComponent(query);
}

if (searchButton) {
    searchButton.addEventListener("click", runSearch);
}

if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") runSearch();
    });
}

/* ----------------------------------------
   Search results page
   Only runs on search-results.html, where
   #searchResultsContainer and #searchQueryLabel exist.
---------------------------------------- */
const resultsContainer = document.getElementById("searchResultsContainer");
const queryLabel = document.getElementById("searchQueryLabel");
const noResultsMsg = document.getElementById("noResultsMsg");

if (resultsContainer) {
    const params = new URLSearchParams(window.location.search);
    const query = (params.get("q") || "").trim();

    if (queryLabel) {
        queryLabel.textContent = query ? `Results for "${query}"` : "Search";
    }

    const q = query.toLowerCase();
    const matches = q
        ? Object.keys(movieData).filter((id) => {
              const movie = movieData[id];
              return (
                  movie.title.toLowerCase().includes(q) ||
                  movie.genre.toLowerCase().includes(q)
              );
          })
        : [];

    if (matches.length === 0) {
        if (noResultsMsg) noResultsMsg.style.display = "block";
    } else {
        matches.forEach((id) => {
            const movie = movieData[id];
            const card = document.createElement("div");
            card.className = "card";
            card.setAttribute("data-movie", id);
            card.innerHTML = `
                <div class="card-thumb"><i class="fas fa-film"></i></div>
                <h3>${movie.title}</h3>
                <p>${movie.genre.split(",")[0].trim()}</p>
                <button class="details-btn">View Details</button>
            `;
            resultsContainer.appendChild(card);
        });
        attachDetailsButtons();
    }
}
