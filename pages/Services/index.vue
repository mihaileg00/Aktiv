<template>
    <main>
            <div id="hero">
                <div class="image-container">
                    <img src="/hero.png" alt="Hero Image">
                </div>
                <div id="hero-content" class="shadow-02 shadow-mobile-none">
                    <h1 class="display-7 extra-bold align-center-mobile color-primary">Highly effective solutions</h1>
                    <div class="spacer-24"></div>
                    <p class="paragraph-medium align-center-mobile color-secondary">Lorem ipsum dolor sit amet consectetur adipiscin eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <div class="spacer-32"></div>
                    <div class="button-default button-dark  color-light">
                        <p>Свържете се с нас</p>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88452 0.880772L9.19988 4.99998L4.88452 9.11919" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.19984 4.99999L0.799896 4.99999" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    </div>
            </div>
            <div id="description">
                <div id="description-header" class="mobile-hidden">
                        <h2 class="display-8 extra-bold color-primary">Our Services</h2>
                        <div class="spacer-24"></div>
                        <p class="paragraph-large color-secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit tortor<br/> eu egestas morbi sem vulputate etiam facilisis.</p>
                </div>
                <div class="spacer-32"></div>
                <div id="description-content" class="shadow-mobile-02">
                    <div class="services-half shadow-02 shadow-mobile-none" >
                        <div class="service-bullet" v-for="service in services.slice(0, Math.ceil(services.length / 2))" :key="service">
                            <div class="bullet-icon">
                                <img src="/icons/Email.svg" alt="Bullet Icon">
                            </div>
                            <p class="paragraph-medium color-secondary">Hendrerit sagittis pretium, enim mi duis euol vitae nunc penatibus fermentum id velit.</p>
                        </div>
                    </div>
                    <div class="services-half shadow-02 shadow-mobile-none" >
                        <div class="service-bullet" v-for="service in services.slice(Math.ceil(services.length / 2))" :key="service">
                            <div class="bullet-icon">
                                <img src="/icons/Email.svg" alt="Bullet Icon">
                            </div> 
                            <p class="paragraph-medium color-secondary">Hendrerit sagittis pretium, enim mi duis euol vitae nunc penatibus fermentum id velit.</p>
                        </div>
                        <div class="service-bullet" v-if="services.length%2 == 1"><p class="paragraph-medium color-secondary">Kurwa</p></div>
                    </div>
                </div>
            </div>
            <div id="call-to-action">
                <div id="cta-content">
                    <h3 class="display-7 extra-bold color-light">
                        Искате да научите повече за нашите абонаментни услуги?
                    </h3>
                    <div class="spacer-24"></div>
                    <p class="paragraph-medium color-light">Свържете се с нас днес и започнете да създавате по-стабилна и успешна финансова бъдеще.</p>
                    <div class="spacer-32"></div>
                    <div class="button-default bg-light  color-secondary bg-light-mobile color-secondary-mobile">
                        <p>Свържете се с нас</p>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.88452 0.880772L9.19988 4.99998L4.88452 9.11919" stroke="#4C5186" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.19984 4.99999L0.799896 4.99999" stroke="#4C5186" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div id="cta-image-container">
                    <img id="cta-image" src="/hero.png" alt="Call to Action Image">
                </div>
            </div>
    </main>
</template>

<script>
export default {
    name: 'DemoPage',
    // services data in bulletpoints
    data(){
        return {
            services: [
                "Service 1",
                "Service 2",
                "Service 3",
                "Service 4",
                "Service 5",
                "Service 6",
                "Service 7",
                "Service 8",
                "Service 9",
                "Service 10",
            ]
        }
    } 
}
</script>

<style scoped>

main {
margin-top: 80px;
}

#hero {
position: relative;
width: 100%;
height: 550px;
max-width: var(--max-width-medium);
display: flex;
align-items: center;
justify-content: flex-end;
}

.image-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 80%;
}

#hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#hero-content {
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 62px 56px;
background-color: var(--main-bg-color);
border: 1px solid var(--neutral-400);
border-radius: 8px;
width: 45%;
max-width: 500px;

}

#description{
    width: 100%;
    max-width: var(--max-width-medium);
}

#description-content{
    display: flex;
    gap: 24px;
    width: 100%;
}

.services-half{
    width: 100%;
    padding: 56px 48px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    border: 1px solid var(--neutral-400);
}

.service-bullet{
    display: flex;
    gap: 24px;
    align-items: center;
}

#call-to-action{
    position: relative;
    width: 100%;
    max-width: var(--max-width-medium);
    padding: 100px 80px 68px 80px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: var(--secondary-color);
}

#cta-content{
    width: 50%;
    max-width: 500px;
    display: block;
}

#cta-image-container{
    position: absolute;
    top: -40px;
    right: 40px;
    bottom: 0;
    width: 30%;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

@media screen and (max-width: 768px){

    main{
        margin-top: 70px;
    }

    #hero{
        height: auto;
    }
    
    .image-container{
        display: none;
    }

    #hero-content{
        width: 100%;
        padding: 0px;
        border-radius: 0;
        border: none;
        align-items: stretch;
    }

    #description-content{
        flex-direction: column;
        border: 1px solid var(--neutral-400);
        border-radius: 8px;
        gap: 32px;

        padding: 48px 32px;
    }

    .services-half{
        padding: 0px;
        border: none;
    }

    #call-to-action{
        padding: 36px 20px;
        border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    }

    #cta-content{
        width: 100%;
        padding: 0px;
        text-align: center;
        margin-bottom: 48px;
    }

    #cta-image-container{
        position: static;
        width: 100%;
        border-radius: 8px;
    }

}

</style>
