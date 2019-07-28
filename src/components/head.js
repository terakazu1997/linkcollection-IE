var activeLink= ['allLink','siteLink','folderLink','fileLink']

const headComponent = {
    template: (function(){/*
        <div>
        <header>
            <div id ="header">
                <div id="headerInner">
                    <router-link to='/'>
                        <h1><span :class="{active:activeAllLink}">リンク集</span></h1>
                    </router-link>
                    <nav>
                        <ul id="nav" class="clearfix">
                            <li class ="headLink" id = "site">
                                <router-link :class="{active:activeSiteLink}" to='/site'>サイト</router-link>
                            </li>
                            <li class ="headLink" id ="folder">
                                <router-link to='/folder' :class="{active:activeFolderLink}">フォルダ</router-link>
                            </li>
                            <li class ="headLink" id ="file">
                                <router-link to='/file' :class="{active:activeFileLink}">ファイル</router-link>
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
    props:['value'],
    computed: {
        computedKey: {
            get:function() {
                return this.value
            },
            set:function(val) {
                this.$emit("input", val);
            }
        }
    },
    data:function(){
        return{
            activeAllLink:false,
            activeSiteLink:false,
            activeFolderLink:false,
            activeFileLink:false,
        }
    },
    mounted:function(){
        switch(this.$root._route.fullPath){
            case '/':
                this.activeAllLink=true;
                break;
            case '/site':
                this.activeSiteLink=true;
                break;
            case '/folder':
                this.activeFolderLink=true;
                break;
            case '/file':
                this.activeFileLink=true;
                break;
        }
    },
    watch:{
        $route:function(){
        switch(this.$root._route.fullPath){
            case '/':
                this.activeAllLink=true;
                this.activeSiteLink=false;
                this.activeFolderLink=false;
                this.activeFileLink=false;
                break;
            case '/site':
                this.activeSiteLink=true;
                this.activeAllLink=false
                this.activeFolderLink=false;
                this.activeFileLink=false;
                break;
            case '/folder':
                this.activeFolderLink=true;
                this.activeAllLink=false
                this.activeSiteLink=false;
                this.activeFileLink=false;
                break;
            case '/file':
                this.activeFileLink=true;
                this.activeAllLink=false;
                this.activeSiteLink=false;
                this.activeFolderLink=false;
                break;
        }
    }
    }
}