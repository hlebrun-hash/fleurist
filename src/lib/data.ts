// Données de la boutique
export const shopInfo = {
    name: "Jardin Digital",
    address: "42 Rue des Lilas",
    city: "Paris",
    postalCode: "75011",
    country: "France",
    phone: "01 23 45 67 89",
    email: "contact@jardin-digital.fr",
    hours: {
        tuesday: "09h30 – 19h30",
        wednesday: "09h30 – 19h30",
        thursday: "09h30 – 19h30",
        friday: "09h30 – 19h30",
        saturday: "09h30 – 19h30",
        sunday: "09h30 – 13h00",
        monday: "Fermé",
    },
    social: {
        instagram: "https://instagram.com/jardindigital",
        facebook: "https://facebook.com/jardindigital",
        pinterest: "https://pinterest.com/jardindigital",
    },
};

// Interface pour les produits
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    shortDescription: string;
    price: { min: number; max?: number };
    category: "bouquet" | "fleurs-sechees" | "accessoire" | "plante";
    images: string[];
    tags: string[];
    inStock: boolean;
    featured: boolean;
    occasion?: string[];
}

// Produits inspirés de Fleur Delangle
export const products: Product[] = [
    {
        id: "1",
        name: "Le Festif",
        slug: "le-festif",
        description: "Un bouquet éclatant qui célèbre chaque moment de joie. Composé de fleurs fraîches aux teintes vives et joyeuses, ce bouquet apporte une touche de festivité à n'importe quelle occasion. Parfait pour les anniversaires, les célébrations ou simplement pour illuminer le quotidien.",
        shortDescription: "Bouquet célébration aux teintes vives et joyeuses",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["/images/products/le-festif.png"],
        tags: ["festif", "coloré", "célébration"],
        inStock: true,
        featured: true,
        occasion: ["anniversaire", "fête"],
    },
    {
        id: "2",
        name: "Gingerbread",
        slug: "gingerbread",
        description: "Un bouquet aux tonalités chaudes évoquant les douceurs de l'hiver. Des teintes cannelle, chocolat et crème se mêlent pour créer une composition réconfortante et élégante.",
        shortDescription: "Bouquet hivernal aux teintes chaleureuses",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1591951478236-05632af05e89?w=800&q=80"],
        tags: ["hiver", "chaleureux", "élégant"],
        inStock: true,
        featured: false,
        occasion: ["noël", "hiver"],
    },
    {
        id: "3",
        name: "Caviar",
        slug: "caviar",
        description: "L'élégance à l'état pur. Ce bouquet aux teintes profondes de violet et de prune respire la sophistication. Une création luxueuse pour les amateurs de raffinement.",
        shortDescription: "Bouquet sophistiqué aux teintes violettes profondes",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1582794543139-8ac92a9abf30?w=800&q=80"],
        tags: ["luxe", "violet", "sophistiqué"],
        inStock: true,
        featured: true,
        occasion: ["cadeau", "décoration"],
    },
    {
        id: "4",
        name: "Nougatine",
        slug: "nougatine",
        description: "La douceur incarnée dans un bouquet. Des teintes orangées et pêche s'harmonisent délicatement pour créer une composition douce et enveloppante.",
        shortDescription: "Bouquet doux aux teintes orangées et pêche",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1563241527-9943679f0ecf?w=800&q=80"],
        tags: ["doux", "orange", "pêche"],
        inStock: true,
        featured: false,
        occasion: ["remerciement", "mariage"],
    },
    {
        id: "5",
        name: "Guimauve",
        slug: "guimauve",
        description: "Pure comme la neige fraîchement tombée. Ce bouquet blanc immaculé évoque la pureté et l'élégance intemporelle. Parfait pour les mariages et les moments précieux.",
        shortDescription: "Bouquet blanc pur et élégant",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?w=800&q=80"],
        tags: ["blanc", "pur", "mariage"],
        inStock: true,
        featured: true,
        occasion: ["mariage", "baptême"],
    },
    {
        id: "6",
        name: "Sucre d'Orge",
        slug: "sucre-dorge",
        description: "Romance et délicatesse se rencontrent. Des roses aux teintes rosées composent ce bouquet romantique par excellence, évoquant les premiers émois amoureux.",
        shortDescription: "Bouquet romantique aux teintes rosées",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1587575494201-11fe74d90d38?w=800&q=80"],
        tags: ["rose", "romantique", "délicat"],
        inStock: true,
        featured: false,
        occasion: ["saint-valentin", "anniversaire de mariage"],
    },
    {
        id: "7",
        name: "Le Polaire",
        slug: "le-polaire",
        description: "L'hiver dans toute sa splendeur glacée. Ce bouquet aux teintes blanches et argentées capture la magie des paysages enneigés.",
        shortDescription: "Bouquet hivernal blanc et argenté",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1565293291410-53bc75cf2e55?w=800&q=80"],
        tags: ["hiver", "blanc", "argenté"],
        inStock: true,
        featured: false,
        occasion: ["noël", "nouvel an"],
    },
    {
        id: "8",
        name: "Le Glacé",
        slug: "le-glace",
        description: "Fraîcheur et modernité définissent ce bouquet contemporain. Des fleurs aux teintes froides se marient pour créer une composition avant-gardiste.",
        shortDescription: "Bouquet contemporain aux teintes fraîches",
        price: { min: 80, max: 140 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1526402327072-ca97669528d7?w=800&q=80"],
        tags: ["moderne", "frais", "contemporain"],
        inStock: true,
        featured: false,
    },
    {
        id: "9",
        name: "Les Renoncules",
        slug: "les-renoncules",
        description: "Les stars du printemps dans toute leur gloire. Ces renoncules aux pétales délicats apportent grâce et légèreté à votre intérieur.",
        shortDescription: "Bouquet de renoncules printanières",
        price: { min: 65, max: 120 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1616864195743-982d1c68615c?w=800&q=80"],
        tags: ["renoncules", "printemps", "délicat"],
        inStock: true,
        featured: true,
        occasion: ["printemps", "fête des mères"],
    },
    {
        id: "10",
        name: "Les Anémones",
        slug: "les-anemones",
        description: "Mystérieuses et captivantes, les anémones avec leur cœur noir caractéristique créent un contraste saisissant. Un bouquet pour les âmes audacieuses.",
        shortDescription: "Bouquet d'anémones au contraste saisissant",
        price: { min: 70, max: 120 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1582239458269-80693a123611?w=800&q=80"],
        tags: ["anémones", "contraste", "audacieux"],
        inStock: true,
        featured: false,
    },
    {
        id: "11",
        name: "L'Hivernal",
        slug: "lhivernal",
        description: "Majestueux et généreux, ce grand bouquet capture l'essence de l'hiver. Une composition riche qui transforme tout espace en écrin de beauté.",
        shortDescription: "Grand bouquet hivernal majestueux",
        price: { min: 90, max: 180 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1596627685603-5374e26ee8fa?w=800&q=80"],
        tags: ["grand", "hivernal", "majestueux"],
        inStock: true,
        featured: true,
    },
    {
        id: "12",
        name: "Les Tulipes",
        slug: "les-tulipes",
        description: "Simplicité et élégance hollandaise. Ces tulipes fraîches apportent une touche de printemps pur et joyeux à votre quotidien.",
        shortDescription: "Bouquet de tulipes fraîches et joyeuses",
        price: { min: 40, max: 80 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1520790858167-9bb1904d49a2?w=800&q=80"],
        tags: ["tulipes", "printemps", "simple"],
        inStock: true,
        featured: false,
        occasion: ["quotidien", "printemps"],
    },
    {
        id: "13",
        name: "Le Valentin",
        slug: "le-valentin",
        description: "L'amour en bouquet. Des roses rouges passion et des fleurs délicates composent cette déclaration florale parfaite pour votre âme sœur.",
        shortDescription: "Bouquet romantique aux roses rouges passion",
        price: { min: 40, max: 160 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1590089856598-a3f5a01f5686?w=800&q=80"],
        tags: ["romantique", "roses", "amour"],
        inStock: true,
        featured: true,
        occasion: ["saint-valentin", "déclaration"],
    },
    {
        id: "14",
        name: "L'Élégant",
        slug: "lelegant",
        description: "Le raffinement à son apogée. Ce bouquet sophistiqué marie les plus belles fleurs dans une harmonie parfaite de couleurs et de textures.",
        shortDescription: "Bouquet raffiné aux harmonies parfaites",
        price: { min: 90, max: 180 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80"],
        tags: ["élégant", "raffiné", "luxe"],
        inStock: true,
        featured: false,
    },
    {
        id: "15",
        name: "Avalanche de Roses",
        slug: "avalanche-de-roses",
        description: "Un torrent de roses blanches pures. Ce bouquet généreux de roses Avalanche incarne l'élégance suprême et le luxe discret.",
        shortDescription: "Généreux bouquet de roses blanches Avalanche",
        price: { min: 40, max: 160 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=800&q=80"],
        tags: ["roses", "blanc", "généreux"],
        inStock: true,
        featured: true,
        occasion: ["mariage", "luxe"],
    },
    {
        id: "16",
        name: "Le Pétillant",
        slug: "le-petillant",
        description: "Joyeux et plein de vie, ce bouquet multicolore apporte une explosion de bonheur. Parfait pour célébrer ou simplement égayer une journée.",
        shortDescription: "Bouquet multicolore plein de vie",
        price: { min: 80, max: 170 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1596627685603-5374e26ee8fa?w=800&q=80"],
        tags: ["coloré", "joyeux", "multicolore"],
        inStock: true,
        featured: false,
        occasion: ["anniversaire", "félicitations"],
    },
    {
        id: "17",
        name: "Le Radieux",
        slug: "le-radieux",
        description: "Comme un rayon de soleil capturé dans un bouquet. Des teintes jaunes et orangées illuminent cette création solaire et optimiste.",
        shortDescription: "Bouquet solaire aux teintes jaunes et orangées",
        price: { min: 80, max: 140 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1605330368146-24e03f9f3810?w=800&q=80"],
        tags: ["solaire", "jaune", "lumineux"],
        inStock: true,
        featured: false,
        occasion: ["rétablissement", "encouragement"],
    },
    {
        id: "18",
        name: "Le Champ",
        slug: "le-champ",
        description: "L'esprit de la campagne en bouquet. Des fleurs champêtres assemblées naturellement évoquent les prairies fleuries de l'été.",
        shortDescription: "Bouquet champêtre naturel et frais",
        price: { min: 60, max: 100 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1596627685603-5374e26ee8fa?w=800&q=80"],
        tags: ["champêtre", "naturel", "été"],
        inStock: true,
        featured: false,
        occasion: ["mariage champêtre", "été"],
    },
    {
        id: "19",
        name: "La Provence",
        slug: "la-provence",
        description: "Les parfums du Sud en bouquet. Lavande, fleurs de champs et herbes aromatiques évoquent les collines ensoleillées de Provence.",
        shortDescription: "Bouquet provençal parfumé",
        price: { min: 80 },
        category: "bouquet",
        images: ["https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80"],
        tags: ["provence", "parfumé", "lavande"],
        inStock: true,
        featured: false,
    },
    {
        id: "20",
        name: "Voyage dans la Pampa",
        slug: "voyage-pampa",
        description: "Herbacées séchées et herbes de la pampa créent une composition bohème et intemporelle. Parfait pour une décoration durable.",
        shortDescription: "Composition de fleurs séchées bohème",
        price: { min: 20, max: 60 },
        category: "fleurs-sechees",
        images: ["https://images.unsplash.com/photo-1598288899808-0a0680a6b579?w=800&q=80"],
        tags: ["séché", "pampa", "bohème"],
        inStock: true,
        featured: true,
    },
    {
        id: "21",
        name: "Orchidée",
        slug: "orchidee",
        description: "L'orchidée, symbole d'élégance et de longévité. Cette plante sophistiquée apporte une touche de festivité à tout intérieur.",
        shortDescription: "Orchidée élégante en pot",
        price: { min: 40 },
        category: "plante",
        images: ["https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=800&q=80"],
        tags: ["orchidée", "plante", "élégant"],
        inStock: true,
        featured: false,
    },
    {
        id: "22",
        name: "Le Terrarium",
        slug: "le-terrarium",
        description: "Un petit monde végétal sous verre. Ce terrarium miniature crée un écosystème autonome et poétique pour votre bureau ou salon.",
        shortDescription: "Terrarium miniature poétique",
        price: { min: 65 },
        category: "plante",
        images: ["https://images.unsplash.com/photo-1610425667104-d5763ca74c65?w=800&q=80"],
        tags: ["terrarium", "miniature", "autonome"],
        inStock: true,
        featured: false,
    },
    {
        id: "23",
        name: "Vase Cristal",
        slug: "vase-cristal",
        description: "Un vase en verre cristallin aux lignes épurées. Parfait pour mettre en valeur vos bouquets et compositions florales.",
        shortDescription: "Vase en verre cristallin épuré",
        price: { min: 12, max: 23 },
        category: "accessoire",
        images: ["https://images.unsplash.com/photo-1602664773836-17b5f25bf68c?w=800&q=80"],
        tags: ["vase", "cristal", "épuré"],
        inStock: true,
        featured: false,
    },
];

// Témoignages clients
export const testimonials = [
    {
        text: "Jardin Digital a transformé notre mariage en un rêve floral. Chaque composition était parfaite, au-delà de nos attentes.",
        image: "https://randomuser.me/api/portraits/women/15.jpg",
        name: "Marie Dubois",
        role: "Mariée en juin 2025",
    },
    {
        text: "Je commande régulièrement pour mon restaurant. La qualité est constante et le service impeccable.",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        name: "Laurent Martin",
        role: "Chef Restaurateur",
    },
    {
        text: "Un abonnement floral qui enchante mon bureau chaque semaine. Mes collègues adorent !",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Sophie Bernard",
        role: "Directrice Marketing",
    },
    {
        text: "Les bouquets arrivent toujours frais et durent longtemps. Le rapport qualité-prix est excellent.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Thomas Petit",
        role: "Client fidèle",
    },
    {
        text: "L'équipe a su capturer l'essence de notre événement corporate. Professionnalisme remarquable.",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Claire Moreau",
        role: "Event Manager",
    },
    {
        text: "Chaque bouquet raconte une histoire. C'est bien plus que des fleurs, c'est de l'art.",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Isabelle Roux",
        role: "Décoratrice d'intérieur",
    },
    {
        text: "Service de livraison impeccable et fleurs d'une fraîcheur exceptionnelle.",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "François Lemaire",
        role: "Client régulier",
    },
    {
        text: "J'ai trouvé ma boutique de cœur. L'équipe est à l'écoute et les conseils toujours pertinents.",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Anne Girard",
        role: "Passionnée de fleurs",
    },
    {
        text: "Les compositions funéraires étaient d'une dignité et d'une beauté réconfortantes dans ce moment difficile.",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Pierre Durand",
        role: "Client reconnaissant",
    },
];

// Articles de blog
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        role: string;
        image: string;
        bio: string;
        linkedin?: string;
    };
    publishedAt: string;
    readingTime: number;
    category: string;
    tags: string[];
    image: string;
    featured: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Comment Conserver Vos Bouquets Plus Longtemps : 7 Secrets de Fleuriste",
        slug: "conserver-bouquets-longtemps",
        excerpt: "Découvrez les techniques professionnelles pour prolonger la vie de vos fleurs coupées jusqu'à deux semaines.",
        content: `
# Comment Conserver Vos Bouquets Plus Longtemps

Vous venez de recevoir un magnifique bouquet et vous souhaitez en profiter le plus longtemps possible ? Voici nos secrets de fleuriste pour maximiser la durée de vie de vos fleurs.

## 1. La Coupe en Biais

**Pourquoi c'est essentiel :** Une coupe en biais augmente la surface d'absorption d'eau de 25%. Utilisez des ciseaux propres et coupez à 45 degrés.

## 2. L'Eau Tiède, Pas Froide

Contrairement aux idées reçues, les fleurs absorbent mieux l'eau tiède (environ 20-25°C). Changez l'eau tous les deux jours.

## 3. Le Secret du Bicarbonate

Une demi-cuillère à café de bicarbonate dans l'eau empêche le développement des bactéries. C'est le secret le mieux gardé des fleuristes !

## 4. Éloignez les Fruits

Les fruits dégagent de l'éthylène, un gaz qui accélère le vieillissement des fleurs. Gardez vos bouquets à distance de la corbeille de fruits.

## 5. Évitez la Lumière Directe

Placez vos fleurs dans un endroit lumineux mais sans soleil direct. La chaleur excessive déshydrate rapidement les pétales.

## 6. Retirez les Feuilles Immergées

Toute feuille sous l'eau va pourrir et contaminer l'ensemble du bouquet. Nettoyez soigneusement les tiges.

## 7. La Nuit au Frais

Si possible, placez votre bouquet dans un endroit plus frais la nuit (15-18°C). Les fleurs apprécient ce repos nocturne.

> "Un bouquet bien entretenu peut durer jusqu'à 14 jours. C'est le geste d'attention qui fait la différence."

En suivant ces conseils simples, vous prolongerez significativement la beauté de vos compositions florales.
    `,
        author: {
            name: "Camille Verdier",
            role: "Maître Fleuriste",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            bio: "15 ans d'expérience en art floral. Camille a formé des centaines de fleuristes et partage sa passion pour les fleurs à travers ses créations uniques.",
            linkedin: "https://linkedin.com/in/camille-verdier",
        },
        publishedAt: "2026-01-05",
        readingTime: 5,
        category: "Conseils",
        tags: ["entretien", "conseils", "fleurs coupées"],
        image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&q=80",
        featured: true,
    },
    {
        id: "2",
        title: "Les Tendances Florales 2026 : Ce Qui Fera Fleurir Votre Intérieur",
        slug: "tendances-florales-2026",
        excerpt: "Du minimalisme japonais aux explosions de couleurs, découvrez les styles qui marqueront cette année.",
        content: `
# Les Tendances Florales 2026

L'année 2026 marque un tournant dans l'art floral. Entre retour aux sources et audace contemporaine, découvrez les tendances qui transformeront vos intérieurs.

## Le Wabi-Sabi Floral

L'esthétique japonaise de la beauté imparfaite s'invite dans nos bouquets. Des compositions asymétriques, des fleurs à différents stades de floraison, et l'acceptation du cycle naturel de la vie.

## Le Retour des Fleurs Séchées

Plus qu'une tendance, c'est un mode de vie durable. Les herbes de la pampa, les immortelles et les fleurs séchées créent des compositions intemporelles.

## Le Colour Blocking Floral

Des blocs de couleurs vives et contrastées pour un impact visuel maximal. Rose hot pink contre orange vif, violet profond contre jaune solaire.

## Les Micro-Bouquets

De petites compositions concentrées et précieuses, parfaites pour les petits espaces ou comme geste quotidien.

## La Floralité Locale

Privilégier les fleurs de saison et de production locale. Un engagement écologique qui ne sacrifie pas la beauté.
    `,
        author: {
            name: "Antoine Fleur",
            role: "Directeur Artistique",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio: "Designer floral reconnu, Antoine a travaillé pour les plus grandes maisons de mode et expose régulièrement dans les galeries parisiennes.",
        },
        publishedAt: "2026-01-02",
        readingTime: 7,
        category: "Tendances",
        tags: ["tendances", "décoration", "2026"],
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80",
        featured: true,
    },
    {
        id: "3",
        title: "Le Langage des Fleurs : Que Disent Vraiment Vos Bouquets ?",
        slug: "langage-des-fleurs",
        excerpt: "Chaque fleur porte un message. Apprenez à composer des bouquets qui parlent au cœur.",
        content: `
# Le Langage des Fleurs

Depuis l'époque victorienne, les fleurs servent de messagers silencieux. Découvrez comment composer un bouquet qui dit exactement ce que votre cœur ressent.

## Les Roses : Au-delà du Rouge

- **Rose rouge** : Amour passionné
- **Rose blanche** : Pureté, innocence
- **Rose rose** : Gratitude, admiration
- **Rose jaune** : Amitié, joie
- **Rose orange** : Désir, enthousiasme

## Les Fleurs de la Gratitude

- **Hortensia** : Reconnaissance sincère
- **Dahlia** : Engagement et dévotion
- **Gerbera** : Joie et optimisme

## Les Fleurs de Réconfort

- **Lys blanc** : Sympathie et soutien
- **Chrysanthème** : Vérité et renaissance
- **Anémone** : Protection et espoir

## Composer Votre Message

Un bouquet bien pensé combine plusieurs significations pour créer un message unique et personnel. C'est l'art de dire sans parler.
    `,
        author: {
            name: "Camille Verdier",
            role: "Maître Fleuriste",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            bio: "15 ans d'expérience en art floral.",
        },
        publishedAt: "2025-12-20",
        readingTime: 6,
        category: "Culture",
        tags: ["symbolisme", "tradition", "histoire"],
        image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1200&q=80",
        featured: false,
    },
];

// Services proposés
export const services = [
    {
        id: "bouquets",
        title: "Bouquets Sur Mesure",
        description: "Des créations uniques adaptées à vos envies et occasions",
        icon: "Flower2",
    },
    {
        id: "evenements",
        title: "Événements & Mariages",
        description: "Décoration florale complète pour vos moments précieux",
        icon: "PartyPopper",
    },
    {
        id: "abonnement",
        title: "Abonnement Floral",
        description: "Des fleurs fraîches livrées chez vous chaque semaine",
        icon: "Calendar",
    },
    {
        id: "entreprises",
        title: "Fleurs pour Entreprises",
        description: "Sublimez vos espaces professionnels",
        icon: "Building2",
    },
];
