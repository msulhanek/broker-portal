import {PropertyTransactionType} from "./property-transaction-type.enum";

export interface SliderProperty {
  id?: string;
  image?: string;
  transactionType?: PropertyTransactionType;
  title?: string,
  cityName?: string;
  streetName?: string;
  streetNumber?: string;
  price?: string;
}
