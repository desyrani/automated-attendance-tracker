// Updates the names for the specified month
function updateNamesForMonth(sheetName) {
  const attendanceTracker = SpreadsheetApp.getActiveSpreadsheet();
  const cutiBersama = SpreadsheetApp.openByUrl(
    "https://docs.google.com/spreadsheets/d/1CJ1aS7bU-Dg7bQpmW5N00qBwFbuUrCkQ-riKoSBoAMg/edit?gid=1496481935#gid=1496481935"
  ); // Replace with the actual URL
  const cutiBersamaSheet = cutiBersama.getSheetByName("Talenesia"); // Replace with actual sheet name
  const namesRange = cutiBersamaSheet.getRange("A4:A"); // Assuming names are in column A from row 4
  const names = namesRange
    .getValues()
    .flat()
    .filter((name) => name); // Flatten and filter empty cells

  const trackerSheet = attendanceTracker.getSheetByName(sheetName);
  if (trackerSheet) {
    const startRow = 15; // Starting at row 15
    const endRow = startRow + names.length - 1;

    // Clear the current list in the Name column and set new list
    trackerSheet.getRange("B" + startRow + ":B" + endRow).clearContent();
    trackerSheet
      .getRange("B" + startRow + ":B" + endRow)
      .setValues(names.map((name) => [name]));
  } else {
    Logger.log(
      `Sheet "${sheetName}" not found. Please ensure the month name is correct.`
    );
  }
}
