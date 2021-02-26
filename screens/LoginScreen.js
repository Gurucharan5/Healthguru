import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput, Button, Alert} from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }
    
      
      
      onLogin() {
        const { username, password } = this.state;

        try{
              
          fetch("http://localhost:3000/user/login",{
            
             user:({
                 username: username,
                 password: password,
                 
             })

         },{withCredentials: true})
         .then(response =>{
             console.log("login response",response);
         })
         
   
}catch(error){
   alert(error)
}
    
        this.props.navigation.navigate("DashboardScreen");
      }
    
      render() {
        return (
          <View style={styles.container}>
          <Text style={styles.inputext}>Login Form </Text>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
               label='Email'
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              label='Password'
              secureTextEntry={true}
              style={styles.input}
            />
            
            <Button
              title={'Login'}
              style={styles.input}
              onPress={this.onLogin.bind(this)}
            />
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
      },
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        marginBottom: 10,
      },
      inputext: {
        width: 200,
        height: 44,
        padding: 10,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom: 10,
      },
    });

