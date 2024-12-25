const CustomUI = {
  titleMenu: "Update Attandance",
  updateNamesButton: "Update Employee Names",
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu(CustomUI.titleMenu)
    .addItem(CustomUI.updateNamesButton, "showMonthInputDialog")
    .addToUi();
}

function showMonthInputDialog() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt(
    "Update Names",
    "Enter the month (e.g., Jan24, Feb24):",
    ui.ButtonSet.OK_CANCEL
  );

  if (response.getSelectedButton() === ui.Button.OK) {
    const sheetName = response.getResponseText();
    const monthNames = [
      "Jan24",
      "Feb24",
      "Mar24",
      "Apr24",
      "Mei24",
      "Juni24",
      "Juli24",
      "Agus24",
      "Sep24",
      "Okt24",
      "Nov24",
      "Des24",
    ];

    if (monthNames.includes(sheetName)) {
      updateNamesForMonth(sheetName);
      ui.alert(`Names updated for ${sheetName}.`);
    } else {
      ui.alert(
        "Invalid month name entered. Please try again with a valid month format, e.g., Jan24."
      );
    }
  }
}
