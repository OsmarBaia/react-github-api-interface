import { useState } from 'react'
import Layout from "./components/layout/layout";
import NoSearch from "./components/no-search/no-search";
import Profile from "./components/profile/profile";
import Repositories from "./components/repositories/repositoiries";

import useGithub from "./hooks/useGithub";

function App() {
  const { githubState } = useGithub();

  return (
    <>
      <Layout>
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (
              <p>Loading</p>
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
        ) : (
          <NoSearch />
        )}
      </Layout>
    </>
  )
}

export default App
