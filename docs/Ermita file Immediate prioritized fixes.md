**Immediate prioritized fixes (CRITICAL)**

**A. Fix 404s + redirect strategy (Developer)**

- **Why:** Stops Google wasting crawl budget and returns link equity.

- **Action:**

  1.  Export the full list of 404 URLs (GSC Coverage → Not found (404) →
      Export).

  2.  For each URL:

      - If there is an equivalent page → **301 redirect** to the correct
        canonical URL.

      - If content permanently removed and no equivalent → serve **410**
        or redirect to a useful category page with explanation.

  3.  **Acceptance:** no more high-traffic URLs in 404; GSC shows
      decline in 404 counts.

- **Example Nginx rule snippet (redirect single URL):**

location = /old-page-url {

return 301 https://www.sawlatours.com/new-page-url;

}

**B. Resolve canonical / duplicate conflicts (SE O/Developer)**

- **Why:** Google choosing another canonical dilutes ranking.

- **Action:**

  1.  Identify affected groups (coverage lists Reason: "Duplicate,
      Google chose different canonical than user").

  2.  Ensure each canonical page has a correct \<link rel="canonical"
      href="..."\> pointing to the preferred URL.

  3.  Remove near-duplicate thin pages OR consolidate content and 301
      redirect duplicates to the canonical.

- **Canonical tag example:**

\<link rel="canonical" href="https://www.sawlatours.com/lalibela-tours"
/\>

**C. Fix soft 404s & “crawled — currently not indexed” (Content / SEO)**

- **Why:** Google won't index low-value pages.

- **Action:**

  - Expand content to useful, unique copy (≥600–1,200 words depending on
    topic), add images with alt text, add structured data (TouristTrip,
    FAQ).

  - For pages that are not meant to index (admin pages, filtered lists),
    add noindex meta or disallow via robots if appropriate.

**D. Re-submit sitemap & request validation**

- Update sitemap.xml to reflect only indexable URLs; submit in GSC and
  request reindexing after fixes.
