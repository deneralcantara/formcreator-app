import React, {useEffect, useState} from 'react';
import { Text, View, StatusBar, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { style } from './styles'
import * as axios from 'axios';
import { env } from '../../../env'
import * as Location from 'expo-location';

export default function AnswerForm({ route, navigation }) {

  const [location, setLocation] = useState(null);


  useEffect(() => {
    getActualLocation();
  }, []);

  function getActualLocation(){
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }
  
  const title = route.params.form.title;
  const questions = route.params.form.questions;

  function changeTextArray(text, item) {
    var newArray = item;
    
    newArray.answer = text;
  }

  function saveForm(){
    var array = questions;
    
    for (let question of questions) {
        if(question.answer == null || question.answer == ""){
          alert("Digite corretamente todas as respostas");
          return false;
        }
    }

    try {
      axios.patch(`${env.API_URL}/form/${route.params.form.id}`, {question: questions, location: location })
      .then(function (response) {
        alert("Formulário respondido com sucesso!");
        navigation.pop(1);
      })
      .catch(function (error) {
        alert("Erro ao responder questionário");
      });
    }catch (e) {
      alert(e);
      return false;
    }
  }

  return (
    <View style={style.body}>
      <StatusBar />

        <View style={style.form}>
          <Text style={style.label}>Título do Formulário</Text>
          <Text style={style.answer}>{title}</Text>
        </View>

        <View style={style.form}>
          <Text style={style.label}>Perguntas</Text>
        </View>

        <FlatList
          style={style.flatlist}
          data={questions}
          renderItem={({item, index} ) => (
            <View>
                <Text style={style.question}>{item.question}</Text>
                {
                  item.answer && item.answer.id && (
                    <Text style={style.answerText}>{item.answer.answer}</Text>
                  )
                }

                {
                  !item.answer && (
                    <TextInput onChangeText={(text) =>{ changeTextArray(text, item) }} value={item.answer} style={style.input} />
                  )
                }

                {
                  (index + 1 == questions.length && !item.answer) && (
                    <TouchableOpacity onPress={() => saveForm()} style={style.button}>
                      <Text style={style.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                  )
                }

                {
                  (index + 1 == questions.length && item.answer && item.answer.id) && (
                    <View>
                      <Text style={style.when_answered, {marginTop: 100}}>Formulário respondido em: {item.answer.created_at}</Text>
                      <Text style={style.when_answered}>Latitude: {item.answer.lat}</Text>
                      <Text style={style.when_answered}>Longitude: {item.answer.long}</Text>
                      <TouchableOpacity onPress={() => navigation.pop(1)} style={style.buttonBack}>
                        <Text style={style.buttonText}>Voltar</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
                
            </View>
        )} keyExtractor={(item) => item.id.toString()}/>
        

    </View> 
  );
}