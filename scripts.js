const navToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const scrollLinks = document.querySelectorAll("[data-scroll]");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("data-scroll");
    if (!targetId) return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const chatToggle = document.querySelector(".chat-toggle");
const chatPanel = document.querySelector(".chat-panel");
if (chatToggle && chatPanel) {
  chatToggle.addEventListener("click", () => {
    chatPanel.classList.toggle("active");
  });
}

const carouselTrack = document.querySelector(".testimonial-track");
const carouselItems = document.querySelectorAll(".testimonial");
const carouselControls = document.querySelectorAll("[data-carousel]");
let carouselIndex = 0;

const updateCarousel = (index) => {
  if (!carouselTrack) return;
  carouselTrack.style.transform = `translateX(-${index * 100}%)`;
};

if (carouselControls.length) {
  carouselControls.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.carousel;
      if (direction === "next") {
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
      } else {
        carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
      }
      updateCarousel(carouselIndex);
    });
  });

  setInterval(() => {
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
    updateCarousel(carouselIndex);
  }, 7000);
}

const formWrapper = document.querySelector("[data-passport-form]");
if (formWrapper) {
  const steps = Array.from(formWrapper.querySelectorAll(".step"));
  const progressBars = Array.from(formWrapper.querySelectorAll(".progress span"));
  const backBtn = formWrapper.querySelector(".back-btn");
  const nextBtn = formWrapper.querySelector(".next-btn");
  const alertBox = formWrapper.querySelector(".alert");
  const confirmation = document.querySelector("[data-confirmation]");
  let currentStep = 0;

  const FORM_ENDPOINT = formWrapper.dataset.endpoint || "";

  const showStep = (index) => {
    steps.forEach((step, idx) => {
      step.classList.toggle("active", idx === index);
    });
    progressBars.forEach((bar, idx) => {
      bar.classList.toggle("active", idx <= index);
    });
    backBtn.disabled = index === 0;
    nextBtn.textContent = index === steps.length - 1 ? "Submit" : "Continue";
  };

  const validateStep = () => {
    const activeStep = steps[currentStep];
    const requiredFields = activeStep.querySelectorAll("[required]");
    for (const field of requiredFields) {
      if (!field.value.trim()) {
        return "Almost there — please fill everything in this step.";
      }
    }
    if (activeStep.querySelector("input[name='age']")) {
      const ageInput = activeStep.querySelector("input[name='age']");
      if (Number(ageInput.value) < 18) {
        return "Thanks for sharing — you need to be 18+ to join Lumina.";
      }
    }
    return "";
  };

  const submitForm = async () => {
    const formData = new FormData(formWrapper);
    const payload = Object.fromEntries(formData.entries());

    if (FORM_ENDPOINT) {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    formWrapper.reset();
    formWrapper.style.display = "none";
    confirmation.style.display = "block";
  };

  showStep(currentStep);

  backBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep -= 1;
      alertBox.style.display = "none";
      showStep(currentStep);
    }
  });

  nextBtn.addEventListener("click", async () => {
    const message = validateStep();
    if (message) {
      alertBox.textContent = message;
      alertBox.style.display = "block";
      return;
    }
    alertBox.style.display = "none";
    if (currentStep < steps.length - 1) {
      currentStep += 1;
      showStep(currentStep);
    } else {
      await submitForm();
    }
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const eventCards = document.querySelectorAll("[data-event]");
if (filterButtons.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      eventCards.forEach((card) => {
        if (filter === "all" || card.dataset.event === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}
