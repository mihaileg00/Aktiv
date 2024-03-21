<template>
    <main>
            <div id="hero">
                <h1 class="display-9 extra-bold display-7-mobile color-primary">За нас</h1>
                <div class="spacer-24"></div>
                <p class="paragraph-medium color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli <br/>mattis sit phasellus mollis sit aliquam sit nullam.</p>
                <div class="spacer-48"></div>
                <div id="section-1" class="shadow-02">
                    <div id="section-1-image-container">
                        <img src="/dogs/dog1.jpg" alt="placeholder" />	
                    </div>
                    <div id="section-1-text-container">
                        <div class="logo-container">
                            <img src="/icons/Business.svg" alt="Aktiv logo" />
                        </div>
                        <div class="spacer-24"></div>
                        <h2 class="display-5 extra-bold color-primary">“АКТИВ”</h2>
                        <div class="spacer-16"></div>
                        <p class="paragraph-large color-secondary">
                            ООД е счетоводна къща, регистрирана съгласно българското законодателство, предлага професионални услуги в областта на счетоводството, данъчното и осигурително законодателство.Нашата цел е да бъдем модерна структура, адекватна на растящите пазарни изисквания, която обхваща всички аспекти и потребности на бизнеса в сферата на финансите.
                        </p>
                    </div>
                </div>
                <div class="spacer-24"></div>
                <div id="sections-container">
                    <div id="section-2" class="shadow-02">
                        <div id="section-2-text-container">
                            <div class="icon-container-medium">
                                <img class="icon" src="/icons/Smile.svg"/>
                            </div>
                            <div class="spacer-24"></div>
                            <h2 class="display-5 extra-bold color-primary">Мисия</h2>
                            <div class="spacer-16"></div>
                            <p class="paragraph-large color-secondary">
                                Предлаганите от нас счетоводните услуги осигуряват всичко, от което фирмата Ви се нуждае за да работи в съответствие с данъчното и осигурителното законодателство.
                            </p>
                        </div>
                        <div id="section-2-image-container">
                            <img class="hero-image" src="/dogs/dog2.jpg" alt="placeholder" />
                        </div>
                    </div>
                    <div id="section-3" class="shadow-02">
                            <h2 class="display-5 extra-bold color-primary">Защо нас?</h2>
                            <div class="spacer-16"></div>
                            <p class="paragraph-large color-secondary">
                                `Ние ще вършим цялата работа с данъчната служба вместо Вас - ще подаваме необходимите данъчни декларации, ще се грижим за всички законови и данъчни изисквания свързани с Вашата фирма. Ще Ви консултираме как най-добре да се справите с данъчните си задължения.
                            </p>
                        </div>
                </div>
            </div>
            <div id="firmi"> 
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
            </div>
        <div class="section-container bg-dark">
            <div id="call-to-action" class="bg-dark">
                <h3 class="display-7 extra-bold color-light">
                    Свържете се с нас днес и започнете да създавате по-стабилна и успешна финансова бъдеще.
                </h3>
                <div class="button-default bg-light color-secondary">
                    <p class="display-2">Свържете се с нас</p>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="#4C5186" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.88452 0.880772L9.19988 4.99998L4.88452 9.11919" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.19984 4.99999L0.799896 4.99999" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>  
        </div>
        <div id="team-container">
            <div id="team">
                <div class="images" :style="{transform: `translateX(${-currentImage*368}px)`}">
                   <div class="image-container" v-for="(image, index) in images" :key="index">
                       <img :src="image" alt="placeholder" />
                   </div>
               </div>
               <div class="spacer-48 mobile-hidden"></div>
               <div id="team-content">
                    <div>
                        <h2 class="display-8 color-primary extra-bold">Meet our talented team</h2>
                        <div class="spacer-24"></div>
                        <p class="paragraph-medium color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit <br/>phasellus mollis sit aliquam sit nullam.</p>
                    </div>
                    <div id="image-nav">
                        <div @click="currentImage += -1" :class=' currentImage != 0 ? "button-default bg-dark" : "button-default bg-light pointer-events-none"'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.72314 15.179L2.25007 9.00011L8.72315 2.82126" :stroke="currentImage != 0 ? 'white' :'#4C5186'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.25 9L15.75 9" :stroke="currentImage != 0 ? 'white' :'#4C5186'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div @click="currentImage += 1" :class=' currentImage != images.length - 1 ? "button-default bg-dark" : "button-default bg-light pointer-events-none"'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.8269 2.82129L15.2999 9.0001L8.8269 15.1789" :stroke="currentImage != images.length - 1 ? 'white' :'#4C5186'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2999 9L2.69995 9" :stroke="currentImage != images.length - 1 ? 'white' :'#4C5186'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                    </div>
               </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'About',
    // Slider logic:
    data() {
        return {
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
    },
}
</script>

<style scoped>
/* Add your custom styles here */
main {
margin-top: 80px;
}

#hero {
    text-align: center;
    width: 100%;
    max-width: var(--max-width-medium);
}

#section-1 {
    display: flex;
    width: 100%;
    gap: 56px;
    height: 464px;
    padding: 32px 56px 32px 0px;
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
}

#section-1-image-container {
    width: 50%;
}

#section-1-image-container img {
    border-radius: 8px;
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
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    margin-bottom: 32px;
    width: 55%;
}

#section-2-text-container {
    text-align: left;
    padding: 0px 0px 32px 32px;
}

#section-2-image-container {
    border-radius: 8px;
    display: flex;
    align-self: flex-end;
    height: 100%;
    width: 50%;
    min-width: 200px;
}

#section-2-image-container img {
    border-bottom-right-radius: 8px;
    border-top-left-radius: 20px;
    width: 100%;
    height: 100%;
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
    flex-direction: column;
    width: 100%;
    max-width: var(--max-width-medium);
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
}

#call-to-action > h3 {
    width: 60%;
}

#team-container {
    padding: 80px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
}

#team {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--max-width-medium);
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
    }

    #section-2-image-container {
        width: 100%;
        height: 300px;
    }

    #section-2-text-container {
        padding: 0px;
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