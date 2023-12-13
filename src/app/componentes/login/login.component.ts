import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  listauruarios : Usuario[] = [];

  LoginForm: FormGroup;

  MuestroBotton:string = '';

  contadorError:number = 0;

  constructor(public LoginService: LoginService){

    this.LoginForm = new FormGroup ({
     usuario: new FormControl('', [Validators.email, Validators.required]),
     clave: new FormControl('',[Validators.minLength(6), Validators.required,Validators.pattern(/^(?=.*\d.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)])
     });

     this.listauruarios = LoginService.getListaUser();

  }

  EnviarFormulario(){

    const usuario = this.LoginForm.get('usuario')?.value;
    const clave = this.LoginForm.get('clave')?.value;

    if (this.LoginForm.valid){

      for (let i = 0; i < this.listauruarios.length; i++) {
        const mail = this.listauruarios[i].email;
        const pass = this.listauruarios[i].password;
        console.log('usuarios:' + mail + ' => password: ' + pass);
        if (usuario == mail && clave == pass){
          this.MuestroBotton = 'login correcto';
          console.warn("Usuario correcto");
          //cambio de variable LogingOK proveniente del servicio
          this.LoginService.registrarUsuario(mail);
          this.LoginService.cambiarValor('lista');
         } else {
          this.contadorError++;
          console.log(this.contadorError);
          if(this.contadorError == 9){
            this.LoginService.cambiarValor('ERRORLOG');
          }
        }
      }
      
      
    }else{
      console.log(this.Controles);
      console.log(this.LoginForm);
    }
    
  }

  get Controles(){
    return this.LoginForm.controls;
  }



}
