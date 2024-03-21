<template>
    <div id="nav-container">
        <nav>
            <!-- Your navigation content goes here -->
            <div @click="menuOn = !menuOn" id="hamburger-mobile">
                <img src="/Menu.svg" class="icon" alt="Hamburger menu" />
            </div>
            <div class="nav-left">
                <div class="icon-container-small">
                    <img src="/logo.svg" class="icon" alt="Aktiv logo" />
                </div>
                <img src="/name.svg" alt="Aktiv logo" />
            </div>
            <div class="nav-middle">
                <Nuxt-link class="link display-3" to="/">Начало</Nuxt-link>
                <div id="services-link">
                    <div class="services-text">
                        <p class="display-3 display-3">Услуги</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2676 4.53846L7.76758 10.4615L2.26758 4.53846" stroke="#4C5186" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div id="services-option" >
                        <Nuxt-link class="link" to="/Services/serviceOne">
                            <div class="service-option">Абонаментно обслужване</div>
                        </Nuxt-link>
                        <Nuxt-link class="link" to="/Services/serviceTwo">
                            <div class="service-option">Годишно счетоводно приключване</div>
                        </Nuxt-link>
                        <Nuxt-link class="link" to="/Services/serviceOne">
                            <div class="service-option">Обработка на заплати/ТРЗ услуги</div>
                        </Nuxt-link>
                    </div>
                </div>
                <Nuxt-link class="link display-3" to="/About">За нас</Nuxt-link>
            </div>
            <div class="nav-right">
                <div class="button-default button-dark" >
                    <p class="display-2">Свържете се с нас</p>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.88452 0.880772L9.19988 4.99998L4.88452 9.11919" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.19984 4.99999L0.799896 4.99999" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </nav>
        <div v-if="menuOn" id="mobile-menu">
            <div class="separation-line-nav"></div>
                <Nuxt-link class="mobile-menu-item link" :class="$route.path === '/' ? 'mobile-menu-item-active' : ''" to="/">
                    <p class="display-3">Начало</p>
                </Nuxt-link >
            <div class="separation-line-nav"></div>
                <Nuxt-link class="mobile-menu-item link" :class="$route.path === '/Services' ? 'mobile-menu-item-active' : ''" to="/Services">
                    <p class="display-3 ">Услуги</p>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 13.0954L10.5 7.17236L5 13.0954" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </Nuxt-link>
            <div class="separation-line-nav"></div>
                <Nuxt-link class="mobile-menu-item link" :class="$route.path === '/About' ? 'mobile-menu-item-active' : ''" to="/About">
                    <p class="display-3">За нас</p>
                </Nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            // Your component's data goes here
            menuOn: false,
        }
    },
    // Your component's logic goes here
}

</script>

<style scoped>
/* Your component's styles go here */

#nav-container {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: var(--main-bg-color);
    display: flex;
    justify-content: center;
}

nav {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 88px;
    max-width: var(--max-width-medium);
}

#mobile-menu{
    display: none;
}

#hamburger-mobile{
    display: none;
}

.nav-left{
    display: flex;
    align-items: center;
}

.nav-middle{
    display: flex;
    align-items: center;
    gap: 24px;
}

.link{
    color: var(--secondary-color);
    text-decoration: none;
}

#services-link{
    position: relative;
    display: flex;
    justify-content: center;
}

.services-text{
    display: flex;
    align-items: center;
    gap: 4px;
}

#services-option{
    display: none;
}

#services-link:hover #services-option{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background-color: var(--main-bg-color);
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    padding: 6px;
}

.service-option{
    padding: 14px 16px;
    border-radius: 8px;
    color: var(--secondary-text-color);
    transition: all 0.2s;
}

.service-option:hover{
    background-color: var(--neutral-400);
    font-weight: 600;
    color: var(--primary-text-color);
}


@media screen and (max-width: 768px) {


    #nav-container{
        flex-direction: column;
    }

    nav{
        height: 70px;
        padding: 0 16px;
    }

    #hamburger-mobile{
        display: block;
    }

    .nav-middle{
        display: none;
    }
    .nav-right{
        display: none;
    }
    .nav-left{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    #mobile-menu{
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        left: 0;
        z-index: 1000;
    }

    .separation-line-nav{
        width: 100%;
        height: 1px;
        background-color: var(--secondary-color);
    }

    .mobile-menu-item{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        background-color: var(--main-bg-color);
        color: var(--secondary-color);
        gap: 4px;
        transition: all 0.3s;
    }


    .mobile-menu-item path{
        stroke: var(--secondary-color);
        transition: all 0.3s;
    }

    .mobile-menu-item-active{
        background-color: var(--secondary-color);
        color: var(--main-bg-color);
        font-weight: 800;
    }

    .mobile-menu-item-active path{
        stroke: var(--main-bg-color);
    }
}

</style>
