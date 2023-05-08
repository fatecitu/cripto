# 🔥 CRUD com autenticação integrado ao Firebase (v.9 SDK) utilizando Expo e React Native

Projeto em Expo/React Native que implementa um pequeno CRUD.

> ⚠️ **Projeto utilizado nas aulas da disciplina de Programação para Dispositivos Móveis da [Fatec Itu](fatecitu.edu.br)**

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=Apache&color=FB724C&labelColor=FFFFFF">
<a href="https://fatecitu.edu.br" target="_blank">
  <img alt="License" src="https://img.shields.io/static/v1?label=Powered+by&message=Fatec+Itu&color=FB724C&labelColor=FFFFFF">
  </a>
</p>
<p align="center">
  <img alt="HTML 5" src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">

  <img alt="CSS 3" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white&color=0000FF"> 

  <img alt="JS" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 

  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-F29D0C?style=for-the-badge&logo=firebase&logoColor=white"> 


</p>

# 🧠 Contexto

O propósito desse pequeno sistema é mostrar que é possível desenvolvermos uma aplicação 100% na nuvem, utilizando o Firebase e o Expo (React Native).
## 📋 Instruções

- [ ] Inicialmente clone o projeto; 
- [ ] Acesse https://firebase.google.com e crie um novo projeto Web.
- [ ] Edite o arquivo config/firebase.js e cole nele as informações de conexão apresentadas pelo Firebase.
- [ ] Acesse o Cloud Firestore e em regras, informe que apenas usuários autenticados terão direito de acesso (escrita e leitura) aos dados:
```yaml
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📵Emulador Android sem Acesso à Internet
Caso o seu Emulador Android não consiga acessar a internet,
execute o seguinte procedimento:
- [ ] Abra o Terminal no *PowerShell*
- [ ] Digite: ```C:\Users\labfatec\AppData\local\Android\Sdk\emulator\emulator.exe -list-avds``` (substitua o usuário pelo seu nome)
- [ ] Anote o nome do AVD *(Android Virtual Device)* que foi exibido
- [ ] Agora, digite o comando a seguir no *Power Shell*:
```C:\Users\labfatec\AppData\local\Android\Sdk\emulator\emulator.exe -avd Pixel_2_API_30_1  -dns-server 8.8.8.8``` (Substitua o Pixel_2_API_30_1 pela sua AVD)

Esse comando executa o emulador do Android usando a imagem do dispositivo virtual "Pixel_2_API_30_1" e define um servidor DNS para ser usado pelo emulador.

Explicando cada parte do comando:

```C:\Users\labfatec\AppData\local\Android\Sdk\emulator\emulator.exe``` é o caminho para o executável do emulador do Android.

`-avd Pixel_2_API_30_1` especifica qual imagem do dispositivo virtual (AVD) deve ser usada pelo emulador. Nesse caso, é a imagem do dispositivo virtual "Pixel_2_API_30_1".

`-dns-server 8.8.8.8` define o servidor DNS a ser usado pelo emulador. Nesse caso, o servidor DNS escolhido é o 8.8.8.8, que é fornecido pelo Google e é um dos servidores DNS mais populares e confiáveis disponíveis.

## 💬 Contato

Prof. Ms. Ricardo Leme <br>
<a href="https://www.linkedin.com/in/ricardo-leme/" target="_blank">
  <img alt="Linkedin" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
</a>
<a href="mailto:ricardo.leme@fatec.sp.gov.br" target="_blank">
  <img alt="Linkedin" src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white">
</a>

## 📝 Licença
Esse projeto está sob a licença Apache. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
---
Made with 💜, Expo, React Native and Firebase. 