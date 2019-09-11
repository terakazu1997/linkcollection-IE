var defaultAllLinks = createAllLinks(defaultSystemLinks,defaultContLinks,defaultLearnLinks)

const mainComponent = {
    props:{
        keyword:{
            type:String
        },
        lists:{
            type:Array
        }
        
    },
    template: `
        <div>
            <main>
                <div class="inContent crearfix">
                    <ul class="box">
                        <li class="item"v-for="linkList in linkLists" :key="linkList.linkTitle" >
                        <section>
                            <div class="imgLink">
                                <a :href="linkList.anchorLink" target="_blank"><img :src="linkList.imgSrc"></a>
                            </div>
                            <div class="linkTitle">
                                <a :href="linkList.anchorLink" target="_blank"><h3>{{linkList.linkTitle}}</h3></a>      
                            </div>
                        </section>
                        </li>
                    </ul>
                </div>
            </main>
        </div>`,
        data:function(){
            return{
                linkLists:null
            }
        },
        watch: {
            keyword: function() {
                this.getResult()
            }
        },
        mounted:function(){
            switch(this.$root._route.fullPath){
                case '/':
                    this.linkLists=defaultAllLinks;
                    break;
                case '/system':
                    this.linkLists=defaultSystemLinks;
                    break;
                case '/cont':
                    this.linkLists=defaultContLinks;
                    break;
                case '/learn':
                    this.linkLists=defaultLearnLinks;
                    break;
                case '/exp':
                    this.linkLists=defaultExpLinks;
                    break;
                case '/tell':
                    this.linkLists=defaultTellLinks;
                    break;
                case '/happy':
                    this.linkLists=defaultHappyLinks;
                    break;
            }
        },
        methods:{
            getResult:function(){
                this.linkLists = [];
                if(this.keyword === ''){
                    this.linkLists = this.lists;
                    return
                }
                for(var i =0;i<this.lists.length;i++){
                    var replaceKeyword = this.replaceText(this.keyword);
                    var replaceLinkTitle = this.replaceText(this.lists[i].linkTitle);
                    if(replaceLinkTitle.match(replaceKeyword)){
                        this.linkLists.push(this.lists[i])
                    }
                }
            },
            replaceText:function(str){
                str =str.replace(/[ぁ-んａ-ｚＡ-Ｚ０-９]/g, function(chr) {
                    var replaceChr = chr.match(/[ぁ-ん]/g)?chr.charCodeAt(0) + 0x60:chr.charCodeAt(0) - 65248;
                    return String.fromCharCode(replaceChr);
                })
                str = str.match(/[a-z]/g)? str.toUpperCase(): str;
                return str;
            }
        }

}