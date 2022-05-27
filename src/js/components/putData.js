export default async function putData(url, data) {
    const rawResponse = await fetch(url, {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
    console.log(content);
}