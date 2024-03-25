export default defineNuxtRouteMiddleware( to => {

    const services = useAppConfig().services

    if(!services.some(service => service.route === to.params.service)) {
        return navigateTo('/')
    }

})