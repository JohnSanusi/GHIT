const Elect = [
  {
    id: 1,
    name: "Analogue Electronics",
    price: 120.99,
    duration: "15 weeks",
    stack: "master everything on analogue electronics ",
  },
  {
    id: 2,
    name: "Digital Electronics",
    price: 500.0,
    duration: "12 weeks",
    stack: "master everything on digital electronics ",
  },
  {
    id: 3,
    name: "Micro Controller",
    price: 1000.0,
    duration: "20 weeks",
    stack: "master everything on Micro controllers ",
  },
  {
    id: 4,
    name: "Computer Engineering",
    price: 2000.0,
    duration: "27 weeks",
    stack: "master everything on computer engineering ",
  },
  {
    id: 5,
    name: "AutoCad",
    price: 2500.99,
    duration: "13 weeks",
    stack: "master everything on autocad ",
  },
  {
    id: 6,
    name: "Corel Draw",
    price: 500.57,
    duration: "10 weeks",
    stack: "master everything on Corel Draw ",
  },
  {
    id: 7,
    name: "3ds Max",
    price: 999.99,
    duration: "12 weeks",
    stack: "master everything on 3ds Max ",
  },
  {
    id: 8,
    name: "Photoshop",
    price: 2000.0,
    duration: "17 weeks",
    stack: "master everything on Photoshop ",
  },
  {
    id: 9,
    name: "Power Automation",
    price: 1500.0,
    duration: "20 weeks",
    stack: "master everything on Power Automation ",
  },
  {
    id: 10,
    name: "House wiring",
    price: 999.99,
    duration: "22 weeks",
    stack: "master everything on House wiring ",
  },
  {
    id: 11,
    name: "CCTV",
    price: 2500.0,
    duration: "15 weeks",
    stack: "master everything on CCTV ",
  },
  {
    id: 12,
    name: "Solar Engineering",
    price: 6000.0,
    duration: "17 weeks",
    stack: "Inverters, panels, battries, charge controllers ",
  },
  {
    id: 13,
    name: "Office Applications",
    price: 800.0,
    duration: "16 weeks",
    stack: "MS word, MS excel, MS publisher ",
  },
  {
    id: 14,
    name: "Android App Dev",
    price: 6000.0,
    duration: "25 weeks",
    stack: "java, Kotlin, MIT Blocks ",
  },
  {
    id: 15,
    name: "Front-End Web Dev",
    price: 1000.0,
    duration: "12 weeks",
    stack: "Master HTML, CSS, JavaScript, React",
  },
  {
    id: 16,
    name: "C Lanuguage",
    price: 4000.0,
    duration: "20 weeks",
    stack: "C, C#, C++ ",
  },
];

let courseContainer = ""; //create an empty container for a course item

//loop through the items in the courses array and return a value for each course
Elect.forEach((course) => {
  //adds a div with the  courseName, Price, duration, stack and a button
  courseContainer += `<div
            class="flex flex-col justify-between flex-wrap gap-4 w-full md:w-[48%] h-60 hover:shadow-xl lg:w-[32%] border-gray-500 border-[1.8px] p-4 rounded-lg mb-6"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
          
            <div>
              <h1 class="text-3xl font-bold mb-1.5">
                ${course.name}
              </h1>
              <p class="text-lg font-light">
                ${course.stack}
              </p>
            </div>
            <div>
              <p class="text-sm font-extralight mb-1">
                <i class="bi bi-laptop text-sm mr-1"> ${course.duration}</i>
              </p>
              <p class="text-sm font-extralight">
                <i class="bi bi-people text-sm mr-1"> Beginner to advanced</i>
              </p>
            </div>
            <div class="flex flex-row justify-between items-center">
              <p class="font-bold text-base">$${course.price}</p>
              <button
                
                class="cursor-pointer text-black border-gray-500 border-[1.8px] rounded-md text-base font-medium w-30 h-10 p-1 flex items-center justify-center"
              >
                Register
              </button>
            </div>
          </div>`;

  document.getElementById("container").innerHTML = courseContainer; // display menu items on page
});
