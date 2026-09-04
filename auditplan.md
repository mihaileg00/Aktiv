# Remediation Plan: Remaining Audit Findings

This document outlines the detailed, step-by-step plan to resolve all remaining accessibility, performance, SEO, security, and code quality issues identified in the codebase audit. 

---

## Plan Overview & Phased Roadmap

```
Phase 1: Accessibility & Contrast (High/Medium)
  ├── Fix semantic controls (Button.vue, Cookies.vue, ServicesHome.vue)
  ├── Make mobile hamburger toggle keyboard-focusable (Nav.vue)
  └── Correct low-contrast text elements (.brand-sub in style.css)

Phase 2: Performance & Hydration Optimization (Medium)
  ├── Wrap Cookies.vue in <ClientOnly> to prevent hydration mismatch
  └── Deduplicate API calls in layout elements using useAsyncData shared keys

Phase 3: SEO, Security & TypeScript (Medium/Low)
  ├── Migrate page headers to useSeoMeta for proper OG & Twitter cards
  ├── Sandbox Google Maps iframe with security rules (Contacts.vue)
  └── Define TypeScript interfaces for services and type check guards

Phase 4: Code Quality & Polish (Low)
  ├── Add loading="lazy" to below-the-fold imagery (index.vue, About.vue)
  └── Refactor mobile scroll locks to clean CSS classes instead of window.onscroll overrides
```

---

## Detailed Implementation Steps

### Phase 1: Accessibility & Color Contrast (High / Medium)

#### Step 1.1: Keyboard-Accessible Buttons
- **Files**: 
  - [Button.vue](file:///d:/AktivSandanski/Aktiv/components/Button.vue)
  - [ServicesHome.vue](file:///d:/AktivSandanski/Aktiv/components/ServicesHome.vue)
- **Problem**: Scroll triggers use `div` elements, and prompt links use `span` tags with click handlers. They are invisible to screen readers (lack roles) and keyboard users (lack tab-index).
- **Remediation**:
  - In [Button.vue](file:///d:/AktivSandanski/Aktiv/components/Button.vue), replace the `v-if="isScrollButton"` div block with a `<button>` element.
  - In [ServicesHome.vue](file:///d:/AktivSandanski/Aktiv/components/ServicesHome.vue), replace the click-prompt `<span>` with a semantic `<button>`.
- **Implementation**:
  *In `Button.vue`:*
  ```html
  <button
    v-if="isScrollButton"
    @click="scrollToSection"
    class="btn"
    :class="[
      light ? 'btn-ghost' : 'btn-primary',
      small ? 'btn-sm' : large ? 'btn-lg' : '',
    ]"
  >
    <span>{{ buttonText }}</span>
    <!-- SVG arrow -->
  </button>
  ```

#### Step 1.2: Cookie Banner Accessibility
- **File**: [Cookies.vue](file:///d:/AktivSandanski/Aktiv/components/Cookies.vue)
- **Problem**: Option blocks are styled `div` buttons lacking keyboard access.
- **Remediation**:
  - Refactor all three cookie choices (`Приемам всички`, `Отхвърлям`, `Само за реклами`) into semantic `<button>` elements. Ensure they inherit styles and are focusable.

#### Step 1.3: Hamburger Toggle focus
- **File**: [Nav.vue](file:///d:/AktivSandanski/Aktiv/components/Nav.vue)
- **Problem**: The mobile toggle is a simple `NuxtImg` image.
- **Remediation**:
  - Wrap the menu icon inside a native `<button>` element with `aria-label="Меню"` and `aria-expanded` state tracking to allow keyboard interaction.
  - Add scoped styles to format the button overlay cleanly.

#### Step 1.4: Color Contrast Adjustment
- **File**: [style.css](file:///d:/AktivSandanski/Aktiv/assets/css/style.css)
- **Problem**: The brand subtext `rgba(255, 255, 255, 0.38)` on `#06091a` has a contrast ratio of **2.2:1** (WCAG AA requires **4.5:1**).
- **Remediation**:
  - Increase opacity of the brand tagline color definition inside class `.brand-sub`.
  ```css
  .brand-sub {
    color: rgba(255, 255, 255, 0.65); /* Meets contrast limits */
  }
  ```

---

### Phase 2: Performance & Hydration (Medium)

#### Step 2.1: Prevent Cookie Banner Hydration Flicker
- **File**: [default.vue](file:///d:/AktivSandanski/Aktiv/layouts/default.vue)
- **Problem**: Static page generation renders cookie banners inside standard page HTML, causing a layout flicker when hydrated on clients with pre-existing cookies.
- **Remediation**:
  - Wrap the `<Cookies />` layout component inside `<ClientOnly>` to bypass static generation compilation.
  ```html
  <ClientOnly>
    <Cookies />
  </ClientOnly>
  ```

#### Step 2.2: Deduplicate API Fetch Operations
- **Files**:
  - [Nav.vue](file:///d:/AktivSandanski/Aktiv/components/Nav.vue)
  - [Footer.vue](file:///d:/AktivSandanski/Aktiv/components/Footer.vue)
  - [ServicesHome.vue](file:///d:/AktivSandanski/Aktiv/components/ServicesHome.vue)
- **Problem**: Layout elements individually query `/api/service` via `useFetch` without shared keys, causing multiple parallel network requests on initial page load.
- **Remediation**:
  - Implement a shared unique data key inside `useAsyncData` calls inside `Nav.vue` and `Footer.vue` to allow Nuxt to cache and deduplicate the payload fetch.
  ```javascript
  // Nav.vue & Footer.vue
  const { data: routes } = await useAsyncData('services-nav', () => 
    $fetch('/api/service', { query: { type: 'nav' } })
  );
  ```

---

### Phase 3: SEO, Security & TypeScript (Medium / Low)

#### Step 3.1: Social Media Open Graph (OG) & Twitter Cards
- **Files**:
  - [index.vue](file:///d:/AktivSandanski/Aktiv/pages/index.vue)
  - [About.vue](file:///d:/AktivSandanski/Aktiv/pages/About.vue)
  - [Services/[service].vue](file:///d:/AktivSandanski/Aktiv/pages/Services/[service].vue)
- **Problem**: Meta configuration lacks standard OG tag identifiers.
- **Remediation**:
  - Replace the legacy `useHead` calls with `useSeoMeta()` to automatically map attributes to Open Graph (`og:title`, `og:description`, `og:type`) and Twitter Card formats.
  - Dynamically populate tags in `Services/[service].vue` using data returned by the Nitro API.

#### Step 3.2: Iframe security settings
- **File**: [Contacts.vue](file:///d:/AktivSandanski/Aktiv/components/Contacts.vue)
- **Problem**: Google Maps embed has unrestricted execution permissions.
- **Remediation**:
  - Add security properties `sandbox="allow-scripts allow-same-origin allow-popups"` and `referrerpolicy="no-referrer-when-downgrade"` to the `<iframe>` element.

#### Step 3.3: Strict TypeScript coverage
- **Files**:
  - [services.ts](file:///d:/AktivSandanski/Aktiv/middleware/services.ts)
  - [service.ts](file:///d:/AktivSandanski/Aktiv/server/api/service.ts)
- **Problem**: Implicit `any` typing in route parameters and server handler queries.
- **Remediation**:
  - Define typescript interfaces for the service structure:
    ```typescript
    export interface ServiceSummary {
      name: string;
      description: string;
      descriptionShort?: string;
      iconName: string;
      image: { src: string; alt: string };
      link?: string;
    }
    ```
  - Type-cast and validate route coordinates inside the route middleware.

---

### Phase 4: Code Quality & Polish (Low)

#### Step 4.1: Below-The-Fold Image lazy loading
- **Files**:
  - [index.vue](file:///d:/AktivSandanski/Aktiv/pages/index.vue) (Why section image)
  - [About.vue](file:///d:/AktivSandanski/Aktiv/pages/About.vue) (Intro block image)
- **Problem**: Large imagery loads immediately during FCP, wasting bandwidth.
- **Remediation**:
  - Add `loading="lazy"` to all non-hero `<NuxtImg>` tags.

#### Step 4.2: Robust Mobile Scroll-Locking
- **File**: [Nav.vue](file:///d:/AktivSandanski/Aktiv/components/Nav.vue)
- **Problem**: Locking scroll by overriding `window.onscroll` is fragile and overrides other components' event listeners.
- **Remediation**:
  - Set `document.body.style.overflow = 'hidden'` when the mobile menu opens, and reset it (`''`) when it closes. Remove the custom smooth-scroll logic on link clicks and let the router handle coordinate offsets naturally.

---

## Verification Plan

### Automated Verification
1. Run `npm run build` to ensure the project compiles without errors.
2. Run `npm run generate` to verify static file rendering builds are complete and correct.
3. Run `npx nuxi typecheck` to verify strict TypeScript declarations.

### Manual Verification
1. Tab through the navigation bar and open the mobile accordion menu strictly via keyboard.
2. Tab to the cookie consent overlay and choose an action, verifying that the banner closes and saves the preference.
3. Validate pages on dynamic resolutions and inspect page source metadata for OG tags.
