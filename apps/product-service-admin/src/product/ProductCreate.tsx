import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ShopTitle } from "../shop/ShopTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="price" source="price" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
