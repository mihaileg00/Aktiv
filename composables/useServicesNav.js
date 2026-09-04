const fetchServices = () =>
  $fetch('/api/service', {
    query: {
      type: 'nav',
    },
  });

export const useServicesNav = () => {
  return useAsyncData('services-nav', fetchServices);
};
