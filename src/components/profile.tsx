"use client";

import React from "react";
import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();
  return (
    <>
      {session.data?.user ? (
        <div>Client: User signed in {JSON.stringify(session.data.user)}</div>
      ) : (
        <div>Client: User NOT signed in</div>
      )}
    </>
  );
};

export default Profile;
