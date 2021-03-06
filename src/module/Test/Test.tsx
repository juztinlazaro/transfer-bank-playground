import * as React from 'react';
import { connect } from 'react-redux';
import { getHomeDataEpics } from '../../store/modules/home/actions';

interface IHomeProps {
  getHomeDataEpics: any;
}

class Test extends React.Component<IHomeProps, any> {
  public onGetBlog = () => {
    this.props.getHomeDataEpics();
  };
  public render() {
    return (
      <div>
        <h1>Test component</h1>
        <button onClick={this.onGetBlog}>get blog</button>
      </div>
    );
  }
}

export default connect(
  null,
  { getHomeDataEpics },
)(Test);
