import {SearchCase} from "./search-case.model";
import {DataGroups} from "./data-groups.model";
import {MapFields} from "./map-fields.model";
import {NumberFields} from "./number-fields.model";
import {TextFields} from "./text-fields.model";
import {FileField} from "./file-field.model";
import {FileList} from "./file-list.model";

export interface SearchEmbeded {
  cases?: SearchCase[];
  tasks?: SearchCase[];
  dataGroups?: DataGroups[];
  localisedEnumerationMapFields?: MapFields[];
  localisedNumberFields?: NumberFields[];
  localisedTextFields?: TextFields[];
  localisedFields?: FileField[];
  localisedFileListFields: FileList[];

}
