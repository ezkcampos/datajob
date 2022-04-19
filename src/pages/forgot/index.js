import React,{useContext,useState,Component} from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import {UsuarioContext} from '../../contexts/user'

import {
    Main,
    Header,
    Content,
    Footer,
    ContainerLogoPharse,
    ContainerSignIn
} from './styles'
import firebaseApp from '../../services/firebase';




let Forgotpassword=()=>{
    const {signIn} = useContext(UsuarioContext);
    let email = useState('');
    //let password = useState('');

    const handlepassword = async () =>{
        try {
            email = document.querySelector("#emailLogin").value;
            //password = document.querySelector("#senhaLogin").value
            await signIn(email)
        }catch(err){
          console.log(err)
        }
      }
      //handeSubmit = e =>{
          //e.preventDefault();
      //};
      const handleclick = async () =>{}
    
    return(
       <Main>
           <Header>
           <div id="logo">
                  <img src="/images/datajoblogoletrasbrancas.png" width="450px" alt=""/>
              </div>
           </Header>

           <Content>
             
             <ContainerLogoPharse>
             <div id="Logo">
                <img src="/images/datajoblogobranca.png" width="350px" alt=""/>
            </div>
              <div id="pharse">
                <p>Plataforma para gestão</p>
                <p>do seu trabalho</p>
                <p>e seus colaboradores.</p>
              </div>
            </ContainerLogoPharse>
            
            <ContainerSignIn>
                <div id="containerLogin">
                    <div id="containerButtons">
                        <div class="button">
                            Redefinir senha
                         </div> 
                     </div>   
                     <div class="box">
                            <label for="emailLogin" class="title">Email</label>
                            <input placeholder="Digite seu Email" type="text" id="emailLogin"/>
                     </div>
                    <div id="containerLoginOrJoin">
                        <div class="button" onClick={handlepassword}>
                            Enviar
                        </div>  
                    </div>  
                </div>
                
            </ContainerSignIn>
             
           </Content>
       </Main>
    )
    }


export default Forgotpassword