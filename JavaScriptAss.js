var Income = 0;
var taxPaid = 0;



if (Income < 16000) {
    taxPaid = 0;
} else if (Income < 52501) {
    taxPaid = (Income - 16000) * 0.1;
} else if (Income < 13001) {
    taxPaid = (Income - 52500) * 0.16;
} else if (Income < 184500) {
    taxPaid = (Income - 113000) * 0.24;
} else {
    taxPaid = (Income - 184500) * 0.36;
}