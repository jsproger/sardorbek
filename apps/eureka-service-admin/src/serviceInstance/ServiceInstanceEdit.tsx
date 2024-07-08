import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServiceInstanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="instanceId" source="instanceId" />
        <TextInput label="host" source="host" />
        <NumberInput step={1} label="port" source="port" />
        <TextInput label="status" source="status" />
        <TextInput label="serviceName" source="serviceName" />
      </SimpleForm>
    </Edit>
  );
};
