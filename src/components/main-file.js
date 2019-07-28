const fileComponent = {
    props:{
        defaultKeyword:{
            type:String
        }
    },
    template:"<main-component :lists='fileLinks' :keyword='defaultKeyword'></main-component>",
    components:{
        'main-component':mainComponent,
    },
    data:function(){
        return{
            fileLinks:defaultFileLinks
        }
    }
}