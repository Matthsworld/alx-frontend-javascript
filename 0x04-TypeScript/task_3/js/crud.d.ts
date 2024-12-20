// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Declare the type definitions for the CRUD functions
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;

