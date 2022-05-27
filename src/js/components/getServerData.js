export default async function getServerData(url) {
    return await fetch(url)
                 .then(res => res.json())
                 .then(data => {
                     console.log(data);
                     return data;
                 });
}