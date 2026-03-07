export interface Architect {
  id: string;
  name: string;
  period: string;
  style: string[];
  bio: string;
  imageUrl: string;
}

export interface Building {
  id: string;
  name: string;
  architectId: string;
  year: number;
  location: string;
  style: string;
  description: string;
  imageUrl: string;
}

export interface Movement {
  id: string;
  name: string;
  years: string;
  description: string;
  imageUrl: string;
}

export const movements: Movement[] = [
  {
    id: "bauhaus",
    name: "Bauhaus",
    years: "1919 - 1933",
    description: "A German art school operational from 1919 to 1933 that combined crafts and the fine arts. The school became famous for its approach to design, which attempted to unify the principles of mass production with individual artistic vision and strove to combine aesthetics with everyday function.",
    imageUrl: "https://images.unsplash.com/photo-1590334808388-7253556487e6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "international-style",
    name: "International Style",
    years: "1920s - 1970s",
    description: "A major architectural style that was developed in the 1920s and 1930s and became the dominant tendency in Western architecture during the middle decades of the 20th century. Characteristics include rectilinear forms; light, taut plane surfaces that have been completely stripped of applied ornamentation and decoration; open interior spaces; and a visually weightless quality engendered by the use of cantilever construction.",
    imageUrl: "https://images.unsplash.com/photo-1565514020176-db7152431771?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "brutalism",
    name: "Brutalism",
    years: "1950s - 1970s",
    description: "A style that emerged in the 1950s and grew out of the early-20th-century modernist movement. Brutalist buildings are characterised by their massive, monolithic and 'blocky' appearance with a rigid geometric style and large-scale use of poured concrete.",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-166c0d644834?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "postmodernism",
    name: "Postmodernism",
    years: "1970s - 1990s",
    description: "A style or movement which emerged in the 1960s as a reaction against the austerity, formality, and lack of variety of modern architecture, particularly in the international style advocated by Le Corbusier and Ludwig Mies van der Rohe.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "deconstructivism",
    name: "Deconstructivism",
    years: "1980s - Present",
    description: "A movement of postmodern architecture which appeared in the 1980s. It gives the impression of the fragmentation of the constructed building. It is characterized by an absence of harmony, continuity, or symmetry.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000",
  }
];

export const architects: Architect[] = [
  {
    id: "le-corbusier",
    name: "Le Corbusier",
    period: "1887 - 1965",
    style: ["International Style", "Modernism"],
    bio: "Charles-Édouard Jeanneret, known as Le Corbusier, was a Swiss-French architect, designer, painter, urban planner, writer, and one of the pioneers of what is now regarded as modern architecture.",
    imageUrl: "https://images.unsplash.com/photo-1596728080645-0d04c478c930?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "mies-van-der-rohe",
    name: "Ludwig Mies van der Rohe",
    period: "1886 - 1969",
    style: ["Modernism", "International Style"],
    bio: "A German-American architect. He was commonly referred to as Mies, his surname. Along with Alvar Aalto, Le Corbusier, Walter Gropius and Frank Lloyd Wright, he is regarded as one of the pioneers of modernist architecture.",
    imageUrl: "https://images.unsplash.com/photo-1594895689726-259a43059238?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "zaha-hadid",
    name: "Zaha Hadid",
    period: "1950 - 2016",
    style: ["Deconstructivism", "Parametricism"],
    bio: "A British-Iraqi architect, artist and designer, recognized as a major figure in architecture of the late 20th and early 21st centuries. She was the first woman to receive the Pritzker Architecture Prize, in 2004.",
    imageUrl: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "frank-lloyd-wright",
    name: "Frank Lloyd Wright",
    period: "1867 - 1959",
    style: ["Organic Architecture", "Prairie School"],
    bio: "An American architect, designer, writer, and educator. He designed more than 1,000 structures, 532 of which were completed. Wright believed in designing structures that were in harmony with humanity and its environment, a philosophy he called organic architecture.",
    imageUrl: "https://images.unsplash.com/photo-1520699918507-3c3e05c46b90?auto=format&fit=crop&q=80&w=1000",
  }
];

export const buildings: Building[] = [
  {
    id: "villa-savoye",
    name: "Villa Savoye",
    architectId: "le-corbusier",
    year: 1931,
    location: "Poissy, France",
    style: "International Style",
    description: "A modernist villa in Poissy, on the outskirts of Paris, France. It was designed by the Swiss architects Le Corbusier and his cousin, Pierre Jeanneret, and built between 1928 and 1931 using reinforced concrete.",
    imageUrl: "https://images.unsplash.com/photo-1596728080645-0d04c478c930?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "seagram-building",
    name: "Seagram Building",
    architectId: "mies-van-der-rohe",
    year: 1958,
    location: "New York City, USA",
    style: "International Style",
    description: "A skyscraper, located at 375 Park Avenue, between 52nd and 53rd Streets in Midtown Manhattan, New York City. It was designed by Ludwig Mies van der Rohe and Philip Johnson.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "heydar-aliyev-center",
    name: "Heydar Aliyev Center",
    architectId: "zaha-hadid",
    year: 2012,
    location: "Baku, Azerbaijan",
    style: "Deconstructivism",
    description: "A 57,500 m2 building complex in Baku, Azerbaijan designed by Iraqi-British architect Zaha Hadid and noted for its distinctive architecture and flowing, curved style that eschews sharp angles.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "fallingwater",
    name: "Fallingwater",
    architectId: "frank-lloyd-wright",
    year: 1939,
    location: "Pennsylvania, USA",
    style: "Organic Architecture",
    description: "A house designed by architect Frank Lloyd Wright in 1935 in rural southwestern Pennsylvania, 43 miles southeast of Pittsburgh. The house was built partly over a waterfall on Bear Run in the Mill Run section of Stewart Township, Fayette County, Pennsylvania.",
    imageUrl: "https://images.unsplash.com/photo-1520699918507-3c3e05c46b90?auto=format&fit=crop&q=80&w=1000",
  }
];
