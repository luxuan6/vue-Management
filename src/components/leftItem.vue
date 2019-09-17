<template>
    <ul class="left-list">
        <li>0</li>
        <li>
            <p>11111</p>
            <p>111111:<span>0</span></p>
            <p>douyin</p>
        </li>
        <li>
            <p>关注人：0</p>
            <p>2019-8-2</p>    
        </li>
        <li>
            <p>关注车：0</p>
        </li>
    </ul>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.left-list{
    width: 100%;
    height:60px;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
}

.left-list li{
    flex: 1;
    display: flex;
    flex-direction: column;
    
    color: #65B5D6;
}
.left-list li:nth-child(0){
    width: 20px;
    height: 100%;
    background: red;
}
.left-list li p{
    width: 100%;
    flex: 1;
    line-height: 20px;
}
</style>