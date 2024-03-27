<template>
    <section id="serviceContainer">
        <div id="services">
        <h2 class="color-primary display-7 extra-bold">Услуги</h2>
        <div class="spacer-24"></div>
        <p class="color-secondary paragraph-medium align-center">
            Предлагаме широк спектър от счетоводни, данъчни и консултантски услуги,<br/> осигуряващи най-доброто решение за вашия бизнес.
        </p>
        <div class="spacer-32"></div>
        <div id="services-content">
            <div id="home-services-navigation">
                <div v-for="service in services" :key="service.index" @click="currentSlide = service.index"  class="service shadow-02" :class="currentSlide === service.index ? 'service-active' : ''">
                    <div class="service-icon">
                        <img :src="service.icon" alt="Service Icon" />
                    </div>
                    <p class="display-2 color-secondary">{{ service.title }}</p>
                </div>
            </div>
                <div id="service-container" class="shadow-02">
                        <div class="service-content">
                            <div>
                            <h3 class="display-5 color-primary">{{ services[currentSlide].title }}</h3>
                            <div class="spacer-16"></div>
                            <p class="color-secondary paragraph-medium">{{ services[currentSlide].description }}</p>
                            <div class="spacer-32"></div>
                            </div>
                            <Nuxt-link v-if="services[currentSlide].link" :to="services[currentSlide].link" class="link service-link">
                                <p class="learn-more">Научи повече</p> 
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.1427 2.35095L13.5369 7.49996L8.1427 12.649" stroke="#6D758F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.5369 7.5L3.03699 7.5" stroke="#6D758F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Nuxt-link>
                            <div v-else class="">
                                <p class="color-secondary paragraph-medium">Още въпроси?</p>
                                <p @click="scrollToElement('contacts-container')" class="learn-more">Попитайте тук</p>
                            </div>
                        </div>
                        <div class="service-image-container">
                            <img class="service-image" :src="services[currentSlide].img" alt="Service Image" />
                        </div>
                </div>
            </div>
        </div>
        <div id="services-mobile">
            <h2 class="display-7 color-primary extra-bold">Услуги</h2>
            <div class="spacer-24"></div>
            <p class="paragraph-medium color-dark align-center">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <div class="spacer-32"></div>
            <div id="services-content-mobile">
            <div id="service-mobile" v-for="service in services" :key="service.index" >
                <h4 class="display-9 color-primary semi-bold" >0{{ service.index + 1 }}</h4>
                <div class="spacer-24"></div>
                <h3 class="display-5 color-primary extra-bold">{{ service.title }}</h3>
                <div class="spacer-16"></div>
                <p class="color-secondary paragraph-default">{{ service.description }}</p>
                <div class="spacer-32"></div>
                <Nuxt-link v-if="service.link" :to="service.link" class="link service-link">
                                <p class="learn-more">Научи повече</p> 
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.1427 2.35095L13.5369 7.49996L8.1427 12.649" stroke="#6D758F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.5369 7.5L3.03699 7.5" stroke="#6D758F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                </Nuxt-link>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ServicesHome',
    data() {
        return {
                    services: [
                        {
                            title: "Абонаментно обслужване",
                            description: "Заложете спокойствие и непрекъснато счетоводно поддръжка с нашето абонаментно обслужване. Предлагаме редовни счетоводни услуги и данъчни консултации по гъвкав абонаментен план, което ви позволява да се фокусирате върху бизнеса си, без да се тревожите за финансовите аспекти.",
                            icon: "/icons/Time.svg",
                            img: "/photos/photo1.webp",
                            link: "/Services/subscription-services",
                            index: 0
                        },
                        {
                            title: "Годишно счетоводно приключване",
                            description: "Предоставяме годишно приключване на счетоводната дейност за вашата фирма. Нашите специалисти ще изготвят годишни отчети, справки и данъчни декларации, за да отговарят на законодателството и да гарантират точност и съответствие.",
                            icon: "/icons/Gear.svg",
                            img: "/photos/photo2.webp",
                            link: "/Services/annual-closure",
                            index: 1
                        },
                        {
                            title: "Обработка на заплати/ТРЗ услуги",
                            description: "Нашите експерти ви предоставят консултации и помощ в областта на ТРЗ, социалното, здравното и пенсионното осигуряване. Осигуряваме ви информация относно вашите права, задължения и предимства, свързани с тези видове осигуряване, за да ви помогнем да вземете информирани решения.",
                            icon: "/icons/User.svg",
                            img: "/photos/photo3.webp",
                            link: "/Services/hr-services",
                            index: 2
                        },
                        {
                            title: "Тримесечно Обслужване",
                            description: "Нашите експерти ви предоставят консултации и помощ в областта на ТРЗ, социалното, здравното и пенсионното осигуряване. Осигуряваме ви информация относно вашите права, задължения и предимства, свързани с тези видове осигуряване, за да ви помогнем да вземете информирани решения.",
                            icon: "/icons/Time.svg",
                            img: "/photos/photo3.webp",
                            link: "/Services/quarterly-service",
                            index: 3
                        },
                        {
                            title: "Допълнителни услуги",
                            description: "Предоставяме и еднократни услуги по ваше желание. Това може да включва съставяне на финансови отчети, данъчни консултации, подготовка на данъчни декларации или други счетоводни услуги според вашите нужди.",
                            icon: "/icons/Search.svg",
                            img: "/photos/photo4.webp",
                            index: 4
                        }
                    ],
                    currentSlide: 0
                }
    },
    // Your component's options go here
    methods: {
        // Your component's methods go here
        scrollToElement(elementID) {
      const element = document.getElementById(elementID);
      
      const offset = element.offsetTop - 110;
      // Scroll to the element
      window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
    }
        
    }
}
</script>

<style scoped>
/* Your component's styles go here */
#services{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: var(--max-width-medium);
    padding: var(--section-padding);
}

#services-mobile{
    display: none;
}

#services-content{
    display: flex;
    gap: 40px;
}

#home-services-navigation{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
}


.service{
    display: flex;
    padding: 6px 14px 6px 7px;
    border: 1px solid var(--neutral-300);
    transition: all 0.2s ease;
    border-radius: 6px;
    gap: 10px;
    align-items: center;
    -webkit-transition : border 500ms ease-out;
    -moz-transition : border 500ms ease-out;
    -o-transition : border 500ms ease-out;
    transition : border 500ms ease-out;
}

.service-icon{
    width: 32px;
    height: 32px;
}

.service-icon img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.service-active{
    border: 1px solid var(--secondary-color);
}

#service-container{
    display: flex;
    padding: 20px 20px 20px 40px;
    height: 368px;
    width: 75%;
    gap: 40px;
    border: 1px solid var(--neutral-300);
    border-radius: 8px;
}
.service-content{
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: space-between;
}

.service-image-container{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.service-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.service-link{
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    
    #services{
        display: none;
    }

    #services-mobile{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--max-width-small);
        padding: 0 16px;
    }

    #services-content-mobile{
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
    
    #service-mobile{
        display: flex;
        flex-direction: column;
        padding: 40px 24px;
        border: 1px solid var(--neutral-400);
        border-radius: 8px;
    }
}

</style>