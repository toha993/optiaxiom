import { type Header } from "@tanstack/react-table";
import { forwardRef } from "react";

import { Box, type BoxProps } from "../box";
import { Icon } from "../icon";
import { IconSort } from "../icons/IconSort";
import { IconSortDown } from "../icons/IconSortDown";
import { IconSortUp } from "../icons/IconSortUp";
import { TableHeaderCell } from "../table-header-cell";
import * as styles from "./DataTableHeaderCell.css";

type DataTableHeaderCellProps = BoxProps<
  "th",
  {
    header: Header<unknown, unknown>;
  }
>;

export const DataTableHeaderCell = forwardRef<
  HTMLTableCellElement,
  DataTableHeaderCellProps
>(({ children, header, ...props }) => {
  return (
    <TableHeaderCell
      aria-sort={
        header.column.columnDef.enableSorting &&
        header.column.getIsSorted() !== false
          ? header.column.getIsSorted() === "desc"
            ? "descending"
            : "ascending"
          : "none"
      }
      {...props}
    >
      {header.column.columnDef.enableSorting ? (
        <Box asChild {...styles.button()}>
          <button onClick={() => header.column.toggleSorting()}>
            {children}

            <Icon asChild h="12">
              {header.column.getIsSorted() === false ? (
                <IconSort />
              ) : header.column.getIsSorted() === "asc" ? (
                <IconSortUp />
              ) : (
                <IconSortDown />
              )}
            </Icon>
          </button>
        </Box>
      ) : (
        children
      )}
    </TableHeaderCell>
  );
});

DataTableHeaderCell.displayName = "@optiaxiom/react/DataTableHeaderCell";
