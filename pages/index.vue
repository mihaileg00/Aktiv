<template>
    <main class="home">
            <section id="hero">
                <div id="hero-content" class="shadow-02 animate-on-scroll">
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
                <div id='hero-image-container' class="animate-on-scroll">
                    <img id="hero-image" src="/hero.png" alt="Hero Image" />
                </div>
            </section>
            <section id="statistics" class="animate-on-scroll">
                <h2 class="display-7 color-primary">Числа с които се гордеем</h2>
                <div class="spacer-32"></div>
                <div id="statistics-content" class="shadow-02">
                    <div class="statistic">
                        <h3 class="display-8 color-primary semi-bold line-height-1">+{{ numbers[0] }}</h3>
                        <div class="spacer-16"></div>
                        <h4 class="display-4 semi-bold color-primary line-height-1">Години Опит в Бизнеса</h4>
                        <div class="spacer-24"></div>
                        <p class="color-secondary" style="max-width: 400px;">Повече от две десетилетия като доверен партньор в счетоводството и финансите.</p>
                    </div>
                    <div class="separator-stat"></div>
                    <div class="statistic">
                        <h3 class="display-8 color-primary semi-bold line-height-1">+{{ numbers[1] }}</h3>
                        <div class="spacer-16"></div>
                        <h4 class="display-4 semi-bold color-primary line-height-1">Доволни Клиенти</h4>
                        <div class="spacer-24"></div>
                        <p class="color-secondary" style="max-width: 400px;">Над 100 доволни клиенти, подчертаващи нашата отдаденост на техните нужди.</p>
                    </div>
                    <div class="separator-stat"></div>
                    <div class="statistic">
                        <h3 class="display-8 color-primary semi-bold line-height-1">{{ numbers[2] }}%</h3>
                        <div class="spacer-16"></div>
                        <h4 class="display-4 semi-bold color-primary line-height-1">Удовлетворение</h4>
                        <div class="spacer-24"></div>
                        <p class="color-secondary" style="max-width: 400px;">Перфектно удовлетворение с ангажимент към висококачествено обслужване.</p>
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


<script setup>
import { allConsentGranted } from '../js/cookies.js';
import { definePageMeta } from '#imports';

// Set the page meta using definePageMeta
useHead({
  title: 'Актив ООД - Счетоводни Услуги | Данъци, Одит и ТРЗ',
  meta: [
    {
      name: 'description',
      content: 'Актив ООД предлага професионални счетоводни услуги, включително данъчно консултиране и одит в Сандански. С над 21 години опит и посветеност на индивидуален подход, ние подкрепяме фирми от всички размери за тяхната финансова успех.'
    },
    {
      name: 'keywords',
      content: 'счетоводство Сандански, данъци, одит, ТРЗ, заплати, счетоводно приключване, Актив ООД, счетоводни услуги Сандански, данъчни консултации Сандански'
    }
  ]
});

// Function to scroll to an element
const scrollToElement = (refName) => {
  const element = document.getElementById(refName);
  const offset = element.offsetTop - 110;
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
};

// Function to handle cookie consent
const acceptCookies = () => {
  allConsentGranted();
};

// Add intersection observer to animate elements on scroll

const numbers = ref([0, 0, 0]);
const numbersMax = [21, 100, 100];

onMounted(() =>{

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('activeAnimation');
            if(entry.target.id === 'statistics' && numbers.value != [21, 100, 100]){
                console.log('statistics');
                // add animation to increment statistics numbers
                numbers.value.forEach((number, index) => {
                    let i = 0;
                    const interval = setInterval(() => {
                        if((i/100)*numbersMax[index] < numbersMax[index]){
                            i++;
                            numbers.value[index] = Math.round((i / 100) * numbersMax[index]);
                        } else {
                            clearInterval(interval);
                            observer.unobserve(entry.target);
                        }
                    }, 15);
                });

            }
        }
      });
    }, {
      threshold: 0.5
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      observer.observe(element);
    });
    

})

// Add intersection observer to the statistics section



// Expose functions to the template
defineExpose({
  scrollToElement,
  acceptCookies,
    numbers,
    numbersMax
});
</script>

<style scoped>


#hero{
    position: relative;
    width: 100%;
    max-width: var(--max-width-medium);
    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: var(--padding-side);
    padding-right: var(--padding-side);
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
    opacity: 0;
    
}

#hero-content.activeAnimation{
    animation: fadeInLeft 1s ease-out forwards;
    animation-delay: 500ms;
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
    left: var(--padding-side);
    bottom: 0;
}

#hero-image-container.activeAnimation{
    animation: fadeInRight 1s forwards ease-in;
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
    padding: 0 var(--padding-side);
}

#statistics.activeAnimation{
    animation: fadeIn 2s ease-out forwards;
}

#statistics.activeAnimation *{
    animation: fadeIn 2s ease-out forwards;
}

#statistics-content{
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    padding: 40px 64px;
    gap: 64px;
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
