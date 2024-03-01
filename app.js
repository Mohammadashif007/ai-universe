// const loadCourseData = () => {
//     fetch('https://openapi.programming-hero.com/api/ai/tools')
//     .then( res => res.json())
//     .then(data=> console.log(data.data.tools))
// }
// loadCourseData()

const loadCourseData = async () => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
    );
    const data = await res.json();
    displayCourseData(data.data.tools);
};

const displayCourseData = (courses) => {
    console.log(courses);
    const courseContainer = document.getElementById("course-container");
    courses.forEach(course => {
        console.log(course);
        const div = document.createElement('div');
        // div.classList.add('card card-compact w-96 bg-base-100 shadow-xl');
        div.classList = ("card card-compact bg-base-100 shadow-xl")
        div.innerHTML = 
        `
        <figure><img src="${course.image}" alt="Corse Image" /></figure>
        <div class="card-body">
          <h2 class="card-title">${course.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Select</button>
          </div>
        </div>
        `
        courseContainer.appendChild(div);
    })
};

loadCourseData();
