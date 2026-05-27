document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const roadmapItems = document.querySelectorAll(".roadmap-item");

  const applyFilter = (filter) => {
    roadmapItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.stage === filter;
      item.classList.toggle("is-hidden", !shouldShow);
    });

    filterButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === filter);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyFilter(button.dataset.filter);
    });
  });

  applyFilter("all");
});
