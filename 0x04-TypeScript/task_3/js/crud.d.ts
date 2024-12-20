/// <reference path="./interface.ts" />

declare function insertRow(row: RowElement): RowID;

declare function deleteRow(rowId: RowID): void;

declare function updateRow(rowId: RowID, row: RowElement): RowID;
