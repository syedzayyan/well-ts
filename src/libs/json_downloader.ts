export default function jsonDownloader(jsonData: object, title: string){
    const a = document.createElement("a");
    const file = new Blob([JSON.stringify(jsonData)], { type: "text/plain" });
    a.href = URL.createObjectURL(file);
    a.download = `${title}.json`;
    a.click();
}