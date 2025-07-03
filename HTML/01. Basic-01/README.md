# HTML(Hyper Text Markup Language)

하이퍼 텍스트 마크업 언어는 **웹 페이지 표시를 위해** 개발된 지배적인 마크업이다. - 위키 피디아

HTML은 문서의 특정 텍스트 영역이 문단인지 목록인지 표의 일부인지 구분할 수 있도록 의미를 부여하고, 헤더인지 콘텐츠 칼럼인지, 내비게이션 메뉴인지 알 수 있도록 논리적인 영역으로 구조화 하고, 이미지와 비디오 같은 **콘텐츠를 삽입할 수 있게 해주는 요소들로 구성된 지극히 간단한 언어**이다. - MDN

- 웹을 이루는 가장 기초적인 구성 요소
- 웹 페이지를 만들기 위한 표준 마크업 언어

<br>

## HTML 구성요소

![Image](https://github.com/user-attachments/assets/5f95c112-c538-4669-8ed9-acdf867e880c)

**태그(Tag)**

- 웹 문서를 구성하는 명령어
- 요소의 일부로 시작 태그와 종료 태그로 구성

**요소(Element)**

- 요소(Element)는 시작태그와 종료태그, 그 사이 내용으로 구성


![Image](https://github.com/user-attachments/assets/b0dade54-c8f5-49c2-b03c-446beec02a4f)

**속성(Attribute)**

- 태그를 보조하는 명령어로 태그 안쪽에 있다.
- 속성은 태그의 문법 명령어가 다루지 못하는 명령을 보조한다.
- width, height, alt, style, href 등

<br>

## 시멘틱 요소란?

Sementic은 의미론이라는 뜻으로, Sementic Element는 **의미가 있는 요소**를 말하며 개발자와 브라우저 모두에게 의미를 명확하게 설명한다.

### HTML에서 사용하는 시맨틱 요소들

![Image](https://github.com/user-attachments/assets/f45c0cb4-352c-4af6-8db7-e3c32a492631)

![Image](https://github.com/user-attachments/assets/dc4a8c90-7835-4226-94fa-f396977e42e2)

<br>

## HTML 문서 기본 구조

![Image](https://github.com/user-attachments/assets/8b56ecd4-2c29-4e3e-ad29-67e81a29491b)

<br>

## HTML 기본 태그와 역할

**Heading**

- heading 태그는 \<h1> ~ \<h6> 이며 주로 웹 페이지의 제목으로 사용된다.

**Paragraphs**

- 단락 태그(\<p>)는 문단을 정의할 때 사용한다.

**Preformatted Text**

- \<pre> 태그는 미리 정의된 형식의 텍스트를 정의할 때 사용된다.

**List**

- 목록 태그는 HTML 문서에서 목록을 나타내는 태그이며 크게 3가지로 나뉜다. 순서가 있는 목록(Ordered List), 순서가 없는 목록 (Unordered List), 설명 목록 (Description List)로 나눈다.

**Break**

- \<br> 태그를 이용해 줄바꿈(개행)을 구현한다.

**Horizontal Rule**

- \<hr> 태그를 이용하여 수평선을 구현한다.

**텍스트 서식**

- \<strong>, \<b> : 글씨 굵게, 글씨 강조
- \<em>, \<i> : 글씨 기울임
- \<small> : 작은 텍스트 정의
- \<mark> : 형광펜으로 하이라이트 표시
- \<sub>, \<sup> : 아랫첨자, 윗첨자 표시

**인용**

- \<blockquote> : 들여쓰기로 표현 (블록 요소)
- \<q> : 따옴표로 표시 (인라인 요소)