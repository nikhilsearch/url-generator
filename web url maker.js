function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var range = e.range;

  // Check if the edit is within the relevant columns (A to D)
  if (range.getColumn() >= 1 && range.getColumn() <= 4) {
    var row = range.getRow();
    
    // Get values from Columns A, B, C, D (Domain, Category, Sub Category, Keyword)
    var domain = sheet.getRange(row, 1).getValue(); // Column A
    var category = sheet.getRange(row, 2).getValue(); // Column B
    var subCategory = sheet.getRange(row, 3).getValue(); // Column C
    var keyword = sheet.getRange(row, 4).getValue(); // Column D

    // Check if all fields are filled out before creating the URL
    if (domain && category && keyword) {
      // Construct the URL
      var url = domain + '/' + encodeURIComponent(category);

      if (subCategory) {
        url += '/' + encodeURIComponent(subCategory);
      }

      url += '/' + encodeURIComponent(keyword.replace(/\s+/g, '-').toLowerCase());

      // Set the result in Column E
      sheet.getRange(row, 5).setValue(url);
    }
  }
}
