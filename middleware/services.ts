import { VALID_SERVICES } from '~/shared/services'

export default defineNuxtRouteMiddleware(to => {
    const serviceParam = to.params.service

    if (typeof serviceParam !== 'string' || !VALID_SERVICES.includes(serviceParam)) {
        return navigateTo('/')
    }
})