/**
 * SEO Utilities for HigherHire Employer Pages
 * 
 * Implements scalable SEO template strategy for 200+ employer audit pages
 */

export interface EmployerSEOData {
  companyName: string;
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
}

/**
 * Generate SEO-optimized data for employer audit pages
 */
export function generateEmployerSEO(companyName: string): EmployerSEOData {
  // Clean company name for URL slug
  const slug = companyName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove duplicate hyphens
    .trim();

  return {
    companyName,
    slug: `${slug}-employee-reviews`,
    title: `${companyName} Employee Reviews & Workplace Culture | HigherHire`,
    metaDescription: `Real employee insights about working at ${companyName}. We analyze authentic posts from Reddit, Glassdoor, and forums so you know what you're walking into. They check you - now you check them.`,
    h1: `${companyName} Employee Reviews: What It's Really Like to Work Here`,
    canonicalUrl: `https://higherhire.ai/employer/${slug}-employee-reviews`,
    ogTitle: `${companyName} Employee Reviews - Real Workplace Insights`,
    ogDescription: `Authentic employee perspectives about ${companyName}. No corporate spin, just real insights.`
  };
}

/**
 * Set document title dynamically
 */
export function setDocumentTitle(title: string): void {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
}

/**
 * Update meta tag content
 */
export function updateMetaTag(name: string, content: string): void {
  if (typeof document === 'undefined') return;
  
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

/**
 * Update Open Graph meta tag
 */
export function updateOGTag(property: string, content: string): void {
  if (typeof document === 'undefined') return;
  
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

/**
 * Apply SEO metadata to page
 */
export function applySEOMetadata(seoData: EmployerSEOData): void {
  // Set document title
  setDocumentTitle(seoData.title);
  
  // Update meta description
  updateMetaTag('description', seoData.metaDescription);
  
  // Update Open Graph tags
  updateOGTag('og:title', seoData.ogTitle);
  updateOGTag('og:description', seoData.ogDescription);
  updateOGTag('og:url', seoData.canonicalUrl);
  updateOGTag('og:type', 'website');
  
  // Add canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = seoData.canonicalUrl;
}

/**
 * Generate structured data for employer page
 */
export function generateStructuredData(companyName: string, goldenPost?: any): string {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyName,
    "description": `Employee reviews and workplace insights for ${companyName}`,
    "url": `https://higherhire.ai/employer/${companyName.toLowerCase().replace(/\s+/g, '-')}-employee-reviews`
  };

  // Add review data if Golden Post is available
  if (goldenPost && goldenPost.textSnippet) {
    (structuredData as any).review = {
      "@type": "Review",
      "reviewBody": goldenPost.textSnippet,
      "author": {
        "@type": "Person",
        "name": goldenPost.author || "Anonymous Employee"
      },
      "publisher": {
        "@type": "Organization",
        "name": "HigherHire"
      }
    };
  }

  return JSON.stringify(structuredData);
}

/**
 * Apply structured data to page
 */
export function applyStructuredData(structuredData: string): void {
  if (typeof document === 'undefined') return;
  
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = structuredData;
  document.head.appendChild(script);
}