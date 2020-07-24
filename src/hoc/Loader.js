import React, { Component } from 'react';

const Loader = NestedComponent => {
  return class extends Component {
    state = {
      loader: true,
    };
    toggleLoader = (status = false) => {
      this.setState({ loader: status });
    };
    render() {
      const { loader } = this.state;
      return (
        <NestedComponent
          {...this.props}
          loader={loader}
          toggleLoader={this.toggleLoader}
        />
      );
    }
  };
};

export default Loader;
