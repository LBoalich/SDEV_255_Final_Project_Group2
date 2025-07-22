const API_URL = "/courses";

async function addCourse(id, name, instructor) {
  if (!id || !name || !instructor) {
    console.warn("Error: All course details (id, name, instructor) are required.");
    return;
  }
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id, name, instructor})
    });
    if (!response.ok) throw new Error(`Failed to add course: ${response.statusText}`);
    const newCourse = await response.json();
    console.log(`Course '${newCourse.name}' added successfully.`);
    return newCourse;
  } catch (error) {
    console.error(error.message);
  }
}

async function viewCourses(id = null) {
  try {
    const url = id ? `${API_URL}/${id}` : API_URL;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch courses: ${response.statusText}`);
    const data = await response.json();
    console.log("Courses retrieved:", data);
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

async function editCourse(id, updates) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updates)
    });
    if(!response.ok) throw new Error(`Failed to update course: ${response.statusText}`);
    const updatedCourse = await response.json();
    console.log(`Course with ID '${id}' updated successfully.`, updatedCourse);
    return updateCourse;
  } catch (error) {
    console.error(error.message)
  }
}

async function deleteCourse(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`,{
      method: "DELETE"
    });
    if (!response.ok) throw new Error(`Failed to delete course: ${response.statusText}`);
    const result = await response.json();
    console.log(result.message);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

/*let courses = [];

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

// test
 */