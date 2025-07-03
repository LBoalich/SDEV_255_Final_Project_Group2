let courses = []; 

function addCourse(id, name, instructor) {
  if (!id || !name || !instructor) {
    console.warn("Error: All course details (id, name, instructor) are required.");
    return;
  }
  if (courses.some(course => course.id === id)) {
    console.warn(`Error: Course with ID '${id}' already exists.`);
    return;
  }
  const newCourse = { id, name, instructor };
  courses.push(newCourse);
  console.log(`Course '${name}' added successfully.`);
}

function viewCourses(id) {
  if (id) {
    const course = courses.find(c => c.id === id);
    if (course) {
      console.log("Course details:", course);
      return course;
    } else {
      console.log(`Course with ID '${id}' not found.`);
      return null;
    }
  } else {
    if (courses.length === 0) {
      console.log("No courses available.");
    } else {
      console.log("All courses:", courses);
    }
    return courses;
  }
}

function editCourse(id, updates) {
  const courseIndex = courses.findIndex(c => c.id === id);
  if (courseIndex !== -1) {
    courses[courseIndex] = { ...courses[courseIndex], ...updates };
    console.log(`Course with ID '${id}' updated successfully.`);
  } else {
    console.warn(`Error: Course with ID '${id}' not found for editing.`);
  }
}

function deleteCourse(id) {
  const initialLength = courses.length;
  courses = courses.filter(course => course.id !== id);
  if (courses.length < initialLength) {
    console.log(`Course with ID '${id}' deleted successfully.`);
  } else {
    console.warn(`Error: Course with ID '${id}' not found for deletion.`);
  }
}