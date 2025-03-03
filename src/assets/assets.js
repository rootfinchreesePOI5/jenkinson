import {
  alex_wong,
    client1,
  client2,
  client3,
  conservation_workshop,
  corals,
  crustaceans,
  david_sima,
  dolphin,
  dolphin_seminar,
  emily_carter,
  fish,
  jellyfish,
  john_dustin,
  kid1,
  kid2,
  kid3,
  lisa_matthews,
  mammals,
  mark_spencer,
  mike_tan,
  mollusks,
  olivia_bennett,
  one,
  reptiles,
  sarah_johnson,
  shark,
  shark_awareness,
  sophia_lee,
  talia_johns,
  three,
  turtle,
  two,
  whale,
} from "./images";

export const links = [
  {
    name: "Gallery",
    link: "Gallery",
  },

  {
    name: "Events",
    link: "Events",
  },

  {
    name: "About",
    link: "About",
  },

  {
    name: "Contact",
    link: "Contact",
  },
];



// categories
export const categories = [
  {
    name: "Fish",
    slug: "fish",
    description:
      "Explore a variety of fish species, from freshwater to deep-sea dwellers.",
    image: fish,
    animals: [
      {
        name: "Clownfish",
        image: "images/fish/clownfish.jpg",
        description: "Brightly colored fish popularized by 'Finding Nemo'.",
      },
      {
        name: "Angelfish",
        image: "images/fish/angelfish.jpg",
        description: "Beautifully striped fish found in tropical reefs.",
      },
      {
        name: "Lionfish",
        image: "images/fish/lionfish.jpg",
        description: "Venomous fish with striking spines and patterns.",
      },
      {
        name: "Betta Fish",
        image: "images/fish/betta.jpg",
        description: "Colorful freshwater fish known for its aggression.",
      },
    ],
  },
  {
    name: "Mammals",
    slug: "mammals",
    description:
      "Discover marine mammals known for their intelligence and social behavior.",
    image: mammals,
    animals: [
      {
        name: "Dolphin",
        image: "images/mammals/dolphin.jpg",
        description: "Highly intelligent and friendly marine mammals.",
      },
      {
        name: "Orca (Killer Whale)",
        image: "images/mammals/orca.jpg",
        description:
          "Apex predator known for its striking black-and-white pattern.",
      },
      {
        name: "Sea Otter",
        image: "images/mammals/sea_otter.jpg",
        description:
          "Adorable marine mammals known for floating on their backs.",
      },
    ],
  },
  {
    name: "Reptiles",
    slug: "reptiles",
    description:
      "Learn about marine reptiles that have adapted to life in the ocean.",
    image: reptiles,
    animals: [
      {
        name: "Sea Turtle",
        image: "images/reptiles/sea_turtle.jpg",
        description: "Ancient reptiles known for their long migrations.",
      },
      {
        name: "Saltwater Crocodile",
        image: "images/reptiles/crocodile.jpg",
        description:
          "The largest living reptile, often found in coastal areas.",
      },
    ],
  },
  {
    name: "Crustaceans",
    slug: "crustaceans",
    description: "Meet fascinating marine crustaceans like crabs and lobsters.",
    image: crustaceans,
    animals: [
      {
        name: "Lobster",
        image: "images/crustaceans/lobster.jpg",
        description: "A deep-sea crustacean with strong claws.",
      },
      {
        name: "Crab",
        image: "images/crustaceans/crab.jpg",
        description: "Side-walking crustaceans found on beaches and reefs.",
      },
    ],
  },
  {
    name: "Jellyfish",
    slug: "jellyfish",
    description:
      "Graceful yet dangerous, jellyfish drift through ocean currents.",
    image: jellyfish,
    animals: [
      {
        name: "Moon Jelly",
        image: "images/jellyfish/moon_jelly.jpg",
        description: "Translucent jellyfish commonly found in oceans.",
      },
      {
        name: "Box Jellyfish",
        image: "images/jellyfish/box_jelly.jpg",
        description: "One of the most venomous marine animals.",
      },
    ],
  },
  {
    name: "Mollusks",
    slug: "mollusks",
    description:
      "Soft-bodied marine creatures, often with shells, like octopuses and squids.",
    image: mollusks,
    animals: [
      {
        name: "Octopus",
        image: "images/mollusks/octopus.jpg",
        description: "Highly intelligent cephalopod known for problem-solving.",
      },
      {
        name: "Squid",
        image: "images/mollusks/squid.jpg",
        description: "Fast-swimming cephalopod with ink defense mechanism.",
      },
      {
        name: "Nautilus",
        image: "images/mollusks/nautilus.jpg",
        description: "A prehistoric mollusk with a coiled shell.",
      },
    ],
  },
  {
    name: "Corals",
    slug: "corals",
    description:
      "The foundation of marine ecosystems, providing habitat for countless species.",
    image: corals,
    animals: [
      {
        name: "Brain Coral",
        image: "images/corals/brain_coral.jpg",
        description: "Coral with a distinctive brain-like structure.",
      },
      {
        name: "Staghorn Coral",
        image: "images/corals/staghorn_coral.jpg",
        description: "A branching coral species vital for reefs.",
      },
    ],
  },
];

export const events = [
  {
    id: 1,
    name: "Marine Conservation Workshop",
    date: "2025-03-15",
    location: "Jenkinson Sea Life, Singapore",
    description:
      "A full-day workshop focused on marine conservation efforts, including hands-on activities and expert talks.",
    cost: {
      entryFee: 10,
      activitiesFee: 15,
      total: 25,
    },
    image: conservation_workshop,
    image2: one,
    activities: [
      {
        name: "Coral Reef Restoration",
        time: "10:00 AM - 12:00 PM",
        description:
          "Participants will learn about coral reefs and assist in a coral restoration activity.",
        team: [
          { name: "Dr. Sarah Johnson", role: "Marine Biologist" },
          { name: "Alex Wong", role: "Dive Instructor" },
        ],
        cost: 10,
      },
      {
        name: "Beach Cleanup Drive",
        time: "1:00 PM - 3:00 PM",
        description:
          "A community-driven effort to clean the nearby beach and learn about ocean pollution.",
        team: [
          { name: "Lisa Matthews", role: "Environmental Activist" },
          { name: "John Dustin", role: "Volunteer Coordinator" },
        ],
        cost: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Shark Awareness Program",
    date: "2025-04-05",
    location: "Jenkinson Sea Life Auditorium",
    description:
      "An educational event to raise awareness about different shark species and their role in marine ecosystems.",
    cost: {
      entryFee: 15,
      activitiesFee: 20,
      total: 35,
    },
    image: shark_awareness,
    image2: two,
    activities: [
      {
        name: "Shark Feeding Show",
        time: "11:00 AM - 12:00 PM",
        description: "A thrilling live shark feeding demonstration.",
        team: [
          { name: "Mark Spencer", role: "Shark Trainer" },
          { name: "Talia johns", role: "Marine Ecologist" },
        ],
        cost: 15,
      },
      {
        name: "Interactive Q&A with Experts",
        time: "2:00 PM - 3:30 PM",
        description:
          "Attendees can ask marine biologists questions about sharks, their habitats, and conservation efforts.",
        team: [
          { name: "Dr. Emily Carter", role: "Shark Conservationist" },
          { name: "Mike Tan", role: "Wildlife Researcher" },
        ],
        cost: 5,
      },
    ],
  },
  {
    id: 3,
    name: "Dolphin Conservation Seminar",
    date: "2025-05-20",
    location: "Marine Discovery Center, Sydney",
    description:
      "A seminar focusing on dolphin conservation, habitat protection, and ethical marine tourism.",
    cost: {
      entryFee: 12,
      activitiesFee: 18,
      total: 30,
    },
    image: dolphin_seminar,
    image2: three,
    activities: [
      {
        name: "Dolphin Watching & Behavior Study",
        time: "9:00 AM - 11:00 AM",
        description:
          "Participants will observe dolphins in their natural habitat and learn about their social behavior.",
        team: [
          { name: "Dr. Olivia Bennett", role: "CEO & Lead Marine Biologist" },
          { name: "Sophia Lee", role: "Marine Mammal Specialist" },
        ],
        cost: 12,
      },
      {
        name: "Ethical Marine Tourism Panel",
        time: "1:00 PM - 2:30 PM",
        description:
          "A discussion on responsible tourism practices and their impact on marine life.",
        team: [
          { name: "David Sima", role: "Sustainable Tourism Expert" },
          { name: "Lisa Matthews", role: "Environmental Activist" },
        ],
        cost: 6,
      },
    ],
  },
];

export const childrenEvents = [
  {
    id: 1,
    name: "Junior Marine Explorers",
    date: "2025-03-22",
    location: "Jenkinson Sea Life, Singapore",
    description:
      "A fun-filled day for young ocean lovers, with interactive games, storytelling, and hands-on marine activities.",
    cost: {
      entryFee: 8,
      activitiesFee: 10,
      total: 18,
    },
    image: "junior_explorers",
    image2: kid1,
    activities: [
      {
        name: "Touch & Feel Sea Creatures",
        time: "10:00 AM - 11:30 AM",
        description:
          "Children will get a chance to touch starfish, sea urchins, and small crabs while learning about their habitats.",
        team: [
          { name: "Emma Davis", role: "Marine Educator" },
          { name: "Jake Reynolds", role: "Aquarium Guide" },
        ],
        cost: 5,
      },
      {
        name: "Ocean Adventure Storytelling",
        time: "1:00 PM - 2:00 PM",
        description:
          "An interactive storytelling session about ocean heroes and marine life adventures.",
        team: [
          { name: "Sarah Collins", role: "Children’s Storyteller" },
          { name: "Tommy Grant", role: "Illustrator & Performer" },
        ],
        cost: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Little Sharks Discovery",
    date: "2025-04-12",
    location: "Jenkinson Sea Life Auditorium",
    description:
      "A special event for kids to learn about sharks in a fun and safe way, featuring interactive exhibits and games.",
    cost: {
      entryFee: 10,
      activitiesFee: 12,
      total: 22,
    },
    image: "little_sharks",
    image2: kid2,
    activities: [
      {
        name: "Meet the Baby Sharks",
        time: "10:30 AM - 11:30 AM",
        description:
          "Children will learn about baby sharks and their habitats through interactive videos and fun facts.",
        team: [
          { name: "Brian Young", role: "Shark Specialist" },
          { name: "Lily Tran", role: "Children’s Marine Educator" },
        ],
        cost: 6,
      },
      {
        name: "Shark Drawing & Coloring Session",
        time: "1:30 PM - 2:30 PM",
        description:
          "A creative session where kids can draw and color their favorite sharks while learning fun facts.",
        team: [
          { name: "Anna Peterson", role: "Art Instructor" },
          { name: "Mike Carson", role: "Educational Coordinator" },
        ],
        cost: 6,
      },
    ],
  },
  {
    id: 3,
    name: "Dolphin Friends Workshop",
    date: "2025-05-25",
    location: "Marine Discovery Center, Sydney",
    description:
      "A fun and educational experience where children will learn about dolphins through games and engaging activities.",
    cost: {
      entryFee: 9,
      activitiesFee: 11,
      total: 20,
    },
    image: "dolphin_friends",
    image2: kid3,
    activities: [
      {
        name: "Dolphin Games & Quiz",
        time: "9:30 AM - 10:30 AM",
        description:
          "An interactive game session where kids can play and answer fun dolphin-related quizzes.",
        team: [
          { name: "Sophia Lee", role: "Marine Mammal Educator" },
          { name: "Jake Morrison", role: "Game Coordinator" },
        ],
        cost: 6,
      },
      {
        name: "Make Your Own Dolphin Model",
        time: "1:00 PM - 2:00 PM",
        description:
          "A hands-on craft session where children can create and take home their own dolphin models.",
        team: [
          { name: "Jessica Wong", role: "Art & Craft Expert" },
          { name: "David Sima", role: "Workshop Coordinator" },
        ],
        cost: 5,
      },
    ],
  },
];


export const teamMembers = [
  {
    id: 1,
    name: "Dr. Olivia Bennett",
    role: "CEO & Lead Marine Biologist",
    experience: 18,
    rating: 4.9,
    expertise:
      "Marine ecosystem research, conservation strategy, and policy advocacy.",
    bio: "Dr. Olivia Bennett has been leading marine conservation projects for nearly two decades, focusing on sustainable ocean preservation.",
    image: olivia_bennett,
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    role: "Marine Biologist",
    experience: 12,
    rating: 4.7,
    expertise: "Coral reef restoration and marine biodiversity.",
    bio: "Dr. Johnson specializes in coral reef rehabilitation, working closely with local communities to restore marine habitats.",
    image: sarah_johnson,
  },
  {
    id: 3,
    name: "David Sima",
    role: "Sustainable Tourism Expert",
    experience: 16,
    rating: 4.8,
    expertise: "Eco-friendly tourism strategies.",
    bio: "David has worked with global organizations to implement responsible marine tourism policies.",
    image: david_sima,
  },
  {
    id: 4,
    name: "Alex Wong",
    role: "Dive Instructor",
    experience: 9,
    rating: 4.5,
    expertise: "Underwater exploration and marine species identification.",
    bio: "With a decade of diving experience, Alex has trained over 500 divers and led numerous ocean exploration programs.",
    image: alex_wong,
  },
  {
    id: 5,
    name: "Lisa Matthews",
    role: "Environmental Activist",
    experience: 10,
    rating: 4.8,
    expertise: "Community engagement and marine awareness programs.",
    bio: "Lisa has been advocating for cleaner oceans and marine protection through global awareness campaigns.",
    image: lisa_matthews,
  },
  {
    id: 6,
    name: "John Dustin",
    role: "Volunteer Coordinator",
    experience: 7,
    rating: 4.6,
    expertise: "Managing volunteers for conservation projects.",
    bio: "John has successfully coordinated over 100 volunteer-driven marine conservation initiatives worldwide.",
    image: john_dustin,
  },
  {
    id: 7,
    name: "Mark Spencer",
    role: "Shark Trainer",
    experience: 14,
    rating: 4.9,
    expertise: "Shark behavior studies and conservation.",
    bio: "Mark has dedicated his career to studying and protecting shark species, conducting hands-on training and research.",
    image: mark_spencer,
  },
  {
    id: 8,
    name: "Talia johns",
    role: "Marine Ecologist",
    experience: 11,
    rating: 4.7,
    expertise: "Ecosystem preservation and marine flora studies.",
    bio: "Emma specializes in marine flora conservation, working on sustainable solutions to protect underwater ecosystems.",
    image: talia_johns,
  },
  {
    id: 9,
    name: "Dr. Emily Carter",
    role: "Shark Conservationist",
    experience: 15,
    rating: 4.8,
    expertise: "Shark conservation and research.",
    bio: "Dr. Carter has published multiple research papers on shark population decline and conservation strategies.",
    image: emily_carter,
  },
  {
    id: 10,
    name: "Mike Tan",
    role: "Wildlife Researcher",
    experience: 8,
    rating: 4.5,
    expertise: "Marine wildlife monitoring and environmental impact analysis.",
    bio: "Mike has been involved in various projects tracking and protecting marine species in different ocean regions.",
    image: mike_tan,
  },
  {
    id: 11,
    name: "Sophia Lee",
    role: "Marine Mammal Specialist",
    experience: 13,
    rating: 4.7,
    expertise: "Dolphin and whale conservation.",
    bio: "Sophia has been leading marine mammal protection initiatives, studying dolphin communication and behavior.",
    image: sophia_lee,
  },
  {
    id: 12,
    name: "David Sima",
    role: "Sustainable Tourism Expert",
    experience: 16,
    rating: 4.8,
    expertise: "Eco-friendly tourism strategies.",
    bio: "David has worked with global organizations to implement responsible marine tourism policies.",
    image: david_sima,
  },
];

export const Review = [
  {
    comment:
      "Amazing experience! The marine life was breathtaking, and the staff was very knowledgeable.",
    img: client1,
    name: "John Wayne",
    destination: "Point Pleasant Beach, Singapore",
  },
  {
    comment:
      "A perfect place for kids and adults alike. The exhibits were well-maintained and informative.",
    img: client2,
    name: "Liam Johnson",
    destination: "New York, USA",
  },
  {
    comment:
      "Loved the interactive sessions and the variety of sea creatures on display. Highly recommend visiting!",
    img: client3,
    name: "Emma Brown",
    destination: "London, UK",
  },
];


export const galleryImages = [
  { id: 1, src: corals, alt: "Beautiful Coral Reef" },
  { id: 2, src: dolphin_seminar, alt: "Dolphins Swimming" },
  { id: 3, src: shark_awareness, alt: "Close-up of a Shark" },
  { id: 4, src: turtle, alt: "Sea Turtle in the Ocean" },
  { id: 5, src: jellyfish, alt: "Glowing Jellyfish" },
  { id: 6, src: conservation_workshop, alt: "Volunteers Cleaning a Beach" },
  { id: 7, src: mammals, alt: "A Whale Breaching" },
  { id: 8, src: sarah_johnson, alt: "Scuba Divers Exploring the Deep Sea" },
  { id: 9, src: mike_tan, alt: "A Child Holding a Starfish" },
  { id: 10, src: emily_carter, alt: "Sunset Over the Ocean" },
];
