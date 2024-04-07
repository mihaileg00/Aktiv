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
                <img src="/icons/Email.svg" class="icon" alt="email-icon" />
                </div>
                <div class="contact-text">
                    <p class="display-2 color-secondary">Имейл:</p>
                    <p class="display-2 semi-bold color-primary">mail@aktivbg.com</p>
                </div>
            </div>
            <div class="separator-contacts-small"></div>
            <div class="contact">
                <div class="contact-icon">
                    <img src="/icons/Phone.svg" class="icon" alt="phone-icon" />
                </div>
                <div class="contact-text">
                    <p class="display-2 color-secondary">Телефон</p>
                    <p class="display-2 semi-bold color-primary">(+359)88 516 4849</p>
                </div>
            </div>
            <div class="separator-contacts-small"></div>
            <div class="contact">
                <div class="contact-icon">
                    <img src="/icons/Location.svg" class="icon" alt="location-icon" />
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
            <form id="form" class="shadow-mobile-02">
                <div class="form-row">
                    <div class="form-group">
                        <label class="display-2 semi-bold color-primary" for="name">Име</label>
                        <input class="display-2 color-secondary shadow-02" autocomplete="name" placeholder="Иван Иванов" type="text" id="name" v-model="name" required>
                    </div>
                    <div class="form-group">
                        <label class="display-2 semi-bold color-primary" for="email">Имейл</label>
                        <input class="display-2 color-secondary shadow-02" autocomplete="email" placeholder="example@gmail.com" type="email" id="email" v-model="email" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="display-2 semi-bold color-primary" for="phone">Телефон</label>
                        <input class="display-2 color-secondary shadow-02" autocomplete="tel" placeholder="088 888 8888" type="tel" id="phone" v-model="phone" required>
                    </div>
                    <div class="form-group">
                        <label class="display-2 semi-bold color-primary" for="company">Компания</label>
                        <input class="display-2 color-secondary shadow-02" autocomplete="organization" type="text" placeholder="Фирма" id="company" v-model="company" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="display-2 semi-bold color-primary" for="message">Съобщение</label>
                    <textarea class="color-secondary display-2 shadow-02" placeholder="Съобщение" id="message" rows="3" v-model="message" required></textarea>
                </div>
                <div @click="sendEmail" type="submit" class="button button-dark color-light button-default">
                    <p>Изпрати съобщение</p>
                    <svg v-if="arrow" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.88452 0.880772L9.19988 4.99998L4.88452 9.11919" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.19984 4.99999L0.799896 4.99999" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </form>
        </div>
        <div v-if="alert" id="alert">
            <h3 class="display-2 color-primary">Благодарим ви за вашето запитване!</h3>
            <div @click="alert = false" type="submit" class="button button-dark color-light button-default">
                <p>Затвори</p>
            </div>
        </div>
    </div>
</template>

<script>
// Your script setup goes here


export default {
    name: 'Contacts',
    data() {
        return {
            // Your data properties go here
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            alert: false
        };

    },

    methods: {
        // Your methods go here
        sendEmail() {
            
            const messageFull = `
                Name: ${this.name}\n
                Email: ${this.email}\n
                Phone: ${this.phone}\n
                Company: ${this.company}\n
                Message: ${this.message}
                `;

            this.$mail.send({
                from: process.env.SMTP_USER,
                subject: 'Contact Form Submission',
                html: messageFull
            }).then(() => {
                this.alert = true;
                const {gtag} = useGtag();

                gtag('event', 'form_submit');
                // Clear the form
                this.name = '';
                this.email = '';
                this.phone = '';
                this.company = '';
                this.message = '';
                // Show a success message
            }).catch((error) => {
                console.error('Error sending email: ', error);
            });
        }
    },
    mounted() {
        // Code to run when the component is mounted goes here
    },
    // Your component-specific properties go h
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
    margin-bottom: 40px;
    padding: 0 var(--padding-side);
}

#contacts{
    display: flex;
    justify-content: center;
    gap: 40px;
    width: 100%;
}

.contact{
    display: flex;
    gap: 16px;
    align-items: flex-start;
    align-self: center;
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

#alert{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
    gap: 24px;
}


@media screen and (max-width: 768px) {

    #contacts-container{
        padding: 0 16px;
    }

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