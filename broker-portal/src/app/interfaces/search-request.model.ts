import {SearchEmbeded} from "./search-embeded.model";

export interface SearchRequest {
  page?: any;
  _embedded: SearchEmbeded;
}
