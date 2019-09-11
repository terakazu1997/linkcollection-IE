Vue.use(Vuex);


var defaultSiteLinks = defaultLinks.filter(function(link){return link.janru === 'site'})
var defaultFolderLinks = defaultLinks.filter(function(link){return  link.janru === 'folder'})
var defaultFileLinks = defaultLinks.filter(function(link){ return  link.janru === 'file'})

const state = {
        routingDetailObjects:[
            {name:'all',link:defaultLinks},
            {name:'site',naviName:'サイト',link:defaultSiteLinks},
            {name:'folder',naviName:'フォルダ',link:defaultFolderLinks},
            {name:'file',naviName:'ファイル',link:defaultFileLinks},
        ],
        linkLists:[],
        defaultLists:[],
        listIndex:0
}

const mutations ={
    getFirstLinkList:function(firstLink){
        state.defaultLists=firstLink
        state.linkLists = firstLink
    },
    getCurrentLinkList:function(currentList){
        state.defaultLists = currentList
        state.linkLists = currentList
    },
    searchLinkLists:function(keyword){
        state.linkLists = [];
        if(keyword === ''){
            state.linkLists = state.defaultLists;
            return
        }
        for(var i =0;i<state.defaultLists.length;i++){
            var replaceKeyword = replaceText(keyword);
            var replaceLinkTitle = replaceText(state.defaultLists[i].linkTitle);
            if(replaceLinkTitle.match(replaceKeyword)){
                state.linkLists.push(state.defaultLists[i])
            }
        }
    }
}
const store =  new Vuex.Store({
    state:state,
    mutations:mutations
})