

export async function getStaticProps(context: any) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://dev-but.eu.ngrok.io/api/teams')
  const { data } = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      teams: data,
    },
    // revalidate: 10
  }
}

export default function Home({ teams }: any) {

  return (
    <div>
      {teams.length > 0 && teams.map((team: any) => (
        <ul key={team.id}>
          <li>
            {team.id}
          </li>
          <li>
            {team.attributes.name}
          </li>
          <li>
            {team.attributes.description}
          </li>
        </ul>
      ))}
    </div>
  )
}
