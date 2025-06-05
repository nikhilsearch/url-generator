# Table of Contents

1. [Project Overview](#project-overview)
2. [Why Use This Script?](#why-use-this-script)
   - [Features](#features)
3. [How Does It Work?](#how-does-it-work)
   - [Columns Involved](#columns-involved)
   - [URL Construction](#url-construction)
   - [Resulting URL](#resulting-url)
   - [Example](#example)
4. [How to Use the Script](#how-to-use-the-script)
   - [Prerequisites](#prerequisites)
5. [Customization](#customization)


# 1. URL Generation Script for Google Sheets
This script automatically generates URLs in Google Sheets based on the data entered into specific columns. It's useful for creating structured, SEO-friendly URLs from domain names, categories, sub-categories, and keywords in your spreadsheet.

# 2. Why Use This Script?
Manually constructing URLs for SEO purposes can be time-consuming and prone to errors. This script automates the process, saving time and ensuring consistency by converting keywords into URL-friendly formats (i.e., replacing spaces with hyphens and encoding special characters).

## 3. Features:
* Automatically builds URLs using values entered in specific columns.
* Encodes categories, sub-categories and keywords for valid URL formatting.
* Transforms spaces in keywords, categories and sub-categories into hyphens, making them SEO-friendly.
* Removes any trailing slashes from the domain to avoid duplicate separators.
* Supports an optional sub-category field for more detailed URL structuring.
* Clears the URL cell if any required field is missing.
* Works when pasting data across multiple rows at once.

## 3.1. How Does It Work? 
* Column A: Domain
* Column B: Category
* Column C: Sub Category (optional)
* Column D: Keyword

## 3.2. URL Construction:
* When a user enters values in Columns A, B, and D (and optionally C), the script constructs a URL using this pattern:


### Rendered Output:


`# URL Structure Example`
`domain/category/sub-category/keyword`

* The keyword is formatted to replace spaces with hyphens and is encoded to ensure that special characters are URL-safe.

### 3.3. Resulting URL:

* The script places the generated URL in Column E.

| Domain       | Category  | Sub Category | Keyword           | URL                                          |
|--------------|-----------|--------------|-------------------|----------------------------------------------|
| example.com  | clothing  | mens         | cotton t-shirts   | example.com/clothing/mens/cotton-t-shirts    |
| example.org  | books     | fiction      | mystery novels    | example.org/books/fiction/mystery-novels     |
| mysite.net   | gadgets   | electronics  | bluetooth speaker | mysite.net/gadgets/electronics/bluetooth-speaker |

## 4. How to Use the Script

* Open your Google Sheet.
* Go to Extensions > Apps Script.
* Delete any existing code and copy-paste the code from the script file.
* Save the script and close the Apps Script editor.
* Start entering your data in Columns A to D. The generated URL will automatically appear in Column E.

## 4.1. Prerequisites:
* A. Google account.
* B. Basic knowledge of Google Sheets and Apps Script.

## 5. Customization

You can customize the script to generate URLs in a different format, or add more columns to accommodate different types of data. For instance, you can extend the URL structure or modify how keywords are formatted.











