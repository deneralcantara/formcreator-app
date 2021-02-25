import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, RefreshControl, ScrollView } from 'react-native';
import { style } from './styles'
import { env } from '../../../env'
import * as axios from 'axios';

export default function IndexScreen({navigation}) {

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const [forms, setForms] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getForms();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {

      const unsubscribe = navigation.addListener('focus', () => {
        onRefresh()
      });
      
  }, []);

  async function getForms(){
    axios.get(`${env.API_URL}/form`)
    .then(function (response) {
      setForms(response.data.forms);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      // alert("Erro ao obter formulários");
    });
  }
 
  if(forms && forms.length > 0){
    return (
      <View style={style.body}>

        <Text style={{marginTop: 15}}>Para atualizar a lista, é só deslizar para baixo =)</Text>

        <View style={style.flatlist}>
          <View style={style.list_form}>
            <Text style={style.header}>ID</Text>
            <Text style={style.header}>Título do Formulário</Text>
            <Text style={style.header}>Açōes</Text>
          </View>
        </View>
         
          <FlatList refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            style={style.flatlist}
            data={forms}
            renderItem={({item} ) => (
                <View style={[style.list_form, {borderBottomWidth: 1, borderBottomColor: "#a6a6a6", paddingBottom: 20, paddingTop: 20}]}>
                  <Text>{item.id}</Text>
                  <Text>{item.title}</Text>

                  {
                    !item.questions[0].answer && (
                      <TouchableOpacity onPress={() => navigation.navigate('AnswerForm', {form: item})} style={style.button}>
                        <Text style={style.buttonText}>Responder</Text>
                      </TouchableOpacity>
                    )
                  }

                  {
                    item.questions[0].answer && (
                      <TouchableOpacity onPress={() => navigation.navigate('AnswerForm', {form: item})} style={style.buttonAnswer}>
                        <Text style={style.buttonText}>Respostas</Text>
                      </TouchableOpacity>
                    )
                  }

                </View>
          )}
            keyExtractor={(item) => item.id.toString()}

          />
      </View>
    );
  }else{
    return (
      <View style={[style.body, {marginTop: 200}]}>
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          <Text style={style.text}>Bem vindo ao aplicativo FormCreator! Para atualizar essa lista, é só deslizar para baixo =)</Text>  
        </ScrollView>
      </View>
    );
  }
}