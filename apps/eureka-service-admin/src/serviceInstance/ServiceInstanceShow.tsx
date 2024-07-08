import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ServiceInstanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="instanceId" source="instanceId" />
        <TextField label="host" source="host" />
        <TextField label="port" source="port" />
        <TextField label="status" source="status" />
        <TextField label="serviceName" source="serviceName" />
      </SimpleShowLayout>
    </Show>
  );
};
