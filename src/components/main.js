const mainComponent = {
    template: `
        <div>
            <head-component  @input="getKeyword" :paramsRoutingObject= "routingDetailObjects" />
            <main>
                <div class="inContent crearfix">
                    <ul class="box">
                        <li class="item" v-for="(linkList, index) in displayLinkLists" :key="index" >
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
                <infinite-loading
                :identifier="returnIdentifier"
                @infinite="infiniteHandler">
                <div slot="no-results"/>
                <span slot="no-more"/>
            </infinite-loading>  
            </main>
        </div>`,
        data() {
            return {
                keyword: '',
                pageNumber: 1,
                onePageItems: 12,
                loading: false,
                returnIdentifier: 1
            }
        },
        props:{
            identifier:{
                type:Number,
                default: 1
            }
        },
        watch: {
            keyword: function() {
                this.returnIdentifier +=1;
                this.$store.commit('searchLinkLists',{keyword:this.keyword})
            },
            $route:function(){
                this.keyword = ''
                this.returnIdentifier +=1;
                this.$store.commit('getCurrentLinkList',{currentList:this.$route.params.lists})
            }
        },
        mounted:function(){
            for(let routingDetailObject of this.routingDetailObjects){
                if(this.$route.name === routingDetailObject.name){
                    this.$store.commit('getFirstLinkList',{firstLink:routingDetailObject.link});
                    break;
                }
            }
        },
        components: {
            'head-component':headComponent,
            'infinite-loading': VueInfiniteLoading.default
        },
        computed: {
            routingDetailObjects(){
                return this.$store.state.routingDetailObjects
            },
            showContentDetailModal(){
                return this.$store.state.showContentDetailModal
            },
            linkLists(){
                return this.$store.state.linkLists
            },
            displayLinkLists(){
                const itemCount = this.pageNumber * this.onePageItems;
                let tempLinkLists = [];
                for(let tempLinkList of this.$store.state.linkLists){
                    if(tempLinkLists.length === itemCount){
                        break;
                    }
                    tempLinkLists.push(tempLinkList);
                }
                return tempLinkLists;
            }
        },
        methods:{
            getKeyword:function(newKeyword){
                this.keyword = newKeyword
            },
            infiniteHandler($state) {
                setTimeout(() => {
                    if (Math.floor(this.linkLists.length / this.onePageItems) >= this.pageNumber) {    
                        this.pageNumber ++;
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                },300)
            },

        }

}