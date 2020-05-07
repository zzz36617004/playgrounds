# React  
- 프론트앤드 라이브러리
  - 컴포넌트 라는 개념에 집중되어있음
  - Virtual Dom을 이용해서 비교한후 필요한 곳만 변화
  - 생태계가 다양하다 라우터 (React-router, Next.js, After.js)
  - 상태 관리 라이브러리 (Redux, MobX, freactal)

- JSX 작성 유의사항
  - 태그 꼭 닫혀야함
  - 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져 있어야함 -> div등으로 또 감싸는데 문제가 있을시 <Fragmenet> 이용해서 감싸기
  - js 변수 사용시 {변수명}으로 사용
  - 분기문 필요시 if문 사용 즉시실행 함수 혹은 삼항 연산자 사용 -> 이때 변수를 사용하는 경우에는 {} 쓰지 않고 사용

- prop, state 
  - prop 부모 컴퍼넌트가 자식 컴포넌트에게 주는 값
  - state 컴포넌트 내부에서 선언하며 내부 수정 가능
    - 동적인 데이터 다룰 때 사용

- 이벤트 함수 작성시 유의사항
  - 이벤트 이름은 camelCase
  - 이벤트에 전달해주는 값은 함수여야함 onClick={this.handleIncrease()} 같은 식으로 쓸 경우 렌더링 때마다 함수 호출

- lifecycle API
  - componentDidMount 컴포넌트가 화면에 나타난게 됐을때 호출
  - getSnapshotBeforeUpdate DOM update 일어나기 직전에 발생
  - componentDidUpdate render호출 이후 발생
  - componentWillUnmount 컴포넌트가 더이상 필요없을때 실행


- 참조
https://velopert.com/3613

# MongoDB
- NoSQL, Document -> RDBMS의 record라 생각
- Collection table이라 생각
- create db.createCollection(name,[options])
- insert db.COLLECTION_NAME.insert(document)
- select db.COLLECTION_NAME.find(query,projection)
  - .pretty()
  - find() 안에 조건 넣어서 where절처럼 select 가능
  - query(where)
    - 조건에 사용할수 있는 연산자 https://docs.mongodb.com/v3.2/reference/ operator/query/
    - $where 연산자를 쓰면 javascript expression 사용가능
    - $elemMatch Document의 배열에서 내부 document 해당하는 값에 따라 select    
  
  - projection
    - find시 보여질 필드 정의
    - $slice document 배열 보여질 갯수 제한
    - $elemMatch이용 원하는 내부 document만 출력가능


# Mongoose
-  스키마 타입 
 https://mongoosejs.com/docs/schematypes.html


 - dist 빼기
 - server.js 뺴서 main.js -> router.js랑 같이 server 폴더로
 - public 지우고 파비콘 따로
 - 