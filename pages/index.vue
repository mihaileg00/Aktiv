<template>
    <main class="home">
            <section id="hero">
                <div id="hero-content" class="shadow-02">
                    <h1 class="display-9 color-primary align-left extra-bold align-center-mobile display-7-mobile">Счетоводна къща<br/> "АКТИВ”</h1>
                    <div class="spacer-24"></div>
                    <p class="color-secondary paragraph-medium align-center-mobile">
                        Професионални услуги в областта на счетоводството, данъчното и осигурително законодателство.
                    </p>
                    <div class="spacer-32"></div>
                <div id="hero-buttons">
                    <Button buttonText="Свържете се с нас" isScrollButton sectionId="contacts-container" arrow />
                    <Button buttonText="Услуги" isScrollButton sectionId="serviceContainer" light />
                </div>
                </div>
                <div id='hero-image-container'>
                    <img id="hero-image" src="/hero.png" alt="Hero Image" />
                </div>
            </section>
            <section id="statistics">
                <h2 class="display-7 color-primary">Числа с които се гордеем</h2>
                <div class="spacer-32"></div>
                <div id="statistics-content" class="shadow-02">
                    <div class="statistic">
                        <h3 class="display-8 color-primary semi-bold line-height-1">+21</h3>
                        <div class="spacer-16"></div>
                        <h4 class="display-4 semi-bold color-primary line-height-1">Години Опит в Бизнеса</h4>
                        <div class="spacer-24"></div>
                        <p class="color-secondary" style="max-width: 400px;">Над 21 години опит в счетоводството и финансите, потвърждавайки ни като утвърден партньор за нашите клиенти</p>
                    </div>
                    <div class="separator-stat"></div>
                    <div class="statistic">
                        <h3 class="display-8 color-primary semi-bold line-height-1">+100</h3>
                        <div class="spacer-16"></div>
                        <h4 class="display-4 semi-bold color-primary line-height-1">Доволни Клиенти</h4>
                        <div class="spacer-24"></div>
                        <p class="color-secondary" style="max-width: 400px;">Осигуряваме услуги на над 1000 доволни клиенти, подчертавайки нашата способност да отговаряме на техните нужди</p>
                    </div>
                    <div class="separator-stat"></div>
                    <div class="statistic">
                        <h3 class="display-8 color-primary semi-bold line-height-1">100%</h3>
                        <div class="spacer-16"></div>
                        <h4 class="display-4 semi-bold color-primary line-height-1">Удовлетворение</h4>
                        <div class="spacer-24"></div>
                        <p class="color-secondary" style="max-width: 400px;">Гордеем се със 100% клиентско удовлетворение и сме посветени на предоставяне на висококачествено обслужване за всеки клиент</p>
                    </div>
                </div>
            </section>
        <ServicesHome  />
            <section class="hidden" id="companies">
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
            </section>
        <Contacts />
    </main>
</template>

<script>
    import { allConsentGranted } from '../js/cookies.js';
export default {
    name: 'HomePage',
    methods:{ 
        scrollToElement(refName) {
            console.log(this.$refs)
      // Get a reference to the element you want to scroll to
      const element = document.getElementById(refName);
      
      const offset = element.offsetTop - 110;
      // Scroll to the element
      window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
    },
        acceptCookies(){
            allConsentGranted();
        }
    }
}
</script>

<style scoped>

#hero{
    position: relative;
    width: 100%;
    max-width: var(--max-width-medium);
    padding: 48px 32px;
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
    left: 32px;
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
    padding: 0 32px;
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
        left: 0;
        bottom: 0;
        right: 0;
    }

    #hero-content{
        width: 100%;
        padding: 36px 24px;
        align-items: center;
        border-radius: 8px;
        margin: 0px 16px;
    }

    #hero-buttons{
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        gap: 16px;
    }

    #statistics{
        padding: 0px 16px;
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

    #companies{
        display: none;
    }

}

</style>
