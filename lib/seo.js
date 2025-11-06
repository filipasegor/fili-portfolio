/**
 * SEO configuration for the portfolio site
 */

export const siteConfig = {
  url: "https://filipas.xyz",
  title: "Egor Filipas — Product Designer",
  description: "Портфолио продуктового дизайнера: UX/UI, дизайн-системы, цифровые сервисы",
  image: "/preview.jpg",
  imageWidth: 1200,
  imageHeight: 630,
};

/**
 * Generate Open Graph and Twitter Card meta tags
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.image - Image URL (relative to public folder)
 * @param {string} options.url - Page URL (relative to site root)
 * @returns {Array} Array of meta tag objects
 */
export function generateSEOTags({ title, description, image, url = "" }) {
  const fullUrl = `${siteConfig.url}${url}`;
  const imageUrl = image
    ? `${siteConfig.url}${image}`
    : `${siteConfig.url}${siteConfig.image}`;

  return [
    // Basic meta
    { name: "description", content: description || siteConfig.description },
    
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: fullUrl },
    { property: "og:title", content: title || siteConfig.title },
    { property: "og:description", content: description || siteConfig.description },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: String(siteConfig.imageWidth) },
    { property: "og:image:height", content: String(siteConfig.imageHeight) },
    { property: "og:image:alt", content: title || siteConfig.title },
    { property: "og:locale", content: "ru_RU" },
    { property: "og:locale:alternate", content: "en_US" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: fullUrl },
    { name: "twitter:title", content: title || siteConfig.title },
    { name: "twitter:description", content: description || siteConfig.description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: title || siteConfig.title },
  ];
}

