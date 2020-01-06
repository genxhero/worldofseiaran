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
            name: "",
            overview: "",
            places: [
                {name: "", description: ""}
            ],
            people: [
                {name: "", description: ""}
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