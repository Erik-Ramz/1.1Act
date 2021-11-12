Vue.component('candidato', {
    /* props:['nombre','correoe','imagen'], */
    props:{
        nombre:{
            type:[String,Array],//null=* <--- esto es para que acepte cualquier tipo
            required:true,
        },
        correoe:{
            type:String,
            default:'nohaycorreo@si.com',
        },
        imagen:String,
        location:{
            type:Object,
            default(){
                return{
                    ciudad:"Guanajuato",
                }
            }
        },
    },
    template:'#candidato-template',
});

new Vue({
    el:'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data:{
        candidatos:[],
    },
    methods: {
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=50')
            .then((respuesta)=>{
                this.candidatos=respuesta.data.results;
            });
        },
    },
})