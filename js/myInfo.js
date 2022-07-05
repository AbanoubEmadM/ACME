
let infoData = {
    file: localStorage.getItem("file"),
    location: localStorage.getItem("location"),
    bedroom: localStorage.getItem("bedroom"),
    living: localStorage.getItem("living"),
    toilets: localStorage.getItem("toilets"),
    features: localStorage.getItem("features"),
    name: localStorage.getItem("name"),
    tel: localStorage.getItem("tel"),
    email: localStorage.getItem("email")
}
console.log(infoData.bedroom);
let infoResults = `
    <div class="your-info">
        <ul>
            <li>
                Image: <img src='../imgs/big-message.png' id="result-img">
            </li>
            <li>Location: ${infoData.location}</li>
            <li>Number of Bedrooms: ${infoData.bedroom}</li>
            <li>Number of Living rooms${infoData.living}</li>
            <li>Number of Toilets: ${infoData.toilets}</li>
            <li>Features: ${infoData.features}</li>
            <li>Name: ${infoData.name}</li>
            <li>Telphone: ${infoData.tel}</li>
            <li>Email: ${infoData.email}</li>
        </ul>
    </div>
    `
    let result = document.getElementById("result-info")
    result.innerHTML = infoResults

    // document.getElementById("result-img").src = URL.createObjectURL()

