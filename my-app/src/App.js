// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import Counter from './Counter/Counter';
import InputForm from './InputForm/InputForm';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <h1> Состояние компонента</h1>
        <Counter initualValue="10" />
        <InputForm />
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>This is modal content</h1>
            <p>lorem</p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
