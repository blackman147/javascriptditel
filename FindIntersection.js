function findIntersection() {
    const elements = ["1, 3, 4, 7, 15", "1, 2, 4, 13, 15"]
    const firstElement = elements[0].split(", ");
    const secondElement = elements[1].split(", ");
    var commonElement = "";

    for (let i = 0; i < firstElement.length; i++) {
        for (let x = 0; x < secondElement.length; x++) {
             if (firstElement[i] == secondElement[x]) {
                 commonElement += firstElement[i] + ", ";  
             }
            
        }
    }
    if (commonElement == 0) {
        return "false";
    }
    return commonElement;
}

console.log(findIntersection());

