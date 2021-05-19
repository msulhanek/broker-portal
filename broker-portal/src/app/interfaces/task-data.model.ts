import {MapFields} from "./map-fields.model";
import {NumberFields} from "./number-fields.model";
import {TextFields} from "./text-fields.model";
import {FileField} from "./file-field.model";
import {SafeUrl} from "@angular/platform-browser";

export interface TaskData {
  localisedEnumerationMapFields?: MapFields[];
  localisedNumberFields?: NumberFields[];
  localisedTextFields?: TextFields[];
  localisedFields?: FileField[];
  image?: SafeUrl;
  title?: string;
  stringId?: string;
  taskStringId?: string;
}
