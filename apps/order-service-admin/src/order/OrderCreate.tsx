import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <TextInput label="User" source="user" />
        <TextInput label="Product" source="product" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
