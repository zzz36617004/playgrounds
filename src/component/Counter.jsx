import React, { Component } from 'react';

const Promblematic = () => {
  throw (new Error('에러 발생'));
  return (
    <div>

    </div>
  );
};

class Counter extends Component {
  constructor(props) {
    //component의 constructor를 실행시키고 stat 설정
    super(props);       
    console.log('constructor');
  }
  
  state = {
    number: 0,
    error: false
  }


  conponentDidCatch(error, info) {
    //component error 검출 
    //자신의 render 과정에서의 오류는 잡을 수 없으나 자식의 오류는 잡는다!
    this.setState({
      error: true
    });
  }

  componentDidMount() {
      //컴포넌트가 화면에 나타난게 됐을때 호출
      //DOM을 사용하는 외부 라이브러리 연동(D3 등)
      //컴포넌트 데이터 요청 위해 ajax 요청, DOM속성 읽거나 직접 변경하는 작업 진행
      console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //DOM update 일어나기 직전에 발생
    //해당 리턴값은 componentDidUpdate의 3번째 파라미터로 받아옴
    console.log('SnapshotBeforeUpdate');
    const snapshot = "snap"
    return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //render호출 이후 발생 this.props와 this.state가 바뀌어 있으며 파라미터로 이전값 조회가능
    console.log('componentDidUpdate');
    console.log('previous State : ' + prevState.number);
    console.log('this State : ' + this.state.number);
    console.log('snapshot : ' + snapshot);
  }

  componentWillUnmount() {
    //컴포넌트가 더이상 필요없을때 실행
    //이벤트제거, cleartimeout, 외부라이브러리 dispose
    console.log('componentWillUnmount');
  }

  handleIncrease= () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease= () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  }

  render() {
    if (this.state.error) return ( <h1> 에러발생! </h1> );

    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        { this.state.number === 4 && <Promblematic /> }
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}
export default Counter;