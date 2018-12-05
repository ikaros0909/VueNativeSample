# myapp

> A native application built with NativeScript-Vue

## 사전설치

``` bash

#Chocolatey 설치
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

#Google Chrome 설치
choco install googlechrome -y

#Node.js LTS 설치
choco install nodejs-lts -y

#JDK 8 설치
choco install jdk8 -y

#Android SDK 설치
choco install android-sdk -y

#Android SDK Platform 28, Android SDK Build-Tools 28.0.3 이상, Android 지원 리포지토리, Google 리포지토리 및 기타 필요한 SDK를 모두 설치
"%ANDROID_HOME%\tools\bin\sdkmanager" "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"

#Android Studio를 설치하고 AVD에 안드로이드 가상 장치 설치
choco install androidstudio -y

#NativeScript CLI 설치
npm i -g nativescript

#올바르게 구성되었는지 확인(아무런 문제가 발견되지 않아야 함.)
tns doctor

```

## 프로젝트 생성

``` bash

$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>

# Install dependencies
npm install --save @vue/devtools@beta nativescript-toast nativescript-socket.io nativescript-vue-devtools
npm install -g @vue/devtools@beta

#main.js 수정
Vue.use(VueDevtools, { host: '192.168.1.42' })

# Build for production : android or ios
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```

## NativeScript 플러그인 사용

``` bash

#NativeScript CLI를 사용하여 플러그인 설치
npm install --save nativescript-gradient

#앱에 플러그인 등록
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)

```

## Vue 플러그인 사용

``` bash

#플러그인 설치
npm install --save vuex

#플러그인 가져 오기
import Vuex from 'vuex'
Vue.use(Vuex)

```