import { Data } from './data';
import { Links } from './links';

export interface Item {
  href: string;
  data: Data[];
  links: Links[];
}
