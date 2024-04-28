"use client";

import ChatHeader from "@/components/ChatHeader";
import Chat from "@/components/chat/chat";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { cases } from "@/lib/constants";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
// import { useAuth } from "@/hooks/useAuth";

// Have the individual cases with their chat context
const Cases = () => {
  const { user, isLoaded } = useUser();
  const param = useParams();
  const { caseId } = useParams();
  // console.log("caseId", param);

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  // const caseId = "1";
  const userName = user?.fullName || "User";
  const currentCase = cases.find((e) => e.id.toString() === caseId);

  console.log(userName, user);
  console.log(currentCase);
  if (!currentCase) {
    // Handle loading state however you like
    return null;
  }
  return (
    <div>
      {/* <h1> Cases</h1> */}
      <ChatHeader patient={currentCase}></ChatHeader>
      {/* Include video? */}
      <div className="flex flex-row">
        <FeedWrapper>
          <Chat userName={userName} userId={""} currentCase={currentCase} />
        </FeedWrapper>
        <StickyWrapper>
          <video
            src="/chatVideo.mp4" // Path relative to the public directory
            controls // Add controls so the user can manage video playback
            autoPlay // Auto-play the video (might not work without muted due to browser policies)
            loop // Loop the video
            muted // Mute the video (remove if sound is needed)
            // className="w-1/2 h-auto"
            // style={{ width: "100%", height: "auto" }} // Styling to make video responsive
          >
            Your browser does not support the video tag.
          </video>
        </StickyWrapper>
      </div>
    </div>
  );
};

// return (
//   <div>
//     <h1> Cases</h1>
//     <Chat userName={"Chinat"} userId={""} roomId={""} />
//   </div>
// );

export default Cases;
