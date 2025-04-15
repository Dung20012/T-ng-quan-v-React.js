import React from 'react';

const ListCourse = () => {
  const courses = [
    { id: 1, name: "HTML & CSS"},
    { id: 2, name: "JavaScript Cơ bản"},
    { id: 3, name: "ReactJS"},
  ];

  return (
    <div>
      <h2>Danh sách khóa học</h2>
      <h2>
        {courses.map(course => (
          <h2 key={course.id}>
            <a>{course.name}</a>{course.time}
          </h2>
        ))}
      </h2>
    </div>
  );
};

export default ListCourse;
