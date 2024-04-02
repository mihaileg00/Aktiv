<template>
    <section  id="serviceContainer">
        <div class="animate-on-scroll" id="services">
        <h2 class="color-primary display-7 extra-bold z-index-5">Услуги</h2>
        <div class="spacer-24"></div>
        <p class="color-secondary paragraph-medium align-center z-index-5">
            Предлагаме широк спектър от счетоводни, данъчни и консултантски услуги,<br/> осигуряващи най-доброто решение за вашия бизнес.
        </p>
        <div class="spacer-32"></div>
        <div id="services-content">
            <div id="home-services-navigation">
                <button v-for="service, index in services" :key="index" @click="changeSlide(index)"  class="service shadow-02" :class="index === newSlide ? '' : ''">
                    <div class="service-icon">
                        <img :src="service.icon" alt="Service Icon" />
                    </div>
                    <p class="display-2 color-secondary">{{ service.title }}</p>
                </button>
            </div>
            <div id="service-container"> 
                <div v-for="service, index in services" :key="index"   class="servicebox shadow-02 animate__animated" :class="index == newSlide ? 'newSlide': (index == currentSlide ? 'currentSlide animate__rotateOutUpRight z-index-4' : 'hidden')">
                        <div class="service-content">
                            <div>
                            <h3 class="display-5 color-primary">{{ service.title }}</h3>
                            <div class="spacer-16"></div>
                            <p class="color-secondary paragraph-medium">{{ service.description }}</p>
                            <div class="spacer-32"></div>
                            </div>
                            <Nuxt-link v-if="service.link" :to="service.link" class="link service-link">
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
                            <img class="service-image" :src="service.img" alt="Service Image" />
                        </div>
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
                    description: "Използвайте нашите абонаментни счетоводни и данъчни услуги за безпроблемно управление на финансите, докато се съсредоточите изцяло върху разширяването и растежа на вашето предприятие. Открийте гъвкавостта на планове, специално проектирани за нуждите на вашата фирма.",
                    icon: "/icons/Time.svg",
                    img: "/photos/photo1.webp",
                    link: "/Services/subscription-services",
                },
                {
                    title: "Годишно счетоводно приключване",
                    description: "Нашите услуги за годишно приключване са тук, за да гарантират, че вашата фирма завършва фискалната година с точни и законово съобразени финансови отчети. Възползвайте се от нашата експертност за спокойствие в края на всяка година.",
                    icon: "/icons/Gear.svg",
                    img: "/photos/photo2.webp",
                    link: "/Services/annual-closure",
                },
                {
                    title: "Обработка на заплати/ТРЗ услуги",
                    description: "Нашият екип предлага всеобхватна подкрепа в областта на трудовите и застрахователните въпроси, помагайки ви да управлявате заплатите и социалните приноси ефективно. Ние сме тук, за да улесним вашия административен товар и да оптимизираме вашите операции в ТРЗ.",
                    icon: "/icons/User.svg",
                    img: "/photos/photo3.webp",
                    link: "/Services/hr-services",
                },
                {
                    title: "Тримесечно Обслужване",
                    description: "Нашето тримесечно счетоводно обслужване е идеално за предприятия, търсещи гъвкавост и надеждност, без да се налага постоянно внимание. Осигурете си спокойствие и съответствие със законовите изисквания с нашите персонализирани счетоводни решения.",
                    icon: "/icons/Time.svg",
                    img: "/photos/photo3.webp",
                    link: "/Services/quarterly-service",
                },
                {
                    title: "Допълнителни услуги",
                    description: "Независимо дали се нуждаете от специализирани финансови отчети, индивидуални данъчни консултации, или други еднократни счетоводни услуги, нашият екип е готов да отговори на вашите нужди с професионализъм и персонализиран подход.",
                    icon: "/icons/Search.svg",
                    img: "/photos/photo4.webp",
                }
                ]
                ,
                    currentSlide: 0,
                    newSlide: 0
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
    },
        changeSlide(index) {
            const oldSlide = this.newSlide;
            this.newSlide = index;
            this.currentSlide = oldSlide;
        }
        
    }
}
</script>

<style scoped>
/* Your component's styles go here */

#serviceContainer{
    width: 100%;
    display: flex;
    max-width: var(--max-width-medium);
    padding: 0 var(--padding-side);
}

#services{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: var(--max-width-medium);
}

#services.activeAnimation{
    animation: fadeIn 1s;
}

#services-mobile{
    display: none;
}

#services-content{
    display: flex;
    gap: 40px;
    width: 100%;
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
    transition: all 0.2s ease;
    border-radius: 6px;
    border: none;
    gap: 10px;
    background: white;
    align-items: center;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
}

.service:hover {
  transform: scale(1.05);
  background-color: #e0e0e0;
}

.service:active {
  transform: scale(0.95);
  background-color: #d0d0d0;
}

.service:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  white-space: nowrap;
  padding: 5px;
  border-radius: 5px;
  background-color: #555;
  color: #fff;
  font-size: 12px;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
  margin-left: 10px;
}

.service:hover::after {
  opacity: 1;
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


#service-container{
    position: relative;
    height: 368px;
    width: 75%;
}

.servicebox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px 20px 20px 40px;
    height: 368px;
    gap: 40px;
    border: 1px solid var(--neutral-300);
    border-radius: 8px;
    background: var(--main-bg-color);
}

.sercivebox.currentSlide{
    z-index: 4;
    animation: fadeOut 0.5s ease-in forwards;
}

.servicebox.hidden{
    display: none;
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