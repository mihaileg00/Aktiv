<template>
    <div>
        <div id="services">
        <h2 class="color-primary display-7 extra-bold">Услуги</h2>
        <div class="spacer-24"></div>
        <p class="color-secondary paragraph-medium align-center">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis <br/>sit phasellus mollis sit aliquam sit nullam neque ultrices.
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
                            <p class="learn-more">Научи повече</p>
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
                <p class="learn-more">Научи повече</p>
            </div>
            </div>
        </div>
    </div>
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
                            icon: "/icons/Cloud.svg",
                            img: "/icons/Cloud.svg",
                            index: 0
                        },
                        {
                            title: "Годишно счетоводно приключване",
                            description: "Предоставяме годишно приключване на счетоводната дейност за вашата фирма. Нашите специалисти ще изготвят годишни отчети, справки и данъчни декларации, за да отговарят на законодателството и да гарантират точност и съответствие.",
                            icon: "/icons/Cloud.svg",
                            img: "/icons/Cloud.svg",
                            index: 1
                        },
                        {
                            title: "Обработка на заплати/ТРЗ услуги",
                            description: "Нашите експерти ви предоставят консултации и помощ в областта на ТРЗ, социалното, здравното и пенсионното осигуряване. Осигуряваме ви информация относно вашите права, задължения и предимства, свързани с тези видове осигуряване, за да ви помогнем да вземете информирани решения.",
                            icon: "/icons/Cloud.svg",
                            img: "/icons/Cloud.svg",
                            index: 2
                        },
                        {
                            title: "Допълнителни услуги",
                            description: "Предоставяме и еднократни услуги по ваше желание. Това може да включва съставяне на финансови отчети, данъчни консултации, подготовка на данъчни декларации или други счетоводни услуги според вашите нужди.",
                            icon: "/icons/Cloud.svg",
                            img: "/icons/Cloud.svg",
                            index: 3
                        }
                    ],
                    currentSlide: 1
                }
    }
    // Your component's options go here
}
</script>

<style scoped>
/* Your component's styles go here */
#services{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: var(--max-width-small);
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
    width: 50%;
    object-fit: contain;
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