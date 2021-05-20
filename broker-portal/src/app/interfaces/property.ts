import {SafeUrl} from "@angular/platform-browser";

export interface IProperty {
  id?: string
  title?: string;
  address?: string;
  county?: string;
  region?: string;
  city?: string;
  transaction?: string;
  category?: string;
  subcategory?: string;
  price?: number;
  image?: SafeUrl;
}

export class Property implements IProperty {
  _id?: string
  _title?: string;
  _address?: string;
  _county?: string;
  _region?: string;
  _city?: string;
  _transaction?: string;
  _category?: string;
  _subcategory?: string;
  _price?: number;
  _image?: SafeUrl;


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get image(): SafeUrl {
    return this._image;
  }

  set image(value: SafeUrl) {
    this._image = value;
  }

  get county(): string {
    return this._county;
  }

  set county(value: string) {
    this._county = value;
  }

  get region(): string {
    return this._region;
  }

  set region(value: string) {
    this._region = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get transaction(): string {
    return this._transaction;
  }

  set transaction(value: string) {
    this._transaction = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get subcategory(): string {
    return this._subcategory;
  }

  set subcategory(value: string) {
    this._subcategory = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
