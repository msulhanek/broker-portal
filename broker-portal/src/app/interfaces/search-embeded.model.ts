import {SearchCase} from "./search-case.model";
import {DataGroups} from "./data-groups.model";
import {MapFields} from "./map-fields.model";
import {NumberFields} from "./number-fields.model";
import {TextFields} from "./text-fields.model";

export interface SearchEmbeded {
  cases?: SearchCase[];
  tasks?: SearchCase[];
  dataGroups?: DataGroups;
  localisedEnumerationMapFields?: MapFields;
  localisedNumberFields?: NumberFields;
  localisedTexFields?: TextFields;
}
