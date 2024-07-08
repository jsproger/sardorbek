import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="Product" source="product" />
      </SimpleForm>
    </Edit>
  );
};
