<template>
    <div class="wrap">
        <Header></Header>
        <div class="subject">
            <div class="left">
                <div class="meigai">
                    <div class="meigai-h3">
                        <h5>敏感电视</h5>
                        <span>更多</span>
                    </div>
                    <LeftItem></LeftItem>
                    <LeftItem></LeftItem>
                    <LeftItem></LeftItem>
                    <LeftItem></LeftItem>
                </div>
                <div class="box">

                </div>
            </div>
            <div class="center">
                <div>

                </div>
                <div>
                    
                </div>
            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../components/header'
import LeftItem from '../../components/leftItem'
export default {
    props:{

    },
    components:{
        Header,
        LeftItem
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
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .subject{
        flex: 1;
        width: 100%;
        display: flex;
          background: radial-gradient(#182335, #0D3C58, #182335); /* 标准的语法 */
    }
    .subject .left,.subject .right{
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .subject .left .meigai{
        width:100%;
        height:65%;
      
    }
    .subject .left .meigai .meigai-h3{
        width: 100%;
        height:30px;
        line-height: 30px;
        display: flex;
    }
    .subject .left .meigai .meigai-h3 span{
        width: 50px;
        height: 30px;
        font-size: 12px;
        color: #65B5D6;
        text-align: center;
    }
    .subject .left .meigai .meigai-h3 h5{
        height: 100%;
        flex: 1;
        color: #65B5D6;
        margin-left: 15px;
    }
    .subject .left .box{
        width: 100%;
        flex: 1;
        /* background:red; */
          border: 1px solid #000;
    }
    .subject .center{
        height: 100%;
        flex: 1;
        background: #fff;
    }
</style>