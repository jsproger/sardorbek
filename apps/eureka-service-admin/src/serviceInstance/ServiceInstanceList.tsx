import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ServiceInstanceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ServiceInstances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="instanceId" source="instanceId" />
        <TextField label="host" source="host" />
        <TextField label="port" source="port" />
        <TextField label="status" source="status" />
        <TextField label="serviceName" source="serviceName" />
      </Datagrid>
    </List>
  );
};
