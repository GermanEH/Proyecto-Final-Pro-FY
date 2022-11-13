import React ,{useState,useEffect} from 'react'
import { SafeAreaView,StyleSheet,View,Text,ScrollView,TouchableOpacity, LayoutAnimation, Platform, UIManager} from 'react-native'
const Consultas=[
                {
                    isExpanded:false,
                    category_name:"Consulta 1",
                    SubCAtegory:[
                            {id:1, val:'datos 1 Consulta 1'},
                            {id:2, val:'datos 2 Consulta 1'}
                    ]

                },
                {
                    isExpanded:false,
                    category_name:"Consulta 2",
                    SubCAtegory:[
                            {id:3, val:'datos 1 Consulta 2'},
                            {id:4, val:'datos 2 Consulta 2'}
                    ]

                },
                {
                    isExpanded:false,
                    category_name:"Consulta 3",
                    SubCAtegory:[
                            {id:5, val:'datos 1 Consulta 3'},
                            {id:6, val:'datos 2 Consulta 3'}
                    ]

                }

    ];
export function ListaConsultas(){
    
    
    const [multiSelect,setMultiSelect]=useState(false);
    const [LIstaConsulta,setLIstaConsulta]=useState(Consultas);
    if(Platform.OS==='android'){

        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const upDateLayout=(index)=>{

            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
            const array=[...LIstaConsulta]
            if(multiSelect){

                array[index]['isExpanded']=!array[index]['isExpanded']
            }else{

                array.map((value,placeIndex)=>(

                        placeIndex===index
                        ?(array[placeIndex]['isExpanded']=!array[placeIndex]['isExpanded'])
                        :(array[placeIndex]['isExpanded']=false)

                ) )
            }
            setLIstaConsulta(array)
    }
    
    
    const ExpandableComponent=(item,onClickFunction)=>{
        const [layoutHeight,setLlayoutHeight]=useState(0);

         
        useEffect(()=>{

                if(item.item.isExpanded) setLlayoutHeight(null);
                else setLlayoutHeight(0);

        },[item.item.isExpanded])
            return(

                <View>
                    <TouchableOpacity style={styles.item} onPress={item.onClickFunction}>
                        <Text style={styles.itemText}>
                                {item.item.category_name}
                        </Text>

                    </TouchableOpacity>
                    <View style={{ height: layoutHeight, overflow: 'hidden'}}>
                         {
                            item.item.SubCAtegory.map((item,key)=>(
                                    <TouchableOpacity key={key} style={styles.content}>

                                            <Text style={styles.text}>
                                                {key}.{item.val}
                                            </Text>
                                            <View style={styles.separator} />
                                    </TouchableOpacity>


                            ))
                         }
                    </View>
                </View>
            )
    }


return(
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.titleText}>
                    LISTA DE CONSULTAS
                </Text>
                <TouchableOpacity 
                   onPress={()=>setMultiSelect(!multiSelect)}   
                >
                     <Text style={styles.headerButoon}>
                        {
                            multiSelect
                            ? 'Enable Single \n Expand'
                            : 'Enable multiple \n Expand'

                        }
                     </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {

                    LIstaConsulta.map((item, key)=>(
                        
                        <ExpandableComponent
                          key={item.category_name} 
                          item={item} 
                          onClickFunction={()=>{
                                upDateLayout(key)

                          }}
                        />
                                
                       
                    )
                    
                    
                    )
                }
            </ScrollView>
        </View>
   </SafeAreaView>

)


}

const styles= StyleSheet.create({
container:{
    flex: 1
},
header:{
     flexDirection:'row',
     padding:10

},
headerButoon:{
 textAlign:'center'

},
titleText:{
   flex:1,
   fontSize:22,
   fontWeight: 'bold'

},
item:{
    backgroundColor:'orange',
    padding:20

},
itemText:{
    fontSize:16,
    fontWeight:'500'

},
content:{
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#fff'
},
text:{
 fontSize:16,
 padding:10

},
separator:{
    height:0.5,
    backgroundColor:'#c8c8c8',
    width:'100%'

}

});
export default ListaConsultas;