import { signIn, useSession } from "next-auth/react";

import Layout from "components/layout";

export default function SignInPage() {
  const { data: session } = useSession();

  return (
    <Layout>
      <h1>Custom signin page</h1>
      {!session ? (
        <button onClick={() => signIn(`keycloak`)}>Sign in Keycloak</button>
      ) : (
        <span>You are signed in</span>
      )}
    </Layout>
  );
}
