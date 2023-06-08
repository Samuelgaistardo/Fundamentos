function palindromo() {
    const text = document.getElementById("texte").value
    const smallTexte = text.toLowerCase().replace(/[\W_]/g,"")
    const reverseText = smallTexte.split("").reverse().join("")

    let answer = ""
    if (reverseText === smallTexte) answer = "Es palindromo"
    else answer = "No es palindromo"

    document.getElementById("answer").innerHTML = text ? answer : ""
}