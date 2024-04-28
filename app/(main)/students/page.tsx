import ListCases from "@/components/ListCases";
import Stats from "@/components/StudentStats";

const StudentPage = () => {
  return (
    <div>
      <div className="p-6 space-y-10">
        <Stats></Stats>
        <ListCases></ListCases>
      </div>
    </div>
  );
};

export default StudentPage;
