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
        nations: [
            {name: "Gaille",
            places: [
                {name: "Loupblanc", description: "Capitol of Gaille, offcially, though the coastal city of Parseilles is more influential.  The city is shrouded in mystery, with fog-choked streets, haunting architecture, and sightings of terrible creatures that are more than just rumors."},
                {name: "Parseilles", description: "Cultural and trade center of Gaille. It was built on and around the mouth of the White River.  The Cascading Palace is an architectual marvel to behold."}
            ] 
        }
        ]
    }
}

export default REGIONS;