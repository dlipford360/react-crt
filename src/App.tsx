// src/App.tsx

import UserDisplay from "./components/UserDisplay"
import TelevisionDisplay from "./components/TelevisionDisplay"
import { useQuery } from "urql"
import { GetUsersDocument, GetTelevisionsDocument } from "./graphql/generated"

function App() {
  const [results] = useQuery({
    query: GetUsersDocument,
  })
  const [tvresults] = useQuery({
    query: GetTelevisionsDocument,
  })

  return (
    <div>
      {/* <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
        {results.data?.users.map((user, i) => (
          <UserDisplay user={user} key={i} />
        ))}
      </div> */}
      <div className="flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
        {tvresults.data?.televisions.map((television, i) => (
          <TelevisionDisplay television={television} key={i} />
        ))}
      </div>
    </div>
  )
}

export default App
