import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  //   handleIncrement() {
  //     console.log('Клик на увеличить');
  //   }
  //   handleDecrement() {
  //     console.log('Клик на уменьшить');
  //   }

  //   handleIncrement = event => {
  //     console.log('Клик на увеличить');
  //     // const { target } = event;
  //     // setTimeout(() => {
  //     //   console.log('Клик на увеличить');
  //     //   console.log(target);
  //     // }, 1000);
  //   };
  //   handleDecrement = () => {
  //     console.log('Клик на уменьшить');
  //   };

  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 0,
  //     };
  //   }
  static defaultProps = {
    initualValue: 0,
  };
  static propTypes = {
    //
  };
  state = {
    value: this.props.initualValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" className="" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" className="" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

// const Counter = () => {
//   return (
//     <div className="Counter">
//       <span className="Counter__value">0</span>
//       <div className="controls">
//         <button type="button" className="">
//           Увеличить на 1
//         </button>
//         <button type="button" className="">
//           Уменьшить на 1
//         </button>
//       </div>
//     </div>
//   );
// };
export default Counter;
