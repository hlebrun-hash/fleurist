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

export const products: Product[] = [
    {
        id: "1",
        name: "Le Festif",
        slug: "le-festif",
        description: "Un bouquet éclatant qui célèbre chaque moment de joie. Composé de fleurs fraîches aux teintes vives et joyeuses.",
        shortDescription: "Bouquet célébration aux teintes vives et joyeuses",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["/images/le-festif-linen.png"],
        tags: ["festif", "coloré", "célébration"],
        inStock: true,
        featured: true,
        occasion: ["anniversaire", "fête"],
    },
    {
        id: "2",
        name: "Gingerbread",
        slug: "gingerbread",
        description: "Un bouquet aux tonalités chaudes évoquant les douceurs de l'hiver. Des teintes cannelle, chocolat et crème.",
        shortDescription: "Bouquet hivernal aux teintes chaleureuses",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["/images/gingerbread-linen.png"],
        tags: ["hiver", "chaleureux", "élégant"],
        inStock: true,
        featured: false,
        occasion: ["noël", "hiver"],
    },
    {
        id: "3",
        name: "Caviar",
        slug: "caviar",
        description: "L'élégance à l'état pur. Ce bouquet aux teintes profondes de violet et de prune respire la sophistication.",
        shortDescription: "Bouquet sophistiqué aux teintes violettes profondes",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["/images/caviar-linen.png"],
        tags: ["luxe", "violet", "sophistiqué"],
        inStock: true,
        featured: true,
        occasion: ["cadeau", "décoration"],
    },
    {
        id: "4",
        name: "Nougatine",
        slug: "nougatine",
        description: "La douceur incarnée dans un bouquet. Des teintes orangées et pêche s'harmonisent délicatement.",
        shortDescription: "Bouquet doux aux teintes orangées et pêche",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["/images/nougatine-linen.png"],
        tags: ["doux", "orange", "pêche"],
        inStock: true,
        featured: false,
        occasion: ["remerciement", "mariage"],
    },
    {
        id: "5",
        name: "Guimauve",
        slug: "guimauve",
        description: "Pure comme la neige fraîchement tombée. Ce bouquet blanc immaculé évoque la pureté.",
        shortDescription: "Bouquet blanc pur et élégant",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["/images/guimauve-linen.png"],
        tags: ["blanc", "pur", "mariage"],
        inStock: true,
        featured: true,
        occasion: ["mariage", "baptême"],
    },
    {
        id: "6",
        name: "Sucre d'Orge",
        slug: "sucre-dorge",
        description: "Romance et délicatesse se rencontrent. Des roses aux teintes rosées composent ce bouquet romantique.",
        shortDescription: "Bouquet romantique aux teintes rosées",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["/images/sucre-dorge-linen.png"],
        tags: ["rose", "romantique", "délicat"],
        inStock: true,
        featured: false,
        occasion: ["saint-valentin", "anniversaire de mariage"],
    },
    {
        id: "7",
        name: "Le Polaire",
        slug: "le-polaire",
        description: "L'hiver dans toute sa splendeur glacée. Ce bouquet aux teintes blanches et argentées capture la magie.",
        shortDescription: "Bouquet hivernal blanc et argenté",
        price: { min: 70, max: 130 },
        category: "bouquet",
        images: ["/images/le-polaire-linen.png"],
        tags: ["hiver", "blanc", "argenté"],
        inStock: true,
        featured: false,
        occasion: ["noël", "nouvel an"],
    },
    {
        id: "8",
        name: "Le Glacé",
        slug: "le-glace",
        description: "Fraîcheur et modernité définissent ce bouquet contemporain. Des fleurs aux teintes froides.",
        shortDescription: "Bouquet contemporain aux teintes fraîches",
        price: { min: 80, max: 140 },
        category: "bouquet",
        images: ["/images/le-glace-linen.png"],
        tags: ["moderne", "frais", "contemporain"],
        inStock: true,
        featured: false,
    },
    {
        id: "9",
        name: "Les Renoncules",
        slug: "les-renoncules",
        description: "Les stars du printemps dans toute leur gloire. Ces renoncules aux pétales délicats apportent grâce.",
        shortDescription: "Bouquet de renoncules printanières",
        price: { min: 65, max: 120 },
        category: "bouquet",
        images: ["/images/les-renoncules-linen.png"],
        tags: ["renoncules", "printemps", "délicat"],
        inStock: true,
        featured: true,
        occasion: ["printemps", "fête des mères"],
    },
    {
        id: "10",
        name: "Les Anémones",
        slug: "les-anemones",
        description: "Mystérieuses et captivantes, les anémones avec leur cœur noir caractéristique créent un contraste saisissant.",
        shortDescription: "Bouquet d'anémones au contraste saisissant",
        price: { min: 70, max: 120 },
        category: "bouquet",
        images: ["/images/les-anemones-linen.png"],
        tags: ["anémones", "contraste", "audacieux"],
        inStock: true,
        featured: false,
    },
    {
        id: "11",
        name: "L'Hivernal",
        slug: "lhivernal",
        description: "Majestueux et généreux, ce grand bouquet capture l'essence de l'hiver. Une composition riche.",
        shortDescription: "Grand bouquet hivernal majestueux",
        price: { min: 90, max: 180 },
        category: "bouquet",
        images: ["/images/l-hivernal-linen.png"],
        tags: ["grand", "hivernal", "majestueux"],
        inStock: true,
        featured: true,
    },
    {
        id: "12",
        name: "Les Tulipes",
        slug: "les-tulipes",
        description: "Simplicité et élégance hollandaise. Ces tulipes fraîches apportent une touche de printemps pur.",
        shortDescription: "Bouquet de tulipes fraîches et joyeuses",
        price: { min: 40, max: 80 },
        category: "bouquet",
        images: ["/images/les-tulipes-linen.png"],
        tags: ["tulipes", "printemps", "simple"],
        inStock: true,
        featured: false,
        occasion: ["quotidien", "printemps"],
    },
    {
        id: "13",
        name: "Le Valentin",
        slug: "le-valentin",
        description: "L'amour en bouquet. Des roses rouges passion et des fleurs délicates composent cette déclaration.",
        shortDescription: "Bouquet romantique aux roses rouges passion",
        price: { min: 40, max: 160 },
        category: "bouquet",
        images: ["/images/le-valentin-linen.png"],
        tags: ["romantique", "roses", "amour"],
        inStock: true,
        featured: true,
        occasion: ["saint-valentin", "déclaration"],
    },
    {
        id: "14",
        name: "L'Élégant",
        slug: "lelegant",
        description: "Le raffinement à son apogée. Ce bouquet sophistiqué marie les plus belles fleurs.",
        shortDescription: "Bouquet raffiné aux harmonies parfaites",
        price: { min: 90, max: 180 },
        category: "bouquet",
        images: ["/images/l-elegant-linen.png"],
        tags: ["élégant", "raffiné", "luxe"],
        inStock: true,
        featured: false,
    },
    {
        id: "15",
        name: "Avalanche de Roses",
        slug: "avalanche-de-roses",
        description: "Un torrent de roses blanches pures. Ce bouquet généreux de roses Avalanche incarne l'élégance.",
        shortDescription: "Généreux bouquet de roses blanches Avalanche",
        price: { min: 40, max: 160 },
        category: "bouquet",
        images: ["/images/avalanche-de-roses-linen.png"],
        tags: ["roses", "blanc", "généreux"],
        inStock: true,
        featured: true,
        occasion: ["mariage", "luxe"],
    },
    {
        id: "16",
        name: "Le Pétillant",
        slug: "le-petillant",
        description: "Joyeux et plein de vie, ce bouquet multicolore apporte une explosion de bonheur.",
        shortDescription: "Bouquet multicolore plein de vie",
        price: { min: 80, max: 170 },
        category: "bouquet",
        images: ["/images/le-petillant-linen.png"],
        tags: ["coloré", "joyeux", "multicolore"],
        inStock: true,
        featured: false,
        occasion: ["anniversaire", "félicitations"],
    },
    {
        id: "17",
        name: "Le Radieux",
        slug: "le-radieux",
        description: "Comme un rayon de soleil capturé dans un bouquet. Des teintes jaunes et orangées.",
        shortDescription: "Bouquet solaire aux teintes jaunes et orangées",
        price: { min: 80, max: 140 },
        category: "bouquet",
        images: ["/images/le-radieux-linen.png"],
        tags: ["solaire", "jaune", "lumineux"],
        inStock: true,
        featured: false,
        occasion: ["rétablissement", "encouragement"],
    },
    {
        id: "18",
        name: "Le Champ",
        slug: "le-champ",
        description: "L'esprit de la campagne en bouquet. Des fleurs champêtres assemblées naturellement.",
        shortDescription: "Bouquet champêtre naturel et frais",
        price: { min: 60, max: 100 },
        category: "bouquet",
        images: ["/images/le-champ-linen.png"],
        tags: ["champêtre", "naturel", "été"],
        inStock: true,
        featured: false,
        occasion: ["mariage champêtre", "été"],
    },
    {
        id: "19",
        name: "La Provence",
        slug: "la-provence",
        description: "Les parfums du Sud en bouquet. Lavande, fleurs de champs et herbes aromatiques.",
        shortDescription: "Bouquet provençal parfumé",
        price: { min: 80 },
        category: "bouquet",
        images: ["/images/la-provence-linen.png"],
        tags: ["provence", "parfumé", "lavande"],
        inStock: true,
        featured: false,
    },
    {
        id: "20",
        name: "Voyage dans la Pampa",
        slug: "voyage-pampa",
        description: "Herbacées séchées et herbes de la pampa créent une composition bohème.",
        shortDescription: "Composition de fleurs séchées bohème",
        price: { min: 20, max: 60 },
        category: "fleurs-sechees",
        images: ["/images/voyage-pampa-linen.png"],
        tags: ["séché", "pampa", "bohème"],
        inStock: true,
        featured: true,
    },
    {
        id: "21",
        name: "Orchidée",
        slug: "orchidee",
        description: "L'orchidée, symbole d'élégance et de longévité. Cette plante sophistiquée.",
        shortDescription: "Orchidée élégante en pot",
        price: { min: 40 },
        category: "plante",
        images: ["/images/orchidee-linen.png"],
        tags: ["orchidée", "plante", "élégant"],
        inStock: true,
        featured: false,
    },
    {
        id: "22",
        name: "Le Terrarium",
        slug: "le-terrarium",
        description: "Un petit monde végétal sous verre. Ce terrarium miniature crée un écosystème autonome.",
        shortDescription: "Terrarium miniature poétique",
        price: { min: 65 },
        category: "plante",
        images: ["/images/le-terrarium-linen.png"],
        tags: ["terrarium", "miniature", "autonome"],
        inStock: true,
        featured: false,
    },
    {
        id: "23",
        name: "Vase Cristal",
        slug: "vase-cristal",
        description: "Un vase en verre cristallin aux lignes épurées. Parfait pour mettre en valeur vos bouquets.",
        shortDescription: "Vase en verre cristallin épuré",
        price: { min: 12, max: 23 },
        category: "accessoire",
        images: ["/images/vase-cristal-linen.png"],
        tags: ["vase", "cristal", "épuré"],
        inStock: true,
        featured: false,
    },
];

export const testimonials = [
    {
        text: "Jardin Digital a transformé notre mariage en un rêve floral. Chaque composition était parfaite.",
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
];

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
    externalLink?: {
        title: string;
        url: string;
    };
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "5 astuces de grand-mère pour conserver votre bouquet de fleurs plus longtemps",
        slug: "5-astuces-grand-mere-conserver-bouquet",
        excerpt: "Vous venez de recevoir un magnifique bouquet ? Voici les secrets bien gardés pour en profiter le plus longtemps possible.",
        content: `
# 5 astuces de grand-mère pour conserver votre bouquet

Recevoir des fleurs est un bonheur, les voir faner trop vite est une petite tristesse. Heureusement, nos grands-mères avaient des solutions simples et efficaces pour prolonger la vie de nos fleurs coupées.

## 1. La coupe en biseau : le secret de l'hydratation
Ne mettez jamais vos fleurs directement dans l'eau ! Coupez toujours les tiges en biais (environ 2 cm) avec un couteau bien aiguisé ou un sécateur. Cela augmente la surface d'absorption de l'eau.

## 2. L'aspirine ou le sucre ?
Une astuce classique : dissoudre une demi-aspirine dans l'eau du vase. L'acide salicylique aide à garder l'eau propre et booste les défenses des fleurs. Alternativement, une cuillère de sucre nourrit les fleurs, mais attention aux bactéries ! Ajoutez quelques gouttes de vinaigre blanc pour les contrer.

## 3. La pièce de monnaie en cuivre
Jeter une petite pièce en cuivre (1, 2 ou 5 centimes) au fond du vase. Le cuivre agit comme un fongicide naturel et ralentit le développement des bactéries qui pourrissent l'eau.

## 4. L'eau tiède, pas glacée
Contrairement aux idées reçues, la plupart des fleurs préfèrent l'eau tiède (environ 20°C) à l'eau glacée. Les molécules d'eau chaude se déplacent plus vite et hydratent la fleur plus rapidement. (Exception pour les tulipes et les fleurs à bulbes qui préfèrent l'eau froide !).

## 5. La nuit au frais
Si vous le pouvez, placez votre bouquet dans une pièce fraîche (comme un cellier ou un balcon abrité, hors gel) pendant la nuit. Cela ralentit le métabolisme des fleurs et leur permet de "se reposer".
    `,
        author: {
            name: "Camille Verdier",
            role: "Maître Fleuriste",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            bio: "15 ans d'expérience en art floral, passionnée par la transmission du savoir.",
        },
        publishedAt: "2026-01-05",
        readingTime: 5,
        category: "Conseils",
        tags: ["entretien", "astuces", "durabilité"],
        image: "/images/blog/blog-astuces-grand-mere.png",
        externalLink: {
            title: "Conseils Interflora",
            url: "https://www.interflora.fr/blog/comment-conserver-fleurs-coupees/"
        },
        featured: true,
    },
    {
        id: "2",
        title: "Mon orchidée ne fleurit plus : comment la faire repartir ?",
        slug: "orchidee-ne-fleurit-plus-comment-faire",
        excerpt: "Votre orchidée fait grise mine et ne produit que des feuilles ? Pas de panique, elle a juste besoin d'un petit coup de pouce.",
        content: `
# Faire refleurir une orchidée : mission possible

L'orchidée Phalaenopsis est la star de nos intérieurs, mais elle est souvent capricieuse. Si la vôtre boude, voici ce qu'il faut vérifier.

## Le choc thermique : la clé de la floraison
C'est le secret n°1. Pour induire la floraison, l'orchidée a besoin de sentir une différence de température entre le jour et la nuit (environ 5 à 10°C d'écart) pendant quelques semaines. Placez-la dans une pièce plus fraîche la nuit (15-16°C).

## La lumière, mais pas le soleil direct
Une orchidée qui ne fleurit pas manque souvent de lumière. Elle doit être près d'une fenêtre (moins d'un mètre), mais attention aux rayons directs du soleil qui brûlent les feuilles. Un voilage est idéal.

## L'arrosage par "bain"
Oubliez l'arrosoir. Baignez le pot (sans mouiller le cœur des feuilles) dans une eau non calcaire à température ambiante pendant 10-15 minutes, une fois par semaine. Laissez bien égoutter. Les racines doivent redevenir vertes. Si elles sont grises, elle a soif !

## La taille stimulante
Une fois la floraison terminée, ne coupez pas la tige à ras ! Coupez au-dessus du 2ème ou 3ème "œil" (les petits renflements sur la tige) en partant du bas. Une nouvelle tige florale peut repartir de là.
    `,
        author: {
            name: "Antoine Fleur",
            role: "Expert Plantes",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio: "Spécialiste des plantes tropicales et d'intérieur.",
        },
        publishedAt: "2026-01-08",
        readingTime: 6,
        category: "Conseils",
        tags: ["orchidée", "plantes", "jardinage"],
        image: "/images/blog/blog-orchidee-entretien.png",
        externalLink: {
            title: "Fiche culture Orchidée",
            url: "https://www.jardiner-malin.fr/fiche/orchidee.html"
        },
        featured: false,
    },
    {
        id: "3",
        title: "Top 10 des plantes increvables pour ceux qui n'ont pas la main verte",
        slug: "top-10-plantes-increvables-sans-main-verte",
        excerpt: "Vous oubliez d'arroser ? Vous vivez dans le noir ? Voici les guerrières végétales qui survivront à (presque) tout.",
        content: `
# Les Survivantes : Plantes pour débutants

Avoir la "main verte" n'est pas inné, et tout le monde n'a pas le temps de chouchouter ses plantes. Voici notre sélection robuste.

1. **Le Zamioculcas (Plante ZZ)** : Tolère l'oubli d'arrosage et le manque de lumière. Quasi immortelle.
2. **Le Sansevieria (Langue de belle-mère)** : Indestructible. Purifie l'air et demande très peu d'eau.
3. **Le Pothos** : Une liane qui pousse vite, partout, et qui vous dit quand elle a soif (ses feuilles s'affaissent légèrement).
4. **Le Cactus** : Le classique. Attention, il lui faut beaucoup de lumière, mais très peu d'eau.
5. **L'Aloe Vera** : Utile (gel apaisant) et facile. Laissez sécher la terre entre deux arrosages.
6. **Le Chlorophytum (Plante araignée)** : Idéale pour les suspensions, elle fait plein de "bébés" faciles à replanter.
7. **Le Monstera Deliciosa** : La star d'Instagram. Elle est plus facile qu'elle n'en a l'air.
8. **Le Caoutchouc (Ficus Elastica)** : Des feuilles robustes et brillantes.
9. **Le Beaucarnea (Pied d'éléphant)** : Il stocke l'eau dans son tronc renflé.
10. **Le Aspidistra** : Surnommée la "plante de fer", elle supporte l'ombre et la négligence.
    `,
        author: {
            name: "Antoine Fleur",
            role: "Expert Plantes",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio: "Spécialiste des plantes tropicales et d'intérieur.",
        },
        publishedAt: "2026-01-10",
        readingTime: 6,
        category: "Conseils",
        tags: ["débutant", "plantes vertes", "facile"],
        image: "/images/blog/blog-plantes-faciles.png",
        externalLink: {
            title: "Plantes faciles",
            url: "https://www.detentejardin.com/plantes/plantes-dinterieur/10-plantes-dinterieur-faciles-pour-ceux-qui-nont-pas-la-main-verte-6534"
        },
        featured: false,
    },
    {
        id: "4",
        title: "Chat et chien : les plantes toxiques à bannir de la maison",
        slug: "plantes-toxiques-chat-chien-maison",
        excerpt: "Nos compagnons à quatre pattes adorent mâchouiller les feuilles. Attention, certaines plantes communes sont de véritables poisons.",
        content: `
# Protégez vos animaux : les plantes à éviter

C'est une question cruciale pour tout propriétaire d'animal. Certaines plantes très populaires sont malheureusement néfastes pour nos amis poilus.

## Les ennemis publics n°1
- **Le Lys** : Extrêmement toxique pour les chats (insuffisance rénale fulgurante). Même le pollen est dangereux. À bannir absolument.
- **Le Dieffenbachia** : Sa sève provoque des gonflements de la bouche et de la langue, risquant l'étouffement.
- **Le Laurier Rose** : Tout est toxique, attention si vous la rentrez l'hiver.

## Les plantes à surveiller (troubles digestifs)
- **Le Ficus**
- **L'Aloe Vera** (la partie verte, pas le gel)
- **Le Monstera**
- **Le Philodendron**

## Les alternatives "Pet Friendly"
Optez pour le **Chlorophytum**, le **Calathea**, le **Pilea** ou les **Fougères de Boston** qui sont sans danger !
    `,
        author: {
            name: "Camille Verdier",
            role: "Maître Fleuriste",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            bio: "Amoureuse des fleurs et des animaux.",
        },
        publishedAt: "2026-01-12",
        readingTime: 4,
        category: "Conseils",
        tags: ["animaux", "sécurité", "plantes"],
        image: "/images/blog/blog-animaux-plantes.png",
        externalLink: {
            title: "Centre Antipoison Animal",
            url: "https://www.centre-antipoison-animal.com/plantes-toxiques.html"
        },
        featured: false,
    },
    {
        id: "5",
        title: "DIY : Comment faire sécher ses fleurs pour une déco bohème ?",
        slug: "faire-secher-fleurs-soi-meme-deco-boheme",
        excerpt: "Ne jetez plus vos bouquets ! Donnez-leur une seconde vie éternelle grâce au séchage. Tuto facile.",
        content: `
# L'art du séchage : immortaliser ses fleurs

La tendance "fleurs séchées" est partout. C'est poétique, durable et très bohème. Et c'est très simple à faire soi-même !

## Quelles fleurs choisir ?
Toutes ne sèchent pas bien. Privilégiez :
*   Les Roses (boutons)
*   La Lavande
*   L'Eucalyptus
*   Le Gypsophile
*   Le Statice
*   L'Hortensia
*   Le Chardon

## La technique de la suspension (Air Drying)
C'est la plus simple.
1.  Retirez le feuillage bas des tiges.
2.  Rassemblez les fleurs en petits bouquets (pas trop serrés pour que l'air circule).
3.  Attachez-les avec un élastique ou de la ficelle.
4.  Suspendez-les **tête en bas** dans une pièce **sombre, sèche et aérée** (un grenier est idéal, ou un placard aéré).
5.  Attendez 2 à 3 semaines.

## L'astuce de la laque
Une fois sèches, vaporisez un peu de laque à cheveux (à 30 cm) pour fixer les parties fragiles et éviter que la poussière ne s'incruste trop.
    `,
        author: {
            name: "Sophie Rose",
            role: "Décoratrice Florale",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            bio: "Passionnée de DIY et de décoration d'intérieur.",
        },
        publishedAt: "2026-01-15",
        readingTime: 5,
        category: "Conseils",
        tags: ["diy", "fleurs séchées", "déco"],
        image: "/images/blog/blog-tuto-sechage.png",
        externalLink: {
            title: "Tuto Fleurs Séchées",
            url: "https://www.marieclaire.fr/idees/comment-faire-secher-des-fleurs,2610264,1154580.asp"
        },
        featured: false,
    },
    {
        id: "6",
        title: "Langage des fleurs : que signifie la couleur des roses ?",
        slug: "signification-couleur-roses-langage-fleurs",
        excerpt: "Rouge, blanc, rose... Ne commettez pas d'impair ! Chaque couleur de rose envoie un message très précis.",
        content: `
# Le code secret des roses

Offrir des roses n'est jamais anodin. Pour ne pas déclarer votre flamme à votre belle-mère ni offrir des fleurs de deuil à un mariage, voici le guide.

## ❤️ Rose Rouge : L'Amour Passion
Le classique absolu. "Je t'aime, je te désire". À réserver à l'être aimé. Offrir 12 roses rouges est une demande en mariage traditionnelle (ou une déclaration très forte).

## 🤍 Rose Blanche : Pureté et Respect
Elle symbolise l'innocence, la pureté et le nouveau départ. C'est la fleur des mariages, mais aussi du respect profond.

## 🩷 Rose Rose : Affection et Tendresse
Moins intense que la rouge, elle exprime la douceur, la tendresse, la gratitude et l'admiration. Parfaite pour une maman, une amie ou un début de relation.

## 💛 Rose Jaune : Amitié... ou Trahison ?
Attention ! Historiquement associée à l'infidélité, elle symbolise aujourd'hui surtout l'amitié, la joie et la bienveillance. Dans un contexte amoureux, elle peut être mal interprétée ("restons amis").

## 🧡 Rose Orange : Désir charnel
Elle exprime l'attirance physique, l'enthousiasme et le désir. Un message clair et épicé !
    `,
        author: {
            name: "Camille Verdier",
            role: "Maître Fleuriste",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            bio: "Gardienne des traditions florales.",
        },
        publishedAt: "2026-01-20",
        readingTime: 4,
        category: "Langage",
        tags: ["roses", "signification", "amour"],
        image: "/images/blog/blog-signification-roses.png",
        externalLink: {
            title: "Langage des Roses",
            url: "https://mag.florajet.com/signification-rose/"
        },
        featured: true,
    },
    {
        id: "7",
        title: "Quelles fleurs offrir pour des condoléances ?",
        slug: "fleurs-condoleances-guide-savoir-vivre",
        excerpt: "Dans les moments difficiles, les fleurs expriment ce que les mots ne peuvent dire. Guide pour choisir sans faux pas.",
        content: `
# Fleurs de deuil : accompagner avec dignité

Choisir des fleurs pour un enterrement est un acte de soutien fort. Voici les codes traditionnels pour vous guider.

## Les fleurs classiques du deuil
*   **Le Lys** : Symbole de pureté de l'âme du défunt. C'est la fleur royale du deuil.
*   **Les Chrysanthèmes** : En France, elles symbolisent l'éternité (d'où leur présence à la Toussaint).
*   **Les Œillets** : Symbole de deuil discret et respectueux.

## Les couleurs appropriées
*   Pour un défunt âgé, on privilégie souvent des tons doux, pastels ou le blanc (paix).
*   Pour une personne plus jeune, des tons plus colorés peuvent être choisis pour célébrer la vie.
*   Le mauve et le blanc sont les associations les plus traditionnelles.

## Les formes
*   **La couronne** : Réservée à la famille proche.
*   **La gerbe à main** : Le choix idéal pour les amis et collègues.
*   **Le coussin** : Une pièce formelle et élégante.
    `,
        author: {
            name: "Camille Verdier",
            role: "Maître Fleuriste",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            bio: "Experte en accompagnement floral.",
        },
        publishedAt: "2026-01-22",
        readingTime: 4,
        category: "Langage",
        tags: ["deuil", "condoléances", "étiquette"],
        image: "/images/blog/blog-fleurs-condoleances.png",
        externalLink: {
            title: "Fleurs de deuil",
            url: "https://www.interflora.fr/blog/quelles-fleurs-deuil-choisir/"
        },
        featured: false,
    },
    {
        id: "8",
        title: "Pivoines, renoncules, anémones : leur symbolique secrète",
        slug: "pivoines-renoncules-anemones-symbolique",
        excerpt: "Elles sont les stars d'Instagram au printemps, mais connaissez-vous leur histoire et leur signification ?",
        content: `
# Les stars du printemps décodées

Elles nous font tous craquer dès les premiers beaux jours. Mais que racontent-elles ?

## La Pivoine : Reine de la chance
En Chine, elle incarne la richesse et l'honneur. En langage floral occidental, elle symbolise la **timidité** et la protection. Offrir des pivoines, c'est souhaiter prospérité et bonheur. C'est aussi la fleur des 12 ans de mariage.

## La Renoncule : "Tu es radieuse"
Avec ses multiples pétales serrés comme une jupe de haute couture, la renoncule signifie : "Je suis ébloui par ton charme". C'est une fleur de séduction élégante et raffinée.

## L'Anémone : L'attente et la persévérance
Sa beauté est fragile. Dans la mythologie grecque, elle est née des larmes d'Aphrodite pleurant Adonis. Elle symbolise l'affection sincère, mais aussi une certaine forme d'abandon ou d'attente amoureuse.
    `,
        author: {
            name: "Sophie Rose",
            role: "Décoratrice Florale",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            bio: "Passionnée par l'histoire des fleurs.",
        },
        publishedAt: "2026-03-10",
        readingTime: 3,
        category: "Langage",
        tags: ["pivoines", "printemps", "tendance"],
        image: "/images/blog/blog-pivoines-renoncules.png",
        externalLink: {
            title: "Symbolique des fleurs",
            url: "https://www.lajoiedesfleurs.fr/"
        },
        featured: false,
    },
    {
        id: "9",
        title: "Saint-Valentin : 5 alternatives originales à la rose rouge",
        slug: "saint-valentin-alternatives-roses-rouges",
        excerpt: "Envie de surprendre votre moitié ? Osez l'originalité cette année et sortez du cliché de la rose rouge hors de prix.",
        content: `
# Oser l'originalité pour la Saint-Valentin

La rose rouge est magnifique, mais elle est devenue un standard parfois un peu impersonnel (et très cher le 14 février !). Voici comment marquer des points avec originalité.

1.  **La Tulipe Rouge** : En Turquie et en Iran, c'est ELLE la véritable fleur de l'amour parfait. Élégante et simple.
2.  **L'Orchidée** : Pour un amour sophistiqué, durable et sensuel. C'est un cadeau qui dure des mois.
3.  **Le Renoncule** : Pour dire "Je suis ébloui par toi". Une alternative très romantique et foisonnante à la rose.
4.  **Le Lilas** : Pour les premiers émois et les jeunes amours. Son parfum est envoûtant.
5.  **Un bouquet de fleurs séchées** : Pour dire "Mon amour est éternel". Très tendance et déco.
    `,
        author: {
            name: "Antoine Fleur",
            role: "Directeur Artistique",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio: "Toujours à la recherche de nouvelles tendances.",
        },
        publishedAt: "2026-02-01",
        readingTime: 4,
        category: "Saison",
        tags: ["saint-valentin", "amour", "originalité"],
        image: "/images/blog/blog-saint-valentin-alt.png",
        externalLink: {
            title: "Alternatives Saint-Valentin",
            url: "https://www.femmeactuelle.fr/jardin/jardinage/saint-valentin-quelles-fleurs-offrir-a-la-place-des-roses-rouges-2128795"
        },
        featured: false,
    },
    {
        id: "10",
        title: "Fête des Mères : Quelle plante offrir selon sa personnalité ?",
        slug: "fete-des-meres-quelle-plante-choisir",
        excerpt: "Votre maman est-elle plutôt bohème, chic, ou aventurière ? Trouvez la plante qui lui ressemble vraiment.",
        content: `
# À chaque Maman sa plante idéale

Pour la Fête des Mères, évitez le bouquet de supermarché attrapé à la dernière minute. Personnalisez votre choix !

*   **Maman Chic & Design** : Une **Orchidée blanche** majestueuse ou un **Anthurium**. Des lignes pures pour un intérieur soigné.
*   **Maman Bohème & Nature** : Un grand bouquet de **Fleurs séchées** ou un **Panier champêtre** (pivoines, camomille).
*   **Maman "Main Verte"** : Un **Rosier de jardin** ou un **Citronnier**. Elle aimera s'en occuper et le voir grandir.
*   **Maman Zen** : Un **Bonsaï** ou un **Terrarium**. Pour la détente et la sérénité.
*   **Maman Gourmande** : Un plant de **Fraisiers** ou de **Tomates cerises** en pot !
    `,
        author: {
            name: "Camille Verdier",
            role: "Maître Fleuriste",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            bio: "Experte en cadeaux qui font plaisir.",
        },
        publishedAt: "2026-05-15",
        readingTime: 5,
        category: "Saison",
        tags: ["fête des mères", "cadeau", "famille"],
        image: "/images/blog/blog-fete-des-meres.png",
        externalLink: {
            title: "Idées Cdeaux Maman",
            url: "https://www.bergamotte.fr/blog/fete-des-meres-toutes-nos-idees-cadeaux"
        },
        featured: true,
    },
    {
        id: "11",
        title: "Mariage 2026 : Les tendances florales à ne pas manquer",
        slug: "tendances-fleurs-mariage-2026",
        excerpt: "Futures mariées, découvrez ce qui fera fureur cette année. Du retour de la couleur à l'écologie.",
        content: `
# Mariages 2026 : Retour à la joie !

Cette année, le mariage s'affranchit des codes trop rigides. Voici les grandes tendances florales.

## 1. L'explosion de couleurs (Viva Magenta !)
Fini le tout blanc/vert minimaliste. 2026 voit le retour des couleurs vibrantes : fuchsia, orange brûlé, jaune moutarde. On veut de la fête !

## 2. Le "No Floral Foam" (Sans mousse florale)
C'est la grande révolution écologique des fleuristes. On abandonne la mousse verte polluante pour du grillage à poule ou des pique-fleurs (kenzan). Les compositions sont plus aériennes et sauvages.

## 3. Les fleurs locales et de saison (Slow Flower)
Les mariés sont de plus en plus soucieux de l'empreinte carbone de leur jour J. On privilégie les fleurs françaises de saison, quitte à adapter le choix des variétés.

## 4. Les installations suspendues
Des nuages de fleurs au-dessus des tables ("Flower Clouds") pour un effet "waouh" garanti sans encombrer la table.
    `,
        author: {
            name: "Sophie Rose",
            role: "Décoratrice Florale",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            bio: "Spécialiste des mariages et grands décors.",
        },
        publishedAt: "2026-04-01",
        readingTime: 6,
        category: "Saison",
        tags: ["mariage", "tendances", "2026"],
        image: "/images/blog/blog-tendances-mariage-2026.png",
        externalLink: {
            title: "Tendances Mariage",
            url: "https://www.mariages.net/articles/tendances-fleurs-mariage--c5678"
        },
        featured: false,
    },
    {
        id: "12",
        title: "Décoration de Noël : Réaliser son centre de table fleuri",
        slug: "diy-centre-table-noel-fleuri",
        excerpt: "Impressionnez vos invités avec une création maison digne d'un pro. Sapin, houx, bougies : le tuto pas à pas.",
        content: `
# Tuto : Votre centre de table de Noël

Rien ne vaut une table de fête décorée avec des éléments naturels. Voici une recette simple pour un centre de table allongé.

**Matériel :**
*   Quelques branches de sapin (Nobilis, il ne perd pas ses aiguilles)
*   Des branches d'Eucalyptus
*   De l'Ilex (houx à boules rouges)
*   Des pommes de pin
*   3 grosses bougies piliers
*   Du fil de fer fin

**Étapes :**
1.  Disposez vos branches de sapin à plat au centre, en les faisant se chevaucher pour créer une longueur. Liez-les discrètement avec du fil de fer.
2.  Insérez l'Eucalyptus pour donner du volume et de la légèreté.
3.  Placez vos 3 bougies à intervalles réguliers au milieu de la verdure.
4.  Piquez les branches d'Ilex pour apporter la touche rouge.
5.  Déposez les pommes de pin et quelques boules de Noël de votre choix.
6.  *Astuce :* Ajoutez une guirlande LED fine à piles dans les branchages pour la magie !
    `,
        author: {
            name: "Sophie Rose",
            role: "Décoratrice Florale",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            bio: "Fan inconditionnelle de Noël.",
        },
        publishedAt: "2025-12-01",
        readingTime: 5,
        category: "Saison",
        tags: ["noël", "diy", "décoration"],
        image: "/images/blog/blog-diy-noel.png",
        externalLink: {
            title: "Déco Noël Maison",
            url: "https://www.cotemaison.fr/noel_11532.html"
        },
        featured: false,
    },
    {
        id: "13",
        title: "Muguet du 1er mai : Histoire, tradition et entretien",
        slug: "muguet-1er-mai-histoire-entretien",
        excerpt: "Pourquoi offre-t-on du muguet le 1er mai ? Est-ce vraiment un porte-bonheur ? Tout sur cette clochette parfumée.",
        content: `
# Le Muguet : Porte-bonheur royal

Le 1er mai, la France entière s'offre des brins de muguet. Mais d'où vient cette tradition ?

## L'histoire royale
En 1561, le roi Charles IX reçoit un brin de muguet en guise de porte-bonheur. Charmé, il décide d'en offrir chaque année aux dames de la cour. La tradition était née ! Elle s'est ensuite démocratisée au début du 20ème siècle, associée à la Fête du Travail.

## 13 clochettes ?
La légende dit qu'un brin comptant exactement 13 clochettes porte un bonheur absolu. Comptez bien !

## Attention, poison !
Aussi joli soit-il, le muguet est hautement toxique (feuilles, fleurs et même l'eau du vase). Attention aux enfants et aux chats !

## Entretien
Le muguet aime la fraîcheur. Ne le mettez pas au soleil. S'il est en pot, vous pouvez le replanter au jardin à l'ombre après la floraison, il reviendra l'année prochaine !
    `,
        author: {
            name: "Antoine Fleur",
            role: "Expert Plantes",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio: "Amoureux de l'histoire botanique.",
        },
        publishedAt: "2026-04-25",
        readingTime: 3,
        category: "Saison",
        tags: ["muguet", "1er mai", "histoire"],
        image: "/images/blog/blog-muguet-histoire.png",
        externalLink: {
            title: "Histoire du Muguet",
            url: "https://www.geo.fr/histoire/pourquoi-offre-t-on-du-muguet-le-1er-mai-195328"
        },
        featured: false,
    },
    {
        id: "14",
        title: "Terrarium : Le mini-jardin qui ne demande (presque) aucun soin",
        slug: "terrarium-jardin-interieur-sans-entretien",
        excerpt: "C'est l'objet déco végétal par excellence. Découvrez comment fonctionne cet écosystème fascinant en bocal.",
        content: `
# Le Terrarium : Un monde en bocal

Le terrarium fermé est un écosystème quasi-autonome. C'est le végétal idéal pour ceux qui n'ont pas la main verte ou qui voyagent souvent.

## Le principe du cycle de l'eau
Les plantes transpirent, l'eau se condense sur les parois du verre, et retombe dans la terre pour arroser les racines. Un cycle perpétuel !

## Quel entretien ?
Vraiment minimal.
1.  **Lumière** : Beaucoup de clarté, mais JAMAIS de soleil direct (effet loupe qui cuirait les plantes).
2.  **Arrosage** : 1 à 2 fois... par an ! Si la terre semble sèche ou qu'il n'y a plus de condensation le matin, ajoutez une cuillère d'eau.
3.  **Taille** : Si une feuille touche la paroi et moisit, coupez-la.

C'est tout. Profitez de votre petit monde !
    `,
        author: {
            name: "Antoine Fleur",
            role: "Expert Plantes",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio: "Fan de terrariums et d'aquascaping.",
        },
        publishedAt: "2026-02-15",
        readingTime: 4,
        category: "Décoration",
        tags: ["terrarium", "plantes", "design"],
        image: "/images/blog/blog-terrarium-guide.png",
        externalLink: {
            title: "Créer son Terrarium",
            url: "https://www.rustica.fr/plantes-vertes/creer-terrarium-plantes,13271.html"
        },
        featured: false,
    },
    {
        id: "15",
        title: "Les plantes dépolluantes : mythe ou réalité ?",
        slug: "plantes-depolluantes-mythe-realite",
        excerpt: "Peut-on vraiment purifier l'air de sa maison avec des plantes ? Démêlons le vrai du faux sur les études de la NASA.",
        content: `
# Plantes dépolluantes : Le grand débat

On entend souvent dire que le Spathiphyllum ou le Lierre absorbent les polluants intérieurs (formaldéhyde, benzène...). Qu'en est-il vraiment ?

## L'étude de la NASA (1989)
La NASA a prouvé qu'en milieu clos et étanche, certaines plantes filtrent les toxines.
**Les championnes :**
*   Le Lierre (Hedera Helix)
*   Le Chlorophytum
*   Le Spathiphyllum (Fleur de Lune)
*   La Sansevieria

## La réalité dans nos maisons
Dans une vraie maison (qui n'est pas un laboratoire hermétique), l'air circule beaucoup. Pour avoir l'efficacité mesurée par la NASA, il faudrait... une centaine de plantes par pièce !

## Verdict ?
Oui, elles dépolluent un peu, mais la meilleure purification reste **l'aération quotidienne** de 10 minutes. Cependant, les plantes augmentent l'humidité de l'air (bon pour nos voies respiratoires) et apaisent le stress mental. C'est déjà énorme !
    `,
        author: {
            name: "Antoine Fleur",
            role: "Expert Plantes",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio: "Approche scientifique du végétal.",
        },
        publishedAt: "2026-03-01",
        readingTime: 5,
        category: "Bien-être",
        tags: ["dépolluant", "santé", "maison"],
        image: "/images/blog/blog-plantes-depolluantes.png",
        externalLink: {
            title: "Avis ADEME",
            url: "https://www.ademe.fr/"
        },
        featured: false,
    },
    {
        id: "16",
        title: "Fleurs comestibles : Mettez de la couleur dans vos assiettes",
        slug: "fleurs-comestibles-cuisine",
        excerpt: "De la capucine à la bourrache, découvrez comment surprendre vos invités en mangeant vos bouquets (mais pas n'importe lesquels !).",
        content: `
# Osez manger des fleurs !

Les fleurs ne sont pas que pour les yeux, elles sont aussi pour les papilles. C'est la touche finale qui transforme une salade banale en plat de chef.

## Les incontournables faciles
1.  **La Capucine** : Saveur poivrée, piquante (proche du radis). Idéale en salade.
2.  **La Bourrache** : Superbe petite étoile bleue, elle a un goût iodé d'huître ou de concombre. Magique sur un poisson.
3.  **La Pensée / Violette** : Saveur douce et herbacée. Magnifique sur les desserts.
4.  **La Fleur de Courgette** : À farcir ou en beignet. Un classique niçois.
5.  **La Ciboulette** : Les pompons violets se mangent et ont un goût d'oignon frais.

## ⚠️ Attention absolue
Ne mangez JAMAIS les fleurs d'un bouquet de fleuriste traditionnel (elles sont traitées). Cuisinez uniquement :
*   Les fleurs de votre jardin (sans pesticides).
*   Les fleurs achetées au rayon frais alimentaire.
*   Certaines fleurs sont TOXIQUES (Muguet, Laurier rose...). Ne mangez que ce que vous identifiez à 100%.
    `,
        author: {
            name: "Sophie Rose",
            role: "Décoratrice Florale",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            bio: "Gourmande et esthète.",
        },
        publishedAt: "2026-06-10",
        readingTime: 4,
        category: "Lifestyle",
        tags: ["cuisine", "fleurs comestibles", "recette"],
        image: "/images/blog/blog-fleurs-comestibles.png",
        externalLink: {
            title: "Recettes Fleurs",
            url: "https://www.marmiton.org/recettes/selection_fleurs_comestibles.aspx"
        },
        featured: false,
    },
    {
        id: "17",
        title: "Pourquoi choisir un artisan fleuriste plutôt que le supermarché ?",
        slug: "pourquoi-choisir-artisan-fleuriste",
        excerpt: "Prix, qualité, conservation... On vous dit toute la vérité sur la différence entre nos fleurs et celles de la grande distribution.",
        content: `
# Artisan vs Supermarché : Le match vérité

"C'est plus cher chez le fleuriste". C'est souvent ce qu'on pense. Mais qu'achetez-vous vraiment ?

## 1. La Fraîcheur et la Durée de Vie
En supermarché, les fleurs subissent des chaînes logistiques longues et sont souvent stockées sans eau ou au froid excessif. Elles s'ouvrent vite, mais fanent en 3 jours.
Chez nous, les arrivages sont quotidiens. Nos fleurs sont préparées, hydratées et conservées à température idéale. Résultat : un bouquet qui tient 7, 10, parfois 15 jours.

## 2. Le Savoir-Faire (Le "Nettoyage")
Un artisan ne met pas juste des fleurs dans un papier. Nous "nettoyons" chaque tige (feuilles, épines), ce qui évite à l'eau de pourrir. Nous composons des harmonies de textures et de formes. C'est un métier d'art.

## 3. L'Origine et l'Éthique
Nous privilégions de plus en plus les producteurs locaux (Var, Île-de-France) et de saison. Pas de roses du Kenya en plein été. Nous connaissons nos producteurs.

## 4. Le Conseil
Une plante pour une salle de bain sombre ? Un bouquet pour un premier rendez-vous sans en faire trop ? Nous sommes là pour ça. Le conseil fait partie du prix.

Choisir un artisan, c'est soutenir le commerce de proximité et s'assurer d'offrir une émotion pure, pas juste un produit standardisé.
    `,
        author: {
            name: "Camille Verdier",
            role: "Maître Fleuriste",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            bio: "Engagée pour l'artisanat français.",
        },
        publishedAt: "2026-01-30",
        readingTime: 5,
        category: "Local",
        tags: ["artisanat", "qualité", "valeurs"],
        image: "/images/blog/blog-artisan-fleuriste.png",
        externalLink: {
            title: "Collectif Fleuristes",
            url: "https://www.collectiffleuristes.fr/"
        },
        featured: true,
    },
];

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
