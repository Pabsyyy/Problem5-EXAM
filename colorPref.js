function colorList() {
    let colorList = [];

    for (let i = 0; i < 1; i++) {
        let userColor = prompt("Enter Your Three Favorite Colors.");
        colorList.push(userColor);
        alert("Your Favorite Colors are: " + colorList);
    }
    let additionalColor = prompt("Add another color you like.");
    colorList.push(additionalColor);
    alert("Your New Colors Are: " + colorList)
}