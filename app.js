function check_string(str){
    let conclude;
    let parse_result = parseFloat(str);
    if (str==parse_result){
        return true;
    }else {
        return false;
    }
}

let input_str = prompt('Nhap vao ky tu');
let result = check_string(input_str);
alert(result);