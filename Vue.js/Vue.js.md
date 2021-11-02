# Vue.js

### Vue 는 무엇인가?

> MVVM 패턴의 뷰모델(ViewModel) 레이어에 해당하는 화면(View)단 라이브러리
>

​							ViewModel

​		 ----------	DOM Listeners --------->

View															Model

​		<----------	Data Bindings ----------

^								^									^

DOM						Vue				Plain JavaScript Objects



- View: 브라우저에서 사용자에게 비춰지는 화면 
  - 화면의 입력값, 버튼이 View에 해당
  - 화면에 나타나는 요소(HTML)를 DOM을 이용하여 JS로 조작
- 왼쪽의 화면에서 사용자가 키보드 입력, 마우스 조작 등을 통해 이벤트를 중간의 DOM Listeners로 전달
- Vue에서 전달받은 이벤트를 잡아서 JS에 있는 데이터로 바꿔주거나 JS에 지정했던 특정 로직에서 실행
- 데이터가 변화했을 경우 Data Bindings를 통해 사용자의 화면 View에 반영





### Vue 와 생성자

```javascript
function Vue() {
    this.logText = function() {
        console.log('hello');
    }
}
var vm = new Vue();
```

위와 같이 생성자 함수를 이용하여 미리 `logText`라는 속성의 함수를 정의하였다.

그러면 후에 `vm` 으로 `new Vue()`를 생성할 때마다 (생성자 함수로 어떤 객체를 찍어낼때마다) 그 객체 안에는 미리 정의한 `logText`함수가 들어가 있기 때문에 매번 함수를 정의하는 것이 아니라 미리 정의한 함수를 재사용할 수 있다.

==> new Vue()를 사용하는 이유: 생성자 함수로 Vue에서 어떤 API 와 속성들을 정의해놓고 재사용하게 되는 패턴을 가지고 있다. 

```javascript
// 인스턴스에서 사용할 수 있는 속성과 API는 다음과 같다
new Vue({
    el: 인스턴스가 그려지는 화면의 시작점 (특정 HTML 태그),
    template: 화면에 표시할 요소 (HTML, CSS 등),
    data: 뷰의 반응성 (Reactivity) 가 반영된 데이터 속성,
    methods: 화면의 동작과 이벤트 로직을 제어하는 메서드,
    created: 뷰의 라이프 사이클과 관련된 속성,
    watch: data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성,
});
```



### 뷰 컴포넌트 (Components)

> 컴포넌트는 화면의 영역을 구분하여 개발할 수 있는 뷰의 기능입니다. 컴포넌트 기반으로 화면을 개발하게 되면 코드의 **재사용성**이 올라가고 빠르게 화면을 제작할 수 있습니다.



#### 컴포넌트 통신 방식 (Component Communication)

> 뷰 컴포넌트는 각각 고유한 데이터 유효 범위를 갖습니다. 따라서 컴포넌트 간에 데이터를 주고 받기 위해선 아래와 같은 규칙을 따라야 합니다.



​				-------------- 이벤트 발생 --------------->

하위 컴포넌트												상위 컴포넌트

​				<------------- props 전달 ----------------



- 우측에서 좌측으로는 데이터를 내려줌, **프롭스 속성**
- 좌측에서 우측으로는 이벤트를 올려줌, **이벤트 발생**



#### 컴포넌트 구조

^															 Root																|

|				AppHeader					AppContent					AppFooter		 		|	Props(Data)

|		NavigationBar						LoginForm						CompanyInfo		 |

Event																															  \/

<기존의 구조>

1. AppHeader의 컴포넌트에서 특정 사용자가 로그인을 하여 LoginForm에 데이터를 전달하였다
2. LoginForm에서 AppFooter로 데이터를 전송하였다
3. AppFooter에서 NavigationBar로 데이터를 전송하였다

==> 특정 컴포넌트의 변화에 따라서 나머지 컴포넌트가 유기적으로 데이터를 주고 받았을 때, 데이터의 방향을 예측하기 어렵다

==> N방향 통신의 문제점: 위와 같이 데이터의 관계가 생성되면 특정 기능, 상태, 데이터가 바뀌었을 때 그로 인한 버그를 추적하기 어렵다. (MVC패턴의 문제점)

====> Vue에서의 컴포넌트 통신 방식이라는 규칙이 생겼을 때(위에서 아래로만 데이터가 이동하고 아래에서 위로는 이벤트가 올라간다) 데이터의 흐름을 추적할 수 있다는 이점이 있다



#### 같은 컴포넌트 레벨 간의 통신 방법

​						|				ROOT							 ^

props(데이터)|   												    | Event (보내려는 Data)	

​						\/  													|

​		AppHeader	<------Data (X)--------	AppContent

AppContent에서 AppHeader로 데이터를 전달할 수 있는지

AppContent에서 AppHeader로 데이터를 바로 전송하면 좋을텐데 그 길이 막혀있다

==> 같은 레벨일 경우 바로 전달할 수 없어서 데이터를 먼저 Root 로 보낸 후 Root에서 다시 AppHeader로 데이터를 전달해야한다.





### 뷰 라우터

> 뷰 라우터는 뷰 라이브러리를 이용하여 싱글 페이지 애플리케이션을 구현할 때 사용하는 라이브러리입니다.

페이지를 이동할 때 사용하는 뷰 공식 라이브러리 이자 기능이다. 페이지 이동과 관련된 기능을 VueRouter로 구현할 수 있다.

인스턴스에 생성한 라우터 인스턴스를 등록하여 뷰 라우터가 성공적으로 등록되었다면 Vue 개발자 도구에서 `data`에 `$route`가 잡힌 것을 확인할 수 있다.



#### 뷰 라우터 등록

> 뷰 라우터를 설치하고 나면 아래 코드와 같이 라우터 인스턴스를 하나 생성하고 뷰 인스턴스에 등록합니다.

```javascript
// 라우터 인스턴스 생성
var router = new VueRouter({
	// 라우터 옵션
})

// 인스턴스에 라우터 인스턴스 등록
new Vue({
	router: router
})
```



#### 뷰 라우터 옵션

> 위와 같이 라우터를 등록하고 나면 그 다음에 할 일은 라우터에 옵션을 정의하는 일입니다. 대부분의 SPA 앱에서는 아래와 같이 2개 옵션을 필수로 지정합니다.

- routes: 라우팅 할 URL 과 컴포넌트 값 지정
- mode: URL 의 해쉬 값 제거 속성

그럼 위 옵션으로 라우터를 정의해보겠습니다.

```javascript
new VueRouter({
    // mode에 히스토리 속성을 사용하면 해쉬값(#)이 제거된 URL이 생성된다
    mode: 'history',
    
    // 페이지의 정보들이 들어가는 속성이다
    routes: [
        // path: 페이지의 URL, component: 해당 페이지(URL)로 이동했을 때 뿌려지는 컴포넌트를 연결
        {path: '/login', component: LoginComponent},
        {path: '/home', component: HomeComponent},
    ]
})
```

위 코드는 라우팅을 할 때 URL 에 `#`값을 제거하고, URL 값이 `/login`과 `/home` 일 때 각각 로그인 컴포넌트와 홈 컴포넌트를 뿌려줍니다.

-  해당 페이지마다 뿌려질 컴포넌트는 무조건 하나이다.



### router-view

> 브라우저의 주소 창에서 URL이 변경되면, 앞에서 정의한 routes 속성에 따라 해당 컴포넌트가 화면에 뿌려집니다. 이 때 뿌려지는 지점이 템플릿의 `<router-view>`입니다.

```html
<div id="app">
    <router-view></router-view>	<!-- LoginComponent 또는 HomeComponent -->
</div>
```

앞에서 정의한 라우팅 옵션 기준으로 `/login`은 로그인 컴포넌트를 `/home` 은 홈 컴포넌트를 화면에 표시합니다.



#### router-link

> 일반적으로 웹 페이지에서 페이지 이동을 할 때는 사용자가 url을 다 쳐서 이동하지 않습니다. 이 때 화면에서 특정 링크를 클릭해서 페이지를 이동할 수 있게 해줘야 하는데 그게 바로 `<router-link>`입니다.

```html
<router-link to="이동할 URL"></router-link>
```

실제 코드 예시는 다음과 같습니다.

```html
<div>
    <router-link to="/login"></router-link>
</div>
```

위 코드를 실행하면 화면에서는 `<a>`태그로 변형되서 나옵니다. 따라서 `<a>`태그를 클릭하면 `/login` URL로 이동합니다.





### 액시오스 (Axios)

> 뷰에서 권고하는 HTTP 통신 라이브러리는 액시오스(Axios) 입니다. Promise 기반의 HTTP 통신 라이브러리이며 상대적으로 다른 HTTP 통신 라이브러리들에 비해 문서화가 잘되어 있고 API가 다양합니다

- Ajax: 비동기적인 웹 애플리케이션의 제작을 위한 웹 개발 기법입니다.
  - 자바스크립트의 비동기 처리 패턴
    1. callback
    2. promise
    3. promise + generator
    4. async & await





### 웹 서버에서의 클라이언트와 서버와의 HTTP 통신 구조



​					-------------HTTP 요청 송신 (http://domain.com/user/1)---------->

브라우저																													서버

​					<---------------------HTTP 응답 수신 ({user: 123, ...})--------------------



브라우저(Client)															서버 (Server)											DB

​							--------1. HTTP Request(요청)----->	  	 특정	 		-----2. 데이터 검색---->

​							<------4. HTTP Response(응답) ----	백엔드 로직	   <----3. 데이터 전달----



#### 개발자 도구의 Network 패널

- Headers: HTTP의 헤더를 의미, 특정 요청/응답에 대한 일반적인 정보를 담고있다.
  - General
    - Request URL: 요청한 URL 주소
    - Request Method: 요청 방식
      - GET일 경우 정보를 달라고 요청한 것이기 때문에 Response에 항상 그 정보가 담겨있다.
    - Status Code: 성공적으로 데이터를 받았는지
  - Response Headers
    - 이런식으로 응답을 줬다라고 부가적인 정보를 준다.
  - Request Headers
    - 브라우저의 정보, 포맷등의 부가적인 정보