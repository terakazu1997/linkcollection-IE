const headComponent = {
    template: (function(){/*
        <div>
        <header>
            <div id ="header">
                <div id="headerInner">
                    <router-link :to="{ name: allLinkObject.name, params: {lists: allLinkObject.link}}" >
                        <div id ='header-title'>
                            <h1 :class="{active:activeLinkLists[allLinkObject.name]}"><span>リンク集</span></h1>
                        </div>
                    </router-link>    
                    <nav>
                        <ul id="nav">
                            <li v-for="(naviLinkObject,index) in naviLinkObjects" :key="index" class ="headLink" :id = 'naviLinkObject.name'>
                                <router-link :to="{ name: naviLinkObject.name, params: {lists: naviLinkObject.link}}" :class="{active:activeLinkLists[naviLinkObject.name]}">{{naviLinkObject.naviName}}</router-link>
                            </li>
                            <li class="search">
                                <input id="searchText" placeholder="リンク" name="searchText" type="text" 
                                    v-model="computedKey" v-focus>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <router-view :defaultKeyword= "computedKey"></router-view>
        </div>
        */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),
    props:{
        paramsRoutingObject :{
            type:Array,
            default: []
        }

    },
    computed: {
        computedKey: {
            get:function() {
                return this.keyword
            },
            set:function(newKeyword) {
                this.$emit("input", newKeyword);
            }
        }
    },
    data:function(){
        return{
                activeLinkLists:{
                    all:{activeAllLink:false},
                    site:{activeSiteLink:false},
                    folder:{activeFolderLink:false},
                    file:{activeFileLink:false},
                },
                keyword: '',
                allLinkObject: '',
                naviLinkObjects: '',
            }
    },
    mounted:function(){
        this.allLinkObject= this.paramsRoutingObject[0];
        this.naviLinkObjects= this.paramsRoutingObject.slice(1,this.paramsRoutingObject.length);
        this.setRouteActiveClass();
    },
    watch:{
        $route:function(){
            this.setRouteActiveClass();
        }
    },
    methods:{
        setRouteActiveClass:function(){
            var p = this
            this.paramsRoutingObject.some(function(paramRoutingObject){
                p.activeLinkLists[paramRoutingObject.name] = false;
                if(p.$route.name === paramRoutingObject.name){
                    p.activeLinkLists[paramRoutingObject.name] = true;
                }
            })
        }
    }
}