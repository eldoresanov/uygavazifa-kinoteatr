//1

// let urinish = 0
// do {
// 	let code = Number(prompt('enter code'))
// 	switch (code) {
// 		case 2505:
// 			alert('ochildi')
// 			urinish = 3;
// 			break;
	
// 		default:
// 			alert('xato')
// 			urinish++;
// 			break;
// 	}
// } while (urinish < 3);


//2

// let day = Number(prompt('day'))
// switch (day) {
// 	case 1:
// 		alert('dushanba')
// 	break;
// 	case 2:
// 		alert('seshanba')
// 	break;
// 	case 3:
// 		alert('chorshanba')
// 	break;
// 	case 4:
// 		alert('payshanba')
// 	break;
// 	case 5:
// 		alert('juma')
// 	break;
// 	case 6:
// 		alert('shanba')
// 	break;
// 	case 7:
// 		alert('yakshanba')
// 	break;

// 3

// 	default:
// 		alert('xato')
// 		break;
// }

//3

// let yulduzcha = 1 
// let y = '*'
// while (yulduzcha < 4) {
// 	switch(yulduzcha){
// 		case 1:
// 			console.log("*");
// 			break;
// 			case 2:
// 				console.log('**');
// 				break;
// 				case 3:2
// 					console.log('***');
// 					break;
// 	}
// 	yulduzcha++;
// }
let yosh = Number(prompt('yoshingiz'))
let pul = Number(prompt('pul'))
let teatr = 0

if (yosh >= 18 && pul >= 30) {
	alert('siz kinoteatrga   kirishingiz mumkin')
	let kino = Number(prompt('filmni tanlang 1-predator,2-alien,3-shazam,4-qora adam,5-tor'))
	switch (kino) {
		case 1:
			alert('siz predator filmini tanladingiz')
		break;
		case 2:
			alert('siz alien filmini tanladingiz')
		break;
		case 3:
			alert('siz shazam filmini tanladingiz')
		break;
		case 4:
			alert('siz qora adam filmini tanladingiz')
		break;
		case 5:
			alert('siz tor filmini tanladingiz')
		break;
	
		default:
			alert("bu film yo'q")
			break;
	}
}
else{
	alert('siz kinoteatrga kirishingiz mumkin emas')
	let tanlov = Number(prompt("tanlang. 1-indamay ketish. 2-chiptachini o'ldirish. 3-pul o'g'irlash"))
	switch (tanlov) {
		case 1:
			alert('siz indamay ketdingiz')
		break;
		case 2:
			alert("siz chiptachini o'ldirdingiz")
			alert("odam o'ldirishda ayblanib qamaldingiz")
		break;
		case 3:
			alert("siz pul o'g'irladingiz")
			alert('siz kinoteatrga kirishingiz mumkin')
			alert("puli o'g'irlangan odam politsiyaga arz qildi va siz qamaldingiz")
		break;
	
		default:
			alert("endi siz kino ko'ra olmaysiz")
			break;
	}
}