import React,{useContext,useState} from 'react';
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




let Login=()=>{

    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);
        const singInGoogle = () =>{
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        }

    const {signIn,signUp} = useContext(UsuarioContext);

    let email = useState('');
    let password = useState('');
    
    //const [email,setEmail] = useState(null);
    //const [password,setPassword] = useState(null);

    const handleLogin = async () =>{
        try {
            email = document.querySelector("#emailLogin").value;
            password = document.querySelector("#senhaLogin").value
            await signIn(email, password)
        }catch(err){
          console.log(err)
        }
      }
    
      const handleCadastrar = async () =>{
        try {
            email = document.querySelector("#emailLogin").value;
            password = document.querySelector("#senhaLogin").value
            await signUp(email, password)
        }catch(err){
          console.log(err)
        }
      }


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
                            Colaborador
                         </div> 
                     </div>   
                     <div class="box">
                            <label for="emailLogin" class="title">Email</label>
                            <input placeholder="Digite seu Email" type="text" id="emailLogin"/>
                     </div>
                     <div class="box">
                            <label for="senhaLogin" class="title">Senha</label>
                            <input placeholder="Digite sua Senha" type="password" id="senhaLogin"/>
                     </div>

                    <div class="forgotCredentials">Esqueci minha senha </div>
                    <div id="containerLoginOrJoin">
                        <div class="button invert" onClick={handleCadastrar}>
                            Cadastre-se
                        </div> 
                        <div class="button" onClick={handleLogin}>
                            Entrar
                        </div>  
                    </div>  
                    <div class id="containerLoginGoogle">
                        <div class="button invert" onClick={singInGoogle}>
                            Login com Google
                        </div>
                    </div>


                </div>
                
            </ContainerSignIn>
             
           </Content>

           <Footer>

            <div id="about" >
                <p>Contato:</p>
                <p>camposezek@gmail.com</p>
            </div>

            <div id="Social">
                <img src="/images/linkedin.png" width="50px" alt=""/>
                <img src="/images/facebook.png" width="50px" alt=""/>
                <img src="/images/instagram.png" width="50px" alt=""/>
            </div>
           </Footer>
       </Main>
    )
} 

export default Login