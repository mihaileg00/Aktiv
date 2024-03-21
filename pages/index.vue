<template>
    <main class="home">
            <div id="hero">
                <div id="hero-content" class="shadow-02">
                    <h1 class="display-9 color-primary align-left extra-bold align-center-mobile display-7-mobile">Счетоводна къща<br/> "АКТИВ”</h1>
                    <div class="spacer-24"></div>
                    <p class="color-secondary paragraph-medium align-center-mobile">
                        Професионални услуги в областта на счетоводството, данъчното и осигурително законодателство.
                    </p>
                    <div class="spacer-32"></div>
                <div id="hero-buttons">
                    <div class="button-default  button-dark color-light">
                        <p>Свържете се с нас</p>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.88452 0.880772L9.19988 4.99998L4.88452 9.11919" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.19984 4.99999L0.799896 4.99999" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                    <div class="button-default button-light ">Услуги</div>
                </div>
                </div>
                <div id='hero-image-container'>
                    <img id="hero-image" src="/hero.png" alt="Hero Image" />
                </div>
            </div>
            <div id="statistics">
                <h2 class="display-7 color-primary">Числа с които се гордеем</h2>
                <div class="spacer-32"></div>
                <div id="statistics-content" class="shadow-02">
                    <div class="statistic">
                        <h3 class="display-8 color-primary semi-bold line-height-1">21</h3>
                        <div class="spacer-16"></div>
                        <h4 class="display-4 semi-bold color-primary line-height-1">Години в бизнеса</h4>
                        <div class="spacer-24"></div>
                        <p class="color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                    </div>
                    <div class="separator-stat"></div>
                    <div class="statistic">
                        <h3 class="display-8 color-primary semi-bold line-height-1">+100</h3>
                        <div class="spacer-16"></div>
                        <h4 class="display-4 semi-bold color-primary line-height-1">Фирми</h4>
                        <div class="spacer-24"></div>
                        <p class="color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                    </div>
                    <div class="separator-stat"></div>
                    <div class="statistic">
                        <h3 class="display-8 color-primary semi-bold line-height-1">21</h3>
                        <div class="spacer-16"></div>
                        <h4 class="display-4 semi-bold color-primary line-height-1">Години в бизнеса</h4>
                        <div class="spacer-24"></div>
                        <p class="color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                    </div>
                </div>
            </div>
        <ServicesHome />
            <div id="companies">
                <h4 class="display-3 semi-bold color-dark">
                    Някои от нашите клиенти
                </h4>
                <div class="spacer-32"></div>
                <div id="companies-content">
                    <div class="company">
                        <img src="/logos/Logo-1.png" alt="Company Logo" />
                    </div>
                    <div class="company">
                        <img src="/logos/Logo-2.png" alt="Company Logo" />
                    </div>
                    <div class="company">
                        <img src="/logos/Logo-3.png" alt="Company Logo" />
                    </div>
                    <div class="company">
                        <img src="/logos/Logo-4.png" alt="Company Logo" />
                    </div>
                    <div class="company">
                        <img src="/logos/Logo-5.png" alt="Company Logo" />
                    </div>
                    <div class="company">
                        <img src="/logos/Logo-6.png" alt="Company Logo" />
                    </div>
                </div>
            </div>
        <Contacts />
    </main>
</template>

<script>
export default {
    name: 'HomePage',
}
</script>

<style scoped>

#hero{
    position: relative;
    width: 100%;
    max-width: var(--max-width-medium);
    padding: 48px 0px;
    display: flex;
    justify-content: flex-end;
}

#hero-content{
    display: relative;
    z-index: 2;
    padding: 62px 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    width: 55%;
    background-color: var(--main-bg-color);
}

#hero-buttons{
    display: flex;
    gap: 16px;
}

#hero-image-container{
    width: 75%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}

#hero-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#statistics{
    width: 100%;
    max-width: var(--max-width-medium);
    text-align: center;
}

#statistics-content{
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    padding: 40px 66px;
    gap: 66px;
}

.separator-stat{
    width: 1px;
    background-color: var(--neutral-400);
}

.statistic{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
    text-align: center;
}


#companies{
    width: 100%;
    max-width: var(--max-width-medium);
    text-align: center;
}

#companies-content{
    display: flex;
    justify-content: center;
    gap: 24px;
}

@media screen and (max-width: 768px) {

    main{
        margin-top: 70px;
    }

    #hero{
        position:relative;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        height: 732px;
    }

    #hero-image-container{
        width: 100%;
        height: 548px;
        top: auto;
        bottom: 0;
        right: 0;
    }

    #hero-content{
        width: 100%;
        padding: 36px 24px;
        align-items: center;
        border-radius: 8px;
    }

    #hero-buttons{
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        gap: 16px;
    }

    #statistics{
        padding: 0px 20px;
    }

    #statistics-content{
        flex-direction: column;
        justify-content: center;
        gap: 16px;
        padding: 32px;
    }

    .separator-stat{
        width: 100%;
        height: 1px;
    }

}

</style>
