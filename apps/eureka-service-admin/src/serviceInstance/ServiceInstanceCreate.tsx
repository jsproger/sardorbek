import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServiceInstanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="instanceId" source="instanceId" />
        <TextInput label="host" source="host" />
        <NumberInput step={1} label="port" source="port" />
        <TextInput label="status" source="status" />
        <TextInput label="serviceName" source="serviceName" />
      </SimpleForm>
    </Create>
  );
};
