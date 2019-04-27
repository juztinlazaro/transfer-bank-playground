import * as React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Sidebar from 'components/Sidebar/Sidebar';

interface ILayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<ILayoutProps> = props => {
  return (
    <section className="layout-section">
      <Row className="layout-body" gutter={32}>
        <Col md={24} lg={6} xl={8} className="_spacer-md">
          <Sidebar />
        </Col>

        <Col md={24} lg={18} xl={16}>
          {props.children}
        </Col>
      </Row>
    </section>
  );
};

export default Layout;
