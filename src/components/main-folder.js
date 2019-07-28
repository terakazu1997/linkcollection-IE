const  folderComponent = {
    props:{
        defaultKeyword:{
            type:String
        }
    },
    template:"<main-component :lists='folderLinks' :keyword='defaultKeyword'></main-component>",
    components:{
        'main-component':mainComponent,
    },
    data:function(){
        return{
            folderLinks:defaultFolderLinks
        }
    },
}