export default defineNuxtRouteMiddleware( to => {

    const services = [
        { route: 'subscription-services' },
        { route: 'annual-closure' },
        { route: 'hr-services' },
        { route: 'quarterly-service' }
    ]

    if(!services.some(service => service.route === to.params.service)) {
        return navigateTo('/')
    }

})