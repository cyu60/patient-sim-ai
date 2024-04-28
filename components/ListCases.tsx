import { cases } from "@/lib/constants";

export default function ListCases() {
  return (
    <ul
      //   age="list"
      className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
      {cases.map((patient) => (
        <li
          key={patient.id}
          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
        >
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={patient.patientAvatar}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a href={"/cases/" + patient.id}>
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {patient.patientName}
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                <div
                  //   id={`${patient.gender}`}
                  className="relative truncate hover:underline"
                >
                  {patient.gender}
                </div>
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {patient.age} years old
              </p>
              {patient.completed ? (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-orange-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Todo</p>
                </div>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Completed</p>
                </div>
              )}
            </div>
            {/* <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" /> */}
          </div>
        </li>
      ))}
    </ul>
  );
}
