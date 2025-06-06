function slugify(value) {
  return encodeURIComponent(String(value).trim().replace(/\s+/g, '-').toLowerCase());
}

function onEdit(e) {
  var sheet = e.range.getSheet();
  var range = e.range;

  // Check if the edit is within the relevant columns (A to D)
  if (range.getColumn() >= 1 && range.getColumn() <= 4) {
    var startRow = range.getRow();
    var numRows = range.getNumRows();

    for (var i = 0; i < numRows; i++) {
      var row = startRow + i;

      // Get values from Columns A, B, C, D (Domain, Category, Sub Category, Keyword)
      var domain = sheet.getRange(row, 1).getValue(); // Column A
      var category = sheet.getRange(row, 2).getValue(); // Column B
      var subCategory = sheet.getRange(row, 3).getValue(); // Column C
      var keyword = sheet.getRange(row, 4).getValue(); // Column D

      // Check if all fields are filled out before creating the URL
      if (domain && category && keyword) {
        // Clean and slugify components
        domain = String(domain).trim().replace(/\/+$/, '').toLowerCase();
        var categorySlug = slugify(category);
        var keywordSlug = slugify(keyword);

        // Construct the URL
        var url = domain + '/' + categorySlug;

        if (subCategory) {
          var subCategorySlug = slugify(subCategory);
          url += '/' + subCategorySlug;
        }

        url += '/' + keywordSlug;

        // Set the result in Column E
        sheet.getRange(row, 5).setValue(url);
      } else {
        // Clear the URL cell if required fields are missing
        sheet.getRange(row, 5).setValue('');
      }
    }
  }
}
