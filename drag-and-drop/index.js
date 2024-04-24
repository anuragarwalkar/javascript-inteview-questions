const containers = document.querySelectorAll(".container");
const draggable = document.querySelectorAll(".draggable");
draggable.forEach((draggable) => {
  console.log(draggable.getBoundingClientRect());
  draggable.addEventListener("dragstart", (e) => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", (e) => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    const afterElement = getDragAfterElement(container, e.clientY);
    const [child] = document.getElementsByClassName("dragging");
    if (afterElement == null) {
      container.appendChild(child);
    } else {
      container.insertBefore(child, afterElement);
    }
  });
});

const getDragAfterElement = (container, y) => {
  const elements = [...container.querySelectorAll(".draggable:not(.dragging)")];

  return elements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};
