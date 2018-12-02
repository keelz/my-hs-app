export interface IComponentProps {
  className?: string | string[];
}

export interface IPagination {
  currentPage: number;
  itemsPerPage: number;
  pages: number;
  total: number;
}

export enum BlockOrientation {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
}
