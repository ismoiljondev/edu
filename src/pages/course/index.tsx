import CourseCards from "@/components/CourseCards/CourseCards";
import React from "react";
const Course: React.FC = () => {
  return (
    <div>
      <CourseCards
        img="/media/first.webp"
        price={25}
        title="Computer Engineering"
        desc="
One make creepeth man bearing their one firmament won't fowl
meat over sea"
buttonText="design"
userImage="/media/user.webp"
userName="Cameron"

      />
    </div>
  );
};

export default Course;
