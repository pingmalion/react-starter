// @flow
import React, { Component, type Node } from 'react';

type Props = {
  children: Node,
};

type State = {
  isError: boolean,
};

export default class DefaultErrorBoundary extends Component<Props, State> {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <div>Error</div> : children;
  }
}
