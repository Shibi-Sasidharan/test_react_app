import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class TableComponent extends React.Component {
  render() {
    const { data, columns } = this.props;
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default TableComponent;
