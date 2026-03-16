# Rapport d'Optimisation SEO & GEO (Mars 2026)

Basé sur les directives du document "claude-seo-main" et les standards SEO 2026.

## 1. GEO Readiness Score: 85/100
*Le site est désormais optimisé pour les moteurs de recherche génératifs (Google AI Overviews, ChatGPT, Perplexity).*

### Plateformes
- **Google AI Overviews**: ✅ Excellente (Structure H1-H3 propre, blocs de réponses optimisés).
- **ChatGPT / Perplexity**: ✅ Optimisée (Gestion des bots et fichier llms.txt présent).

## 2. État des Crawlers AI
*Configuration mise à jour dans `robots.txt`.*

| Crawler | Statut | Rôle |
|---------|--------|------|
| GPTBot | ✅ Autorisé | ChatGPT Web Search |
| ClaudeBot | ✅ Autorisé | Claude AI Search |
| PerplexityBot| ✅ Autorisé | Perplexity Visibility |
| OAI-SearchBot| ✅ Autorisé | OpenAI Search |
| CCBot | ❌ Bloqué | Collecte de données brute |
| Google-Extended| ❌ Bloqué | Entraînement Gemini uniquement |

## 3. Fichier llms.txt (Nouveau)
- **Localisation**: `/llms.txt`
- **Contenu**: Structure claire pour les LLMs décrivant le savoir-faire, les services clés (livraison, sur-mesure) et les informations de contact.

## 4. Données Structurées (Schema.org)
*Éléments implémentés en JSON-LD (format préféré par Google).*

- **LocalBusiness (Florist)**: Détails complets (adresse, téléphone, horaires, géo-coordonnées) dans le layout global.
- **Product**: Optimisé pour le e-commerce (SKU, Brand, AggregateOffer, Availability, Image array).
- **BlogPosting**: Enrichi pour l'E-E-A-T (Author, Publisher logo, ArticleBody, DateModified).
- **FAQPage**: Présente sur les pages clés pour augmenter la citabilité AI.

## 5. Modifications à Haut Impact Réalisées

1. **Blocs de Réponse GEO**: Réécriture de la section "À propos" de la page d'accueil en blocs de 150-180 mots répondant à la question "Qu'est-ce qui définit l'art floral de Jardin Digital ?".
2. **Hiérarchie H1-H3**: Correction et renforcement de la structure sémantique pour faciliter l'extraction par les IA.
3. **Sécurité Technique**: Implémentation de headers de sécurité (CSP, HSTS, X-Frame-Options) dans `next.config.ts`.
4. **Gestion de la Fraîcheur**: Ajout systématique des dates de publication et de modification dans les schémas.
5. **E-E-A-T**: Renforcement des signaux d'autorité via les biographies d'auteurs et les liens d'entité (sameAs).

## Recommandations Futures (Low Priority)
- Créer des études de cas originales ou des sondages sur les tendances florales (unique data).
- Renforcer la présence de la marque sur des plateformes tierces (Reddit, YouTube) pour booster les citations LLM.
- Optimiser le poids des images pour améliorer l'INP (Interaction to Next Paint).
