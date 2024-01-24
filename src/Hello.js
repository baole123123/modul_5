import React, { Component } from 'react';

class Hello extends Component {
    componentWillUnmount() {
        alert('Bạn có muốn ẩn?');
      }
    render() {
        return (
            <h1>Suggar bady</h1>
        );
    }
}

export default Hello;