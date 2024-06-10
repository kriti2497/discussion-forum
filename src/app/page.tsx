import * as actions from "@/actions";

import Profile from "@/components/profile";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <form action={actions.signIn}>
        <button type="submit">Sign in</button>
      </form>
      <form action={actions.signOut}>
        <button type="submit">Sign out</button>
      </form>
      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed out</div>
      )}
      <Profile />
    </>
  );
}
