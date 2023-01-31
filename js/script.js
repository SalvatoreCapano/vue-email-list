const {createApp} = Vue;

createApp({
    data() {
        return {
            mail: "",
            emails: [],
            emailsTemp: []
        }
    },
    methods: {
        getEmail () {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                (response) => {
                    console.log(response);
                    console.log(response.data);

                    this.emailsTemp.push(response.data.response);
                }
            );
        },
        getEmailsArray () {
            for (let i = 0; i < 10; i++) {
                this.getEmail();
            }
            this.emails = this.emailsTemp;
        }
    }
}).mount("#app");