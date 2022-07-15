//Bài tập 5: In ra số nguyên tố
/*
input: số nhập từ user
output: In ra số nguyên tố từ 1 đến số user nhập
process: 
       1. Tạo biến result để lưu giá trị
       2. Vòng lặp đầu tiên để chạy qua số từ i = 2 đến giá trị user nhập (do 1 ko phải là snt nên i bắt đầu từ 2)
       3. Thêm vòng lặp thứ 2 để kiểm tra giá trị i hiện tại có phải là snt hay ko? j = 2; j <= căn i ; j++
       4. Nếu i % j = 0 => i ko phải là snt, ngược lại result += i
       5. In result ra màn hình
*/

document.getElementById('btn5').onclick = function(){
    var number = +document.getElementById('inputBT5').value;
    var result = '';
    //Lặp qua giá trị từ 2 đến number
    for (var i = 2; i <= number; i++){
        var checkSNT = true;
        //Check SNT
        for (var j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                checkSNT = false;
                break;
            }
            
        };
        if (checkSNT){
            result += i + ' ';
        }
    }
   document.getElementById('resBT5').innerHTML = result;
}
