<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
// Site-wide LocalBusiness (AccountingService) structured data for local SEO.
// Hand-written JSON-LD (rather than the schema-org module) for full control and
// to avoid the unhead/schema-org version coupling. ЕИК/ДДС are intentionally
// omitted — see useCompanyInfo.js.
const company = useCompanyInfo();

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${company.url}/#business`,
  name: company.brandName,
  legalName: company.legalName,
  url: company.url,
  email: company.email,
  telephone: company.phone.href,
  image: `${company.url}/photos/large/photo2.webp`,
  logo: `${company.url}/logo.svg`,
  foundingDate: company.foundingYear,
  description:
    "Професионални услуги в областта на счетоводството, данъчното и осигурително законодателство.",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  areaServed: { "@type": "Country", name: "България" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: company.hours.days,
      opens: company.hours.opens,
      closes: company.hours.closes,
    },
  ],
  hasMap: company.mapUrl,
};

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
    },
  ],
});
</script>
