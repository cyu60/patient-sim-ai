// const patient = {
//   name: "Ricardo Cooper",
//   email: "ricardo.cooper@example.com",
//   avatar:
//     "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
//   backgroundImage:
//     "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//   fields: [
//     ["Phone", "(555) 123-4567"],
//     ["Email", "ricardocooper@example.com"],
//     ["Title", "Senior Front-End Developer"],
//     ["Team", "Product Development"],
//     ["Location", "San Francisco"],
//     ["Sits", "Oasis, 4th floor"],
//     ["Salary", "$145,000"],
//     ["Birthday", "June 8, 1990"],
//   ],
// };

import { StudentClinicalCase } from "@/lib/constants";
import { DialogCloseButton } from "./chat/DialogCloseButton";
import Link from "next/link";

type Props = {
  patient: StudentClinicalCase;
};

const ChatHeader = ({ patient }: Props) => {
  return (
    <div>
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={
            "https://i0.wp.com/www.elevatedhealth.md/wp-content/uploads/2019/09/elevatedheathhb1.jpg?fit=524%2C524&ssl=1"
          }
          //   src={patient.backgroundImage}
          alt=""
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={patient.patientAvatar}
              alt=""
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {patient.patientName}
              </h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                // Should perform a page refresh on click -- in the future, it should be clearing out the chat -- thus starting a new chat thread
                href={"http://localhost:3000/"}
                target="_blank"
              >
                {/* <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                <span>Live Chat</span>
              </Link>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                // Should perform a page refresh on click -- in the future, it should be clearing out the chat -- thus starting a new chat thread
                onClick={() => window.location.reload()}
              >
                {/* <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                <span>Start over</span>
              </button>
              <DialogCloseButton></DialogCloseButton>
              {/* <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                // onClick should open up a diagnosis modal
                onClick={() => console.log("Diagnosis modal")}
              > */}
              {/* <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              {/* <span>Diagnosis</span>
              </button> */}
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {patient.patientName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
