import { MenuItem } from './menu';

export interface Order {
  user: string;
  id?: string;
  menuItems: MenuItem[];
  total: number;
}
