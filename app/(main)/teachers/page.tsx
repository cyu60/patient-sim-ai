import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link"
//import { Link } from "lucide-react";

const classes = [
  {
    name: "Internal Medicine I",
    timePeriod: "Fall 2024",
    students: 7,
    cases: 3,
  },
  {
    name: "Internal Medicine II",
    timePeriod: "Fall 2023",
    students: 5,
    cases: 0,
  },
  { name: "Surgery", timePeriod: "Fall 2023", students: 0, cases: 0 },
  { name: "Pediatrics", timePeriod: "Fall 2023", students: 0, cases: 0 },
  {
    name: "Clinical Semiotics I",
    timePeriod: "Fall 2023",
    students: 0,
    cases: 0,
  },
];

const TeacherPage = () => {
  // need to make sure that students can't access it here?
  return (
    <div>
      <Table>
        <TableCaption>Class Information for Medical Courses</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">CLASS NAME</TableHead>
            <TableHead className="w-[100px]">TIME PERIOD</TableHead>
            <TableHead className="w-[100px]"># STUDENTS</TableHead>
            <TableHead className="w-[80px]"># CASES</TableHead>
            <TableHead className="w-[120px]">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((cls) => (
            <TableRow key={cls.name}>
              <TableCell>{cls.name}</TableCell>
              <TableCell>{cls.timePeriod}</TableCell>
              <TableCell>{cls.students}</TableCell>
              <TableCell>{cls.cases}</TableCell>
              <TableCell>
                <button>View Details</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeacherPage;
