import * as React from 'react';
import { PaginationLocale, PaginationProps as RcPaginationProps } from 'rc-pagination';
export interface PaginationProps extends RcPaginationProps {
    showQuickJumper?: boolean | {
        goButton?: React.ReactNode;
    };
    size?: 'default' | 'small';
    responsive?: boolean;
    itemRender?: (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', originalElement: React.ReactElement<HTMLElement>) => React.ReactNode;
    role?: string;
    totalBoundaryShowSizeChanger?: number;
}
export declare type PaginationPosition = 'top' | 'bottom' | 'both';
export interface PaginationConfig extends PaginationProps {
    position?: PaginationPosition;
}
export { PaginationLocale };
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
