import React from 'react';
import { Button,Form } from 'react-bootstrap';
import ChildComponent from './ChildComponent';
import Header from './Header';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    errorMessage:'',
    successMessage:'',
    successFlag:false,
    }
    this.reset  = this.reset.bind(this);
  }
  setValue(e){
      let id= e.target.id;
      let value = e.target.value;
      let username=this.state.username;
      if(value ===undefined || value === '')
        return;
      if(id==='username'){ //to seperate the value for username
      username = value.toUpperCase();
      this.setState({
        username:username})
      }
      else{
        this.setState({
          password:e.target.value})
      }
  }
  submit(e){
    //to check undefined you can add multiple check condition
    if(this.state.username ===undefined || this.state.username ==='' 
          || this.state.password === undefined || this.state.password === ''){
      this.setState({
        errorMessage:'Enter both the field details'})
    }
    else if(this.state.username.toLocaleUpperCase()==='RIMMI21' && this.state.password ==='123'){
      this.setState({
        successMessage:this.state.username,
        errorMessage:'',
        successFlag:true
      })
  }
  else{
    this.setState({
      errorMessage:'Please enter correct details'
    })
  }
}
 
  reset(){
   let username =this.state.username;
   let password =this.state.password;
      this.setState({
      username:'',
      password:'',
      errorMessage:'',
      successMessage:'',
    })
  }  
render(){
return(<div><Header/>{this.state.successFlag ? <ChildComponent/>:
 <center>
 <Form>
  <Form.Group >
    <Form.Label style={{marginLeft: '15px'}}>User Name</Form.Label>
    <Form.Control type="username" placeholder="username" id='username' style={{'width': '348px',marginLeft: '19px'}}
     value={this.state.username} onChange={(e)=>this.setValue(e)}/>
  </Form.Group>
  <Form.Group >
    <Form.Label style={{marginLeft: '15px'}}>Password</Form.Label>
    <Form.Control style={{'width': '348px',marginLeft: '19px'}} type="password"  id='password' 
     placeholder="Password" value={this.state.password} onChange={(e)=>this.setValue(e)}/>
  </Form.Group>
  <Button variant="primary" type="button"onClick={(e)=>this.submit(e)}>
    Submit
  </Button>
  <Button variant="primary" type="button" style={{marginLeft: '50px'}} onClick={this.reset}>
    Reset
  </Button>
  <p style={{color:'red'}} > {this.state.errorMessage}</p> 
     
 </Form> 
 </center>
 }
 
 </div> 
 )}}

export default App;