// Single source of truth for the firm's identity, contact and registration
// details. Consumed by the footer, the contact section and the LocalBusiness
// structured data (app.vue) so they can never drift apart.
//
// NOTE: ЕИК (Булстат) and the ДДС/VAT number are intentionally NOT stored or
// rendered here — the owner asked to keep them off the public site, and a BG
// VAT number is just "BG" + the ЕИК, so it would expose it. Add them later
// only if that decision changes.
export const useCompanyInfo = () => ({
  legalName: "АКТИВ ООД",
  brandName: "Актив Сандански",
  url: "https://aktiv.bg",
  foundingYear: "2003",
  email: "contact@aktiv.bg",
  phone: {
    display: "+359 88 516 4849",
    href: "+359885164849",
  },
  address: {
    street: "ул. Станке Димитров 7",
    city: "Сандански",
    postalCode: "2800",
    country: "BG",
  },
  hours: {
    label: "Понеделник – Петък",
    value: "09:00 – 17:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  placeId: "ChIJGbYT6ngxqhQRUaFum_7dAkA",
  mapUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJGbYT6ngxqhQRUaFum_7dAkA",
});
