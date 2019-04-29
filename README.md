## Planning

Node.js를 활용한 로그인, 웹 소켓을 활용한 채팅 기능을 구현한다.

구현할 기능은 아래와 같다.

- 유저 가입 및 로그인
- 유저 목록 화면
- 채팅 메시지 목록 화면
- 채팅 메시지 전송
- 접속 중인 유저 표시 기능

---

### Tech stack

**Front-end**

- HTML5
- CSS (Sass)
- JavaScript(Vanila)

**Back-end**

- Node.js (Server) - [Socket.io](http://Socket.io)

HTML5의 웹소켓은 오래된 브라우저는 지원하지 않는 경우가 있다.

브라우저 호환성을 고려하여 Node.js의 Cross-platform WebSocket API인 Socket.io를 사용한다.

---

### 일정

총 3주(0429 ~ 0520)

- 설계 및 기능 구현 2주(0429 ~ 0513)
  - 1차 작업 CSS 사용
  - 2차 작업 시 CSS → Sass로 수정
- 리팩토링 및 디버깅 (0514 ~ 0520)

---

### 코드 품질에 대한 목표

- 재사용성 높은 코드 작성하기
- 유지보수 쉬운 코드 작성하기(기능 수정 및 기능 추가에 영향 적도록)
