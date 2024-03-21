<template>
        <div id="contacts-container" >
        <h1 class="display-9 extra-bold color-primary display-8-mobile">Свържете се с нас!</h1>
        <div class="spacer-24"></div>
        <p class="color-secondary paragraph-medium">
            Моля, не се колебайте да се свържете с нас чрез предоставената<br/> информация за контакт за всякакви запитвания или помощ,<br/> от която може да се нуждаете.
        </p>
        <div class="spacer-32"></div>
        <div id="contacts">
            <div class="contact">
                <div class="contact-icon">
                <img src="/icons/Email.svg" alt="email" />
                </div>
                <div class="contact-text">
                    <p class="display-2 color-secondary">Имейл:</p>
                    <p class="display-2 semi-bold color-primary">mail@aktivbg.com</p>
                </div>
            </div>
            <div class="separator-contacts-small"></div>
            <div class="contact">
                <div class="contact-icon">
                    <img src="/icons/Phone.svg" alt="phone" />
                </div>
                <div class="contact-text">
                    <p class="display-2 color-secondary">Телефон</p>
                    <p class="display-2 semi-bold color-primary">+359 888 888 888</p>
                </div>
            </div>
            <div class="separator-contacts-small"></div>
            <div class="contact">
                <div class="contact-icon">
                    <img src="/icons/Location.svg" alt="location" />
                </div>
                <div class="contact-text">
                    <p class="display-2 color-secondary">Адрес:</p>
                    <p class="display-2 semi-bold color-primary">Stanke Dimitrov 7,<br/>Sandanski</p>
                </div>
            </div>
        </div>
        <div class="spacer-48"></div>
        <div class="separator-contacts"></div>
        <div class="spacer-48 mobile-hidden"></div>
        <div id="form-container">
            <div id="maps-container">
                <iframe
                    loading="lazy"
                    allowFullScreen
                    width="100%"
                    height="100%"
                    title="location"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJGbYT6ngxqhQRUaFum_7dAkA&key=AIzaSyCLSacJxzfGaFZ3rmPYkWHt6H4MHs0oFKc"
                />
            </div>
            <form id="form" class="shadow-02">
                <div class="form-row">
                    <div class="form-group">
                        <label class="display-2 semi-bold color-primary" for="name">Име</label>
                        <input class="display-2 color-secondary shadow-02" placeholder="Иван Иванов" type="text" id="name" v-model="name" required>
                    </div>
                    <div class="form-group">
                        <label class="display-2 semi-bold color-primary" for="email">Имейл</label>
                        <input class="display-2 color-secondary shadow-02" placeholder="example@gmail.com" type="email" id="email" v-model="email" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="display-2 semi-bold color-primary" for="phone">Телефон</label>
                        <input class="display-2 color-secondary shadow-02" placeholder="088 888 8888" type="tel" id="phone" v-model="phone" required>
                    </div>
                    <div class="form-group">
                        <label class="display-2 semi-bold color-primary" for="company">Компания</label>
                        <input class="display-2 color-secondary shadow-02" type="text" placeholder="Фирма" id="company" v-model="company" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="display-2 semi-bold color-primary" for="message">Съобщение</label>
                    <textarea class="color-secondary display-2 shadow-02" placeholder="Съобщение" id="message" rows="3" v-model="message" required></textarea>
                </div>
                <button class="button-default bg-blue color-light" type="submit">Изпрати съобщение</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts',
    data() {
        return {
            // Your data properties go here
        };
    },
    methods: {
        // Your methods go here
    },
    mounted() {
        // Code to run when the component is mounted goes here
    },
};
</script>

<style scoped>
/* Your component-specific styles go here */

#contacts-container{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 100%;
    max-width: var(--max-width-medium);
}

#contacts{
    display: flex;
    justify-content: center;
    gap: 40px;
}

.contact{
    display: flex;
    gap: 16px;
    align-items: center;
}   

.contact-icon{
    width: 48px;
    height: 48px;
}

.contact-text{
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left;
}

.separator-contacts-small{
    width: 1px;
    background-color: var(--neutral-400);
}

.separator-contacts{
    height: 1px;
    width: 100%;
    background-color: var(--neutral-400);
}

#form-container{
    display: flex;
    width: 100%;
    gap: 40px;
    height: min-content;
}

#maps-container{
    width: 50%;
    aspect-ratio: 10/7;
    background-color: var(--neutral-500);
    overflow: hidden;
}

form {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 24px;
    height: min-content;
}

.form-row{
    display: flex;
    width: 100%;
    gap: 32px;
}

.form-group{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px;
    text-align: left;
}

input{
    padding: 18px 16px;
    background-color: var(--background-color);
    border: 1px solid var(--neutral-300);
    border-radius: 6px;

}

textarea{
    padding: 16px;
    background-color: var(--background-color);
    border: 1px solid var(--neutral-300);
    border-radius: 6px;
}

@media screen and (max-width: 768px) {
    #contacts{
        flex-direction: column;
        gap: 16px;
    }

    .contact-text{
        gap: 4px;
    }

    .separator-contacts-small{
        width: auto;
        height: 1px;
    }

    .separator-contacts{
        display: none;
    }

    #form-container{
        flex-direction: column;
    }

    #maps-container{
        display: none;
    }

    form{
        width: 100%;
        border: 1px solid var(--neutral-300);
        border-radius: 8px;
        padding: 24px 16px;
    }

    .form-row{
        flex-direction: column;
        gap: 24px;
    }
}


</style>