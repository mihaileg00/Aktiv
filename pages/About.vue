<template>
    <main>
            <section id="hero">
                <h1 class="display-9 extra-bold display-7-mobile color-primary">АКТИВ</h1>
                <div class="spacer-24"></div>
                <p class="paragraph-medium color-secondary" style="max-width: 420px;">
                    Ваш мост към успеха. Ефективни счетоводни и данъчни решения за вашия бизнес.</p>
                <div class="spacer-48"></div>
                <div id="section-1" class="shadow-02 animate-on-scroll">
                    <div id="section-1-image-container" class="animate-on-scroll">
                        <img src="/photos/photo1.jpg" alt="placeholder" />	
                    </div>
                    <div id="section-1-text-container">
                        <div class="icon-container-medium mobile-hidden">
                            <img class="icon" src="/icons/Business.svg" alt="Aktiv logo" />
                        </div>
                        <div class="spacer-24 mobile-hidden"></div>
                        <h2 class="display-5 extra-bold color-primary">За нас</h2>
                        <div class="spacer-16"></div>
                        <p class="paragraph-large color-secondary">
                            Ваш надежден счетоводен партньор. "АКТИВ" е счетоводна къща, утвърдена в бранша, която предоставя професионални услуги, насочени към подобряване на финансовата структура и ефективност на вашата дейност. Нашата цел е да предложим модерни и ефикасни счетоводни решения, които отговарят на специфичните нужди на всеки клиент, като същевременно гарантираме съответствие със законовите изисквания.
                        </p>
                    </div>
                    
                </div>
                <div class="spacer-24"></div>
                <div id="sections-container">
                    <div id="section-2" class="shadow-02">
                        <div id="section-2-text-container">
                            <div class="icon-container-medium mobile-hidden">
                                <img class="icon" src="/icons/Smile.svg"/>
                            </div>
                            <div class="spacer-24 mobile-hidden"></div>
                            <h2 class="display-5 extra-bold color-primary">Мисия</h2>
                            <div class="spacer-16"></div>
                            <p class="paragraph-large color-secondary">
                                Успехът ви е наш приоритет. Нашата мисия е да подкрепяме вашата дейност с качествени счетоводни услуги, осигуряващи спокойствие и стабилност.
                            </p>
                        </div>
                        <div id="section-2-image-container">
                            <img class="hero-image" src="/photos/photo2.jpg" alt="placeholder" />
                        </div>
                    </div>
                    <div id="section-3" class="shadow-02">
                            <h2 class="display-5 extra-bold color-primary">Защо нас?</h2>
                            <div class="spacer-16"></div>
                            <p class="paragraph-large color-secondary">
                                Доверете ни се за успеха на вашата фирма. Избирайки "АКТИВ", вие получавате повече от счетоводни услуги - вие намирате партньор, готов да поеме всички вашите данъчни и счетоводни задачи. Вашето спокойствие и фокус върху растежа са наша главна цел. "Постижаме успеха заедно" - нашето обещание за съвместна работа към вашите цели.                        </p>
                            
                            </div>
                            </div>
            </section>
            <section id="firmi" > 
                    <p class="paragraph-medium color-secondary align-right">Работим с фирми от различни индустрии и размери</p>
                    <h2 class="display-7 extra-bold color-primary align-left">Фирми с които работим</h2>
                <div class="spacer-56"></div>
                <div id="logos">
                    <div class="logo-firms-container">
                        <img src="/logos/Logo.png" alt="logo" />
                    </div>
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-1.png" alt="logo" />
                    </div>
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-2.png" alt="logo" />
                    </div> 
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-3.png" alt="logo" />
                    </div> 
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-4.png" alt="logo" />
                    </div> 
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-5.png" alt="logo" />
                    </div>
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-6.png" alt="logo" />
                    </div> 
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-7.png" alt="logo" />
                    </div> 
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-8.png" alt="logo" />
                    </div> 
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-9.png" alt="logo" />
                    </div>
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-10.png" alt="logo" />
                    </div> 
                    <div class="logo-firms-container">
                        <img src="/logos/Logo-11.png" alt="logo" />
                    </div> 
                </div>
            </section>
        <section class="section-container bg-dark">
            <div id="call-to-action" class="bg-dark">
                <h3 class="display-7 extra-bold color-light">
                    Свържете се с нас днес и започнете да създавате по-стабилна и успешна финансова бъдеще.
                </h3>
                <Button buttonText="Свържете се с нас" to="/#contacts-container" light arrow/>
            </div>  
        </section>
        <section id="team-container">
            <div  id="team">
                <div class="images" :style="{transform: `translateX(${-data.currentImage*368}px)`}">
                   <div class="image-container" v-for="(image, index) in data.images" :key="index">
                       <img :src="image" alt="placeholder" />
                   </div>
               </div>
               <div class="spacer-48 mobile-hidden"></div>
               <div id="team-content">
                    <div>
                        <h2 class="display-8 color-primary extra-bold">Нашият екип</h2>
                        <div class="spacer-24"></div>
                        <p class="paragraph-medium color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit <br/>phasellus mollis sit aliquam sit nullam.</p>
                    </div>
                    <div id="image-nav">
                        <div @click="data.currentImage += -1" :class=' data.currentImage != 0 ? "button-default bg-dark" : "button-default bg-light pointer-events-none"'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.72314 15.179L2.25007 9.00011L8.72315 2.82126" :stroke="data.currentImage != 0 ? 'white' :'#4C5186'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.25 9L15.75 9" :stroke="data.currentImage != 0 ? 'white' :'#4C5186'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div @click="data.currentImage += 1" :class=' data.currentImage != data.images.length - 1 ? "button-default bg-dark" : "button-default bg-light pointer-events-none"'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.8269 2.82129L15.2999 9.0001L8.8269 15.1789" :stroke="data.currentImage != data.images.length - 1 ? 'white' :'#4C5186'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.2999 9L2.69995 9" :stroke="data.currentImage != data.images.length - 1 ? 'white' :'#4C5186'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
/* Add your custom styles here */

#hero {
    text-align: center;
    width: 100%;
    max-width: var(--max-width-medium);
    padding: var(--section-padding);
    display: flex;
    flex-direction: column;
    align-items: center;
}

#section-1 {
    display: flex;
    width: 100%;
    gap: 56px;
    height: 464px;
    padding: 32px 56px 32px 0px;
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    overflow: hidden;
    opacity: 0;
}

#section-1.activeAnimation {
    animation: fadeIn 1s forwards;
}

#section-1-image-container {
    width: 50%;

}

#section-1-image-container.activeAnimation {
    animation: slideInLeft 1s forwards;
    animation-delay: 500ms;
}

#section-1-image-container img {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#section-1-text-container {
    text-align: left;
    width: 50%;
    padding: 24px 0px;
}

#sections-container {
    display: flex;
    position: relative;
    width: 100%;
    gap: 22px;
    border: 1px solid var(--neutral-400);
}

#section-2 {
    display: flex;
    gap: 36px;
    padding-top: 32px;
    height: 330px;
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    margin-bottom: 32px;
    width: 55%;
}

#section-2-text-container {
    text-align: left;
    width: 55%;
    padding: 0px 0px 32px 32px;
}

#section-2-image-container {
    border-radius: 8px;
    display: flex;
    align-self: flex-end;
    width: 45%;
    height: 100%;
    min-width: 200px;
}

#section-2-image-container img {
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    width: 100%;
    object-fit: cover;
}

#section-3 {
    position: absolute;
    top: 0;
    right: 0;
    padding: 56px 36px;
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    text-align: left;
    height: 105%;
    z-index: 2;
    background-color: var(--main-bg-color);
    width: 43%;
}

#firmi {
    display: flex;
    display:none;
    flex-direction: column;
    width: 100%;
    max-width: var(--max-width-medium);
    padding: var(--section-padding);
}

#logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px; 
}

.logo-firms-container {
    
}

#call-to-action {
    display: flex;
    justify-content: space-between;
    max-width: var(--max-width-medium);
    align-items: center;
    padding: var(--section-padding);
}

#call-to-action > h3 {
    width: 60%;
}

#team-container {
    padding: var(--section-padding);
    margin-bottom: 40px;
    display: flex;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
}

#team {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--max-width-medium)
}

.images {
    display: flex;
    justify-content: flex-start;
    overflow:visible;
    width: min-content;
    gap: 35px;
    transition: transform 0.5s ease;
}


.image-container {
    width: 333px;
    height: 408px;
    border-radius: 8px;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#team-content {
    display: flex;
    justify-content: space-between;
    align-items: left;
    gap: 32px;
    align-items: center;
}

#image-nav {
    display: flex;
    gap: 16px;
    align-items: center;
}

@media screen and (max-width: 768px) {

    #hero {
        padding: 0px 16px;
    }

    #section-1 {
        flex-direction: column;
        gap: 0px;
        padding: 0px;
        height: auto;   
    }

    #section-1-image-container {
        width: 100%;
        height: 300px;
        order: 2;
    }

    #section-1-text-container {
        width: 100%;
        padding: 32px;
        order: 1;
    }

    #sections-container {
        flex-direction: column;
        gap: 24px;
        border: none;
    }

    #section-2 {
        flex-direction: column;
        gap: 40px;
        padding: 32px;
        width: 100%;
        margin-bottom: 0px;
        height: auto;
    }

    #section-2-image-container {
        width: 100%;
        height: 300px;
        display: none;
    }

    #section-2-text-container {
        padding: 0px;
        width: 100%;
    }   

    #section-2-image-container img {
        border-radius: 8px;
    }

    #section-3 {
        position: static;
        width: 100%;
        padding: 32px;
        height: auto;
    }

    #call-to-action {
        flex-direction: column;
        gap: 48px;
        align-items: center;
    }

    #call-to-action > h3 {
        width: 100%;
        text-align: center;
    }

    #team-container {
        padding: 48px 16px;
    }

    #team {
        gap: 24px;
    }


    .images {
        order: 2;
    }

    #team-content {
        order: 1;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        text-align: center;
    }
}

</style>


<script setup lang="ts">
useHead({
  title: 'За нас | Актив ООД - Вашият надежден счетоводен партньор',
  meta: [
    {
      name: 'description',
      content: 'Научете повече за Актив ООД, водеща счетоводна къща в Сандански, предлагаща професионални счетоводни, данъчни и осигурителни услуги. Открийте как нашата мисия и опит допринасят за успеха на вашия бизнес.'
    },
    {
      name: 'keywords',
      content: 'счетоводство Сандански, данъчни услуги, осигурително консултиране, професионални счетоводни услуги, Актив ООД, за нас, надежден партньор'
    }
  ]
});

const data = {
    currentImage: 0,
    images  : [
        "/dogs/dog1.jpg",
        "/dogs/dog2.jpg",
        "/dogs/dog3.jpg",
        "/dogs/dog4.jpg",
        "/dogs/dog5.jpg",
        "/dogs/dog6.jpg",
    ]
}

onMounted(() =>{

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
        entry.target.classList.add('activeAnimation');
    }
  });
}, {
  threshold: 0.5
});

const elements = document.querySelectorAll('.animate-on-scroll');

console.log(elements);
elements.forEach((element) => {
  observer.observe(element);
});


})


</script>
