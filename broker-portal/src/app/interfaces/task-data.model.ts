import {MapFields} from "./map-fields.model";
import {NumberFields} from "./number-fields.model";
import {TextFields} from "./text-fields.model";

export interface TaskData {
  localisedEnumerationMapFields?: MapFields[];
  localisedNumberFields?: NumberFields[];
  localisedTextFields?: TextFields[];
}
