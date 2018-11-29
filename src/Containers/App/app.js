import React, { Component } from "react";
import "antd/dist/antd.css";
import styles from '../../styles/app.css'
import { Layout, Menu } from "antd";
import { connect } from "react-redux";
import { getRecord } from "../../actions/appActions";
import TableComponent from "../../components/tableComponent/index";

class App extends Component {
  componentDidMount() {
    this.props.getRecord();
  }

  render() {
    const { Header, Footer, Content } = Layout;
    const columns = [
      {
        Header: "Name",
        columns: [
          {
            Header: "Title",
            id: "title",
            accessor: d => d.name.title
          },
          {
            Header: "First Name",
            id: "firstName",
            accessor: d => d.name.first
          },
          {
            Header: "Last Name",
            id: "lastName",
            accessor: d => d.name.last
          }
        ]
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Gender",
            id: "gender",
            accessor: d => d.gender
          },
          {
            Header: "City",
            id: "city",
            accessor: d => d.location.city
          },
          {
            Header: "State",
            id: "state",
            accessor: d => d.location.city
          },
          {
            Header: "Picture",
            id: "thumbnail",
            accessor: d => d.picture.thumbnail,
            Cell: row => {
              return (
                <img
                  src={row.value}
                  className="thumbnail-image"
                  alt="thumbnail"
                />
              );
            }
          }
        ]
      }
    ];

    return (
      <div className="App">
        <Layout>
          <Header className={styles.headerContent}>
            <div className="logo" />
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Services</Menu.Item>
              <Menu.Item key="3">Contact Us</Menu.Item>
            </Menu>
          </Header>
          <Content>
            {this.props.recordList.length > 0 ? (
              <TableComponent data={this.props.recordList} columns={columns} />
            ) : null}
          </Content>
          <Footer>
            <p class={styles.textCenter}>Copyright &copy; 2018</p>
          </Footer>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recordList: state.AppReducer.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRecord: () => dispatch(getRecord())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
