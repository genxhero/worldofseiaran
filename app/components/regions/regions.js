/**
 * Procedure
 * 
 * Pass the object that is stored at a region's key into the region component.
 * Then load all of the data therein.
 * TODO: Do this for all regions in the campaign setting.
 * 
 * JUSTIFICATION: I want to use github pages so  i can't have a backend.
 * Normally I'd use a relational database of some kind. Heck mayne for fun I'll
 * build something in Rails later that does the same thing.
 */

const REGIONS = {
    "crescentcoast": {
        name: "Crescent Coast",
        overview: "A heavily settled region surrounding a bay (or a sea depending on whom you ask)roughly the shape of a crescent moon.  Legend has it that the Dragon Empress used her significant power to flood the lands surrounding her castle in order to create the ultimate moat full of horrors from the depths.  Over the centuries the number of monsters in the bay has decreased, but will most likely never be depleted.",
        locales: [
            {
            name: "Gaille",
            overview: "The most prosperous kingdom on the Crescent Coast, it was founded in the early days of the Fourth Age by heroes tasked with mopping up what was left of The Dragon Empress' forces.  The symbol of Gaille is a winged rapier over a sky blue background.  ",
            places: [
                {name: "Loupblanc", description: "Capitol of Gaille, offcially, though the coastal city of Parseilles is more influential.  The city is shrouded in mystery, with fog-choked streets, haunting architecture, and sightings of terrible creatures that are more than just rumors."},
                {name: "Parseilles", description: "Cultural and trade center of Gaille. It was built on and around the mouth of the White River.  The Cascading Palace is an architectual marvel to behold."}
            ],
            people: [
                {name: "Gabrielle Carmanet", description: "Victor of the Second War of Wings and ruler of Gaille."},
                {name: "Poppy Greenbottle", description: "Spymaster and royal food expert and one of the queen's closest friends."},
                {name: "Guillarme", description: "Veteran paladin and leader of the royal guard."}
            ]
        },
        {
            name: "The Emerald Vale",
            overview: "Of the lucky few humans who ever see a dragon in their life times, the majority of them dwell in this lush valley in the heart of the Dragonlands.  With one notable exception, the people who live in the Emerald vale live in small towns and villages, some under the protection of good dragons and others under the dominion of an evil dragon. ",
            places: [
                {name: "Scalsang City",description: "The first (and so far only) fully organized and fortified human city in the Emerald Vale.  It started out as a small village, but eventually donations by one Valkair Scalsang (from whom the city derives its name) caused rapid expansion and the formation of a city-state."},
                {name: ""}
            ],
            people: [
                {name: "Patrick Scaslang", description: "Thane of Scalsang City, Valkair's direct descendant."},
            ]
        },
        {
            name: "Port Crescent",
            overview: "A major independent mercantile city and surrounding communities.",
            places: [
                {name: "Port Crescent", description: "A trading port under nobody's authority but the mercantile companies who operate within it.  It can be a rough place, despite the proximity of the Radiant Order."}
            ],
            people: [
                {name: "", description: ""}
            ]
        },
        {
            name: "The Radiant Citadel",
            overview: "A fortified city on a hill not very far from Port Crescent – some would even consider the two to be the same settlement given their symbiotic bond.  It is the headquarters of the Radiant Order but paladins of all brotherhoods are welcome within her walls.  There is a temple to just about every lawful good deity but the Hall of Heironeous is by far the largest and most heavily fortified.  The Radiant Citadel was built by Lady Ardence, one of the seven companions who defeated the Dragon Empress almost five thousand years prior.  The Radiant Order is unique in that it actually doesn't require its paladins to follow a specific deity – its members include worshipers of Bahamut, Heironeous, Helm, Tyr, Cuthbert, and even demigods of valor such as St. Tevas.  The leader of the Radiant Order is the  Highlord, an especially gifted paladin chosen by divine decree upon the death or retirement of the last one.  When taking up the mantle of Highlord, the paladin takes on a new name  – those capable of drawing the Platinum Sword from the Stone of Valor have the distinct honor of being permitted to use the name Ardence (if female) or Arden (if male). ",
            places: [
                {name: "Temple of Valor", description: "The heavily fortified headquarters of the Radiant Order and main administrative center of the city."}
            ],
            people: [
                {name: "Highlord Ardence XXVIII", description: "A fierce paladin and proven dragon slayer, she is the twenty-eighth highlord to bear the name of the order's founder.  As head of the Radiant Order she is in charge of the citadel's administration and defense. "},
                {name: "Sir Darien Forces", description: "Captain of the city guard.  While neither a paladin nor a member of the order he is loyal to their cause through and through."}
            ]
        },
        {
            name: "Gwynhar",
            overview: "A kingdom founded by barbaric invaders, Gwynhar was initially openly hostile to her surrounding neighbors.  During the third (and final) War of the Crescent Coast some two centuries after her founding an opportunistic horde of orcs and goblins attacked – the two sides of the war joined forces, obliterated the forces of darkness, and signed a peace treaty which remains to this day.  Gwynhar nonetheless remains the most martially inclined of the Crescent Coast nations, with fortified towns and outposts throughout.",
            places: [
                {name: "Caer Gwyn", description: "Small city.  It is one of the main ports along the coastal trade route.  Situated at the end of a deep cove, its harbor is fairly well-defended against sea based attackers.  A series of guard towers protects the cove's mouth; enemy ships would essentially be funneled into a kill zone.  The town itself is likewise heavily fortified with every new addition being surrounded by concentric battlements."}
            ],
            people: [
                {name: "Gruff XI", description: "King of Gwynhar, known for his strength and general recklessness."}
            ]
        },
        {
            name: "Dukedom of St. Tevas",
            overview: "In the year 600 5A, the kingdom of Alleman fell to the Cyrillian empire.  Some citizens who managed to escape built a new home for themeselves on the Crescent Coast.  The dukedom derives its name from the high priest of Heironeous, Tevas, who slew the Dark Lord of Dreadmoore and enabled their escape in the first place.  Originally just known as Tevasland, it became an official dukedom of Alleman when the kingdom's Cyrillian occupation was driven out (and by that point the deceased priest had been declared a saint and had actually ascended to demigod status).",
            places: [
                {name: "Avon", description: "Large town.  Main port and seat of power of the Dukedom."}
            ],
            people: [
                {name: "Earnest Kent", description: "Duke of St. Tevas, a decent enough leader but not without his noble quirks."}
            ]
        }


        ]
    }
}

const LOCALE_SHAPE = {
    name: "",
    overview: "",
    places: [
        {name: "", description: ""}
    ],
    people: [
        {name: "", description: ""}
    ]
}

export default REGIONS;