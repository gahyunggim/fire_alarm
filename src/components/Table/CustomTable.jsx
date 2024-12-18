import { Table } from "antd";

const CustomTable = ({ dataSource, columns }) => {
  const convertedColumns = columns.map((column) => {
    return {
      ...column,
      title: column.title,
      dataIndex: column.key,
      key: column.key,
      align: "center",
    };
  });

  return (
    <Table
      dataSource={dataSource}
      columns={convertedColumns}
      style={{ width: "100%" }}
    />
  );
};

export default CustomTable;
