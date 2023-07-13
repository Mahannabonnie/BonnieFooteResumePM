// Tab Menu
function openTab(event, tabName) {
  const tab_content = document.getElementsByClassName("tab_content");
  for (let i = 0; i < tab_content.length; i++) {
    tab_content[i].className = tab_content[i].className.replace(" active", "");
  }

  const tab_links = document.getElementsByClassName("tab_link");
  for (let i = 0; i < tab_links.length; i++) {
    tab_links[i].className = tab_links[i].className.replace(" active", "");
  }

  const content = document.getElementById(tabName);
  content.className += " active";

  event.currentTarget.className += " active";
}

// Project Sections
function openProjectSection(event, sectionName) {
  const project_section = document.getElementsByClassName("project_section");
  for (let i = 0; i < project_section.length; i++) {
    project_section[i].className = project_section[i].className.replace(
      " active",
      ""
    );
  }

  const project_section_link = document.getElementsByClassName(
    "project_section_link"
  );
  for (let i = 0; i < project_section_link.length; i++) {
    project_section_link[i].className = project_section_link[
      i
    ].className.replace(" active", "");
  }

  const section = document.getElementById(sectionName);
  section.className += " active";

  event.currentTarget.className += " active";
}
