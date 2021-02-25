import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { style } from './styles'
import * as axios from 'axios';
import { env } from '../../../env'

export default function FormScreen({ navigation }) {

  const [title, onChangeTitle] = useState(null);
  const [questions, onChangeQuestions] = useState([
    {
      id: 1,
      question: null,
    }
  ]);

  useEffect(() => {
  
  }, []);

  async function saveForm() {

    //VALIDATE FORM
    if(title == null){
      alert("Digite o título do questionário");
      return false;
    }

    var array = questions;
    
    for (let question of array) {
        if(question.question == null || question.question == ""){
          alert("Digite corretamente todas as questōes");
          return false;
        }
    }

    try {
      axios.post(`${env.API_URL}/form`, {title: title, questions: questions })
      .then(function (response) {
        alert("Formulário criado com sucesso!")
        onChangeTitle(null);
        onChangeQuestions([
          {
            id: 1,
            question: null,
          }
        ]);
      })
      .catch(function (error) {
        alert("Erro ao criar formulário");
      });
    }catch (e) {
      alert(e);
      return false;
    }
    
  }

  function changeTextArray(text, id) {
    var newArray = [...questions];
    
    for (let question of newArray) {
        if(question.id == id){
          question.question = text;
        }
    }

    onChangeQuestions(newArray);
  }

  function addQuestion() {

    var newArray = [...questions , {id : Math.floor(Math.random() * 1000000) + 1, question: null }];

    onChangeQuestions(newArray);
  }

  function deleteQuestion(index) {
    var newArray = [...questions];

    newArray.splice(index, 1);
    onChangeQuestions(newArray);
  }

  return (
    <View style={style.body}>
      <StatusBar />

      <View style={style.title}>
        <Text style={style.text}>Criação de Questionário</Text>
      </View>

      <KeyboardAvoidingView style={{width: "100%", flex: 1}}>
        <View style={style.form}>
          <Text style={style.label}>Digite o título do questionário</Text>
          <TextInput onChangeText={text => onChangeTitle(text)} value={title} style={style.input} />
        </View>
      
        <FlatList
        removeClippedSubviews={false}
          data={questions}
          style={{flex: 1,}}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={( {item, index} ) => (
            <View style={style.form}>
              <Text style={style.label}>Pergunta {index + 1}</Text>
              <TextInput onChangeText={(text) =>{ changeTextArray(text, item.id) }} value={item.question} style={style.input} />
              {
                (questions.length > 1) && (
                  <TouchableOpacity onPress={() => deleteQuestion(index)} style={{marginLeft: 20}}>
                    <Text style={{color: "#d9534f"}}>Apagar Pergunta</Text>
                  </TouchableOpacity>
                )
              }

              {
                index + 1 == questions.length && (
                  <View>
                    <TouchableOpacity onPress={ () => addQuestion() } style={style.buttonPrimary}>
                      <Text style={style.buttonText}>Adicionar Pergunta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () => saveForm() } style={style.buttonSuccess}>
                      <Text style={style.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                  </View>
                )
              }
            </View>
          )}
        />
      </KeyboardAvoidingView>

    </View> 
  );
}