// Script de migration : envoie tous les articles de blog vers Supabase via l'API REST
// Commande : node scripts/migrate-blog.mjs

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Lire les variables d'environnement depuis .env.local
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '../.env.local');
const envContent = readFileSync(envPath, 'utf-8');
const envVars = Object.fromEntries(
    envContent.split('\n')
        .filter(line => line.includes('='))
        .map(line => {
            const [key, ...vals] = line.split('=');
            return [key.trim(), vals.join('=').trim()];
        })
);

const SUPABASE_URL = envVars['NEXT_PUBLIC_SUPABASE_URL'];
const SUPABASE_KEY = envVars['NEXT_PUBLIC_SUPABASE_ANON_KEY'];

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Variables manquantes dans .env.local');
    process.exit(1);
}

// ─── Tous les articles de blog ───────────────────────────────────────────────
const blogPosts = [
    {
        title: "5 astuces de grand-mère pour conserver votre bouquet de fleurs plus longtemps",
        slug: "5-astuces-grand-mere-conserver-bouquet",
        excerpt: "Vous venez de recevoir un magnifique bouquet ? Voici les secrets bien gardés pour en profiter le plus longtemps possible.",
        content: `# 5 astuces de grand-mère pour conserver votre bouquet\n\nRecevoir des fleurs est un bonheur, les voir faner trop vite est une petite tristesse.\n\n## 1. La coupe en biseau\nCoupez toujours les tiges en biais (environ 2 cm) avec un couteau bien aiguisé.\n\n## 2. L'aspirine ou le sucre ?\nDissoudre une demi-aspirine dans l'eau du vase. L'acide salicylique aide à garder l'eau propre.\n\n## 3. La pièce de monnaie en cuivre\nJeter une petite pièce en cuivre au fond du vase. Le cuivre agit comme un fongicide naturel.\n\n## 4. L'eau tiède, pas glacée\nLa plupart des fleurs préfèrent l'eau tiède (environ 20°C). Exception pour les tulipes.\n\n## 5. La nuit au frais\nPlacez votre bouquet dans une pièce fraîche pendant la nuit. Cela ralentit le métabolisme des fleurs.`,
        author: { name: "Camille Verdier", role: "Maître Fleuriste", image: "https://randomuser.me/api/portraits/women/32.jpg", bio: "15 ans d'expérience en art floral." },
        published_at: "2026-01-05",
        reading_time: 5,
        category: "Conseils",
        tags: ["entretien", "astuces", "durabilité"],
        image: "/images/blog/blog-astuces-grand-mere.png",
        featured: true,
        external_link: { title: "Conseils Interflora", url: "https://www.interflora.fr/blog/comment-conserver-fleurs-coupees/" }
    },
    {
        title: "Mon orchidée ne fleurit plus : comment la faire repartir ?",
        slug: "orchidee-ne-fleurit-plus-comment-faire",
        excerpt: "Votre orchidée fait grise mine et ne produit que des feuilles ? Pas de panique, elle a juste besoin d'un petit coup de pouce.",
        content: `# Faire refleurir une orchidée : mission possible\n\n## Le choc thermique : la clé de la floraison\nL'orchidée a besoin d'une différence de température entre le jour et la nuit (5 à 10°C d'écart). Placez-la dans une pièce plus fraîche la nuit (15-16°C).\n\n## La lumière, mais pas le soleil direct\nElle doit être près d'une fenêtre (moins d'un mètre), mais pas les rayons directs du soleil.\n\n## L'arrosage par "bain"\nBaignez le pot dans une eau non calcaire pendant 10-15 minutes, une fois par semaine.\n\n## La taille stimulante\nCoupez au-dessus du 2ème ou 3ème "œil" en partant du bas. Une nouvelle tige florale peut repartir de là.`,
        author: { name: "Antoine Fleur", role: "Expert Plantes", image: "https://randomuser.me/api/portraits/men/45.jpg", bio: "Spécialiste des plantes tropicales et d'intérieur." },
        published_at: "2026-01-08",
        reading_time: 6,
        category: "Conseils",
        tags: ["orchidée", "plantes", "jardinage"],
        image: "/images/blog/blog-orchidee-entretien.png",
        featured: false,
        external_link: { title: "Fiche culture Orchidée", url: "https://www.jardiner-malin.fr/fiche/orchidee.html" }
    },
    {
        title: "Top 10 des plantes increvables pour ceux qui n'ont pas la main verte",
        slug: "top-10-plantes-increvables-sans-main-verte",
        excerpt: "Vous oubliez d'arroser ? Vous vivez dans le noir ? Voici les guerrières végétales qui survivront à (presque) tout.",
        content: `# Les Survivantes : Plantes pour débutants\n\n1. **Le Zamioculcas (Plante ZZ)** : Tolère l'oubli d'arrosage et le manque de lumière. Quasi immortelle.\n2. **Le Sansevieria** : Indestructible. Purifie l'air et demande très peu d'eau.\n3. **Le Pothos** : Une liane qui pousse vite, partout.\n4. **Le Cactus** : Le classique. Beaucoup de lumière, très peu d'eau.\n5. **L'Aloe Vera** : Utile (gel apaisant) et facile.\n6. **Le Chlorophytum** : Idéale pour les suspensions, elle fait plein de "bébés".\n7. **Le Monstera Deliciosa** : La star d'Instagram. Plus facile qu'elle n'en a l'air.\n8. **Le Caoutchouc (Ficus Elastica)** : Des feuilles robustes et brillantes.\n9. **Le Beaucarnea (Pied d'éléphant)** : Il stocke l'eau dans son tronc renflé.\n10. **Le Aspidistra** : Surnommée la "plante de fer", elle supporte l'ombre.`,
        author: { name: "Antoine Fleur", role: "Expert Plantes", image: "https://randomuser.me/api/portraits/men/45.jpg", bio: "Spécialiste des plantes tropicales et d'intérieur." },
        published_at: "2026-01-10",
        reading_time: 6,
        category: "Conseils",
        tags: ["débutant", "plantes vertes", "facile"],
        image: "/images/blog/blog-plantes-faciles.png",
        featured: false,
        external_link: { title: "Plantes faciles", url: "https://www.detentejardin.com/plantes/plantes-dinterieur/10-plantes-dinterieur-faciles-pour-ceux-qui-nont-pas-la-main-verte-6534" }
    },
    {
        title: "Chat et chien : les plantes toxiques à bannir de la maison",
        slug: "plantes-toxiques-chat-chien-maison",
        excerpt: "Nos compagnons à quatre pattes adorent mâchouiller les feuilles. Attention, certaines plantes communes sont de véritables poisons.",
        content: `# Protégez vos animaux : les plantes à éviter\n\n## Les ennemis publics n°1\n- **Le Lys** : Extrêmement toxique pour les chats. À bannir absolument.\n- **Le Dieffenbachia** : Sa sève provoque des gonflements de la bouche.\n- **Le Laurier Rose** : Tout est toxique.\n\n## Les plantes à surveiller\n- Le Ficus, L'Aloe Vera (la partie verte), Le Monstera, Le Philodendron\n\n## Les alternatives "Pet Friendly"\nLe Chlorophytum, le Calathea, le Pilea ou les Fougères de Boston sont sans danger !`,
        author: { name: "Camille Verdier", role: "Maître Fleuriste", image: "https://randomuser.me/api/portraits/women/32.jpg", bio: "Amoureuse des fleurs et des animaux." },
        published_at: "2026-01-12",
        reading_time: 4,
        category: "Conseils",
        tags: ["animaux", "sécurité", "plantes"],
        image: "/images/blog/blog-animaux-plantes.png",
        featured: false,
        external_link: { title: "Centre Antipoison Animal", url: "https://www.centre-antipoison-animal.com/plantes-toxiques.html" }
    },
    {
        title: "DIY : Comment faire sécher ses fleurs pour une déco bohème ?",
        slug: "faire-secher-fleurs-soi-meme-deco-boheme",
        excerpt: "Ne jetez plus vos bouquets ! Donnez-leur une seconde vie éternelle grâce au séchage. Tuto facile.",
        content: `# L'art du séchage : immortaliser ses fleurs\n\nLa tendance "fleurs séchées" est partout. C'est poétique, durable et très bohème.\n\n## Quelles fleurs choisir ?\nPrivilégiez les Roses (boutons), la Lavande, l'Eucalyptus, le Gypsophile, le Statice, l'Hortensia, le Chardon.\n\n## La technique de la suspension\n1. Retirez le feuillage bas des tiges.\n2. Rassemblez les fleurs en petits bouquets.\n3. Attachez-les avec un élastique.\n4. Suspendez-les **tête en bas** dans une pièce **sombre, sèche et aérée**.\n5. Attendez 2 à 3 semaines.\n\n## L'astuce de la laque\nVaporisez un peu de laque à cheveux pour fixer les parties fragiles.`,
        author: { name: "Sophie Rose", role: "Décoratrice Florale", image: "https://randomuser.me/api/portraits/women/65.jpg", bio: "Passionnée de DIY et de décoration d'intérieur." },
        published_at: "2026-01-15",
        reading_time: 5,
        category: "Conseils",
        tags: ["diy", "fleurs séchées", "déco"],
        image: "/images/blog/blog-tuto-sechage.png",
        featured: false,
        external_link: { title: "Tuto Fleurs Séchées", url: "https://www.marieclaire.fr/idees/comment-faire-secher-des-fleurs,2610264,1154580.asp" }
    },
    {
        title: "Langage des fleurs : que signifie la couleur des roses ?",
        slug: "signification-couleur-roses-langage-fleurs",
        excerpt: "Rouge, blanc, rose... Ne commettez pas d'impair ! Chaque couleur de rose envoie un message très précis.",
        content: `# Le code secret des roses\n\n## Rose Rouge : L'Amour Passion\nLe classique absolu. "Je t'aime, je te désire". À réserver à l'être aimé.\n\n## Rose Blanche : Pureté et Respect\nElle symbolise l'innocence, la pureté et le nouveau départ. La fleur des mariages.\n\n## Rose Rose : Affection et Tendresse\nElle exprime la douceur, la gratitude et l'admiration. Parfaite pour une maman.\n\n## Rose Jaune : Amitié\nHistoriquement associée à l'infidélité, elle symbolise aujourd'hui surtout l'amitié et la joie.\n\n## Rose Orange : Désir\nElle exprime l'attirance physique, l'enthousiasme et le désir.`,
        author: { name: "Camille Verdier", role: "Maître Fleuriste", image: "https://randomuser.me/api/portraits/women/32.jpg", bio: "Gardienne des traditions florales." },
        published_at: "2026-01-20",
        reading_time: 4,
        category: "Langage",
        tags: ["roses", "signification", "amour"],
        image: "/images/blog/blog-signification-roses.png",
        featured: true,
        external_link: { title: "Langage des Roses", url: "https://mag.florajet.com/signification-rose/" }
    },
    {
        title: "Quelles fleurs offrir pour des condoléances ?",
        slug: "fleurs-condoleances-guide-savoir-vivre",
        excerpt: "Dans les moments difficiles, les fleurs expriment ce que les mots ne peuvent dire. Guide pour choisir sans faux pas.",
        content: `# Fleurs de deuil : accompagner avec dignité\n\n## Les fleurs classiques du deuil\n- **Le Lys** : Symbole de pureté de l'âme du défunt.\n- **Les Chrysanthèmes** : En France, elles symbolisent l'éternité.\n- **Les Œillets** : Symbole de deuil discret et respectueux.\n\n## Les couleurs appropriées\nDes tons doux, pastels ou le blanc (paix). Le mauve et le blanc sont les plus traditionnels.\n\n## Les formes\n- **La couronne** : Réservée à la famille proche.\n- **La gerbe à main** : Le choix idéal pour les amis et collègues.\n- **Le coussin** : Une pièce formelle et élégante.`,
        author: { name: "Camille Verdier", role: "Maître Fleuriste", image: "https://randomuser.me/api/portraits/women/32.jpg", bio: "Experte en accompagnement floral." },
        published_at: "2026-01-22",
        reading_time: 4,
        category: "Langage",
        tags: ["deuil", "condoléances", "étiquette"],
        image: "/images/blog/blog-fleurs-condoleances.png",
        featured: false,
        external_link: { title: "Fleurs de deuil", url: "https://www.interflora.fr/blog/quelles-fleurs-deuil-choisir/" }
    },
    {
        title: "Pivoines, renoncules, anémones : leur symbolique secrète",
        slug: "pivoines-renoncules-anemones-symbolique",
        excerpt: "Elles sont les stars d'Instagram au printemps, mais connaissez-vous leur histoire et leur signification ?",
        content: `# Les stars du printemps décodées\n\n## La Pivoine : Reine de la chance\nEn Chine, elle incarne la richesse et l'honneur. Elle symbolise la timidité et la protection.\n\n## La Renoncule : "Tu es radieuse"\nAvec ses multiples pétales, la renoncule signifie : "Je suis ébloui par ton charme".\n\n## L'Anémone : L'attente et la persévérance\nDans la mythologie grecque, elle est née des larmes d'Aphrodite. Elle symbolise l'affection sincère.`,
        author: { name: "Sophie Rose", role: "Décoratrice Florale", image: "https://randomuser.me/api/portraits/women/65.jpg", bio: "Passionnée par l'histoire des fleurs." },
        published_at: "2026-03-10",
        reading_time: 3,
        category: "Langage",
        tags: ["pivoines", "printemps", "tendance"],
        image: "/images/blog/blog-pivoines-renoncules.png",
        featured: false,
        external_link: { title: "Symbolique des fleurs", url: "https://www.lajoiedesfleurs.fr/" }
    },
    {
        title: "Saint-Valentin : 5 alternatives originales à la rose rouge",
        slug: "saint-valentin-alternatives-roses-rouges",
        excerpt: "Envie de surprendre votre moitié ? Osez l'originalité cette année et sortez du cliché de la rose rouge hors de prix.",
        content: `# Oser l'originalité pour la Saint-Valentin\n\n1. **La Tulipe Rouge** : En Turquie et en Iran, c'est ELLE la véritable fleur de l'amour parfait.\n2. **L'Orchidée** : Pour un amour sophistiqué, durable et sensuel. Un cadeau qui dure des mois.\n3. **La Renoncule** : Pour dire "Je suis ébloui par toi".\n4. **Le Lilas** : Pour les premiers émois. Son parfum est envoûtant.\n5. **Un bouquet de fleurs séchées** : Pour dire "Mon amour est éternel". Très tendance et déco.`,
        author: { name: "Antoine Fleur", role: "Directeur Artistique", image: "https://randomuser.me/api/portraits/men/45.jpg", bio: "Toujours à la recherche de nouvelles tendances." },
        published_at: "2026-02-01",
        reading_time: 4,
        category: "Saison",
        tags: ["saint-valentin", "amour", "originalité"],
        image: "/images/blog/blog-saint-valentin-alt.png",
        featured: false,
        external_link: { title: "Alternatives Saint-Valentin", url: "https://www.femmeactuelle.fr/jardin/jardinage/saint-valentin-quelles-fleurs-offrir-a-la-place-des-roses-rouges-2128795" }
    },
    {
        title: "Fête des Mères : Quelle plante offrir selon sa personnalité ?",
        slug: "fete-des-meres-quelle-plante-choisir",
        excerpt: "Votre maman est-elle plutôt bohème, chic, ou aventurière ? Trouvez la plante qui lui ressemble vraiment.",
        content: `# À chaque Maman sa plante idéale\n\n- **Maman Chic & Design** : Une **Orchidée blanche** ou un **Anthurium**.\n- **Maman Bohème & Nature** : Un grand bouquet de **Fleurs séchées** ou un **Panier champêtre**.\n- **Maman "Main Verte"** : Un **Rosier de jardin** ou un **Citronnier**.\n- **Maman Zen** : Un **Bonsaï** ou un **Terrarium**.\n- **Maman Gourmande** : Un plant de **Fraisiers** ou de **Tomates cerises** en pot !`,
        author: { name: "Camille Verdier", role: "Maître Fleuriste", image: "https://randomuser.me/api/portraits/women/32.jpg", bio: "Experte en cadeaux qui font plaisir." },
        published_at: "2026-05-15",
        reading_time: 5,
        category: "Saison",
        tags: ["fête des mères", "cadeau", "famille"],
        image: "/images/blog/blog-fete-des-meres.png",
        featured: true,
        external_link: { title: "Idées Cadeaux Maman", url: "https://www.bergamotte.fr/blog/fete-des-meres-toutes-nos-idees-cadeaux" }
    },
    {
        title: "Mariage 2026 : Les tendances florales à ne pas manquer",
        slug: "tendances-fleurs-mariage-2026",
        excerpt: "Futures mariées, découvrez ce qui fera fureur cette année. Du retour de la couleur à l'écologie.",
        content: `# Mariages 2026 : Retour à la joie !\n\n## 1. L'explosion de couleurs\nFini le tout blanc/vert minimaliste. 2026 voit le retour des couleurs vibrantes : fuchsia, orange brûlé, jaune moutarde.\n\n## 2. Le "No Floral Foam"\nOn abandonne la mousse verte polluante pour du grillage à poule. Les compositions sont plus aériennes.\n\n## 3. Les fleurs locales et de saison (Slow Flower)\nOn privilégie les fleurs françaises de saison pour limiter l'empreinte carbone.\n\n## 4. Les installations suspendues\nDes nuages de fleurs au-dessus des tables ("Flower Clouds") pour un effet "waouh" garanti.`,
        author: { name: "Sophie Rose", role: "Décoratrice Florale", image: "https://randomuser.me/api/portraits/women/65.jpg", bio: "Spécialiste des mariages et grands décors." },
        published_at: "2026-04-01",
        reading_time: 6,
        category: "Saison",
        tags: ["mariage", "tendances", "2026"],
        image: "/images/blog/blog-tendances-mariage-2026.png",
        featured: false,
        external_link: { title: "Tendances Mariage", url: "https://www.mariages.net/articles/tendances-fleurs-mariage--c5678" }
    },
    {
        title: "Décoration de Noël : Réaliser son centre de table fleuri",
        slug: "diy-centre-table-noel-fleuri",
        excerpt: "Impressionnez vos invités avec une création maison digne d'un pro. Sapin, houx, bougies : le tuto pas à pas.",
        content: `# Tuto : Votre centre de table de Noël\n\n**Matériel :**\n- Branches de sapin (Nobilis), Eucalyptus, Ilex (houx), pommes de pin, 3 bougies piliers, fil de fer\n\n**Étapes :**\n1. Disposez vos branches de sapin à plat au centre, liez-les avec du fil de fer.\n2. Insérez l'Eucalyptus pour donner du volume.\n3. Placez vos 3 bougies à intervalles réguliers.\n4. Piquez les branches d'Ilex pour apporter la touche rouge.\n5. Déposez les pommes de pin et quelques boules de Noël.\n6. *Astuce :* Ajoutez une guirlande LED fine à piles pour la magie !`,
        author: { name: "Sophie Rose", role: "Décoratrice Florale", image: "https://randomuser.me/api/portraits/women/65.jpg", bio: "Fan inconditionnelle de Noël." },
        published_at: "2025-12-01",
        reading_time: 5,
        category: "Saison",
        tags: ["noël", "diy", "décoration"],
        image: "/images/blog/blog-diy-noel.png",
        featured: false,
        external_link: { title: "Déco Noël Maison", url: "https://www.cotemaison.fr/noel_11532.html" }
    },
    {
        title: "Muguet du 1er mai : Histoire, tradition et entretien",
        slug: "muguet-1er-mai-histoire-entretien",
        excerpt: "Pourquoi offre-t-on du muguet le 1er mai ? Est-ce vraiment un porte-bonheur ? Tout sur cette clochette parfumée.",
        content: `# Le Muguet : Porte-bonheur royal\n\n## L'histoire royale\nEn 1561, le roi Charles IX reçoit un brin de muguet en guise de porte-bonheur. La tradition était née !\n\n## 13 clochettes ?\nLa légende dit qu'un brin comptant exactement 13 clochettes porte un bonheur absolu.\n\n## Attention, poison !\nLe muguet est hautement toxique (feuilles, fleurs et même l'eau du vase). Attention aux enfants et aux chats !\n\n## Entretien\nLe muguet aime la fraîcheur. S'il est en pot, replantez-le au jardin à l'ombre après la floraison.`,
        author: { name: "Antoine Fleur", role: "Expert Plantes", image: "https://randomuser.me/api/portraits/men/45.jpg", bio: "Amoureux de l'histoire botanique." },
        published_at: "2026-04-25",
        reading_time: 3,
        category: "Saison",
        tags: ["muguet", "1er mai", "histoire"],
        image: "/images/blog/blog-muguet-histoire.png",
        featured: false,
        external_link: { title: "Histoire du Muguet", url: "https://www.geo.fr/histoire/pourquoi-offre-t-on-du-muguet-le-1er-mai-195328" }
    },
    {
        title: "Terrarium : Le mini-jardin qui ne demande (presque) aucun soin",
        slug: "terrarium-jardin-interieur-sans-entretien",
        excerpt: "C'est l'objet déco végétal par excellence. Découvrez comment fonctionne cet écosystème fascinant en bocal.",
        content: `# Le Terrarium : Un monde en bocal\n\nLe terrarium fermé est un écosystème quasi-autonome.\n\n## Le principe du cycle de l'eau\nLes plantes transpirent, l'eau se condense sur les parois du verre, et retombe dans la terre. Un cycle perpétuel !\n\n## Quel entretien ?\n1. **Lumière** : Beaucoup de clarté, mais JAMAIS de soleil direct.\n2. **Arrosage** : 1 à 2 fois... par an !\n3. **Taille** : Si une feuille touche la paroi et moisit, coupez-la.\n\nC'est tout. Profitez de votre petit monde !`,
        author: { name: "Antoine Fleur", role: "Expert Plantes", image: "https://randomuser.me/api/portraits/men/45.jpg", bio: "Fan de terrariums et d'aquascaping." },
        published_at: "2026-02-15",
        reading_time: 4,
        category: "Décoration",
        tags: ["terrarium", "plantes", "design"],
        image: "/images/blog/blog-terrarium-guide.png",
        featured: false,
        external_link: { title: "Créer son Terrarium", url: "https://www.rustica.fr/plantes-vertes/creer-terrarium-plantes,13271.html" }
    },
    {
        title: "Les plantes dépolluantes : mythe ou réalité ?",
        slug: "plantes-depolluantes-mythe-realite",
        excerpt: "Peut-on vraiment purifier l'air de sa maison avec des plantes ? Démêlons le vrai du faux sur les études de la NASA.",
        content: `# Plantes dépolluantes : Le grand débat\n\n## L'étude de la NASA (1989)\nLa NASA a prouvé qu'en milieu clos, certaines plantes filtrent les toxines.\n**Les championnes :** Le Lierre, Le Chlorophytum, Le Spathiphyllum, La Sansevieria\n\n## La réalité dans nos maisons\nDans une vraie maison, il faudrait une centaine de plantes par pièce pour l'efficacité mesurée par la NASA !\n\n## Verdict ?\nElles dépolluent un peu, mais la meilleure purification reste **l'aération quotidienne** de 10 minutes. Les plantes augmentent aussi l'humidité et apaisent le stress mental.`,
        author: { name: "Antoine Fleur", role: "Expert Plantes", image: "https://randomuser.me/api/portraits/men/45.jpg", bio: "Approche scientifique du végétal." },
        published_at: "2026-03-01",
        reading_time: 5,
        category: "Bien-être",
        tags: ["dépolluant", "santé", "maison"],
        image: "/images/blog/blog-plantes-depolluantes.png",
        featured: false,
        external_link: { title: "Avis ADEME", url: "https://www.ademe.fr/" }
    },
    {
        title: "Fleurs comestibles : Mettez de la couleur dans vos assiettes",
        slug: "fleurs-comestibles-cuisine",
        excerpt: "De la capucine à la bourrache, découvrez comment surprendre vos invités en mangeant vos bouquets (mais pas n'importe lesquels !).",
        content: `# Osez manger des fleurs !\n\n## Les incontournables faciles\n1. **La Capucine** : Saveur poivrée, idéale en salade.\n2. **La Bourrache** : Goût iodé, magnifique sur un poisson.\n3. **La Pensée / Violette** : Saveur douce, magnifique sur les desserts.\n4. **La Fleur de Courgette** : À farcir ou en beignet.\n5. **La Ciboulette** : Les pompons violets ont un goût d'oignon frais.\n\n## Attention !\nNe mangez JAMAIS les fleurs d'un bouquet de fleuriste (elles sont traitées). Certaines fleurs sont TOXIQUES (Muguet, Laurier rose...).`,
        author: { name: "Sophie Rose", role: "Décoratrice Florale", image: "https://randomuser.me/api/portraits/women/65.jpg", bio: "Gourmande et esthète." },
        published_at: "2026-06-10",
        reading_time: 4,
        category: "Lifestyle",
        tags: ["cuisine", "fleurs comestibles", "recette"],
        image: "/images/blog/blog-fleurs-comestibles.png",
        featured: false,
        external_link: { title: "Recettes Fleurs", url: "https://www.marmiton.org/recettes/selection_fleurs_comestibles.aspx" }
    },
    {
        title: "Pourquoi choisir un artisan fleuriste plutôt que le supermarché ?",
        slug: "pourquoi-choisir-artisan-fleuriste",
        excerpt: "Prix, qualité, conservation... On vous dit toute la vérité sur la différence entre nos fleurs et celles de la grande distribution.",
        content: `# Artisan vs Supermarché : Le match vérité\n\n## 1. La Fraîcheur et la Durée de Vie\nEn supermarché, les fleurs tiennent 3 jours. Chez nous, les arrivages sont quotidiens : un bouquet qui tient 7, 10, parfois 15 jours.\n\n## 2. Le Savoir-Faire\nNous "nettoyons" chaque tige (feuilles, épines), ce qui évite à l'eau de pourrir. C'est un métier d'art.\n\n## 3. L'Origine et l'Éthique\nNous privilégions les producteurs locaux et de saison. Nous connaissons nos producteurs.\n\n## 4. Le Conseil\nUne plante pour une salle de bain sombre ? Nous sommes là pour ça. Le conseil fait partie du prix.\n\nChoisir un artisan, c'est soutenir le commerce de proximité.`,
        author: { name: "Camille Verdier", role: "Maître Fleuriste", image: "https://randomuser.me/api/portraits/women/32.jpg", bio: "Engagée pour l'artisanat français." },
        published_at: "2026-01-30",
        reading_time: 5,
        category: "Local",
        tags: ["artisanat", "qualité", "valeurs"],
        image: "/images/blog/blog-artisan-fleuriste.png",
        featured: true,
        external_link: { title: "Collectif Fleuristes", url: "https://www.collectiffleuristes.fr/" }
    }
];

// ─── Fonction d'insertion via API REST ───────────────────────────────────────
async function upsertPost(post) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts`, {
        method: 'POST',
        headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates,return=minimal'
        },
        body: JSON.stringify(post)
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`HTTP ${response.status}: ${error}`);
    }

    return true;
}

// ─── Migration ───────────────────────────────────────────────────────────────
async function migrate() {
    console.log('🌸 Début de la migration des articles de blog vers Supabase...\n');

    let success = 0;
    let errors = 0;

    for (const post of blogPosts) {
        try {
            await upsertPost(post);
            console.log(`✅ Migré : "${post.title}"`);
            success++;
        } catch (err) {
            console.error(`❌ Erreur pour "${post.title}": ${err.message}`);
            errors++;
        }
    }

    console.log(`\n🎉 Migration terminée ! ${success} articles migrés, ${errors} erreurs.`);
}

migrate().catch(console.error);
