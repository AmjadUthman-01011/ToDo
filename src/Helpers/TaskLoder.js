import yaml from "js-yaml";

export default async function loadTasks() {
  try {
    const response = await fetch("/taskList.yaml");
    const text = await response.text();
    const data = yaml.load(text);

    return data.tasks;
  } catch (error) {
    console.error("Error loading tasks:", error);
    return [];
  }
}
