# Next.js 란?

React의 SSR(Server Side Rendering)을 쉽게 구현할 수 있게 도와주는 간단한 **프레임워크**이다. (*리액트는 라이브러리*)

### React와 Next.js
리액트로 개발할 때 SPA(Single Page Application)을 이용하여 CSR(Client Side Rendering)을 하기 때문에 좋은 점도 있지만, 단점도 존재한다. 바로 검색엔진 최적화(SEO) 부분이다.

CSR을 하면 첫 페이지에서 빈 html을 불러와서 JS파일을 해석하여 컴포넌트를 붙이기 때문에 포털 검색에 노출될 일이 없다. 하지만 Next.js에서는 Pre-Rendering을 통해서 페이지를 미리 렌더링 하여 완성된 html을 가져오기 때문에 사용자와 검색 엔진 크롤러에게 바로 렌더링된 페이지를 제공할 수 있다.

### 결론

리액트에서 SSR을 구현하기에는 매우 복잡하므로 Next.js를 통해 이를 해결한다.

<br>

## SSR (Server Side Rendering)

- 클라이언트 대신 서버에서 페이지를 준비하는 원리

- 원래 리액트는 Client Side Rendering을 통해 서버에 영향을 미치지 않고, 클라이언트 요청을 응답한 html도 비어있다.
    - 이 방식은 서버에서 데이터를 가져올 때 지연 시간 발생으로 UX 측면에서 좋지 않다.
    - 검색 엔진에 검색 시 웹 크롤링이 동작할 때 내용을 제대로 가져와 읽을 수 없기에 검색엔진 최적화에 문제가 된다.

- Next.js에서는 Server Side Rendering을 이용하므로 사용자와 검색 엔진 크롤러에게 바로 렌더링된 페이지를 전달할 수 있어서 검색엔진 최적화에 좋은 영향을 준다.

<br>

### 설치 방법
```
npx  create-next-app@latest
yarn create next-app
```

```
npx  create-next-app@latest --typescript
yarn create next-app --typescript
```

<br>

## 기본구조

### pages
- 해당 디렉토리에 페이지들을 생성한다.
- index.tsx가 "/" 페이지
- _app.tsx는 공통되는 레이아웃을 작성한다. 모든 페이지에 공통으로 들어가는 컴포넌트를 넣어준다.

### public
- 이미지 같은 정적(static) 에셋들을 보관한다.

### styles
- 스타일(.css) 저장 폴더

### next.config.js
- Next.js는 웹팩을 기본 번들러로 사용한다. 웹팩에 관한 설정들을 해당 파일에서 수정한다.