const headComponent = {
    template: (function(){/*
        <div>
        <header>
            <div id ="header">
                <div id="headerInner">
                    <router-link to='/'><h1>リンク集</h1></router-link>
                    <nav>
                        <ul id="nav" class="clearfix">
                            <li class ="headLink" id = "site">
                                <router-link to='/site'>サイト</router-link>
                            </li>
                            <li class ="headLink" id ="folder">
                                <router-link to='/folder'>フォルダ</router-link>
                            </li>
                            <li class ="headLink" id ="file">
                                <router-link to='/file'>ファイル</router-link>
                            <li class="search">
                                <input id="searchText" placeholder="リンク" name="searchText" type="text" 
                                        v-model="computedKey"
                                        v-focus></li>
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
    }
}