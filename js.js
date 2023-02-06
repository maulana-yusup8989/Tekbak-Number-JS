let ask = true
while (ask) {

    //Tentukan maximal number
    let max = parseInt(prompt('Input max number:'))
    while (!max) {
        //Tentukan maximal number ulang
        max = parseInt(prompt('Input max number:'))
    }

    //Generate number acak
    const targetNum = parseInt(Math.floor(Math.random() * max)) + 1

    //Menangkap inputan user
    let usrGuess = parseInt(prompt('try to guess the number'))

    //Cek ulang jika tebakan salah
    while (parseInt(usrGuess) !== targetNum) {
        //Cek Kondisis
        if (usrGuess > targetNum)
            usrGuess = parseInt(prompt('to High try again'))
        else usrGuess = parseInt(prompt('to Low again'))
    }

    //Jika benar tampilkan alert
    alert('Congrats!! you guessed right')

    //Jalankan aplikasi lagi?
    ask = confirm('again?')
}


