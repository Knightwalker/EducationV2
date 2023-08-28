process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    let lines = parseInt(readLine());
    for(let i = 0; i < lines; i++){
        let n = parseInt(readLine());
        let sum = 0;
        for (let j = 1; j < n; j++) {
            if (j % 3 === 0) {
                sum += j;
            } else if (j % 5 === 0) {
                sum += j;
            }    
        }
        console.log(sum);
    }
}