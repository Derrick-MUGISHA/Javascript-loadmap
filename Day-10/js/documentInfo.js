function loadDocumentInfo() {

  document.getElementById(
    "docTitle"
  ).textContent = document.title;

  document.getElementById(
    "docURL"
  ).textContent = document.URL;

  document.getElementById(
    "formCount"
  ).textContent = document.forms.length;

  document.getElementById(
    "imageCount"
  ).textContent = document.images.length;

  document.getElementById(
    "linkCount"
  ).textContent = document.links.length;

  document.getElementById(
    "readyState"
  ).textContent =
    document.readyState;
}