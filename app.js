// const loadCourseData = () => {
//     fetch('https://openapi.programming-hero.com/api/ai/tools')
//     .then( res => res.json())
//     .then(data=> console.log(data.data.tools))
// }
// loadCourseData()

const loadCourseData = async () => {
    handleLoadingSpinner(true);
    const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
    );
    const data = await res.json();

    displayCourseData(data.data.tools);
};

const displayCourseData = (courses) => {
    console.log(courses);
    const courseContainer = document.getElementById("course-container");
    courses.forEach((course) => {
        console.log(course);

        let count = 0;

        let featuresHTML = "";

        course.features.forEach((feature) => {
            count += 1;
            featuresHTML += `<p>${count}. ${feature}</p>`;
        });

        const div = document.createElement("div");
        // div.classList.add('card card-compact w-96 bg-base-100 shadow-xl');
        div.classList = "card card-compact bg-base-100 shadow-xl p-2";
        div.innerHTML = `
        <figure><img src="${course.image}" alt="Corse Image" /></figure>
        <div class="p-4 border-b-2">
          <p class="text-2xl">Feature</p>
          <p class = "my-3">${featuresHTML}</p>

        </div>
        <div class="card-body">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="card-title">${course.name}</h2>
              <p><span><i class="fa-solid fa-calendar-days"></i></span> ${course.published_in}</p>
            </div>
            <div class="w-[45px] h-[45px] rounded-full bg-red-100 flex justify-center items-center">
              <i class="fa-solid fa-arrow-right text-red-500"></i>
            </div>
          </div>
          
          <div class="card-actions">
            
          </div>
        </div>
        `;
        courseContainer.appendChild(div);
    });
    handleLoadingSpinner(false);
};

const handleShortByDate = () => {
    console.log("click");
};

const handleLoadingSpinner = (isLoading) => {
    const loading = document.getElementById("loading");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    if (isLoading) {
        loading.classList.remove("hidden");

    } else {
        loading.classList.add("hidden");
        button1.classList.remove("hidden");
        button2.classList.remove("hidden");
    }
};

loadCourseData();
