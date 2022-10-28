
async function getData() {
    const res = await fetch('https://dev-but.eu.ngrok.io/api/teams');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (res.status === 200) {

        // console.log('res', res)
        return res.json();
    }
}

export default async function Home() {
    const { data } = await getData();

    console.log('data', data)

    return (
        <div>
            {data.length > 0 && data.map((team: any) => (
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
