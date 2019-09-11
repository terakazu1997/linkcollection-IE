const mainComponent = {
    template: (function(){/*
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
        </div>
        */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),
        data:function() {
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
                this.$store.commit('searchLinkLists',this.keyword)
            },
            $route:function(){
                this.keyword = ''
                this.returnIdentifier +=1;
                this.$store.commit('getCurrentLinkList',this.$route.params.lists)
            }
        },
        mounted:function(){
            p = this
            this.routingDetailObjects.some(function(routingDetailObject) {
                if(p.$route.name === routingDetailObject.name){
                    p.$store.commit('getFirstLinkList',routingDetailObject.link);
                    return true;
                }
            });
        },
        components: {
            'head-component':headComponent,
            'infinite-loading': VueInfiniteLoading.default
        },
        computed: {
            routingDetailObjects:function(){
                return this.$store.state.routingDetailObjects
            },
            showContentDetailModal:function(){
                return this.$store.state.showContentDetailModal
            },
            linkLists:function(){
                return this.$store.state.linkLists
            },
            displayLinkLists:function(){
                const itemCount = this.pageNumber * this.onePageItems;
                var tempLinkLists = [];
                this.$store.state.linkLists.some(function(tempLinkList){
                    if(tempLinkLists.length === itemCount){
                        return true;
                    }
                    tempLinkLists.push(tempLinkList);
                })
                return tempLinkLists;
            }
        },
        methods:{
            getKeyword:function(newKeyword){
                this.keyword = newKeyword
            },
            infiniteHandler:function($state) {
                var p= this
                setTimeout(function()  {
                    if (Math.floor(p.linkLists.length / p.onePageItems) >= p.pageNumber) {    
                        p.pageNumber ++;
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                },300)
            },

        }
}