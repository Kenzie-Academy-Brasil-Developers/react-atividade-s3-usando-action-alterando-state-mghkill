import { useSelector } from "react-redux";

const Student = () => {
  const studentStore = useSelector((store) => store.student);
  return <div>Student: {studentStore}</div>;
};
export default Student;
