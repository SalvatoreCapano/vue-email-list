const {createApp} = Vue;

createApp({
    data() {
        return {
            emails: [],
            emailsTemp: [],
            emailNumber: 10
        }
    },
    methods: {
        getEmail () {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                (resp) => {
                    console.log(resp.data);

                    this.emailsTemp.push(resp.data.response);

                    if (this.emailsTemp.length == this.emailNumber) {
                        this.emails = this.emailsTemp;
                    }
                }
            );
        },
        getEmailsArray () {
            this.emailsTemp = []; //Svuota l'array
            for (let i = 0; i < this.emailNumber; i++) {
                this.getEmail();
            }
        }
    }
}).mount("#app");